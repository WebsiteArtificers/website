'use client';

import Button from '@/components/ui/Button/Button';
import { postData } from '@/utils/helpers';

import { Session } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import './account.css';

interface Props {
  session: Session;
}

export default function ManageSubscriptionButton({ session }: Props) {
  const router = useRouter();
  const redirectToCustomerPortal = async () => {
    try {
      const { url } = await postData({
        url: '/api/create-portal-link'
      });
      router.push(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
  };

  return (
    <div className="subscriptionButton__container">
      <p className="account__card--subcontainer--description">Manage your subscription and make payments.</p>
      <Button
        className="account__card--subcontainer--button"
        variant="slim"
        disabled={!session}
        onClick={redirectToCustomerPortal}
      >
        Open customer portal
      </Button>
    </div>
  );
}