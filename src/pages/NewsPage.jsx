import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Search, Filter } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { newsArticles } from '../data/mockData';

const categoryColors = {
    'Funding': 'bg-green-500/15 text-green-400 border-green-500/20',
    'Projects': 'bg-blue-500/15 text-blue-400 border-blue-500/20',
    'Sustainability': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    'Partnership': 'bg-purple-500/15 text-purple-400 border-purple-500/20',
    'Expansion': 'bg-adhi-orange/15 text-adhi-orange border-adhi-orange/20',
    'Awards': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20',
};

const allCategories = ['All', ...new Set(newsArticles.map(a => a.category))];

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredArticles = newsArticles.filter(article => {
        const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <PageHeader
                label="Latest Updates"
                title={<>News & <span className="gradient-text">Announcements</span></>}
                subtitle="Stay updated with the latest developments, milestones, and achievements from ADHI's mission to digitize housing infrastructure across Africa."
            />

            <section className="py-16 md:py-24 relative">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Filters & Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12"
                    >
                        {/* Category Pills */}
                        <div className="flex flex-wrap gap-2">
                            {allCategories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${activeCategory === cat
                                            ? 'bg-adhi-orange text-white border-adhi-orange shadow-lg shadow-adhi-orange/20'
                                            : 'bg-white/5 text-adhi-gray-400 border-white/10 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-72">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-adhi-gray-500" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-adhi-gray-500 focus:outline-none focus:border-adhi-orange/50 focus:ring-1 focus:ring-adhi-orange/30 transition-all"
                            />
                        </div>
                    </motion.div>

                    {/* Results Count */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-adhi-gray-500 text-sm mb-8"
                    >
                        Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                        {activeCategory !== 'All' && <> in <span className="text-adhi-orange">{activeCategory}</span></>}
                    </motion.p>

                    {/* Featured Article (First One) */}
                    {filteredArticles.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass-card p-8 md:p-10 mb-10 group cursor-pointer hover:border-adhi-orange/30 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${categoryColors[filteredArticles[0].category] || 'bg-adhi-orange/15 text-adhi-orange border-adhi-orange/20'}`}>
                                            {filteredArticles[0].category}
                                        </span>
                                        <span className="text-adhi-gray-500 text-xs flex items-center gap-1">
                                            <Clock size={12} /> {filteredArticles[0].readTime}
                                        </span>
                                        <span className="px-2 py-0.5 bg-adhi-orange/10 rounded text-adhi-orange text-[10px] font-bold uppercase">Featured</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug group-hover:text-adhi-orange transition-colors">
                                        {filteredArticles[0].title}
                                    </h2>
                                    <p className="text-adhi-gray-400 text-base leading-relaxed mb-6">
                                        {filteredArticles[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <span className="text-adhi-gray-500 text-sm flex items-center gap-2">
                                            <Calendar size={14} /> {filteredArticles[0].date}
                                        </span>
                                        <span className="text-adhi-orange text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Read Full Article <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Article Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredArticles.slice(1).map((article, i) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                                className="glass-card p-6 flex flex-col group cursor-pointer hover:border-adhi-orange/20 transition-all duration-400"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${categoryColors[article.category] || 'bg-adhi-orange/15 text-adhi-orange border-adhi-orange/20'}`}>
                                        {article.category}
                                    </span>
                                    <span className="text-adhi-gray-600 text-xs flex items-center gap-1">
                                        <Clock size={10} /> {article.readTime}
                                    </span>
                                </div>
                                <h3 className="text-white font-semibold text-base mb-3 leading-snug group-hover:text-adhi-orange transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-adhi-gray-400 text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <span className="text-adhi-gray-500 text-xs flex items-center gap-1.5">
                                        <Calendar size={12} /> {article.date}
                                    </span>
                                    <span className="text-adhi-orange text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read <ArrowRight size={12} />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredArticles.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                                <Filter size={24} className="text-adhi-gray-500" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">No articles found</h3>
                            <p className="text-adhi-gray-400 text-sm">
                                Try adjusting your filters or search term.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>
        </>
    );
}
