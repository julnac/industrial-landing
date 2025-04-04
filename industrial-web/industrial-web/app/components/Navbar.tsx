"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {MdClose, MdKeyboardArrowRight, MdSearch, MdSunny} from "react-icons/md";
import {TbDotsVertical} from "react-icons/tb";
import Image from "next/image";
import {RxHamburgerMenu} from "react-icons/rx";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "/about", label: "Products" },
        { href: "/login", label: "About us" },
        { href: "/demo", label: "Resources" },
        { href: "/contact", label: "Contact" },
    ];

    const productsLinks = [
        { href: '/settings', label: 'Settings' },
        { href: '/support', label: 'Support' },
        { href: '/license', label: 'License' },
    ]

    const resourcesLinks = [
        { href: '/settings', label: 'Settings' },
        { href: '/support', label: 'Support' },
        { href: '/license', label: 'License' },
    ]

    return (
        <nav className="nav fixed top-0 left-0 w-full z-50">
            <div>
                <div className="flex h-14 items-center justify-between gap-8 px-6 xl:px-0 max-w-7xl xl:mx-auto">
                    <div className="flex items-center justify-center gap-4">
                        <Image
                            src="/logo/OT_LOGO.png"
                            width={137}
                            height={46}
                            alt="Logo"
                        />
                    </div>

                    <div className="hidden md:flex space-x-6 items-center">
                        <Menu>
                            <MenuButton className="menu-button">Products <IoIosArrowDown /></MenuButton>
                            <MenuItems anchor="bottom" className="menu-items">
                                {productsLinks.map((link) => (
                                    <MenuItem key={link.href}>
                                        <Link href={link.href} className='menu-item'>
                                            {link.label}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                        <Link
                            key='/about-us'
                            href='/about-us'
                        >
                            About us
                        </Link>
                        <Menu>
                            <MenuButton className="menu-button">Resources<IoIosArrowDown /></MenuButton>
                            <MenuItems anchor="bottom" className="menu-items">
                                {resourcesLinks.map((link) => (
                                    <MenuItem key={link.href}>
                                        <Link href={link.href} className='menu-item'>
                                            {link.label}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                        <Link
                            key='/contact'
                            href='/contact'
                        >
                            Contact
                        </Link>
                        <Link
                            href="/contact"
                        >
                            <button className="button-full-nav">
                                Get free demo
                            </button>
                        </Link>
                    </div>

                    <div className="flex md:hidden space-x-6 items-center">
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
