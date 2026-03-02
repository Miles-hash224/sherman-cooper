import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        { value: "$2B+", label: "Assets Under Management" },
        { value: "99.4%", label: "Average Occupancy Rate" },
        { value: "15+", label: "Years of D.C. Expertise" },
        { value: "500+", label: "Premium Units Managed" }
    ];

    return (
        <section className="py-20 bg-brand-charcoal text-brand-cream relative">
            <div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-brand-cream/10">

                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center justify-center p-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-gold mb-3">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base font-medium text-brand-cream/80 uppercase tracking-widest max-w-[150px]">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Stats;
