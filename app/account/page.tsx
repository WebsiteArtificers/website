import ManageSubscriptionButton from './ManageSubscriptionButton';
import {
  getSession,
  getUserDetails,
  getSubscription
} from '@/app/supabase-server';
import Button from '@/components/ui/Button/Button';
import { Database } from '@/types_db';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import './account.css';
import { Suspense } from 'react';
import { LoadingScreen } from '@/components/components';

const meta = {
  title: 'The Website Artificers: Manage Your Account',
  description: "Your individual account portal. Manage your subscription, update your name and email address, and more. Your gateway to bespoke digital solutions.",
  cardImage: '/images/website-artificer-logo.ico',
  robots: 'follow, index',
  favicon: '/images/website-artificer-logo.ico',
  url: process.env.NEXT_PUBLIC_SITE_URL + '/blog',
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

export default async function Account() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);

  const user = session?.user;

  if (!session) {
    return redirect('/sign-in');
  }

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription?.prices?.currency!,
      minimumFractionDigits: 0
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  const updateName = async (formData: FormData) => {
    'use server';
  
    try {
      const newName = formData.get('name') as string;
      const supabase = createServerActionClient<Database>({ cookies });
      const session = await getSession();
      
      if (!session?.user || !session.user.id) {
        console.log("User or user.id is undefined");
        return; // Exit early if user or user.id is not available
      }
  
      const { error } = await supabase
        .from('users')
        .update({ full_name: newName })
        .eq('id', session.user.id);
  
      if (error) {
        console.error(error);
      } else {
        console.log('Name updated successfully');
      }
  
      // Assuming revalidatePath is an asynchronous operation, you might want to wait for it.
      await revalidatePath('/account');
    } catch (err) {
      console.error('An error occurred:', err);
    }
  };

  const updateEmail = async (formData: FormData) => {
    'use server';

    const newEmail = formData.get('email') as string;
    const supabase = createServerActionClient<Database>({ cookies });
    const { error } = await supabase.auth.updateUser({ email: newEmail });
    if (error) {
      console.log(error);
    }
    revalidatePath('/account');
  };

  return (
    <Suspense fallback={<LoadingScreen />}>
      <section className="account__container">
        <div className="account__subcontainer">
          <div className="account__header--section">
            <h1 className="account__header">
              Account
            </h1>
            <p className="account__description">
              <span>safe</span>, <span>secure</span>, and <span>simple</span> billing
            </p>
          </div>
        </div>
        <div className="account__card--section">
          <Card
            title="Your Plan"
            description={
              subscription
                ? `You are currently on the ${subscription?.prices?.products?.name} plan.`
                : 'You are not currently subscribed to any plan.'
            }
            footer={<ManageSubscriptionButton session={session} />}
          >
            <div className="account__card--subcontainer">
              {subscription ? (
                `${subscriptionPrice}/${subscription?.prices?.interval}`
              ) : (
                <Link href="/pricing" className='account__card--link'>Choose your plan</Link>
              )}
            </div>
          </Card>
          <Card
            title="Your Name"
            description="Please enter your full name, or a display name you are comfortable with."
            footer={
              <div className="account__card--subcontainer">
                <p className="account__card--subcontainer--description">64 characters maximum</p>
                <Button
                  className="account__card--subcontainer--button"
                  variant="slim"
                  type="submit"
                  form="nameForm"
                >
                  {/* WARNING - In Next.js 13.4.x server actions are in alpha and should not be used in production code! */}
                  Update Name
                </Button>
              </div>
            }
          >
            <div className="account__card--subcontainer">
              <form id="nameForm" action={updateName} className="account__card--subcontainer__form">
                <input
                  type="text"
                  name="name"
                  className="account__card--subcontainer__form--input"
                  defaultValue={userDetails?.full_name ?? ''}
                  placeholder="Your name"
                  maxLength={64}
                />
              </form>
            </div>
          </Card>
          <Card
            title="Your Email"
            description="Please enter the email address you want to use to login."
            footer={
              <div className="account__card--subcontainer">
                <p className="account__card--subcontainer--description">
                  We will email you to verify the change.
                </p>
                <Button
                  className="account__card--subcontainer--button"
                  variant="slim"
                  type="submit"
                  form="emailForm"
                >
                  {/* WARNING - In Next.js 13.4.x server actions are in alpha and should not be used in production code! */}
                  Update Email
                </Button>
              </div>
            }
          >
            <div className="account__card--subcontainer">
              <form id="emailForm" action={updateEmail} className="account__card--subcontainer__form">
                <input
                  className="account__card--subcontainer__form--input"
                  type="text"
                  name="email"
                  defaultValue={user ? user.email : ''}
                  placeholder="Your email"
                  maxLength={64}
                />
              </form>
            </div>
          </Card>
        </div>
      </section>
    </Suspense>
  );
}

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

function Card({ title, description, footer, children }: Props) {
  return (
    <div className="card__container">
      <div className="card__subcontainer--top">
        <h3 className="card__header">{title}</h3>
        <p className="card__paragraph">{description}</p>
        {children}
      </div>
      <div className="card__subcontainer--bottom">
        {footer}
      </div>
    </div>
  );
}