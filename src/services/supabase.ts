import "react-native-url-polyfill/auto";

import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.SUPABASE_URL;
export const supabase = createClient(
  supabaseUrl,
  import.meta.env.SUPABASE_SECRET,
  {
    auth: { autoRefreshToken: true },
  }
);
