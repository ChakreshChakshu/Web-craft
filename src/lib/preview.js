export function generatePreviewDocument(html, css, applyCss) {
  // If user provided a full HTML document with <!DOCTYPE or <html, inject style tag into <head>
  const hasHtmlTag = /<html[\s>]/i.test(html);
  const hasHeadTag = /<head[\s>]/i.test(html);

  const styleTag = applyCss && css.trim()
    ? `\n<style id="student-injected-css">\n${css}\n</style>\n`
    : '';

  // Base normalization style for sandboxed iframe
  const defaultReset = `
    <style id="base-preview-reset">
      *, *::before, *::after { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: #0f172a;
        background-color: #ffffff;
        line-height: 1.5;
        word-break: break-word;
      }
    </style>
  `;

  // Safe error interceptor script that forwards runtime errors safely
  const errorBridgeScript = `
    <script>
      window.onerror = function(msg, url, line) {
        try {
          window.parent.postMessage({ type: 'PREVIEW_ERROR', message: msg, line: line }, '*');
        } catch(e) {}
        return false;
      };
      // Prevent popups and programmatic navigation away
      window.open = function() { console.warn('Popups are disabled in preview sandbox'); return null; };
    </script>
  `;

  if (hasHtmlTag) {
    if (hasHeadTag) {
      return html.replace(/<head[\s>]/i, (match) => `${match}${defaultReset}${styleTag}${errorBridgeScript}`);
    } else {
      return html.replace(/<html[\s>]/i, (match) => `${match}<head>${defaultReset}${styleTag}${errorBridgeScript}</head>`);
    }
  }

  // Fragment wrapper
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${defaultReset}
  ${styleTag}
  ${errorBridgeScript}
</head>
<body>
${html}
</body>
</html>`;
}
