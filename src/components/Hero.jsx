import React from 'react';
import { FaGithub, FaLinkedinIn, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa6";
import { SiTailwindcss, SiJavascript, SiVite } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
    return (
        <section className="tw-relative tw-overflow-hidden tw-pt-40 tw-pb-24 tw-px-6 tw-bg-slate-50">
            {/* Background Decorations */}
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
                        I’m <span className="tw-font-bold tw-text-slate-800">Hammad Afzaal</span>, a Junior ReactJS Developer focused on building
                        <span className="tw-text-blue-600 tw-font-medium"> clean, scalable</span> web applications using the modern tech stack.
                    </p>

                    <div className="tw-mt-10 tw-flex tw-flex-wrap tw-gap-4 tw-justify-center lg:tw-justify-start">
                        <a href="#projects" className="tw-group tw-bg-slate-900 tw-text-white tw-px-8 tw-py-4 tw-rounded-xl tw-font-bold tw-flex tw-items-center tw-gap-2 hover:tw-bg-blue-600 tw-transition-all tw-duration-300">
                            Explore My Work
                            <HiArrowRight className="tw-text-xl group-hover:tw-translate-x-1 tw-transition-transform" />
                        </a>

                        <div className="tw-flex tw-gap-3">
                            <a href="https://github.com/hammadafzaal06" target="_blank" rel="noreferrer" className="tw-p-4 tw-rounded-xl tw-border tw-border-slate-200 tw-text-slate-600 hover:tw-bg-slate-50 hover:tw-text-blue-600 tw-transition-all">
                                <FaGithub size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/hammad-afzaal-75901123b/" target="_blank" rel="noreferrer" className="tw-p-4 tw-rounded-xl tw-border tw-border-slate-200 tw-text-slate-600 hover:tw-bg-slate-50 hover:tw-text-blue-600 tw-transition-all">
                                <FaLinkedinIn size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Content - Creative Tech Stack Visual */}
                <div className="tw-flex-1 tw-relative tw-w-full tw-flex tw-justify-center tw-items-center">

                    {/* Main Code Card */}
                    <div className="tw-relative tw-z-10 tw-bg-slate-900 tw-rounded-2xl tw-p-6 tw-shadow-2xl tw-border tw-border-slate-700 tw-w-full tw-max-w-md tw-rotate-1 hover:tw-rotate-0 tw-transition-transform tw-duration-500">
                        <div className="tw-flex tw-gap-1.5 tw-mb-4">
                            <div className="tw-w-3 tw-h-3 tw-bg-red-500 tw-rounded-full"></div>
                            <div className="tw-w-3 tw-h-3 tw-bg-yellow-500 tw-rounded-full"></div>
                            <div className="tw-w-3 tw-h-3 tw-bg-green-500 tw-rounded-full"></div>
                        </div>
                        <code className="tw-text-blue-300 tw-text-sm md:tw-text-base">
                            <p><span className="tw-text-pink-400">const</span> <span className="tw-text-yellow-300">developer</span> = &#123;</p>
                            <p className="tw-ml-4">name: <span className="tw-text-green-400">'Hammad Afzaal'</span>,</p>
                            <p className="tw-ml-4">role: <span className="tw-text-green-400">'Junior ReactJS Developer'</span>,</p>
                            <p className="tw-ml-4">experience: <span className="tw-text-green-400">'~1 Year'</span>,</p>
                            <p className="tw-ml-4">skills: [<span className="tw-text-orange-400">'React', 'Vite', 'Tailwind', 'JavaScript'</span>]</p>
                            <p className="tw-ml-4">status: <span className="tw-text-green-400">'Open to Work'</span></p>
                            <p>&#125;;</p>
                        </code>
                    </div>

                    {/* Floating Tech Icons */}
                    <div className="tw-absolute tw-top-0 tw-right-0 tw-bg-white tw-p-3 tw-rounded-xl tw-shadow-lg tw-text-blue-500 tw-animate-bounce">
                        <FaReact size={32} />
                    </div>
                    <div className="tw-absolute tw-bottom-10 tw-left-0 tw-bg-white tw-p-3 tw-rounded-xl tw-shadow-lg tw-text-cyan-400 tw-animate-pulse">
                        <SiTailwindcss size={32} />
                    </div>
                    <div className="tw-absolute tw-top-20 tw-left-10 tw-bg-white tw-p-3 tw-rounded-xl tw-shadow-lg tw-text-yellow-400">
                        <SiJavascript size={24} />
                    </div>
                    <div className="tw-absolute tw-bottom-0 tw-right-20 tw-bg-white tw-p-3 tw-rounded-xl tw-shadow-lg tw-text-purple-500 tw-animate-bounce" style={{ animationDelay: '1s' }}>
                        <SiVite size={24} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;