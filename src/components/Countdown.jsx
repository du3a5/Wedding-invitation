import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Countdown({ t }) {
  const targetDate = new Date('2026-09-10T00:00:00');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [flipSec, setFlipSec] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const next = calculateTimeLeft();
        if (next.seconds !== prev.seconds) {
          setFlipSec(true);
          setTimeout(() => setFlipSec(false), 400);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: t.days, value: timeLeft.days, isFlipping: false },
    { label: t.hours, value: timeLeft.hours, isFlipping: false },
    { label: t.minutes, value: timeLeft.minutes, isFlipping: false },
    { label: t.seconds, value: timeLeft.seconds, isFlipping: flipSec },
  ];

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-[#FAF6F0] via-[#F7ECE9] to-[#FAF6F0] flex flex-col items-center justify-center text-center overflow-hidden">
      <ScrollReveal className="max-w-2xl w-full mx-auto">
        
        {/* Main Heading in Thmanyah Font */}
        <h2 className="font-thmanyah text-3xl sm:text-4xl md:text-5xl text-[#580E18] font-bold mb-10 tracking-wide drop-shadow-xs">
          {t.countdownHeading}
        </h2>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg mx-auto">
          {timeUnits.map((unit, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3.5 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/40 shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`w-full flex items-center justify-center ${unit.isFlipping ? 'animate-flip-tick' : ''}`}>
                <span className="font-amiri text-3xl sm:text-5xl font-bold text-[#580E18]">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>

              <span className="font-amiri text-base sm:text-lg text-[#8C6D33] font-bold mt-2 tracking-wide">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
