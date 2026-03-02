import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-cream">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left z-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-4 font-medium"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Sherman Cooper
                        </motion.h2>
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold-light border border-brand-gold/20 mb-6 text-sm font-medium tracking-wide uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                            Boutique Property Management in D.C.
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-brand-charcoal mb-6">
                            Elevating the Standard of Living.
                        </h1>

                        <p className="text-lg md:text-xl text-brand-charcoal/70 mb-10 max-w-2xl mx-auto lg:mx-0 font-light">
                            Expert, white-glove leasing and management services tailored for the discerning Washington D.C. property owner.
                        </p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand-cream bg-brand-charcoal overflow-hidden transition-all duration-300 hover:bg-brand-charcoal/90 w-full sm:w-auto"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started Today!
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 h-full w-full bg-brand-gold transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 opacity-20"></div>
                            </a>

                            <a
                                href="#services"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand-charcoal border border-brand-charcoal/20 hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 w-full sm:w-auto"
                            >
                                Explore Services
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="flex-1 w-full max-w-lg lg:max-w-none relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-bl-full shadow-2xl">
                            <div className="absolute inset-0 bg-brand-charcoal/10 mix-blend-overlay z-10"></div>
                            {/* Replace with actual image in public folder */}
                            <img
                                src="/hero.png"
                                alt="Luxurious D.C. Apartment Interior"
                                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
