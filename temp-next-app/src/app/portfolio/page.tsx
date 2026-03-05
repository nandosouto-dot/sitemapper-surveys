'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';
import { projects } from '@/data/projects';

const allSectors = [...new Set(projects.map((p) => p.sector))];

export default function PortfolioPage() {
    const [activeSector, setActiveSector] = useState<string | null>(null);

    const filtered = activeSector
        ? projects.filter((p) => p.sector === activeSector)
        : projects;

    return (
        <div className="grid-overlay">
            {/* Hero */}
            <section className="pt-32 pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
                <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-wider">Our Work</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a1628] dark:text-white mt-3 tracking-tight">
                    Project Portfolio
                </h1>
                <p className="text-lg text-[#64748b] max-w-2xl mx-auto mt-6 leading-relaxed">
                    Explore our case studies across sectors, demonstrating precision surveying and geomatic expertise across the UK.
                </p>
            </section>

            {/* Filters */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-12">
                <div className="flex items-center gap-3 flex-wrap">
                    <Filter className="w-4 h-4 text-[#64748b]" />
                    <button
                        onClick={() => setActiveSector(null)}
                        className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${!activeSector
                                ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]'
                                : 'border-[#e2e8f0] dark:border-[#1e3550] text-[#64748b] hover:border-[#00b4d8] hover:text-[#00b4d8]'
                            }`}
                    >
                        All Projects
                    </button>
                    {allSectors.map((sector) => (
                        <button
                            key={sector}
                            onClick={() => setActiveSector(sector)}
                            className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${activeSector === sector
                                    ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]'
                                    : 'border-[#e2e8f0] dark:border-[#1e3550] text-[#64748b] hover:border-[#00b4d8] hover:text-[#00b4d8]'
                                }`}
                        >
                            {sector}
                        </button>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((project) => (
                        <div
                            key={project.id}
                            id={`project-${project.id}`}
                            className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e3a5f] to-[#111d32] aspect-[4/3] flex flex-col justify-end cursor-pointer hover:shadow-2xl hover:shadow-[#00b4d8]/10 transition-all duration-500"
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/50 to-transparent" />

                            {/* Decorative Grid */}
                            <div className="absolute inset-0 opacity-5"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(0,180,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.3) 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px',
                                }}
                            />

                            {/* Content */}
                            <div className="relative z-10 p-6">
                                <span className="inline-block px-3 py-1 text-xs font-medium bg-[#00b4d8]/20 text-[#00b4d8] rounded-full mb-3 border border-[#00b4d8]/30">
                                    {project.sector}
                                </span>
                                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00b4d8] transition-colors leading-snug">
                                    {project.title}
                                </h3>

                                {/* Hover Reveal */}
                                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-48 opacity-0 group-hover:opacity-100">
                                    <div className="pt-3 border-t border-white/10 mt-3">
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {project.services.map((s: string) => (
                                                <span key={s} className="text-[10px] font-medium text-[#94a3b8] bg-white/5 px-2 py-0.5 rounded-full">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">
                                            <strong className="text-white/80">Challenge:</strong> {project.challenge.slice(0, 100)}…
                                        </p>
                                        <p className="text-[#94a3b8] text-sm leading-relaxed">
                                            <strong className="text-[#00b4d8]/80">Solution:</strong> {project.solution.slice(0, 100)}…
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mx-4 sm:mx-6 lg:mx-auto max-w-5xl mb-24 rounded-3xl bg-gradient-to-r from-[#1e3a5f] to-[#0a1628] p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle, #00b4d8 1px, transparent 1px)`,
                        backgroundSize: '30px 30px',
                    }}
                />
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-4">Have a similar project?</h2>
                    <p className="text-[#94a3b8] max-w-lg mx-auto mb-8">
                        Let us put our expertise to work on your next survey. Get in touch for a bespoke quotation.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00b4d8] to-[#00e5ff] text-[#0a1628] font-bold rounded-full hover:shadow-xl hover:shadow-[#00b4d8]/30 transition-all duration-300 hover:-translate-y-1"
                    >
                        Request a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
