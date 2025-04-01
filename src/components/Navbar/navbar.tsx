"use client";

import Link from "next/link";
import React from "react";
import { navItems } from "@/lib/NavData";
import NavMenu from "./NavMenu";
import Image from "next/image";
import logo from "@/assets/images/logo.png"
import Button from "../ui/GGButton";
import { useTransitionRouter } from "next-view-transitions";
import { ScrollProgress } from "../magicui/scroll-progress";

const Navbar = () => {
    const router = useTransitionRouter()
    return (
        <nav className="flex justify-between items-center py-3 px-4">
            <ScrollProgress className="top-[1px]"/>
            {/* Logo */}
            <Link href='/' onClick={(e) => {
                e.preventDefault()
                router.push('/', {
                        onTransitionReady: pageAnimation,
                    })
                }}
            ><Image src={logo} alt="logo" height="100" width="150"/></Link>
                {/* Navigation items */}
                <ul className="hidden sm:flex gap-6">
                    {navItems.map(({ label,href }) => (
                    <Link href={href} onClick={(e) => {
                        e.preventDefault()
                        router.push(href, {
                            onTransitionReady: pageAnimation,
                        })
                    }} key={label}>
                        <Button variant="text">{label}</Button>
                    </Link>
                    ))}
                </ul>
            <NavMenu/>
        </nav>
    );
};

const pageAnimation = () => {
    document.documentElement.animate(
        [
            {
                opacity: 1,
                scale: 1,
                transform: "translateY(0)",
            },
            {
                opacity: 0.1,
                scale: 1,
                transform: "translateY(-100px)",
            },
        ],{
            duration: 1000,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: 'forwards',
            pseudoElement: '::view-transition-old(root)',
        }
    );
    document.documentElement.animate(
        [
            {
                transform: "translateY(100%)",
            },
            {
                transform: "translateY(0)",
            },
        ],{
            duration: 1000,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: 'forwards',
            pseudoElement: '::view-transition-new(root)',
        }
    );
}

export default Navbar;