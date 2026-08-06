import React, { useState, useRef } from 'react';
import EnvelopeLanding from './components/EnvelopeLanding';
import HeroVideo from './components/HeroVideo';
import InvitationVerses from './components/InvitationVerses';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import CongratulationsWall from './components/CongratulationsWall';
import Footer from './components/Footer';
import FloatingPetals from './components/FloatingPetals';
import { translations } from './config/i18n';
import { Globe } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  const audioRef = useRef(null);

  const t = translations[lang];

  const toggleLanguage = () => {
    const nextLang = lang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLang;
  };

  const startAudioOnEnvelopeOpen = () => {
    if (audioRef.current && isAudioMuted) {
      audioRef.current.play().then(() => {
        setIsAudioMuted(false);
      }).catch((err) => {
        console.log("Audio play error:", err);
      });
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isAudioMuted) {
      audioRef.current.play().then(() => {
        setIsAudioMuted(false);
      }).catch((err) => {
        console.log("Audio toggle play error:", err);
      });
    } else {
      audioRef.current.pause();
      setIsAudioMuted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2D1E18] selection:bg-[#580E18] selection:text-[#FAF6F0] relative">
      
      {/* Background Audio Element */}
      <audio ref={audioRef} src="assets/audio/nasheed.mp3" loop />

      {/* Floating Rose Petals Background Motion */}
      <FloatingPetals />

      {/* Site-Wide Subtle Gold Border Frame */}
      <div className="fixed inset-2 sm:inset-4 md:inset-6 z-30 pointer-events-none border border-[#C5A059]/25 rounded-2xl"></div>

      {/* PERSISTENT FLOATING LANGUAGE TOGGLE (Top-Right) */}
      <div className="fixed top-6 right-6 z-40">
        <button
          onClick={toggleLanguage}
          aria-label={t.switchLang}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FAF6F0]/85 backdrop-blur-md border border-[#C5A059]/40 text-[#580E18] shadow-xl hover:bg-[#FAF6F0] transition-all duration-300 transform active:scale-95 cursor-pointer font-tajawal text-xs font-bold"
        >
          <Globe className="w-4 h-4 text-[#C5A059]" />
          <span>{t.switchLang}</span>
        </button>
      </div>

      {/* Section 1: Envelope Landing Overlay */}
      <EnvelopeLanding 
        onOpen={() => setIsEnvelopeOpened(true)} 
        onPlayAudio={startAudioOnEnvelopeOpen}
      />

      {/* Main Website Content */}
      <main className={`transition-opacity duration-1000 ${isEnvelopeOpened ? 'opacity-100' : 'opacity-90'}`}>
        {/* Section 2: Hero Video */}
        <HeroVideo 
          isAudioMuted={isAudioMuted} 
          toggleAudio={toggleAudio} 
          t={t} 
        />

        {/* Section 3: Invitation Verses */}
        <InvitationVerses lang={lang} t={t} />

        {/* Section 4: Countdown Timer */}
        <Countdown t={t} />

        {/* Section 5: Event Details */}
        <EventDetails t={t} />

        {/* Section 6 & 7: Unified Congratulations Wall (includes Couple Illustration & Live Sheet Wishes) */}
        <CongratulationsWall t={t} />
      </main>

      {/* Section 8: Minimal Footer */}
      <Footer t={t} />
    </div>
  );
}
