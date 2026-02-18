import { motion } from 'framer-motion';
import {
    GraduationCap, Users, BookOpen, Calendar, CheckCircle2,
    ArrowRight, Star, Clock, Award, Shield, Package, Layout,
    BarChart3, Globe, Zap, Box
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { trainingModules, houseKits } from '../data/mockData';

const statusCfg = {
    Completed: { color: 'text-green-500', bg: 'bg-green-50', Icon: CheckCircle2 },
    'In Progress': { color: 'text-adhi-orange', bg: 'bg-adhi-orange/10', Icon: Clock },
    'Not Started': { color: 'text-gray-400', bg: 'bg-gray-100', Icon: BookOpen },
};

const academyStats = [
    { label: 'Total Trainees', value: '1,420', icon: Users, sub: 'Enrolled individuals' },
    { label: 'Certified Teams', value: '185', icon: Award, sub: 'Operational capacity' },
    { label: 'Active Courses', value: '12', icon: BookOpen, sub: 'Technical modules' },
    { label: 'Next Session', value: 'Jan 15', icon: Calendar, sub: 'Regional intake' },
];

const performanceData = [
    { region: 'East Africa', status: 'Leading', color: 'bg-blue-500' },
    { region: 'West Africa', status: 'Emerging', color: 'bg-indigo-500' },
    { region: 'South Asia', status: 'High Growth', color: 'bg-teal-500' },
];

export default function AcademyPage() {
    return (
        <>
            <PageHeader
                label="Academy & Certification"
                title="Academy"
                subtitle="Deep dive metrics and operational data for decentralized delivery capacity. Monitoring global platform training and certification workflows."
            />

            {/* Breadcrumb style navigation as seen in image */}
            <div className="bg-white border-b border-gray-100 py-3">
                <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <span>ADHI DASHBOARD</span>
                    <span className="text-gray-200">/</span>
                    <span>ADMIN PERSPECTIVE</span>
                    <span className="text-gray-200">/</span>
                    <span className="text-gray-900">ACADEMY</span>
                </div>
            </div>

            <main className="py-12 bg-[#FBFBFC]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ===== TRAINING & CERTIFICATION STATS ===== */}
                    <div className="mb-10">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Training & Certification</h2>
                            <p className="text-sm text-gray-500">Monitoring decentralized delivery capacity</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {academyStats.map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-5">
                                            <Icon size={20} className="text-indigo-500" />
                                        </div>
                                        <div className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-2">{stat.label}</div>
                                        <div className="text-3xl font-black text-gray-900 leading-none">{stat.value}</div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* LEFT COLUMN: VISUALIZER */}
                        <div className="lg:col-span-2 space-y-8">
                            <section className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-8">House Kit Visualizer</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Model S */}
                                    <div className="group cursor-pointer">
                                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                                            <img
                                                src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1000"
                                                alt="Model S"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-gray-900 shadow-sm">
                                                Standard
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-900">Model S - Studio</h4>
                                                <p className="text-xs text-gray-500">45sqm • 1 Bath</p>
                                            </div>
                                            <div className="text-sm font-bold text-adhi-orange">$22,000</div>
                                        </div>
                                    </div>

                                    {/* Model M */}
                                    <div className="group cursor-pointer">
                                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                                            <img
                                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
                                                alt="Model M"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-gray-900 shadow-sm">
                                                Premium
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-900">Model M - 2 Bed</h4>
                                                <p className="text-xs text-gray-500">75sqm • 2 Bath</p>
                                            </div>
                                            <div className="text-sm font-bold text-adhi-orange">$35,000</div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Training Modules List (from original Franchise page but kept here for Academy) */}
                            <section className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-lg font-bold text-gray-900">Training Curriculum</h3>
                                    <button className="text-xs font-bold text-indigo-500 flex items-center gap-1 hover:gap-2 transition-all">
                                        VIEW ALL MODULES <ArrowRight size={14} />
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {trainingModules.slice(0, 4).map((mod, i) => {
                                        const c = statusCfg[mod.status] || statusCfg['Not Started'];
                                        return (
                                            <div key={mod.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                                                    <c.Icon size={18} className={c.color} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">{mod.title}</h4>
                                                    <p className="text-xs text-gray-500 line-clamp-1">{mod.description}</p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="text-[10px] font-bold text-gray-400 mb-1.5 uppercase tracking-wider">{mod.progress}% COMPLETE</div>
                                                    <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full bg-indigo-500 rounded-full"
                                                            style={{ width: `${mod.progress}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        </div>

                        {/* RIGHT COLUMN: PERFORMANCE & UPDATES */}
                        <div className="space-y-8">
                            <section className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-8">Franchise Performance</h3>
                                <div className="space-y-6">
                                    {performanceData.map((item, i) => (
                                        <div key={item.region} className="flex items-center gap-4">
                                            <div className={`w-2 h-10 rounded-full ${item.color}`} />
                                            <div>
                                                <div className="text-sm font-bold text-gray-900">{item.region}</div>
                                                <div className="text-xs text-gray-500">{item.status}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-50">
                                    <p className="text-[10px] text-gray-400 font-medium italic">Latest performance metrics from field operations.</p>
                                </div>
                            </section>

                            <section className="bg-indigo-600 rounded-3xl p-8 text-white shadow-lg shadow-indigo-200">
                                <Zap className="text-indigo-200 mb-6" size={32} />
                                <h3 className="text-xl font-bold mb-3">Live Certification Session</h3>
                                <p className="text-sm text-indigo-100 mb-6 leading-relaxed">
                                    Join the upcoming technical review for LSF methodology. Required for Phase 2 certification.
                                </p>
                                <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-bold text-sm hover:bg-indigo-50 transition-colors shadow-lg">
                                    Register Now
                                </button>
                            </section>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
