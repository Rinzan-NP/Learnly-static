"use client";

import Link from 'next/link'
import { ChevronDown, Menu, X, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About us', href: '/about' },
        { name: 'Courses', href: '/courses' },
        { name: 'Blog', href: '/blog' },
        { name: 'Placements', href: '/placements' },
    ];

    const pages = [
        { name: 'Reviews', href: '/reviews' },
        { name: 'Contact US', href: '/contact' },
        { name: 'FAQS', href: '/faqs' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-and-conditions' }
    ];

    const isActive = (path: string) => pathname === path;

    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    return (
        <div className="fixed top-0 left-0 right-0 w-full z-[1000] flex justify-center pt-3 md:pt-5 pointer-events-none px-2 md:px-0">
            <motion.nav
                layout
                className={`pointer-events-auto flex items-center justify-between gap-1 md:gap-2 transition-all duration-500 ease-in-out w-full md:w-fit max-w-[95%] flex-nowrap shrink-0 rounded-full pl-2 pr-2 md:pr-3 py-1.5 border
                ${isScrolled
                        ? 'bg-white/95 backdrop-blur-2xl border-white/50 shadow-[0_12px_44px_rgba(0,0,0,0.15)] py-2 md:py-2.5 scale-[0.98]'
                        : 'bg-white/80 backdrop-blur-xl border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-0.5'
                    }`}
            >
                <Link href="/" className="mr-0 md:mr-4 shrink-0 relative w-[130px] md:w-[180px] h-[40px] md:h-[48px] flex items-center justify-start md:justify-center overflow-visible">
                    <img src="/logo.png" alt="Be Campus Academy" className="absolute h-[80px] md:h-[120px] w-auto max-w-none mix-blend-multiply object-contain origin-left md:origin-center -left-3 md:left-auto" />
                </Link>

                <div className="hidden lg:flex items-center gap-1 flex-nowrap whitespace-nowrap" onMouseLeave={() => setHoveredPath(null)}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onMouseEnter={() => setHoveredPath(link.href)}
                            className={`relative px-[18px] py-[10px] rounded-full font-semibold text-[15px] transition-colors duration-200 whitespace-nowrap z-10 ${isActive(link.href) ? 'text-primary' : 'text-text-secondary hover:text-primary'
                                }`}
                        >
                            {link.name}
                            {isActive(link.href) && (
                                <motion.div
                                    layoutId="navbar-active-bg"
                                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            {hoveredPath === link.href && !isActive(link.href) && (
                                <motion.div
                                    layoutId="navbar-hover-bg"
                                    className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}

                    <div
                        className="relative group flex items-center h-full"
                        onMouseEnter={() => setHoveredPath('/pages')}
                    >
                        <div className={`relative z-10 px-[18px] py-[10px] rounded-full font-semibold text-[15px] transition-colors duration-200 flex items-center gap-1 cursor-pointer whitespace-nowrap ${pages.some(p => isActive(p.href)) ? 'text-primary' : 'text-text-secondary hover:text-primary'
                            }`}>
                            Pages <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            {pages.some(p => isActive(p.href)) && (
                                <motion.div
                                    layoutId="navbar-active-bg"
                                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            {hoveredPath === '/pages' && !pages.some(p => isActive(p.href)) && (
                                <motion.div
                                    layoutId="navbar-hover-bg"
                                    className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </div>

                        <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-2.5 bg-white min-w-[220px] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-[1000] border border-black/5">
                            {pages.map((page, i) => (
                                <Link
                                    key={i}
                                    href={page.href}
                                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${isActive(page.href) ? 'text-primary bg-primary/5' : 'text-text-secondary hover:bg-slate-50 hover:text-primary'
                                        }`}
                                >
                                    {page.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center ml-auto shrink-0 gap-1 md:gap-2">
                    <Link
                        href="/contact"
                        className="bg-primary text-white rounded-full px-4 py-2 md:px-5 md:py-2.5 text-[13px] md:text-[14px] font-semibold whitespace-nowrap transition-transform duration-200 hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-sm shadow-primary/20"
                    >
                        Join Now
                    </Link>

                    <button
                        className="lg:hidden flex items-center justify-center p-1.5 md:p-2 rounded-full hover:bg-slate-100 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute top-[75px] left-6 right-6 bg-white p-6 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col gap-3 z-[1000] pointer-events-auto overflow-hidden lg:hidden"
                    >
                        {[...navLinks, ...pages].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`w-full text-center px-[18px] py-[10px] rounded-full font-semibold text-[15px] transition-colors duration-200 ${isActive(link.href) ? 'text-primary bg-primary/10' : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
