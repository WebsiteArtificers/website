import { Logo } from '../../icons/icons'
import { getSession } from '@/app/supabase-server';
import AuthUI from './AuthUI';
import './sign-in.css'
import { Suspense } from 'react';

import { redirect } from 'next/navigation';

export default async function SignIn() {

  const session = await getSession();

  if (session) {
    return redirect('/account');
  }

  return (
    <Suspense fallback='Loading...'>
      <div className="login__container">
        <Logo />
        <div className='authentication__container'>
          <AuthUI />
        </div>
      </div>
    </Suspense>
  )
}
