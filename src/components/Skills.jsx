import React from 'react';
import { HiCodeBracket, HiOutlineWindow, HiCommandLine } from "react-icons/hi2";

const Skills = () => {
  const skillGroups = [
    {
      title: "Core Development",
      icon: <HiCodeBracket className="tw-text-blue-600" size={24} />,
      skills: ["JavaScript (ES6+)", "React.js", "TypeScript", "RESTful APIs"]
    },
    {
      title: "UI & Styling",
      icon: <HiOutlineWindow className="tw-text-indigo-600" size={24} />,
      skills: ["Tailwind CSS", "Modern CSS/HTML", "Figma to React", "Responsive UI"]
    },
    {
      title: "Tools & Ecosystem",
      icon: <HiCommandLine className="tw-text-blue-500" size={24} />,
      skills: ["Git & GitHub", "Vite / Webpack", "Redux / Context API", "WordPress"]
    }
  ];

  return (
    <section id="skills" className="tw-py-24 tw-bg-white tw-px-6">
      <div className="tw-max-w-6xl tw-mx-auto">
        {/* Header Section */}
        <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-items-end tw-justify-between tw-mb-16 tw-gap-4">
          <div>
            <h2 className="tw-text-4xl tw-font-extrabold tw-text-slate-900 tw-tracking-tight">
              Technical <span className="tw-text-blue-600">Expertise</span>
            </h2>
            <p className="tw-text-slate-500 tw-mt-4 tw-max-w-md tw-text-lg">
              A specialized stack focused on building high-performance, 
              scalable, and user-centric web applications.
            </p>
          </div>
          <div className="tw-hidden md:tw-block tw-h-px tw-flex-1 tw-bg-slate-100 tw-mx-12 tw-mb-4"></div>
        </div>

        {/* Skill Cards */}
        <div className="tw-grid md:tw-grid-cols-3 tw-gap-8">
          {skillGroups.map((group, index) => (
            <div 
              key={index} 
              className="tw-group tw-p-8 tw-rounded-3xl tw-bg-slate-50 tw-border tw-border-slate-100 hover:tw-bg-white hover:tw-shadow-2xl hover:tw-shadow-blue-100 hover:tw-border-blue-100 tw-transition-all tw-duration-500"
            >
              <div className="tw-w-12 tw-h-12 tw-bg-white tw-rounded-2xl tw-flex tw-items-center tw-justify-center tw-shadow-sm tw-mb-6 group-hover:tw-scale-110 tw-transition-transform">
                {group.icon}
              </div>
              <h3 className="tw-text-xl tw-font-bold tw-text-slate-800 tw-mb-4">{group.title}</h3>
              <div className="tw-flex tw-flex-wrap tw-gap-2">
                {group.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="tw-text-sm tw-font-semibold tw-text-slate-600 tw-bg-white tw-px-3 tw-py-1 tw-rounded-lg tw-border tw-border-slate-100 group-hover:tw-border-blue-200 group-hover:tw-text-blue-600 tw-transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Indicator - Enhanced */}
        <div className="tw-mt-16 tw-p-8 tw-rounded-3xl tw-bg-gradient-to-r tw-from-blue-50 tw-to-indigo-50 tw-border tw-border-blue-100 tw-text-center">
          <div className="tw-inline-flex tw-items-center tw-gap-2 tw-bg-blue-600 tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-xs tw-font-bold tw-mb-4">
             UP-SKILLING
          </div>
          <p className="tw-text-slate-600 tw-font-medium tw-text-lg">
            Deep-diving into: <span className="tw-text-slate-900 tw-font-bold">Advanced Asynchronous JS, Clean Code Principles & AI-Driven Development.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;