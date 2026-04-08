import React from 'react';
// React Icons libraries
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi2";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Social Links configuration for cleaner mapping
    const socialLinks = [
        { icon: <FaGithub size={20} />, href: "https://github.com/hammadafzaal06", label: "GitHub" },
        { icon: <FaLinkedinIn size={20} />, href: "https://www.linkedin.com/in/hammad-afzaal-75901123b/", label: "LinkedIn" },
        { icon: <FaXTwitter size={20} />, href: "https://twitter.com", label: "Twitter" }
    ];

    return (
        <footer className="tw-bg-white tw-border-t tw-border-slate-100 tw-pt-16 tw-pb-8">
            <div className="tw-max-w-6xl tw-mx-auto tw-px-6">
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-12 tw-mb-16">

                    {/* Column 1: Brand & Mission */}
                    <div className="tw-space-y-4">
                        <div className="tw-text-2xl tw-font-black tw-text-slate-900 tw-tracking-tighter">
                            Hammad<span className="tw-text-blue-600">.dev</span>
                        </div>
                        <p className="tw-text-slate-500 tw-leading-relaxed tw-max-w-xs">
                            Building high-performance user interfaces and scalable web experiences
                            with a focus on clean code and modern design.
                        </p>
                    </div>

                    {/* Column 2: Quick Navigation */}
                    <div>
                        <h4 className="tw-text-slate-900 tw-font-bold tw-mb-6">Navigation</h4>
                        <ul className="tw-space-y-3 tw-text-slate-500 tw-font-medium">
                            <li><a href="#about" className="hover:tw-text-blue-600 tw-transition-colors">About</a></li>
                            <li><a href="#skills" className="hover:tw-text-blue-600 tw-transition-colors">Technical Stack</a></li>
                            <li><a href="#projects" className="hover:tw-text-blue-600 tw-transition-colors">Featured Projects</a></li>
                            <li><a href="#contact" className="hover:tw-text-blue-600 tw-transition-colors">Get in Touch</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Connectivity */}
                    <div>
                        <h4 className="tw-text-slate-900 tw-font-bold tw-mb-6">Connect</h4>
                        <div className="tw-flex tw-gap-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="tw-w-10 tw-h-10 tw-bg-slate-50 tw-text-slate-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center hover:tw-bg-blue-600 hover:tw-text-white tw-transition-all tw-duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="tw-pt-8 tw-border-t tw-border-slate-50 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-gap-6">
                    <p className="tw-text-slate-400 tw-text-sm">
                        &copy; {new Date().getFullYear()} Hammad. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="tw-group tw-flex tw-items-center tw-gap-2 tw-text-sm tw-font-bold tw-text-slate-400 hover:tw-text-blue-600 tw-transition-colors"
                    >
                        Scroll to Top
                        <div className="tw-w-8 tw-h-8 tw-bg-slate-50 tw-rounded-lg tw-flex tw-items-center tw-justify-center group-hover:tw-bg-blue-50 tw-transition-colors">
                            <HiArrowUp size={16} />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;