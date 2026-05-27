import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let client: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  client = createClient(supabaseUrl, supabaseAnonKey);
} else if (typeof window !== 'undefined') {
  console.warn(
    '[supabase] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing. ' +
      'Supabase client is not initialised; data and auth calls will be no-ops.',
  );
}

export const supabase: SupabaseClient = (client ??
  (new Proxy(
    {},
    {
      get() {
        throw new Error(
          'Supabase client is not configured. Set VITE_SUPABASE_URL and ' +
            'VITE_SUPABASE_ANON_KEY in .env.local and restart the dev server.',
        );
      },
    },
  ) as unknown as SupabaseClient));

export const isSupabaseConfigured = (): boolean => client !== null;
