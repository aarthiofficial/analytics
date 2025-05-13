import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-200 dark:bg-gray-700 p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard">
              <a className="hover:underline">Dashboard</a>
            </Link>
          </li>
          {/* Additional navigation links can be added here */}
        </ul>
      </nav>
    </aside>
  );
}
