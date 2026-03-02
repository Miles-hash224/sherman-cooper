import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Leasing Only",
            price: "1 Month's Rent",
            description: "Perfect for landlords who prefer to self-manage but need help finding the right tenant.",
            features: [
                "Professional photography & marketing",
                "Comprehensive background & credit checks",
                "Lease drafting & legal compliance review",
                "Move-in condition report",
                "Security deposit collection"
            ],
            highlighted: false
        },
        {
            name: "Full Management",
            price: "8%",
            period: "of monthly rent",
            description: "Our signature white-glove service. Total peace of mind for hands-off investors.",
            features: [
                "Everything in Leasing Only",
                "24/7 emergency maintenance response",
                "Monthly financial reporting & ledger",
                "Direct deposit rent disbursement",
                "Annual property inspections",
                "Eviction protection & legal coordination"
            ],
            highlighted: true
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-brand-cream relative">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Transparent Value.
                    </motion.h2>
                    <motion.p
                        className="text-lg text-brand-charcoal/70"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        No hidden fees, no markup on maintenance invoices. Just straightforward, premium service.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-sm p-8 md:p-12 border transition-all duration-300 ${plan.highlighted
                                    ? 'bg-brand-charcoal text-white border-brand-charcoal shadow-2xl transform md:-translate-y-4'
                                    : 'bg-white text-brand-charcoal border-brand-charcoal/10 hover:border-brand-gold/30 hover:shadow-xl'
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-charcoal text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-brand-charcoal'}`}>
                                {plan.name}
                            </h3>
                            <p className={`text-sm mb-6 pb-6 border-b ${plan.highlighted ? 'text-white/70 border-white/10' : 'text-brand-charcoal/60 border-brand-charcoal/10'}`}>
                                {plan.description}
                            </p>

                            <div className="mb-8">
                                <span className={`text-4xl md:text-5xl font-serif font-bold ${plan.highlighted ? 'text-brand-gold' : 'text-brand-charcoal'}`}>
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className={`text-sm ml-2 ${plan.highlighted ? 'text-white/60' : 'text-brand-charcoal/50'}`}>
                                        {plan.period}
                                    </span>
                                )}
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        <Check size={20} className={`shrink-0 mt-0.5 ${plan.highlighted ? 'text-brand-gold' : 'text-brand-gold/80'}`} />
                                        <span className={`text-sm md:text-base leading-tight ${plan.highlighted ? 'text-white/90' : 'text-brand-charcoal/80'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`block w-full text-center py-4 px-6 text-sm font-bold transition-colors duration-300 ${plan.highlighted
                                        ? 'bg-brand-gold text-brand-charcoal hover:bg-brand-cream'
                                        : 'bg-brand-charcoal text-brand-cream hover:bg-brand-gold hover:text-brand-charcoal'
                                    }`}
                            >
                                Discuss Your Portfolio
                            </a>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pricing;
