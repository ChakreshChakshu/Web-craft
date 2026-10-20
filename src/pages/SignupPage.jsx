import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Code2, 
  Mail, 
  Lock, 
  User, 
  UserPlus, 
  AlertCircle, 
  CheckCircle2, 
  Sun,
  Moon,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';

export const SignupPage = () => {
  const { user, signUp, signInWithOAuth, isConfigured } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // If already logged in, redirect to destination
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please verify.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    try {
      const data = await signUp({ 
        email: email.trim(), 
        password, 
        displayName: displayName.trim() || undefined 
      });

      if (data?.user && !data?.session) {
        setSuccessMessage('Account created! Please check your email inbox to confirm your address before signing in.');
      } else {
        setSuccessMessage('Account created successfully! Redirecting to curriculum...');
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1200);
      }
    } catch (err) {
      const msg = err.message || '';
      setError(msg || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = async (provider) => {
    setError(null);
    setLoading(true);
    try {
      await signInWithOAuth(provider);
    } catch (err) {
      const msg = err.message || '';
      setError(msg || `Failed to sign in with ${provider}`);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Left Column: Showcase */}
      <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-indigo-700 via-blue-700 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5 font-bold text-lg hover:opacity-90 transition-opacity">
              <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-inner">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="tracking-tight text-white flex items-center gap-1.5 font-extrabold">
                WebCraft
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-white/20 text-blue-100 border border-white/20">
                  Pro
                </span>
              </span>
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <div className="mt-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md border border-white/20 text-blue-100">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Create Student Account</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
              Start Your Journey to Senior Frontend Craftsmanship.
            </h1>
            <p className="text-sm text-blue-100/90 max-w-lg leading-relaxed">
              Build a rock-solid foundation in semantic HTML5 markup, accessible web architecture, and production-grade CSS3 design systems.
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="relative z-10 my-10 space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
            <CheckCircle2 className="w-5 h-5 text-craft-cream shrink-0" />
            <span className="text-xs font-medium text-white/95">Unlock CSS3 track upon reaching 70% HTML milestone</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
            <CheckCircle2 className="w-5 h-5 text-craft-cream shrink-0" />
            <span className="text-xs font-medium text-white/95">Hands-on interactive exercises with instant error diagnostics</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
            <CheckCircle2 className="w-5 h-5 text-craft-cream shrink-0" />
            <span className="text-xs font-medium text-white/95">Earn verified developer credentials and track milestones</span>
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 text-xs text-blue-200/80 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-craft-cream" />
          <span>No credit card required. Pure open frontend education.</span>
        </div>
      </div>

      {/* Right Column: Sign Up Form */}
      <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center max-w-xl mx-auto w-full">
        <div className="space-y-6">
          
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Register Student Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Create your profile to track curriculum progress and code experiments.
            </p>
          </div>

          {/* Feedback messages */}
          {error && (
            <div className="p-3.5 rounded-xl bg-craft-flame/10 border border-craft-flame/30 text-slate-900 dark:text-craft-cream text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-craft-flame" />
              <div className="flex-1 leading-normal">{error}</div>
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-xl bg-craft-flame/10 border border-craft-flame/30 text-slate-900 dark:text-craft-cream text-xs flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-craft-flame" />
              <div className="flex-1 leading-normal">{successMessage}</div>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Your Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Alex Rivers"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 6 chars"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat password"
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
            >
              {loading ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Create Account</span>
                </>
              )}
            </button>
          </form>

          {/* Social OAuth */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={() => handleOAuth('github')}
              disabled={loading || !isConfigured}
              className="py-2.5 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </button>
            <button
              type="button"
              onClick={() => handleOAuth('google')}
              disabled={loading || !isConfigured}
              className="py-2.5 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              Google
            </button>
          </div>

          {/* Link to Login */}
          <div className="text-center pt-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Already have an account? </span>
            <Link 
              to="/login" 
              state={{ from: location.state?.from }}
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Sign in
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};
