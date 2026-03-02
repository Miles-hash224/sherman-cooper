import { Bed, Bath, ArrowRight, ExternalLink } from 'lucide-react';

const ForRent = () => {
    const properties = [
        {
            id: 1,
            address: "2104 Eluna Court, Vienna, VA",
            rent: "$3400",
            bedrooms: 3,
            bathrooms: 3.5,
            features: [
                "Hardwood floors throughout",
                "Private patio and deck",
                "Close to everything!",
                "Off street parking",
                "Tenant pays all utilities"
            ],
            image: "/property_1_vienna.png",
            status: "Rented",
            link: "https://www.zillow.com/homedetails/2104-Eluna-Ct-Vienna-VA-22182/51775706_zpid/?view=public"
        },
        {
            id: 2,
            address: "8105 Madrillon Springs Ln, Vienna, VA 22182",
            rent: "$3800",
            bedrooms: 3,
            bathrooms: 3.5,
            features: [
                "Hardwood Floors and Carpet",
                "Garage and driveway parking",
                "Huge deck!",
                "Amazing location!"
            ],
            image: "/property_2_madrillon.png",
            status: "Available",
            link: "#"
        },
        {
            id: 3,
            address: "1433 S St NW APT 1, Washington, DC 20009",
            rent: "$2600",
            bedrooms: 1,
            bathrooms: 1.5,
            features: [
                "W/D in unit",
                "Close to metro!"
            ],
            image: "/property_3_sst.png",
            status: "Available",
            link: "#"
        }
    ];

    return (
        <main className="pt-32 md:pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6 leading-tight">
                    Available Properties
                </h1>
                <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
                <p className="text-lg md:text-xl text-brand-charcoal/80 max-w-2xl mx-auto font-sans">
                    Discover your next home from our curated selection of premium residences, thoughtfully managed for your comfort.
                </p>
            </div>

            <div className="space-y-16 md:space-y-24">
                {properties.map((property, index) => (
                    <div
                        key={property.id}
                        className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-sm shadow-xl">
                            <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src={property.image}
                                alt={property.address}
                                className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {property.status === 'Rented' && (
                                <div className="absolute inset-0 bg-brand-charcoal/40 z-20 flex items-center justify-center backdrop-blur-sm">
                                    <span className="font-serif text-5xl md:text-7xl font-bold text-brand-gold drop-shadow-lg tracking-widest uppercase opacity-90 rotate-[-15deg]">
                                        Rented
                                    </span>
                                </div>
                            )}
                            {property.status === 'Available' && (
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="bg-brand-gold text-brand-charcoal px-4 py-2 text-sm font-semibold tracking-wider shadow-md">
                                        AVAILABLE NOW
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Details Section */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">
                            <div className="mb-6 border-b border-brand-charcoal/10 pb-6">
                                <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-4 leading-tight">
                                    {property.address}
                                </h2>
                                <p className="font-serif text-2xl text-brand-gold mb-6">
                                    Rent {property.rent}<span className="text-sm text-brand-charcoal/60 font-sans tracking-normal"> / month</span>
                                </p>

                                <div className="flex gap-6 text-brand-charcoal/80 font-sans">
                                    <div className="flex items-center gap-2">
                                        <Bed size={20} className="text-brand-gold" />
                                        <span>{property.bedrooms} Beds</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath size={20} className="text-brand-gold" />
                                        <span>{property.bathrooms} Baths</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-sans font-semibold text-brand-charcoal uppercase tracking-wider text-sm mb-4">Highlights</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                                    {property.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-brand-charcoal/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                {property.link !== '#' ? (
                                    <a
                                        href={property.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 px-6 py-3 font-sans font-medium transition-all duration-300 ${property.status === 'Rented'
                                            ? 'bg-transparent border-2 border-brand-charcoal/20 text-brand-charcoal/60 hover:border-brand-charcoal/40'
                                            : 'bg-brand-charcoal text-brand-cream hover:bg-brand-gold hover:text-brand-charcoal shadow-md'
                                            }`}
                                    >
                                        View Full Listing <ExternalLink size={18} />
                                    </a>
                                ) : (
                                    <button
                                        disabled={property.status === 'Rented'}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-charcoal text-brand-cream font-sans font-medium hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Inquire About Property <ArrowRight size={18} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-24 md:mt-32 pt-16 border-t border-brand-charcoal/10 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-6">Don't see what you're looking for?</h3>
                <p className="text-brand-charcoal/80 mb-8 max-w-xl mx-auto">
                    Contact us to be notified when new properties become available or let us know exactly what you need.
                </p>
                <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-brand-charcoal text-brand-cream text-lg font-sans font-medium hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 shadow-md"
                >
                    Contact Our Team
                </a>
            </div>
        </main>
    );
};

export default ForRent;
