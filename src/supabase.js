import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qumkxoexooxosajfimcq.supabase.co';
const supabaseKey = 'sb_publishable_ggnc4SeyqIas6WecSnNt1A_iC8-Pu96';

export const supabase = createClient(supabaseUrl, supabaseKey);
