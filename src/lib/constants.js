export const STORAGE_KEY_PROGRESS = 'webdev_lab_learning_progress_v1';

export const INITIAL_HTML_PLAYGROUND = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebCraft Live Playground</title>
</head>
<body>
  <div class="welcome-card">
    <h1>Welcome to WebCraft Playground</h1>
    <p>Experiment freely with semantic HTML5 and modern CSS3 in this sandboxed live editor.</p>
    <button class="cta-btn">Start Exploring</button>
  </div>
</body>
</html>`;

export const INITIAL_CSS_PLAYGROUND = `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.welcome-card {
  background: white;
  padding: 36px;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 480px;
  text-align: center;
}

h1 {
  color: #1e293b;
  font-size: 24px;
  margin-top: 0;
}

p {
  color: #64748b;
  line-height: 1.6;
}

.cta-btn {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

.cta-btn:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}`;

export const CSS_UNLOCK_REQUIRED_PERCENTAGE = 70;

export const CSS_UNLOCK_REQUIREMENT_DESCRIPTION = 
  'Unlock by completing at least 70% of the HTML course.';

export const PLAYGROUND_PRESETS = [
  {
    id: 'starter',
    name: 'Starter Template',
    description: 'Basic card with button & gradients',
    html: INITIAL_HTML_PLAYGROUND,
    css: INITIAL_CSS_PLAYGROUND
  },
  {
    id: 'flexbox-cards',
    name: 'Flexbox Pricing Cards',
    description: '3-card responsive flex container with hover effects',
    html: `<div class="pricing-container">
  <div class="pricing-card">
    <h3>Starter</h3>
    <div class="price">$0<span>/mo</span></div>
    <ul>
      <li>HTML5 Fundamentals</li>
      <li>Basic CSS Styling</li>
      <li>Community Support</li>
    </ul>
    <button class="plan-btn">Enroll Free</button>
  </div>

  <div class="pricing-card featured">
    <div class="badge">Most Popular</div>
    <h3>Developer Pro</h3>
    <div class="price">$19<span>/mo</span></div>
    <ul>
      <li>Flexbox & CSS Grid</li>
      <li>Responsive Systems</li>
      <li>Certificate of Mastery</li>
    </ul>
    <button class="plan-btn featured-btn">Get Started</button>
  </div>

  <div class="pricing-card">
    <h3>Enterprise</h3>
    <div class="price">$49<span>/mo</span></div>
    <ul>
      <li>Team Workspaces</li>
      <li>AST Automated Grading</li>
      <li>Priority Mentorship</li>
    </ul>
    <button class="plan-btn">Contact Sales</button>
  </div>
</div>`,
    css: `body {
  font-family: system-ui, sans-serif;
  background-color: #0f172a;
  color: #f8fafc;
  padding: 40px 20px;
}

.pricing-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
}

.pricing-card {
  background-color: #1e293b;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 32px;
  flex: 1 1 280px;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.2s, border-color 0.2s;
}

.pricing-card:hover {
  transform: translateY(-4px);
  border-color: #3b82f6;
}

.pricing-card.featured {
  border-color: #3b82f6;
  box-shadow: 0 0 25px -5px rgba(59, 130, 246, 0.4);
}

.badge {
  position: absolute;
  top: -12px;
  right: 24px;
  background: #3b82f6;
  color: white;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 12px;
}

.price {
  font-size: 36px;
  font-weight: 800;
  margin: 16px 0;
  color: white;
}

.price span {
  font-size: 14px;
  color: #94a3b8;
  font-weight: 400;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  flex-grow: 1;
}

li {
  padding: 8px 0;
  border-bottom: 1px solid #334155;
  color: #cbd5e1;
  font-size: 14px;
}

.plan-btn {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #475569;
  background: transparent;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.plan-btn:hover {
  background: #334155;
}

.featured-btn {
  background: #3b82f6;
  border-color: #3b82f6;
}

.featured-btn:hover {
  background: #2563eb;
}`
  },
  {
    id: 'css-grid',
    name: 'CSS Grid Portfolio Gallery',
    description: 'Fluid 2D Grid with auto-fit & responsive images',
    html: `<div class="portfolio-wrapper">
  <header class="portfolio-header">
    <h1>Creative Showcase</h1>
    <p>A responsive layout engineered purely with CSS Grid auto-fit.</p>
  </header>

  <div class="portfolio-grid">
    <div class="grid-card">
      <div class="card-img img-1"></div>
      <div class="card-body">
        <h4>Design Systems</h4>
        <p>Scalable CSS tokens & component hierarchy.</p>
      </div>
    </div>
    <div class="grid-card">
      <div class="card-img img-2"></div>
      <div class="card-body">
        <h4>Responsive UI</h4>
        <p>Mobile-first fluid layouts with clamp() units.</p>
      </div>
    </div>
    <div class="grid-card">
      <div class="card-img img-3"></div>
      <div class="card-body">
        <h4>Micro-Animations</h4>
        <p>Silky transforms with cubic-bezier easing.</p>
      </div>
    </div>
    <div class="grid-card">
      <div class="card-img img-4"></div>
      <div class="card-body">
        <h4>Semantic Web</h4>
        <p>Accessible landmarks and ARIA structures.</p>
      </div>
    </div>
  </div>
</div>`,
    css: `body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #f8fafc;
  margin: 0;
  padding: 32px 16px;
  color: #1e293b;
}

.portfolio-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 32px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.grid-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  transition: transform 0.2s, box-shadow 0.2s;
}

.grid-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}

.card-img {
  height: 140px;
  background-size: cover;
}

.img-1 { background: linear-gradient(135deg, #667eea, #764ba2); }
.img-2 { background: linear-gradient(135deg, #2af598, #009efd); }
.img-3 { background: linear-gradient(135deg, #ff0844, #ffb199); }
.img-4 { background: linear-gradient(135deg, #f857a6, #ff5858); }

.card-body {
  padding: 16px;
}

h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
}

p {
  margin: 0;
  font-size: 13px;
  color: #64748b;
  line-height: 1.5;
}`
  },
  {
    id: 'responsive-navbar',
    name: 'Responsive Nav Header',
    description: 'Sticky header with logo, links, and media query breakpoint',
    html: `<header class="site-header">
  <div class="nav-container">
    <a href="#" class="brand-logo">
      <span class="logo-dot"></span> WebCraft
    </a>
    
    <nav class="main-nav">
      <a href="#courses" class="nav-link active">Courses</a>
      <a href="#playground" class="nav-link">Playground</a>
      <a href="#practice" class="nav-link">Practice</a>
      <a href="#account" class="btn-primary">Sign In</a>
    </nav>
  </div>
</header>

<main class="page-content">
  <h2>Resize your browser or toggle device frames</h2>
  <p>Notice how the navigation seamlessly transforms between desktop and mobile viewport sizes.</p>
</main>`,
    css: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background-color: #f1f5f9;
  color: #0f172a;
}

.site-header {
  position: sticky;
  top: 0;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 12px 24px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  font-size: 18px;
  color: #0f172a;
  text-decoration: none;
}

.logo-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #2563eb;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav-link {
  color: #64748b;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover, .nav-link.active {
  color: #2563eb;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
  padding: 6px 14px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
}

.page-content {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
  text-align: center;
}

/* Responsive breakpoint */
@media (max-width: 640px) {
  .nav-container {
    flex-direction: column;
    gap: 12px;
  }
  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
}`
  }
];
