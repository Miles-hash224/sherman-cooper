import { ExternalLink, FileText, CreditCard, Building, PhoneCall, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
    const tenantResources = [
        {
            title: "Rental Application",
            description: "Apply for one of our available properties quickly and securely online.",
            icon: <FileText className="w-8 h-8 text-brand-gold mb-4" />,
            href: "https://shermancooper.managebuilding.com/Resident/rental-application/new"
        },
        {
            title: "Pay Rent",
            description: "Access our secure payment portal to submit your monthly rent.",
            icon: <CreditCard className="w-8 h-8 text-brand-gold mb-4" />,
            href: "http://www.rentshare.com"
        },
        {
            title: "Lead Pamphlet",
            description: "Important information regarding lead-based paint in residential housing.",
            icon: <Building className="w-8 h-8 text-brand-gold mb-4" />,
            href: "https://www.shermancooper.com/_files/ugd/aed228_9acd6bbd7f4194ec9fccdcbfca07ca66.pdf"
        },
        {
            title: "Rental Registration Info",
            description: "Information concerning D.C. rental licensing and compliance.",
            icon: <Building className="w-8 h-8 text-brand-gold mb-4" />,
            href: "https://dcra.dc.gov/service/get-one-family-rental-license"
        }
    ];

    return (
        <main className="pt-32 md:pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
            <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6 leading-tight">
                    Resources
                </h1>
                <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
                <p className="text-lg md:text-xl text-brand-charcoal/80 max-w-2xl mx-auto font-sans">
                    Important links, forms, and information for our current clients and tenants.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                {/* Tenant Resources Section */}
                <div className="lg:col-span-8">
                    <h2 className="font-serif text-3xl text-brand-charcoal border-b border-brand-charcoal/10 pb-4 mb-8">
                        Tenant Resources
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {tenantResources.map((resource, idx) => (
                            <a
                                key={idx}
                                href={resource.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col p-8 bg-brand-cream border border-brand-charcoal/10 hover:border-brand-gold transition-colors duration-300 shadow-sm hover:shadow-md"
                            >
                                {resource.icon}
                                <h3 className="font-sans font-bold text-lg text-brand-charcoal mb-2 group-hover:text-brand-gold transition-colors flex items-center justify-between">
                                    {resource.title}
                                    <ExternalLink size={18} className="text-brand-charcoal/40 group-hover:text-brand-gold" />
                                </h3>
                                <p className="text-sm text-brand-charcoal/70 leading-relaxed font-sans">
                                    {resource.description}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Owner Resources Section */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32">
                        <h2 className="font-serif text-3xl text-brand-charcoal border-b border-brand-charcoal/10 pb-4 mb-8">
                            Owner Resources
                        </h2>

                        <div className="bg-brand-charcoal text-brand-cream p-8 shadow-xl">
                            <h3 className="font-serif text-2xl mb-6 text-brand-gold">
                                Sherman Cooper Property MGMT
                            </h3>

                            <p className="font-sans text-sm leading-relaxed mb-8 opacity-90 italic">
                                Specializing in Property Management and Leasing services in the nation's Capital.
                            </p>

                            <ul className="space-y-6 font-sans">
                                <li className="flex items-center gap-4">
                                    <PhoneCall className="text-brand-gold shrink-0" size={20} />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-brand-cream/60">Phone</p>
                                        <p className="text-lg">202.420.8691</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <PhoneCall className="text-brand-gold shrink-0" size={20} />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-brand-cream/60">Fax</p>
                                        <p className="text-lg">202.888.4681</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Mail className="text-brand-gold shrink-0" size={20} />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-brand-cream/60">Website</p>
                                        <p className="text-lg">Shermancooper.com</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-10 pt-8 border-t border-brand-cream/20">
                                <Link
                                    to="/contact"
                                    className="block w-full text-center py-4 bg-brand-gold text-brand-charcoal font-bold hover:bg-white transition-colors"
                                >
                                    Contact Us Directly
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Resources;
