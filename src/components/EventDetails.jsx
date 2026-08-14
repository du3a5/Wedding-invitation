import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ExternalLink, Copy, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function EventDetails({ t }) {
  const [logoError, setLogoError] = useState(false);
  const [copied, setCopied] = useState(false);

  const mapDirectUrl = t.mapUrl || "https://maps.app.goo.gl/2hBMdzxPU49MBaMD8?g_st=iw";
  const mapEmbedUrl = t.mapEmbedUrl || "https://maps.google.com/maps?q=%D8%A7%D9%84%D9%82%D9%86%D8%A7%D8%B7%D8%B1+%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A%D8%A9+%D8%A8%D8%AC%D9%88%D8%A7%D8%B1+%D8%B1%D9%86%D9%8A%D9%86+,+Al+Qanatir+al+Khayriyah,+Egypt&hl=ar&output=embed";

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'زفاف محمد وغادة | Wedding of Mohammed & Ghada'
  )}&dates=20260910/20260911&details=${encodeURIComponent(
    `${t.venueValueName} - ${t.locationValueCity}`
  )}&location=${encodeURIComponent(t.venueValueName)}`;

  const handleCopyEventDetails = () => {
    const isEn = t.switchLang === 'العربية';
    const textToCopy = isEn
      ? `Mohammed ♥ Ghada\n${t.eventDetailsTitle}\n\n${t.venueValueName}\n${t.locationValueCity}\n\n${t.dateValueDay}\n${t.dateValueNum} ${t.dateValueMonth}\n\n${t.timeValueHour}\n${t.timeValuePrayer}\n\nVenue Location:\n${mapDirectUrl}`
      : `محمد وغادة\n${t.eventDetailsTitle}\n\n${t.venueValueName}\n${t.locationValueCity}\n\n${t.dateValueDay}\n${t.dateValueNum} ${t.dateValueMonth}\n\n${t.timeValueHour}\n${t.timeValuePrayer}\n\nموقع القاعة:\n${mapDirectUrl}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }).catch(() => {
        // Fallback
      });
    } else {
      const input = document.createElement('textarea');
      input.value = textToCopy;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 bg-[#FAF6F0] flex flex-col items-center justify-center">
      <ScrollReveal className="max-w-5xl w-full mx-auto space-y-8">
        
        {/* SECTION HEADING: تفاصيل الحفل / Event Details */}
        <div className="text-center mb-6">
          <h2 className="font-thmanyah text-3xl sm:text-4xl md:text-5xl text-[#580E18] font-bold tracking-wide">
            {t.eventDetailsTitle}
          </h2>
        </div>

        {/* PERFECTLY BALANCED SYMMETRIC EVENT DETAILS CARD CONTAINER */}
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#FFFDF9] border-2 border-[#C5A059]/40 shadow-xl flex flex-col md:flex-row items-center md:items-stretch justify-between gap-4 md:gap-0 relative overflow-hidden">
          
          {/* Block 1: Venue & Location */}
          <div className="flex-1 w-full flex items-center gap-4 py-4 px-2 sm:px-6 md:px-8 min-h-[110px]">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FAF6F0] border border-[#C5A059]/50 p-1 shadow-xs flex items-center justify-center overflow-hidden shrink-0">
              {!logoError ? (
                <img
                  src="assets/images/logo/logo-venue.png"
                  alt="قصر الأكابر"
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-contain"
                />
              ) : (
                <MapPin className="w-6 h-6 text-[#580E18]" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-tajawal text-[11px] sm:text-xs uppercase tracking-widest text-[#8C6D33] font-bold block mb-1">
                {t.venueLabel}
              </span>
              <span className="font-amiri text-lg sm:text-xl font-bold text-[#580E18] block leading-snug">
                {t.venueValueName}
              </span>
              <span className="font-tajawal text-xs sm:text-sm text-[#55443D] block mt-1 leading-snug">
                {t.locationValueCity}
              </span>
            </div>
          </div>

          {/* PROMINENT GOLD SEPARATOR 1 */}
          <div className="w-full h-[1px] md:w-[1px] md:h-auto md:self-stretch bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#C5A059]/75 to-transparent my-2 md:my-1 shrink-0"></div>

          {/* Block 2: Date & Day */}
          <div className="flex-1 w-full flex items-center gap-4 py-4 px-2 sm:px-6 md:px-8 min-h-[110px]">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#580E18]/10 text-[#580E18] flex items-center justify-center shrink-0 border border-[#580E18]/15 shadow-xs">
              <Calendar className="w-6 h-6 text-[#580E18]" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-tajawal text-[11px] sm:text-xs uppercase tracking-widest text-[#8C6D33] font-bold block mb-1">
                {t.dateLabel}
              </span>
              <span className="font-amiri text-lg sm:text-xl font-bold text-[#580E18] block leading-snug">
                {t.dateValueDay}
              </span>
              <span className="font-tajawal text-xs sm:text-sm text-[#55443D] block mt-1 leading-snug">
                {t.dateValueNum} {t.dateValueMonth}
              </span>
            </div>
          </div>

          {/* PROMINENT GOLD SEPARATOR 2 */}
          <div className="w-full h-[1px] md:w-[1px] md:h-auto md:self-stretch bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#C5A059]/75 to-transparent my-2 md:my-1 shrink-0"></div>

          {/* Block 3: Time */}
          <div className="flex-1 w-full flex items-center gap-4 py-4 px-2 sm:px-6 md:px-8 min-h-[110px]">
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#580E18]/10 text-[#580E18] flex items-center justify-center shrink-0 border border-[#580E18]/15 shadow-xs">
              <Clock className="w-6 h-6 text-[#580E18]" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-tajawal text-[11px] sm:text-xs uppercase tracking-widest text-[#8C6D33] font-bold block mb-1">
                {t.timeLabel}
              </span>
              <span className="font-amiri text-lg sm:text-xl font-bold text-[#580E18] block leading-snug">
                {t.timeValueHour}
              </span>
              <span className="font-tajawal text-xs sm:text-sm text-[#55443D] block mt-1 leading-snug">
                {t.timeValuePrayer}
              </span>
            </div>
          </div>

        </div>

        {/* Embedded Google Map Frame */}
        <div className="w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 relative">
          <iframe
            title="موقع قصر الأكابر بالقناطر الخيرية"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Action Buttons Bar (Calendar, Open Map, and Copy Details) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 flex-wrap">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#580E18] via-[#7A1F2B] to-[#3F080F] text-[#FAF6F0] font-tajawal font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-98 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#E5C158]" />
            <span>{t.addToCalendar}</span>
          </a>

          <a
            href={mapDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#FFFDF9] border border-[#C5A059] text-[#580E18] font-tajawal font-bold text-sm shadow-md hover:bg-[#FAF6F0] transition-all duration-300 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>{t.openMap}</span>
          </a>

          {/* ELEGANT SUBTLE COPY EVENT DETAILS BUTTON */}
          <button
            onClick={handleCopyEventDetails}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-tajawal font-bold text-sm shadow-md transition-all duration-300 transform active:scale-95 cursor-pointer ${
              copied
                ? 'bg-gradient-to-r from-[#C5A059] via-[#E5C158] to-[#9B793A] text-[#3F080F] border border-[#E5C158]'
                : 'bg-[#FFFDF9] border border-[#C5A059]/60 text-[#580E18] hover:bg-[#FAF6F0]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#3F080F]" />
                <span>{t.eventDetailsCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C5A059]" />
                <span>{t.copyEventDetailsBtn}</span>
              </>
            )}
          </button>
        </div>

      </ScrollReveal>
    </section>
  );
}
