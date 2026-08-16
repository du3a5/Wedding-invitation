import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GOOGLE_FORM_CONFIG, INITIAL_WISHES, parseGoogleSheetCsv } from '../config/googleForm';
import { Heart, Send, Sparkles, RefreshCw, Crown, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import ScrollReveal from './ScrollReveal';

export default function CongratulationsWall({ t }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wishes, setWishes] = useState(INITIAL_WISHES);
  const [displayedSubset, setDisplayedSubset] = useState([]);
  const [imgError, setImgError] = useState(false);
  const [isLoadingSheet, setIsLoadingSheet] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const wishesRef = useRef(wishes);
  wishesRef.current = wishes;

  // Compute displayed subset: Always include latest 2 + select 2 random older wishes (Max 4 cards)
  const computeDisplayedSubset = useCallback((allWishes) => {
    if (!allWishes || allWishes.length === 0) return [];
    
    const MAX_DISPLAY = 4;
    if (allWishes.length <= MAX_DISPLAY) {
      return allWishes;
    }

    // Latest 2 submitted wishes (Index 0 and Index 1)
    const latest2 = allWishes.slice(0, 2);
    // Older submitted wishes (Index 2 onwards)
    const olderWishes = allWishes.slice(2);

    // Randomly select 2 older wishes without duplication
    const shuffledOlder = [...olderWishes].sort(() => 0.5 - Math.random());
    const randomOlder = shuffledOlder.slice(0, MAX_DISPLAY - 2);

    return [...latest2, ...randomOlder];
  }, []);

  // Fetch live published Google Sheet CSV data with cache-busting and auto-polling
  useEffect(() => {
    let isMounted = true;

    async function fetchLiveSheetWishes(isSilent = false) {
      if (!GOOGLE_FORM_CONFIG.sheetCsvUrl) return;
      if (!isSilent && isMounted) setIsLoadingSheet(true);
      try {
        // Cache-busting URL parameter ensures fresh data fetch from Google Sheet
        const cacheBusterUrl = `${GOOGLE_FORM_CONFIG.sheetCsvUrl}${GOOGLE_FORM_CONFIG.sheetCsvUrl.includes('?') ? '&' : '?'}_t=${Date.now()}`;
        const response = await fetch(cacheBusterUrl);
        if (response.ok) {
          const csvText = await response.text();
          const parsed = parseGoogleSheetCsv(csvText);
          if (parsed && parsed.length > 0 && isMounted) {
            setWishes(parsed);
          }
        }
      } catch {
        // Silent catch for graceful network fallback
      } finally {
        if (isMounted && !isSilent) setIsLoadingSheet(false);
      }
    }

    // Initial fetch on mount
    fetchLiveSheetWishes(false);

    // Automatic polling interval (every 12 seconds) for real-time background updates
    const pollInterval = setInterval(() => {
      fetchLiveSheetWishes(true);
    }, 12000);

    return () => {
      isMounted = false;
      clearInterval(pollInterval);
    };
  }, []);

  // Update displayed subset whenever full wishes list changes
  useEffect(() => {
    if (wishes.length > 0) {
      setDisplayedSubset(computeDisplayedSubset(wishes));
    } else {
      setDisplayedSubset([]);
    }
  }, [wishes, computeDisplayedSubset]);

  // Lock body scroll when all-wishes modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    try {
      const formData = new URLSearchParams();
      formData.append(GOOGLE_FORM_CONFIG.entryName, name.trim());
      formData.append(GOOGLE_FORM_CONFIG.entryMessage, message.trim());

      await fetch(GOOGLE_FORM_CONFIG.formResponseUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      // Confetti celebration
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#580E18', '#C5A059', '#E5C158', '#D8A7B1']
      });

      const newWish = { name: name.trim(), message: message.trim() };
      
      // Update wishes state immediately (newWish at top index 0)
      setWishes(prev => [newWish, ...prev.filter(w => w.name !== newWish.name || w.message !== newWish.message)]);
      
      setIsSubmitted(true);

      // Trigger a delayed background re-fetch after 2.5s to sync Google Sheet response
      setTimeout(async () => {
        try {
          const cacheBusterUrl = `${GOOGLE_FORM_CONFIG.sheetCsvUrl}${GOOGLE_FORM_CONFIG.sheetCsvUrl.includes('?') ? '&' : '?'}_t=${Date.now()}`;
          const response = await fetch(cacheBusterUrl);
          if (response.ok) {
            const csvText = await response.text();
            const parsed = parseGoogleSheetCsv(csvText);
            if (parsed && parsed.length > 0) {
              setWishes(parsed);
            }
          }
        } catch {
          // Silent catch
        }
      }, 2500);

    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setMessage('');
    setIsSubmitted(false);
  };

  const rotateSubsets = () => {
    if (wishes.length > 0) {
      setDisplayedSubset(computeDisplayedSubset(wishes));
    }
  };

  return (
    <section id="wishes-section" className="w-full py-20 px-4 sm:px-8 md:px-16 bg-[#FAF6F0] flex flex-col items-center justify-center">
      <ScrollReveal className="max-w-5xl w-full mx-auto">
        
        {/* Section Heading: THMANYAH FONT FOR MAIN HEADING */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#580E18]/10 text-[#580E18] mb-4">
            <Heart className="w-7 h-7 fill-[#580E18]" />
          </div>
          <h2 className="font-thmanyah text-3xl sm:text-4xl md:text-5xl text-[#580E18] font-bold tracking-wide">
            {t.congratsTitle}
          </h2>
        </div>

        {/* UNIFIED 2-COLUMN CARD: Couple Illustration + Message Form (ANCHOR ID: wishes-form) */}
        <div id="wishes-form" className="rounded-3xl bg-[#FFFDF9] border border-[#C5A059]/40 shadow-2xl overflow-hidden mb-16 grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Column 1: Couple Illustration */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-gradient-to-br from-[#F7ECE9] to-[#FAF6F0] h-full flex items-center justify-center border-b lg:border-b-0 lg:border-l border-[#C5A059]/30">
            {!imgError ? (
              <img
                src="assets/images/couple/couple-full-figure.png"
                alt="صورة العروسين"
                onError={() => setImgError(true)}
                className="w-full h-auto max-h-[420px] object-contain rounded-2xl drop-shadow-md transition-transform duration-700 hover:scale-[1.02]"
              />
            ) : (
              <div className="w-full h-64 sm:h-80 rounded-2xl bg-[#FAF6F0] border-2 border-dashed border-[#C5A059]/40 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#580E18]/10 border border-[#C5A059] flex items-center justify-center mb-3">
                  <span className="font-amiri text-2xl font-bold text-[#580E18]">م & غ</span>
                </div>
                <span className="font-tajawal text-sm text-[#8C6D33] font-medium">
                  صورة العروسين
                </span>
              </div>
            )}
          </div>

          {/* Column 2: Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Field 1: Name */}
                <div>
                  <label className="block font-tajawal text-sm font-bold text-[#580E18] mb-2">
                    {t.nameLabel} <span className="text-[#580E18]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    className="w-full px-4 py-4 rounded-xl bg-[#FAF6F0] border border-[#C5A059]/40 text-[#2D1E18] font-tajawal focus:outline-none focus:ring-2 focus:ring-[#580E18]/50 transition-all text-base"
                  />
                </div>

                {/* Field 2: Message */}
                <div>
                  <label className="block font-tajawal text-sm font-bold text-[#580E18] mb-2">
                    {t.messageLabel} <span className="text-[#580E18]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-4 py-4 rounded-xl bg-[#FAF6F0] border border-[#C5A059]/40 text-[#2D1E18] font-tajawal focus:outline-none focus:ring-2 focus:ring-[#580E18]/50 transition-all resize-none text-base"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#580E18] via-[#7A1F2B] to-[#3F080F] text-[#FAF6F0] font-tajawal font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{t.sendingBtn}</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-[#E5C158]" />
                      <span>{t.submitBtn}</span>
                    </>
                  )}
                </button>

              </form>
            ) : (
              /* Thank You Message */
              <div className="py-10 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#580E18]/10 text-[#580E18] mx-auto flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#580E18]" />
                </div>
                <h3 className="font-thmanyah text-2xl sm:text-3xl font-bold text-[#580E18]">
                  {t.thankYouMsg}
                </h3>
                <button
                  onClick={handleReset}
                  className="mt-4 px-8 py-3 rounded-xl bg-[#FAF6F0] border border-[#C5A059]/60 text-[#580E18] font-tajawal text-sm font-bold hover:bg-[#F7ECE9] transition-colors cursor-pointer"
                >
                  {t.sendAnother}
                </button>
              </div>
            )}
          </div>

        </div>

        {/* PINNED MESSAGES SECTION: HARD-CODED GROOM & BRIDE CARDS */}
        <div className="w-full max-w-4xl mx-auto space-y-6 mb-12">
          
          {/* GRID: GROOM & BRIDE PINNED CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* 1. PERMANENTLY PINNED GROOM MESSAGE CARD */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] to-[#F7ECE9] border-2 border-[#C5A059] shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#580E18] text-[#E5C158] font-tajawal text-xs font-bold shadow-sm">
                    <Crown className="w-4 h-4 fill-[#E5C158]" />
                    <span>{t.groomBadge}</span>
                  </div>
                  <Heart className="w-5 h-5 text-[#580E18] fill-[#580E18]/20" />
                </div>
                <p className="font-amiri text-lg sm:text-xl text-[#580E18] font-bold leading-relaxed mb-4 break-words [overflow-wrap:anywhere]">
                  "{t.groomMessage}"
                </p>
              </div>
              <div className="text-left font-tajawal font-bold text-sm text-[#8C6D33] pt-3 border-t border-[#C5A059]/30">
                — {t.groomNameSignature}
              </div>
            </div>

            {/* 2. PERMANENTLY PINNED BRIDE CARD (INVERTED GOLD BADGE + OFFICIAL TEXT MESSAGE) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] to-[#F7ECE9] border-2 border-[#C5A059] shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* INVERTED BADGE: GOLD BACKGROUND + BURGUNDY TEXT & CROWN */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#E5C158] via-[#C5A059] to-[#9B793A] text-[#3F080F] border border-[#E5C158] font-tajawal text-xs font-extrabold shadow-sm">
                    <Crown className="w-4 h-4 fill-[#3F080F] text-[#3F080F]" />
                    <span>{t.brideBadge}</span>
                  </div>
                  <Heart className="w-5 h-5 text-[#C5A059] fill-[#C5A059]/30" />
                </div>

                <p className="font-amiri text-lg sm:text-xl text-[#580E18] font-bold leading-relaxed mb-4 break-words [overflow-wrap:anywhere]">
                  "{t.brideMessage}"
                </p>
              </div>

              <div className="text-left font-tajawal font-bold text-sm text-[#8C6D33] pt-3 border-t border-[#C5A059]/30">
                — {t.brideNameSignature}
              </div>
            </div>

          </div>

        </div>

        {/* REAL GUEST WISHES ONLY (Pulled live from Google Sheet CSV) — ANCHOR ID: wishes-list */}
        {displayedSubset.length > 0 && (
          <div id="wishes-list" className="w-full max-w-4xl mx-auto pt-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-thmanyah text-2xl text-[#580E18] font-bold flex items-center gap-2">
                <span>{t.wishesHeading}</span>
                {isLoadingSheet && (
                  <span className="text-xs font-tajawal font-normal text-[#8C6D33] animate-pulse">(جاري التحديث...)</span>
                )}
              </h3>
              <button
                onClick={rotateSubsets}
                title="تحديث التهاني"
                className="p-2 rounded-full text-[#8C6D33] hover:text-[#580E18] transition-colors cursor-pointer"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full min-w-0">
              {displayedSubset.map((wish, idx) => (
                <div
                  key={`${wish.name}-${idx}`}
                  className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-md flex flex-col justify-between hover:shadow-lg transition-all min-w-0 max-w-full overflow-hidden"
                >
                  <p className="font-amiri text-base text-[#2D1E18] leading-relaxed mb-4 break-words [overflow-wrap:anywhere] [word-break:break-word] max-w-full min-w-0">
                    "{wish.message}"
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#C5A059]/20 min-w-0 gap-2">
                    <span className="font-tajawal font-bold text-xs sm:text-sm text-[#580E18] truncate flex-1 min-w-0">
                      {wish.name}
                    </span>
                    <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/40 shrink-0" />
                  </div>
                </div>
              ))}
            </div>

            {/* ELEGANT "VIEW ALL WISHES" BUTTON BELOW THE DISPLAYED WISH CARDS */}
            <div className="mt-8 text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFFDF9] border border-[#C5A059]/60 text-[#580E18] font-tajawal font-bold text-sm shadow-sm hover:bg-[#FAF6F0] hover:border-[#C5A059] transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                <span>{t.viewAllWishesBtn}</span>
                {wishes.length > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#580E18]/10 text-[#580E18] font-tajawal font-bold">
                    {wishes.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}

      </ScrollReveal>

      {/* ALL WISHES ELEGANT OVERLAY MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm animate-fade-in overflow-hidden"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#FFFDF9] border-2 border-[#C5A059]/50 rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col transform transition-all duration-300 scale-100 min-w-0"
            onClick={(e) => e.stopPropagation()}
            dir={t.switchLang === 'English' ? 'rtl' : 'ltr'}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-8 sm:py-6 border-b border-[#C5A059]/30 flex items-center justify-between bg-gradient-to-r from-[#FFFDF9] via-[#FAF6F0] to-[#FFFDF9] shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#580E18]/10 text-[#580E18] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-[#580E18]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-thmanyah text-lg sm:text-2xl text-[#580E18] font-bold truncate">
                    {t.allWishesModalTitle}
                  </h3>
                  {wishes.length > 0 && (
                    <span className="font-tajawal text-xs text-[#8C6D33] font-bold block">
                      ({wishes.length} {t.wishesHeading})
                    </span>
                  )}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label={t.closeModal}
                className="p-2 rounded-full text-[#580E18] hover:bg-[#580E18]/10 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body: Scrollable list of ALL real guest wishes */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto overflow-x-hidden flex-1 space-y-4 max-w-full min-w-0">
              {wishes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-w-0">
                  {wishes.map((wish, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-[#FAF6F0] border border-[#C5A059]/35 shadow-sm flex flex-col justify-between hover:shadow-md transition-all min-w-0 max-w-full overflow-hidden"
                    >
                      <p className="font-amiri text-base sm:text-lg text-[#2D1E18] leading-relaxed mb-4 break-words [overflow-wrap:anywhere] [word-break:break-word] max-w-full min-w-0">
                        "{wish.message}"
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-[#C5A059]/20 min-w-0 gap-2">
                        <span className="font-tajawal font-bold text-xs sm:text-sm text-[#580E18] truncate flex-1 min-w-0">
                          {wish.name}
                        </span>
                        <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/40 shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="font-tajawal text-base text-[#8C6D33] font-bold">
                    لا توجد تهانٍ من الضيوف بعد.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
