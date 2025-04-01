"use client";

import { navItems } from '@/lib/NavData';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import NavButton from './NavButton';
import { AnimatePresence, motion } from 'motion/react';
import { useTransitionRouter } from "next-view-transitions";

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useTransitionRouter()
    return (
        <div className='relative block sm:hidden'>
            <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        initial={{scale:0,opacity:0}}
                        animate={{scale:1,opacity:1}}
                        exit={{scale:0,opacity:0}}
                        transition={{duration:0.5, type:"spring"}}
                        className='absolute -top-2 -right-2 w-56 min-h-64 rounded-md bg-neutral-50 p-6 z-20 flex flex-col origin-top-right'>
                        <ul className='flex flex-col gap-2 flex-1'>
                            {navItems.map(({ label,href }) => (
                                <Link href={href} key={label} onClick={(e) => {
                                    e.preventDefault()
                                    router.push(href, {
                                        onTransitionReady: pageAnimation,
                                    })
                                }}>
                                    <li className='text-2xl font-medium'>{label}</li>
                                </Link>

                            ))}
                        </ul>
                        <div className='flex gap-4 mt-4'>
                            <Link
                                href="https://www.facebook.com/vikrant.belu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 transition-colors duration-300"
                                >
                                <FaFacebook size={20} />
                            </Link>
                            <Link
                                href="https://www.instagram.com/vik_ifineart/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 transition-colors duration-300"
                                >
                                <FaInstagram size={20} />
                            </Link>
                            <Link
                                href="https://www.youtube.com/@i-Fineart"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 transition-colors duration-300"
                                >
                                <FaLinkedin size={22} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

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

export default NavMenu
