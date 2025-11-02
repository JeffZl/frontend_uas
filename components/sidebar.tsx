"use client";

import Image from "next/image";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const route = usePathname();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [navItems, setNavItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/user/me", {
          cache: "no-store",
          credentials: "include",
        });

        if (!res.ok) throw new Error("Failed to fetch user");

        const { user: fetchedUser } = await res.json();
        setUser(fetchedUser);

        setNavItems([
          { icon: "/icons/house", label: "Home", href: "/" },
          { icon: "/icons/search", label: "Explore", href: "/explore" },
          { icon: "/icons/bell", label: "Notifications", href: "/notifications" },
          { icon: "/icons/mail", label: "Messages", href: "/messages" },
          { icon: "/icons/person", label: "Profile", href: `/profile/${fetchedUser.handle}` },
          { icon: "/icons/settings", label: "Settings", href: "/settings" },
        ]);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <aside className="flex flex-col justify-between min-h-screen border-r border-[#2f3336] p-4 w-[250px] flex-1.5">
      <div>
        <div className="logo p-2 mb-4">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        </div>

        <nav className="space-y-2">
          {navItems.map(({ icon, label, href }) => (
            <NavItem
              key={label}
              icon={route === href || (href !== "/" && route.startsWith(href)) ? `${icon}-fill.svg` : `${icon}.svg`}
              label={label}
              href={href}
            />
          ))}
        </nav>

        <Link href="/create-quote">
          <button className="post-btn w-full bg-white text-black font-bold rounded-full py-3 mt-4 hover:bg-gray-300 cursor-pointer">
            Create Quote
          </button>
        </Link>
      </div>

      <div className="user-section flex items-center p-2 rounded-full hover:bg-[#1a1a1a] cursor-pointer transition">
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse" />
            <div className="flex flex-col gap-1">
              <div className="w-20 h-3 bg-gray-700 rounded animate-pulse" />
              <div className="w-14 h-3 bg-gray-700 rounded animate-pulse" />
            </div>
          </div>
        ) : (
          <>
            {user?.profilePicture?.url ? (
              <Image
                src={user.profilePicture.url}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full mr-2 object-cover"
              />
            ) : (
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 mr-2">
                <span className="text-white font-bold text-lg">
                  {user?.name?.[0]?.toUpperCase() || "?"}
                </span>
              </div>
            )}
            <div className="leading-tight">
              <span className="block font-bold truncate w-[120px]">
                {user?.name}
              </span>
              <span className="block text-gray-500 text-sm truncate w-[120px]">
                @{user?.handle}
              </span>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
