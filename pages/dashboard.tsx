import { useSession, signIn } from 'next-auth/react';
import Header from '@components/layout/Header';
import Sidebar from '@components/layout/Sidebar';
import WeatherCard from '@components/dashboard/WeatherCard';
import NewsFeed from '@components/dashboard/NewsFeed';
import FinanceCard from '@components/dashboard/FinanceCard';

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="mb-4">You need to be logged in to access the dashboard.</p>
        <button onClick={() => signIn()} className="px-4 py-2 bg-primary text-white rounded">
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <WeatherCard />
            <FinanceCard />
          </div>
          <div className="mt-6">
            <NewsFeed />
          </div>
        </main>
      </div>
    </div>
  );
}
