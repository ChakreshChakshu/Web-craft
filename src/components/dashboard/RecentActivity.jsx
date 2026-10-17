import React from 'react';
import { CheckCircle2, Trophy, LockOpen, Activity } from 'lucide-react';

export const RecentActivity = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return (
      <div className="p-6 rounded-2xl craft-card text-center space-y-2">
        <Activity className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto" />
        <h3 className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
          No Recent Activity
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Complete your first lesson, quiz, or exercise to track your momentum here!
        </p>
      </div>
    );
  }

  const formatTime = (ts) => {
    const diff = Math.floor((Date.now() - ts) / 1000);
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  return (
    <div className="p-6 rounded-2xl craft-card space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">
            Recent Learning Activity
          </h3>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Last {activities.length} events
        </span>
      </div>

      <div className="space-y-3">
        {activities.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              {item.type === 'css_unlocked' ? (
                <LockOpen className="w-4 h-4 text-craft-flame flex-shrink-0" />
              ) : item.type === 'quiz_passed' ? (
                <Trophy className="w-4 h-4 text-craft-flame flex-shrink-0" />
              ) : item.type === 'exercise_passed' ? (
                <CheckCircle2 className="w-4 h-4 text-craft-flame flex-shrink-0" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-craft-flame flex-shrink-0" />
              )}
              <span className="truncate font-medium text-slate-700 dark:text-slate-300">
                {item.title}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 flex-shrink-0 ml-2 font-mono">
              {formatTime(item.timestamp)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
