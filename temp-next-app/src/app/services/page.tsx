'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Map, Ruler, Building2, Scan, Activity, Box, Calculator,
    ArrowRight, Mail, CheckCircle2,
} from 'lucide-react';

const services = [
    {
        id: 'topographical',
        title: 'Land Topographical Surveying',
        icon: Map,
        concept: 'The detailed mapping of both natural and man-made features and ground levels to provide a precise 3D representation of a site for design and planning.',
        features: ['Boundary Surveys', 'Topographical Mapping', 'Subdivision Planning', 'Contour Generation', 'Feature Mapping'],
        deliverables: ['2D/3D Topographical Plans', 'DWG/DXF CAD Files', 'Georeferenced Data', 'PDF Reports'],
    },
    {
        id: 'setting-out',
        title: 'Setting Out Engineering',
        icon: Ruler,
        concept: 'Transferring architectural and engineering design coordinates directly onto the ground to guide the physical construction of foundations, walls, and infrastructure.',
        features: ['Foundation Layout', 'Grid Line Establishment', 'Infrastructure Alignment', 'Pile Positioning', 'As-Built Verification'],
        deliverables: ['Setting Out Reports', 'As-Built Surveys', 'Deviation Analysis', 'Digital Mark-up Plans'],
    },
    {
        id: 'measured-building',
        title: 'Measured Building Surveys',
        icon: Building2,
        concept: 'Creating highly accurate 2D floor plans, sections, and elevations of existing structures, essential for refurbishment, heritage recording, or internal fit-out projects.',
        features: ['Floor Plans', 'Building Elevations', 'Internal Fit-out Details', 'Cross Sections', 'Ceiling Plans'],
        deliverables: ['Scaled Floor Plans', 'Elevation Drawings', 'Section Drawings', 'RICS Level 2/3 Compliance'],
    },
    {
        id: 'laser-scanning',
        title: '3D Laser Scanning (BIM)',
        icon: Scan,
        concept: "Utilising high-speed laser pulses to capture millions of data points (point clouds), forming a precise 'digital twin' of a physical space to facilitate Building Information Modelling (BIM) and clash detection.",
        features: ['Point Cloud Generation', 'Scan-to-BIM Workflows', '3D Digital Twins', 'Clash Detection', 'Heritage Recording'],
        deliverables: ['Point Cloud Data (.e57, .rcp)', 'Revit BIM Models (LOD 200–400)', 'Mesh Models', 'Fly-through Animations'],
    },
    {
        id: 'monitoring',
        title: 'Structural Monitoring',
        icon: Activity,
        concept: 'Systematic measurement of potential movement or deformation in buildings, bridges, or retaining walls over time using high-precision sensors to ensure structural integrity and safety.',
        features: ['Settlement Tracking', 'Deformation Analysis', 'Real-time Alerting', 'Automated Prism Monitoring', 'Tilt & Inclination'],
        deliverables: ['Monitoring Reports', 'Displacement Graphs', 'Alert Dashboards', 'Epoch Comparison Data'],
    },
    {
        id: 'volumetric',
        title: 'Volumetric Calculation',
        icon: Box,
        concept: 'The use of LiDAR, total stations, or drone photogrammetry to measure and calculate the precise volume of stockpiles, excavations, or earthworks for accurate site logistics.',
        features: ['Cut and Fill Analysis', 'Stockpile Tonnage', 'Earthwork Reporting', 'Drone Photogrammetry', 'Monthly Reconciliation'],
        deliverables: ['Volume Reports', 'Cut/Fill Isopach Plans', 'Tonnage Certificates', 'Comparison Surfaces'],
    },
    {
        id: 'area-calc',
        title: 'Area Calculation (NIA, GIA)',
        icon: Calculator,
        concept: 'Using total station or point cloud data to measure, calculate and produce drawings for accurate area reporting in accordance with RICS standards.',
        features: ['Net Internal Area (NIA)', 'Gross Internal Area (GIA)', 'IPMS Compliance', 'Lease Plans', 'Area Schedules'],
        deliverables: ['Area Schedule Reports', 'RICS-Compliant Plans', 'Lease Plan Drawings', 'GIA/NIA Certificates'],
    },
];

function ServiceDetail({ service }: { service: typeof services[0] }) {
    const [expanded, setExpanded] = useState(false);
    const Icon = service.icon;

    return (
        <div id={service.id} className="scroll-mt-24">
            <div
                className={`rounded-2xl border transition-all duration-500 overflow-hidden ${expanded
                        ? 'border-[#00b4d8]/50 shadow-xl shadow-[#00b4d8]/5 bg-white dark:bg-[#111d32]'
                        : 'border-[#e2e8f0] dark:border-[#1e3550] bg-white dark:bg-[#111d32] hover:border-[#00b4d8]/30'
                    }`}
            >
                {/* Header */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="w-full flex items-center gap-5 p-6 sm:p-8 text-left cursor-pointer group"
                >
                    <div className={`p-4 rounded-xl transition-all duration-300 shrink-0 ${expanded
                            ? 'bg-gradient-to-br from-[#1e3a5f] to-[#00b4d8] text-white shadow-lg shadow-[#00b4d8]/20'
                            : 'bg-[#f0f4f8] dark:bg-[#162541] text-[#64748b] group-hover:text-[#1e3a5f] dark:group-hover:text-[#00b4d8]'
                        }`}>
                        <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-[#0a1628] dark:text-white group-hover:text-[#1e3a5f] dark:group-hover:text-[#00b4d8] transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-[#64748b] text-sm mt-1 line-clamp-1">{service.concept}</p>
                    </div>
                    <div className={`text-[#94a3b8] transition-transform duration-300 shrink-0 ${expanded ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </button>

                {/* Expanded Content */}
                <div className={`transition-all duration-500 ease-in-out ${expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                    <div className="px-6 sm:px-8 pb-8 border-t border-[#e2e8f0] dark:border-[#1e3550] pt-6">
                        <p className="text-[#334155] dark:text-[#94a3b8] leading-relaxed mb-6">{service.concept}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1e3a5f] dark:text-[#00b4d8] mb-4">Key Features</h4>
                                <ul className="space-y-2">
                                    {service.features.map((f: string) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-[#334155] dark:text-[#cbd5e1]">
                                            <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#1e3a5f] dark:text-[#00b4d8] mb-4">Deliverables</h4>
                                <ul className="space-y-2">
                                    {service.deliverables.map((d: string) => (
                                        <li key={d} className="flex items-center gap-2 text-sm text-[#334155] dark:text-[#cbd5e1]">
                                            <CheckCircle2 className="w-4 h-4 text-[#00b4d8] shrink-0" /> {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <div className="grid-overlay">
            {/* Hero */}
            <section className="pt-32 pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
                <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-wider">Our Services</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a1628] dark:text-white mt-3 tracking-tight">
                    Precision Surveying Solutions
                </h1>
                <p className="text-lg text-[#64748b] max-w-2xl mx-auto mt-6 leading-relaxed">
                    Delivering high-accuracy geospatial data and site engineering services to de-risk your construction and design projects.
                </p>
            </section>

            {/* Services List */}
            <section className="pb-24 px-4 sm:px-6 max-w-4xl mx-auto space-y-4">
                {services.map((service) => (
                    <ServiceDetail key={service.id} service={service} />
                ))}
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
                    <h2 className="text-3xl font-bold text-white mb-4">Need a bespoke surveying solution?</h2>
                    <p className="text-[#94a3b8] max-w-lg mx-auto mb-8">
                        Our team of experienced surveyors can tailor a package to meet your project&apos;s exact requirements.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00b4d8] to-[#00e5ff] text-[#0a1628] font-bold rounded-full hover:shadow-xl hover:shadow-[#00b4d8]/30 transition-all duration-300 hover:-translate-y-1"
                    >
                        <Mail className="w-4 h-4" /> Request a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
