export interface BibleBook {
  id: string;
  index: number;
  name: {
    ro: string;
    en: string;
    ru: string;
  };
  chapters: number;
}

export const OLD_TESTAMENT: BibleBook[] = [
  { id: 'gen', index: 1, name: { ro: 'Geneza', en: 'Genesis', ru: 'Бытие' }, chapters: 50 },
  { id: 'exo', index: 2, name: { ro: 'Exodul', en: 'Exodus', ru: 'Исход' }, chapters: 40 },
  { id: 'lev', index: 3, name: { ro: 'Leviticul', en: 'Leviticus', ru: 'Левит' }, chapters: 27 },
  { id: 'num', index: 4, name: { ro: 'Numeri', en: 'Numbers', ru: 'Числа' }, chapters: 36 },
  { id: 'deu', index: 5, name: { ro: 'Deuteronomul', en: 'Deuteronomy', ru: 'Второзаконие' }, chapters: 34 },
  { id: 'jos', index: 6, name: { ro: 'Iosua', en: 'Joshua', ru: 'Иисус Навин' }, chapters: 24 },
  { id: 'jdg', index: 7, name: { ro: 'Judecătorii', en: 'Judges', ru: 'Судьи' }, chapters: 21 },
  { id: 'rut', index: 8, name: { ro: 'Rut', en: 'Ruth', ru: 'Руфь' }, chapters: 4 },
  { id: '1sa', index: 9, name: { ro: '1 Samuel', en: '1 Samuel', ru: '1-я Царств' }, chapters: 31 },
  { id: '2sa', index: 10, name: { ro: '2 Samuel', en: '2 Samuel', ru: '2-я Царств' }, chapters: 24 },
  { id: '1ki', index: 11, name: { ro: '1 Împărați', en: '1 Kings', ru: '3-я Царств' }, chapters: 22 },
  { id: '2ki', index: 12, name: { ro: '2 Împărați', en: '2 Kings', ru: '4-я Царств' }, chapters: 25 },
  { id: '1ch', index: 13, name: { ro: '1 Cronici', en: '1 Chronicles', ru: '1-я Паралипоменон' }, chapters: 29 },
  { id: '2ch', index: 14, name: { ro: '2 Cronici', en: '2 Chronicles', ru: '2-я Паралипоменон' }, chapters: 36 },
  { id: 'ezr', index: 15, name: { ro: 'Ezra', en: 'Ezra', ru: 'Ездра' }, chapters: 10 },
  { id: 'neh', index: 16, name: { ro: 'Neemia', en: 'Nehemiah', ru: 'Неемия' }, chapters: 13 },
  { id: 'est', index: 17, name: { ro: 'Estera', en: 'Esther', ru: 'Есфирь' }, chapters: 10 },
  { id: 'job', index: 18, name: { ro: 'Iov', en: 'Job', ru: 'Иов' }, chapters: 42 },
  { id: 'psa', index: 19, name: { ro: 'Psalmii', en: 'Psalms', ru: 'Псалмы' }, chapters: 150 },
  { id: 'pro', index: 20, name: { ro: 'Proverbele', en: 'Proverbs', ru: 'Притчи' }, chapters: 31 },
  { id: 'ecc', index: 21, name: { ro: 'Eclesiastul', en: 'Ecclesiastes', ru: 'Екклесиаст' }, chapters: 12 },
  { id: 'sng', index: 22, name: { ro: 'Cântarea Cântărilor', en: 'Song of Solomon', ru: 'Песнь песней' }, chapters: 8 },
  { id: 'isa', index: 23, name: { ro: 'Isaia', en: 'Isaiah', ru: 'Исаия' }, chapters: 66 },
  { id: 'jer', index: 24, name: { ro: 'Ieremia', en: 'Jeremiah', ru: 'Иеремия' }, chapters: 52 },
  { id: 'lam', index: 25, name: { ro: 'Plângerile lui Ieremia', en: 'Lamentations', ru: 'Плач Иеремии' }, chapters: 5 },
  { id: 'ezk', index: 26, name: { ro: 'Ezechiel', en: 'Ezekiel', ru: 'Иезекииль' }, chapters: 48 },
  { id: 'dan', index: 27, name: { ro: 'Daniel', en: 'Daniel', ru: 'Даниил' }, chapters: 12 },
  { id: 'hos', index: 28, name: { ro: 'Osea', en: 'Hosea', ru: 'Осия' }, chapters: 14 },
  { id: 'jol', index: 29, name: { ro: 'Ioel', en: 'Joel', ru: 'Иоиль' }, chapters: 3 },
  { id: 'amo', index: 30, name: { ro: 'Amos', en: 'Amos', ru: 'Амос' }, chapters: 9 },
  { id: 'oba', index: 31, name: { ro: 'Obadia', en: 'Obadiah', ru: 'Авдий' }, chapters: 1 },
  { id: 'jon', index: 32, name: { ro: 'Iona', en: 'Jonah', ru: 'Иона' }, chapters: 4 },
  { id: 'mic', index: 33, name: { ro: 'Mica', en: 'Micah', ru: 'Михей' }, chapters: 7 },
  { id: 'nam', index: 34, name: { ro: 'Naum', en: 'Nahum', ru: 'Наум' }, chapters: 3 },
  { id: 'hab', index: 35, name: { ro: 'Habacuc', en: 'Habakkuk', ru: 'Аввакум' }, chapters: 3 },
  { id: 'zep', index: 36, name: { ro: 'Tefania', en: 'Zephaniah', ru: 'Софония' }, chapters: 3 },
  { id: 'hag', index: 37, name: { ro: 'Hagai', en: 'Haggai', ru: 'Аггей' }, chapters: 2 },
  { id: 'zec', index: 38, name: { ro: 'Zaharia', en: 'Zechariah', ru: 'Захария' }, chapters: 14 },
  { id: 'mal', index: 39, name: { ro: 'Maleahi', en: 'Malachi', ru: 'Малахия' }, chapters: 4 },
];

export const NEW_TESTAMENT: BibleBook[] = [
  { id: 'mat', index: 40, name: { ro: 'Matei', en: 'Matthew', ru: 'Матфей' }, chapters: 28 },
  { id: 'mrk', index: 41, name: { ro: 'Marcu', en: 'Mark', ru: 'Марк' }, chapters: 16 },
  { id: 'luk', index: 42, name: { ro: 'Luca', en: 'Luke', ru: 'Лука' }, chapters: 24 },
  { id: 'jhn', index: 43, name: { ro: 'Ioan', en: 'John', ru: 'Иоанн' }, chapters: 21 },
  { id: 'act', index: 44, name: { ro: 'Faptele Apostolilor', en: 'Acts', ru: 'Деяния' }, chapters: 28 },
  { id: 'jas', index: 45, name: { ro: 'Iacov', en: 'James', ru: 'Иакова' }, chapters: 5 },
  { id: '1pe', index: 46, name: { ro: '1 Petru', en: '1 Peter', ru: '1-е Петра' }, chapters: 5 },
  { id: '2pe', index: 47, name: { ro: '2 Petru', en: '2 Peter', ru: '2-е Петра' }, chapters: 3 },
  { id: '1jn', index: 48, name: { ro: '1 Ioan', en: '1 John', ru: '1-е Иоанна' }, chapters: 5 },
  { id: '2jn', index: 49, name: { ro: '2 Ioan', en: '2 John', ru: '2-е Иоанна' }, chapters: 1 },
  { id: '3jn', index: 50, name: { ro: '3 Ioan', en: '3 John', ru: '3-е Иоанна' }, chapters: 1 },
  { id: 'jud', index: 51, name: { ro: 'Iuda', en: 'Jude', ru: 'Иуда' }, chapters: 1 },
  { id: 'rom', index: 52, name: { ro: 'Romani', en: 'Romans', ru: 'Римлянам' }, chapters: 16 },
  { id: '1co', index: 53, name: { ro: '1 Corinteni', en: '1 Corinthians', ru: '1-е Коринфянам' }, chapters: 16 },
  { id: '2co', index: 54, name: { ro: '2 Corinteni', en: '2 Corinthians', ru: '2-е Коринфянам' }, chapters: 13 },
  { id: 'gal', index: 55, name: { ro: 'Galateni', en: 'Galatians', ru: 'Галатам' }, chapters: 6 },
  { id: 'eph', index: 56, name: { ro: 'Efeseni', en: 'Ephesians', ru: 'Ефесянам' }, chapters: 6 },
  { id: 'php', index: 57, name: { ro: 'Filipeni', en: 'Philippians', ru: 'Филиппийцам' }, chapters: 4 },
  { id: 'col', index: 58, name: { ro: 'Coloseni', en: 'Colossians', ru: 'Колоссянам' }, chapters: 4 },
  { id: '1th', index: 59, name: { ro: '1 Tesaloniceni', en: '1 Thessalonians', ru: '1-е Фессалоникийцам' }, chapters: 5 },
  { id: '2th', index: 60, name: { ro: '2 Tesaloniceni', en: '2 Thessalonians', ru: '2-е Фессалоникийцам' }, chapters: 3 },
  { id: '1ti', index: 61, name: { ro: '1 Timotei', en: '1 Timothy', ru: '1-е Тимофею' }, chapters: 6 },
  { id: '2ti', index: 62, name: { ro: '2 Timotei', en: '2 Timothy', ru: '2-е Тимофею' }, chapters: 4 },
  { id: 'tit', index: 63, name: { ro: 'Tit', en: 'Titus', ru: 'Титу' }, chapters: 3 },
  { id: 'phm', index: 64, name: { ro: 'Filimon', en: 'Philemon', ru: 'Филимону' }, chapters: 1 },
  { id: 'heb', index: 65, name: { ro: 'Evrei', en: 'Hebrews', ru: 'Евреям' }, chapters: 13 },
  { id: 'rev', index: 66, name: { ro: 'Apocalipsa', en: 'Revelation', ru: 'Откровение' }, chapters: 22 },
];

export const ALL_BOOKS = [...OLD_TESTAMENT, ...NEW_TESTAMENT];
export const bibleBooks = ALL_BOOKS;

