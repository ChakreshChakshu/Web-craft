import React from 'react';
import { CodeSnippetBox } from './CodeSnippetBox';
import { PracticeTaskBox } from './PracticeTaskBox';
import { 
  Clock, 
  Target, 
  Lightbulb, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Layers, 
  Globe,
  Terminal,
  Cpu,
  BookOpenCheck,
  Check,
  X,
  Sparkles,
  Table
} from 'lucide-react';
import { PlaygroundLayout } from '../playground/PlaygroundLayout';

export const LessonContent = ({ lesson, module }) => {
  return (
    <article className="max-w-4xl mx-auto py-2 space-y-10">
      
      {/* Lesson Header */}
      <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {module && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
              Module {module.moduleNumber}: {module.title}
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            {lesson.estimatedMinutes} min read
          </span>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
            Lesson #{lesson.lessonNumber}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {lesson.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          {lesson.summary}
        </p>

        {/* Learning Objectives */}
        {lesson.learningObjectives && lesson.learningObjectives.length > 0 && (
          <div 
            id="objectives" 
            className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5">
              <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>What You Will Learn</span>
            </div>
            <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
              {lesson.learningObjectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Deep Conceptual Breakdown: Why It Exists & How It Works */}
      {(lesson.whyItExists || lesson.howItWorks) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lesson.whyItExists && (
            <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 space-y-2.5">
              <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-bold text-sm">
                <BookOpenCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Why Does It Exist?</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {lesson.whyItExists}
              </p>
            </div>
          )}

          {lesson.howItWorks && (
            <div className="p-5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-2.5">
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-bold text-sm">
                <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>How Browsers Process It</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {lesson.howItWorks}
              </p>
            </div>
          )}
        </div>
      )}

      {/* When To Use vs When NOT To Use */}
      {(lesson.whenToUse || lesson.whenNotToUse) && (
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block" />
            Decision Guide: When to Use & When to Avoid
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.whenToUse && lesson.whenToUse.length > 0 && (
              <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>Use in these scenarios:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc">
                  {lesson.whenToUse.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {lesson.whenNotToUse && lesson.whenNotToUse.length > 0 && (
              <div className="p-4 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/60 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 dark:text-red-400">
                  <X className="w-4 h-4" />
                  <span>Avoid or use alternatives when:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc">
                  {lesson.whenNotToUse.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Attributes & Configuration Reference Table */}
      {lesson.attributesTable && lesson.attributesTable.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block" />
            Attributes & Configurations
          </h2>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-semibold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">Attribute</th>
                    <th className="py-2.5 px-3">Type</th>
                    <th className="py-2.5 px-3">Role & Purpose</th>
                    <th className="py-2.5 px-3">Example Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 font-mono">
                  {lesson.attributesTable.map((attr, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 font-sans">
                      <td className="py-2.5 px-3 font-mono font-bold text-blue-600 dark:text-blue-400">
                        {attr.name}
                        {attr.required && (
                          <span className="ml-1 text-[10px] text-red-500 uppercase font-mono">
                            *req
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 font-mono text-slate-500 text-[11px]">
                        {attr.type || 'string'}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600 dark:text-slate-400 font-sans">
                        {attr.description}
                      </td>
                      <td className="py-2.5 px-3 font-mono text-[11px] text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-850">
                        <code>{attr.example}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Comparisons: Right vs Wrong */}
      {lesson.comparisons && lesson.comparisons.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-5 bg-blue-600 rounded-full inline-block" />
            Comparison: Correct Implementation vs Anti-Pattern
          </h2>

          <div className="space-y-4">
            {lesson.comparisons.map((comp, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm bg-white dark:bg-slate-900">
                {comp.title && (
                  <div className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300">
                    {comp.title}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
                  {/* Correct */}
                  <div className="p-4 space-y-2 bg-emerald-50/30 dark:bg-emerald-950/10">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Recommended (Semantic & Standard)</span>
                    </div>
                    <pre className="p-3 rounded bg-slate-950 text-emerald-300 text-xs font-mono overflow-x-auto">
                      <code>{comp.correct}</code>
                    </pre>
                  </div>

                  {/* Incorrect */}
                  <div className="p-4 space-y-2 bg-red-50/30 dark:bg-red-950/10">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 dark:text-red-400">
                      <XCircle className="w-4 h-4" />
                      <span>Avoid (Anti-Pattern)</span>
                    </div>
                    <pre className="p-3 rounded bg-slate-950 text-red-300 text-xs font-mono overflow-x-auto">
                      <code>{comp.incorrect}</code>
                    </pre>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  <strong className="font-semibold text-slate-800 dark:text-slate-200">Explanation: </strong>
                  {comp.explanation}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Lesson Sections */}
      <div className="space-y-12">
        {lesson.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block" />
              {section.heading}
            </h2>

            {/* Prose Content */}
            <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {section.content}
            </div>

            {/* Syntax block if provided */}
            {section.syntax && (
              <div className="my-4 p-4 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-500" />
                  <span>Syntax Pattern</span>
                </div>
                <div className="text-blue-900 dark:text-blue-300 whitespace-pre-wrap">
                  {section.syntax}
                </div>
              </div>
            )}

            {/* Code Snippet */}
            {section.codeSnippet && (
              <CodeSnippetBox
                language={section.codeSnippet.language}
                code={section.codeSnippet.code}
                title={section.codeSnippet.title}
                description={section.codeSnippet.description}
              />
            )}

            {/* Expected Output Note */}
            {section.expectedOutputNote && (
              <div className="p-3.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="font-semibold block mb-0.5">Expected Output:</strong>
                  {section.expectedOutputNote}
                </div>
              </div>
            )}

            {/* Real World Usage */}
            {section.realWorldUsage && (
              <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">
                    Real-World Context:
                  </strong>
                  <span className="text-slate-600 dark:text-slate-400">
                    {section.realWorldUsage}
                  </span>
                </div>
              </div>
            )}

            {/* Best practices & common mistakes grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {section.bestPractices && section.bestPractices.length > 0 && (
                <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Best Practices</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc">
                    {section.bestPractices.map((bp, idx) => (
                      <li key={idx}>{bp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.commonMistakes && section.commonMistakes.length > 0 && (
                <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Common Pitfalls</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc">
                    {section.commonMistakes.map((cm, idx) => (
                      <li key={idx}>{cm}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </section>
        ))}
      </div>

      {/* Embedded Interactive Sandbox Demonstration */}
      {lesson.interactiveExample && (
        <section id="interactive-playground" className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Interactive Demonstration
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Try It Live
              </h2>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {lesson.interactiveExample.explanation}
          </p>
          <PlaygroundLayout
            initialHtml={lesson.interactiveExample.html}
            initialCss={lesson.interactiveExample.css}
            minEditorHeight="280px"
          />
        </section>
      )}

      {/* Embedded Hands-on Practice Task */}
      {lesson.practiceTask && (
        <section id="practice-task" className="pt-2">
          <PracticeTaskBox
            task={lesson.practiceTask}
            courseId={lesson.courseId}
          />
        </section>
      )}

      {/* Key Takeaways */}
      {lesson.keyTakeaways && (
        <section id="key-takeaways" className="p-6 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-blue-400">
            <Lightbulb className="w-4 h-4" />
            <span>Key Lesson Takeaways</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            {lesson.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

    </article>
  );
};
