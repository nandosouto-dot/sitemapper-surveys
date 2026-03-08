'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Map, Ruler, Building2, Scan, Activity, Box,
  ArrowRight, Shield, Clock, ChevronRight,
} from 'lucide-react';
import { projects } from '@/data/projects';

const services = [
  {
    title: 'Land Topographical Surveying',
    icon: Map,
    concept: 'The detailed mapping of both natural and man-made features and ground levels to provide a precise 3D representation of a site.',
    features: ['Boundary Surveys', 'Topographical Mapping', 'Subdivision Planning'],
  },
  {
    title: 'Setting Out Engineering',
    icon: Ruler,
    concept: 'Transferring architectural and engineering design coordinates directly onto the ground to guide physical construction.',
    features: ['Foundation Layout', 'Grid Line Establishment', 'Infrastructure Alignment'],
  },
  {
    title: 'Measured Building Surveys',
    icon: Building2,
    concept: 'Creating highly accurate 2D floor plans, sections, and elevations of existing structures for refurbishment or heritage recording.',
    features: ['Floor Plans', 'Building Elevations', 'Internal Fit-out Details'],
  },
  {
    title: '3D Laser Scanning (BIM)',
    icon: Scan,
    concept: "Capturing millions of data points to form a precise 'digital twin' of a physical space for BIM and clash detection.",
    features: ['Point Cloud Generation', 'Scan-to-BIM Workflows', '3D Digital Twins'],
  },
  {
    title: 'Structural Monitoring',
    icon: Activity,
    concept: 'Systematic measurement of movement or deformation in structures over time to ensure integrity and safety.',
    features: ['Settlement Tracking', 'Deformation Analysis', 'Real-time Alerting'],
  },
  {
    title: 'Volumetric Calculation',
    icon: Box,
    concept: 'Using LiDAR or photogrammetry to calculate precise volumes of stockpiles or excavations for logistics.',
    features: ['Cut and Fill Analysis', 'Stockpile Tonnage', 'Earthwork Reporting'],
  },
];

const sectors = [
  'Architecture & Planning',
  'Infrastructure & Highways',
  'Construction & Civil Engineering',
  'Heritage & Conservation',
  'Arts & Leisure',
  'Residential Development',
  'Commercial & Retail',
  'Energy & Utilities',
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="relative p-6 rounded-2xl border border-[#e2e8f0] dark:border-[#1e3550] bg-white dark:bg-[#111d32] transition-all duration-300 cursor-pointer group hover:border-[#00b4d8]/50 hover:shadow-xl hover:shadow-[#00b4d8]/5 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-xl transition-all duration-300 ${isHovered
            ? 'bg-gradient-to-br from-[#1e3a5f] to-[#00b4d8] text-white shadow-lg shadow-[#00b4d8]/20'
            : 'bg-[#f0f4f8] dark:bg-[#162541] text-[#64748b]'
          }`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-[#0a1628] dark:text-white group-hover:text-[#1e3a5f] dark:group-hover:text-[#00b4d8] transition-colors text-lg">
          {service.title}
        </h3>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <p className="text-[#64748b] text-sm leading-relaxed mb-4">{service.concept}</p>
        <div className="flex flex-wrap gap-2">
          {service.features.map((feat: string) => (
            <span
              key={feat}
              className="text-xs font-medium text-[#1e3a5f] dark:text-[#00b4d8] bg-[#f0f4f8] dark:bg-[#162541] px-3 py-1 rounded-full"
            >
              {feat}
            </span>
          ))}
        </div>
      </div>

      {!isHovered && (
        <p className="text-[#94a3b8] text-xs mt-2 flex items-center gap-1">
          <ChevronRight className="w-3 h-3" /> Hover to learn more
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="grid-overlay scan-line">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#111d32] to-[#1e3a5f]" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #00b4d8 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, #00b4d8 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00b4d8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#1e3a5f]/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00b4d8] text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#10b981] inline-block" />
            24-Hour Quotation Turnaround
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Precision Surveying &{' '}
            <span className="bg-gradient-to-r from-[#00b4d8] to-[#00e5ff] bg-clip-text text-transparent">
              Geomatic Engineering
            </span>{' '}
            Solutions
          </h1>

          <p className="text-lg sm:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Delivering high-accuracy spatial data to de-risk construction and design projects across the UK.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-secondary text-accent font-bold rounded-full hover:bg-secondary-light hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-secondary text-accent font-semibold rounded-full hover:bg-secondary-light transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust Signals */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[#64748b]">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-[#00b4d8]" />
              <span>RICS Compliant Standards</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-[#00b4d8]" />
              <span>24hr Quote Turnaround</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Scan className="w-4 h-4 text-[#00b4d8]" />
              <span>Sub-10mm Accuracy</span>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0a1628] to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] dark:text-white mt-3 tracking-tight">
            Precision Surveying Solutions
          </h2>
          <p className="text-[#64748b] text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive geomatic services for every stage of your project lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#1e3a5f] dark:border-[#00b4d8] text-[#1e3a5f] dark:text-[#00b4d8] font-semibold rounded-full hover:bg-[#1e3a5f] hover:text-white dark:hover:bg-[#00b4d8] dark:hover:text-[#0a1628] transition-all duration-300"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Industry Sectors Ribbon */}
      <section className="py-16 bg-[#f0f4f8] dark:bg-[#111d32] overflow-hidden border-y border-[#e2e8f0] dark:border-[#1e3550]">
        <div className="text-center mb-10">
          <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-wider">Industries We Serve</span>
        </div>
        <div className="relative">
          <div className="flex ribbon-scroll whitespace-nowrap">
            {[...sectors, ...sectors].map((sector, i) => (
              <span
                key={`${sector}-${i}`}
                className="inline-flex items-center px-8 py-3 mx-3 text-sm font-medium text-[#334155] dark:text-[#cbd5e1] bg-white dark:bg-[#162541] rounded-full border border-[#e2e8f0] dark:border-[#1e3550] hover:border-[#00b4d8] hover:text-[#1e3a5f] dark:hover:text-[#00b4d8] transition-colors cursor-default whitespace-nowrap"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1628] dark:text-white mt-3 tracking-tight">
            Latest Projects
          </h2>
          <p className="text-[#64748b] text-lg mt-4 max-w-2xl mx-auto">
            Real-world case studies demonstrating our geomatic expertise across the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio#project-${project.id}`}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e3a5f] to-[#111d32] aspect-[4/3] flex flex-col justify-end p-6 hover:shadow-2xl hover:shadow-[#00b4d8]/10 transition-all duration-500"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-[#00b4d8]/20 text-[#00b4d8] rounded-full mb-3 border border-[#00b4d8]/30">
                  {project.sector}
                </span>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00b4d8] transition-colors leading-snug">
                  {project.title}
                </h3>
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100">
                  <p className="text-[#94a3b8] text-sm leading-relaxed">
                    {project.solution.slice(0, 120)}…
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#1e3a5f] dark:text-[#00b4d8] font-semibold hover:gap-3 transition-all"
          >
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-4 sm:mx-6 lg:mx-auto max-w-7xl mb-24 rounded-3xl bg-gradient-to-r from-[#1e3a5f] to-[#0a1628] p-12 sm:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #00b4d8 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-lg mx-auto mb-8">
            Contact our team for a free consultation and a detailed quotation within 24 hours.
          </p>
          <Link
            href="/contact"
<<<<<<< HEAD
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00b4d8] to-[#00e5ff] text-[#0a1628] font-bold rounded-full hover:shadow-xl hover:shadow-[#00b4d8]/30 transition-all duration-300 hover:-translate-y-1"
=======
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-accent font-bold rounded-full hover:bg-secondary-light hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:-translate-y-1"
>>>>>>> 8233b15 (Fix navbar collision and update CTA button colors)
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
