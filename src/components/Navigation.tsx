import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', isHighlight: false },
        { name: 'Contact', href: '/contact', isHighlight: false },
        { name: 'What we do', href: '/what-we-do', isHighlight: false },
        { name: 'Services', href: '/services', isHighlight: false },
        { name: 'For Rent', href: '/for-rent', isHighlight: false },
        {
            name: 'More',
            href: '#',
            isHighlight: false,
            dropdown: [
                { name: 'Pricing', href: '/pricing' },
                { name: 'Leased properties', href: '/leased-properties' },
                { name: 'Resources', href: '/resources' }
            ]
        },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm py-2' : 'bg-brand-cream/90 md:bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="flex flex-col items-center">
                    <img src="/logo.png" alt="Sherman Cooper Logo" className="h-28 lg:h-32 w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group py-4">
                            <Link
                                to={link.href}
                                className={`text-lg font-serif transition-colors ${link.isHighlight ? 'text-[#1d4ed8] hover:text-[#1e3a8a]' : 'text-[#b49830] hover:text-[#d4af37]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                            {link.dropdown && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-[-8px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <div className="w-56 bg-brand-cream shadow-xl border border-brand-charcoal/10 flex flex-col py-2 rounded-sm">
                                        {link.dropdown.map((sublink) => (
                                            <Link
                                                key={sublink.name}
                                                to={sublink.href}
                                                className="px-6 py-3 text-[#b49830] hover:text-[#d4af37] hover:bg-brand-charcoal/5 font-serif text-lg transition-colors text-center"
                                            >
                                                {sublink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        to="/contact"
                        className="px-6 py-2.5 bg-brand-charcoal text-brand-cream text-sm font-sans font-medium hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300"
                    >
                        Get Started Today!
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-brand-charcoal"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-brand-cream shadow-lg md:hidden">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <Link
                                    to={link.href}
                                    className={`text-xl font-serif block transition-colors ${link.isHighlight ? 'text-[#1d4ed8]' : 'text-[#b49830]'
                                        }`}
                                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                {link.dropdown && (
                                    <div className="flex flex-col mt-3 pl-4 border-l-2 border-[#b49830]/20 space-y-3">
                                        {link.dropdown.map((sublink) => (
                                            <Link
                                                key={sublink.name}
                                                to={sublink.href}
                                                className="text-lg font-serif text-[#b49830]/80 block transition-colors hover:text-[#d4af37]"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {sublink.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            to="/contact"
                            className="px-6 py-3 bg-brand-charcoal text-brand-cream text-center font-medium mt-4 hover:bg-brand-gold transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started Today!
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
