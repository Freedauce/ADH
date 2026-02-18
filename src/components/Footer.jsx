import { Link } from 'react-router-dom';
import { Building2, Leaf, GraduationCap, BarChart3, Mail, MapPin, Phone, ExternalLink, ArrowUpRight } from 'lucide-react';

const footerLinks = {
    Platform: [
        { label: 'Procurement Hub', path: '/procurement', icon: Building2 },
        { label: 'Carbon Dashboard', path: '/carbon', icon: Leaf },
        { label: 'Franchise Platform', path: '/franchise', icon: GraduationCap },
        { label: 'Investor Dashboard', path: '/investor', icon: BarChart3 },
    ],
    Company: [
        { label: 'About ADHI', path: '/' },
        { label: 'Our Team', path: '/' },
        { label: 'Careers', path: '/' },
        { label: 'Press & Media', path: '/' },
        { label: 'Contact Us', path: '/' },
    ],
    Resources: [
        { label: 'Documentation', path: '/' },
        { label: 'Case Studies', path: '/' },
        { label: 'Sustainability Report', path: '/' },
        { label: 'API Reference', path: '/' },
    ],
    Legal: [
        { label: 'Privacy Policy', path: '/' },
        { label: 'Terms of Service', path: '/' },
        { label: 'Cookie Policy', path: '/' },
        { label: 'Data Processing', path: '/' },
    ],
};

const offices = [
    { city: 'Kigali', country: 'Rwanda', type: 'HQ' },
    { city: 'Kampala', country: 'Uganda', type: 'Regional' },
    { city: 'Nairobi', country: 'Kenya', type: 'Regional' },
    { city: 'Dar es Salaam', country: 'Tanzania', type: 'Regional' },
];

export default function Footer() {
    return (
        <footer id="site-footer" className="relative bg-gray-50 border-t border-gray-200">
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-adhi-orange/40 to-transparent" />

            {/* Newsletter / CTA Section */}
            <div className="max-w-7xl mx-auto px-6 pt-16">
                <div className="glass-card p-8 md:p-12 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-adhi-orange/5 rounded-full blur-[100px]" />
                    <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Stay Updated on <span className="gradient-text">ADHI's Progress</span>
                            </h3>
                            <p className="text-adhi-gray-400 text-sm max-w-lg">
                                Get quarterly updates on project milestones, carbon impact reports, and investment opportunities.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-adhi-orange/40 transition-colors w-full sm:w-72"
                            />
                            <button className="btn-primary whitespace-nowrap justify-center">
                                <Mail size={16} />
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link to="/" className="flex items-center mb-5">
                            <img
                                src="/Logo.png"
                                alt="ADHI Logo"
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
                            African Development Housing Initiative. Digitizing housing infrastructure across Africa through procurement, carbon accountability, and franchise scalability.
                        </p>

                        {/* Offices */}
                        <div className="space-y-2 mb-5">
                            {offices.map(office => (
                                <div key={office.city} className="flex items-center gap-2 text-xs text-adhi-gray-500">
                                    <MapPin size={11} className="text-adhi-orange flex-shrink-0" />
                                    <span>{office.city}, {office.country}</span>
                                    {office.type === 'HQ' && (
                                        <span className="px-1.5 py-0.5 bg-adhi-orange/10 text-adhi-orange rounded text-[9px] font-semibold">HQ</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-xs text-adhi-gray-500">
                            <Phone size={11} className="text-adhi-orange" />
                            <span>+250 788 000 000</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-adhi-orange/10 border border-adhi-orange/20 rounded-full mt-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-adhi-orange animate-pulse" />
                            <span className="text-adhi-orange text-xs font-medium">Phase 1 – Illustrative Demo</span>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-gray-900 font-semibold text-sm mb-4 uppercase tracking-wider">{title}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-500 text-sm hover:text-adhi-orange transition-colors duration-300 flex items-center gap-1.5 group"
                                        >
                                            {link.label}
                                            <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-adhi-orange" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-adhi-gray-500 text-xs">
                        © {new Date().getFullYear()} ADHI – African Development Housing Initiative. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-adhi-gray-600 text-xs hover:text-adhi-orange transition-colors">Twitter</a>
                        <a href="#" className="text-adhi-gray-600 text-xs hover:text-adhi-orange transition-colors">LinkedIn</a>
                        <a href="#" className="text-adhi-gray-600 text-xs hover:text-adhi-orange transition-colors">Instagram</a>
                    </div>
                    <p className="text-adhi-gray-600 text-xs italic">
                        Phase 1 – Illustrative Demo Only. All data is fictional.
                    </p>
                </div>
            </div>
        </footer>
    );
}
