import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://YOUR-PROJECT-REF.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_PUBLISHABLE_OR_ANON_KEY';

export const supabase = createClient(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmeHBla2J0dXlrZHpscHFvb3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUyOTc5ODQsImV4cCI6MjExMDg3Mzk4NH0.M6YvryWPDkNBOjxUGMlT7_wa8iOIL8NB1_gKEG9RB6Q, sb_publishable_zwO_KPWMliiBIlY9-p20pg_sgjcIi_7);
