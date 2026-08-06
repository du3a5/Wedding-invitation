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
      <ScrollReveal className="max-w-3xl md:max-w-4xl w-full mx-auto relative p-8 sm:p-14 md:p-16 rounded-3xl bg-[#FFFDF9]/95 border-2 border-[#C5A059]/40 shadow-2xl backdrop-blur-md">
        
        {/* Outer Inset Border Frame */}
        <div className="absolute inset-3 border border-[#C5A059]/25 rounded-2xl pointer-events-none"></div>

        {/* Faint Background Damask Watermark */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#580E18_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

        {/* Four Corner Ornaments */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C5A059] rounded-tl-md"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C5A059] rounded-tr-md"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C5A059] rounded-bl-md"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C5A059] rounded-br-md"></div>

        {/* Bismillah Opening Header */}
        <div className="font-thmanyah text-2xl sm:text-4xl text-[#580E18] font-bold mb-10 tracking-wide drop-shadow-xs">
          {t.bismillah}
        </div>

        {/* EXACT REFERENCE MATCH POETRY STANZA (2 Rows of Side-by-Side Hemistiches with Center Gap) */}
        <div 
          dir="rtl"
          className="font-thmanyah text-base sm:text-xl md:text-2xl text-[#2D1E18] space-y-6 my-10 font-medium max-w-2xl mx-auto"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-10 items-center border-b border-[#C5A059]/15 pb-4">
            <span className="text-right sm:text-end text-[#580E18] font-bold">
              دَانَتْ قُطُوفُ المُنَى، وَالسَّعْدُ مُبْتَسِمُ
            </span>
            <span className="text-left sm:text-start text-[#2D1E18]">
              وَطَابَ فِي لَيْلَةِ الأَفْرَاحِ جَمْعُكُمُ
            </span>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-10 items-center pb-2">
            <span className="text-right sm:text-end text-[#580E18] font-bold">
              فَأَقْبِلُوا كَيْ يَتِمَّ النُّورُ مُكْتَمِلًا
            </span>
            <span className="text-left sm:text-start text-[#2D1E18]">
              فَإِنَّمَا عِطْرُ هَذَا الحَفْلِ وَصْلُكُمُ
            </span>
          </div>
        </div>

        {/* Flourish Divider */}
        <div className="flex items-center justify-center my-10 gap-4">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
          <svg className="w-6 h-6 text-[#C5A059]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
          </svg>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
        </div>

        {/* Welcoming Hosts Callout */}
        <div className={`font-thmanyah text-lg sm:text-2xl text-[#4A0D16] leading-[2.2] mb-8 ${isEn ? 'font-tajawal font-medium' : ''}`}>
          {isEn ? (
            <p>
              With hearts full of love and joy, <span className="font-bold text-[#580E18]">{t.hostSaad}</span> & <span className="font-bold text-[#580E18]">{t.hostAnwar}</span> cordially invite you to celebrate the wedding of their children
            </p>
          ) : (
            <p>
              بِقُلُوبٍ تَفِيضُ بِالمَحَبَّةِ، وَتَتَّسِعُ لِفَرْحَةِ اللِّقَاءِ
              <br />
              يتشرف كلٌّ من: <span className="font-bold text-[#580E18] underline decoration-[#C5A059]/40 underline-offset-8">الشيخ/ سعد مختار سعد</span> و <span className="font-bold text-[#580E18] underline decoration-[#C5A059]/40 underline-offset-8">الفاضل/ محمد أنور</span>
              <br />
              بدعوتكم لحضور حفل زفاف نجليهما
            </p>
          )}
        </div>

        {/* Couple Names Images Container with Parent Titles matching Reference */}
        <div className="my-10 flex items-center justify-center gap-6 sm:gap-12 flex-wrap py-2">
          
          {/* Groom Block: Mohammed + "بن سعد" */}
          <div className="flex flex-col items-center">
            <div className="p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-sm flex items-center justify-center">
              <div className="h-16 sm:h-24 md:h-28 flex items-center justify-center">
                {!mohammedImgError ? (
                  <img
                    src="assets/images/names/name-mohammed.png"
                    alt="محمد"
                    onError={() => setMohammedImgError(true)}
                    className="h-full object-contain max-w-[160px] sm:max-w-[220px] filter drop-shadow-xs"
                  />
                ) : (
                  <span className="font-thmanyah text-4xl sm:text-5xl font-bold text-[#580E18]">
                    {t.groomName}
                  </span>
                )}
              </div>
            </div>
            {!isEn && (
              <span className="font-thmanyah text-sm sm:text-base text-[#8C6D33] font-bold mt-2">
                بن سعد
              </span>
            )}
          </div>

          {/* Connection Symbol */}
          <span className="font-thmanyah text-3xl sm:text-4xl font-bold text-[#C5A059] self-center pb-6">
            {t.andWord}
          </span>

          {/* Bride Block: Ghada + "بنت محمد" */}
          <div className="flex flex-col items-center">
            <div className="p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-sm flex items-center justify-center">
              <div className="h-16 sm:h-24 md:h-28 flex items-center justify-center">
                {!ghadaImgError ? (
                  <img
                    src="assets/images/names/name-ghada.png"
                    alt="غادة"
                    onError={() => setGhadaImgError(true)}
                    className="h-full object-contain max-w-[160px] sm:max-w-[220px] filter drop-shadow-xs"
                  />
                ) : (
                  <span className="font-thmanyah text-4xl sm:text-5xl font-bold text-[#580E18]">
                    {t.brideName}
                  </span>
                )}
              </div>
            </div>
            {!isEn && (
              <span className="font-thmanyah text-sm sm:text-base text-[#8C6D33] font-bold mt-2">
                بنت محمد
              </span>
            )}
          </div>

        </div>

        {/* Ceremony Date & Venue Details Paragraph */}
        <div className={`font-thmanyah text-lg sm:text-2xl text-[#2D1E18] leading-[2.2] space-y-8 ${isEn ? 'font-tajawal' : ''}`}>
          <p>
            {t.eventDetailsParagraph}
          </p>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#F7ECE9]/80 border-r-4 border-[#580E18] my-8 italic text-base sm:text-xl text-[#580E18] shadow-inner">
            "{t.modestyNote}"
          </div>

          <p className="text-base sm:text-xl text-[#580E18] font-bold pt-2 tracking-wide">
            {t.closingVerseText}
          </p>
        </div>

      </ScrollReveal>
    </section>
  );
}
