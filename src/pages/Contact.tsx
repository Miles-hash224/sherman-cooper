import { MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <main className="pt-40 md:pt-48 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col">
            {/* Header Section */}
            <div className="mb-12">
                <h1 className="font-sans text-3xl md:text-4xl text-brand-charcoal font-bold mb-4">Get in touch</h1>
                <div className="h-4 w-full bg-[#1b4965]"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
                {/* Left Column: Contact Info */}
                <div className="lg:w-1/3 flex flex-col">
                    <h2 className="font-sans text-2xl md:text-3xl text-brand-charcoal/80 font-medium mb-8">
                        Sherman Cooper Property <br />Management.
                    </h2>

                    <div className="text-brand-charcoal/70 text-sm md:text-base space-y-6">
                        <div>
                            <p>2 Massachusetts AVE NE</p>
                            <p>Suite 77001</p>
                            <p>Washington, DC 20013</p>
                        </div>

                        <div>
                            <p>Phone: 202-420-8691</p>
                            <p>Fax: 202-888-4681</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:w-2/3">
                    <form className="flex flex-col md:flex-row gap-2">
                        {/* Inputs Column */}
                        <div className="flex flex-col gap-2 md:w-1/2">
                            <input
                                type="text"
                                placeholder="Name *"
                                className="w-full bg-[#1b4965] text-brand-cream placeholder-brand-cream/70 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-brand-gold text-sm"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email *"
                                className="w-full bg-[#1b4965] text-brand-cream placeholder-brand-cream/70 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-brand-gold text-sm"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full bg-[#1b4965] text-brand-cream placeholder-brand-cream/70 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-brand-gold text-sm"
                            />
                        </div>

                        {/* Textarea Column */}
                        <div className="md:w-1/2 flex flex-col gap-2">
                            <textarea
                                placeholder="Message"
                                className="w-full h-full min-h-[140px] bg-[#1b4965] text-brand-cream placeholder-brand-cream/70 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-brand-gold text-sm resize-none"
                            ></textarea>

                            <div className="flex justify-end mt-1">
                                <button
                                    type="submit"
                                    className="bg-[#1b4965] text-brand-cream hover:bg-[#113247] transition-colors px-6 py-2 text-sm"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full bg-gray-200 border border-gray-300 relative aspect-video md:aspect-[21/9] lg:aspect-[3/1] flex items-center justify-center overflow-hidden mb-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1552.7937402660145!2d-77.01015695885289!3d38.89736561226017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b8288ce5ecbb%3A0xc3cf6ce6c98aa558!2s2%20Massachusetts%20Ave%20NE%20%2377001%2C%20Washington%2C%20DC%2020013!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Custom Map Pin Overlay matching image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[120%] flex flex-col items-center pointer-events-none drop-shadow-md">
                    <div className="bg-white px-4 py-2 rounded shadow-sm text-sm whitespace-nowrap text-brand-charcoal mb-2 font-medium">
                        Sherman Cooper Property Management
                    </div>
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white"></div>
                    <MapPin size={32} className="text-red-500 mt-1 fill-red-500" />
                </div>
            </div>

            {/* Sub-footer Section matching the image */}
            <div className="w-full border-t-2 border-b-2 border-[#1b4965] py-3 text-center text-xs md:text-sm text-brand-charcoal/80 flex flex-col gap-1 mt-auto">
                <p>Sherman Cooper Property MGMT / (T) 202.420.8691 / (F) 202.888.4681 / Shermancooper.com</p>
                <p className="font-bold">Specializing in Property Management and Leasing services in the nations Capital.</p>
            </div>
        </main>
    );
};

export default Contact;
