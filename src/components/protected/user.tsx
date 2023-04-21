import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loader from '@/components/ui/loader';

export default function LoggedInUserRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      void router.push('/login');
    }
  }, [user, router]);

  if (!user) return <Loader />;

  return <>{children}</>;
}
