import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://orgaxeifybxpympqtehf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZ2F4ZWlmeWJ4cHltcHF0ZWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNDc0NDYsImV4cCI6MjA2NjYyMzQ0Nn0.Ga3PeW6nfGU_4Efegnn3mNTj6v_Zqp5xo4BMncRgRj4'
export const supabase = createClient(supabaseUrl, supabaseKey)
