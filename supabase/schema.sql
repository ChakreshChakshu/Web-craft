-- ==============================================================================
-- WebCraft Supabase Database & Storage Schema
-- Run this script in your Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- ==============================================================================

-- 1. Profiles Table (Extends auth.users)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  display_name text,
  avatar_url text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Policies for profiles
create policy "Public profiles are viewable by everyone."
  on public.profiles for select
  using (true);

create policy "Users can insert their own profile."
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update their own profile."
  on public.profiles for update
  using (auth.uid() = id);

-- 2. User Progress Table (Tracks lesson completion, exercises, quizzes)
create table if not exists public.user_progress (
  user_id uuid references auth.users on delete cascade primary key,
  completed_lessons jsonb default '[]'::jsonb not null,
  completed_exercises jsonb default '[]'::jsonb not null,
  quiz_results jsonb default '{}'::jsonb not null,
  last_accessed_course text default 'html',
  last_accessed_module text,
  last_accessed_lesson text,
  css_unlocked boolean default false,
  updated_at timestamptz default now() not null
);

-- Enable RLS
alter table public.user_progress enable row level security;

-- Policies for user_progress (Only the owner can view and modify their progress)
create policy "Users can view their own progress."
  on public.user_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert their own progress."
  on public.user_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own progress."
  on public.user_progress for update
  using (auth.uid() = user_id);

-- 3. Automatic Profile & Progress Trigger on User Sign Up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  -- Create profile
  insert into public.profiles (id, email, display_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1))
  );

  -- Initialize progress
  insert into public.user_progress (user_id)
  values (new.id);

  return new;
end;
$$ language plpgsql security definer;

-- Trigger definition
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 4. Storage Bucket Setup for User Avatars
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do update set public = true;

-- Storage RLS Policies
create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using (bucket_id = 'avatars');

create policy "Authenticated users can upload their own avatar."
  on storage.objects for insert
  with check (
    bucket_id = 'avatars' 
    and auth.role() = 'authenticated'
  );

create policy "Users can update their own avatar."
  on storage.objects for update
  using (
    bucket_id = 'avatars' 
    and auth.uid()::text = (storage.foldername(name))[1]
  );
