import React, { useState, useMemo, useEffect } from 'react';
import {
    FileText,
    Shield,
    Lock,
    AlertCircle,
    Globe,
    Check,
    Phone,
    MapPin,
    Mail,
    Search,
    Award,
    Scale,
    Moon,
    Sun,
    ChevronRight,
    ExternalLink,
    ArrowUp,
    MessageCircle
} from 'lucide-react';

const TermsAndConditions = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeSection, setActiveSection] = useState('acceptance-of-terms');
    const [showBackToTop, setShowBackToTop] = useState(false);

    const companyInfo = {
        name: "Aparaitech Software",
        website: "www.aparaitech.org",
        email: "info@ai.aparaitech.org",
        phone: "+91 9158852129",
        whatsapp: "9158852129",
        whatsappLink: "https://wa.me/919158852129?text=Hello%20Aparaitech%20Software,%20I%20have%20a%20query%20regarding%20Terms%20and%20Conditions.",
        address: "122, Gera Imperium, Hinjawadi Phase 2, Pune, Maharashtra – 411057",
        jurisdiction: "Pune, Maharashtra, India",
        updatedDate: "1 May 2026"
    };

    const sections = [
        {
            id: 1,
            slug: "acceptance-of-terms",
            title: "1. Acceptance of Terms",
            icon: Check,
            content: "By registering for, accessing, or using any part of Aparaitech Software's services, website, mobile platform, or live project environments, you confirm that you accept and agree to be legally bound by these terms. If you do not agree to all of these terms, please do not access or use our services."
        },
        {
            id: 2,
            slug: "eligibility",
            title: "2. Eligibility",
            icon: Shield,
            content: "You must be at least 16 years old to use our services. For certain specialized technical programs, live software development tracks, or advanced corporate certifications, additional eligibility requirements and technical prerequisites may apply as outlined in the respective program descriptions."
        },
        {
            id: 3,
            slug: "user-account-responsibilities",
            title: "3. User Account Responsibilities",
            icon: Lock,
            content: "When creating an account on our platform or receiving development environment credentials, you agree to:",
            bullets: [
                "Provide accurate, current, and complete personal and professional information during registration.",
                "Maintain the strict confidentiality of your account login credentials, API keys, and repository access tokens.",
                "Accept full responsibility for all activities, code commits, and interactions conducted under your account."
            ],
            footer: "Aparaitech Software reserves the right to suspend, restrict, or terminate your account if any submitted information is determined to be false, inaccurate, or misleading."
        },
        {
            id: 4,
            slug: "use-of-services",
            title: "4. Use of Services",
            icon: Globe,
            content: "You agree to utilize our services and engineering platforms strictly for lawful purposes. You expressly agree not to:",
            bullets: [
                "Violate any applicable national or international laws, data security regulations, or intellectual property rights.",
                "Use our platform, sandbox servers, or networks to defraud, harass, impersonate, or cause harm to others.",
                "Share, copy, mirror, or distribute proprietary source code, copyrighted documentation, or confidential material without prior written authorization."
            ]
        },
        {
            id: 5,
            slug: "course-and-service-enrollments",
            title: "5. Course, Live Project & Service Enrollments",
            icon: FileText,
            bullets: [
                "Enrollment in courses, Live Projects, specialized mentorship cohorts, or engineering programs is subject to seat availability, candidate verification, and administrative clearance.",
                "Payment once made is strictly non-refundable and non-transferable under any circumstances, unless explicitly stated in a separate written agreement duly signed by an authorized signatory of Aparaitech Software.",
                "We reserve the right to make necessary updates to course curricula, live project architectures, pricing structures, mentors, Team Leaders, and schedules to continuously improve educational and technical standards."
            ]
        },
        {
            id: 6,
            slug: "intellectual-property",
            title: "6. Intellectual Property",
            icon: Award,
            content: "All content on this website and platform—including text, graphics, logos, video lectures, source code, database architectures, and educational materials—is the sole property of Aparaitech Software or its enterprise partners and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, republish, or exploit any content without our prior written permission."
        },
        {
            id: 7,
            slug: "privacy",
            title: "7. Privacy",
            icon: Shield,
            content: "Your use of our website and services is also governed by our Privacy Policy. Our policy details how we collect, process, store, and protect your personal information in compliance with the Digital Personal Data Protection (DPDP) Act, 2023, and applicable data security regulations."
        },
        {
            id: 8,
            slug: "refund-and-course-change-policy",
            title: "8. Refund & Course / Live Project Change Policy",
            icon: AlertCircle,
            subsections: [
                {
                    subtitle: "No Refunds",
                    desc: "All fees paid to Aparaitech Software for courses, Live Projects, programs, subscriptions, or specialized technical services are strictly non-refundable and non-transferable under any circumstances."
                },
                {
                    subtitle: "Dispute Resolution Commitment",
                    desc: "Any payment-related queries, balance clarifications, or concerns must be submitted in writing to our official support team. Aparaitech Software commits to resolving all verified disputes within 7 working days from the date of receiving the communication."
                },
                {
                    subtitle: "Course / Live Project Change Option",
                    desc: "If you are unable to continue with your enrolled course or Live Project, you may submit a written request to transfer to another available course or project of equal or lower value, subject to verification and administrative approval."
                },
                {
                    subtitle: "Batch Change Option",
                    desc: "Enrolled students may request a batch transfer (shifting to an upcoming cohort or alternate schedule of the same course or Live Project), subject to seat availability and administrative review."
                },
                {
                    subtitle: "Upgrade Option",
                    desc: "You may choose to switch to a higher-tier program or advanced Live Project module by paying the applicable differential fee following approval."
                }
            ],
            footer: "All program, batch, or module change requests must be submitted in writing through official communication channels and are processed at Aparaitech Software's sole administrative discretion."
        },
        {
            id: 9,
            slug: "scholarships-and-fee-assistance",
            title: "9. Scholarships & Fee Assistance Policy",
            icon: Award,
            subsections: [
                {
                    subtitle: "Subject to Selection Criteria",
                    desc: "Any merit-based scholarships, promotional fee concessions, or financial assistance offered across Aparaitech Software programs are strictly subject to academic screening, technical evaluations, profile assessments, and cohort availability."
                },
                {
                    subtitle: "Not Guaranteed for All Applicants",
                    desc: "Mention or display of scholarship brackets does not imply automatic qualification. Concessions are awarded at the sole discretion of our admissions and scholarship evaluation committee."
                },
                {
                    subtitle: "Non-Transferable & Non-Encashable",
                    desc: "Approved fee waivers and scholarships apply exclusively to the specified candidate and cohort and cannot be transferred, exchanged, refunded, or encashed."
                },
                {
                    subtitle: "Verification & Revocation",
                    desc: "Aparaitech Software reserves the right to cancel or revoke scholarship benefits if any fraudulent documentation, misrepresentation, or violation of code of conduct is discovered at any stage."
                }
            ]
        },
        {
            id: 10,
            slug: "disclaimer-of-warranties",
            title: "10. Disclaimer of Warranties",
            icon: AlertCircle,
            content: "Our website, portals, sandbox development servers, and services are provided on an 'as is' and 'as available' basis. While we strive to maintain accurate, up-to-date, and reliable content:",
            bullets: [
                "We do not guarantee that the site or development environments will be completely error-free, uninterrupted, or free of bugs.",
                "We shall not be held liable for any direct or indirect loss or damage resulting from reliance on any information or code samples available through our platform."
            ]
        },
        {
            id: 11,
            slug: "limitation-of-liability",
            title: "11. Limitation of Liability",
            icon: Scale,
            content: "To the maximum extent permitted by applicable law, Aparaitech Software, its directors, employees, and affiliates shall not be liable for any:",
            bullets: [
                "Direct, indirect, incidental, or consequential damages arising from the use of or inability to use our services.",
                "Unauthorized access to, interception of, or alteration of user transmissions, code, or personal data.",
                "Content, statements, or conduct of any third party on our website, communication channels, or linked resources."
            ]
        },
        {
            id: 12,
            slug: "dispute-resolution",
            title: "12. Dispute Resolution",
            icon: Shield,
            content: "Any disputes, grievances, or issues related to payments, services, live project environments, or platform usage must be submitted in writing to our official support team. Aparaitech Software is committed to addressing and resolving all legitimate disputes within seven (7) working days from the date of receiving the complaint."
        },
        {
            id: 13,
            slug: "termination-of-services",
            title: "13. Termination of Services",
            icon: Lock,
            content: "We reserve the right to suspend, restrict, or permanently terminate your access to our platform, repositories, and communication channels at any time, without prior notice, for violation of these terms, code piracy, breach of confidentiality, or professional misconduct."
        },
        {
            id: 14,
            slug: "governing-law-and-jurisdiction",
            title: "14. Governing Law & Jurisdiction",
            icon: Globe,
            content: "These Terms & Conditions are governed by and construed in accordance with the substantive laws of India. Any disputes or legal proceedings arising hereunder shall be subject to the exclusive jurisdiction of the competent courts located in Pune, Maharashtra, India."
        },
        {
            id: 15,
            slug: "changes-to-terms",
            title: "15. Changes to Terms",
            icon: FileText,
            content: "We may revise or update these Terms and Conditions periodically. Any updates become effective immediately upon posting to our platform. Continued use of our website or services after changes are posted constitutes your full and voluntary acceptance of those modifications."
        }
    ];

    const filteredSections = useMemo(() => {
        if (!searchTerm.trim()) return sections;
        const term = searchTerm.toLowerCase();
        return sections.filter((s) => {
            return (
                s.title.toLowerCase().includes(term) ||
                (s.content && s.content.toLowerCase().includes(term)) ||
                (s.bullets && s.bullets.some((b) => b.toLowerCase().includes(term))) ||
                (s.subsections && s.subsections.some((sub) => sub.subtitle.toLowerCase().includes(term) || sub.desc.toLowerCase().includes(term)))
            );
        });
    }, [searchTerm, sections]);

    // Handle scroll to highlight active TOC section
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }

            const sectionElements = sections.map((s) => document.getElementById(s.slug));
            const scrollPos = window.scrollY + 180;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const el = sectionElements[i];
                if (el && el.offsetTop <= scrollPos) {
                    setActiveSection(sections[i].slug);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (slug) => {
        const el = document.getElementById(slug);
        if (el) {
            const yOffset = -90;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(slug);
        }
    };

    return (
        <div
            style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
            className={`min-h-screen transition-colors duration-200 ${
                darkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
            }`}
        >
            {/* Top Navigation Bar with Official Company Logo */}
            <header className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
                darkMode ? 'bg-[#0b0f19]/95 border-slate-800' : 'bg-white/95 border-slate-200'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* Official Company Logo */}
                    <div className="flex items-center gap-4">
                        <a href="/" className="flex items-center">
                            <img
                                src="/logo.jpg"
                                alt="Aparaitech Software Company Logo"
                                className="h-12 sm:h-14 w-auto object-contain rounded-md"
                            />
                        </a>
                    </div>

                    {/* Navbar Actions: WhatsApp Support, Theme Toggle, Print */}
                    <div className="flex items-center gap-2.5 sm:gap-4">
                        {/* WhatsApp Direct Chat Button */}
                        <a
                            href={companyInfo.whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-all"
                        >
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            <MessageCircle className="w-4 h-4" />
                            <span>WhatsApp: 9158852129</span>
                        </a>

                        {/* Dark/Light Theme Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2.5 rounded-lg border transition-colors ${
                                darkMode
                                    ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800'
                                    : 'border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100'
                            }`}
                            title="Toggle Light/Dark Theme"
                        >
                            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Breadcrumb & Document Header Banner - High Contrast Editorial Design */}
            <div className={`border-b ${darkMode ? 'bg-[#111827] border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-3">
                        <span className="hover:underline cursor-pointer">Home</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        <span className="hover:underline cursor-pointer">Company Policies</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                            Terms & Conditions
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-3xl">
                            <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2">
                                Legal Agreement & Governance
                            </span>
                            {/* Prominent High-Contrast Heading */}
                            <h1 className={`text-4xl sm:text-5xl font-serif font-extrabold tracking-tight ${
                                darkMode ? 'text-white' : 'text-slate-950'
                            }`}>
                                Terms & Conditions
                            </h1>
                            <p className={`text-base sm:text-lg mt-4 leading-relaxed text-justify ${
                                darkMode ? 'text-slate-300' : 'text-slate-700'
                            }`}>
                                Welcome to <strong className={darkMode ? 'text-white' : 'text-slate-950'}>Aparaitech Software</strong>! By accessing our website, mobile platform, or any of our services, you agree to comply with and be bound by the following Terms and Conditions. Please read these terms carefully before using our website or services.
                            </p>
                        </div>

                        {/* Metadata Box with 1 May 2026 Date */}
                        <div className={`p-5 rounded-xl border shrink-0 text-xs sm:text-sm space-y-2 ${
                            darkMode
                                ? 'bg-slate-900/90 border-slate-800 text-slate-300'
                                : 'bg-slate-50 border-slate-200/90 text-slate-700 shadow-xs'
                        }`}>
                            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                                <span className="text-slate-500 block text-2xs uppercase tracking-wider font-semibold">Document Status</span>
                                <strong className={`text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    Updated: <span className="text-teal-600 dark:text-teal-400 font-bold">{companyInfo.updatedDate}</span>
                                </strong>
                            </div>
                            <div>
                                <span className="text-slate-500">Governing Law:</span>{' '}
                                <strong className={darkMode ? 'text-slate-200' : 'text-slate-900'}>Republic of India</strong>
                            </div>
                            <div>
                                <span className="text-slate-500">Jurisdiction:</span>{' '}
                                <strong className={darkMode ? 'text-slate-200' : 'text-slate-900'}>Pune, Maharashtra</strong>
                            </div>
                            <div>
                                <span className="text-slate-500">Official Email:</span>{' '}
                                <span className={darkMode ? 'text-slate-300' : 'text-slate-800'}>info@ai.aparaitech.org</span>
                            </div>
                            <div className="pt-1 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                WhatsApp: +91 9158852129
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout: Two-Column Sticky Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Column: Sticky Table of Contents (TOC) */}
                    <aside className="lg:col-span-4 xl:col-span-3 hidden lg:block">
                        <div className="sticky top-28 space-y-5">
                            {/* Search bar inside TOC */}
                            <div className="relative">
                                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search clauses..."
                                    className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border outline-none transition ${
                                        darkMode
                                            ? 'bg-slate-900 border-slate-800 text-white focus:border-teal-500'
                                            : 'bg-white border-slate-300 text-slate-900 focus:border-teal-600 shadow-2xs'
                                    }`}
                                />
                            </div>

                            {/* Section Navigation List */}
                            <div className={`p-4 rounded-2xl border ${
                                darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xs'
                            }`}>
                                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 px-2">
                                    Table of Contents
                                </h2>
                                <nav className="space-y-1 text-xs sm:text-sm max-h-[60vh] overflow-y-auto pr-1">
                                    {sections.map((sec) => {
                                        const isCurrent = activeSection === sec.slug;
                                        return (
                                            <button
                                                key={sec.id}
                                                onClick={() => scrollToSection(sec.slug)}
                                                className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between group ${
                                                    isCurrent
                                                        ? 'bg-teal-700 text-white font-bold shadow-xs'
                                                        : darkMode
                                                            ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                                            : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                                                }`}
                                            >
                                                <span className="truncate">{sec.title}</span>
                                                <ChevronRight className={`w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${isCurrent ? 'opacity-100' : ''}`} />
                                            </button>
                                        );
                                    })}
                                    <button
                                        onClick={() => scrollToSection('contact-info')}
                                        className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between group ${
                                            activeSection === 'contact-info'
                                                ? 'bg-teal-700 text-white font-bold shadow-xs'
                                                : darkMode
                                                    ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                                        }`}
                                    >
                                        <span className="truncate">Contact Information</span>
                                        <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                </nav>
                            </div>

                            {/* Direct WhatsApp Quick Contact Box */}
                            <div className={`p-4 rounded-2xl border ${
                                darkMode ? 'bg-emerald-950/30 border-emerald-800/50 text-slate-200' : 'bg-emerald-50/80 border-emerald-200 text-slate-800'
                            }`}>
                                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs sm:text-sm uppercase mb-1">
                                    <MessageCircle className="w-4 h-4 text-emerald-500" />
                                    <span>Support Desk</span>
                                </div>
                                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-3">
                                    Need instant help regarding policies or live projects? Connect on WhatsApp.
                                </p>
                                <a
                                    href={companyInfo.whatsappLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition shadow-xs"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Chat on WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Right Column: Properly Aligned Terms Content */}
                    <main className="lg:col-span-8 xl:col-span-9 space-y-8">

                        {/* Mobile Search Bar */}
                        <div className="lg:hidden">
                            <div className="relative">
                                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search terms, refund, eligibility..."
                                    className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border outline-none ${
                                        darkMode
                                            ? 'bg-slate-900 border-slate-800 text-white'
                                            : 'bg-white border-slate-300 text-slate-900'
                                    }`}
                                />
                            </div>
                        </div>

                        {filteredSections.map((section) => {
                            const IconComponent = section.icon || FileText;
                            return (
                                <article
                                    key={section.id}
                                    id={section.slug}
                                    className={`p-6 sm:p-8 rounded-2xl border transition-all duration-200 scroll-mt-28 ${
                                        darkMode
                                            ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                                            : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                                    }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                                            darkMode
                                                ? 'bg-slate-800 text-teal-400 border border-slate-700'
                                                : 'bg-teal-50 text-teal-700 border border-teal-100'
                                        }`}>
                                            <IconComponent className="w-5 h-5" />
                                        </div>

                                        <div className="flex-1 space-y-3">
                                            <h2 className={`text-xl sm:text-2xl font-serif font-bold tracking-tight pb-2 border-b ${
                                                darkMode
                                                    ? 'text-white border-slate-800'
                                                    : 'text-slate-950 border-slate-100'
                                            }`}>
                                                {section.title}
                                            </h2>

                                            {section.content && (
                                                <p className={`text-[15px] sm:text-[16px] leading-[1.8] text-justify ${
                                                    darkMode ? 'text-slate-300' : 'text-slate-800'
                                                }`}>
                                                    {section.content}
                                                </p>
                                            )}

                                            {section.bullets && (
                                                <ul className="space-y-2.5 pt-1 pl-1">
                                                    {section.bullets.map((bullet, idx) => (
                                                        <li key={idx} className="flex items-start gap-2.5 text-[15px] sm:text-[16px] leading-[1.8] text-justify">
                                                            <span className="font-bold text-teal-700 dark:text-teal-400 shrink-0 mt-0.5">•</span>
                                                            <span className={darkMode ? 'text-slate-300' : 'text-slate-800'}>
                                                                {bullet}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {section.subsections && (
                                                <div className="space-y-3.5 pt-2">
                                                    {section.subsections.map((sub, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`p-4 rounded-xl border ${
                                                                darkMode
                                                                    ? 'bg-slate-900/90 border-slate-800'
                                                                    : 'bg-slate-50/90 border-slate-200'
                                                            }`}
                                                        >
                                                            <h3 className={`text-base font-serif font-bold mb-1 ${
                                                                darkMode ? 'text-teal-400' : 'text-slate-950'
                                                            }`}>
                                                                {sub.subtitle}
                                                            </h3>
                                                            <p className={`text-sm leading-relaxed text-justify ${
                                                                darkMode ? 'text-slate-300' : 'text-slate-700'
                                                            }`}>
                                                                {sub.desc}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {section.footer && (
                                                <p className={`text-xs sm:text-sm italic pt-2 text-justify ${
                                                    darkMode ? 'text-slate-400' : 'text-slate-600'
                                                }`}>
                                                    {section.footer}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}

                        {/* Contact Information Section */}
                        <section
                            id="contact-info"
                            className={`p-6 sm:p-8 rounded-2xl border scroll-mt-28 ${
                                darkMode
                                    ? 'bg-slate-900/70 border-slate-800'
                                    : 'bg-white border-slate-200 shadow-xs'
                            }`}
                        >
                            <h2 className={`text-2xl font-serif font-bold tracking-tight mb-6 pb-2 border-b ${
                                darkMode ? 'text-white border-slate-800' : 'text-slate-950 border-slate-100'
                            }`}>
                                Contact Information
                            </h2>

                            <div className="space-y-4">
                                <div className={`p-5 rounded-xl border ${
                                    darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                                }`}>
                                    <div className="flex items-center gap-2 font-bold text-sm uppercase mb-2 text-teal-800 dark:text-teal-400">
                                        <MapPin className="w-4 h-4 text-teal-600" />
                                        <span>Pune Branch (Headquarters)</span>
                                    </div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase mb-1">Address</p>
                                    <p className={`text-sm sm:text-base font-medium leading-relaxed ${
                                        darkMode ? 'text-slate-200' : 'text-slate-900'
                                    }`}>
                                        {companyInfo.address}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {/* WhatsApp Direct */}
                                    <div className={`p-4 rounded-xl border ${
                                        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                                    }`}>
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase mb-1">
                                            <MessageCircle className="w-3.5 h-3.5" />
                                            <span>WhatsApp Chat</span>
                                        </div>
                                        <a
                                            href={companyInfo.whatsappLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                                        >
                                            <span>+{companyInfo.whatsapp}</span>
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>

                                    {/* Phone */}
                                    <div className={`p-4 rounded-xl border ${
                                        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                                    }`}>
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase mb-1">
                                            <Phone className="w-3.5 h-3.5 text-slate-500" />
                                            <span>Phone</span>
                                        </div>
                                        <a href={`tel:${companyInfo.phone}`} className={`text-sm font-bold hover:text-teal-600 ${
                                            darkMode ? 'text-slate-200' : 'text-slate-900'
                                        }`}>
                                            {companyInfo.phone}
                                        </a>
                                    </div>

                                    {/* Email */}
                                    <div className={`p-4 rounded-xl border ${
                                        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                                    }`}>
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase mb-1">
                                            <Mail className="w-3.5 h-3.5 text-slate-500" />
                                            <span>Email</span>
                                        </div>
                                        <a href={`mailto:${companyInfo.email}`} className={`text-sm font-bold hover:text-teal-600 truncate block ${
                                            darkMode ? 'text-slate-200' : 'text-slate-900'
                                        }`}>
                                            {companyInfo.email}
                                        </a>
                                    </div>
                                </div>

                                <div className={`p-4 rounded-xl border flex items-center justify-between ${
                                    darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                                }`}>
                                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase">
                                        <Globe className="w-4 h-4 text-teal-600" />
                                        <span>Official Website</span>
                                    </div>
                                    <a
                                        href={`https://${companyInfo.website}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm font-bold text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1"
                                    >
                                        <span>{companyInfo.website}</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </section>

                    </main>
                </div>
            </div>

            {/* Floating WhatsApp Action Button (+91 9158852129) */}
            <aside aria-label="WhatsApp Support" className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
                <a
                    href={companyInfo.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-600/30 hover:scale-105 transition-all duration-200 group"
                    title="Chat with us on WhatsApp (+91 9158852129)"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span className="text-xs sm:text-sm font-bold tracking-wide">
                        WhatsApp Chat
                    </span>
                </a>
            </aside>

            {/* Back to top button */}
            {showBackToTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-20 right-6 z-40 p-2.5 rounded-full bg-slate-800 text-white shadow-md hover:bg-slate-700 transition"
                    title="Back to Top"
                >
                    <ArrowUp className="w-4 h-4" />
                </button>
            )}

            {/* Footer */}
            <footer className={`border-t py-10 mt-16 text-center text-xs sm:text-sm transition-colors ${
                darkMode ? 'border-slate-800 bg-[#070a12] text-slate-500' : 'border-slate-200 bg-white text-slate-600'
            }`}>
                <div className="max-w-7xl mx-auto px-4 space-y-2">
                    <p className="font-semibold text-slate-800 dark:text-slate-300">
                        Aparaitech Software • Pune Corporate & Technology Center
                    </p>
                    <p>Updated: 1 May 2026 • © 2026 Aparaitech Software. All rights reserved.</p>
                    <p>Governed by the Laws of India • Exclusive Legal Jurisdiction: Pune, Maharashtra</p>
                </div>
            </footer>
        </div>
    );
};

export default TermsAndConditions;