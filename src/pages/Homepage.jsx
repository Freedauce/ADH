import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Building2, Leaf, Globe, Handshake, Users, DollarSign, MapPin, CheckCircle2,
    Package, BarChart3, GraduationCap,
    Home, Link2, Shield, Rocket,
    ArrowRight, ChevronRight, ChevronDown, ChevronUp,
    Star, Quote, Minus, Plus,
    BedDouble, Maximize, TrendingUp
} from 'lucide-react';
import {
    impactStats, platformCards, whyAdhiItems, featuredProjects,
    teamMembers, testimonials, partners, milestones,
    faqItems, countryOperations
} from '../data/mockData';

const iconMap = {
    building: Building2, leaf: Leaf, globe: Globe, handshake: Handshake,
    'package': Package, 'bar-chart': BarChart3, 'graduation-cap': GraduationCap,
    home: Home, link: Link2, shield: Shield, rocket: Rocket,
    users: Users, dollar: DollarSign, map: MapPin, check: CheckCircle2,
};

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.12 } },
};

const statusColors = {
    'In Progress': 'bg-adhi-orange/20 text-adhi-orange',
    'Planning': 'bg-blue-500/20 text-blue-400',
    'Completed': 'bg-green-500/20 text-green-400',
    'Upcoming': 'bg-purple-500/20 text-purple-400',
};

function FAQItem({ item, index }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className={`rounded-2xl border transition-all duration-400 overflow-hidden ${isOpen
                ? 'bg-gradient-to-br from-white/[0.04] to-white/[0.01] border-adhi-orange/20 shadow-lg shadow-adhi-orange/5'
                : 'bg-white/[0.02] border-white/[0.06] hover:border-white/10 hover:bg-white/[0.03]'
                }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-4 p-5 md:p-6 text-left transition-colors"
            >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all duration-300 ${isOpen ? 'bg-adhi-orange text-white' : 'bg-white/5 text-adhi-gray-500'
                    }`}>
                    {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`flex-1 font-semibold text-sm md:text-base transition-colors duration-300 ${isOpen ? 'text-white' : 'text-adhi-gray-300'
                    }`}>
                    {item.question}
                </span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-adhi-orange/15 rotate-0' : 'bg-white/5 rotate-0'
                    }`}>
                    {isOpen ? <Minus size={14} className="text-adhi-orange" /> : <Plus size={14} className="text-adhi-gray-400" />}
                </div>
            </button>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 md:px-6 pb-5 md:pb-6"
                >
                    <div className="pl-12 border-l-2 border-adhi-orange/20 ml-0.5">
                        <p className="text-adhi-gray-400 text-sm leading-relaxed pl-4">{item.answer}</p>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}

export default function Homepage() {
    return (
        <>
            {/* ===== HERO ===== */}
            <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-adhi-dark to-black" />
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-adhi-orange/5 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-adhi-orange/3 rounded-full blur-[120px]" />
                    <div className="absolute top-20 right-10 w-64 h-64 bg-adhi-orange/4 rounded-full blur-[100px]" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,106,0,0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,106,0,0.3) 1px, transparent 1px)`,
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="section-label mb-8"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-adhi-orange animate-pulse" />
                                African Development Housing Initiative
                            </motion.div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 tracking-wide">
                                <span className="text-white">Digitizing Housing</span>
                                <br />
                                <span className="text-white">Infrastructure </span>
                                <span className="gradient-text">Across Africa</span>
                            </h1>

                            <p className="text-base md:text-lg text-adhi-gray-400 max-w-xl mb-8 leading-relaxed">
                                Procurement. Carbon. Franchising. Construction.
                                Building the digital backbone for Africa's housing revolution.
                                <span className="text-adhi-gray-500 block mt-2">2,400+ units planned across 4 countries — and growing.</span>
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <Link to="/procurement" className="btn-primary text-base">
                                    View Platform <ArrowRight size={18} />
                                </Link>
                                <Link to="/investor" className="btn-secondary text-base">
                                    Investor Overview <ChevronRight size={18} />
                                </Link>
                            </div>

                            {/* Quick stats bar */}
                            <div className="flex flex-wrap gap-6 md:gap-10">
                                {[
                                    { value: '2,400+', label: 'Units Planned' },
                                    { value: '4', label: 'Countries' },
                                    { value: '$14.5M', label: 'Raised' },
                                ].map(stat => (
                                    <div key={stat.label}>
                                        <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                                        <div className="text-adhi-gray-500 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Hero Right: Featured Project Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                            className="hidden lg:block"
                        >
                            <div className="glass-card overflow-hidden relative">
                                <div className="h-56 relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
                                        alt="Bwiza Heights"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1.5 bg-adhi-orange/90 text-white text-xs font-semibold rounded-lg">
                                            Featured Project
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white font-bold text-xl mb-1">Bwiza Heights – Phase 2</h3>
                                        <p className="text-adhi-gray-300 text-sm flex items-center gap-1.5">
                                            <MapPin size={13} /> Kigali, Rwanda
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-3 gap-4 mb-5">
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-adhi-orange">500</div>
                                            <div className="text-adhi-gray-500 text-[11px] uppercase tracking-wider">Units</div>
                                        </div>
                                        <div className="text-center border-x border-white/5">
                                            <div className="text-xl font-bold text-white">72%</div>
                                            <div className="text-adhi-gray-500 text-[11px] uppercase tracking-wider">Complete</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-white">$28K</div>
                                            <div className="text-adhi-gray-500 text-[11px] uppercase tracking-wider">From</div>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-adhi-gray-800 rounded-full overflow-hidden mb-3">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '72%' }}
                                            transition={{ duration: 2, delay: 1.5, ease: 'easeOut' }}
                                            className="h-full rounded-full bg-gradient-to-r from-adhi-orange to-adhi-orange-light"
                                        />
                                    </div>
                                    <p className="text-adhi-gray-500 text-xs">360 of 500 units structurally complete</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-adhi-gray-500 text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-5 h-8 rounded-full border border-adhi-gray-600 flex items-start justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                            className="w-1.5 h-1.5 rounded-full bg-adhi-orange"
                        />
                    </div>
                </motion.div>
            </section>

            {/* ===== IMPACT STATS ===== */}
            <section id="impact-stats" className="py-16 md:py-20 relative bg-adhi-dark/50">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-adhi-orange/20 to-transparent" />
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                    >
                        {impactStats.slice(0, 8).map((stat) => {
                            const Icon = iconMap[stat.icon] || Building2;
                            return (
                                <motion.div
                                    key={stat.label}
                                    variants={fadeInUp}
                                    className="glass-card p-5 md:p-6 text-center"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-adhi-orange/10 flex items-center justify-center mx-auto mb-3">
                                        <Icon size={18} className="text-adhi-orange" />
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                                    <div className="text-white font-medium text-xs mb-0.5">{stat.label}</div>
                                    <div className="text-adhi-gray-500 text-[10px]">{stat.sub}</div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                    <p className="text-center text-adhi-gray-600 text-xs italic mt-4">
                        Illustrative – Phase 1 Mock Data. Numbers are for demonstration purposes only.
                    </p>
                </div>
            </section>

            {/* ===== PLATFORM OVERVIEW ===== */}
            <section id="platform-overview" className="py-20 md:py-28 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="section-label">The Platform</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
                            Three Pillars of <span className="gradient-text">Digital Infrastructure</span>
                        </h2>
                        <p className="text-adhi-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                            An integrated platform powering procurement, carbon tracking, and scalable franchise operations across the continent.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {platformCards.map((card) => {
                            const Icon = iconMap[card.icon];
                            return (
                                <motion.div key={card.title} variants={fadeInUp}>
                                    <Link
                                        to={card.link}
                                        className="glass-card p-8 flex flex-col h-full group cursor-pointer block"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-adhi-orange/20 to-adhi-orange/5 flex items-center justify-center mb-6 group-hover:from-adhi-orange/30 transition-all duration-300">
                                            <Icon size={26} className="text-adhi-orange" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                                        <p className="text-adhi-gray-400 text-sm leading-relaxed flex-1 mb-4">{card.description}</p>
                                        <div className="text-adhi-gray-500 text-xs mb-4">{card.stats}</div>
                                        <div className="flex items-center gap-2 text-adhi-orange text-sm font-medium group-hover:gap-3 transition-all duration-300">
                                            Explore <ArrowRight size={16} />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* ===== FEATURED PROJECTS ===== */}
            <section id="featured-projects" className="py-20 md:py-28 relative bg-adhi-dark/30">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="section-label">Housing Projects</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
                            Our <span className="gradient-text">Featured Developments</span>
                        </h2>
                        <p className="text-adhi-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                            Modern, sustainable housing across Africa. From affordable family homes to premium smart residences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="glass-card overflow-hidden group"
                            >
                                {/* Project Image */}
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                    <div className="absolute top-3 left-3">
                                        <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${statusColors[project.status] || 'bg-adhi-gray-700 text-adhi-gray-300'}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-lg">
                                            {project.country}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <h3 className="text-white font-bold text-base mb-0.5">{project.name}</h3>
                                        <p className="text-adhi-gray-300 text-xs flex items-center gap-1">
                                            <MapPin size={11} /> {project.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-5">
                                    <p className="text-adhi-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Stats Row */}
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Building2 size={12} className="text-adhi-orange flex-shrink-0" />
                                            <span className="text-white text-xs font-medium">{project.units} Units</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <BedDouble size={12} className="text-adhi-orange flex-shrink-0" />
                                            <span className="text-white text-xs font-medium">{project.bedrooms}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Maximize size={12} className="text-adhi-orange flex-shrink-0" />
                                            <span className="text-white text-xs font-medium">{project.area}</span>
                                        </div>
                                    </div>

                                    {/* Price & Progress */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-adhi-orange font-bold text-sm">{project.price}</span>
                                        <span className="text-adhi-gray-400 text-xs">{project.completion}% complete</span>
                                    </div>
                                    <div className="h-1.5 bg-adhi-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${project.completion}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.3 }}
                                            className="h-full rounded-full bg-gradient-to-r from-adhi-orange to-adhi-orange-light"
                                        />
                                    </div>

                                    {/* Features */}
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {project.features.slice(0, 3).map(f => (
                                            <span key={f} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] text-adhi-gray-400">
                                                {f}
                                            </span>
                                        ))}
                                        {project.features.length > 3 && (
                                            <span className="px-2 py-0.5 bg-adhi-orange/5 border border-adhi-orange/10 rounded text-[10px] text-adhi-orange">
                                                +{project.features.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COUNTRY OPERATIONS ===== */}
            <section id="country-operations" className="py-20 md:py-28 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="section-label">Pan-African Presence</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
                            Operating Across <span className="gradient-text">6 Countries</span>
                        </h2>
                        <p className="text-adhi-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                            From East Africa to West Africa, ADHI is building the continent's housing infrastructure.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {countryOperations.map((country, i) => (
                            <motion.div
                                key={country.country}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="glass-card p-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{country.flag}</span>
                                        <div>
                                            <h3 className="text-white font-semibold text-base">{country.country}</h3>
                                            <p className="text-adhi-gray-500 text-xs">{country.office}</p>
                                        </div>
                                    </div>
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${country.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-adhi-gray-700 text-adhi-gray-400'}`}>
                                        {country.status}
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white/[0.03] rounded-xl p-3 text-center">
                                        <div className="text-lg font-bold text-white">{country.projects}</div>
                                        <div className="text-adhi-gray-500 text-[10px] uppercase tracking-wider">Projects</div>
                                    </div>
                                    <div className="bg-white/[0.03] rounded-xl p-3 text-center">
                                        <div className="text-lg font-bold text-adhi-orange">{country.units.toLocaleString()}</div>
                                        <div className="text-adhi-gray-500 text-[10px] uppercase tracking-wider">Units</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY ADHI ===== */}
            <section id="why-adhi" className="py-20 md:py-28 relative bg-adhi-dark/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-label">Why ADHI</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                                Solving Africa's <br />
                                <span className="gradient-text">Housing Gap</span>
                            </h2>
                            <p className="text-adhi-gray-400 text-base md:text-lg leading-relaxed mb-8">
                                Africa needs 4 million+ new housing units annually. ADHI provides the digital
                                infrastructure to deliver them efficiently, sustainably, and at scale.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    { label: '56%', desc: 'of Africa\'s urban population lives in informal settlements' },
                                    { label: '$1.4T', desc: 'estimated housing market opportunity across the continent' },
                                    { label: '45%', desc: 'faster construction with ADHI\'s LSF methodology' },
                                ].map(stat => (
                                    <div key={stat.label} className="flex items-center gap-4">
                                        <div className="text-2xl font-bold gradient-text w-20 flex-shrink-0">{stat.label}</div>
                                        <p className="text-adhi-gray-400 text-sm">{stat.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <Link to="/investor" className="btn-primary text-sm inline-flex">
                                See Investment Opportunity <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {whyAdhiItems.map((item) => {
                                const Icon = iconMap[item.icon] || Building2;
                                return (
                                    <motion.div
                                        key={item.title}
                                        variants={fadeInUp}
                                        className="glass-card p-5"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-adhi-orange/10 flex items-center justify-center mb-3">
                                            <Icon size={18} className="text-adhi-orange" />
                                        </div>
                                        <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                                        <p className="text-adhi-gray-400 text-xs leading-relaxed">{item.description}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section id="testimonials" className="py-20 md:py-28 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="section-label">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
                            What People Are <span className="gradient-text">Saying</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="glass-card p-8 relative"
                            >
                                <Quote size={32} className="text-adhi-orange/20 absolute top-6 right-6" />
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <Star key={s} size={14} className="text-adhi-orange fill-adhi-orange" />
                                    ))}
                                </div>
                                <p className="text-adhi-gray-300 text-sm leading-relaxed mb-6 italic">
                                    "{t.quote}"
                                </p>
                                <div>
                                    <div className="text-white font-semibold text-sm">{t.author}</div>
                                    <div className="text-adhi-gray-500 text-xs">{t.role} • {t.company}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TEAM ===== */}
            <section id="team" className="py-20 md:py-28 relative bg-adhi-dark/30">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="section-label">Leadership</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
                            Meet the <span className="gradient-text">Team</span>
                        </h2>
                        <p className="text-adhi-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                            Industry veterans driving Africa's housing transformation.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="glass-card overflow-hidden group"
                            >
                                <div className="h-52 overflow-hidden relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>
                                <div className="p-5 relative -mt-10">
                                    <h3 className="text-white font-bold text-base relative z-10">{member.name}</h3>
                                    <p className="text-adhi-orange text-xs font-semibold mb-3 relative z-10">{member.role}</p>
                                    <p className="text-adhi-gray-400 text-xs leading-relaxed">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TIMELINE ===== */}
            <section id="timeline" className="py-20 md:py-28 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="section-label">Our Journey</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
                            Building <span className="gradient-text">Milestones</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Center line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-adhi-orange/40 via-adhi-orange/20 to-transparent -translate-x-1/2" />

                        <div className="space-y-8 md:space-y-0">
                            {milestones.map((m, i) => (
                                <motion.div
                                    key={m.year}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className={`md:flex md:items-center md:mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div className="glass-card p-6">
                                            <div className="text-adhi-orange font-bold text-2xl mb-2">{m.year}</div>
                                            <h3 className="text-white font-semibold text-base mb-2">{m.title}</h3>
                                            <p className="text-adhi-gray-400 text-sm leading-relaxed">{m.description}</p>
                                        </div>
                                    </div>
                                    {/* Center dot */}
                                    <div className="hidden md:flex w-4 h-4 rounded-full bg-adhi-orange border-4 border-black flex-shrink-0 relative z-10" />
                                    <div className="md:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== NEWS CTA ===== */}
            <section className="py-12 relative bg-adhi-dark/30">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        <div>
                            <span className="section-label mb-3">Latest Updates</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white mt-3">
                                Stay Updated with ADHI <span className="gradient-text">News</span>
                            </h3>
                            <p className="text-adhi-gray-400 text-sm mt-2">The latest milestones, partnerships, and project updates.</p>
                        </div>
                        <Link to="/news" className="btn-primary text-sm whitespace-nowrap">
                            View All News <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ===== PARTNERS ===== */}
            <section id="partners" className="py-20 md:py-28 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="section-label">Ecosystem</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
                            Trusted <span className="gradient-text">Partners</span>
                        </h2>
                        <p className="text-adhi-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                            Working with leading institutions to deliver housing at scale.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                        {partners.map((partner, i) => {
                            const categoryStyle = {
                                Finance: 'from-green-500/20 to-emerald-500/10 text-green-400 border-green-500/20',
                                Development: 'from-blue-500/20 to-cyan-500/10 text-blue-400 border-blue-500/20',
                                Government: 'from-purple-500/20 to-violet-500/10 text-purple-400 border-purple-500/20',
                                Materials: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/20',
                                Energy: 'from-yellow-500/20 to-lime-500/10 text-yellow-400 border-yellow-500/20',
                                Investment: 'from-adhi-orange/20 to-red-500/10 text-adhi-orange border-adhi-orange/20',
                                Technology: 'from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/20',
                            }[partner.category] || 'from-adhi-orange/20 to-orange-500/10 text-adhi-orange border-adhi-orange/20';

                            const initials = partner.name.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();

                            return (
                                <motion.div
                                    key={partner.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="glass-card p-5 flex flex-col items-center justify-center text-center group hover:border-white/15 transition-all duration-400 min-h-[120px]"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryStyle.split(' ')[0]} ${categoryStyle.split(' ')[1]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        <span className={`text-sm font-bold ${categoryStyle.split(' ')[2]}`}>{initials}</span>
                                    </div>
                                    <p className="text-white text-[11px] font-semibold leading-tight mb-1.5">{partner.name}</p>
                                    <span className={`text-[9px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border bg-gradient-to-r ${categoryStyle}`}>
                                        {partner.category}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section id="faq" className="py-20 md:py-28 relative bg-adhi-dark/30">
                {/* Background Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-adhi-orange/3 rounded-full blur-[150px]" />

                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                        {/* Left Column — Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-2 lg:sticky lg:top-32"
                        >
                            <span className="section-label">FAQ</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-5 tracking-wide">
                                Frequently Asked <span className="gradient-text">Questions</span>
                            </h2>
                            <p className="text-adhi-gray-400 text-sm md:text-base leading-relaxed mb-6">
                                Everything you need to know about ADHI, our construction methodology, and how we're transforming housing across Africa.
                            </p>
                            <div className="hidden lg:flex items-center gap-3 text-adhi-gray-500 text-xs">
                                <div className="w-8 h-8 rounded-full bg-adhi-orange/10 flex items-center justify-center">
                                    <Plus size={14} className="text-adhi-orange" />
                                </div>
                                <span>Click any question to expand the answer</span>
                            </div>
                        </motion.div>

                        {/* Right Column — Questions */}
                        <div className="lg:col-span-3 space-y-3">
                            {faqItems.map((item, i) => (
                                <FAQItem key={i} item={item} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section id="cta" className="py-24 md:py-32 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-adhi-dark to-black" />
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,106,0,0.4) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />

                <div className="relative max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-adhi-orange/10 rounded-full blur-[100px]" />
                        <div className="absolute -bottom-10 right-0 w-[200px] h-[200px] bg-adhi-orange/5 rounded-full blur-[80px]" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-adhi-orange/10 border border-adhi-orange/20 mb-8">
                                <div className="w-2 h-2 rounded-full bg-adhi-orange animate-pulse" />
                                <span className="text-adhi-orange text-xs font-semibold uppercase tracking-wider">Get Started Today</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-wide">
                                Ready to Explore the <span className="gradient-text">Platform</span>?
                            </h2>
                            <p className="text-adhi-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                                Discover how ADHI is building the digital infrastructure for Africa's housing future.
                                Join us in transforming millions of lives across the continent.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/procurement" className="btn-primary text-base">
                                    Explore Procurement <ArrowRight size={18} />
                                </Link>
                                <Link to="/investor" className="btn-secondary text-base">
                                    View Investor Dashboard
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
