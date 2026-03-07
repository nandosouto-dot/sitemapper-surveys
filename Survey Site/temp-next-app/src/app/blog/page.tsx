import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'The Complete Guide to Topographical Surveys for Planning Applications',
        excerpt: 'Everything architects and developers need to know about commissioning a topographical survey for their UK planning submission.',
        category: 'Guides',
        author: 'Sitemapper Team',
        date: '28 Feb 2026',
        readTime: '8 min read',
    },
    {
        id: 2,
        title: 'Scan-to-BIM: How 3D Laser Scanning is Transforming Refurbishment Projects',
        excerpt: 'Discover how point cloud technology is revolutionising the way M&E contractors approach clash detection and design coordination.',
        category: 'Technology',
        author: 'Sitemapper Team',
        date: '15 Feb 2026',
        readTime: '6 min read',
    },
    {
        id: 3,
        title: '5 Common Mistakes When Setting Out on Site (And How to Avoid Them)',
        excerpt: 'From inadequate control networks to incorrect datum levels — learn the pitfalls that can cost your project time and money.',
        category: 'Best Practices',
        author: 'Sitemapper Team',
        date: '1 Feb 2026',
        readTime: '5 min read',
    },
    {
        id: 4,
        title: 'Understanding RICS Measured Survey Standards: Level 1, 2 & 3 Explained',
        excerpt: 'A breakdown of the RICS guidelines for measured building surveys and which level is right for your project.',
        category: 'Standards',
        author: 'Sitemapper Team',
        date: '18 Jan 2026',
        readTime: '7 min read',
    },
    {
        id: 5,
        title: 'Drone Surveying vs Traditional Methods: When to Use Each',
        excerpt: 'Comparing UAV photogrammetry with terrestrial total station and GNSS methods for accuracy, speed, and cost-effectiveness.',
        category: 'Technology',
        author: 'Sitemapper Team',
        date: '5 Jan 2026',
        readTime: '6 min read',
    },
    {
        id: 6,
        title: 'Structural Monitoring During Basement Excavation: A Case Study',
        excerpt: 'How real-time monitoring protected adjacent buildings during a deep basement dig in central London.',
        category: 'Case Study',
        author: 'Sitemapper Team',
        date: '20 Dec 2025',
        readTime: '5 min read',
    },
];

const categories = ['All', ...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
    return (
        <div className="grid-overlay">
            {/* Hero */}
            <section className="pt-32 pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
                <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-wider">Blog</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0a1628] dark:text-white mt-3 tracking-tight">
                    Insights & Expertise
                </h1>
                <p className="text-lg text-[#64748b] max-w-2xl mx-auto mt-6 leading-relaxed">
                    Technical guides, industry insights, and case studies from our team of experienced surveyors.
                </p>
            </section>

            {/* Blog Grid */}
            <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group rounded-2xl border border-[#e2e8f0] dark:border-[#1e3550] bg-white dark:bg-[#111d32] overflow-hidden hover:border-[#00b4d8]/50 hover:shadow-xl hover:shadow-[#00b4d8]/5 transition-all duration-300"
                        >
                            {/* Category Banner */}
                            <div className="h-48 bg-gradient-to-br from-[#1e3a5f] to-[#111d32] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0,180,216,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.4) 1px, transparent 1px)`,
                                        backgroundSize: '30px 30px',
                                    }}
                                />
                                <span className="relative z-10 px-4 py-2 bg-[#00b4d8]/20 text-[#00b4d8] text-sm font-semibold rounded-full border border-[#00b4d8]/30">
                                    {post.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h2 className="text-lg font-bold text-[#0a1628] dark:text-white group-hover:text-[#1e3a5f] dark:group-hover:text-[#00b4d8] transition-colors leading-snug mb-3">
                                    {post.title}
                                </h2>
                                <p className="text-[#64748b] text-sm leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-[#94a3b8] mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>
                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1e3a5f] dark:text-[#00b4d8] group-hover:gap-2 transition-all cursor-pointer">
                                    Read Article <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
