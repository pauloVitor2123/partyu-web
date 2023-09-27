import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabase = createClient(
  supabaseUrl,
  import.meta.env.VITE_SUPABASE_SECRET,
  {
    auth: { autoRefreshToken: true },
  }
);
