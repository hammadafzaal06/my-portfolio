import React, { useState } from 'react';
// React Icons libraries
import { HiOutlineMail, HiOutlineClipboardCheck, HiOutlineClipboard } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "hammadafzaal06@gmail.com"; // Aapka real email

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="tw-py-32 tw-px-6 tw-max-w-4xl tw-mx-auto tw-text-center">
      {/* Hiring Badge */}
      <div className="tw-inline-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-bg-green-50 tw-text-green-700 tw-text-sm tw-font-bold tw-rounded-full tw-mb-8 tw-border tw-border-green-100">
        <span className="tw-relative tw-flex tw-h-2 tw-w-2">
          <span className="tw-animate-ping tw-absolute tw-inline-flex tw-h-full tw-w-full tw-rounded-full tw-bg-green-400 tw-opacity-75"></span>
          <span className="tw-relative tw-inline-flex tw-rounded-full tw-h-2 tw-w-2 tw-bg-green-600"></span>
        </span>
        Hiring Status: Open for Junior Roles
      </div>

      <h2 className="tw-text-4xl lg:tw-text-6xl tw-font-extrabold tw-text-slate-900 tw-mb-6 tw-tracking-tight">
        Let’s build something <span className="tw-text-blue-600">extraordinary.</span>
      </h2>

      <p className="tw-text-slate-600 tw-mb-12 tw-text-xl tw-leading-relaxed tw-max-w-2xl tw-mx-auto">
        I’m looking for my next challenge in **Frontend Development**. Whether you have a question
        or just want to say hi, my inbox is always open!
      </p>

      {/* Main Action Area */}
      <div className="tw-bg-slate-50 tw-p-8 tw-rounded-[2.5rem] tw-border tw-border-slate-100 tw-shadow-sm">
        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-items-center tw-justify-center tw-gap-4">

          {/* Direct Email Link (Primary Action) */}
          {/* Direct Email Link (Primary Action) */}
          <a
            href={`mailto:${email}?subject=Job Opportunity - Frontend Developer&body=Hi Hammad,%0D%0A%0D%0AI saw your portfolio and...`}
            className="tw-w-full sm:tw-w-auto tw-flex tw-items-center tw-justify-center tw-gap-3 tw-bg-blue-600 tw-text-white tw-px-8 tw-py-4 tw-rounded-2xl tw-font-bold hover:tw-bg-blue-700 active:tw-scale-95 tw-transition-all tw-duration-300 tw-shadow-lg tw-shadow-blue-200"
          >
            <HiOutlineMail size={22} />
            Send me an Email
          </a>

          {/* Copy Button (Secondary Action) */}
          <button
            onClick={handleCopy}
            className="tw-w-full sm:tw-w-auto tw-flex tw-items-center tw-justify-center tw-gap-3 tw-bg-white tw-text-slate-700 tw-border tw-border-slate-200 tw-px-8 tw-py-4 tw-rounded-2xl tw-font-bold hover:tw-bg-slate-50 tw-transition-all"
          >
            {copied ? (
              <HiOutlineClipboardCheck size={22} className="tw-text-green-600" />
            ) : (
              <HiOutlineClipboard size={22} className="tw-text-slate-400" />
            )}
            {copied ? "Address Copied!" : "Copy Email"}
          </button>

          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/hammad-afzaal-75901123b/"
            target="_blank"
            rel="noreferrer"
            className="tw-w-14 tw-h-14 tw-flex tw-items-center tw-justify-center tw-border tw-border-slate-200 tw-bg-white tw-text-blue-600 tw-rounded-2xl hover:tw-bg-blue-50 hover:tw-border-blue-200 tw-transition-all"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn size={22} />
          </a>
        </div>

        {/* Subtle Email Display */}
        <div className="tw-mt-6 tw-text-slate-400 tw-text-sm">
          Prefer manual? <span className="tw-text-slate-600 tw-font-semibold">{email}</span>
        </div>
      </div>

      <p className="tw-mt-16 tw-text-slate-400 tw-text-sm tw-font-medium">
        Available for freelance or full-time opportunities.
      </p>
    </section>
  );
};

export default Contact;