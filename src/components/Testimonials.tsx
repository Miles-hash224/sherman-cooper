import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Sherman Cooper is a dream to work with! Professional, even keeled, tenants love them so it makes my life as the home owner a breeze. They have a wide array of quality contractors who can work on my home as the need arises and bookkeeping/tax accounting is top notch. and I don't have to lift a finger. I've referred friends and colleagues who are similarly thrilled.",
            name: "Julie Lopez",
            title: "Homeowner"
        },
        {
            quote: "Recommended by my trusted real estate agent, Chris has been my property manager for some years... He and his team have always been extremely responsible, approachable, on top of things, and providing an overall high value service and peace of mind (even in difficult situations such as flooding from a neighboring unit).",
            name: "R M",
            title: "Condominium Seller"
        },
        {
            quote: "Sherman Cooper Property Management has been managing my rental properties since 2012 and I couldn't be happier with their services. They have taken great care of my rental property portfolio of ten single family homes and multi-unit buildings. Sherman Cooper has done a wonderful job finding and retaining quality tenants, taking care of property issues in a timely fashion...",
            name: "Rob Williams",
            title: "Property Investor"
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-charcoal/5 text-brand-charcoal/70 mb-4 text-sm font-medium tracking-wide uppercase"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Client Perspectives
                    </motion.div>
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-brand-charcoal"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Trusted by D.C.'s Finest.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-brand-cream/40 p-10 rounded-sm relative group hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-brand-gold/20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Quote size={40} className="text-brand-gold/20 absolute top-8 right-8 group-hover:text-brand-gold/40 transition-colors duration-500" />

                            <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-8 italic relative z-10">
                                "{testimonial.quote}"
                            </p>

                            <div className="mt-auto">
                                <div>
                                    <h4 className="font-bold text-brand-charcoal">{testimonial.name}</h4>
                                    <p className="text-sm text-brand-charcoal/60">{testimonial.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
