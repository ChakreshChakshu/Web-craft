import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

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
    localStorage.removeItem('webcraft_guest_user');

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
            setSession(newSession);
            setUser(newSession.user);
            await fetchProfile(newSession.user.id);
          } else {
            setUser(null);
            setSession(null);
            setProfile(null);
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
      throw new Error('Supabase is not configured. Please add your credentials to .env.');
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
      throw new Error('Supabase is not configured. Please add your credentials to .env.');
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  };

  const signOut = async () => {
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
    return data;
  };

  const updateProfile = async ({ displayName, avatarUrl }) => {
    if (!user) throw new Error('Not authenticated');

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
