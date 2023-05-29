import React from "react";

function EmailSubscribe() {
  return (
    <div className="flex h-screen flex-col items-center">
      <div className="wrapper mt-auto w-fit rounded-md bg-[#F5F5F4] py-0.5 pr-1 pl-2.5">
        <input
          type="email"
          placeholder="you@domain.com"
          className="w-40 rounded-md bg-[#F5F5F4] py-1.5 text-sm text-gray-700 focus:outline-none"
        />
        <button className="ml-3 rounded border border-gray-200 bg-[#FAFAF9] px-1.5 py-0.5 text-sm text-gray-500 transition-all hover:bg-[#FAFAF9]/50">
          Subscribe
        </button>
      </div>
      <div className="info mb-10 mt-auto px-4 text-center text-xs text-gray-200">
        This is a clone inspired from the{" "}
        <a
          target="_blank"
          href="http://nextjs.org"
          className="transition-all hover:text-gray-300"
        >
          footer of the official NextJs docs
        </a>
        .
      </div>
    </div>
  );
}

export default EmailSubscribe;
