import { motion } from 'framer-motion';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer
} from 'recharts';
import {
    ArrowRight, CheckCircle2, Clock, Send, FileText, Truck, MapPin,
    Package, Search, Filter, TrendingUp, Star, ShoppingCart, BarChart3,
    Shield, Globe, Zap, Eye, AlertTriangle, RefreshCw
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { procurementOrders, procurementFlowSteps, materialCategories, supplierPerformance } from '../data/mockData';

const statusConfig = {
    Draft: { color: 'bg-adhi-gray-600 text-gray-600', icon: FileText },
    Sent: { color: 'bg-blue-500/20 text-blue-400', icon: Send },
    Confirmed: { color: 'bg-adhi-orange/20 text-adhi-orange', icon: CheckCircle2 },
    Shipped: { color: 'bg-green-500/20 text-green-400', icon: Truck },
};

const flowIcons = [FileText, Send, Eye, CheckCircle2, Shield, Truck, MapPin];

const categoryIcons = {
    steel: Package, concrete: Package, roof: Package, electrical: Zap,
    plumbing: Package, insulation: Package, windows: Package, smart: Zap,
};

const procurementStats = [
    { label: 'Total Orders', value: '156', icon: ShoppingCart, change: '+23 this month' },
    { label: 'Active Suppliers', value: '38', icon: Globe, change: 'Across 6 countries' },
    { label: 'On-Time Rate', value: '94%', icon: Clock, change: '+2% vs last quarter' },
    { label: 'Cost Savings', value: '28%', icon: TrendingUp, change: 'vs traditional procurement' },
];

/* Supply Chain Chart Data */
const supplyChainData = [
    { material: 'Steel', rfq: 480, orders: 520, delivery: 450 },
    { material: 'Cement', rfq: 750, orders: 820, delivery: 680 },
    { material: 'Glass', rfq: 320, orders: 280, delivery: 250 },
    { material: 'Timber', rfq: 590, orders: 540, delivery: 510 },
];

/* Active Vendors Data */
const activeVendors = [
    { name: 'Global Steel Co.', type: 'Structural', contract: '#CON-101', status: 'Active', statusColor: 'bg-green-100 text-green-700', value: '$1.2M' },
    { name: 'EcoCement Ltd', type: 'Foundation', contract: '#CON-102', status: 'In Review', statusColor: 'bg-yellow-100 text-yellow-700', value: '$840K' },
    { name: 'TimberWorks Africa', type: 'Framing', contract: '#CON-103', status: 'Active', statusColor: 'bg-green-100 text-green-700', value: '$620K' },
    { name: 'GlassTech Rwanda', type: 'Windows', contract: '#CON-104', status: 'Pending', statusColor: 'bg-blue-100 text-blue-700', value: '$380K' },
    { name: 'SafeWire Electric', type: 'Electrical', contract: '#CON-105', status: 'Active', statusColor: 'bg-green-100 text-green-700', value: '$510K' },
];

/* Inventory Alerts */
const lowStockAlerts = [
    { item: 'Window Frames (M-Type)', level: 20 },
    { item: 'Electrical Conduit 25mm', level: 15 },
    { item: 'Roof Insulation Panels', level: 28 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">{label}</p>
                {payload.map((entry, i) => (
                    <p key={i} className="text-xs" style={{ color: entry.color }}>
                        {entry.name}: <span className="font-bold">{entry.value}</span>
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export default function ProcurementHub() {
    return (
        <>
            <PageHeader
                label="Digital Procurement"
                title="Digital Procurement Hub"
                subtitle="Standardized, structured procurement for scalable housing delivery across Africa. Real-time order tracking, supplier management, and automated workflows."
            />

            {/* ===== PROCUREMENT STATS ===== */}
            <section id="procurement-stats" className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {procurementStats.map((stat, i) => {
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
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="w-10 h-10 rounded-xl bg-adhi-orange/10 flex items-center justify-center">
                                            <Icon size={18} className="text-adhi-orange" />
                                        </div>
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                                    <div className="text-gray-900 text-xs font-medium mb-0.5">{stat.label}</div>
                                    <div className="text-gray-400 text-[10px]">{stat.change}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== SUPPLY CHAIN CONTROL CHART ===== */}
            <section id="supply-chain-chart" className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-6 md:p-8"
                    >
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Supply Chain Control</h3>
                            <p className="text-sm text-gray-500">Tracking RFQ to Delivery pipeline</p>
                        </div>
                        <ResponsiveContainer width="100%" height={320}>
                            <AreaChart data={supplyChainData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="rfqGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="ordersGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.15} />
                                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="deliveryGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#FF6A00" stopOpacity={0.15} />
                                        <stop offset="95%" stopColor="#FF6A00" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                                <XAxis dataKey="material" tick={{ fontSize: 12, fill: '#6B7280' }} />
                                <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="rfq" name="RFQ Sent" stroke="#6366f1" fill="url(#rfqGrad)" strokeWidth={2} dot={{ r: 4, fill: '#fff', stroke: '#6366f1', strokeWidth: 2 }} />
                                <Area type="monotone" dataKey="orders" name="Orders Placed" stroke="#14b8a6" fill="url(#ordersGrad)" strokeWidth={2} dot={{ r: 4, fill: '#fff', stroke: '#14b8a6', strokeWidth: 2 }} />
                                <Area type="monotone" dataKey="delivery" name="Delivered" stroke="#FF6A00" fill="url(#deliveryGrad)" strokeWidth={2} dot={{ r: 4, fill: '#fff', stroke: '#FF6A00', strokeWidth: 2 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                        <div className="flex items-center gap-6 mt-4 justify-center">
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-500" /><span className="text-xs text-gray-500">RFQ Sent</span></div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-teal-500" /><span className="text-xs text-gray-500">Orders Placed</span></div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-adhi-orange" /><span className="text-xs text-gray-500">Delivered</span></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== ACTIVE VENDORS + INVENTORY ===== */}
            <section id="vendors-inventory" className="py-12 md:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Active Vendors Table */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3 glass-card p-6 md:p-8"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Active Vendors</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">Vendor</th>
                                            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">Contract</th>
                                            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">Status</th>
                                            <th className="text-right text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {activeVendors.map((vendor, i) => (
                                            <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                                <td className="py-4">
                                                    <div className="text-sm font-semibold text-gray-900">{vendor.name}</div>
                                                    <div className="text-xs text-gray-400">{vendor.type}</div>
                                                </td>
                                                <td className="py-4 text-sm text-gray-500 font-mono">{vendor.contract}</td>
                                                <td className="py-4">
                                                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${vendor.statusColor}`}>
                                                        {vendor.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 text-sm font-semibold text-gray-900 text-right">{vendor.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Inventory Management */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="lg:col-span-2 glass-card p-6 md:p-8"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Inventory Management</h3>

                            {/* In-Stock Rate */}
                            <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                                    <RefreshCw size={20} className="text-teal-600" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-gray-500 font-medium">In-Stock Rate</div>
                                    <div className="text-3xl font-bold text-gray-900">94.2%</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-green-600">+2.4%</div>
                                    <div className="text-[10px] text-gray-400">vs last month</div>
                                </div>
                            </div>

                            {/* Low Stock Alerts */}
                            <div className="mb-3">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Low Stock Alerts</h4>
                            </div>
                            <div className="space-y-3">
                                {lowStockAlerts.map((alert, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-red-50 rounded-xl border border-red-100">
                                        <div className="flex items-center gap-3">
                                            <AlertTriangle size={14} className="text-red-500" />
                                            <span className="text-sm text-gray-700">{alert.item}</span>
                                        </div>
                                        <span className="text-sm font-bold text-red-600">{alert.level}%</span>
                                    </div>
                                ))}
                            </div>

                            {/* System Status */}
                            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-200">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-gray-500">System operational</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== MATERIAL CATEGORIES ===== */}
            <section id="material-categories" className="py-12 md:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Material Categories</h2>
                        <p className="text-gray-500 text-sm">Browse our standardized catalogue of construction materials</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {materialCategories.map((cat, i) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="glass-card p-5 group cursor-pointer"
                            >
                                <div className="w-10 h-10 rounded-xl bg-adhi-orange/10 flex items-center justify-center mb-4 group-hover:bg-adhi-orange/20 transition-colors">
                                    <Package size={18} className="text-adhi-orange" />
                                </div>
                                <h3 className="text-gray-900 font-semibold text-sm mb-1">{cat.name}</h3>
                                <div className="space-y-1 mt-3">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-gray-400">Items</span>
                                        <span className="text-gray-600">{cat.items}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-gray-400">Suppliers</span>
                                        <span className="text-gray-600">{cat.suppliers}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-gray-400">Total Value</span>
                                        <span className="text-adhi-orange font-medium">{cat.totalValue}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== ORDER TABLE ===== */}
            <section id="order-table" className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
                    >
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Procurement Orders</h2>
                            <p className="text-gray-500 text-sm">Active RFQ and Purchase Order tracking across all projects</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-xl text-sm">
                                <Search size={14} className="text-gray-400" />
                                <span className="text-gray-400 text-xs">Search orders...</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-100 border border-gray-200 rounded-xl">
                                <Filter size={14} className="text-gray-400" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Desktop Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="hidden lg:block glass-card overflow-hidden"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Supplier</th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product SKU</th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Project</th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Country</th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">RFQ/PO Ref</th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Value</th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Est. Delivery</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {procurementOrders.map((order, i) => {
                                        const statusStyle = statusConfig[order.status];
                                        const StatusIcon = statusStyle.icon;
                                        return (
                                            <tr
                                                key={order.id}
                                                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${i === procurementOrders.length - 1 ? 'border-b-0' : ''}`}
                                            >
                                                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{order.supplier}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{order.sku}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{order.project}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{order.country}</td>
                                                <td className="px-6 py-4 text-sm text-gray-500 font-mono text-xs">{order.rfqRef}</td>
                                                <td className="px-6 py-4 text-sm text-adhi-orange font-medium">{order.value}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusStyle.color}`}>
                                                        <StatusIcon size={12} />
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">{order.delivery}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                            <span className="text-gray-400 text-xs">Showing {procurementOrders.length} of {procurementOrders.length} orders</span>
                            <span className="text-adhi-gray-600 text-xs italic">Illustrative – Phase 1 Mock Data</span>
                        </div>
                    </motion.div>

                    {/* Mobile Cards */}
                    <div className="lg:hidden space-y-4">
                        {procurementOrders.map((order, i) => {
                            const statusStyle = statusConfig[order.status];
                            const StatusIcon = statusStyle.icon;
                            return (
                                <motion.div
                                    key={order.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="glass-card p-5"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-sm font-semibold text-gray-900 flex-1 pr-3">{order.supplier}</h3>
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0 ${statusStyle.color}`}>
                                            <StatusIcon size={11} />
                                            {order.status}
                                        </span>
                                    </div>
                                    <div className="space-y-2 text-xs">
                                        <div className="flex justify-between"><span className="text-gray-400">SKU</span><span className="text-gray-600 text-right">{order.sku}</span></div>
                                        <div className="flex justify-between"><span className="text-gray-400">Project</span><span className="text-gray-600">{order.project}</span></div>
                                        <div className="flex justify-between"><span className="text-gray-400">Country</span><span className="text-gray-600">{order.country}</span></div>
                                        <div className="flex justify-between"><span className="text-gray-400">Value</span><span className="text-adhi-orange font-medium">{order.value}</span></div>
                                        <div className="flex justify-between"><span className="text-gray-400">Reference</span><span className="text-gray-500 font-mono">{order.rfqRef}</span></div>
                                        <div className="flex justify-between"><span className="text-gray-400">Delivery</span><span className="text-gray-600">{order.delivery}</span></div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== SUPPLIER PERFORMANCE ===== */}
            <section id="supplier-performance" className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Top Supplier Performance</h2>
                        <p className="text-gray-500 text-sm">Verified supplier ratings and delivery metrics</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {supplierPerformance.map((supplier, i) => (
                            <motion.div
                                key={supplier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="glass-card p-6"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-gray-900 font-semibold text-sm">{supplier.name}</h3>
                                        <p className="text-gray-400 text-xs mt-0.5">{supplier.country}</p>
                                    </div>
                                    <div className="flex items-center gap-1 px-2.5 py-1 bg-adhi-orange/10 rounded-lg">
                                        <Star size={12} className="text-adhi-orange fill-adhi-orange" />
                                        <span className="text-adhi-orange text-xs font-bold">{supplier.rating}</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-100 rounded-xl p-3 text-center">
                                        <div className="text-lg font-bold text-gray-900">{supplier.onTime}%</div>
                                        <div className="text-gray-400 text-[10px] uppercase tracking-wider">On-Time</div>
                                    </div>
                                    <div className="bg-gray-100 rounded-xl p-3 text-center">
                                        <div className="text-lg font-bold text-adhi-orange">{supplier.orders}</div>
                                        <div className="text-gray-400 text-[10px] uppercase tracking-wider">Orders</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FLOW DIAGRAM ===== */}
            <section id="procurement-flow" className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="section-label">Procurement Flow</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-3">
                            End-to-End <span className="gradient-text">Procurement Pipeline</span>
                        </h2>
                        <p className="text-gray-500 text-sm max-w-xl mx-auto">
                            A streamlined, 7-step procurement journey from request to site delivery — all digitally tracked.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Desktop connector line */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-adhi-orange/30 to-transparent -translate-y-1/2 z-0" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-3 relative z-10">
                            {procurementFlowSteps.map((step, i) => {
                                const Icon = flowIcons[i] || FileText;
                                return (
                                    <motion.div
                                        key={step.step}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08 }}
                                        className="flex flex-col items-center text-center"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-adhi-orange/20 flex items-center justify-center mb-3 relative">
                                            <Icon size={22} className="text-adhi-orange" />
                                            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-adhi-orange text-gray-900 text-[10px] font-bold flex items-center justify-center">
                                                {step.step}
                                            </div>
                                        </div>
                                        <h3 className="text-gray-900 font-semibold text-xs mb-1">{step.label}</h3>
                                        <p className="text-gray-400 text-[10px] leading-relaxed">{step.description}</p>

                                        {/* Mobile arrow */}
                                        {i < procurementFlowSteps.length - 1 && (
                                            <div className="lg:hidden mt-3 text-adhi-orange/40">
                                                <ArrowRight size={16} className="rotate-90" />
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS ===== */}
            <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="section-label">Platform Benefits</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-3">
                            Why Use ADHI <span className="gradient-text">Procurement?</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Globe, title: 'Pan-African Network', desc: '38+ verified suppliers across Rwanda, Uganda, Kenya, Tanzania, Ghana, and Senegal. Pre-vetted for quality, reliability, and compliance.' },
                            { icon: Zap, title: 'Automated Workflows', desc: 'From RFQ creation to delivery confirmation — the entire procurement lifecycle is digitized, reducing manual errors by 90%.' },
                            { icon: Shield, title: 'Quality Assurance', desc: 'Every material undergoes pre-shipment quality inspection. Digital certificates and compliance documentation at every step.' },
                            { icon: TrendingUp, title: '28% Cost Savings', desc: 'Bulk procurement, standardized specifications, and competitive bidding deliver significant cost reductions vs traditional methods.' },
                            { icon: MapPin, title: 'GPS Tracking', desc: 'Real-time shipment tracking from factory to construction site. Never lose visibility on your critical materials.' },
                            { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Procurement analytics, spend analysis, supplier performance metrics, and predictive demand forecasting — all in one dashboard.' },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="glass-card p-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-adhi-orange/10 flex items-center justify-center mb-4">
                                    <item.icon size={22} className="text-adhi-orange" />
                                </div>
                                <h3 className="text-gray-900 font-semibold text-base mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
