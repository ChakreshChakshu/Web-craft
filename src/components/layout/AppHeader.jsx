import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code2, 
  BookOpen, 
  Terminal, 
  CheckSquare, 
  BarChart2, 
  Lock, 
  Sun, 
  Moon, 
  Menu, 
  X,
  LogOut,
  Cloud,
  CloudUpload,
  LogIn,
  ChevronDown,
  Layers,
  Server,
  Atom,
  FileCode
} from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { AuthModal } from '../auth/AuthModal';

export const AppHeader = () => {
  const location = useLocation();
  const { isCourseUnlocked, isCssUnlocked, htmlStats, syncStatus } = useProgress();
  const { theme, toggleTheme } = useTheme();
  const { user, profile, signOut } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const userDropdownRef = useRef(null);
  const coursesDropdownRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
      if (coursesDropdownRef.current && !coursesDropdownRef.current.contains(event.target)) {
        setCoursesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const isCourseActive = location.pathname.startsWith('/learn');

  const courseList = [
    {
      id: 'html',
      name: 'HTML5 Fundamentals',
      shortName: 'HTML',
      path: '/learn/html',
      icon: FileCode,
      tag: 'Markup',
      color: 'text-orange-500 dark:text-orange-400',
      locked: false,
    },
    {
      id: 'css',
      name: 'CSS3 & Modern Layout',
      shortName: 'CSS',
      path: '/learn/css',
      icon: Layers,
      tag: 'Styling',
      color: 'text-blue-500 dark:text-blue-400',
      locked: !isCourseUnlocked('css'),
      lockText: 'Requires 70% HTML',
    },
    {
      id: 'javascript',
      name: 'JavaScript (ES6+) Mastery',
      shortName: 'JavaScript',
      path: '/learn/javascript',
      icon: Code2,
      tag: 'Scripting',
      color: 'text-amber-500 dark:text-amber-400',
      locked: !isCourseUnlocked('javascript'),
      lockText: 'Requires 70% CSS',
    },
    {
      id: 'react',
      name: 'React.js Components & Hooks',
      shortName: 'React.js',
      path: '/learn/react',
      icon: Atom,
      tag: 'Frontend',
      color: 'text-cyan-500 dark:text-cyan-400',
      locked: !isCourseUnlocked('react'),
      lockText: 'Requires 70% JavaScript',
    },
    {
      id: 'nodejs',
      name: 'Node.js & Backend Architecture',
      shortName: 'Node.js',
      path: '/learn/nodejs',
      icon: Server,
      tag: 'Backend',
      color: 'text-emerald-500 dark:text-emerald-400',
      locked: !isCourseUnlocked('nodejs'),
      lockText: 'Requires 70% React',
    },
  ];

  const primaryNavItems = [
    { name: 'Dashboard', path: '/', icon: BarChart2 },
    { name: 'Playground', path: '/playground', icon: Terminal },
    { name: 'Practice', path: '/practice', icon: CheckSquare },
    { name: 'Progress', path: '/progress', icon: BarChart2 },
  ];

  const displayName = profile?.display_name || user?.user_metadata?.display_name || user?.email?.split('@')[0] || 'Learner';

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand / Logo */}
          <div className="flex items-center gap-3">
            <Link 
              to="/" 
              className="flex items-center gap-2.5 font-bold text-lg text-slate-900 dark:text-white hover:opacity-90 transition-opacity"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight tracking-tight flex items-center gap-1.5">
                  WebDev Lab
                  <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    Pro
                  </span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            <Link
              to="/"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'bg-slate-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/60'
              }`}
            >
              <BarChart2 className="w-4 h-4 opacity-75" />
              <span>Dashboard</span>
            </Link>

            {/* Courses Dropdown */}
            <div className="relative" ref={coursesDropdownRef}>
              <button
                type="button"
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isCourseActive
                    ? 'bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/60'
                }`}
              >
                <BookOpen className="w-4 h-4 opacity-75" />
                <span>Courses</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {coursesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800/70 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    All Curriculums
                  </div>
                  <div className="p-1 space-y-0.5">
                    {courseList.map((c) => {
                      const Icon = c.icon;
                      const active = location.pathname.startsWith(c.path);
                      return (
                        <Link
                          key={c.id}
                          to={c.path}
                          onClick={() => setCoursesDropdownOpen(false)}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                            active
                              ? 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-semibold'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Icon className={`w-4 h-4 flex-shrink-0 ${c.color}`} />
                            <div className="truncate">
                              <div className="font-semibold">{c.name}</div>
                            </div>
                          </div>

                          {c.locked ? (
                            <span className="flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                              <Lock className="w-3 h-3" /> Locked
                            </span>
                          ) : (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-mono">
                              {c.tag}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/playground"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                isActive('/playground')
                  ? 'bg-slate-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/60'
              }`}
            >
              <Terminal className="w-4 h-4 opacity-75" />
              <span>Playground</span>
            </Link>

            <Link
              to="/practice"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                isActive('/practice')
                  ? 'bg-slate-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/60'
              }`}
            >
              <CheckSquare className="w-4 h-4 opacity-75" />
              <span>Practice</span>
            </Link>

            <Link
              to="/progress"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                isActive('/progress')
                  ? 'bg-slate-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/60'
              }`}
            >
              <BarChart2 className="w-4 h-4 opacity-75" />
              <span>Progress</span>
            </Link>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2.5">
            {/* Cloud Sync Status Indicator */}
            {user && (
              <div 
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400"
                title={
                  syncStatus === 'synced' ? 'Progress synced with cloud' :
                  syncStatus === 'syncing' ? 'Syncing progress...' :
                  syncStatus === 'error' ? 'Sync error' : 'Local progress'
                }
              >
                {syncStatus === 'syncing' ? (
                  <>
                    <CloudUpload className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                    <span className="text-[11px]">Syncing</span>
                  </>
                ) : syncStatus === 'synced' ? (
                  <>
                    <Cloud className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[11px] text-emerald-600 dark:text-emerald-400">Cloud Synced</span>
                  </>
                ) : (
                  <>
                    <Cloud className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[11px]">Local</span>
                  </>
                )}
              </div>
            )}

            {/* Quick HTML Progress badge */}
            <Link
              to="/progress"
              className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:border-blue-400 transition-colors"
              title="View overall learning progress"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>HTML: {htmlStats.completionPercentage}%</span>
            </Link>

            {/* Theme Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Auth Button or User Menu */}
            {user ? (
              <div className="relative" ref={userDropdownRef}>
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  aria-label="User profile menu"
                >
                  <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold uppercase">
                    {displayName.charAt(0)}
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                      <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                        {displayName}
                      </div>
                      <div className="text-xs text-slate-500 truncate font-mono">
                        {user.email}
                      </div>
                    </div>
                    <div className="p-1">
                      <button
                        type="button"
                        onClick={() => {
                          setUserDropdownOpen(false);
                          signOut();
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setAuthModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-3 shadow-lg">
            
            {/* Primary Navigation */}
            <div className="space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60"
              >
                <BarChart2 className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
            </div>

            {/* Mobile Curriculums Section */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Courses
              </div>
              <div className="space-y-1">
                {courseList.map((c) => {
                  const Icon = c.icon;
                  const active = location.pathname.startsWith(c.path);
                  return (
                    <Link
                      key={c.id}
                      to={c.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        active
                          ? 'bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${c.color}`} />
                        <span>{c.name}</span>
                      </div>
                      {c.locked && (
                        <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                          <Lock className="w-3 h-3" /> Locked
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Additional Tools */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1">
              <Link
                to="/playground"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60"
              >
                <Terminal className="w-4 h-4" />
                <span>Playground</span>
              </Link>
              <Link
                to="/practice"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60"
              >
                <CheckSquare className="w-4 h-4" />
                <span>Practice</span>
              </Link>
              <Link
                to="/progress"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60"
              >
                <BarChart2 className="w-4 h-4" />
                <span>Progress</span>
              </Link>
            </div>

            {!user && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthModalOpen(true);
                  }}
                  className="w-full py-2 px-3 rounded-lg bg-blue-600 text-white text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Sign In / Register</span>
                </button>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </>
  );
};
