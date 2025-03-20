"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {MdClose, MdKeyboardArrowRight, MdSearch, MdSunny} from "react-icons/md";
import {TbDotsVertical} from "react-icons/tb";
import ThemeSwitch from "@/app/components/ThemeSwitch";
import Image from "next/image";
import {RxHamburgerMenu} from "react-icons/rx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/login", label: "Login" },
        { href: "/demo", label: "Request demo" },
    ];

    return (
        <nav className="bg-background fixed top-0 left-0 w-full z-50">
            <div>
                <div className="flex h-14 items-center justify-between gap-8 px-6 xl:px-0 max-w-7xl xl:mx-auto ">
                    <div className="flex items-center justify-center gap-4">
                        <Image
                            src="/images/logotype.png"
                            width={148.35}
                            height={27.29}
                            alt="Logo"
                        />
                    </div>

                    <div className="hidden md:flex space-x-6 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-foreground hover:text-primary transition-colors text-sm"
                            >
                                <div className="nav-typo">{link.label}</div>
                            </Link>
                        ))}
                        <Link
                            href="/"
                        >
                            <div className="nav-button">
                                Request demo
                            </div>
                        </Link>
                        
                        <ThemeSwitch/>
                    </div>

                    <div className="flex md:hidden space-x-6 items-center">
                        <ThemeSwitch/>
                        <button onClick={toggleMenu}>
                            {isOpen ? <MdClose className="w-5 h-5 text-foreground"/> :
                                <TbDotsVertical className="w-5 h-5 text-foreground"/>}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden flex flex-col space-y-2 bg-background w-full mt-2 border-b-0.2 border-mutedBackground">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block text-lg px-4 py-2 mx-2 ${
                                    pathname === link.href
                                        ? "text-primary"
                                        : "text-foreground hover:bg-mutedBackground hover:rounded-sm"
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
