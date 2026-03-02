import { motion } from 'framer-motion';

const CTASection = () => {
    return (
        <section id="contact" className="py-24 bg-brand-charcoal text-brand-cream relative overflow-hidden">

            {/* Background accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-3xl -translate-y-1/2 translate-x-1/4 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-gold/5 blur-3xl translate-y-1/2 -translate-x-1/4 rounded-full"></div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
                        Ready to Elevate Your <br className="hidden md:block" /> Property's Potential?
                    </h2>

                    <p className="text-xl text-brand-cream/70 mb-12 max-w-2xl mx-auto font-light">
                        Connect with our advisory team to discuss how Sherman Cooper can maximize the return on your Washington D.C. portfolio while eliminating the daily friction of ownership.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:inquiries@shermancooper.com"
                            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-charcoal bg-brand-gold hover:bg-white hover:text-brand-charcoal transition-colors duration-300 w-full sm:w-auto"
                        >
                            Get Started Today!
                        </a>

                        <a
                            href="tel:+12025550198"
                            className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-brand-cream border border-brand-cream/20 hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 w-full sm:w-auto"
                        >
                            (202) 555-0198
                        </a>
                    </div>

                    <div className="mt-16 pt-10 border-t border-brand-cream/10 inline-flex items-center gap-8 text-sm text-brand-cream/50 uppercase tracking-widest font-medium">
                        <span>Georgetown</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                        <span>Dupont Circle</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50"></span>
                        <span>Kalorama</span>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default CTASection;
