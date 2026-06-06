import type { Ministry, Value } from '@/types';
import { Book, Flame } from 'lucide-react';

const ChristianCross = ({ className, ...props }: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 3v18M7 8h10" />
  </svg>
);

export const churchValues: Value[] = [
  {
    id: 'glorificam',
    title: 'Glorificăm pe Isus',
    description:
      'Credem că Isus Hristos este centrul vieții și al lucrării noastre. Dorim ca prin închinare, rugăciune și ascultare de Dumnezeu să-I aducem slavă în fiecare aspect al vieții.',
    icon: ChristianCross
  },
  {
    id: 'transformati',
    title: 'Suntem transformați prin Cuvânt',
    description:
      'Biblia este autoritatea supremă pentru credință și viață. Prin studiul și aplicarea Scripturii, Dumnezeu ne modelează caracterul și ne conduce spre maturitate spirituală.',
    icon: Book
  },
  {
    id: 'slujim',
    title: 'Slujim prin puterea Duhului Sfânt',
    description:
      'Credem că Dumnezeu lucrează și astăzi prin Duhul Sfânt. El ne echipează pentru slujire, ne călăuzește și ne dă puterea de a fi martori ai lui Hristos în lume.',
    icon: Flame
  },
];

export const ministries: Ministry[] = [
  {
    id: 'kids',
    title: 'Kids Un Nou Început',
    schedule: 'În fiecare duminică',
    image: '/poze/copii3.JPG-optimized.webp',
    images: [
      '/poze/copii3.JPG-optimized.webp',
      '/poze/copii1.JPG-optimized.webp',
      '/poze/copii2.JPG-optimized.webp'
    ],
    description:
      'Copiii au parte de un timp special adaptat vârstei lor, într-un mediu sigur și plin de bucurie. Prin jocuri, cântări, activități creative și lecții biblice, cei mici descoperă dragostea lui Dumnezeu alături de învățători dedicați.',
  },
  {
    id: 'tineri',
    title: 'Tinerii Un Nou Început',
    schedule: 'Miercuri seara',
    link: 'https://www.instagram.com/tineret.unnouinceput/',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=70',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=70'
    ],
    description:
      'Tinerii se adună pentru părtășie, închinare, rugăciune și studiu biblic. Ne dorim să formăm o generație care Îl iubește pe Dumnezeu și trăiește pentru gloria Lui.',
  },
  {
    id: 'femei',
    title: 'Femeile Un Nou Început',
    schedule: 'Periodic',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=70',
    description:
      'Surorile se întâlnesc pentru părtășie, rugăciune, studiu biblic și încurajare reciprocă, construind relații autentice și o credință puternică.',
  },
  {
    id: 'barbati',
    title: 'Micul Dejun cu Rugăciune – Bărbați',
    schedule: 'Sâmbătă, ora 07:00',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=70',
    images: [
      'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=70',
      '/poze/rug.JPG-optimized.webp'
    ],
    description:
      'Bărbații se întâlnesc pentru rugăciune, părtășie și încurajare spirituală înainte de începerea unei noi zile.',
  },
  {
    id: 'inchinare',
    title: 'Laudă și Închinare',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=70',
    description:
      'O echipă dedicată care se pregătește pentru a conduce biserica în închinare prin muzică și cântare, atât la serviciile divine de duminică, cât și la întâlnirile tinerilor.',
  },
  {
    id: 'bunvenit',
    title: 'Echipa de Bun Venit',
    image: '/poze/intampin.JPG-optimized.webp',
    images: [
      '/poze/intampin.JPG-optimized.webp',
      '/poze/vi.JPG-optimized.webp'
    ],
    description:
      'Credem în puterea ospitalității creștine. Printr-un zâmbet, o îmbrățișare și o inimă deschisă, ne dorim ca fiecare persoană să se simtă iubită și binevenită.',
  },
  {
    id: 'media',
    title: 'Echipa Media Un Nou Început',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=70',
    description:
      'Folosim creativitatea și tehnologia pentru a răspândi Evanghelia. Prin fotografie, video, social media și transmisii online, dorim să ducem mesajul lui Hristos cât mai departe.',
  },
];
