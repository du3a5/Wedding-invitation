import React, { useState } from 'react';

export default function EnvelopeLanding({ onOpen, onPlayAudio }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleSealClick = () => {
    if (isClicked) return;

    if (onPlayAudio) onPlayAudio();

    setIsClicked(true);
    if (onOpen) onOpen();

    setTimeout(() => {
      setIsFinished(true);
    }, 1400);
  };

  if (isFinished) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F8F0EC] overflow-hidden transition-opacity duration-700 ${
        isClicked ? 'pointer-events-none' : ''
      }`}
    >
      {/* Background Soft Linen Overlay matching envelope tone */}
      <div className="absolute inset-0 bg-[radial-gradient(#D8B7B2_0.6px,transparent_0.6px)] [background-size:22px_22px] opacity-15"></div>

      {/* Seamless Envelope Container (NO box-shadow, NO rounded corners, NO distinct card outline) */}
      <div className="relative w-[94vw] max-w-[460px] sm:max-w-[540px] aspect-[4/5] flex items-center justify-center">
        
        {/* Flap 1: Top Flap Clipped */}
        <div 
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%)' }}
          className={`absolute inset-0 z-30 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isClicked 
              ? '-translate-y-full opacity-0 duration-1200' 
              : 'translate-y-0 opacity-100'
          }`}
        >
          <img
            src="assets/images/logo/envelope.png"
            alt="Top Flap"
            className="w-full h-full object-contain select-none pointer-events-none"
          />
        </div>

        {/* Flap 2: Bottom Flap Clipped */}
        <div 
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' }}
          className={`absolute inset-0 z-20 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isClicked 
              ? 'translate-y-full opacity-0 duration-1200' 
              : 'translate-y-0 opacity-100'
          }`}
        >
          <img
            src="assets/images/logo/envelope.png"
            alt="Bottom Flap"
            className="w-full h-full object-contain select-none pointer-events-none"
          />
        </div>

        {/* Flap 3: Left Flap Clipped */}
        <div 
          style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}
          className={`absolute inset-0 z-10 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isClicked 
              ? '-translate-x-full opacity-0 duration-1200' 
              : 'translate-x-0 opacity-100'
          }`}
        >
          <img
            src="assets/images/logo/envelope.png"
            alt="Left Flap"
            className="w-full h-full object-contain select-none pointer-events-none"
          />
        </div>

        {/* Flap 4: Right Flap Clipped */}
        <div 
          style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }}
          className={`absolute inset-0 z-10 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isClicked 
              ? 'translate-x-full opacity-0 duration-1200' 
              : 'translate-x-0 opacity-100'
          }`}
        >
          <img
            src="assets/images/logo/envelope.png"
            alt="Right Flap"
            className="w-full h-full object-contain select-none pointer-events-none"
          />
        </div>

        {/* CENTERED WAX SEAL BUTTON WITH GLOW + ROTATION INTERACTION */}
        <div className="absolute z-40 flex flex-col items-center cursor-pointer group">
          <button
            onClick={handleSealClick}
            aria-label="افتتاح الدعوة"
            className={`relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center transition-all duration-600 ease-out transform ${
              isClicked 
                ? 'scale-125 rotate-15 opacity-0' 
                : 'hover:scale-105 active:scale-95'
            }`}
          >
            {/* Outer Radial Glow Halo */}
            <div 
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                isClicked 
                  ? 'bg-[radial-gradient(circle,#E5C158_0%,rgba(197,160,89,0.9)_50%,transparent_75%)] blur-xl opacity-100 scale-150' 
                  : 'group-hover:bg-[radial-gradient(circle,rgba(229,193,88,0.5)_0%,transparent_70%)] blur-lg opacity-0 group-hover:opacity-100'
              }`}
            ></div>

            {/* Wax Seal Image */}
            <img
              src="assets/images/logo/wax-seal.png"
              alt="ختم الشمع"
              className={`relative z-10 w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(65,10,16,0.65)] transition-all duration-500 ${
                isClicked ? 'drop-shadow-[0_0_35px_rgba(229,193,88,0.95)]' : 'group-hover:drop-shadow-[0_0_20px_rgba(197,160,89,0.8)]'
              }`}
            />
          </button>

          {/* Interactive Hint Text below Seal */}
          <span className={`mt-5 text-sm font-tajawal text-[#580E18] font-bold tracking-wide transition-opacity duration-300 ${
            isClicked ? 'opacity-0' : 'opacity-100 animate-pulse'
          }`}>
            اضغط على الختم لفتح الدعوة ✦
          </span>
        </div>

      </div>
    </div>
  );
}
