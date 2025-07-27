'use client';

import { Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-800">
      <h1 className="text-xl font-bold">TOBI TECH Assistant</h1>
      <button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
        <Bell size={20} />
      </button>
    </header>
  );
}
