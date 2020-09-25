// this order dictates the dropdown order and what gets shown
const LanguageList = [
  `ar`, // Arabic
  `zh`, // Cheneze (Simplified)
  `en`, // English
  `fr`, // French
  `de`, // German
  `ha`, // Hausa
  `hi`, // Hindi
  `it`, // Italian
  `ja`, // Japanese
  `ko`, // Korean
  `pt`, // Portuguese (Portugal, Brazil)
  `ru`, // Russian
  `es`, // Spanish
  `tr`, // Turkish
  `ur`, // Urdu
  // `id`, // ID -- identify the felds
];

// All languages here
const languageSetup = {
  ar: {
    english: `Arabic`,
    native: `عربى`
  },
  de: {
    english: `German`,
    native: `Deutsch`
  },
  en: {
    english: `English`,
    native: `English`
  },
  es: {
    english: `Spanish`,
    native: `Español`
  },
  fr: {
    english: `French`,
    native: `Français`
  },
  hi: {
    english: `Hindi`,
    native: `हिंदी`
  },
  ha: {
    english: `Hausa`,
    native: `Hausa`
  },
  id: {
    english: `ID`,
    native: `Identification`
  },
  ja: {
    english: `Japanese`,
    native: `日本語`
  },
  it: {
    english: `Italian`,
    native: `Italiano`
  },
  ko: {
    english: `Korean`,
    native: `한국어`
  },
  pt: {
    english: `Portuguese`,
    native: `Português`
  },
  ru: {
    english: `Russian`,
    native: `Русский`
  },
  tr: {
    english: `Turkish`,
    native: `Türkçe`
  },
  ur: {
    english: `Urdu`,
    native: ` اردو`
  },
  zh: {
    english: `Chinese`,
    native: `中文`
  }
};

module.exports.languageNames = languageSetup;

module.exports.LanguageList = LanguageList;
