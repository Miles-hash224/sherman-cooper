import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <main className="pt-32 md:pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            {/* Header / Hero Section */}
            <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6 leading-tight">
                    Transparent Pricing
                </h1>
                <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
                <p className="text-lg md:text-xl text-brand-charcoal/80 max-w-2xl mx-auto font-sans">
                    Clear, straightforward rates for premium property management and leasing services.
                </p>
            </div>

            {/* Hero Image */}
            <div className="w-full h-64 md:h-96 lg:h-[450px] mb-20 overflow-hidden rounded-sm shadow-xl">
                <img
                    src="/pricing_hero_rowhomes.png"
                    alt="Elegant rowhomes"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
            </div>

            {/* Three Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                {/* Column 1: Property Management */}
                <div className="flex flex-col bg-brand-cream border border-brand-charcoal/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="font-serif text-2xl lg:text-3xl text-brand-charcoal mb-8 text-center pb-6 border-b border-brand-charcoal/10">
                        Property Management
                    </h2>
                    <ul className="space-y-4 text-brand-charcoal/80 flex-grow font-sans mt-4">
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                            <span className="text-sm leading-relaxed">
                                Please call or request a quote through our "Contact" section. We will need some basic details on the property:
                                <ul className="mt-4 space-y-2 ml-2 border-l border-brand-gold/30 pl-4">
                                    <li>• Address</li>
                                    <li>• Number of bedrooms</li>
                                    <li>• Number of bathrooms</li>
                                    <li>• If a multi-apartment building, please provide number of units.</li>
                                </ul>
                            </span>
                        </li>
                    </ul>
                    <div className="mt-12 text-center">
                        <Link to="/contact" className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-charcoal transition-colors font-sans font-medium hover:underline">
                            Request a Quote <PhoneCall size={16} />
                        </Link>
                    </div>
                </div>

                {/* Column 2: Leasing Services */}
                <div className="flex flex-col bg-brand-cream border border-brand-charcoal/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="font-serif text-2xl lg:text-3xl text-brand-charcoal mb-8 text-center pb-6 border-b border-brand-charcoal/10">
                        Leasing Services
                    </h2>

                    <div className="flex-grow font-sans space-y-8 mt-4">
                        <div>
                            <h3 className="font-sans font-bold text-brand-charcoal uppercase tracking-wider text-[13px] mb-4 text-center border-b-2 border-brand-gold inline-block pb-1 mx-auto w-max flex justify-center">
                                Full Leasing Service
                            </h3>
                            <ul className="space-y-4 text-brand-charcoal/80">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                    <span className="text-sm leading-relaxed">Our full leasing service is equal to one month's full rent.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                    <span className="text-sm leading-relaxed">If you have 3 or more properties, ask about our multiple property discount.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-sans font-bold text-brand-charcoal uppercase tracking-wider text-[13px] mb-4 mt-8 text-center border-b-2 border-brand-gold inline-block pb-1 mx-auto w-max flex justify-center">
                                A-la-carte Services
                            </h3>
                            <ul className="space-y-4 text-brand-charcoal/80">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                    <span className="text-sm leading-relaxed"><strong>Tenant Screening</strong>, Credit check, reference check, employment verification, lease negotiation & signing only. 35% of the monthly rental amount.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                    <span className="text-sm leading-relaxed"><strong>Vacancy advertising only:</strong> (includes our advertising services and the initial communication with prospective tenant): 35% of the monthly rental amount.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                    <span className="text-sm leading-relaxed"><strong>Detailed Marketing Consultation</strong> $150 (free with any other service.)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Column 3: Registration Services */}
                <div className="flex flex-col bg-brand-cream border border-brand-charcoal/10 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="font-serif text-2xl lg:text-3xl text-brand-charcoal mb-8 text-center pb-6 border-b border-brand-charcoal/10">
                        Registration Services
                    </h2>

                    <div className="flex-grow font-sans space-y-8 mt-4">
                        <div>
                            <h3 className="font-sans font-bold text-brand-charcoal uppercase tracking-wider text-[13px] mb-4 text-center border-b-2 border-brand-gold inline-block pb-1 mx-auto w-max flex justify-center">
                                Rental Property Registration
                            </h3>
                            <ul className="space-y-4 text-brand-charcoal/80">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                    <span className="text-sm leading-relaxed">Single-unit house or condo: $500</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                    <span className="text-sm leading-relaxed">Two-unit row-home: $600</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                    <span className="text-sm leading-relaxed">Multi-unit apartment building: Depends on number of units.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-sans font-bold text-brand-charcoal uppercase tracking-wider text-[13px] mb-4 mt-8 text-center border-b-2 border-brand-gold inline-block pb-1 mx-auto w-max flex justify-center">
                                Certificate Of Occupancy
                            </h3>
                            <ul className="space-y-4 text-brand-charcoal/80">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                                    <span className="text-sm leading-relaxed">Pricing for certificates of occupancy can vary greatly pending which C of O you need and how large your property is.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom CTA */}
            <div className="mt-24 pt-16 border-t border-brand-charcoal/10 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-brand-charcoal mb-6">Have questions about our pricing?</h3>
                <Link
                    to="/contact"
                    className="inline-block px-8 py-4 bg-brand-charcoal text-brand-cream text-lg font-sans font-medium hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 shadow-md"
                >
                    Get in Touch
                </Link>
            </div>
        </main>
    );
};

export default Pricing;
