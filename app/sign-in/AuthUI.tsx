'use client';

import { useSupabase } from '@/app/supabase-provider';
import { getURL } from '@/utils/helpers';
import { Auth } from '@supabase/auth-ui-react';
import './sign-in.css'

export default function AuthUI() {
  const { supabase } = useSupabase();
  return (
    <div className="authentication__subcontainer">
      <Auth
        supabaseClient={supabase}
        providers={['github']}
        redirectTo={`${getURL()}/auth/callback`}
        magicLink={true}
      />
    </div>
  );
}