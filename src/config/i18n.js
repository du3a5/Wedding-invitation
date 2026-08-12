import contentData from '../data/content.json';

const buildTranslations = (lang) => {
  const isEn = lang === 'en';
  return {
    heroOverlay: contentData.opening?.overlayText?.[lang] || (isEn ? "By Allah's Grace... Joy Brings Us Together" : "بِإِذْنِ اللهِ... يَجْمَعُنَا فَرَح"),
    openEnvelopeHint: contentData.opening?.openEnvelopeHint?.[lang] || (isEn ? "Tap to Open Invitation ✦" : "اضغط لفتح الدعوة ✦"),
    muteText: contentData.opening?.muteAudio?.[lang] || (isEn ? "Mute Audio" : "صوت الخلفية"),
    unmuteText: contentData.opening?.unmuteAudio?.[lang] || (isEn ? "Play Audio" : "تشغيل الصوت"),
    countdownHeading: contentData.countdown?.heading?.[lang] || (isEn ? "May Allah Bless Us — Our Day Draws Near" : "اللَّهُمَّ بَارِكْ، اقْتَرَبَ مَوْعِدُنَا"),
    days: contentData.countdown?.days?.[lang] || (isEn ? "Days" : "أيام"),
    hours: contentData.countdown?.hours?.[lang] || (isEn ? "Hours" : "ساعات"),
    minutes: contentData.countdown?.minutes?.[lang] || (isEn ? "Minutes" : "دقائق"),
    seconds: contentData.countdown?.seconds?.[lang] || (isEn ? "Seconds" : "ثواني"),
    eventDate: contentData.event?.eventDate || "2026-09-10",
    
    bismillah: contentData.invitation?.bismillah?.[lang] || (isEn ? "In the Name of Allah, the Most Gracious, the Most Merciful" : "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيم"),
    poemText: contentData.invitation?.poem?.text || "دَنَتْ قُطُوفُ المُنَى وَالسَّعْدُ مُبْتَسِمُ        وَطَابَ فِي لَيْلَةِ الأَفْرَاحِ جَمْعُكُُم\nفَأَقْبِلُوا كَيْ يَتَمَ النُّورُ مُكْتَمِلًا               فَإِنَّمَا عِطْرُ هَذَا الحَفْلِ وَصْلَكُمُ",
    hostsInviteLine: contentData.invitation?.hostsInviteLine?.[lang] || (isEn ? "With hearts overflowing with love and embracing the joy of gathering together, Sheikh Saad Mokhtar and Major Mohammed Anwar cordially invite you to celebrate the wedding of their children." : "بقلوب تفيض بالمحبة، وتتسع لفرحة اللقاء، يتشرف كل من:"),
    hostSaad: contentData.invitation?.hostSaad?.[lang] || (isEn ? "Sheikh Saad Mokhtar" : "الشيخ/ سعد مختار"),
    hostAnwar: contentData.invitation?.hostAnwar?.[lang] || (isEn ? "Major Mohammed Anwar" : "الرائد/ محمد أنور"),
    invitePhrase: contentData.invitation?.invitePhrase?.[lang] || (isEn ? "to celebrate the wedding of their children" : "بدعوتكم لحضور حفل زفاف نجليهما"),
    andWord: contentData.invitation?.connector?.[lang] || (isEn ? "to" : "على"),
    groomTitle: contentData.invitation?.groomTitle?.[lang] || (isEn ? "ENG." : "المهندس"),
    brideTitle: contentData.invitation?.brideTitle?.[lang] || (isEn ? "MRS." : "السيدة"),
    groomName: contentData.invitation?.groomName?.[lang] || (isEn ? "Mohammed" : "محمد"),
    brideName: contentData.invitation?.brideName?.[lang] || (isEn ? "Ghada" : "غادة"),
    groomFather: contentData.invitation?.groomFather?.[lang] || (isEn ? "Saad" : "بن سعد"),
    brideFather: contentData.invitation?.brideFather?.[lang] || (isEn ? "Mohammed" : "بنت محمد"),
    colDayTime: contentData.invitation?.cardSummaryTime?.[lang] || (isEn ? "Thursday — 8 PM" : "الخميس / 8 / مساءً"),
    colVenueLoc: contentData.invitation?.cardSummaryVenue?.[lang] || (isEn ? "Al-Akaber Palace — Fayrouz Hall" : "قصر الأكابر — قاعة الفيروز"),
    colDateMonth: contentData.invitation?.cardSummaryDate?.[lang] || (isEn ? "10 September 2026" : "2026 / 10 / سبتمبر"),
    modestyNote: contentData.invitation?.modestyNote?.[lang] || (isEn ? "Our joy is made complete by the beauty of your presence. We hope our evening will be graced with the modesty, dignity, and grace for which you are known." : "تكتمل فرحتنا بجمال أرواحكم، ورجاؤنا أن تزدان ليلتنا بالستر والحشمة المعهودة في كريماتكم."),
    closingVerseText: contentData.invitation?.closingText?.[lang] || (isEn ? "Your presence is a joy added to our own. Please do not deprive us of the pleasure of your company. May your homes always be filled with happiness and blessings." : "حضوركم فرح يضاف إلى فرحنا، فلا تحرمونا طيب اللقاء. دامت بيوتكم عامرة بالأفراح والمسرات."),

    eventDetailsTitle: contentData.event?.sectionTitle?.[lang] || (isEn ? "Event Details" : "تفاصيل الحفل"),
    dateLabel: contentData.event?.dateLabel?.[lang] || (isEn ? "Date" : "التاريخ"),
    dateValueDay: contentData.event?.dateDay?.[lang] || (isEn ? "Thursday" : "الخميس"),
    dateValueNum: contentData.event?.dateNum?.[lang] || (isEn ? "10" : "١٠"),
    dateValueMonth: contentData.event?.dateMonthYear?.[lang] || (isEn ? "September 2026" : "سبتمبر ٢٠٢٦"),
    venueLabel: contentData.event?.venueLabel?.[lang] || (isEn ? "Venue & Location" : "القاعة والموقع"),
    venueValueName: contentData.event?.venueName?.[lang] || (isEn ? "Al-Akaber Palace — Fayrouz Hall" : "قصر الأكابر — قاعة الفيروز"),
    locationValueCity: contentData.event?.locationCity?.[lang] || (isEn ? "Al Qanatir Al Khayriyah — Next to Raneen" : "بالقناطر الخيرية - بجوار رنين"),
    timeLabel: contentData.event?.timeLabel?.[lang] || (isEn ? "Time" : "الموعد"),
    timeValueHour: contentData.event?.timeHour?.[lang] || (isEn ? "8 PM" : "٨ مساءً"),
    timeValuePrayer: contentData.event?.timePrayer?.[lang] || (isEn ? "Immediately after Isha Prayer" : "بعد صلاة العشاء مباشرة"),
    mapUrl: contentData.event?.mapUrl || "https://maps.app.goo.gl/2hBMdzxPU49MBaMD8?g_st=iw",
    mapEmbedUrl: contentData.event?.mapEmbedUrl || "https://maps.google.com/maps?q=%D8%A7%D9%84%D9%82%D9%86%D8%A7%D8%B7%D8%B1+%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A%D8%A9+%D8%A8%D8%AC%D9%88%D8%A7%D8%B1+%D8%B1%D9%86%D9%8A%D9%86+,+Al+Qanatir+al+Khayriyah,+Egypt&hl=ar&output=embed",
    copyEventDetailsBtn: contentData.event?.copyDetailsButton?.[lang] || (isEn ? "Copy Event Details" : "نسخ تفاصيل الحفل"),
    eventDetailsCopied: contentData.event?.copyDetailsSuccess?.[lang] || (isEn ? "Event details copied" : "تم نسخ تفاصيل الحفل"),
    addToCalendar: contentData.event?.addToCalendarButton?.[lang] || (isEn ? "Add to Google Calendar" : "إضافة إلى تقويم Google"),
    openMap: contentData.event?.openMapButton?.[lang] || (isEn ? "Open in Google Maps" : "فتح الخريطة في Google Maps"),

    congratsTitle: contentData.wishesSection?.title?.[lang] || (isEn ? "Share Your Congratulations" : "شاركونا تهنئتكم"),
    nameLabel: contentData.wishesSection?.nameLabel?.[lang] || (isEn ? "Name" : "الاسم"),
    namePlaceholder: contentData.wishesSection?.namePlaceholder?.[lang] || (isEn ? "Enter your name..." : "اكتب اسمك هنا..."),
    messageLabel: contentData.wishesSection?.messageLabel?.[lang] || (isEn ? "Your Message / Wishes" : "رسالتكم / تهنئتكم"),
    messagePlaceholder: contentData.wishesSection?.messagePlaceholder?.[lang] || (isEn ? "Write your blessings and wishes for the couple..." : "اكتب مباركتك وكلماتك الطيبة للعروسين..."),
    submitBtn: contentData.wishesSection?.submitButton?.[lang] || (isEn ? "Send Congratulations" : "إرسال التهنئة"),
    sendingBtn: contentData.wishesSection?.sendingButton?.[lang] || (isEn ? "Sending..." : "جاري الإرسال..."),
    thankYouMsg: contentData.wishesSection?.successMessage?.[lang] || (isEn ? "Your message has been received. Thank you for sharing Mohammed and Ghada's joy 🤍" : "تم استلام تهنئتكم، شكرًا لمشاركتكم محمد وغادة فرحتهم 🤍"),
    sendAnother: contentData.wishesSection?.sendAnotherButton?.[lang] || (isEn ? "Send Another Message" : "إرسال تهنئة أخرى"),
    wishesHeading: contentData.wishesSection?.wishesHeading?.[lang] || (isEn ? "Wishes from Loved Ones" : "تهاني الأحبة"),

    groomBadge: contentData.groomMessage?.badge?.[lang] || (isEn ? "Groom's Message" : "تهنئة العريس"),
    groomNameSignature: contentData.groomMessage?.signature?.[lang] || (isEn ? "Mohammed Saad (Groom)" : "محمد سعد (العريس)"),
    groomMessage: contentData.groomMessage?.text?.[lang] || (isEn ? "I cannot express my overwhelming joy for this blessed occasion. May Allah unite us in goodness and peace. Thank you to everyone who shared and will share our joy, and to everyone who sincerely expressed their happiness for us. All my love, dear friends. See you at the hall, Insha'Allah." : "لا أحسن أعبر عن فرحتي العارمة بهذا الحدث الطيب المبارك وأن الله سيجمعنا بخير وعلى خير. شكرا لكل من شاركنا وسيشاركنا فرحتنا ولكل من عبر بصدق عن فرحه لنا. كل الحب أعزائي. نلقاكم في القاعة بإذن الله."),

    brideBadge: contentData.brideMessage?.badge?.[lang] || (isEn ? "Bride's Message" : "تهنئة العروس"),
    brideNameSignature: contentData.brideMessage?.signature?.[lang] || (isEn ? "Ghada Mohammed (Bride)" : "غادة محمد (العروس)"),
    brideMessage: contentData.brideMessage?.text?.[lang] || (isEn ? "Praise be to Allah Who has perfected His favor upon us and united us in love and mercy. May Allah grant us a blessed and joyful future in His grace and well-being. Thank you to everyone who showered us with sincere prayers and noble feelings, and to every soul who shared the joy of these unforgettable moments. To my sisters, aunts, and everyone who shared my happiness, I am deeply grateful to you all, and eagerly await the completion of our beautiful evening with your presence, Insha'Allah." : "الحمدلله الذي أتمّ نعمته علينا، وجمع بيننا في مودة ورحمة، أسأل الله أن يجعل قادم أيامنا نعيماً مباركاً في عفو وعافية. شُكراً لكل من غمرنا بصادق الدعوات ونبيل المشاعر، ولكل روحٍ شاركتنا بهجة هذه اللحظات التي لا تُنسى. لأخواتي وخالاتي وكل من شاركتني فرحتي، ممتنة لكم جميعاً، وبانتظار أن يكتمل قمر ليلتنا بحضوركم بإذن الله."),

    viewAllWishesBtn: contentData.wishesSection?.viewAllWishesButton?.[lang] || (isEn ? "View All Wishes" : "عرض جميع التهاني"),
    allWishesModalTitle: contentData.wishesSection?.allWishesModalTitle?.[lang] || (isEn ? "All Wishes from Loved Ones" : "جميع تهاني الأحبة والأصدقاء"),
    closeModal: contentData.wishesSection?.closeModalButton?.[lang] || (isEn ? "Close" : "إغلاق"),

    shareText: contentData.sharing?.text?.[lang] || (isEn ? "Your presence completes our joy 🤍" : "بحضوركم تكتمل فرحتنا 🤍"),
    shareSignature: contentData.sharing?.signature?.[lang] || (isEn ? "Mohammed ♥ Ghada — 10.9.2026" : "محمد♥غادة — ١٠.٩.٢٠٢٦"),
    shareWhatsappBtn: contentData.sharing?.whatsappButton?.[lang] || (isEn ? "WhatsApp" : "واتساب"),
    copyLinkBtn: contentData.sharing?.copyLinkButton?.[lang] || (isEn ? "Copy Link" : "نسخ الرابط"),
    linkCopiedText: contentData.sharing?.linkCopiedFeedback?.[lang] || (isEn ? "Copied ✓" : "تم النسخ ✓"),

    footerThankYou: contentData.footer?.thankYouText?.[lang] || (isEn ? "May your homes always be filled with joy and blessings" : "دامت دياركم عامرة بالأفراح والمسرات"),
    footerSignature: contentData.footer?.signature?.[lang] || (isEn ? "Mohammed ♥ Ghada — 10.9.2026" : "محمد♥غادة — ١٠.٩.٢٠٢٦"),
    switchLang: isEn ? "العربية" : "English",
  };
};

export const translations = {
  ar: buildTranslations('ar'),
  en: buildTranslations('en'),
};
