import React, { useState, useEffect } from 'react';
import { GOOGLE_FORM_CONFIG, INITIAL_WISHES, parseGoogleSheetCsv } from '../config/googleForm';
import { Heart, Send, Sparkles, RefreshCw, Crown } from 'lucide-react';
import confetti from 'canvas-confetti';
import ScrollReveal from './ScrollReveal';

export default function CongratulationsWall({ t }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wishes, setWishes] = useState(INITIAL_WISHES);
  const [groomWish, setGroomWish] = useState(null);
  const [displayedSubset, setDisplayedSubset] = useState([]);
  const [imgError, setImgError] = useState(false);
  const [isLoadingSheet, setIsLoadingSheet] = useState(false);

  // Helper to identify if a wish belongs to the groom
  const isGroomEntry = (entryName) => {
    if (!entryName) return false;
    const n = entryName.toLowerCase();
    return n.includes("محمد سعد") || n.includes("العريس") || n.includes("groom");
  };

  // Fetch live published Google Sheet CSV data on mount
  useEffect(() => {
    async function fetchLiveSheetWishes() {
      if (!GOOGLE_FORM_CONFIG.sheetCsvUrl) return;
      setIsLoadingSheet(true);
      try {
        const response = await fetch(GOOGLE_FORM_CONFIG.sheetCsvUrl);
        if (response.ok) {
          const csvText = await response.text();
          const parsed = parseGoogleSheetCsv(csvText);
          if (parsed && parsed.length > 0) {
            setWishes(parsed);
          }
        }
      } catch (err) {
        console.warn("Could not fetch live sheet CSV, using default wishes:", err);
      } finally {
        setIsLoadingSheet(false);
      }
    }
    fetchLiveSheetWishes();
  }, []);

  // Process wishes to isolate groom's pinned message and select 3 random guest wishes
  useEffect(() => {
    if (wishes && wishes.length > 0) {
      // Find groom's entry if present
      const foundGroom = wishes.find(w => isGroomEntry(w.name));
      if (foundGroom) {
        setGroomWish(foundGroom);
      } else {
        // Fallback default groom pinned message if not yet submitted in sheet
        setGroomWish({
          name: "محمد سعد (العريس)",
          message: "الحمد لله الذي بنعمته تتم الصالحات، أسأل الله أن يبارك لنا وأن يجمع بيننا في خير ورضا 🤍"
        });
      }

      // Filter out groom's entry from regular guest pool
      const guestWishes = wishes.filter(w => !isGroomEntry(w.name));
      const shuffled = [...guestWishes].sort(() => 0.5 - Math.random());
      setDisplayedSubset(shuffled.slice(0, 3));
    }
  }, [wishes]);

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
      if (isGroomEntry(name)) {
        setGroomWish(newWish);
      } else {
        setWishes(prev => [newWish, ...prev]);
        setDisplayedSubset(prev => [newWish, ...prev.slice(0, 2)]);
      }
      
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
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
    const guestWishes = wishes.filter(w => !isGroomEntry(w.name));
    const shuffled = [...guestWishes].sort(() => 0.5 - Math.random());
    setDisplayedSubset(shuffled.slice(0, 3));
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-16 bg-[#FAF6F0] flex flex-col items-center justify-center">
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

        {/* UNIFIED 2-COLUMN CARD: Couple Illustration + Message Form */}
        <div className="rounded-3xl bg-[#FFFDF9] border border-[#C5A059]/40 shadow-2xl overflow-hidden mb-16 grid grid-cols-1 lg:grid-cols-12 items-center">
          
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

        {/* WISHES WALL: PINNED GROOM MESSAGE CARD AT TOP + 3 ROTATING GUEST WISHES */}
        <div className="w-full max-w-4xl mx-auto space-y-6">
          
          {/* PINNED GROOM MESSAGE HIGHLIGHTED CARD */}
          {groomWish && (
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FFFDF9] to-[#F7ECE9] border-2 border-[#C5A059] shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#580E18] text-[#E5C158] font-tajawal text-xs font-bold shadow-sm">
                  <Crown className="w-4 h-4 fill-[#E5C158]" />
                  <span>تهنئة العريس</span>
                </div>
                <Heart className="w-5 h-5 text-[#580E18] fill-[#580E18]/20" />
              </div>
              <p className="font-amiri text-lg sm:text-xl text-[#580E18] font-bold leading-relaxed mb-3">
                "{groomWish.message}"
              </p>
              <div className="text-left font-tajawal font-bold text-sm text-[#8C6D33]">
                — {groomWish.name}
              </div>
            </div>
          )}

          {/* ROTATING 3 GUEST WISHES */}
          <div>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayedSubset.map((wish, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/35 shadow-md flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <p className="font-amiri text-base sm:text-lg text-[#2D1E18] leading-relaxed mb-4">
                    "{wish.message}"
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#C5A059]/20">
                    <span className="font-tajawal font-bold text-sm text-[#580E18]">
                      {wish.name}
                    </span>
                    <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/40" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </ScrollReveal>
    </section>
  );
}
