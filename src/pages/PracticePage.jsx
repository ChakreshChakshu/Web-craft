import React, { useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { exercises } from '../content/exercises/exercisesData';
import { quizzes } from '../content/quizzes/quizzesData';
import { ExerciseEditor } from '../components/exercises/ExerciseEditor';
import { QuizRunner } from '../components/quizzes/QuizRunner';
import { useProgress } from '../hooks/useProgress';
import { 
  CheckSquare, 
  HelpCircle, 
  Trophy, 
  CheckCircle2, 
  ChevronRight
} from 'lucide-react';

export const PracticePage = () => {
  const { state } = useProgress();
  const [activeSection, setActiveSection] = useState('exercises');
  const [selectedExerciseId, setSelectedExerciseId] = useState(exercises[0].id);
  const [selectedQuizId, setSelectedQuizId] = useState(quizzes[0].id);

  const currentExercise = exercises.find((e) => e.id === selectedExerciseId) || exercises[0];
  const currentQuiz = quizzes.find((q) => q.id === selectedQuizId) || quizzes[0];

  const completedExercisesCount = state.completedExercises.length;
  const completedQuizzesCount = Object.values(state.quizResults).filter((r) => r.passed).length;

  return (
    <PageLayout>
      <div className="space-y-8 max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Practice Exercises &amp; Assessments
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Test your HTML mastery through real structural validation and knowledge check assessments.
            </p>
          </div>

          {/* Section Switcher Tabs */}
          <div className="flex items-center gap-1 bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveSection('exercises')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeSection === 'exercises'
                  ? 'bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Coding Exercises ({completedExercisesCount}/{exercises.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSection('quizzes')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeSection === 'quizzes'
                  ? 'bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Module Quizzes ({completedQuizzesCount}/{quizzes.length})</span>
            </button>
          </div>
        </div>

        {/* Content based on Active Section */}
        {activeSection === 'exercises' ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            
            {/* Exercises selection menu (Left 1 col) */}
            <div className="lg:col-span-1 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1 mb-2">
                Available Challenges
              </span>
              {exercises.map((ex) => {
                const isPassed = state.completedExercises.includes(ex.id);
                const isSelected = ex.id === currentExercise.id;

                return (
                  <button
                    key={ex.id}
                    type="button"
                    onClick={() => setSelectedExerciseId(ex.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between gap-2 ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-semibold shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {isPassed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 flex-shrink-0" />
                      )}
                      <span className="truncate">{ex.title}</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono">
                      {ex.difficulty}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Exercise workbench (Right 3 cols) */}
            <div className="lg:col-span-3">
              <ExerciseEditor key={currentExercise.id} exercise={currentExercise} />
            </div>

          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            
            {/* Quizzes selection menu (Left 1 col) */}
            <div className="lg:col-span-1 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1 mb-2">
                Module Assessments
              </span>
              {quizzes.map((q) => {
                const res = state.quizResults[q.id];
                const isSelected = q.id === currentQuiz.id;

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setSelectedQuizId(q.id)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all space-y-1 ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-semibold shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate font-semibold">{q.title}</span>
                      {res?.passed && (
                        <Trophy className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      {q.questions.length} questions • Pass {q.passingScorePercent}%
                    </div>
                    {res && (
                      <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                        Best Score: {res.percentage}%
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quiz workbench (Right 3 cols) */}
            <div className="lg:col-span-3">
              <QuizRunner key={currentQuiz.id} quiz={currentQuiz} />
            </div>

          </div>
        )}

      </div>
    </PageLayout>
  );
};
