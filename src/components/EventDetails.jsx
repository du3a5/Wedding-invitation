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
      <ScrollReveal className="max-w-4xl w-full mx-auto space-y-8">
        
        {/* RESTORED SECTION HEADING: تفاصيل الحفل / Event Details */}
        <div className="text-center mb-6">
          <h2 className="font-thmanyah text-3xl sm:text-4xl md:text-5xl text-[#580E18] font-bold tracking-wide">
            {t.eventDetailsTitle}
          </h2>
        </div>

        {/* COMPACT UNIFIED EVENT DETAILS CARD SPLIT BY THIN DIVIDERS */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Section 1: Venue & Logo */}
          <div className="flex items-center gap-4 p-3 border-b md:border-b-0 md:border-l border-[#C5A059]/25">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF6F0] border border-[#C5A059]/40 p-1 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
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
            <div>
              <span className="font-tajawal text-xs uppercase tracking-widest text-[#8C6D33] font-bold block">
                {t.venueLabel}
              </span>
              <span className="font-amiri text-xl font-bold text-[#580E18]">
                {t.venueValueName}
              </span>
              <span className="font-tajawal text-xs text-[#55443D] block mt-0.5">
                {t.locationValueCity}
              </span>
            </div>
          </div>

          {/* Section 2: Date & Day */}
          <div className="flex items-center gap-4 p-3 border-b md:border-b-0 md:border-l border-[#C5A059]/25">
            <div className="p-3.5 rounded-2xl bg-[#580E18]/10 text-[#580E18] shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="font-tajawal text-xs uppercase tracking-widest text-[#8C6D33] font-bold block">
                {t.dateLabel}
              </span>
              <div className="flex items-baseline gap-1.5 font-amiri">
                <span className="text-xl font-bold text-[#580E18]">{t.dateValueDay}</span>
                <span className="text-2xl font-extrabold text-[#580E18]">{t.dateValueNum}</span>
                <span className="text-base text-[#2D1E18]">{t.dateValueMonth}</span>
              </div>
            </div>
          </div>

          {/* Section 3: Time */}
          <div className="flex items-center gap-4 p-3">
            <div className="p-3.5 rounded-2xl bg-[#580E18]/10 text-[#580E18] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="font-tajawal text-xs uppercase tracking-widest text-[#8C6D33] font-bold block">
                {t.timeLabel}
              </span>
              <span className="font-amiri text-xl font-bold text-[#580E18] block">
                {t.timeValueHour}
              </span>
              <span className="font-tajawal text-xs text-[#55443D] block mt-0.5">
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

          {/* ELEGANT SUBTLE COPY EVENT DETAILS BUTTON (Includes mapUrl from content.json) */}
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
