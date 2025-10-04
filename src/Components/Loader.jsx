import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] z-[9999] animate-fadeIn">
      <div className="flex flex-col items-center space-y-6">
        {/* Glowing Ring */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-transparent border-t-[#00bfff] rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 rounded-full border-4 border-[#00bfff]/20 blur-md"></div>
        </div>

        {/* Text with pulse */}
        <p className="text-gray-200 mt-4 text-xl font-semibold tracking-wider animate-pulse">
          Loading<span className="animate-dots"></span>
        </p>
      </div>
    </div>
  );
}
