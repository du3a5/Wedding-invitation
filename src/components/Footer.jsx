import React from 'react';

export default function Footer({ t }) {
  return (
    <footer className="w-full py-12 px-4 bg-[#3F080F] text-[#FAF6F0] flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      {/* Low-Opacity Gold Filigree/Lace Floral Background Texture Pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
          <pattern id="footerLace" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 30,5 C 40,15 50,15 60,30 C 50,45 40,45 30,55 C 20,45 10,45 0,30 C 10,15 20,15 30,5 Z" fill="none" stroke="#C5A059" strokeWidth="1" />
            <circle cx="30" cy="30" r="4" fill="#C5A059" opacity="0.6" />
            <path d="M 15,30 C 25,20 35,20 45,30" fill="none" stroke="#E5C158" strokeWidth="0.75" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footerLace)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-xl w-full mx-auto flex flex-col items-center">
        
        {/* Primary Larger Thank-You Line in Thmanyah Font */}
        <p className="font-thmanyah text-xl sm:text-3xl text-[#FAF6F0] font-medium tracking-wide leading-relaxed drop-shadow-xs">
          {t.footerThankYou}
        </p>

        {/* Thin Gold Divider Line */}
        <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent my-4 opacity-80"></div>

        {/* Small Subdued Signature Line in Tajawal Font */}
        <div className="font-tajawal text-xs sm:text-sm text-[#E5C158] opacity-90 tracking-widest uppercase">
          {t.footerSignature}
        </div>

      </div>
    </footer>
  );
}
