import React, { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Trophy, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';

export const QuizRunner = ({ quiz, onCompleted }) => {
  const { state, recordQuizResult } = useProgress();
  const existingResult = state.quizResults[quiz.id];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [revealedExplanations, setRevealedExplanations] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const question = quiz.questions[currentQuestionIndex];
  const selectedOption = selectedAnswers[currentQuestionIndex];
  const isAnswered = selectedOption !== undefined;
  const isCorrect = selectedOption === question.correctIndex;

  const handleSelectOption = (optionIndex) => {
    if (isAnswered) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
    setRevealedExplanations((prev) => ({
      ...prev,
      [currentQuestionIndex]: true
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    let correctCount = 0;
    quiz.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / quiz.questions.length) * 100);
    const passed = percent >= quiz.passingScorePercent;

    recordQuizResult(quiz.id, correctCount, quiz.questions.length, passed);
    setIsFinished(true);
    if (onCompleted) onCompleted();
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setRevealedExplanations({});
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  };

  if (isFinished) {
    let score = 0;
    quiz.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) score++;
    });
    const percentage = Math.round((score / quiz.questions.length) * 100);
    const passed = percentage >= quiz.passingScorePercent;

    return (
      <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center max-w-xl mx-auto shadow-sm space-y-6">
        <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center ${
          passed 
            ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400' 
            : 'bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400'
        }`}>
          <Trophy className="w-8 h-8" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {passed ? 'Assessment Passed!' : 'Review and Retry'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {passed 
              ? `You scored ${percentage}% (Passing threshold: ${quiz.passingScorePercent}%)` 
              : `You scored ${percentage}%, but need ${quiz.passingScorePercent}% to pass.`}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-around text-center text-xs">
          <div>
            <span className="block text-slate-400">Correct</span>
            <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{score}</span>
          </div>
          <div>
            <span className="block text-slate-400">Questions</span>
            <span className="text-lg font-bold text-slate-700 dark:text-slate-300">{quiz.questions.length}</span>
          </div>
          <div>
            <span className="block text-slate-400">Score</span>
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{percentage}%</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleRetry}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake Assessment</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-6">
      {/* Top status */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 text-xs">
        <span className="font-semibold text-slate-500 uppercase tracking-wider">
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </span>
        {existingResult && (
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
            Previous Best: {existingResult.percentage}%
          </span>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
        />
      </div>

      {/* Question prompt */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
          {question.question}
        </h3>
        {question.codeSnippet && (
          <pre className="p-3 bg-slate-950 text-blue-200 rounded-lg text-xs font-mono overflow-x-auto">
            <code>{question.codeSnippet}</code>
          </pre>
        )}
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {question.options.map((option, idx) => {
          let btnStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-950';

          if (isAnswered) {
            if (idx === question.correctIndex) {
              btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium';
            } else if (idx === selectedOption) {
              btnStyle = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200';
            } else {
              btnStyle = 'opacity-50 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950';
            }
          }

          return (
            <button
              key={idx}
              type="button"
              disabled={isAnswered}
              onClick={() => handleSelectOption(idx)}
              className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${btnStyle}`}
            >
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center flex-shrink-0 text-[11px] font-mono mt-0.5">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1">{option}</span>
              {isAnswered && idx === question.correctIndex && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              )}
              {isAnswered && idx === selectedOption && idx !== question.correctIndex && (
                <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Immediate Explanation Banner */}
      {isAnswered && (
        <div className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1 ${
          isCorrect
            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-300'
            : 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-300'
        }`}>
          <div className="font-semibold flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Explanation:</span>
          </div>
          <p>{question.explanation}</p>
        </div>
      )}

      {/* Navigation next */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          disabled={currentQuestionIndex === 0}
          onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
          className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 disabled:opacity-30 disabled:pointer-events-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        {isAnswered && (
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition-colors"
          >
            <span>{currentQuestionIndex === quiz.questions.length - 1 ? 'Finish Assessment' : 'Next Question'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

    </div>
  );
};
