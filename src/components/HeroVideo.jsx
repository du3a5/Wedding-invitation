import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HeroVideo({ isAudioMuted, toggleAudio, t }) {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(false);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#1F120E]">
      {/* Background Hero Video */}
      {!videoError ? (
        <video
          ref={videoRef}
          src="assets/video/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.7] contrast-[1.05]"
        />
      ) : null}

      {/* Styled Fallback Backdrop if video file isn't uploaded yet */}
      {videoError && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A0D16] via-[#2D1E18] to-[#1F120E] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#E5C158_1.5px,transparent_1.5px)] [background-size:24px_24px] animate-pulse"></div>
        </div>
      )}

      {/* Persistent Floating Audio Mute/Unmute Control (Top-Left) */}
      <button
        onClick={toggleAudio}
        aria-label={isAudioMuted ? t.unmuteText : t.muteText}
        className="fixed top-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FAF6F0]/85 backdrop-blur-md border border-[#C5A059]/40 text-[#580E18] shadow-xl hover:bg-[#FAF6F0] transition-all duration-300 transform active:scale-95 cursor-pointer"
      >
        {isAudioMuted ? (
          <>
            <VolumeX className="w-5 h-5 text-[#580E18]" />
            <span className="text-xs font-tajawal font-medium hidden sm:inline">{t.unmuteText}</span>
          </>
        ) : (
          <>
            <Volume2 className="w-5 h-5 text-[#580E18] animate-pulse" />
            <span className="text-xs font-tajawal font-medium hidden sm:inline">{t.muteText}</span>
          </>
        )}
      </button>

      {/* Overlay Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-black/25 to-black/50"></div>

      {/* Hero Centered Overlay Text */}
      <ScrollReveal className="relative z-20 text-center px-6 max-w-2xl md:max-w-3xl mx-auto flex flex-col items-center">
        {/* Decorative Top Flourish */}
        <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#E5C158] to-transparent mb-8 opacity-90"></div>
        
        <h1 className="font-cairo text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FAF6F0] font-bold tracking-wide leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          {t.heroOverlay}
        </h1>

        <div className="w-28 h-[1.5px] bg-gradient-to-r from-transparent via-[#E5C158] to-transparent mt-8 opacity-90"></div>
      </ScrollReveal>
    </section>
  );
}
