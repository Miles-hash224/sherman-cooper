import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How do you determine the optimal rental price?",
            answer: "We conduct a comprehensive comparative market analysis, factoring in neighborhood trends, recent luxury lease data, and the unique amenities of your specific property to maximize yield while minimizing vacancy periods."
        },
        {
            question: "What is your tenant screening process?",
            answer: "Our screening is exhaustive. Beyond standard credit and background checks, we verify employment, income (requiring 3x monthly rent), analyze past rental history, and conduct professional reference checks to ensure only the highest caliber occupants."
        },
        {
            question: "How are maintenance requests handled?",
            answer: "Tenants have 24/7 access to our dedicated maintenance portal. Emergency requests are addressed immediately by our trusted network of licensed, insured contractors. For standard repairs over a pre-approved threshold, we consult you before authorizing work."
        },
        {
            question: "When and how do I receive my rental income?",
            answer: "Rents are collected via our secure online portal. Funds are dispersed directly to your account via ACH transfer by the 10th of each month, accompanied by a detailed financial statement accessible through your owner dashboard."
        },
        {
            question: "Are you licensed to operate in Washington D.C.?",
            answer: "Absolutely. We hold all necessary property management licenses and maintain deep expertise in D.C.'s specific tenant rights laws, rent control regulations, and Basic Business License (BBL) requirements to keep you fully compliant."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-white relative">
            <div className="max-w-4xl mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Common Inquiries.
                    </motion.h2>
                    <motion.p
                        className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Clarity is the foundation of our partnerships. If your specific question isn't addressed here, please reach out to our team.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="border border-brand-charcoal/10 rounded-sm overflow-hidden bg-brand-cream/20 hover:border-brand-gold/30 transition-colors duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className={`font-serif text-lg md:text-xl font-medium pr-8 transition-colors duration-300 ${openIndex === index ? 'text-brand-gold' : 'text-brand-charcoal'}`}>
                                    {faq.question}
                                </span>
                                <span className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'text-brand-gold rotate-180' : 'text-brand-charcoal/40'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2 text-brand-charcoal/70 leading-relaxed border-t border-brand-charcoal/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
