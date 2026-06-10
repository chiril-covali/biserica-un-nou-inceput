export interface TeamMember {
  id: string;
  name: string;
  roleKey: string;
  detailsKey: string;
  image: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'lider-inchinare',
    name: 'Dumitru Vrabie',
    roleKey: 'about.team.inchinare.role',
    detailsKey: 'about.team.inchinare.details',
    image: '/placeholder.svg',
    socialLinks: {
      facebook: '#',
      instagram: '#',
    }
  },
  {
    id: 'lider-tineret',
    name: 'Alexandru Cojocaru',
    roleKey: 'about.team.tineret.role',
    detailsKey: 'about.team.tineret.details',
    image: '/placeholder.svg',
    socialLinks: {
      facebook: '#',
      instagram: '#',
    }
  },
  {
    id: 'lider-kids',
    name: 'Elena Fedula',
    roleKey: 'about.team.kids.role',
    detailsKey: 'about.team.kids.details',
    image: '/placeholder.svg',
    socialLinks: {
      facebook: '#',
      instagram: '#',
    }
  }
];
