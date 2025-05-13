import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          PGAGI Analytics Dashboard
        </h1>
        <Link href="/dashboard">
          <a className="px-6 py-3 bg-primary text-white rounded hover:bg-blue-700">Enter Dashboard</a>
        </Link>
      </div>
    </div>
  );
}
