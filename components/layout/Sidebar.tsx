"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  return (
    <>
      <div className="md:hidden p-4 border-b flex gap-3">
        <button onClick={() => setIsOpen(!isOpen)}>open</button>
      </div>

      <aside
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed md:static top-0 left-0 h-full w-64
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          transition-transform
          bg-blue-700 text-white p-4
        `}
      >
        <h2 className="text-xl font-bold mb-6">Ghosted</h2>

        <nav className="flex flex-col gap-2 mt-[25vh]">
          <Link href="/dashboard" className={`p-2 rounded ${pathname === "/dashboard" ? "bg-gray-800" : "hover:bg-gray-800"}`}>
            Dashboard
          </Link>
          <Link href="/jobs" className={`p-2 rounded ${pathname === "/jobs" ? "bg-gray-800" : "hover:bg-gray-800"}`}>
            Jobs
          </Link>
          <Link href="/contacts" className={`p-2 rounded ${pathname === "/contacts" ? "bg-gray-800" : "hover:bg-gray-800"}`}>
            Contacts
          </Link>
        </nav>
      </aside>
    </>
  );
}
