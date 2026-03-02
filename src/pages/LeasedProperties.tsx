import React from 'react';
import { Link } from 'react-router-dom';

const LeasedProperties = () => {
    // Repeated 3 times to create a 9-item grid
    const properties = [
        { id: 1, image: "/leased_1_rowhome.png", alt: "Classic red brick city rowhome" },
        { id: 2, image: "/leased_2_townhouse.png", alt: "Modern multi-level city townhouse" },
        { id: 3, image: "/leased_3_apartment.png", alt: "Modern apartment building entrance" },
        { id: 4, image: "/leased_2_townhouse.png", alt: "Modern multi-level city townhouse" },
        { id: 5, image: "/leased_3_apartment.png", alt: "Modern apartment building entrance" },
        { id: 6, image: "/leased_1_rowhome.png", alt: "Classic red brick city rowhome" },
        { id: 7, image: "/leased_3_apartment.png", alt: "Modern apartment building entrance" },
        { id: 8, image: "/leased_1_rowhome.png", alt: "Classic red brick city rowhome" },
        { id: 9, image: "/leased_2_townhouse.png", alt: "Modern multi-level city townhouse" },
    ];

    return (
        <main className="pt-32 md:pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                <h1 className="font-serif text-3xl md:text-5xl lg:text-5xl text-brand-charcoal mb-6 leading-tight">
                    Just a few of the properties we have leased.
                </h1>
                <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
            </div>

            {/* Responsive Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="group relative overflow-hidden rounded-sm shadow-md aspect-square bg-brand-charcoal/5"
                    >
                        <img
                            src={property.image}
                            alt={property.alt}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                        {/* Optional hover overlay for a premium feel */}
                        <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                            <span className="text-brand-cream border border-brand-cream px-6 py-2 font-sans text-sm tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                View Details
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-24 pt-16 border-t border-brand-charcoal/10 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-6">Looking for a property manager?</h3>
                <Link
                    to="/contact"
                    className="inline-block px-8 py-4 bg-brand-charcoal text-brand-cream text-lg font-sans font-medium hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 shadow-md"
                >
                    Contact Our Team
                </Link>
            </div>
        </main>
    );
};

export default LeasedProperties;
