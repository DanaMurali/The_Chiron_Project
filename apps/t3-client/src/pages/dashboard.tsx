import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import DashboardPage from '../components/dashboard/dashboard';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <main>Loading...</main>;
  }

  session ? <DashboardPage newRequest /> : router.push('/');
};

export default Dashboard;
