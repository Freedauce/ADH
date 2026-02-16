import { motion } from 'framer-motion';
import {
    BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Cell, Legend, Area, AreaChart
} from 'recharts';
import {
    DollarSign, TrendingUp, Users, Target, ArrowUp, ArrowDown,
    PieChart, BarChart3, Clock, CheckCircle2, ChevronRight, Zap
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ChartCard from '../components/ChartCard';
import {
    salesData, marketingData, operationalData, financialData, supportData,
    investorKPIs, investmentRounds, unitEconomics
} from '../data/mockData';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-adhi-gray-900 border border-white/10 rounded-lg px-4 py-3 shadow-xl">
                <p className="text-white text-sm font-medium mb-1">{label}</p>
                {payload.map((entry, i) => (
                    <p key={i} className="text-xs" style={{ color: entry.color }}>
                        {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const kpiIcons = {
    'Annual Revenue Run Rate': DollarSign,
    'Gross Margin': TrendingUp,
    'Units Delivered': CheckCircle2,
    'Customer Acquisition Cost': Target,
    'Avg Revenue Per Unit': DollarSign,
    'Employee Count': Users,
    'Net Promoter Score': TrendingUp,
    'MRR Growth': Zap,
};

export default function InvestorDashboard() {
    return (
        <>
            <PageHeader
                label="Investor Relations"
                title="Investor Dashboard"
                subtitle="Comprehensive investment metrics, financial performance, and KPIs for stakeholders. All data is illustrative — Phase 1 Demo."
            />

            {/* ===== INVESTOR KPIs ===== */}
            <section id="investor-kpis" className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Key Performance Indicators</h2>
                        <p className="text-adhi-gray-400 text-sm">Real-time metrics for investor oversight</p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {investorKPIs.map((kpi, i) => {
                            const Icon = kpiIcons[kpi.label] || DollarSign;
                            const isPositive = kpi.change.startsWith('+');
                            return (
                                <motion.div
                                    key={kpi.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className="glass-card p-5 md:p-6"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-adhi-orange/10 flex items-center justify-center">
                                            <Icon size={18} className="text-adhi-orange" />
                                        </div>
                                        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                            {isPositive ? <ArrowUp size={11} /> : <ArrowDown size={11} />}
                                            {kpi.change}
                                        </div>
                                    </div>
                                    <div className="text-xl md:text-2xl font-bold gradient-text mb-1">{kpi.value}</div>
                                    <div className="text-adhi-gray-400 text-xs">{kpi.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== INVESTMENT ROUNDS ===== */}
            <section id="investment-rounds" className="py-12 md:py-16 bg-adhi-dark/30">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Funding History</h2>
                        <p className="text-adhi-gray-400 text-sm">Investment rounds and capital raised to date</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {investmentRounds.map((round, i) => (
                            <motion.div
                                key={round.round}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card p-6 relative overflow-hidden"
                            >
                                {round.status === 'Completed' && (
                                    <div className="absolute top-3 right-3">
                                        <CheckCircle2 size={16} className="text-green-400" />
                                    </div>
                                )}
                                {round.status === 'Current' && (
                                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-adhi-orange/20 rounded-full">
                                        <div className="w-1.5 h-1.5 rounded-full bg-adhi-orange animate-pulse" />
                                        <span className="text-adhi-orange text-[10px] font-semibold">LIVE</span>
                                    </div>
                                )}
                                <div className="text-adhi-gray-500 text-xs mb-2">{round.date}</div>
                                <h3 className="text-white font-semibold text-base mb-1">{round.round}</h3>
                                <div className="text-2xl font-bold gradient-text mb-2">{round.amount}</div>
                                <div className="text-adhi-gray-400 text-xs mb-1">
                                    Valuation: <span className="text-white font-medium">{round.valuation}</span>
                                </div>
                                <div className="text-adhi-gray-500 text-xs">{round.leadInvestor}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MAIN CHARTS ===== */}
            <section id="performance-charts" className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Performance Analytics</h2>
                        <p className="text-adhi-gray-400 text-sm">Quarterly financial and operational performance</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Sales Revenue */}
                        <ChartCard title="Sales Revenue" subtitle="Monthly revenue trend ($K)">
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={salesData}>
                                        <defs>
                                            <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#FF6A00" stopOpacity={0.3} />
                                                <stop offset="100%" stopColor="#FF6A00" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                        <XAxis dataKey="month" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} tickLine={false} />
                                        <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#FF6A00" fill="url(#salesGrad)" strokeWidth={2} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </ChartCard>

                        {/* Marketing */}
                        <ChartCard title="Marketing Pipeline" subtitle="Lead generation and conversion (monthly)">
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={marketingData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                        <XAxis dataKey="month" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} tickLine={false} />
                                        <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Legend wrapperStyle={{ fontSize: '12px', color: '#9CA3AF' }} />
                                        <Bar dataKey="leads" name="Leads" fill="#FF8C33" radius={[6, 6, 0, 0]} barSize={30} />
                                        <Bar dataKey="conversions" name="Conversions" fill="#FF6A00" radius={[6, 6, 0, 0]} barSize={30} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </ChartCard>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Operational */}
                        <ChartCard title="Project Completion Rate" subtitle="Percentage completion by quarter">
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={operationalData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                        <XAxis dataKey="quarter" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} tickLine={false} />
                                        <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Line type="monotone" dataKey="completion" name="Completion Rate" stroke="#FF6A00" strokeWidth={3} dot={{ fill: '#FF6A00', r: 4 }} activeDot={{ r: 6 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </ChartCard>

                        {/* Financial */}
                        <ChartCard title="Revenue vs. Costs" subtitle="Quarterly financial performance ($K)">
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={financialData} barGap={4}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                        <XAxis dataKey="quarter" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} tickLine={false} />
                                        <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Legend wrapperStyle={{ fontSize: '12px', color: '#9CA3AF' }} />
                                        <Bar dataKey="revenue" name="Revenue" fill="#FF6A00" radius={[6, 6, 0, 0]} barSize={30} />
                                        <Bar dataKey="costs" name="Costs" fill="#3A3A3A" radius={[6, 6, 0, 0]} barSize={30} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </ChartCard>
                    </div>

                    {/* Support Tickets */}
                    <ChartCard title="Customer Support Tickets" subtitle="Monthly ticket volume by category">
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={supportData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                    <XAxis dataKey="month" tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} tickLine={false} />
                                    <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} axisLine={false} tickLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend wrapperStyle={{ fontSize: '12px', color: '#9CA3AF' }} />
                                    <Bar dataKey="technical" name="Technical" fill="#FF6A00" radius={[6, 6, 0, 0]} barSize={22} />
                                    <Bar dataKey="warranty" name="Warranty" fill="#CC5500" radius={[6, 6, 0, 0]} barSize={22} />
                                    <Bar dataKey="general" name="General" fill="#3A3A3A" radius={[6, 6, 0, 0]} barSize={22} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </ChartCard>
                </div>
            </section>

            {/* ===== UNIT ECONOMICS ===== */}
            <section className="py-16 md:py-24 bg-adhi-dark/30">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="section-label">Unit Economics</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-3">
                            Financial <span className="gradient-text">Breakdown</span>
                        </h2>
                        <p className="text-adhi-gray-400 text-sm max-w-xl mx-auto">
                            Per-unit financial metrics demonstrating the viability and profitability of each ADHI project.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {unitEconomics.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="glass-card p-6"
                            >
                                <div className="text-adhi-gray-500 text-xs uppercase tracking-wider mb-2">{item.label}</div>
                                <div className="text-2xl font-bold gradient-text mb-2">{item.value}</div>
                                <p className="text-adhi-gray-400 text-xs leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center text-adhi-gray-600 text-xs italic mt-8">
                        All financial data is illustrative – Phase 1 Mock Data. Not actual financial projections.
                    </p>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="py-20 md:py-28 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-adhi-dark to-black" />
                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Interested in <span className="gradient-text">Investing?</span>
                        </h2>
                        <p className="text-adhi-gray-400 text-base mb-8 max-w-2xl mx-auto">
                            Join the growing list of investors backing Africa's digital housing revolution.
                            Series A is currently open for qualified investors.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:investors@adhi.africa"
                                className="btn-primary text-base"
                            >
                                Contact Investor Relations
                                <ChevronRight size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
