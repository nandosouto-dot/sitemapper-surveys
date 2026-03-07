import React from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Users, Award, Clock, Scan, Shield } from 'lucide-react';

const values = [
    {
        icon: Target,
        title: 'Precision',
        description: 'Sub-10mm accuracy using the latest Leica and Trimble instrumentation ensures your project data is reliable from day one.',
    },
    {
        icon: Users,
        title: 'Partnership',
        description: 'We work as an extension of your design and construction teams, understanding the pressures of live project programmes.',
    },
    {
        icon: Award,
        title: 'Quality',
        description: 'All deliverables adhere to RICS and ICES standards, providing you with data you can trust for planning, design, and construction.',
    },
    {
        icon: Clock,
        title: 'Responsiveness',
        description: 'With a 24-hour quotation turnaround and flexible scheduling, we adapt to your project timeline — not the other way round.',
    },
];

const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '±5mm', label: 'Typical Accuracy' },
    { value: '24hrs', label: 'Quote Turnaround' },
    { value: '15+', label: 'Years Experience' },
];

const equipment = [
    'Leica TS16 & TS60 Total Stations',
    'Leica RTC360 3D Laser Scanner',
    'Leica GS18T GNSS',
    'DJI Matrice 300 RTK Drone',
    'Autodesk Revit & AutoCAD',
    'Leica Cyclone & CloudWorx',
];

export default function AboutPage() {
    return (
        <div className="grid-overlay">
            {/* Hero */}
            <section className="pt-32 pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
                <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-wider">About Us</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a1628] dark:text-white mt-3 tracking-tight">
                    Expert Surveyors,{' '}
                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#00e5ff] bg-clip-text text-transparent">
                        Trusted Partners
                    </span>
                </h1>
                <p className="text-lg text-[#64748b] max-w-2xl mx-auto mt-6 leading-relaxed">
                    Sitemapper Surveys is a specialist geomatic engineering firm delivering high-accuracy spatial data to the UK construction and design industries.
                </p>
            </section>

            {/* Stats */}
            <section className="px-4 sm:px-6 max-w-5xl mx-auto pb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="text-center p-6 rounded-2xl border border-[#e2e8f0] dark:border-[#1e3550] bg-white dark:bg-[#111d32]"
                        >
                            <div className="text-3xl font-extrabold bg-gradient-to-r from-[#1e3a5f] to-[#00b4d8] bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[#64748b] mt-2 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Story */}
            <section className="py-20 bg-[#f0f4f8] dark:bg-[#111d32] border-y border-[#e2e8f0] dark:border-[#1e3550]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-wider">Our Story</span>
                            <h2 className="text-3xl font-extrabold text-[#0a1628] dark:text-white mt-3 mb-6">
                                Built on Precision, Driven by Service
                            </h2>
                            <p className="text-[#64748b] leading-relaxed mb-4">
                                Founded by experienced chartered surveyors, Sitemapper Surveys was established to bridge the gap between traditional land surveying and modern digital engineering demands.
                            </p>
                            <p className="text-[#64748b] leading-relaxed mb-4">
                                From single-plot topographical surveys to multi-year structural monitoring programmes, we bring the same commitment to accuracy and client service to every engagement.
                            </p>
                            <p className="text-[#64748b] leading-relaxed">
                                Based in South East England, we serve clients across the UK — from London&apos;s densest urban environments to rural greenfield developments.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#111d32] aspect-square flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `radial-gradient(circle, #00b4d8 1px, transparent 1px)`,
                                    backgroundSize: '20px 20px',
                                }}
                            />
                            <div className="relative z-10 text-center">
                                <Scan className="w-16 h-16 text-[#00b4d8] mx-auto mb-4 opacity-50" />
                                <p className="text-white/60 text-sm font-medium">Precision Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-wider">Our Values</span>
                    <h2 className="text-3xl font-extrabold text-[#0a1628] dark:text-white mt-3">
                        What Sets Us Apart
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={value.title}
                                className="flex gap-5 p-6 rounded-2xl border border-[#e2e8f0] dark:border-[#1e3550] bg-white dark:bg-[#111d32] hover:border-[#00b4d8]/30 transition-colors"
                            >
                                <div className="p-3 rounded-xl bg-[#f0f4f8] dark:bg-[#162541] text-[#1e3a5f] dark:text-[#00b4d8] shrink-0 h-fit">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0a1628] dark:text-white text-lg mb-2">{value.title}</h3>
                                    <p className="text-[#64748b] text-sm leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Equipment */}
            <section className="py-20 bg-[#f0f4f8] dark:bg-[#111d32] border-y border-[#e2e8f0] dark:border-[#1e3550]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-wider">Technology</span>
                    <h2 className="text-3xl font-extrabold text-[#0a1628] dark:text-white mt-3 mb-10">
                        Industry-Leading Equipment
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {equipment.map((item) => (
                            <span
                                key={item}
                                className="px-5 py-2.5 rounded-full border border-[#e2e8f0] dark:border-[#1e3550] text-sm font-medium text-[#334155] dark:text-[#cbd5e1] bg-white dark:bg-[#162541] hover:border-[#00b4d8] hover:text-[#1e3a5f] dark:hover:text-[#00b4d8] transition-colors"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-[#0a1628] dark:text-white mb-4">
                    Ready to work with us?
                </h2>
                <p className="text-[#64748b] text-lg max-w-lg mx-auto mb-8">
                    Get in touch with our team to discuss your surveying requirements.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8e] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#1e3a5f]/25 transition-all duration-300 hover:-translate-y-1"
                >
                    Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
            </section>
        </div>
    );
}
