import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ShareSection({ t }) {
  const [copied, setCopied] = useState(false);

  const handleWhatsappShare = () => {
    const liveUrl = window.location.href;
    const shareMessage = `دعوة زفاف محمد وغادة 🤍\n${t.shareText}\n${t.shareSignature}\n${liveUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    const liveUrl = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(liveUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }).catch(err => {
        console.error("Clipboard copy error:", err);
      });
    } else {
      const input = document.createElement('input');
      input.value = liveUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section className="w-full py-12 px-4 bg-[#FAF6F0] flex flex-col items-center justify-center text-center">
      <ScrollReveal className="max-w-xl w-full mx-auto p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-lg flex flex-col items-center">
        
        {/* Share Icon Flourish */}
        <div className="w-12 h-12 rounded-full bg-[#580E18]/10 text-[#580E18] flex items-center justify-center mb-3">
          <Share2 className="w-5 h-5 text-[#580E18]" />
        </div>

        {/* Friendly Text (Fully Translated) */}
        <p className="font-amiri text-xl sm:text-2xl font-bold text-[#580E18] mb-1">
          {t.shareText}
        </p>

        {/* Date Signature matching Footer Style (No hashtag symbol) */}
        <div className="font-tajawal text-xs sm:text-sm text-[#8C6D33] opacity-90 tracking-widest uppercase mb-6 font-bold">
          {t.shareSignature}
        </div>

        {/* Action Buttons Bar (Restyled in Site's Gold/Burgundy Aesthetics) */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 w-full">
          
          {/* Button 1: WhatsApp Share (Gold Border Luxury Style) */}
          <button
            onClick={handleWhatsappShare}
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FFFDF9] border-2 border-[#C5A059] text-[#580E18] font-tajawal font-bold text-sm shadow-md hover:bg-[#FAF6F0] transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#C5A059]" />
            <span>{t.shareWhatsappBtn}</span>
          </button>

          {/* Button 2: Copy Link with Luxury Gold Confirmation Tone */}
          <button
            onClick={handleCopyLink}
            className={`flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-tajawal font-bold text-sm shadow-md transition-all duration-300 transform active:scale-95 cursor-pointer ${
              copied 
                ? 'bg-gradient-to-r from-[#C5A059] via-[#E5C158] to-[#9B793A] text-[#3F080F] border-2 border-[#E5C158]' 
                : 'bg-gradient-to-r from-[#580E18] via-[#7A1F2B] to-[#3F080F] text-[#FAF6F0] hover:from-[#6B1420]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#3F080F]" />
                <span>{t.linkCopiedText}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#E5C158]" />
                <span>{t.copyLinkBtn}</span>
              </>
            )}
          </button>

        </div>

      </ScrollReveal>
    </section>
  );
}
