-- Run in the Supabase SQL Editor for the portfolio's dedicated database.
create table if not exists public.contact_submissions (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 254),
  subject text check (subject is null or char_length(subject) <= 160),
  message text not null check (char_length(message) between 10 and 5000),
  submitted_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- No anon/authenticated policies: only the server-side service role can insert/read rows.
revoke all on table public.contact_submissions from anon, authenticated;
