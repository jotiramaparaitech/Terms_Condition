import React from "react";
import { MapPin } from "lucide-react";

const TermsAndConditions = () => {
  const [accepted, setAccepted] = React.useState(false);

  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      highlight:
        "By registering for, accessing, or using any part of Aparaitech Software's services, you confirm that you accept and agree to these Terms and Conditions.",
      content:
        "If you do not agree to these terms, please do not use our services.",
    },
    {
      id: 2,
      title: "Eligibility",
      highlight: "You must be at least 16 years old to use our services.",
      content:
        "For certain services like study abroad or financial products, additional eligibility requirements may apply.",
    },
    {
      id: 3,
      title: "User Account Responsibilities",
      highlight:
        "You must provide accurate information and keep your account credentials secure.",
      content:
        "You are responsible for all activities under your account.",
    },
    {
      id: 4,
      title: "Use of Services",
      highlight:
        "You agree to use our services only for lawful purposes.",
      content:
        "You may not violate laws, defraud, harass, or harm others.",
    },
    {
      id: 5,
      title: "Live Project & Service Enrollments",
      highlight:
        "Enrollment in live projects or programs is subject to availability.",
      content:
        "All payments are non-refundable unless stated otherwise.",
    },
    {
      id: 6,
      title: "Intellectual Property",
      highlight:
        "All website content is the property of Aparaitech Software.",
      content:
        "You may not reproduce or distribute content without permission.",
    },
    {
      id: 7,
      title: "Privacy",
      highlight:
        "Your use of our platform is governed by our Privacy Policy.",
      content: "We are committed to protecting your data.",
    },
    {
      id: 8,
      title: "Refund & Policy",
      highlight:
        "All fees paid are non-refundable and non-transferable.",
      content:
        "Project changes are subject to approval and availability.",
    },
    {
      id: 9,
      title: "Disclaimer",
      highlight:
        "Our services are provided 'as is' and 'as available'.",
      content:
        "We do not guarantee uninterrupted or error-free services.",
    },
    {
      id: 10,
      title: "Limitation of Liability",
      highlight:
        "Aparaitech Software is not liable for damages or losses.",
      content:
        "Including inability to use services or unauthorized access.",
    },
    {
      id: 11,
      title: "Dispute Resolution",
      highlight:
        "All disputes must be raised in writing.",
      content:
        "We aim to resolve within 7 working days.",
    },
    {
      id: 12,
      title: "Termination",
      highlight:
        "We may suspend or terminate access at any time.",
      content:
        "Especially in cases of misuse.",
    },
    {
      id: 13,
      title: "Governing Law",
      highlight:
        "These Terms are governed by the laws of India.",
      content:
        "Jurisdiction: Bengaluru, Karnataka.",
    },
    {
      id: 14,
      title: "Changes to Terms",
      highlight:
        "We may update Terms at any time.",
      content:
        "Continued use means acceptance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-6">

      {/* HEADER */}
      <header className="max-w-5xl mx-auto mb-10 text-center animate-fade-in">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Terms & Conditions
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Aparaitech Software – Legal Agreement & Policies
        </p>
      </header>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto space-y-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-gray-800/70 backdrop-blur-md border border-gray-700 p-6 rounded-2xl shadow-lg 
            hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            <h2 className="text-xl font-bold mb-2 text-white">
              {section.id}. {section.title}
            </h2>
            <p className="text-blue-400 font-semibold mb-2">
              {section.highlight}
            </p>
            <p className="text-gray-300">{section.content}</p>
          </div>
        ))}
      </div>

      {/* CONTACT */}
      <div className="max-w-5xl mx-auto mt-12 bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
        <h2 className="text-xl font-bold mb-4 text-center">
          Contact Information
        </h2>

        <div className="bg-gray-900 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="text-blue-400" />
            <h3 className="font-bold">Baramati Branch</h3>
          </div>

          <p className="text-gray-300 mb-2">
            Mukti Complex,<br />
            Near Prashaskiya Bhawan,<br />
            Baramati, Pune, Maharashtra
          </p>

          <p className="text-gray-300">
            <strong>Phone:</strong> +91 63643 26342
          </p>
          <p className="text-gray-300">
            <strong>Email:</strong> info@aparaitechsoftware.org
          </p>
          <p className="text-gray-300">
            <strong>Website:</strong> www.aparaitech.org
          </p>
        </div>
      </div>

      {/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 mt-12">
  <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* Company Info */}
    <div>
      <h2 className="text-xl font-semibold text-white mb-3">
        Aparaitech Software
      </h2>
      <p className="text-sm text-gray-400">
        Building innovative solutions with a focus on quality, security, and performance.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">
        Quick Links
      </h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:text-white transition">Home</a></li>
        <li><a href="/about" className="hover:text-white transition">About Us</a></li>
        <li><a href="/services" className="hover:text-white transition">Services</a></li>
        <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">
        Contact Us
      </h3>
      <p className="text-sm text-gray-400">
        Mukti Complex, Near Prashaskiya Bhawan,<br />
        Baramati, Pune, Maharashtra
      </p>
      <p className="text-sm mt-2">📧 info@aparaitechsoftware.org</p>
      <p className="text-sm">📞 +91 63643 26342</p>
    </div>

    {/* Map Section */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">
        Our Location
      </h3>
      <div className="w-full h-40 rounded-lg overflow-hidden border border-gray-700 shadow-md">
        <iframe
          title="Aparaitech Software Location"
          src="https://maps.google.com/maps?q=Aparaitech%20Software%20Baramati&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Aparaitech Software. All rights reserved. <br />
    <span className="text-gray-400">
      Designed with professionalism & security in mind.
    </span>
  </div>
</footer>
    </div>
  );
};

export default TermsAndConditions;