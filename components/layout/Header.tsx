import ThemeToggle from './ThemeToggle';
import { signOut } from 'next-auth/react';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-primary text-white">
      <h1 className="text-xl font-semibold">Analytics Dashboard</h1>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <button onClick={() => signOut()} className="px-3 py-1 bg-secondary rounded">
          Sign Out
        </button>
      </div>
    </header>
  );
}
