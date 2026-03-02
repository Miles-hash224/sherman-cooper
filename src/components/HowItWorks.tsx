import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Consultation & Onboarding",
            description: "We begin with a thorough assessment of your property, your goals, and a tailored plan to position your asset for optimal yield."
        },
        {
            number: "02",
            title: "Strategic Placement",
            description: "Our marketing network aggressively targets premium tenants, while our rigorous screening guarantees only highly qualified candidates."
        },
        {
            number: "03",
            title: "Effortless Ownership",
            description: "Once leased, we handle all day-to-day operations, maintenance, and financial reporting—delivering peace of mind directly to you."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-brand-cream relative overflow-hidden">

            {/* Decorative background lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-brand-charcoal/5"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-brand-charcoal/5"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        A Refined Process.
                    </motion.h2>
                    <motion.p
                        className="text-lg text-brand-charcoal/70"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        We've distilled property management into three distinct phases, ensuring absolute clarity and seamless execution from start to finish.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[4rem] left-0 w-full h-px border-t border-dashed border-brand-charcoal/20 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative z-10 flex flex-col items-center text-center group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="w-32 h-32 rounded-full bg-brand-cream border border-brand-charcoal/10 flex items-center justify-center mb-8 relative shadow-lg group-hover:border-brand-gold/50 group-hover:-translate-y-2 transition-all duration-500">
                                    <div className="absolute inset-2 border border-brand-gold/20 rounded-full group-hover:scale-95 transition-transform duration-500"></div>
                                    <span className="font-serif text-4xl font-bold text-brand-gold">{step.number}</span>
                                </div>

                                <h3 className="text-xl font-bold text-brand-charcoal mb-4 tracking-wide">{step.title}</h3>
                                <p className="text-brand-charcoal/70 leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center font-medium text-brand-gold hover:text-brand-charcoal transition-colors border-b border-brand-gold/30 hover:border-brand-charcoal pb-1"
                    >
                        Begin your onboarding process today &rarr;
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default HowItWorks;
