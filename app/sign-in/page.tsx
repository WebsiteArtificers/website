import { Logo } from '../../icons/icons'
import { getSession } from '@/app/supabase-server';
import AuthUI from './AuthUI';
import './sign-in.css'
import { Suspense } from 'react';
import { LoadingScreen } from '@/components/components';
import { redirect } from 'next/navigation';

const meta = {
  title: 'The Website Artificers: Sign In to Your Website Artificer Account',
  description: "Securely sign in to access Website Artificers' client portal. Manage your web development projects, collaborate with our team, and track progress in real-time. Your gateway to bespoke digital solutions.",
  cardImage: '/images/website-artificer-logo.ico',
  robots: 'follow, index',
  favicon: '/images/website-artificer-logo.ico',
  url: process.env.NEXT_PUBLIC_SITE_URL + '/sign-in',
  type: 'website'
};

export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@websiteartificers',
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage
  }
};

export default async function SignIn() {

  const session = await getSession();

  if (session) {
    return redirect('/account');
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="login__container">
        <Logo />
        <div className='authentication__container'>
          <AuthUI />
        </div>
      </div>
    </Suspense>
  )
}
