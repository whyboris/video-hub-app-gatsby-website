// this order dictates the dropdown order and what gets shown
const LanguageList = [
  `ar`, // Arabic
  `bn`, // Bengali
  `zh`, // Cheneze (Simplified)
  `cs`, // Czech
  `nl`, // Dutch - Nederlands
  `en`, // English
  `fr`, // French
  `de`, // German
  `ha`, // Hausa
  `hi`, // Hindi
  `it`, // Italian
  `ja`, // Japanese
  `ko`, // Korean
  `ms`, // Malay
  `pl`, // Polish
  `pt`, // Portuguese (Portugal, Brazil)
  `ru`, // Russian
  `es`, // Spanish
  `tr`, // Turkish
  `uk`, // Ukrainian
  `ur`, // Urdu
  `vi`, // Vietnamese
  // `id`, // ID -- identify the felds
];

// All languages here
const languageSetup = {
  ar: {
    english: `Arabic`,
    native: `عربى`
  },
  bn: {
    english: `Bengali`,
    native: `বাংলা`
  },
  cs: {
    english: `Czech`,
    native: `Česky`
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
  ms: {
    english: `Malay`,
    native: `Melayu`
  },
  nl: {
    english: `Dutch`,
    native: `Nederlands`
  },
  pt: {
    english: `Portuguese`,
    native: `Português`
  },
  pl: {
    english: `Polish`,
    native: `Polski`
  },
  ru: {
    english: `Russian`,
    native: `Русский`
  },
  tr: {
    english: `Turkish`,
    native: `Türkçe`
  },
  uk: {
    english: `Ukrainian`,
    native: `Українська`
  },
  ur: {
    english: `Urdu`,
    native: ` اردو`
  },
  vi: {
    english: `Vietnamese`,
    native: `Tiếng Việt`
  },
  zh: {
    english: `Chinese`,
    native: `中文`
  }
};

module.exports.languageNames = languageSetup;

module.exports.LanguageList = LanguageList;
