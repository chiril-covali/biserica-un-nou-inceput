export interface TranslatedString {
  ro: string;
  en: string;
  ru: string;
}

export interface Value {
  id: string;
  title: TranslatedString;
  description: TranslatedString;
  icon?: any;
}

export interface Ministry {
  id: string;
  title: TranslatedString;
  description: TranslatedString;
  schedule?: TranslatedString;
  image: string;
  images?: string[];
  link?: string;
}

export const churchValues: Value[] = [
  {
    id: 'glorificam',
    title: {
      ro: 'Glorificăm pe Isus',
      en: 'Glorifying Jesus',
      ru: 'Прославляем Иисуса'
    },
    description: {
      ro: 'Credem că Isus Hristos este centrul vieții și al lucrării noastre. Dorim ca prin închinare, rugăciune și ascultare de Dumnezeu să-I aducem slavă în fiecare aspect al vieții.',
      en: 'We believe that Jesus Christ is the center of our lives and work. Through worship, prayer, and obedience to God, we seek to bring Him glory in every aspect of life.',
      ru: 'Мы верим, что Иисус Христос является центром нашей жизни и служения. Мы стремимся прославлять Его во всех аспектах нашей жизни через поклонение, молитву и послушание Богу.'
    },
  },
  {
    id: 'transformati',
    title: {
      ro: 'Suntem transformați prin Cuvânt',
      en: 'Transformed by the Word',
      ru: 'Преображаемся через Слово'
    },
    description: {
      ro: 'Biblia este autoritatea supremă pentru credință și viață. Prin studiul și aplicarea Scripturii, Dumnezeu ne modelează caracterul și ne conduce spre maturitate spirituală.',
      en: 'The Bible is the supreme authority for faith and life. Through the study and application of Scripture, God shapes our character and leads us toward spiritual maturity.',
      ru: 'Библия является высшим авторитетом для веры и жизни. Через изучение и применение Писания Бог формирует наш характер и ведет нас к духовной зрелости.'
    },
    icon: Book
  },
  {
    id: 'slujim',
    title: {
      ro: 'Slujim prin puterea Duhului Sfânt',
      en: 'Serving through the Power of the Holy Spirit',
      ru: 'Служим силой Святого Духа'
    },
    description: {
      ro: 'Credem că Dumnezeu lucrează și astăzi prin Duhul Sfânt. El ne echipează pentru slujire, ne călăuzește și ne dă puterea de a fi martori ai lui Hristos în lume.',
      en: 'We believe that God still works today through the Holy Spirit. He equips us for service, guides us, and gives us the power to be witnesses for Christ in the world.',
      ru: 'Мы верим, что Бог и сегодня действует через Святого Духа. Он снаряжает нас для служения, направляет нас и дает нам силу быть свидетелями Христа в мире.'
    },
    icon: Flame
  },
];

export const ministries: Ministry[] = [
  {
    id: 'kids',
    title: {
      ro: 'Kids Un Nou Început',
      en: 'Kids New Beginning',
      ru: 'Дети Новое Начало'
    },
    schedule: {
      ro: 'În fiecare duminică',
      en: 'Every Sunday',
      ru: 'Каждое воскресенье'
    },
    image: '/poze/copii3.JPG-optimized.webp',
    images: [
      '/poze/copii3.JPG-optimized.webp',
      '/poze/copii1.JPG-optimized.webp',
      '/poze/copii2.JPG-optimized.webp'
    ],
    description: {
      ro: 'Copiii au parte de un timp special adaptat vârstei lor, într-un mediu sigur și plin de bucurie. Prin jocuri, cântări, activități creative și lecții biblice, cei mici descoperă dragostea lui Dumnezeu alături de învățători dedicați.',
      en: 'Children enjoy a special time adapted to their age, in a safe and joyful environment. Through games, songs, creative activities, and Bible lessons, the little ones discover God\'s love alongside dedicated teachers.',
      ru: 'Дети проводят время, адаптированное к их возрасту, в безопасной и радостной обстановке. Через игры, песни, творческие занятия и библейские уроки малыши открывают для себя любовь Божью вместе с преданными учителями.'
    },
  },
  {
    id: 'tineri',
    title: {
      ro: 'Tinerii Un Nou Început',
      en: 'Youth New Beginning',
      ru: 'Молодежь Новое Начало'
    },
    schedule: {
      ro: 'Miercuri seara',
      en: 'Wednesday evening',
      ru: 'Среда вечер'
    },
    link: 'https://www.instagram.com/tineret.unnouinceput/',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=70'
    ],
    description: {
      ro: 'Tinerii se adună pentru părtășie, închinare, rugăciune și studiu biblic. Ne dorim să formăm o generație care Îl iubește pe Dumnezeu și trăiește pentru gloria Lui.',
      en: 'Youth gather for fellowship, worship, prayer, and Bible study. We want to form a generation that loves God and lives for His glory.',
      ru: 'Молодежь собирается для общения, поклонения, молитвы и изучения Библии. Мы хотим сформировать поколение, которое любит Бога и живет для Его славы.'
    },
  },
  {
    id: 'femei',
    title: {
      ro: 'Femeile Un Nou Început',
      en: 'Women New Beginning',
      ru: 'Женщины Новое Начало'
    },
    schedule: {
      ro: 'Periodic',
      en: 'Periodically',
      ru: 'Периодически'
    },
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=70',
    description: {
      ro: 'Surorile se întâlnesc pentru părtășie, rugăciune, studiu biblic și încurajare reciprocă, construind relații autentice și o credință puternică.',
      en: 'Women meet for fellowship, prayer, Bible study, and mutual encouragement, building authentic relationships and a strong faith.',
      ru: 'Сестры встречаются для общения, молитвы, изучения Библии и взаимной поддержки, созидая искренние отношения и крепкую веру.'
    },
  },
  {
    id: 'barbati',
    title: {
      ro: 'Micul Dejun cu Rugăciune – Bărbați',
      en: 'Prayer Breakfast – Men',
      ru: 'Молитвенный завтрак – Мужчины'
    },
    schedule: {
      ro: 'Sâmbătă, ora 07:00',
      en: 'Saturday, 07:00',
      ru: 'Суббота, 07:00'
    },
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=70',
      '/poze/rug.JPG-optimized.webp'
    ],
    description: {
      ro: 'Bărbații se întâlnesc pentru rugăciune, părtășie și încurajare spirituală înainte de începerea unei noi zile.',
      en: 'Men meet for prayer, fellowship, and spiritual encouragement before starting a new day.',
      ru: 'Мужчины встречаются для молитвы, общения и духовной поддержки перед началом нового дня.'
    },
  },
  {
    id: 'inchinare',
    title: {
      ro: 'Laudă și Închinare',
      en: 'Praise and Worship',
      ru: 'Хвала и поклонение'
    },
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=70',
    description: {
      ro: 'O echipă dedicată care se pregătește pentru a conduce biserica în închinare prin muzică și cântare, atât la serviciile divine de duminică, cât și la întâlnirile tinerilor.',
      en: 'A dedicated team preparing to lead the church in worship through music and singing, both at Sunday divine services and youth meetings.',
      ru: 'Преданная команда, которая готовится вести церковь в поклонении через музыку и пение, как на воскресных богослужениях, так и на молодежных встречах.'
    },
  },
  {
    id: 'bunvenit',
    title: {
      ro: 'Echipa de Bun Venit',
      en: 'Welcome Team',
      ru: 'Команда приветствия'
    },
    image: '/poze/intampin.JPG-optimized.webp',
    images: [
      '/poze/intampin.JPG-optimized.webp',
      '/poze/vi.JPG-optimized.webp'
    ],
    description: {
      ro: 'Credem în puterea ospitalității creștine. Printr-un zâmbet, o îmbrățișare și o inimă deschisă, ne dorim ca fiecare persoană să se simtă iubită și binevenită.',
      en: 'We believe in the power of Christian hospitality. Through a smile, a hug, and an open heart, we want every person to feel loved and welcome.',
      ru: 'Мы верим в силу христианского гостеприимства. Через улыбку, объятия и открытое сердце мы хотим, чтобы каждый человек чувствовал себя любимым и желанным гостем.'
    },
  },
  {
    id: 'media',
    title: {
      ro: 'Echipa Media Un Nou Început',
      en: 'Media Team New Beginning',
      ru: 'Медиа-команда Новое Начало'
    },
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=70',
    description: {
      ro: 'Folosim creativitatea și tehnologia pentru a răspândi Evanghelia. Prin fotografie, video, social media și transmisii online, dorim să ducem mesajul lui Hristos cât mai departe.',
      en: 'We use creativity and technology to spread the Gospel. Through photography, video, social media, and online broadcasts, we want to take the message of Christ as far as possible.',
      ru: 'Мы используем креативность и технологии для распространения Евангелия. С помощью фотографии, видео, социальных сетей и онлайн-трансляций мы хотим разнести весть о Христе как можно дальше.'
    },
  },
];

