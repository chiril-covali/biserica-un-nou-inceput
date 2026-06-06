export interface BibleBook {
  id: string;
  name: {
    ro: string;
    en: string;
    ru: string;
  };
  chapters: number;
}

export const OLD_TESTAMENT: BibleBook[] = [
  { id: 'gen', name: { ro: 'Geneza', en: 'Genesis', ru: 'Бытие' }, chapters: 50 },
  { id: 'exo', name: { ro: 'Exodul', en: 'Exodus', ru: 'Исход' }, chapters: 40 },
  { id: 'lev', name: { ro: 'Leviticul', en: 'Leviticus', ru: 'Левит' }, chapters: 27 },
  { id: 'num', name: { ro: 'Numeri', en: 'Numbers', ru: 'Числа' }, chapters: 36 },
  { id: 'deu', name: { ro: 'Deuteronomul', en: 'Deuteronomy', ru: 'Второзаконие' }, chapters: 34 },
  { id: 'jos', name: { ro: 'Iosua', en: 'Joshua', ru: 'Иисус Навин' }, chapters: 24 },
  { id: 'jdg', name: { ro: 'Judecătorii', en: 'Judges', ru: 'Судьи' }, chapters: 21 },
  { id: 'rut', name: { ro: 'Rut', en: 'Ruth', ru: 'Руфь' }, chapters: 4 },
  { id: '1sa', name: { ro: '1 Samuel', en: '1 Samuel', ru: '1-я Царств' }, chapters: 31 },
  { id: '2sa', name: { ro: '2 Samuel', en: '2 Samuel', ru: '2-я Царств' }, chapters: 24 },
  { id: '1ki', name: { ro: '1 Împărați', en: '1 Kings', ru: '3-я Царств' }, chapters: 22 },
  { id: '2ki', name: { ro: '2 Împărați', en: '2 Kings', ru: '4-я Царств' }, chapters: 25 },
  { id: '1ch', name: { ro: '1 Cronici', en: '1 Chronicles', ru: '1-я Паралипоменон' }, chapters: 29 },
  { id: '2ch', name: { ro: '2 Cronici', en: '2 Chronicles', ru: '2-я Паралипоменон' }, chapters: 36 },
  { id: 'ezr', name: { ro: 'Ezra', en: 'Ezra', ru: 'Ездра' }, chapters: 10 },
  { id: 'neh', name: { ro: 'Neemia', en: 'Nehemiah', ru: 'Неемия' }, chapters: 13 },
  { id: 'est', name: { ro: 'Estera', en: 'Esther', ru: 'Есфирь' }, chapters: 10 },
  { id: 'job', name: { ro: 'Iov', en: 'Job', ru: 'Иов' }, chapters: 42 },
  { id: 'psa', name: { ro: 'Psalmii', en: 'Psalms', ru: 'Псалтирь' }, chapters: 150 },
  { id: 'pro', name: { ro: 'Proverbele', en: 'Proverbs', ru: 'Притчи' }, chapters: 31 },
  { id: 'ecc', name: { ro: 'Eclesiastul', en: 'Ecclesiastes', ru: 'Екклесиаст' }, chapters: 12 },
  { id: 'sng', name: { ro: 'Cântarea Cântărilor', en: 'Song of Solomon', ru: 'Песнь Песней' }, chapters: 8 },
  { id: 'isa', name: { ro: 'Isaia', en: 'Isaiah', ru: 'Исаия' }, chapters: 66 },
  { id: 'jer', name: { ro: 'Ieremia', en: 'Jeremiah', ru: 'Иеремия' }, chapters: 52 },
  { id: 'lam', name: { ro: 'Plângerile lui Ieremia', en: 'Lamentations', ru: 'Плач Иеремии' }, chapters: 5 },
  { id: 'ezk', name: { ro: 'Ezechiel', en: 'Ezekiel', ru: 'Иезекииль' }, chapters: 48 },
  { id: 'dan', name: { ro: 'Daniel', en: 'Daniel', ru: 'Даниил' }, chapters: 12 },
  { id: 'hos', name: { ro: 'Osea', en: 'Hosea', ru: 'Осия' }, chapters: 14 },
  { id: 'jol', name: { ro: 'Ioel', en: 'Joel', ru: 'Иоиль' }, chapters: 3 },
  { id: 'amo', name: { ro: 'Amos', en: 'Amos', ru: 'Амос' }, chapters: 9 },
  { id: 'oba', name: { ro: 'Obadia', en: 'Obadiah', ru: 'Авдий' }, chapters: 1 },
  { id: 'jon', name: { ro: 'Iona', en: 'Jonah', ru: 'Иона' }, chapters: 4 },
  { id: 'mic', name: { ro: 'Mica', en: 'Micah', ru: 'Михей' }, chapters: 7 },
  { id: 'nam', name: { ro: 'Naum', en: 'Nahum', ru: 'Наум' }, chapters: 3 },
  { id: 'hab', name: { ro: 'Habacuc', en: 'Habakkuk', ru: 'Аввакум' }, chapters: 3 },
  { id: 'zep', name: { ro: 'Tefania', en: 'Zephaniah', ru: 'Софония' }, chapters: 3 },
  { id: 'hag', name: { ro: 'Hagai', en: 'Haggai', ru: 'Аггей' }, chapters: 2 },
  { id: 'zec', name: { ro: 'Zaharia', en: 'Zechariah', ru: 'Захария' }, chapters: 14 },
  { id: 'mal', name: { ro: 'Maleahi', en: 'Malachi', ru: 'Малахия' }, chapters: 4 },
];

export const NEW_TESTAMENT: BibleBook[] = [
  { id: 'mat', name: { ro: 'Matei', en: 'Matthew', ru: 'Матфей' }, chapters: 28 },
  { id: 'mrk', name: { ro: 'Marcu', en: 'Mark', ru: 'Марк' }, chapters: 16 },
  { id: 'luk', name: { ro: 'Luca', en: 'Luke', ru: 'Лука' }, chapters: 24 },
  { id: 'jhn', name: { ro: 'Ioan', en: 'John', ru: 'Иоанн' }, chapters: 21 },
  { id: 'act', name: { ro: 'Faptele Apostolilor', en: 'Acts', ru: 'Деяния' }, chapters: 28 },
  { id: 'rom', name: { ro: 'Romani', en: 'Romans', ru: 'Римлянам' }, chapters: 16 },
  { id: '1co', name: { ro: '1 Corinteni', en: '1 Corinthians', ru: '1-е Коринфянам' }, chapters: 16 },
  { id: '2co', name: { ro: '2 Corinteni', en: '2 Corinthians', ru: '2-е Коринфянам' }, chapters: 13 },
  { id: 'gal', name: { ro: 'Galateni', en: 'Galatians', ru: 'Галатам' }, chapters: 6 },
  { id: 'eph', name: { ro: 'Efeseni', en: 'Ephesians', ru: 'Ефесянам' }, chapters: 6 },
  { id: 'php', name: { ro: 'Filipeni', en: 'Philippians', ru: 'Филиппийцам' }, chapters: 4 },
  { id: 'col', name: { ro: 'Coloseni', en: 'Colossians', ru: 'Колоссянам' }, chapters: 4 },
  { id: '1th', name: { ro: '1 Tesaloniceni', en: '1 Thessalonians', ru: '1-е Фессалоникийцам' }, chapters: 5 },
  { id: '2th', name: { ro: '2 Tesaloniceni', en: '2 Thessalonians', ru: '2-е Фессалоникийцам' }, chapters: 3 },
  { id: '1ti', name: { ro: '1 Timotei', en: '1 Timothy', ru: '1-е Тимофею' }, chapters: 6 },
  { id: '2ti', name: { ro: '2 Timotei', en: '2 Timothy', ru: '2-е Тимофею' }, chapters: 4 },
  { id: 'tit', name: { ro: 'Tit', en: 'Titus', ru: 'Титу' }, chapters: 3 },
  { id: 'phm', name: { ro: 'Filimon', en: 'Philemon', ru: 'Филимону' }, chapters: 1 },
  { id: 'heb', name: { ro: 'Evrei', en: 'Hebrews', ru: 'Евреям' }, chapters: 13 },
  { id: 'jas', name: { ro: 'Iacov', en: 'James', ru: 'Иакова' }, chapters: 5 },
  { id: '1pe', name: { ro: '1 Petru', en: '1 Peter', ru: '1-е Петра' }, chapters: 5 },
  { id: '2pe', name: { ro: '2 Petru', en: '2 Peter', ru: '2-е Петра' }, chapters: 3 },
  { id: '1jn', name: { ro: '1 Ioan', en: '1 John', ru: '1-е Иоанна' }, chapters: 5 },
  { id: '2jn', name: { ro: '2 Ioan', en: '2 John', ru: '2-е Иоанна' }, chapters: 1 },
  { id: '3jn', name: { ro: '3 Ioan', en: '3 John', ru: '3-е Иоанна' }, chapters: 1 },
  { id: 'jud', name: { ro: 'Iuda', en: 'Jude', ru: 'Иуды' }, chapters: 1 },
  { id: 'rev', name: { ro: 'Apocalipsa', en: 'Revelation', ru: 'Откровение' }, chapters: 22 },
];

export const ALL_BOOKS = [...OLD_TESTAMENT, ...NEW_TESTAMENT];

