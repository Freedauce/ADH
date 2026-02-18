import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2, Leaf, GraduationCap, BarChart3, Home, Phone, ChevronDown, Newspaper, Shield } from 'lucide-react';

const navLinks = [
    { label: 'Home', path: '/', icon: Home, description: 'Overview & mission' },
    { label: 'Procurement', path: '/procurement', icon: Building2, description: 'Digital procurement hub' },
    { label: 'Carbon', path: '/carbon', icon: Leaf, description: 'Sustainability dashboard' },
    { label: 'Franchise', path: '/franchise', icon: Shield, description: 'Business expansion' },
    { label: 'Academy', path: '/academy', icon: GraduationCap, description: 'Training & certification' },
    { label: 'News', path: '/news', icon: Newspaper, description: 'Latest updates' },
    { label: 'Investor', path: '/investor', icon: BarChart3, description: 'Financial metrics' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileOpen(false);
    }, [location]);

    return (
        <nav
            id="main-nav"
            className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${isScrolled
                ? 'bg-white/95 backdrop-blur-2xl border-b border-gray-200 py-2 shadow-sm'
                : 'bg-white/80 backdrop-blur-md py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center group">
                    <img
                        src="/adhi-logo.png"
                        alt="ADHI Logo"
                        className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-5">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                                    ? 'text-adhi-orange bg-adhi-orange/10'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-adhi-orange rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    {/* Contact */}
                    <a
                        href="mailto:info@adhi.africa"
                        className="hidden lg:inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300 px-3 py-2"
                    >
                        <span>Contact</span>
                    </a>

                    {/* CTA Button */}
                    <Link
                        to="/investor"
                        className="hidden md:inline-flex btn-primary text-sm !py-2.5 !px-5"
                    >
                        Invest Now
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        id="mobile-menu-toggle"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="lg:hidden text-gray-700 p-2.5 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-2xl border-t border-gray-200"
                    >
                        <div className="px-6 py-6 flex flex-col gap-2">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-medium transition-all ${isActive
                                            ? 'text-adhi-orange bg-adhi-orange/10 border border-adhi-orange/20'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent'
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-xl ${isActive ? 'bg-adhi-orange/20' : 'bg-gray-100'} flex items-center justify-center flex-shrink-0`}>
                                            <Icon size={18} className={isActive ? 'text-adhi-orange' : 'text-adhi-gray-500'} />
                                        </div>
                                        <div>
                                            <div className={isActive ? 'text-adhi-orange' : 'text-gray-900'}>{link.label}</div>
                                            <div className="text-xs text-adhi-gray-500 mt-0.5">{link.description}</div>
                                        </div>
                                    </Link>
                                );
                            })}
                            <div className="pt-4 border-t border-gray-200 mt-2">
                                <Link
                                    to="/investor"
                                    className="btn-primary text-sm text-center justify-center w-full"
                                >
                                    <BarChart3 size={16} />
                                    Invest Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
