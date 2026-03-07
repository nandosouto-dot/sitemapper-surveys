'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Map, Ruler, Building2, Scan, Activity, Box, Calculator } from 'lucide-react';

const services = [
    { title: 'Land Topographical Surveying', href: '/services#topographical', icon: Map },
    { title: 'Setting Out Engineering', href: '/services#setting-out', icon: Ruler },
    { title: 'Measured Building Surveys', href: '/services#measured-building', icon: Building2 },
    { title: '3D Laser Scanning (BIM)', href: '/services#laser-scanning', icon: Scan },
    { title: 'Structural Monitoring', href: '/services#monitoring', icon: Activity },
    { title: 'Volumetric Calculation', href: '/services#volumetric', icon: Box },
    { title: 'Area Calculation (NIA, GIA)', href: '/services#area-calc', icon: Calculator },
];

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'About Us', href: '/about' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setServicesOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                ? 'bg-white/95 dark:bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/5 border-[#e2e8f0] dark:border-[#1e3550]'
                : 'bg-white/90 dark:bg-[#0a1628]/90 backdrop-blur-sm border-[#e2e8f0]/60 dark:border-[#1e3550]/60'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#00b4d8] flex items-center justify-center gnss-pulse">
                            <div className="w-3 h-3 rounded-full bg-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-tight text-[#0a1628] dark:text-white group-hover:text-[#00b4d8] transition-colors">
                                Sitemapper
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748b] font-medium">
                                Surveys
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) =>
                            link.hasDropdown ? (
                                <div key={link.label} ref={dropdownRef} className="relative">
                                    <button
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#334155] dark:text-[#cbd5e1] hover:text-[#1e3a5f] dark:hover:text-[#00b4d8] transition-colors rounded-lg hover:bg-[#f0f4f8] dark:hover:bg-[#162541]"
                                    >
                                        {link.label}
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Dropdown */}
                                    <div
                                        className={`absolute top-full left-0 mt-2 w-80 bg-white dark:bg-[#111d32] rounded-2xl shadow-2xl shadow-black/10 border border-[#e2e8f0] dark:border-[#1e3550] overflow-hidden transition-all duration-300 origin-top ${servicesOpen
                                            ? 'opacity-100 scale-100 translate-y-0'
                                            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                            }`}
                                    >
                                        <div className="p-2">
                                            {services.map((service) => {
                                                const Icon = service.icon;
                                                return (
                                                    <Link
                                                        key={service.title}
                                                        href={service.href}
                                                        onClick={() => setServicesOpen(false)}
                                                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#f0f4f8] dark:hover:bg-[#162541] transition-colors group"
                                                    >
                                                        <div className="w-9 h-9 rounded-lg bg-[#f0f4f8] dark:bg-[#1e3550] flex items-center justify-center group-hover:bg-[#1e3a5f] group-hover:text-white transition-colors">
                                                            <Icon className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-sm font-medium text-[#334155] dark:text-[#cbd5e1] group-hover:text-[#1e3a5f] dark:group-hover:text-white transition-colors">
                                                            {service.title}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                        <div className="border-t border-[#e2e8f0] dark:border-[#1e3550] p-3">
                                            <Link
                                                href="/services"
                                                onClick={() => setServicesOpen(false)}
                                                className="flex items-center justify-center py-2 text-sm font-semibold text-[#00b4d8] hover:text-[#1e3a5f] transition-colors"
                                            >
                                                View All Services →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-[#334155] dark:text-[#cbd5e1] hover:text-[#1e3a5f] dark:hover:text-[#00b4d8] transition-colors rounded-lg hover:bg-[#f0f4f8] dark:hover:bg-[#162541]"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                        <Link
                            href="/contact"
                            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#1e3a5f]/25 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Request a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-[#334155] dark:text-[#cbd5e1] hover:bg-[#f0f4f8] dark:hover:bg-[#162541] transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-white dark:bg-[#0a1628] border-t border-[#e2e8f0] dark:border-[#1e3550] px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 text-[#334155] dark:text-[#cbd5e1] font-medium rounded-lg hover:bg-[#f0f4f8] dark:hover:bg-[#162541] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block mt-4 px-6 py-3 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] text-white text-center font-semibold rounded-full"
                    >
                        Request a Quote
                    </Link>
                </div>
            </div>
        </nav>
    );
}
