import React from 'react';
import { FaGithub, FaArrowUpRightFromSquare, FaCircleCheck } from "react-icons/fa6";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import DashboardImg from '../assets/Dashboard.png'; // Extension check kar lein (.png ya .jpg)

const Projects = () => {
    const project = {
        title: "AdminPanel v2.1 — Service Dashboard",
        role: "Junior React Developer",
        desc: "A high-performance administrative interface developed to provide a real-time system snapshot. It features a sophisticated data visualization system and a seamless user management workflow.",
        features: [
            "Dynamic Revenue & Sales visualization with interactive charts",
            "Real-time Recent Activity feed for tracking system updates",
            "Professional Sidebar with categorized Analytics & System settings",
            "Responsive Statistics Cards with growth percentage indicators",
            "Clean Glassmorphism UI elements for a modern user experience"
        ],
        tech: ["React.js", "Tailwind CSS", "Recharts", "Lucide Icons", "Context API"],
        // Yahan aap apne screenshot ka path dein (e.g., ./assets/dashboard.png)
        image: DashboardImg,
        github: "https://github.com/hammadafzaal06/my-dashboard.git", // Aapka original GitHub link
        live: "https://my-dashboard-five-brown.vercel.app/" // Aapka original live link
    };

    return (
        <section id="projects" className="tw-py-24 tw-px-6 tw-max-w-6xl tw-mx-auto">
            {/* Section Header */}
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-gap-4 tw-mb-16">
                <h2 className="tw-text-4xl tw-font-extrabold tw-text-slate-900 tw-tracking-tight">
                    Featured <span className="tw-text-blue-600">Work</span>
                </h2>
                <div className="tw-h-px tw-flex-1 tw-bg-slate-100 tw-hidden sm:tw-block"></div>
                <span className="tw-text-slate-400 tw-text-sm tw-font-medium">Selected Case Study</span>
            </div>

            {/* Case Study Layout */}
            <div className="tw-grid lg:tw-grid-cols-2 tw-gap-16 tw-items-center">

                {/* 1. Project Visual - Left Side */}
                {/* 1. Project Visual - Left Side */}
                <div className="tw-relative tw-group tw-z-10">
                    {/* Glow effect ko thora aur phela diya hai */}
                    <div className="tw-absolute -tw-inset-10 tw-bg-blue-100/30 tw-rounded-[4rem] tw-blur-3xl tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500"></div>

                    {/* Main Container: 'tw-scale-105' add kiya hai hover par mazeed uthane ke liye */}
                    <div className="tw-relative tw-rounded-[2.5rem] tw-border-2 tw-border-slate-100 tw-shadow-[0_30px_60px_rgba(8,_112,_184,_0.1)] tw-overflow-hidden tw-bg-white tw-transition-transform tw-duration-500 group-hover:tw-scale-[1.03]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="tw-w-full tw-h-full tw-object-cover tw-transition-transform tw-duration-1000 group-hover:tw-scale-110"
                        />
                    </div>
                </div>

                {/* 2. Project Details - Right Side */}
                <div className="tw-flex tw-flex-col">
                    <div className="tw-flex tw-items-center tw-gap-2 tw-mb-4">
                        <HiOutlineRocketLaunch className="tw-text-blue-600" size={24} />
                        <span className="tw-text-xs tw-font-bold tw-text-blue-600 tw-uppercase tw-tracking-[0.2em]">
                            {project.role}
                        </span>
                    </div>

                    <h3 className="tw-text-3xl sm:tw-text-4xl tw-font-bold tw-text-slate-900 tw-mb-6">
                        {project.title}
                    </h3>

                    <p className="tw-text-slate-600 tw-text-lg tw-leading-relaxed tw-mb-8">
                        {project.desc}
                    </p>

                    {/* Features List - Points taken directly from your image */}
                    <div className="tw-space-y-4 tw-mb-10">
                        {project.features.map((feature, idx) => (
                            <div key={idx} className="tw-flex tw-items-start tw-gap-3">
                                <FaCircleCheck className="tw-text-blue-500 tw-mt-1 tw-flex-shrink-0" size={16} />
                                <span className="tw-text-slate-700 tw-font-medium tw-text-sm sm:tw-text-base">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="tw-flex tw-flex-wrap tw-gap-2 tw-mb-10">
                        {project.tech.map(tag => (
                            <span key={tag} className="tw-px-4 tw-py-1.5 tw-bg-slate-50 tw-text-slate-500 tw-text-[11px] tw-font-bold tw-rounded-full tw-border tw-border-slate-100 tw-uppercase">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4">
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="tw-flex-1 tw-flex tw-items-center tw-justify-center tw-gap-3 tw-bg-slate-900 tw-text-white tw-py-4 tw-rounded-2xl tw-font-bold hover:tw-bg-blue-600 tw-transition-all tw-shadow-xl tw-shadow-slate-200 active:tw-scale-95"
                        >
                            Live Demo <FaArrowUpRightFromSquare size={16} />
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="tw-flex tw-items-center tw-justify-center tw-gap-3 tw-px-8 tw-py-4 tw-border-2 tw-border-slate-100 tw-text-slate-700 tw-rounded-2xl tw-font-bold hover:tw-bg-slate-50 tw-transition-all active:tw-scale-95"
                        >
                            <FaGithub size={20} /> Code
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;