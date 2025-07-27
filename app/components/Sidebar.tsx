"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Telegram Posts", href: "/telegram" },
  { name: "Email Campaigns", href: "/email" },
  { name: "Facebook Ideas", href: "/facebook" },
  { name: "WhatsApp Marketing", href: "/whatsapp" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full sm:w-64 bg-gray-800 text-white p-4 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-6">TOBI TECH Assistant</h2>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`block p-2 rounded-xl hover:bg-gray-700 ${
                pathname === item.href ? "bg-gray-700" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
