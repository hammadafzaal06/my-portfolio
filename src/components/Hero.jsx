import React from 'react';
// React Icons se specific libraries import karein
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

const Hero = () => {
    return (
        <section className="tw-relative tw-overflow-hidden tw-pt-40 tw-pb-24 tw-px-6">
            {/* Decorative Background Blur */}
            <div className="tw-absolute tw-top-0 tw-left-1/2 -tw-translate-x-1/2 tw-w-full tw-h-full tw-max-w-6xl tw-pointer-events-none">
                <div className="tw-absolute tw-top-[-10%] tw-right-[-10%] tw-w-96 tw-h-96 tw-bg-blue-100/50 tw-rounded-full tw-blur-3xl tw-animate-pulse"></div>
                <div className="tw-absolute tw-bottom-[10%] tw-left-[-10%] tw-w-96 tw-h-96 tw-bg-indigo-100/50 tw-rounded-full tw-blur-3xl"></div>
            </div>

            <div className="tw-relative tw-max-w-6xl tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-gap-16">

                {/* Left Content */}
                <div className="tw-flex-1 tw-text-center lg:tw-text-left">
                    <div className="tw-inline-flex tw-items-center tw-gap-2 tw-bg-blue-50 tw-text-blue-700 tw-px-4 tw-py-1.5 tw-rounded-full tw-text-sm tw-font-bold tw-mb-6 tw-border tw-border-blue-100">
                        <span className="tw-relative tw-flex tw-h-2 tw-w-2">
                            <span className="tw-animate-ping tw-absolute tw-inline-flex tw-h-full tw-w-full tw-rounded-full tw-bg-blue-400 tw-opacity-75"></span>
                            <span className="tw-relative tw-inline-flex tw-rounded-full tw-h-2 tw-w-2 tw-bg-blue-600"></span>
                        </span>
                        Available for New Opportunities
                    </div>

                    <h1 className="tw-text-5xl lg:tw-text-7xl tw-font-extrabold tw-text-slate-900 tw-leading-[1.1] tw-tracking-tight">
                        Crafting Digital <br />
                        <span className="tw-bg-gradient-to-r tw-from-blue-600 tw-to-indigo-600 tw-bg-clip-text tw-text-transparent">
                            Experiences.
                        </span>
                    </h1>

                    <p className="tw-mt-8 tw-text-xl tw-text-slate-600 tw-max-w-xl tw-mx-auto lg:tw-mx-0 tw-leading-relaxed">
                        I’m <span className="tw-font-bold tw-text-slate-800">Hammad</span>, a Frontend Developer specialized in
                        building <span className="tw-text-blue-600 tw-font-medium">scalable, high-performance</span> web applications.
                        I bridge the gap between complex logic and <span className="tw-text-slate-800 tw-font-semibold">intuitive user experiences</span>.
                    </p>

                    <div className="tw-mt-10 tw-flex tw-flex-wrap tw-gap-4 tw-justify-center lg:tw-justify-start">
                        {/* Primary CTA */}
                        <a href="#projects" className="tw-group tw-bg-slate-900 tw-text-white tw-px-8 tw-py-4 tw-rounded-xl tw-font-bold tw-flex tw-items-center tw-gap-2 hover:tw-bg-blue-600 tw-transition-all tw-duration-300 tw-shadow-xl tw-shadow-slate-200">
                            Explore My Work
                            <HiArrowRight className="tw-text-xl group-hover:tw-translate-x-1 tw-transition-transform" />
                        </a>

                        {/* Social Links */}
                        <div className="tw-flex tw-gap-3">
                            <a
                                href="https://github.com/hammadafzaal06"
                                target="_blank"
                                rel="noreferrer"
                                className="tw-p-4 tw-rounded-xl tw-border tw-border-slate-200 tw-text-slate-600 hover:tw-bg-slate-50 hover:tw-text-blue-600 tw-transition-all"
                                aria-label="GitHub"
                            >
                                <FaGithub size={22} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hammad-afzaal-75901123b/"
                                target="_blank"
                                rel="noreferrer"
                                className="tw-p-4 tw-rounded-xl tw-border tw-border-slate-200 tw-text-slate-600 hover:tw-bg-slate-50 hover:tw-text-blue-600 tw-transition-all"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Content - Profile UI */}
                <div className="tw-flex-1 tw-relative">
                    <div className="tw-relative tw-w-72 tw-h-72 lg:tw-w-96 lg:tw-h-96">
                        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-tr tw-from-blue-600 tw-to-indigo-600 tw-rounded-3xl tw-rotate-6 tw-opacity-10"></div>

                        <div className="tw-relative tw-w-full tw-h-full tw-bg-white tw-rounded-3xl tw-border-2 tw-border-slate-100 tw-shadow-2xl tw-overflow-hidden tw-flex tw-items-center tw-justify-center">
                            <div className="tw-text-center">
                                <div className="tw-w-20 tw-h-20 tw-bg-blue-50 tw-text-blue-600 tw-rounded-full tw-mx-auto tw-mb-4 tw-flex tw-items-center tw-justify-center tw-font-bold tw-text-2xl">
                                    H
                                </div>
                                <span className="tw-text-slate-400 tw-font-medium">Hammad.dev</span>
                            </div>
                        </div>

                        {/* Stats Badge */}
                        <div className="tw-absolute -tw-bottom-6 -tw-right-6 tw-bg-white tw-p-4 tw-rounded-2xl tw-shadow-xl tw-border tw-border-slate-50 tw-flex tw-items-center tw-gap-3 tw-animate-bounce">
                            <div className="tw-bg-green-100 tw-p-2 tw-rounded-lg">
                                <span className="tw-text-xl">🚀</span>
                            </div>
                            <div className="tw-text-left">
                                <p className="tw-text-xs tw-text-slate-500 tw-font-medium">Level</p>
                                <p className="tw-text-sm tw-font-bold tw-text-slate-800">Junior React Dev</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;