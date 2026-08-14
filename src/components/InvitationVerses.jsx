import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function InvitationVerses({ lang, t }) {
  const [mohammedImgError, setMohammedImgError] = useState(false);
  const [ghadaImgError, setGhadaImgError] = useState(false);

  const isEn = lang === 'en';

  return (
    <section 
      id="invitation-verses" 
      dir={isEn ? "ltr" : "rtl"}
      className="relative w-full py-20 px-4 sm:px-8 md:px-12 bg-[#FAF6F0] flex flex-col items-center justify-center text-center overflow-visible"
    >
      <ScrollReveal className="max-w-4xl md:max-w-5xl w-full mx-auto relative p-8 sm:p-14 md:p-16 rounded-3xl bg-[#FFFDF9]/95 border-2 border-[#C5A059]/40 shadow-2xl backdrop-blur-md">
        
        {/* Outer Inset Border Frame */}
        <div className="absolute inset-3 border border-[#C5A059]/25 rounded-2xl pointer-events-none"></div>

        {/* Faint Background Damask Watermark */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#580E18_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

        {/* Four Corner Ornaments */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C5A059] rounded-tl-md"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C5A059] rounded-tr-md"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C5A059] rounded-bl-md"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C5A059] rounded-br-md"></div>

        {/* DECORATIVE PETAL/BLOB SHAPES ACCENTS (Restored around post-poem section) */}
        <div className="absolute top-[36%] left-3 sm:left-6 pointer-events-none opacity-80 z-0">
          <svg viewBox="0 0 30 30" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 text-[#7A1F2B] transform -rotate-45">
            <path d="M15 2 C25 2, 28 12, 20 22 C16 27, 14 27, 10 22 C2 12, 5 2, 15 2 Z" fill="currentColor" opacity="0.45" />
            <path d="M15 5 C22 5, 24 13, 18 20 C15 23, 13 23, 10 20 C5 13, 8 5, 15 5 Z" fill="#C5A059" opacity="0.35" />
          </svg>
        </div>

        <div className="absolute top-[40%] right-3 sm:right-6 pointer-events-none opacity-80 z-0">
          <svg viewBox="0 0 30 30" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-[#7A1F2B] transform rotate-45">
            <path d="M15 2 C25 2, 28 12, 20 22 C16 27, 14 27, 10 22 C2 12, 5 2, 15 2 Z" fill="currentColor" opacity="0.5" />
            <path d="M15 5 C22 5, 24 13, 18 20 C15 23, 13 23, 10 20 C5 13, 8 5, 15 5 Z" fill="#C5A059" opacity="0.4" />
          </svg>
        </div>

        <div className="absolute top-[58%] left-4 sm:left-10 pointer-events-none opacity-75 z-0">
          <svg viewBox="0 0 30 30" fill="none" className="w-5 h-5 sm:w-7 sm:h-7 text-[#7A1F2B] transform rotate-12">
            <path d="M15 2 C25 2, 28 12, 20 22 C16 27, 14 27, 10 22 C2 12, 5 2, 15 2 Z" fill="currentColor" opacity="0.4" />
            <path d="M15 5 C22 5, 24 13, 18 20 C15 23, 13 23, 10 20 C5 13, 8 5, 15 5 Z" fill="#C5A059" opacity="0.3" />
          </svg>
        </div>

        <div className="absolute top-[62%] right-4 sm:right-10 pointer-events-none opacity-75 z-0">
          <svg viewBox="0 0 30 30" fill="none" className="w-6 h-6 sm:w-8 sm:h-8 text-[#7A1F2B] transform -rotate-30">
            <path d="M15 2 C25 2, 28 12, 20 22 C16 27, 14 27, 10 22 C2 12, 5 2, 15 2 Z" fill="currentColor" opacity="0.45" />
            <path d="M15 5 C22 5, 24 13, 18 20 C15 23, 13 23, 10 20 C5 13, 8 5, 15 5 Z" fill="#C5A059" opacity="0.35" />
          </svg>
        </div>

        {/* BISMILLAH CALLIGRAPHY IMAGE — APPEARS IN BOTH ARABIC & ENGLISH MODES */}
        <div className="flex justify-center items-center mb-10 pt-2 relative z-10">
          <img
            src="assets/images/names/bismillah.png"
            alt="بسم الله الرحمن الرحيم"
            className="h-14 sm:h-20 md:h-24 object-contain max-w-[280px] sm:max-w-[420px] filter drop-shadow-xs"
          />
        </div>

        {/* ARABIC POETRY STANZA: ALWAYS REMAINS IN ARABIC IN BOTH MODES */}
        <div 
          dir="rtl"
          className="font-amiri text-xl sm:text-2xl md:text-3xl text-[#580E18] font-bold space-y-6 my-10 max-w-3xl mx-auto relative z-10"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-12 items-baseline border-b border-[#C5A059]/20 pb-4">
            <div className="text-right sm:text-end text-[#580E18]">
              دَنَتْ قُطُوفُ المُنَى وَالسَّعْدُ مُبْتَسِمُ
            </div>
            <div className="text-left sm:text-start text-[#580E18]">
              وَطَابَ فِي لَيْلَةِ الأَفْرَاحِ جَمْعُكُُم
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-12 items-baseline pb-2">
            <div className="text-right sm:text-end text-[#580E18]">
              فَأَقْبِلُوا كَيْ يَتَمَ النُّورُ مُكْتَمِلًا
            </div>
            <div className="text-left sm:text-start text-[#580E18]">
              فَإِنَّمَا عِطْرُ هَذَا الحَفْلِ وَصْلَكُمُ
            </div>
          </div>
        </div>

        {/* Flourish Divider */}
        <div className="flex items-center justify-center my-10 gap-4 relative z-10">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
          <svg className="w-6 h-6 text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 9.5 Z" />
          </svg>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
        </div>

        {/* Welcoming Hosts Callout (UNIFORM CONSISTENT LINE-HEIGHT 1.75 IN ENGLISH) */}
        <div className={`text-xl sm:text-2xl text-[#4A0D16] mb-10 relative z-10 ${isEn ? 'font-tajawal font-medium leading-[1.75]' : 'font-amiri leading-[2.2]'}`}>
          {isEn ? (
            <p className="max-w-2xl mx-auto leading-[1.75] tracking-normal">
              With hearts overflowing with love and embracing the joy of gathering together, <span className="font-bold text-[#580E18]">{t.hostSaad}</span> and <span className="font-bold text-[#580E18]">{t.hostAnwar}</span> cordially invite you to celebrate the wedding of their children.
            </p>
          ) : (
            <p className="leading-[2.2]">
              بقلوب تفيض بالمحبة، وتتسع لفرحة اللقاء، يتشرف كل من:
              <br />
              <span className="font-bold text-[#580E18] text-2xl sm:text-3xl underline decoration-[#C5A059]/40 underline-offset-8">الشيخ/ سعد مختار</span> و <span className="font-bold text-[#580E18] text-2xl sm:text-3xl underline decoration-[#C5A059]/40 underline-offset-8">الرائد/ محمد أنور</span>
              <br />
              {t.invitePhrase}
            </p>
          )}
        </div>

        {/* GOLD NAME CALLIGRAPHY IMAGES — ALWAYS STRICTLY SIDE-BY-SIDE IN BOTH ARABIC & ENGLISH MODES */}
        <div className="my-12 flex flex-row items-center justify-center gap-3 sm:gap-8 md:gap-10 py-2 relative z-10">
          
          {/* Groom Block: Mohammed */}
          <div className="flex flex-col items-center">
            <span className={`text-[#580E18] font-bold mb-1.5 ${isEn ? 'font-tajawal text-xs sm:text-base tracking-wider uppercase opacity-90' : 'font-amiri text-lg sm:text-xl'}`}>
              {t.groomTitle}
            </span>
            <div className="p-2 sm:p-4 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-md flex items-center justify-center">
              <div className="h-16 sm:h-28 md:h-32 flex items-center justify-center">
                {!mohammedImgError ? (
                  <img
                    src={isEn ? "assets/images/names/name-Moh-Eng.png" : "assets/images/names/name-mohammed.png?v=3"}
                    alt="محمد"
                    onError={() => setMohammedImgError(true)}
                    className="h-full object-contain max-w-[130px] sm:max-w-[220px] md:max-w-[240px] filter drop-shadow-sm"
                  />
                ) : (
                  <span className="font-amiri text-3xl sm:text-5xl font-bold text-[#580E18]">
                    {t.groomName}
                  </span>
                )}
              </div>
            </div>
            <span className={`text-[#8C6D33] font-bold mt-2.5 ${isEn ? 'font-tajawal text-xs sm:text-base tracking-wider uppercase opacity-90' : 'font-amiri text-lg sm:text-xl'}`}>
              {t.groomFather}
            </span>
          </div>

          {/* Connection Symbol "على" / "to" */}
          <span className="font-amiri text-2xl sm:text-5xl font-bold text-[#C5A059] self-center pb-6 sm:pb-8 shrink-0">
            {t.andWord}
          </span>

          {/* Bride Block: Ghada */}
          <div className="flex flex-col items-center">
            <span className={`text-[#580E18] font-bold mb-1.5 ${isEn ? 'font-tajawal text-xs sm:text-base tracking-wider uppercase opacity-90' : 'font-amiri text-lg sm:text-xl'}`}>
              {t.brideTitle}
            </span>
            <div className="p-2 sm:p-4 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-md flex items-center justify-center">
              <div className="h-16 sm:h-28 md:h-32 flex items-center justify-center">
                {!ghadaImgError ? (
                  <img
                    src={isEn ? "assets/images/names/name-Ghada-Eng.png" : "assets/images/names/name-ghada.png?v=3"}
                    alt="غادة"
                    onError={() => setGhadaImgError(true)}
                    className="h-full object-contain max-w-[130px] sm:max-w-[220px] md:max-w-[240px] filter drop-shadow-sm"
                  />
                ) : (
                  <span className="font-amiri text-3xl sm:text-5xl font-bold text-[#580E18]">
                    {t.brideName}
                  </span>
                )}
              </div>
            </div>
            <span className={`text-[#8C6D33] font-bold mt-2.5 ${isEn ? 'font-tajawal text-xs sm:text-base tracking-wider uppercase opacity-90' : 'font-amiri text-lg sm:text-xl'}`}>
              {t.brideFather}
            </span>
          </div>

        </div>

        {/* PLAIN MINIMALIST TYPOGRAPHY FOR 3-COLUMN EVENT DETAILS */}
        <div className="my-12 py-6 border-y border-[#C5A059]/35 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative z-10">
          
          {/* Column 1: Date */}
          <div className="flex flex-col items-center justify-center p-3 relative pb-6 md:pb-3 border-b md:border-b-0 border-[#C5A059]/25">
            <span className="font-tajawal text-xs uppercase tracking-widest text-[#8C6D33] font-bold mb-1">
              {t.dateLabel}
            </span>
            <span className={`text-xl sm:text-2xl font-bold text-[#580E18] ${isEn ? 'font-tajawal text-lg sm:text-xl leading-[1.6]' : 'font-amiri'}`}>
              {t.colDateMonth}
            </span>
            {/* Desktop Divider 1 */}
            <div className="hidden md:block absolute top-2 bottom-2 end-0 w-[1px] bg-[#C5A059]/30"></div>
          </div>

          {/* Column 2 (Center): Venue & Location */}
          <div className="flex flex-col items-center justify-center p-3 relative pb-6 md:pb-3 border-b md:border-b-0 border-[#C5A059]/25">
            <span className="font-tajawal text-xs uppercase tracking-widest text-[#8C6D33] font-bold mb-1">
              {t.venueLabel}
            </span>
            <span className={`text-xl sm:text-2xl font-bold text-[#580E18] ${isEn ? 'font-tajawal text-lg sm:text-xl leading-[1.6]' : 'font-amiri'}`}>
              {t.colVenueLoc}
            </span>
            {/* Desktop Divider 2 */}
            <div className="hidden md:block absolute top-2 bottom-2 end-0 w-[1px] bg-[#C5A059]/30"></div>
          </div>

          {/* Column 3: Day & Time */}
          <div className="flex flex-col items-center justify-center p-3">
            <span className="font-tajawal text-xs uppercase tracking-widest text-[#8C6D33] font-bold mb-1">
              {t.timeLabel}
            </span>
            <span className={`text-xl sm:text-2xl font-bold text-[#580E18] ${isEn ? 'font-tajawal text-lg sm:text-xl leading-[1.6]' : 'font-amiri'}`}>
              {t.colDayTime}
            </span>
          </div>

        </div>

        {/* Modesty & Blessing Note */}
        <div className={`text-[#2D1E18] space-y-6 relative z-10 ${isEn ? 'font-tajawal text-lg sm:text-xl leading-[1.75]' : 'font-amiri text-xl sm:text-2xl leading-[2.2]'}`}>
          <div className={`p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border-r-4 border-[#580E18] my-8 font-medium text-[#580E18] shadow-xs ${isEn ? 'text-base sm:text-lg leading-[1.75]' : 'text-lg sm:text-xl leading-[2.2]'}`}>
            {t.modestyNote}
          </div>

          <p className={`text-[#580E18] font-bold pt-2 tracking-wide ${isEn ? 'text-base sm:text-lg leading-[1.75]' : 'text-lg sm:text-xl leading-[2.2]'}`}>
            {t.closingVerseText}
          </p>
        </div>

      </ScrollReveal>
    </section>
  );
}
