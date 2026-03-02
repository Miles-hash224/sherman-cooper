const WhatWeDo = () => {
    return (
        <main className="pt-32 md:pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6 leading-tight">
                    We manage Property efficiently and effectively!
                </h1>
                <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
            </div>

            <div className="space-y-24 md:space-y-32">
                {/* Section 1: Overview */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2 order-2 md:order-1 relative">
                        <div className="absolute inset-0 bg-brand-gold mix-blend-multiply opacity-10 rounded-sm"></div>
                        <img
                            src="/what-we-do-hero.png"
                            alt="Luxurious condominium building exterior in Washington D.C. at golden hour"
                            className="w-full h-auto object-cover rounded-sm shadow-xl aspect-[4/5] md:aspect-auto md:max-h-[600px]"
                        />
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col justify-center">
                        <h2 className="font-sans text-2xl uppercase tracking-widest text-[#1d4ed8] font-medium mb-6">Boutique Services</h2>
                        <p className="text-lg md:text-xl text-brand-charcoal/80 leading-relaxed mb-6 font-serif">
                            Sherman Cooper Property Management is a boutique property management and leasing services company. We take great pride in providing excellent and affordable management and leasing services.
                        </p>
                        <p className="text-lg md:text-xl text-brand-charcoal/80 leading-relaxed font-serif">
                            We specialize in managing and renting single family, and multi-family rowhomes and condos. Hire us if you want personalized, one-on-one customer service.
                        </p>
                    </div>
                </div>

                {/* Section 2: Rapid Response */}
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h2 className="font-sans text-2xl uppercase tracking-widest text-[#b49830] font-medium mb-6">Rapid Response</h2>
                        <p className="text-lg md:text-xl text-brand-charcoal/80 leading-relaxed mb-6 font-serif">
                            We take great care of every property we manage. We treat them like our own children.
                        </p>
                        <p className="text-lg md:text-xl text-brand-charcoal/80 leading-relaxed font-serif">
                            Our unique "Rapid Response" systems allow us to respond to tenant questions and requests immediately. And, if an emergency should ever arise, we're ready and prepared to step in right away.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute inset-0 bg-brand-charcoal mix-blend-multiply opacity-5 rounded-sm"></div>
                        <img
                            src="/what-we-do-service.png"
                            alt="Friendly property manager handing a key to a tenant in a luxurious lobby"
                            className="w-full h-auto object-cover rounded-sm shadow-xl aspect-[4/5] md:aspect-auto md:max-h-[600px]"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-32 text-center">
                <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-brand-charcoal text-brand-cream text-lg font-sans font-medium hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 shadow-md"
                >
                    Get in Touch With Us
                </a>
            </div>
        </main>
    );
};

export default WhatWeDo;
