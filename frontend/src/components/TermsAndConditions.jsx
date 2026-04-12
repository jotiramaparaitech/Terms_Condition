import React from 'react';
import { FileText, Shield, Lock, AlertCircle, Globe, Check, Phone, MapPin, Mail } from 'lucide-react';

const TermsAndConditions = () => {
    const [accepted, setAccepted] = React.useState(false);

    const companyInfo = {
        name: "Aparaitech Software",
        address: {
            main: "360, Neeladri Rd, Electronic City Phase I, Bengaluru – 560100",
            branch: "Mukti Complex, Near Prashaskiya Bhawan, Baramati, Pune, Maharashtra"
        },
        contact: {
            email: "info@aparaitech.org",
            phone: "+91 63643 26342",
            website: "www.aparaitech.org"
        }
    };

    const sections = [
        {
            id: 1,
            title: "Acceptance of Terms",
            highlight: "By registering for, accessing, or using any part of our Services, you confirm that you accept and agree to be legally bound by these Terms and Conditions.",
            content: "If you are agreeing on behalf of an organization, you represent that you have the authority to bind that entity. If you do not agree to all of these terms, please do not use our Services."
        },
        {
            id: 2,
            title: "Eligibility",
            highlight: "You must be at least 16 years old to use our Services.",
            content: "For certain services like study abroad or financial products, additional eligibility requirements may apply as specified in the service description."
        },
        {
            id: 3,
            title: "User Account Responsibilities",
            highlight: "When creating an account on our platform, you agree to provide accurate and complete information and keep your login credentials secure.",
            content: "You are responsible for all activities that occur under your account. We reserve the right to suspend or terminate your account if we find any false or misleading information."
        },
        {
            id: 4,
            title: "Use of Services",
            highlight: "You agree to use our services only for lawful purposes.",
            content: "You may not: Violate any laws or regulations; Use our platform to defraud, harass, or harm others; Share or distribute copyrighted or confidential material without proper rights."
        },
        {
            id: 5,
            title: "Live Project & Service Enrollments",
            highlight: "Enrollment in Live Projects or programs is subject to availability and verification.",
            content: "Payment once made is strictly non-refundable under any circumstances, unless explicitly stated in a separate written agreement by Aparaitech Software. We reserve the right to make changes to Live Project content, pricing, Team Leader, and schedules to improve the learning experience."
        },
        {
            id: 6,
            title: "Intellectual Property",
            highlight: "All content on this website is the property of Aparaitech Software or its content partners and is protected by copyright and trademark laws.",
            content: "This includes text, logos, graphics, videos, and materials. You may not reproduce, distribute, or exploit any content without our prior written permission."
        },
        {
            id: 7,
            title: "Privacy",
            highlight: "Use of our website is also governed by our Privacy Policy.",
            content: "Our Privacy Policy explains how we collect, store, and use your data."
        },
        {
            id: 8,
            title: "Refund & Live Project Change Policy",
            highlight: "All fees paid to Aparaitech Software for Live Projects, programs, subscriptions, or services are non-refundable and non-transferable.",
            content: "If you are unable to continue with your enrolled Live Project, you may request to change to another available Live Project of equal or lower value, subject to verification and approval. Students may request a batch change based on availability. Switch to a higher-value Live Project by paying the difference in fees after approval. All requests must be made in writing through official communication channels."
        },
        {
            id: 9,
            title: "Disclaimer of Warranties",
            highlight: "Our website and services are provided 'as is' and 'as available'.",
            content: "While we strive to offer accurate and up-to-date content, we do not guarantee that the site will be error-free or uninterrupted. We are not liable for any loss or damage caused by reliance on information from our platform."
        },
        {
            id: 10,
            title: "Limitation of Liability",
            highlight: "Aparaitech Software shall not be held liable for any unauthorized access to or alteration of user data.",
            content: "We are not liable for any use or inability to use our services."
        },
        {
            id: 11,
            title: "Dispute Resolution",
            highlight: "Any disputes related to payments, services, or platform usage must be raised in writing to our official support team.",
            content: "Aparaitech Software commits to resolving all disputes within 7 working days from the date of receiving the complaint."
        },
        {
            id: 12,
            title: "Termination of Services",
            highlight: "We reserve the right to suspend or terminate your access to our platform at any time, without prior notice.",
            content: "This may occur for violation of these terms or misuse of services."
        },
        {
            id: 13,
            title: "Governing Law & Jurisdiction",
            highlight: "These Terms & Conditions are governed by the laws of India.",
            content: "Any disputes shall be subject to the exclusive jurisdiction of courts located in Udaipur, Rajasthan, India."
        },
        {
            id: 14,
            title: "Changes to Terms",
            highlight: "We may revise these terms at any time.",
            content: "Continued use of the platform after changes are posted constitutes acceptance of those changes."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Header - Mobile Optimized */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
                            Terms & Conditions
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
                            Welcome to Aparaitech Software! By accessing our website, mobile platform, or any of our services, you agree to comply with and be bound by the following Terms and Conditions.
                        </p>
                    </div>
                </div>

                {/* Terms Sections - Mobile Optimized */}
                <div className="space-y-4 sm:space-y-8">
                    {sections.map((section) => (
                        <div
                            key={section.id}
                            className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100 hover:shadow-lg sm:hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
                                <div className="flex-shrink-0 flex justify-center sm:justify-start mb-2 sm:mb-0">
                                    <div className="p-2 sm:p-3 bg-blue-100 rounded-lg sm:rounded-xl">
                                        {(() => {
                                            switch (section.title) {
                                                case 'Acceptance of Terms': return <Check className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />;
                                                case 'Eligibility': return <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />;
                                                case 'User Account Responsibilities':
                                                case 'Termination of Services':
                                                case 'Privacy': return <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />;
                                                case 'Disclaimer of Warranties':
                                                case 'Limitation of Liability':
                                                case 'Refund & Live Project Change Policy': return <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />;
                                                case 'Governing Law & Jurisdiction':
                                                case 'Use of Services': return <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />;
                                                default: return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />;
                                            }
                                        })()}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start gap-2 sm:gap-3 mb-3">
                                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                                            {section.id}
                                        </div>
                                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-3 sm:space-y-4">
                                        <div className="bg-blue-50 border-l-4 border-blue-500 pl-3 sm:pl-4 py-2 sm:py-3 rounded-r">
                                            <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 leading-relaxed">
                                                {section.highlight}
                                            </p>
                                        </div>

                                        <div className="pt-1 sm:pt-2">
                                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                                                {section.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Information - Mobile Optimized */}
                <div className="mt-8 sm:mt-12 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                        Contact Information
                    </h2>

                

                        {/* Baramati Branch */}
                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-100">
                            <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                <div className="p-1 sm:p-2 bg-white border border-blue-200 rounded-lg shadow-sm">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Baramati Branch</h3>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                                    <p className="text-xs sm:text-sm text-gray-500 font-medium mb-1 sm:mb-2">Address</p>
                                    <p className="text-sm sm:text-base text-gray-800">
                                        Mukti Complex,<br />
                                        Near Prashaskiya Bhawan,<br />
                                        Baramati, Pune, Maharashtra
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                                        <p className="text-xs text-gray-500 mb-1">Phone</p>
                                        <p className="text-sm sm:text-base text-gray-800 font-semibold">+91 63643 26342</p>
                                    </div>

                                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                                        <p className="text-xs text-gray-500 mb-1">Email</p>
                                        <p className="text-sm sm:text-base text-gray-800 font-semibold">info@aparaitechsoftware.org</p>
                                    </div>

                                    <div className="bg-white rounded-lg p-3 border border-gray-200 sm:col-span-2">
                                        <p className="text-xs text-gray-500 mb-1">Website</p>
                                        <p className="text-sm sm:text-base text-gray-800 font-semibold">www.aparaitech.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer - Mobile Optimized */}
                <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                    <p className="text-sm sm:text-base text-gray-600 mb-2">
                        <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">
                        © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default TermsAndConditions;
