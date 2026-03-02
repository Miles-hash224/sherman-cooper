import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Services = () => {
    return (
        <main className="pt-32 md:pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6 leading-tight">
                    Our Services
                </h1>
                <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
                <p className="text-lg md:text-xl text-brand-charcoal/80 max-w-2xl mx-auto font-sans">
                    Comprehensive, high-touch management and leasing solutions tailored for your peace of mind.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                {/* Column 1: Property Management */}
                <div className="flex flex-col">
                    <div className="mb-8 overflow-hidden rounded-sm shadow-lg">
                        <img
                            src="/service-property-management.png"
                            alt="Cozy elegant living room in a D.C. rowhome representing property management"
                            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <h2 className="font-serif text-2xl lg:text-3xl text-brand-charcoal mb-4 text-center">
                        Property Management
                    </h2>
                    <p className="text-brand-charcoal/80 mb-6 text-center italic text-sm">
                        Our standard property management agreement covers the following services:
                    </p>
                    <ul className="space-y-4 text-brand-charcoal/80 flex-grow">
                        {[
                            "Rent payment collection & forwarding (check, direct bank transfer, PayPal)",
                            "Utility payment management (if required)",
                            "24-hour emergency hot line for your tenants to contact us",
                            "Routine preventive maintenance (changing out HVAC filters quarterly, etc)",
                            "Supervision of contractors for services (landscaping, snow removal, contractor repairs, etc)",
                            "Consulting with you on ways to improve the marketability and attractiveness of your home",
                            "Monthly & Annual financial reports",
                            "Website build specifically for your property that you can access for detailed billing statements, review of ongoing work orders, etc and that your tenants can access to pay their rent & submit online trouble tickets."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 2: Leasing Services */}
                <div className="flex flex-col">
                    <div className="mb-8 overflow-hidden rounded-sm shadow-lg">
                        <img
                            src="/service-leasing.png"
                            alt="Welcoming front entryway foyer in a classic rowhome representing leasing services"
                            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <h2 className="font-serif text-2xl lg:text-3xl text-brand-charcoal mb-4 text-center">
                        Leasing Services
                    </h2>
                    <p className="text-brand-charcoal/80 mb-6 text-center italic text-sm">
                        Our full leasing services include the following:
                    </p>
                    <ul className="space-y-4 text-brand-charcoal/80 flex-grow">
                        {[
                            "Aggressively advertising your vacancy on numerous online platforms",
                            "Taking professional-quality photos of your home to use in advertising",
                            "Showing your home to prospective tenants",
                            "Screening prospective tenants (including a credit check, criminal background check, employment verification, court records check and reference check)",
                            "Lease negotiation and signing with new tenants",
                            "Move-in inspection and orientation",
                            "Security deposit management (we can hold the deposit in an escrow account or forward it to you if we're not managing the property)"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Rental Registration */}
                <div className="flex flex-col">
                    <div className="mb-8 overflow-hidden rounded-sm shadow-lg">
                        <img
                            src="/service-rental-registration.png"
                            alt="Pristine modern dining room representing rental registration and compliance"
                            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <h2 className="font-serif text-2xl lg:text-3xl text-brand-charcoal mb-4 text-center">
                        Rental Registration
                    </h2>
                    <ul className="space-y-6 text-brand-charcoal/80 flex-grow mt-2">
                        <li className="flex items-start gap-3">
                            <span className="text-sm leading-relaxed">
                                All rentals in DC require the appropriate rental license.
                            </span>
                        </li>

                        <li className="flex items-center justify-center my-6">
                            <span className="font-sans font-semibold tracking-wide uppercase text-sm border-b-2 border-brand-gold pb-1">
                                Certificate Of Occupancy
                            </span>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-sm leading-relaxed">
                                If you have any rental other than a one family condo/apt you need an appropriate C of O. We only obtain C of O's for clients hiring us for our full leasing service or active property management.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom CTA aligned with contact page style */}
            <div className="mt-24 pt-16 border-t border-brand-charcoal/10 text-center">
                <h3 className="font-serif text-2xl text-brand-charcoal mb-6">Ready to work with us?</h3>
                <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-brand-charcoal text-brand-cream text-lg font-sans font-medium hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 shadow-md"
                >
                    Get in Touch
                </a>
            </div>
        </main>
    );
};

export default Services;
