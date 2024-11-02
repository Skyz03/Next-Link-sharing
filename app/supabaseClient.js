import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pidwtaylrfghxruyqvbe.supabase.co' // Replace with your Supabase URL
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZHd0YXlscmZnaHhydXlxdmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4ODA5MjIsImV4cCI6MjA0MzQ1NjkyMn0.aqrP3Ncr6GTuy50fEWkb7IGeXWEwz5onDVXP5ccZO5o' // Replace with your Supabase Anon Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
