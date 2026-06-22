"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="lg:hidden p-4 border-b flex gap-3 fixed top-4 left-4 z-10 lg:hidden">
        <button onClick={() => setIsOpen(true)}>open</button>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`
           fixed inset-y-0 left-0 z-40 w-64 shrink-0 transition-transform bg-blue-700 text-white p-4
           ${isOpen ? "translate-x-0" : "-translate-x-full"}
           lg:static lg:translate-x-0
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="lg:hidden text-xl leading-none"
          >
            ✕
          </button>
        </div>
        <ul>
          <li className="mb-2">
            <Link
              href="/dashboard"
              className={`p-2 rounded ${pathname === "/dashboard" ? "bg-gray-700" : "hover:bg-gray-800"}`}
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href="/jobs"
              className={`p-2 rounded ${pathname === "/jobs" ? "bg-gray-700" : "hover:bg-gray-800"}`}
            >
              Jobs
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
