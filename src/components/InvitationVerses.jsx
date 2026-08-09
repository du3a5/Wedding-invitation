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
      className="relative w-full py-20 px-4 sm:px-8 md:px-12 bg-[#FAF6F0] flex flex-col items-center justify-center text-center overflow-hidden"
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

        {/* Bismillah Opening Header: THMANYAH FONT FOR MAIN HEADING */}
        <div className="font-thmanyah text-3xl sm:text-5xl text-[#580E18] font-bold mb-10 tracking-wide drop-shadow-xs">
          {t.bismillah}
        </div>

        {/* ARABIC POETRY STANZA: AMIRI FONT FOR LITERARY POETRY WITH PERFECT HEMISTICH ALIGNMENT */}
        <div 
          dir="rtl"
          className="font-amiri text-xl sm:text-2xl md:text-3xl text-[#580E18] font-bold space-y-6 my-10 max-w-3xl mx-auto"
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
        <div className="flex items-center justify-center my-10 gap-4">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
          <svg className="w-6 h-6 text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 9.5 Z" />
          </svg>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
        </div>

        {/* Welcoming Hosts Callout (Plain undiacritized line: بقلوب تفيض بالمحبة، وتتسع لفرحة اللقاء، يتشرف كل من) */}
        <div className={`font-amiri text-xl sm:text-2xl text-[#4A0D16] leading-[2.2] mb-10 ${isEn ? 'font-tajawal font-medium' : ''}`}>
          {isEn ? (
            <p>
              With hearts full of love and joy, <span className="font-bold text-[#580E18]">{t.hostSaad}</span> & <span className="font-bold text-[#580E18]">{t.hostAnwar}</span> cordially invite you to celebrate the wedding of their children
            </p>
          ) : (
            <p>
              بقلوب تفيض بالمحبة، وتتسع لفرحة اللقاء، يتشرف كل من:
              <br />
              <span className="font-bold text-[#580E18] text-2xl sm:text-3xl underline decoration-[#C5A059]/40 underline-offset-8">الشيخ/ سعد مختار</span> و <span className="font-bold text-[#580E18] text-2xl sm:text-3xl underline decoration-[#C5A059]/40 underline-offset-8">الرائد/ محمد أنور</span>
              <br />
              {t.invitePhrase}
            </p>
          )}
        </div>

        {/* GOLD NAME CALLIGRAPHY IMAGES WITH ENGLISH ALTERNATES & "على" CONNECTOR */}
        <div className="my-12 flex items-center justify-center gap-6 sm:gap-10 flex-wrap py-2">
          
          {/* Groom Block: Mohammed */}
          <div className="flex flex-col items-center">
            <div className="p-3 sm:p-4 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-md flex items-center justify-center">
              <div className="h-20 sm:h-28 md:h-32 flex items-center justify-center">
                {!mohammedImgError ? (
                  <img
                    src={isEn ? "assets/images/names/name-Moh-Eng.png" : "assets/images/names/name-mohammed.png?v=3"}
                    alt="محمد"
                    onError={() => setMohammedImgError(true)}
                    className="h-full object-contain max-w-[180px] sm:max-w-[240px] filter drop-shadow-sm"
                  />
                ) : (
                  <span className="font-amiri text-4xl sm:text-5xl font-bold text-[#580E18]">
                    {t.groomName}
                  </span>
                )}
              </div>
            </div>
            <span className={`text-[#8C6D33] font-bold mt-2.5 ${isEn ? 'font-tajawal text-sm sm:text-base tracking-wider uppercase opacity-90' : 'font-amiri text-lg sm:text-xl'}`}>
              {t.groomFather}
            </span>
          </div>

          {/* Connection Symbol "على" / "to" */}
          <span className="font-amiri text-3xl sm:text-5xl font-bold text-[#C5A059] self-center pb-8">
            {t.andWord}
          </span>

          {/* Bride Block: Ghada */}
          <div className="flex flex-col items-center">
            <div className="p-3 sm:p-4 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-md flex items-center justify-center">
              <div className="h-20 sm:h-28 md:h-32 flex items-center justify-center">
                {!ghadaImgError ? (
                  <img
                    src={isEn ? "assets/images/names/name-Ghada-Eng.png" : "assets/images/names/name-ghada.png?v=3"}
                    alt="غادة"
                    onError={() => setGhadaImgError(true)}
                    className="h-full object-contain max-w-[180px] sm:max-w-[240px] filter drop-shadow-sm"
                  />
                ) : (
                  <span className="font-amiri text-4xl sm:text-5xl font-bold text-[#580E18]">
                    {t.brideName}
                  </span>
                )}
              </div>
            </div>
            <span className={`text-[#8C6D33] font-bold mt-2.5 ${isEn ? 'font-tajawal text-sm sm:text-base tracking-wider uppercase opacity-90' : 'font-amiri text-lg sm:text-xl'}`}>
              {t.brideFather}
            </span>
          </div>

        </div>

        {/* PLAIN MINIMALIST TYPOGRAPHY FOR 3-COLUMN EVENT DETAILS */}
        <div className="my-12 py-6 border-y border-[#C5A059]/35 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Column 1: Date */}
          <div className="flex flex-col items-center justify-center p-3 border-b md:border-b-0 md:border-l border-[#C5A059]/30">
            <span className="font-tajawal text-xs uppercase tracking-widest text-[#8C6D33] font-bold mb-1">
              {t.dateLabel}
            </span>
            <span className="font-amiri text-xl sm:text-2xl font-bold text-[#580E18]">
              {t.colDateMonth}
            </span>
          </div>

          {/* Column 2 (Center): Venue & Location */}
          <div className="flex flex-col items-center justify-center p-3 border-b md:border-b-0 md:border-l border-[#C5A059]/30">
            <span className="font-tajawal text-xs uppercase tracking-widest text-[#8C6D33] font-bold mb-1">
              {t.venueLabel}
            </span>
            <span className="font-amiri text-xl sm:text-2xl font-bold text-[#580E18]">
              {t.colVenueLoc}
            </span>
          </div>

          {/* Column 3: Day & Time */}
          <div className="flex flex-col items-center justify-center p-3">
            <span className="font-tajawal text-xs uppercase tracking-widest text-[#8C6D33] font-bold mb-1">
              {t.timeLabel}
            </span>
            <span className="font-amiri text-xl sm:text-2xl font-bold text-[#580E18]">
              {t.colDayTime}
            </span>
          </div>

        </div>

        {/* Modesty & Blessing Note (Quotation marks removed per user request) */}
        <div className={`font-amiri text-xl sm:text-2xl text-[#2D1E18] leading-[2.2] space-y-6 ${isEn ? 'font-tajawal' : ''}`}>
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border-r-4 border-[#580E18] my-8 font-medium text-lg sm:text-xl text-[#580E18] shadow-xs">
            {t.modestyNote}
          </div>

          <p className="text-lg sm:text-xl text-[#580E18] font-bold pt-2 tracking-wide">
            {t.closingVerseText}
          </p>
        </div>

      </ScrollReveal>
    </section>
  );
}
