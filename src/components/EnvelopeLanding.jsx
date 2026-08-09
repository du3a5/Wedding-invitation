import React, { useState } from 'react';

export default function EnvelopeLanding({ onOpen, onPlayAudio }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleSealClick = () => {
    if (isClicked) return;

    if (onPlayAudio) onPlayAudio();

    setIsClicked(true);
    if (onOpen) onOpen();

    // 1000ms (1.0s) total duration
    setTimeout(() => {
      setIsFinished(true);
    }, 1000);
  };

  if (isFinished) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F7F2EC] overflow-hidden transition-opacity duration-[1000ms] cubic-bezier(0.4,0,0.2,1) ${
        isClicked ? 'pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* 1. ATMOSPHERIC RADIAL LIGHT VIGNETTE & HALO BEHIND ENVELOPE */}
      <div className="absolute w-[92vw] max-w-[850px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(255,254,250,1)_0%,rgba(247,242,236,0.85)_55%,rgba(235,225,215,0.4)_80%,transparent_100%)] blur-3xl pointer-events-none z-0"></div>

      {/* 2. ROMANTIC GOLDEN CANDLELIT BOKEH PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-[12%] left-[10%] w-10 h-10 rounded-full bg-[radial-gradient(circle,#E5C158_0%,rgba(197,160,89,0.35)_60%,transparent_100%)] blur-md animate-bokeh-pulse [animation-delay:0s]"></div>
        <div className="absolute top-[18%] right-[12%] w-14 h-14 rounded-full bg-[radial-gradient(circle,#F5E190_0%,rgba(229,193,88,0.4)_60%,transparent_100%)] blur-lg animate-bokeh-pulse [animation-delay:1.5s]"></div>
        <div className="absolute top-[42%] left-[6%] w-12 h-12 rounded-full bg-[radial-gradient(circle,#C5A059_0%,rgba(229,193,88,0.3)_60%,transparent_100%)] blur-md animate-bokeh-pulse [animation-delay:3.2s]"></div>
        <div className="absolute top-[48%] right-[8%] w-16 h-16 rounded-full bg-[radial-gradient(circle,#E5C158_0%,rgba(197,160,89,0.35)_60%,transparent_100%)] blur-lg animate-bokeh-pulse [animation-delay:4.5s]"></div>
        <div className="absolute bottom-[16%] left-[15%] w-14 h-14 rounded-full bg-[radial-gradient(circle,#F5E190_0%,rgba(229,193,88,0.4)_60%,transparent_100%)] blur-lg animate-bokeh-pulse [animation-delay:2.1s]"></div>
        <div className="absolute bottom-[20%] right-[16%] w-10 h-10 rounded-full bg-[radial-gradient(circle,#E5C158_0%,rgba(197,160,89,0.35)_60%,transparent_100%)] blur-md animate-bokeh-pulse [animation-delay:5.8s]"></div>
      </div>

      {/* 3. FULL-SCREEN WARM RADIAL LIGHT REVEAL FLARE ON CLICK */}
      <div 
        className={`absolute inset-0 z-40 pointer-events-none transition-all duration-[1000ms] cubic-bezier(0.4,0,0.2,1) ${
          isClicked 
            ? 'opacity-100 scale-125 bg-[radial-gradient(circle_at_68%_48%,#FAF5EF_0%,rgba(247,242,236,0.98)_45%,rgba(229,193,88,0.75)_65%,transparent_85%)] blur-md' 
            : 'opacity-0 scale-95 bg-transparent'
        }`}
      ></div>

      {/* 4. ENVELOPE CONTAINER */}
      <div 
        className={`relative z-20 w-[92vw] max-w-[500px] sm:max-w-[600px] md:max-w-[660px] aspect-[4/5] h-[82vh] sm:h-auto sm:max-h-[85vh] flex items-center justify-center transition-all duration-[1000ms] cubic-bezier(0.4,0,0.2,1) transform ${
          isClicked 
            ? 'scale-[1.05] opacity-0 blur-[3px]' 
            : 'scale-100 opacity-100'
        }`}
      >
        {/* Photorealistic Envelope Image */}
        <img
          src="assets/images/logo/envelope.png?v=19"
          alt="دعوة الزفاف"
          className="w-full h-full object-contain select-none pointer-events-none filter drop-shadow-[0_22px_45px_rgba(65,30,20,0.14)]"
        />

        {/* 5. WAX SEAL BUTTON - BUMPED SIZE (24.5%) & SHIFTED TO RIGHT (right-[22%]) */}
        <div className="absolute top-[48%] right-[22%] -translate-y-1/2 z-50 flex flex-col items-center cursor-pointer group w-[24.5%] max-w-[150px] min-w-[84px]">
          
          <button
            onClick={handleSealClick}
            aria-label="افتتاح الدعوة"
            className="relative w-full aspect-square flex items-center justify-center"
          >
            {/* Soft Ambient Glow Halo on Hover */}
            <div 
              className={`absolute inset-0 rounded-full transition-all duration-400 ${
                isClicked 
                  ? 'opacity-0' 
                  : 'group-hover:bg-[radial-gradient(circle,rgba(229,193,88,0.7)_0%,transparent_70%)] blur-xl opacity-0 group-hover:opacity-100'
              }`}
            ></div>

            {/* EXPANDING WARM GOLDEN AURA BURST ON CLICK */}
            <div 
              className={`absolute inset-0 rounded-full pointer-events-none transition-all duration-[1000ms] cubic-bezier(0.4,0,0.2,1) ${
                isClicked 
                  ? 'scale-[4.5] bg-[radial-gradient(circle,rgba(229,193,88,0.95)_0%,rgba(197,160,89,0.85)_40%,transparent_75%)] blur-2xl opacity-100' 
                  : 'scale-100 bg-transparent opacity-0'
              }`}
            ></div>

            {/* Wax Seal Image */}
            <img
              src="assets/images/logo/wax-seal.png?v=19"
              alt="ختم الشمع - زار الفرح دارنا"
              className={`relative z-10 w-full h-full object-contain filter drop-shadow-[0_8px_18px_rgba(65,20,10,0.4)] transition-all duration-[800ms] cubic-bezier(0.4,0,0.2,1) ${
                isClicked 
                  ? 'scale-115 opacity-0 drop-shadow-[0_0_50px_rgba(229,193,88,1)]' 
                  : 'group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(197,160,89,0.85)]'
              }`}
            />
          </button>

          {/* Interactive Hint Text under Seal */}
          <span 
            className={`mt-3 text-xs sm:text-sm font-tajawal text-[#580E18] font-bold tracking-wide transition-opacity duration-300 whitespace-nowrap ${
              isClicked ? 'opacity-0' : 'opacity-100 animate-pulse'
            }`}
          >
            اضغط لفتح الدعوة ✦
          </span>

        </div>

      </div>
    </div>
  );
}
