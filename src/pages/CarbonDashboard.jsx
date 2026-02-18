import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend
} from 'recharts';
import { Leaf, TrendingDown, Home, ChevronDown, Droplets, Recycle, Sun, TreePine, Award, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ChartCard from '../components/ChartCard';
import {
    embodiedCarbonData, carbonAvoidedHighlight, housingImpactData,
    carbonEstimatorOptions, carbonByCountry, sustainabilityMetrics
} from '../data/mockData';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 shadow-xl">
                <p className="text-gray-900 text-sm font-medium mb-1">{label}</p>
                {payload.map((entry, i) => (
                    <p key={i} className="text-xs" style={{ color: entry.color }}>
                        {entry.name}: {entry.value.toLocaleString()} tCO₂
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const sustainIcons = {
    'Water Saved': Droplets,
    'Waste Diverted': Recycle,
    'Renewable Energy': Sun,
    'Trees Planted': TreePine,
    'Green Certification': Award,
    'Carbon Credits': Globe,
};

export default function CarbonDashboard() {
    const [selectedProject, setSelectedProject] = useState(carbonEstimatorOptions[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <PageHeader
                label="Carbon Impact"
                title="Carbon Impact Dashboard"
                subtitle="Comprehensive environmental impact modeling, carbon tracking, and sustainability reporting for all ADHI construction projects."
            />

            {/* ===== SUSTAINABILITY METRICS ===== */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Sustainability at a Glance</h2>
                        <p className="text-gray-500 text-sm">Key environmental metrics across all active ADHI projects</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {sustainabilityMetrics.map((item, i) => {
                            const Icon = sustainIcons[item.metric] || Leaf;
                            return (
                                <motion.div
                                    key={item.metric}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="glass-card p-5 text-center"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-adhi-orange/10 flex items-center justify-center mx-auto mb-3">
                                        <Icon size={18} className="text-adhi-orange" />
                                    </div>
                                    <div className="text-lg md:text-xl font-bold gradient-text mb-1">{item.value}</div>
                                    <div className="text-gray-900 text-xs font-medium mb-1">{item.metric}</div>
                                    <div className="text-gray-400 text-[10px] leading-relaxed">{item.description}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== MAIN CHARTS ===== */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Graph 1: Embodied vs Operational */}
                        <ChartCard
                            title="Embodied vs Operational Carbon"
                            subtitle="Comparison of baseline construction and ADHI system (tCO₂)"
                        >
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={embodiedCarbonData} barGap={8}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                        <XAxis
                                            dataKey="name"
                                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                                            tickLine={false}
                                        />
                                        <YAxis
                                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                            axisLine={false}
                                            tickLine={false}
                                            tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Legend wrapperStyle={{ fontSize: '12px', color: '#9CA3AF' }} />
                                        <Bar dataKey="embodied" name="Embodied Carbon" radius={[6, 6, 0, 0]} barSize={40}>
                                            {embodiedCarbonData.map((_, i) => (
                                                <Cell key={i} fill={i === 0 ? '#3A3A3A' : '#FF6A00'} />
                                            ))}
                                        </Bar>
                                        <Bar dataKey="operational" name="Operational Carbon" radius={[6, 6, 0, 0]} barSize={40}>
                                            {embodiedCarbonData.map((_, i) => (
                                                <Cell key={i} fill={i === 0 ? '#2A2A2A' : '#CC5500'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </ChartCard>

                        {/* Graph 2: Carbon Avoided Highlight */}
                        <ChartCard
                            title="Total Carbon Avoided"
                            subtitle={carbonAvoidedHighlight.project}
                        >
                            <div className="h-72 flex flex-col items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    className="text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-adhi-orange/10 border border-adhi-orange/20 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                                        <Leaf size={36} className="text-adhi-orange" />
                                    </div>
                                    <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                                        {carbonAvoidedHighlight.value}
                                    </div>
                                    <div className="text-xl text-gray-600 font-medium mb-1">
                                        {carbonAvoidedHighlight.unit}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {carbonAvoidedHighlight.label}
                                    </div>
                                </motion.div>
                            </div>
                        </ChartCard>
                    </div>

                    {/* Graph 3: Housing Impact + Estimator */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <ChartCard
                            title="Housing Impact – Carbon Savings by Unit Block"
                            subtitle="Average CO₂ savings per unit block (tCO₂)"
                        >
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={housingImpactData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                        <XAxis
                                            dataKey="name"
                                            tick={{ fill: '#9CA3AF', fontSize: 11 }}
                                            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                                            tickLine={false}
                                        />
                                        <YAxis
                                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                            axisLine={false}
                                            tickLine={false}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Bar dataKey="savings" name="CO₂ Savings" fill="#FF6A00" radius={[6, 6, 0, 0]} barSize={36} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </ChartCard>

                        {/* Carbon Estimator */}
                        <ChartCard
                            title="Carbon Estimator"
                            subtitle="Select a project to view illustrative carbon impact"
                        >
                            <div className="h-72 flex flex-col justify-between">
                                <div className="relative mb-4">
                                    <button
                                        id="carbon-estimator-dropdown"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-sm text-gray-900 hover:border-adhi-orange/30 transition-colors"
                                    >
                                        <span className="flex items-center gap-2">
                                            <Home size={16} className="text-adhi-orange" />
                                            {selectedProject.label}
                                        </span>
                                        <ChevronDown size={16} className={`text-gray-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {dropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute top-full left-0 right-0 mt-2 bg-gray-100 border border-gray-200 rounded-xl overflow-hidden z-20 shadow-xl"
                                        >
                                            {carbonEstimatorOptions.map((opt) => (
                                                <button
                                                    key={opt.value}
                                                    onClick={() => { setSelectedProject(opt); setDropdownOpen(false); }}
                                                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${selectedProject.value === opt.value
                                                        ? 'text-adhi-orange bg-adhi-orange/10'
                                                        : 'text-gray-600 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>

                                <div className="flex-1 flex items-center">
                                    <motion.div
                                        key={selectedProject.value}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full p-5 bg-adhi-orange/5 border border-adhi-orange/10 rounded-xl"
                                    >
                                        <div className="flex items-start gap-3">
                                            <TrendingDown size={20} className="text-adhi-orange mt-0.5 flex-shrink-0" />
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {selectedProject.result}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                <p className="text-adhi-gray-600 text-xs italic mt-3 text-center">
                                    Static illustrative estimates. No calculations performed.
                                </p>
                            </div>
                        </ChartCard>
                    </div>
                </div>
            </section>

            {/* ===== CARBON BY COUNTRY ===== */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Carbon Impact by Country</h2>
                        <p className="text-gray-500 text-sm">Illustrative carbon avoided per country of operation</p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {carbonByCountry.map((item, i) => (
                            <motion.div
                                key={item.country}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card p-6"
                            >
                                <h3 className="text-gray-900 font-semibold text-base mb-1">{item.country}</h3>
                                <p className="text-gray-400 text-xs mb-4">{item.projects} projects</p>
                                <div className="text-3xl font-bold gradient-text mb-1">
                                    {item.avoided.toLocaleString()}
                                </div>
                                <div className="text-gray-500 text-xs">tCO₂ avoided</div>
                                <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(item.avoided / 18500) * 100}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 0.3 }}
                                        className="h-full rounded-full bg-gradient-to-r from-adhi-orange to-adhi-orange-light"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <ChartCard
                        title="Carbon Avoided by Country"
                        subtitle="Comparative view across all operational countries (tCO₂)"
                    >
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={carbonByCountry}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                    <XAxis
                                        dataKey="country"
                                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                        axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Bar dataKey="avoided" name="tCO₂ Avoided" fill="#FF6A00" radius={[6, 6, 0, 0]} barSize={48} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </ChartCard>
                </div>
            </section>

            {/* ===== METHODOLOGY ===== */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="section-label">Methodology</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-3">
                            How We <span className="gradient-text">Measure Impact</span>
                        </h2>
                        <p className="text-gray-500 text-sm max-w-xl mx-auto">
                            ADHI's carbon accounting follows industry best practices for construction lifecycle analysis.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Embodied Carbon',
                                desc: 'We measure the carbon footprint of all materials used in construction — from manufacturing to transportation to site. ADHI\'s LSF methodology reduces embodied carbon by 42% compared to traditional concrete construction.',
                                stat: '42% Reduction',
                            },
                            {
                                title: 'Operational Carbon',
                                desc: 'We model the energy consumption of completed buildings over a 30-year lifecycle. Solar panels, improved insulation, and smart metering reduce operational carbon by 39% in ADHI homes.',
                                stat: '39% Reduction',
                            },
                            {
                                title: 'Carbon Credit Generation',
                                desc: 'Verified carbon credits are generated from the difference between traditional baseline construction and ADHI\'s methodology. Credits are available for trading on voluntary carbon markets.',
                                stat: '8,500 Credits',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card p-8"
                            >
                                <div className="text-2xl font-bold gradient-text mb-4">{item.stat}</div>
                                <h3 className="text-gray-900 font-semibold text-lg mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center text-adhi-gray-600 text-xs italic mt-8">
                        All carbon data is illustrative – Phase 1 Mock Data. Methodology aligned with EDGE Green Building standards.
                    </p>
                </div>
            </section>
        </>
    );
}
