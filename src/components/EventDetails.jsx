import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function EventDetails({ t }) {
  const [logoError, setLogoError] = useState(false);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'زفاف محمد وغادة | Wedding of Mohammed & Ghada'
  )}&dates=20260910/20260911&details=${encodeURIComponent(
    'حفل زفاف نجليهما - بعد صلاة العشاء - في قاعة الأكابر بالقناطر الخيرية. نسعد بحضوركم!'
  )}&location=${encodeURIComponent('قاعة الأكابر بالقناطر الخيرية')}`;

  const mapDirectUrl = "https://www.google.com/maps?q=%D8%A7%D9%84%D9%82%D9%86%D8%A7%D8%B7%D8%B1+%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A%D8%A9+%D8%A8%D8%AC%D9%88%D8%A7%D8%B1+%D8%B1%D9%86%D9%8A%D9%86+,+Al+Qanatir+al+Khayriyah,+Egypt&hl=ar";

  const mapEmbedUrl = "https://maps.google.com/maps?q=%D8%A7%D9%84%D9%82%D9%86%D8%A7%D8%B7%D8%B1+%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A%D8%A9+%D8%A8%D8%AC%D9%88%D8%A7%D8%B1+%D8%B1%D9%86%D9%8A%D9%86+,+Al+Qanatir+al+Khayriyah,+Egypt&hl=ar&output=embed";

  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-16 bg-[#FAF6F0] flex flex-col items-center justify-center">
      <ScrollReveal className="max-w-4xl md:max-w-5xl w-full mx-auto">
        
        {/* Title & Flourish */}
        <div className="text-center mb-12">
          <h2 className="font-thmanyah text-3xl sm:text-4xl md:text-5xl text-[#580E18] font-bold tracking-wide mb-4">
            {t.eventDetailsTitle}
          </h2>
          
          {/* Flourish */}
          <div className="flex items-center justify-center gap-3 opacity-80">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#C5A059]"></div>
            <svg className="w-5 h-5 text-[#C5A059]" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="10" cy="10" r="4" />
            </svg>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#C5A059]"></div>
          </div>
        </div>

        {/* Details Grid (2-column layout on Tablet/Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Date & Time */}
          <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-xl flex items-start gap-5 transform hover:-translate-y-1 transition-all duration-300">
            <div className="p-4 rounded-2xl bg-[#580E18]/10 text-[#580E18] shrink-0">
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-tajawal text-xs uppercase tracking-widest text-[#8C6D33] font-bold">
                {t.dateLabel} & {t.timeLabel}
              </h3>
              <p className="font-thmanyah text-2xl text-[#2D1E18] font-bold mt-1">
                {t.dateValue}
              </p>
              <div className="flex items-center gap-2 text-base text-[#580E18] font-medium mt-3">
                <Clock className="w-5 h-5" />
                <span>{t.timeValue}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Venue & Location with VISIBLE Venue Logo */}
          <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-xl flex items-start gap-5 transform hover:-translate-y-1 transition-all duration-300">
            {/* Prominent Venue Logo Display Container */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/40 p-1.5 shadow-md flex items-center justify-center overflow-hidden shrink-0">
              {!logoError ? (
                <img
                  src="assets/images/logo/logo-venue.png"
                  alt="لوجو قاعة الأكابر"
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-contain"
                />
              ) : (
                <MapPin className="w-8 h-8 text-[#580E18]" />
              )}
            </div>
            <div>
              <h3 className="font-tajawal text-xs uppercase tracking-widest text-[#8C6D33] font-bold">
                {t.venueLabel}
              </h3>
              <p className="font-thmanyah text-2xl text-[#580E18] font-bold mt-1">
                {t.venueValue}
              </p>
              <p className="font-tajawal text-base text-[#55443D] mt-2">
                {t.locationValue}
              </p>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#580E18] via-[#7A1F2B] to-[#3D0910] text-[#FAF6F0] font-tajawal font-bold text-base shadow-xl hover:shadow-2xl hover:from-[#6B1420] transition-all duration-300 transform active:scale-98 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#E5C158]" />
            <span>{t.addToCalendar}</span>
          </a>

          <a
            href={mapDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#FFFDF9] border-2 border-[#C5A059] text-[#580E18] font-tajawal font-bold text-base shadow-lg hover:bg-[#FAF6F0] transition-all duration-300 cursor-pointer"
          >
            <ExternalLink className="w-5 h-5" />
            <span>{t.openMap}</span>
          </a>
        </div>

        {/* Embedded Google Map Frame */}
        <div className="w-full h-80 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 relative">
          <iframe
            title="موقع قاعة الأكابر بالقناطر الخيرية"
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

      </ScrollReveal>
    </section>
  );
}
