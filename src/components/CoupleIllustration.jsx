import React, { useState } from 'react';

export default function CoupleIllustration() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="w-full py-12 px-4 sm:px-8 bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#FAF6F0] flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-2xl w-full mx-auto p-4 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#C5A059]/30 shadow-md flex items-center justify-center">
        {!imgError ? (
          <img
            src="assets/images/couple/couple-full-figure.png"
            alt="صورة العروسين"
            onError={() => setImgError(true)}
            className="w-full h-auto max-h-[500px] object-contain rounded-2xl drop-shadow-md transition-transform duration-700 hover:scale-[1.01]"
          />
        ) : (
          <div className="w-full h-64 sm:h-96 rounded-2xl bg-gradient-to-br from-[#F5EFE6] to-[#FAF6F0] border-2 border-dashed border-[#C5A059]/40 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-[#7A1F2B]/10 border border-[#C5A059] flex items-center justify-center mb-4">
              <span className="font-thmanyah text-3xl font-bold text-[#7A1F2B]">م & غ</span>
            </div>
            <span className="font-tajawal text-sm text-[#8C6D33] font-medium">
              صورة العروسين الجميلة
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
