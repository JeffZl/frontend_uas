"use client"
import Image from "next/image";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

const navItems = [
    { icon: "/icons/house", label: "Home", href: "/" },
    { icon: "/icons/search", label: "Explore", href: "/explore" },
    { icon: "/icons/bell", label: "Notifications", href: "/notifications" },
    { icon: "/icons/mail", label: "Messages", href: "/messages" },
    { icon: "/icons/person", label: "Profile", href: "/profile" },
    { icon: "/icons/settings", label: "Settings", href: "/settings" },
]

export default function Sidebar() {
    const route = usePathname();

    console.log(route)

    return (
        <aside className="flex flex-col justify-between min-h-screen border-r border-[#2f3336] p-4 w-[250px] flex-1.5">
            <div>
                <div className="logo p-2 mb-4">
                    <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                </div>
                <nav className="space-y-2">
                    {navItems.map(({ icon, label, href }) => (
                        <NavItem key={label} icon={href === route ? `${icon}-fill.svg` : `${icon}.svg`} label={label} href={href} />
                    ))}
                </nav>
                <button className="post-btn w-full bg-white text-black font-bold rounded-full py-3 mt-4 hover:bg-gray-300">
                    Create Quote
                </button>
            </div>

            <div className="user-section flex items-center p-2 rounded-full hover:bg-[#1a1a1a] cursor-pointer">
                <Image
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full mr-2"
                />
                <div className="leading-tight">
                    <span className="block font-bold">ABC</span>
                    <span className="block text-gray-500 text-sm">@ABC</span>
                </div>
            </div>
        </aside>
    );
}
