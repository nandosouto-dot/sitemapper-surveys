'use client';

import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Upload, X, FileText, CheckCircle } from 'lucide-react';

const serviceOptions = [
    'Land Topographical Surveying',
    'Setting Out Engineering',
    'Measured Building Surveys',
    '3D Laser Scanning (BIM)',
    'Structural Monitoring',
    'Volumetric Calculation',
    'Area Calculation (NIA, GIA)',
    'Other',
];

const ALLOWED_EXTENSIONS = ['.pdf', '.dwg', '.dxf', '.jpg', '.jpeg', '.png', '.tif', '.tiff'];
const MAX_TOTAL_SIZE = 25 * 1024 * 1024; // 25MB

interface StagedFile {
    file: File;
    id: string;
}

function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [files, setFiles] = useState<StagedFile[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const totalSize = files.reduce((sum, f) => sum + f.file.size, 0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addFiles = (newFiles: FileList | null) => {
        if (!newFiles) return;
        const valid = Array.from(newFiles).filter((f) => {
            const ext = '.' + f.name.split('.').pop()?.toLowerCase();
            return ALLOWED_EXTENSIONS.includes(ext);
        });
        setFiles((prev) => [
            ...prev,
            ...valid.map((f) => ({ file: f, id: crypto.randomUUID() })),
        ]);
    };

    const removeFile = (id: string) => {
        setFiles((prev) => prev.filter((f) => f.id !== id));
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
        if (e.type === 'dragleave') setDragActive(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        addFiles(e.dataTransfer.files);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="grid-overlay min-h-screen flex items-center justify-center px-4">
                <div className="max-w-md w-full text-center p-12 rounded-3xl bg-white dark:bg-surface border border-border dark:border-border shadow-xl">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground dark:text-white mb-3">
                        Enquiry Received
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-6">
                        Thank you for contacting Sitemapper Surveys. We will review your requirements and respond with a detailed quotation within 24 hours.
                    </p>
                    <button
                        onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', message: '' }); setFiles([]); }}
                        className="px-6 py-3 bg-secondary text-accent font-semibold rounded-full hover:bg-secondary-light hover:shadow-lg transition-all"
                    >
                        Submit Another Enquiry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="grid-overlay">
            {/* Hero */}
            <section className="pt-12 pb-16 px-4 sm:px-6 max-w-5xl mx-auto text-center">
                <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Contact Us</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground dark:text-white mt-3 tracking-tight">
                    Request a Quote
                </h1>
                <p className="text-lg text-text-muted max-w-2xl mx-auto mt-6 leading-relaxed">
                    Tell us about your project and receive a detailed quotation within 24 hours. Upload plans, drawings, or site photos to help us understand your requirements.
                </p>
            </section>

            <section className="px-4 sm:px-6 max-w-6xl mx-auto pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="p-6 rounded-2xl border border-border dark:border-border bg-white dark:bg-surface">
                            <h3 className="font-bold text-foreground dark:text-white mb-4">Get in Touch</h3>
                            <div className="space-y-4">
                                <a href="mailto:info@sitemappersurveys.co.uk" className="flex items-center gap-3 text-sm text-text-muted hover:text-secondary transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-surface dark:bg-surface-dark flex items-center justify-center">
                                        <Mail className="w-4 h-4 text-primary dark:text-secondary" />
                                    </div>
                                    info@sitemappersurveys.co.uk
                                </a>
                                <a href="tel:+44XXXXXXXXXX" className="flex items-center gap-3 text-sm text-text-muted hover:text-secondary transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-surface dark:bg-surface-dark flex items-center justify-center">
                                        <Phone className="w-4 h-4 text-primary dark:text-secondary" />
                                    </div>
                                    +44 (0) XXXX XXXXXX
                                </a>
                                <div className="flex items-center gap-3 text-sm text-text-muted">
                                    <div className="w-10 h-10 rounded-xl bg-surface dark:bg-surface-dark flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-primary dark:text-secondary" />
                                    </div>
                                    South East England, UK
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl border border-border dark:border-border bg-white dark:bg-surface">
                            <h3 className="font-bold text-foreground dark:text-white mb-2">24-Hour Response</h3>
                            <p className="text-text-muted text-sm leading-relaxed">
                                We guarantee a detailed quotation within 24 hours of receiving your enquiry, including mobilisation timeline and cost breakdown.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-primary text-on-primary">
                            <h3 className="font-bold mb-2">Accepted File Types</h3>
                            <p className="text-on-primary/60 text-sm mb-3">Upload site plans, drawings, or photos:</p>
                            <div className="flex flex-wrap gap-2">
                                {ALLOWED_EXTENSIONS.map((ext) => (
                                    <span key={ext} className="text-xs font-mono bg-white/10 px-2 py-1 rounded">{ext}</span>
                                ))}
                            </div>
                            <p className="text-on-primary/40 text-xs mt-3">Max total: 25MB</p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="lg:col-span-2 p-8 rounded-2xl border border-border dark:border-border bg-white dark:bg-surface">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground dark:text-foreground mb-2">Full Name *</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-border dark:border-border bg-surface dark:bg-surface-dark text-foreground dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm"
                                    placeholder="John Smith"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground dark:text-foreground mb-2">Email Address *</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-border dark:border-border bg-surface dark:bg-surface-dark text-foreground dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm"
                                    placeholder="john@example.co.uk"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-foreground dark:text-foreground mb-2">Phone Number</label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-border dark:border-border bg-surface dark:bg-surface-dark text-foreground dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm"
                                    placeholder="+44 7XXX XXXXXX"
                                />
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-foreground dark:text-foreground mb-2">Service Interest *</label>
                                <select
                                    id="service"
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-border dark:border-border bg-surface dark:bg-surface-dark text-foreground dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm"
                                >
                                    <option value="">Select a service…</option>
                                    {serviceOptions.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-foreground dark:text-foreground mb-2">Project Details *</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-border dark:border-border bg-surface dark:bg-surface-dark text-foreground dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm resize-none"
                                placeholder="Describe the site, location, and any specific requirements…"
                            />
                        </div>

                        {/* File Upload */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-foreground dark:text-foreground mb-2">Attach Files</label>
                            <div
                                onDragEnter={handleDrag}
                                onDragOver={handleDrag}
                                onDragLeave={handleDrag}
                                onDrop={handleDrop}
                                onClick={() => inputRef.current?.click()}
                                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${dragActive
                                        ? 'border-secondary bg-secondary/5 scale-[1.02]'
                                        : 'border-border dark:border-border hover:border-secondary/50'
                                    }`}
                            >
                                <Upload className={`w-8 h-8 mx-auto mb-3 ${dragActive ? 'text-secondary' : 'text-text-light'}`} />
                                <p className="text-sm text-text-muted">
                                    <span className="font-semibold text-primary dark:text-secondary">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-text-light mt-1">PDF, DWG, DXF, JPG, PNG, TIFF — Max 25MB total</p>
                                <input
                                    ref={inputRef}
                                    type="file"
                                    multiple
                                    accept={ALLOWED_EXTENSIONS.join(',')}
                                    onChange={(e) => addFiles(e.target.files)}
                                    className="hidden"
                                />
                            </div>

                            {/* Staged Files */}
                            {files.length > 0 && (
                                <div className="mt-4 space-y-2">
                                    {files.map((f) => (
                                        <div key={f.id} className="flex items-center justify-between px-4 py-3 rounded-xl bg-surface dark:bg-surface-dark border border-border dark:border-border">
                                            <div className="flex items-center gap-3">
                                                <FileText className="w-4 h-4 text-primary dark:text-secondary" />
                                                <div>
                                                    <p className="text-sm font-medium text-foreground dark:text-white truncate max-w-[200px]">{f.file.name}</p>
                                                    <p className="text-xs text-text-light">{formatFileSize(f.file.size)}</p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFile(f.id)}
                                                className="p-1.5 rounded-lg text-text-light hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                    {totalSize > MAX_TOTAL_SIZE && (
                                        <p className="text-xs text-red-500 font-medium">Total file size exceeds 25MB. Please remove some files.</p>
                                    )}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={submitting || totalSize > MAX_TOTAL_SIZE}
                            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-accent font-bold rounded-full hover:bg-secondary-light hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                                    Submitting…
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" /> Submit Enquiry
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
