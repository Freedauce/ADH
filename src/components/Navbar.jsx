import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2, Leaf, GraduationCap, BarChart3, Home, Phone, ChevronDown, Newspaper } from 'lucide-react';

const navLinks = [
    { label: 'Home', path: '/', icon: Home, description: 'Overview & mission' },
    { label: 'Procurement', path: '/procurement', icon: Building2, description: 'Digital procurement hub' },
    { label: 'Carbon', path: '/carbon', icon: Leaf, description: 'Sustainability dashboard' },
    { label: 'Franchise', path: '/franchise', icon: GraduationCap, description: 'Training & expansion' },
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
            className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-black/90 backdrop-blur-2xl border-b border-adhi-orange/10 py-2'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-adhi-orange to-adhi-orange-dark flex items-center justify-center font-bold text-white text-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-adhi-orange/30">
                            A
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-black" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-white leading-none">ADHI</span>
                        <span className="text-[10px] text-adhi-gray-500 uppercase tracking-[0.2em] leading-none mt-0.5">Housing Initiative</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-0.5">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isActive
                                    ? 'text-adhi-orange bg-adhi-orange/10'
                                    : 'text-adhi-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Icon size={15} />
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
                        className="hidden lg:inline-flex items-center gap-2 text-adhi-gray-400 hover:text-white text-sm transition-colors duration-300 px-3 py-2"
                    >
                        <Phone size={14} />
                        <span>Contact</span>
                    </a>

                    {/* CTA Button */}
                    <Link
                        to="/investor"
                        className="hidden md:inline-flex btn-primary text-sm !py-2.5 !px-5"
                    >
                        <BarChart3 size={15} />
                        Invest Now
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        id="mobile-menu-toggle"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="lg:hidden text-white p-2.5 rounded-xl hover:bg-white/5 transition-colors border border-white/10"
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
                        className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-adhi-orange/10"
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
                                            : 'text-adhi-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                                            }`}
                                    >
                                        <div className={`w-10 h-10 rounded-xl ${isActive ? 'bg-adhi-orange/20' : 'bg-white/5'} flex items-center justify-center flex-shrink-0`}>
                                            <Icon size={18} className={isActive ? 'text-adhi-orange' : 'text-adhi-gray-500'} />
                                        </div>
                                        <div>
                                            <div className={isActive ? 'text-adhi-orange' : 'text-white'}>{link.label}</div>
                                            <div className="text-xs text-adhi-gray-500 mt-0.5">{link.description}</div>
                                        </div>
                                    </Link>
                                );
                            })}
                            <div className="pt-4 border-t border-white/5 mt-2">
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
