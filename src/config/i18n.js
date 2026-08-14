import contentData from '../data/content.json';

export const buildTranslations = (lang) => {
  const isEn = lang === 'en';
  return {
    heroOverlay: contentData.opening?.overlayText?.[lang],
    openEnvelopeHint: contentData.opening?.openEnvelopeHint?.[lang],
    muteText: contentData.opening?.muteAudio?.[lang],
    unmuteText: contentData.opening?.unmuteAudio?.[lang],
    countdownHeading: contentData.countdown?.heading?.[lang],
    days: contentData.countdown?.days?.[lang],
    hours: contentData.countdown?.hours?.[lang],
    minutes: contentData.countdown?.minutes?.[lang],
    seconds: contentData.countdown?.seconds?.[lang],
    eventDate: contentData.event?.eventDate,
    
    bismillah: contentData.invitation?.bismillah?.[lang],
    poemText: contentData.invitation?.poem?.text,
    hostsInviteLine: contentData.invitation?.hostsInviteLine?.[lang],
    hostSaad: contentData.invitation?.hostSaad?.[lang],
    hostAnwar: contentData.invitation?.hostAnwar?.[lang],
    hostsConnector: contentData.invitation?.hostsConnector?.[lang] || (isEn ? "and" : "و"),
    invitePhrase: contentData.invitation?.invitePhrase?.[lang],
    andWord: contentData.invitation?.connector?.[lang],
    groomTitle: contentData.invitation?.groomTitle?.[lang],
    brideTitle: contentData.invitation?.brideTitle?.[lang],
    groomName: contentData.invitation?.groomName?.[lang],
    brideName: contentData.invitation?.brideName?.[lang],
    groomFather: contentData.invitation?.groomFather?.[lang],
    brideFather: contentData.invitation?.brideFather?.[lang],
    colDayTime: contentData.invitation?.cardSummaryTime?.[lang],
    colVenueLoc: contentData.invitation?.cardSummaryVenue?.[lang],
    colDateMonth: contentData.invitation?.cardSummaryDate?.[lang],
    modestyNote: contentData.invitation?.modestyNote?.[lang],
    closingVerseText: contentData.invitation?.closingText?.[lang],

    eventDetailsTitle: contentData.event?.sectionTitle?.[lang],
    dateLabel: contentData.event?.dateLabel?.[lang],
    dateValueDay: contentData.event?.dateDay?.[lang],
    dateValueNum: contentData.event?.dateNum?.[lang],
    dateValueMonth: contentData.event?.dateMonthYear?.[lang],
    venueLabel: contentData.event?.venueLabel?.[lang],
    venueValueName: contentData.event?.venueName?.[lang],
    locationValueCity: contentData.event?.locationCity?.[lang],
    timeLabel: contentData.event?.timeLabel?.[lang],
    timeValueHour: contentData.event?.timeHour?.[lang],
    timeValuePrayer: contentData.event?.timePrayer?.[lang],
    mapUrl: contentData.event?.mapUrl,
    mapEmbedUrl: contentData.event?.mapEmbedUrl,
    copyEventDetailsBtn: contentData.event?.copyDetailsButton?.[lang],
    eventDetailsCopied: contentData.event?.copyDetailsSuccess?.[lang],
    addToCalendar: contentData.event?.addToCalendarButton?.[lang],
    openMap: contentData.event?.openMapButton?.[lang],

    congratsTitle: contentData.wishesSection?.title?.[lang],
    nameLabel: contentData.wishesSection?.nameLabel?.[lang],
    namePlaceholder: contentData.wishesSection?.namePlaceholder?.[lang],
    messageLabel: contentData.wishesSection?.messageLabel?.[lang],
    messagePlaceholder: contentData.wishesSection?.messagePlaceholder?.[lang],
    submitBtn: contentData.wishesSection?.submitButton?.[lang],
    sendingBtn: contentData.wishesSection?.sendingButton?.[lang],
    thankYouMsg: contentData.wishesSection?.successMessage?.[lang],
    sendAnother: contentData.wishesSection?.sendAnotherButton?.[lang],
    wishesHeading: contentData.wishesSection?.wishesHeading?.[lang],

    groomBadge: contentData.groomMessage?.badge?.[lang],
    groomNameSignature: contentData.groomMessage?.signature?.[lang],
    groomMessage: contentData.groomMessage?.text?.[lang],

    brideBadge: contentData.brideMessage?.badge?.[lang],
    brideNameSignature: contentData.brideMessage?.signature?.[lang],
    brideMessage: contentData.brideMessage?.text?.[lang],

    viewAllWishesBtn: contentData.wishesSection?.viewAllWishesButton?.[lang],
    allWishesModalTitle: contentData.wishesSection?.allWishesModalTitle?.[lang],
    closeModal: contentData.wishesSection?.closeModalButton?.[lang],

    shareText: contentData.sharing?.text?.[lang],
    shareSignature: contentData.sharing?.signature?.[lang],
    shareWhatsappBtn: contentData.sharing?.whatsappButton?.[lang],
    copyLinkBtn: contentData.sharing?.copyLinkButton?.[lang],
    linkCopiedText: contentData.sharing?.linkCopiedFeedback?.[lang],

    footerThankYou: contentData.footer?.thankYouText?.[lang],
    footerSignature: contentData.footer?.signature?.[lang],
    switchLang: isEn ? "العربية" : "English",
  };
};

export const getTranslations = (lang) => buildTranslations(lang);

export const translations = {
  get ar() { return buildTranslations('ar'); },
  get en() { return buildTranslations('en'); },
};
