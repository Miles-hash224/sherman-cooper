import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-charcoal text-brand-cream border-t border-white/5 pt-20 pb-10 shadow-[inset_0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <a href="#" className="inline-block mb-6">
                            <img src="/logo.png" alt="Sherman Cooper Logo" className="h-20 w-auto object-contain" />
                        </a>
                        <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
                            Premium property management and leasing services for the discerning Washington D.C. real estate investor.
                        </p>
                        <div className="flex items-center gap-4 text-white/40">
                            <a href="#" className="hover:text-brand-gold transition-colors p-2 -ml-2"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-brand-gold transition-colors p-2"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-brand-gold transition-colors p-2"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-bold text-white tracking-widest uppercase text-sm mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Executive Leasing</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Full-Service Management</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Financial Reporting</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Maintenance Coordination</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Legal & Compliance</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-bold text-white tracking-widest uppercase text-sm mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><a href="#how-it-works" className="hover:text-brand-gold transition-colors">How It Works</a></li>
                            <li><a href="#testimonials" className="hover:text-brand-gold transition-colors">Client Perspectives</a></li>
                            <li><a href="#pricing" className="hover:text-brand-gold transition-colors">Pricing Structure</a></li>
                            <li><a href="#faq" className="hover:text-brand-gold transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Owner Portal Login</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-bold text-white tracking-widest uppercase text-sm mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 text-brand-gold/70 shrink-0"><Mail size={16} /></span>
                                <a href="mailto:inquiries@shermancooper.com" className="hover:text-brand-gold transition-colors">inquiries@shermancooper.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 w-4 h-4 rounded-full border border-brand-gold/70 flex items-center justify-center shrink-0">
                                    <span className="w-1.5 h-1.5 bg-brand-gold/70 rounded-full"></span>
                                </span>
                                <span>2 Massachusetts AVE NE, Suite 77001<br />Washington, DC 20013</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Legal Footer */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>&copy; {currentYear} Sherman Cooper Property Management LLC. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Fair Housing Notice</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
