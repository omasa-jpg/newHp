// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://khxiggrxqoirxajkxbpd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoeGlnZ3J4cW9pcnhhamt4YnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2ODI3NTAsImV4cCI6MjAxNTI1ODc1MH0.6FixhvFvWCuek-SqyF5MjiOdB_STiIjge-fs0ZdahiI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)