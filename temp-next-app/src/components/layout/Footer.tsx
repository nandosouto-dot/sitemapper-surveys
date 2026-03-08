import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
    services: [
        { label: 'Land Topographical Surveying', href: '/services#topographical' },
        { label: 'Setting Out Engineering', href: '/services#setting-out' },
        { label: 'Measured Building Surveys', href: '/services#measured-building' },
        { label: '3D Laser Scanning (BIM)', href: '/services#laser-scanning' },
        { label: 'Structural Monitoring', href: '/services#monitoring' },
        { label: 'Volumetric Calculation', href: '/services#volumetric' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact Us', href: '/contact' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#0a1628] text-[#94a3b8] border-t border-[#1e3550]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#00b4d8] flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-white">Sitemapper</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748b]">Surveys</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Delivering high-accuracy geospatial data and site engineering services to de-risk your construction and design projects across the UK.
                        </p>
                        <div className="space-y-3">
                            <a href="mailto:info@sitemappersurveys.co.uk" className="flex items-center gap-2 text-sm hover:text-[#00b4d8] transition-colors">
                                <Mail className="w-4 h-4" /> info@sitemappersurveys.co.uk
                            </a>
                            <a href="tel:+44XXXXXXXXXX" className="flex items-center gap-2 text-sm hover:text-[#00b4d8] transition-colors">
                                <Phone className="w-4 h-4" /> +44 (0) XXXX XXXXXX
                            </a>
                            <div className="flex items-center gap-2 text-sm">
                                <MapPin className="w-4 h-4" /> South East England, UK
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm hover:text-[#00b4d8] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm hover:text-[#00b4d8] transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Get Started</h3>
                        <p className="text-sm mb-6 leading-relaxed">
                            Need precision surveying for your next project? Get a detailed quotation within 24 hours.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-6 py-3 bg-secondary text-accent font-semibold text-sm rounded-full hover:bg-secondary-light hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300"
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#1e3550]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-[#64748b]">
                        © {new Date().getFullYear()} Sitemapper Surveys. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-[#64748b]">
                        <span className="w-2 h-2 rounded-full bg-[#10b981] inline-block" />
                        24-Hour Quotation Turnaround
                    </div>
                </div>
            </div>
        </footer>
    );
}
