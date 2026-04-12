import React from 'react';
import { FileText, Shield, Lock, AlertCircle, Globe, Check, MapPin } from 'lucide-react';

const TermsAndConditions = () => {
    const [accepted, setAccepted] = React.useState(false);

    const companyInfo = {
        name: "Aparaitech Software",
        address: {
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
            content: "You are responsible for all activities that occur under your account."
        },
        {
            id: 4,
            title: "Use of Services",
            highlight: "You agree to use our services only for lawful purposes.",
            content: "You may not violate any laws, defraud, or misuse the platform."
        },
        {
            id: 5,
            title: "Live Project & Service Enrollments",
            highlight: "Enrollment in Live Projects or programs is subject to availability and verification.",
            content: "Payment once made is strictly non-refundable unless stated otherwise."
        },
        {
            id: 6,
            title: "Intellectual Property",
            highlight: "All content on this website is the property of Aparaitech Software.",
            content: "You may not reproduce or distribute any content without permission."
        },
        {
            id: 7,
            title: "Privacy",
            highlight: "Use of our website is also governed by our Privacy Policy.",
            content: "We ensure proper handling of your data."
        },
        {
            id: 8,
            title: "Refund Policy",
            highlight: "All fees paid are non-refundable and non-transferable.",
            content: "Changes can be requested under specific conditions."
        },
        {
            id: 9,
            title: "Disclaimer",
            highlight: "Services are provided 'as is' without guarantees.",
            content: "We are not liable for interruptions or errors."
        },
        {
            id: 10,
            title: "Limitation of Liability",
            highlight: "We are not liable for unauthorized access or damages.",
            content: "Use services at your own risk."
        },
        {
            id: 11,
            title: "Dispute Resolution",
            highlight: "Disputes must be raised in writing.",
            content: "We resolve issues within 7 working days."
        },
        {
            id: 12,
            title: "Termination",
            highlight: "We may terminate access at any time.",
            content: "Especially in case of misuse."
        },
        {
            id: 13,
            title: "Governing Law",
            highlight: "These terms are governed by Indian laws.",
            content: "Jurisdiction: Udaipur, Rajasthan."
        },
        {
            id: 14,
            title: "Changes to Terms",
            highlight: "Terms may be updated anytime.",
            content: "Continued use implies acceptance."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-6 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
                    <p className="text-gray-600 mt-2">
                        Welcome to Aparaitech Software. Please review our terms carefully.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-6">
                    {sections.map((section) => (
                        <div key={section.id} className="bg-white p-6 rounded-xl shadow">
                            <h2 className="text-xl font-bold mb-2">
                                {section.id}. {section.title}
                            </h2>
                            <p className="font-semibold text-blue-600 mb-2">
                                {section.highlight}
                            </p>
                            <p className="text-gray-700">{section.content}</p>
                        </div>
                    ))}
                </div>

                {/* Contact Information (Only Baramati) */}
                <div className="mt-10 bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4 text-center">
                        Contact Information
                    </h2>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-3">
                            <MapPin className="text-blue-600" />
                            <h3 className="font-bold">Baramati Branch</h3>
                        </div>

                        <p className="text-gray-700 mb-2">
                            Mukti Complex,<br />
                            Near Prashaskiya Bhawan,<br />
                            Baramati, Pune, Maharashtra
                        </p>

                        <p className="text-gray-700"><strong>Phone:</strong> +91 63643 26342</p>
                        <p className="text-gray-700"><strong>Email:</strong> info@aparaitech.org</p>
                        <p className="text-gray-700"><strong>Website:</strong> www.aparaitech.org</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500">
                    © {new Date().getFullYear()} Aparaitech Software. All rights reserved.
                </div>

            </div>
        </div>
    );
};

export default TermsAndConditions;
