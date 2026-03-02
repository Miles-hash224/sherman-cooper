import React from 'react';
import { motion } from 'framer-motion';
import { KeyRound, ShieldCheck, Wrench, Home, PieChart, Users } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <KeyRound size={28} className="text-brand-gold" />,
            title: "Seamless Leasing",
            description: "We handle marketing, showings, and rigorous tenant screening to secure ideal occupants quickly."
        },
        {
            icon: <Wrench size={28} className="text-brand-gold" />,
            title: "Proactive Maintenance",
            description: "24/7 concierge-level response for repairs, preserving your property's value and tenant satisfaction."
        },
        {
            icon: <PieChart size={28} className="text-brand-gold" />,
            title: "Financial Clarity",
            description: "Transparent, real-time access to detailed financial reporting, rent collection, and ROI metrics."
        },
        {
            icon: <ShieldCheck size={28} className="text-brand-gold" />,
            title: "Legal Compliance",
            description: "Navigating D.C.'s complex housing regulations so you remain compliant and protected."
        },
        {
            icon: <Home size={28} className="text-brand-gold" />,
            title: "Property Inspections",
            description: "Routine, detailed walkthroughs to ensure your asset is maintained to the highest standards."
        },
        {
            icon: <Users size={28} className="text-brand-gold" />,
            title: "Tenant Relations",
            description: "Fostering positive, professional relationships to encourage long-term, reliable tenancy."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Uncompromising Service <br className="hidden md:block" /> for Premium Properties.
                    </motion.h2>
                    <motion.p
                        className="text-lg text-brand-charcoal/70"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        We eliminate the friction of property ownership, providing a completely hands-off experience that maximizes your returns while treating your tenants with white-glove care.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group p-8 border border-brand-charcoal/5 rounded-sm bg-brand-cream/30 hover:bg-white hover:border-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/5 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-full bg-brand-cream flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-charcoal mb-3">{feature.title}</h3>
                            <p className="text-brand-charcoal/70 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Features;
