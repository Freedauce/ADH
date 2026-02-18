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
    'Not Started': { color: 'text-gray-400', bg: 'bg-gray-200', Icon: Lock },
};

const franchiseStatusColors = {
    'Active': 'bg-green-500/20 text-green-400',
    'In Training': 'bg-adhi-orange/20 text-adhi-orange',
    'Planned': 'bg-gray-200 text-gray-500',
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
                label="Business Expansion"
                title="Franchise Platform"
                subtitle="Join Africa's most innovative construction franchise. Scalable delivery methodology, quality-controlled kits, and continent-wide expansion opportunities."
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
                                    <div className="text-gray-900 text-xs font-medium mb-0.5">{stat.label}</div>
                                    <div className="text-gray-400 text-[10px]">{stat.sub}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== ALL FRANCHISES ===== */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Franchise Network</h2>
                        <p className="text-gray-500 text-sm">All ADHI franchise operations across the continent</p>
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
                                            <h3 className="text-gray-900 font-semibold text-sm">{franchise.name}</h3>
                                            <p className="text-gray-400 text-xs">Since {franchise.since}</p>
                                        </div>
                                    </div>
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${franchiseStatusColors[franchise.status]}`}>
                                        {franchise.status}
                                    </span>
                                </div>

                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    <div className="bg-gray-100 rounded-xl p-2.5 text-center">
                                        <div className="text-base font-bold text-gray-900">{franchise.builders}</div>
                                        <div className="text-gray-400 text-[9px] uppercase tracking-wider">Builders</div>
                                    </div>
                                    <div className="bg-gray-100 rounded-xl p-2.5 text-center">
                                        <div className="text-base font-bold text-adhi-orange">{franchise.projects}</div>
                                        <div className="text-gray-400 text-[9px] uppercase tracking-wider">Projects</div>
                                    </div>
                                    <div className="bg-gray-100 rounded-xl p-2.5 text-center">
                                        <div className="text-base font-bold text-gray-900 flex items-center justify-center gap-1">
                                            {franchise.certified ? <CheckCircle2 size={14} className="text-green-400" /> : <Lock size={14} className="text-gray-400" />}
                                        </div>
                                        <div className="text-gray-400 text-[9px] uppercase tracking-wider">Certified</div>
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
                                    <h3 className="text-lg font-semibold text-gray-900">Featured: {franchiseOverview.name}</h3>
                                    <p className="text-gray-500 text-sm">Active pilot program</p>
                                </div>
                            </div>
                            {[
                                ['Franchisee', franchiseOverview.name],
                                ['Status', franchiseOverview.status],
                                ['Region', franchiseOverview.region],
                                ['Start Date', franchiseOverview.startDate],
                                ['Modules', `${franchiseOverview.modules} Modules`],
                            ].map(([k, v], i) => (
                                <div key={k} className={`flex items-center justify-between py-3.5 ${i < 4 ? 'border-b border-gray-200' : ''}`}>
                                    <span className="text-gray-500 text-sm">{k}</span>
                                    {k === 'Status' ? (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />{v}
                                        </span>
                                    ) : <span className="text-gray-900 font-medium text-sm">{v}</span>}
                                </div>
                            ))}
                        </motion.div>

                        {/* Partnership Section (Replacing redundant certification badge) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass-card p-8 flex flex-col items-center justify-center text-center bg-indigo-600 !text-white"
                        >
                            <Building2 size={48} className="text-indigo-200 mb-6" />
                            <h3 className="text-xl font-bold mb-2">Build Your Legacy</h3>
                            <p className="text-indigo-100 text-sm mb-6">Join our network of regional developers and transform the African housing market.</p>
                            <button className="bg-white text-indigo-600 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-lg">
                                Download Prospectus
                            </button>
                        </motion.div>
                    </div>

                    {/* ===== HOUSE KITS ===== */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <Package size={22} className="text-adhi-orange" />
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">House Kit Catalogue</h2>
                                <p className="text-gray-500 text-sm">Standardized construction kits for every market segment</p>
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
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{kit.name}</h3>
                                            <div className="text-adhi-orange text-sm font-bold">{kit.price}</div>
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{kit.description}</p>

                                    {/* Kit Specs */}
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        <div className="bg-gray-100 rounded-xl p-3 text-center">
                                            <div className="text-gray-900 text-sm font-medium">{kit.units}</div>
                                            <div className="text-gray-400 text-[9px] uppercase tracking-wider">Config</div>
                                        </div>
                                        <div className="bg-gray-100 rounded-xl p-3 text-center">
                                            <div className="text-gray-900 text-sm font-medium">{kit.sqm}</div>
                                            <div className="text-gray-400 text-[9px] uppercase tracking-wider">Area</div>
                                        </div>
                                        <div className="bg-gray-100 rounded-xl p-3 text-center">
                                            <div className="text-gray-900 text-sm font-medium">{kit.buildTime}</div>
                                            <div className="text-gray-400 text-[9px] uppercase tracking-wider">Build</div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200">
                                        {kit.features.map(f => (
                                            <span key={f} className="px-2.5 py-1 bg-adhi-orange/5 border border-adhi-orange/10 rounded-lg text-[10px] text-gray-600 font-medium">
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
                            <span className="section-label">Partnership</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-5 mb-5 tracking-wide">
                                Join the <span className="gradient-text">ADHI Network</span>
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                                Scalable opportunities for regional developers and construction firms.
                            </p>
                        </motion.div>

                        {/* Steps Grid */}
                        <div className="relative">
                            <div className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-adhi-orange/0 via-adhi-orange/30 to-adhi-orange/0" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                                {[
                                    { step: 1, title: 'Evaluation', desc: 'Regional market analysis and business feasibility assessment.', icon: Globe },
                                    { step: 2, title: 'Contracting', desc: 'Standardized franchise agreements and operational bonding.', icon: Award },
                                    { step: 3, title: 'Training', desc: 'Staff certification through the ADHI Academy platform.', icon: GraduationCap },
                                    { step: 4, title: 'Mobilization', desc: 'House kit delivery and first project groundbreaking.', icon: Zap },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.step}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.12 }}
                                        className="relative rounded-2xl border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-adhi-orange/20 transition-all duration-400 p-8 text-center group"
                                    >
                                        <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-adhi-orange to-adhi-orange-dark text-white text-xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-adhi-orange/20 group-hover:scale-110 transition-transform duration-300">
                                            {item.step}
                                        </div>
                                        <div className="w-16 h-16 rounded-2xl bg-adhi-orange/10 border border-adhi-orange/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-adhi-orange/15 transition-colors duration-300">
                                            <item.icon size={28} className="text-adhi-orange" />
                                        </div>
                                        <h3 className="text-gray-900 font-bold text-xl mb-3 tracking-wide">{item.title}</h3>
                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
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
