import { motion } from 'framer-motion';
import {
    Award, CheckCircle2, Clock, Lock, BookOpen, Package,
    MapPin, Users, Building2, Globe, ArrowRight, Star, GraduationCap, Zap
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { franchiseOverview, allFranchises, trainingModules, houseKits } from '../data/mockData';

const statusCfg = {
    Completed: { color: 'text-green-400', bg: 'bg-green-500/20', Icon: CheckCircle2 },
    'In Progress': { color: 'text-adhi-orange', bg: 'bg-adhi-orange/20', Icon: Clock },
    'Not Started': { color: 'text-adhi-gray-500', bg: 'bg-adhi-gray-700', Icon: Lock },
};

const franchiseStatusColors = {
    'Active': 'bg-green-500/20 text-green-400',
    'In Training': 'bg-adhi-orange/20 text-adhi-orange',
    'Planned': 'bg-adhi-gray-700 text-adhi-gray-400',
};

const franchiseStats = [
    { label: 'Active Franchises', value: '7', icon: Globe, sub: 'Across 5 countries' },
    { label: 'Certified Builders', value: '135', icon: Users, sub: 'And growing monthly' },
    { label: 'Training Modules', value: '6', icon: BookOpen, sub: '90 hours total' },
    { label: 'House Kits Available', value: '4', icon: Package, sub: 'Standardized designs' },
];

export default function FranchisePlatform() {
    return (
        <>
            <PageHeader
                label="Franchise & Training"
                title="Franchise & Training Platform"
                subtitle="Scalable franchising and builder certification for continent-wide expansion. Standardized kits, comprehensive training, and quality-controlled operations."
            />

            {/* ===== FRANCHISE STATS ===== */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {franchiseStats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="glass-card p-5 md:p-6"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-adhi-orange/10 flex items-center justify-center mb-3">
                                        <Icon size={18} className="text-adhi-orange" />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                                    <div className="text-white text-xs font-medium mb-0.5">{stat.label}</div>
                                    <div className="text-adhi-gray-500 text-[10px]">{stat.sub}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== ALL FRANCHISES ===== */}
            <section className="py-12 md:py-16 bg-adhi-dark/30">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Franchise Network</h2>
                        <p className="text-adhi-gray-400 text-sm">All ADHI franchise operations across the continent</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allFranchises.map((franchise, i) => (
                            <motion.div
                                key={franchise.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="glass-card p-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{franchise.flag}</span>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm">{franchise.name}</h3>
                                            <p className="text-adhi-gray-500 text-xs">Since {franchise.since}</p>
                                        </div>
                                    </div>
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${franchiseStatusColors[franchise.status]}`}>
                                        {franchise.status}
                                    </span>
                                </div>

                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    <div className="bg-white/[0.03] rounded-xl p-2.5 text-center">
                                        <div className="text-base font-bold text-white">{franchise.builders}</div>
                                        <div className="text-adhi-gray-500 text-[9px] uppercase tracking-wider">Builders</div>
                                    </div>
                                    <div className="bg-white/[0.03] rounded-xl p-2.5 text-center">
                                        <div className="text-base font-bold text-adhi-orange">{franchise.projects}</div>
                                        <div className="text-adhi-gray-500 text-[9px] uppercase tracking-wider">Projects</div>
                                    </div>
                                    <div className="bg-white/[0.03] rounded-xl p-2.5 text-center">
                                        <div className="text-base font-bold text-white flex items-center justify-center gap-1">
                                            {franchise.certified ? <CheckCircle2 size={14} className="text-green-400" /> : <Lock size={14} className="text-adhi-gray-500" />}
                                        </div>
                                        <div className="text-adhi-gray-500 text-[9px] uppercase tracking-wider">Certified</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FRANCHISE OVERVIEW + CERTIFICATION ===== */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                        {/* Franchise Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-adhi-orange/10 flex items-center justify-center">
                                    <Award size={24} className="text-adhi-orange" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Featured: {franchiseOverview.name}</h3>
                                    <p className="text-adhi-gray-400 text-sm">Active pilot program</p>
                                </div>
                            </div>
                            {[
                                ['Franchisee', franchiseOverview.name],
                                ['Status', franchiseOverview.status],
                                ['Region', franchiseOverview.region],
                                ['Start Date', franchiseOverview.startDate],
                                ['Modules', `${franchiseOverview.modules} Modules`],
                            ].map(([k, v], i) => (
                                <div key={k} className={`flex items-center justify-between py-3.5 ${i < 4 ? 'border-b border-white/5' : ''}`}>
                                    <span className="text-adhi-gray-400 text-sm">{k}</span>
                                    {k === 'Status' ? (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />{v}
                                        </span>
                                    ) : <span className="text-white font-medium text-sm">{v}</span>}
                                </div>
                            ))}
                        </motion.div>

                        {/* Certification Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass-card p-8 flex flex-col items-center justify-center text-center"
                        >
                            <div className="w-32 h-32 rounded-full border-4 border-adhi-orange/30 flex items-center justify-center mb-6 relative animate-pulse-glow">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-adhi-orange/20 to-adhi-orange/5 flex items-center justify-center">
                                    <Award size={40} className="text-adhi-orange" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-adhi-orange flex items-center justify-center">
                                    <CheckCircle2 size={16} className="text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Certified ADHI Builder</h3>
                            <p className="text-adhi-gray-400 text-sm mb-4">Industry-recognized construction certification</p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-adhi-orange/10 border border-adhi-orange/20 rounded-full mb-4">
                                <div className="w-2 h-2 rounded-full bg-adhi-orange" />
                                <span className="text-adhi-orange text-xs font-semibold uppercase tracking-wider">Verified</span>
                            </div>
                            <div className="text-adhi-gray-400 text-xs leading-relaxed max-w-xs">
                                Complete all 6 training modules, pass quality assessments, and demonstrate competency to earn ADHI Builder Certification.
                            </div>
                            <p className="text-adhi-gray-600 text-xs italic mt-6">Static badge – Phase 1 Demo</p>
                        </motion.div>
                    </div>

                    {/* ===== TRAINING MODULES ===== */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen size={22} className="text-adhi-orange" />
                            <div>
                                <h2 className="text-2xl font-bold text-white">Training Modules</h2>
                                <p className="text-adhi-gray-400 text-sm">6 comprehensive modules • 90 total hours</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {trainingModules.map((mod, i) => {
                                const c = statusCfg[mod.status];
                                return (
                                    <motion.div
                                        key={mod.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08 }}
                                        className="glass-card p-5 md:p-6"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                                            <div className="flex items-center gap-4 flex-1">
                                                <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                                                    <c.Icon size={18} className={c.color} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="text-white font-medium text-sm">{mod.title}</h3>
                                                        <span className="text-adhi-gray-500 text-[10px] flex-shrink-0">{mod.hours}h</span>
                                                    </div>
                                                    <p className="text-adhi-gray-500 text-xs leading-relaxed">{mod.description}</p>
                                                    <span className={`text-xs font-medium ${c.color} mt-1 inline-block`}>{mod.status}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 md:w-64">
                                                <div className="flex-1 h-2.5 bg-adhi-gray-800 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${mod.progress}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                                                        className="h-full rounded-full"
                                                        style={{
                                                            background: mod.progress === 100
                                                                ? 'linear-gradient(90deg, #22c55e, #16a34a)'
                                                                : mod.progress > 0
                                                                    ? 'linear-gradient(90deg, #FF6A00, #CC5500)'
                                                                    : '#3A3A3A'
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-xs text-adhi-gray-400 font-medium w-10 text-right">{mod.progress}%</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ===== HOUSE KITS ===== */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Package size={22} className="text-adhi-orange" />
                            <div>
                                <h2 className="text-2xl font-bold text-white">House Kit Catalogue</h2>
                                <p className="text-adhi-gray-400 text-sm">Standardized construction kits for every market segment</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {houseKits.map((kit, i) => (
                                <motion.div
                                    key={kit.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="glass-card p-6 flex flex-col"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-adhi-orange/20 to-adhi-orange/5 flex items-center justify-center flex-shrink-0">
                                            <Package size={22} className="text-adhi-orange" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-1">{kit.name}</h3>
                                            <div className="text-adhi-orange text-sm font-bold">{kit.price}</div>
                                        </div>
                                    </div>

                                    <p className="text-adhi-gray-400 text-sm leading-relaxed flex-1 mb-5">{kit.description}</p>

                                    {/* Kit Specs */}
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        <div className="bg-white/[0.03] rounded-xl p-3 text-center">
                                            <div className="text-white text-sm font-medium">{kit.units}</div>
                                            <div className="text-adhi-gray-500 text-[9px] uppercase tracking-wider">Config</div>
                                        </div>
                                        <div className="bg-white/[0.03] rounded-xl p-3 text-center">
                                            <div className="text-white text-sm font-medium">{kit.sqm}</div>
                                            <div className="text-adhi-gray-500 text-[9px] uppercase tracking-wider">Area</div>
                                        </div>
                                        <div className="bg-white/[0.03] rounded-xl p-3 text-center">
                                            <div className="text-white text-sm font-medium">{kit.buildTime}</div>
                                            <div className="text-adhi-gray-500 text-[9px] uppercase tracking-wider">Build</div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                                        {kit.features.map(f => (
                                            <span key={f} className="px-2.5 py-1 bg-adhi-orange/5 border border-adhi-orange/10 rounded-lg text-[10px] text-adhi-gray-300 font-medium">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ===== HOW TO BECOME A FRANCHISE ===== */}
                    <div className="mt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <span className="section-label">Get Started</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-5 mb-5 tracking-wide">
                                How to Become an <span className="gradient-text">ADHI Franchise Partner</span>
                            </h2>
                            <p className="text-adhi-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                                Four simple steps to join Africa's fastest-growing housing construction network.
                            </p>
                        </motion.div>

                        {/* Steps Grid */}
                        <div className="relative">
                            {/* Connecting line (desktop only) */}
                            <div className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-adhi-orange/0 via-adhi-orange/30 to-adhi-orange/0" />

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                                {[
                                    { step: 1, title: 'Apply', desc: 'Submit your franchise application with details on your construction experience, market, and business plan.', icon: GraduationCap },
                                    { step: 2, title: 'Train', desc: 'Complete 6 training modules covering ADHI methodology, procurement, quality assurance, and project management.', icon: BookOpen },
                                    { step: 3, title: 'Certify', desc: 'Pass quality assessments to earn ADHI Builder Certification. Receive your franchise license and house kits.', icon: Award },
                                    { step: 4, title: 'Build', desc: 'Begin construction using ADHI standardized kits, digital procurement, and ongoing support from headquarters.', icon: Zap },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.step}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.12 }}
                                        className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-adhi-orange/20 transition-all duration-400 p-8 text-center group"
                                    >
                                        {/* Step Number */}
                                        <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-adhi-orange to-adhi-orange-dark text-white text-xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-adhi-orange/20 group-hover:scale-110 transition-transform duration-300">
                                            {item.step}
                                        </div>

                                        {/* Icon */}
                                        <div className="w-16 h-16 rounded-2xl bg-adhi-orange/10 border border-adhi-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-adhi-orange/15 transition-colors duration-300">
                                            <item.icon size={28} className="text-adhi-orange" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-white font-bold text-xl mb-3 tracking-wide">{item.title}</h3>
                                        <p className="text-adhi-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
