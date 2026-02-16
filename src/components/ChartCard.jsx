import { motion } from 'framer-motion';

export default function ChartCard({ title, subtitle, children, className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`glass-card p-6 md:p-8 ${className}`}
        >
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                {subtitle && <p className="text-sm text-adhi-gray-400">{subtitle}</p>}
            </div>
            {children}
        </motion.div>
    );
}
