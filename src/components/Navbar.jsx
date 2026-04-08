import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Basic icons for mobile

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for better realism
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`tw-fixed tw-top-0 tw-w-full tw-z-50 tw-transition-all tw-duration-300 ${scrolled
                ? 'tw-bg-white/90 tw-backdrop-blur-md tw-py-3 tw-border-b tw-border-slate-100 tw-shadow-sm'
                : 'tw-bg-transparent tw-py-5'
            }`}>
            <div className="tw-max-w-6xl tw-mx-auto tw-px-6 tw-flex tw-items-center tw-justify-between">
                {/* Logo */}
                <span className="tw-text-xl tw-font-extrabold tw-tracking-tight tw-bg-gradient-to-r tw-from-blue-600 tw-to-indigo-600 tw-bg-clip-text tw-text-transparent">
                    Hammad.dev
                </span>

                {/* Desktop Menu */}
                <div className="tw-hidden md:tw-flex tw-gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="tw-text-slate-600 tw-font-semibold hover:tw-text-blue-600 tw-transition-colors tw-relative tw-group"
                        >
                            {link.name}
                            <span className="tw-absolute tw-bottom-0 tw-left-0 tw-w-0 tw-h-0.5 tw-bg-blue-600 tw-transition-all group-hover:tw-w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:tw-hidden tw-text-slate-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:tw-hidden tw-absolute tw-top-full tw-left-0 tw-w-full tw-bg-white tw-border-b tw-border-slate-100 tw-transition-all tw-duration-300 ${isOpen ? 'tw-opacity-100 tw-visible' : 'tw-opacity-0 tw-invisible'
                }`}>
                <div className="tw-flex tw-flex-col tw-p-6 tw-gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="tw-text-lg tw-font-medium tw-text-slate-600 hover:tw-text-blue-600"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;