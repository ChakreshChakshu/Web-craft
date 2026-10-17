import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const GUEST_STORAGE_KEY = 'webcraft_guest_user';

export const AuthContext = createContext({
  user: null,
  session: null,
  profile: null,
  loading: true,
  isConfigured: false,
  signUp: async () => {},
  signIn: async () => {},
  signOut: async () => {},
  signInWithOAuth: async () => {},
  signInAsGuest: () => {},
  updateProfile: async () => {},
  uploadAvatar: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch or refresh user profile from public.profiles
  const fetchProfile = useCallback(async (userId) => {
    if (!isSupabaseConfigured || !userId) {
      setProfile(null);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.warn('Error fetching user profile:', error.message);
      }
      if (data) {
        setProfile(data);
      }
    } catch (err) {
      console.error('Failed to load profile:', err);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const initAuth = async () => {
      // 1. If Supabase configured, attempt getting active Supabase session
      if (isSupabaseConfigured) {
        try {
          const { data: { session: existingSession } } = await supabase.auth.getSession();
          if (existingSession?.user && isMounted) {
            setSession(existingSession);
            setUser(existingSession.user);
            await fetchProfile(existingSession.user.id);
            setLoading(false);
            return;
          }
        } catch (err) {
          console.warn('Error checking initial Supabase session:', err);
        }
      }

      // 2. Fallback check for active guest / demo session
      try {
        const storedGuest = localStorage.getItem(GUEST_STORAGE_KEY);
        if (storedGuest && isMounted) {
          const parsed = JSON.parse(storedGuest);
          if (parsed?.user) {
            setUser(parsed.user);
            setProfile(parsed.profile || null);
            setSession({ user: parsed.user, access_token: 'guest-token' });
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        console.warn('Failed parsing guest session:', e);
      }

      if (isMounted) {
        setLoading(false);
      }
    };

    initAuth();

    // Listen to Supabase auth changes if client is configured
    if (isSupabaseConfigured) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (_event, newSession) => {
          if (!isMounted) return;

          if (newSession?.user) {
            localStorage.removeItem(GUEST_STORAGE_KEY);
            setSession(newSession);
            setUser(newSession.user);
            await fetchProfile(newSession.user.id);
          } else {
            // If logged out from Supabase, check if guest is saved
            const storedGuest = localStorage.getItem(GUEST_STORAGE_KEY);
            if (storedGuest) {
              try {
                const parsed = JSON.parse(storedGuest);
                setUser(parsed.user);
                setProfile(parsed.profile);
                setSession({ user: parsed.user, access_token: 'guest-token' });
              } catch {
                setUser(null);
                setSession(null);
                setProfile(null);
              }
            } else {
              setUser(null);
              setSession(null);
              setProfile(null);
            }
          }
          setLoading(false);
        }
      );

      return () => {
        isMounted = false;
        subscription.unsubscribe();
      };
    }

    return () => {
      isMounted = false;
    };
  }, [fetchProfile]);

  const signUp = async ({ email, password, displayName }) => {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase is not configured. Please add your credentials to .env or continue as Guest.');
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
        },
      },
    });
    if (error) throw error;
    return data;
  };

  const signIn = async ({ email, password }) => {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase is not configured. Please add your credentials to .env or continue as Guest.');
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    localStorage.removeItem(GUEST_STORAGE_KEY);
    return data;
  };

  const signInAsGuest = (displayName = 'Student Learner') => {
    const guestUser = {
      id: 'guest-student-session',
      email: 'student@webcraft.local',
      user_metadata: {
        display_name: displayName,
      },
      isGuest: true,
    };
    const guestProfile = {
      id: 'guest-student-session',
      display_name: displayName,
      avatar_url: null,
      role: 'student',
    };

    localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify({ user: guestUser, profile: guestProfile }));
    setUser(guestUser);
    setProfile(guestProfile);
    setSession({ user: guestUser, access_token: 'guest-token' });
    return guestUser;
  };

  const signOut = async () => {
    localStorage.removeItem(GUEST_STORAGE_KEY);
    if (isSupabaseConfigured) {
      try {
        await supabase.auth.signOut();
      } catch (err) {
        console.warn('SignOut warning:', err);
      }
    }
    setUser(null);
    setSession(null);
    setProfile(null);
  };

  const signInWithOAuth = async (provider) => {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase is not configured. Please add your credentials to .env.');
    }
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) throw error;
    localStorage.removeItem(GUEST_STORAGE_KEY);
    return data;
  };

  const updateProfile = async ({ displayName, avatarUrl }) => {
    if (!user) throw new Error('Not authenticated');

    if (user.isGuest) {
      const updated = {
        ...profile,
        display_name: displayName,
        avatar_url: avatarUrl || profile?.avatar_url,
      };
      setProfile(updated);
      localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify({ user, profile: updated }));
      return updated;
    }

    const updates = {
      id: user.id,
      display_name: displayName,
      updated_at: new Date().toISOString(),
    };
    if (avatarUrl) updates.avatar_url = avatarUrl;

    const { data, error } = await supabase
      .from('profiles')
      .upsert(updates)
      .select()
      .single();

    if (error) throw error;
    setProfile(data);
    return data;
  };

  const uploadAvatar = async (file) => {
    if (!user) throw new Error('Not authenticated');
    if (user.isGuest) {
      // Local preview URL for guest
      const url = URL.createObjectURL(file);
      await updateProfile({ displayName: profile?.display_name || 'Guest', avatarUrl: url });
      return url;
    }

    const fileExt = file.name.split('.').pop();
    const filePath = `${user.id}/${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('avatars')
      .getPublicUrl(filePath);

    await updateProfile({ displayName: profile?.display_name || user.email, avatarUrl: publicUrl });
    return publicUrl;
  };

  const value = {
    user,
    session,
    profile,
    loading,
    isConfigured: isSupabaseConfigured,
    signUp,
    signIn,
    signOut,
    signInWithOAuth,
    signInAsGuest,
    updateProfile,
    uploadAvatar,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
