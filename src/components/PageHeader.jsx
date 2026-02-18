import { motion } from 'framer-motion';

export default function PageHeader({ label, title, subtitle }) {
    return (
        <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-adhi-orange/5 rounded-full blur-[120px]" />
            <div className="absolute top-20 right-0 w-72 h-72 bg-adhi-orange/3 rounded-full blur-[100px]" />

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {label && <span className="section-label">{label}</span>}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-wide">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
