import type { Speaker, ScheduleEvent, Sponsor, Partner } from './types'

export const SPEAKERS: Speaker[] = [
  {
    id: 'illia',
    name: 'Illia Polosukhin',
    organization: 'NEAR Protocol',
    title: 'Co-Founder',
    imageUrl: '/img/07-Illia-Polosukhin-1.jpg',
    accentColor: '#65D56E',
  },
  {
    id: 'jessica',
    name: 'Jessica Scrimale',
    organization: 'Oracle',
    title: 'Vice President, Product Strategy, AI',
    imageUrl: '/img/35-Jessica-Scrimale.jpg',
    accentColor: '#59C2E8',
  },
  {
    id: 'lukasz',
    name: 'Lukasz Kaiser',
    organization: 'OpenAI',
    title: 'Researcher',
    imageUrl: '/img/17-Lukasz-Kaiser-1.jpg',
    accentColor: '#00c8ff',
  },
]

const NALIN: Speaker = {
  id: 'nalin',
  name: 'Nalin Mittal',
  organization: 'Google',
  title: 'Product Lead, Web3',
  imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
  accentColor: '#F1B139',
}

const MATT: Speaker = {
  id: 'matt',
  name: 'Matt White',
  organization: 'Linux Foundation',
  title: 'Global CTO AI, Linux Foundation. CTO, Agentic AI Foundation. CTO, PyTorch',
  imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
  accentColor: '#59C2E8',
}

const NOELLE: Speaker = {
  id: 'noelle',
  name: 'Noëlle Becker Moreno',
  organization: 'Edge & Node',
  title: 'CMO Edge & Node, Co-Founder of The House',
  imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100',
  accentColor: '#65D56E',
}

const CAMERON: Speaker = {
  id: 'cameron',
  name: 'Cameron Dennis',
  organization: 'NEAR AI',
  title: 'Director of AI, Growth & Infra',
  imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100',
  accentColor: '#59C2E8',
}

const CHRIS: Speaker = {
  id: 'chris',
  name: 'Chris Briseno',
  organization: 'NEAR Foundation',
  title: 'Chief Marketing Officer',
  imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100',
  accentColor: '#59C2E8',
}

export const SCHEDULE_EVENTS: ScheduleEvent[] = [
  {
    id: 'welcome',
    startTime: '10:55 AM',
    endTime: '11:00 AM',
    location: 'Singularity',
    title: 'Welcome Remarks',
    speakers: [CHRIS],
    day: 1,
  },
  {
    id: 'unified-commerce',
    startTime: '11:00 AM',
    endTime: '11:20 AM',
    location: 'Singularity',
    title: 'The Unified Commerce Layer for the Agentic Era',
    description:
      'AI agents are quickly becoming economic actors, with personal assistant frameworks taking actions and transacting on behalf of people and businesses. Illia explains how NEAR AI and NEAR Intents are converging as the unified commerce layer, driving agentic commerce across all asset types and providing secure, private infrastructure for AI tools.',
    speakers: [SPEAKERS[0]],
    day: 1,
  },
  {
    id: 'autonomous-systems',
    startTime: '11:20 AM',
    endTime: '11:50 AM',
    location: 'Singularity',
    title: 'Autonomous Systems In Practice',
    description:
      'How real autonomous systems are assembled, evaluated, and constrained in practice, beyond demos and single-model abstractions.',
    speakers: [NALIN, MATT, NOELLE],
    moderator: CAMERON,
    day: 1,
  },
  {
    id: 'scaling-intelligence',
    startTime: '11:50 AM',
    endTime: '12:00 PM',
    location: 'Singularity',
    title: 'Scaling Intelligence and Generalization',
    description:
      'Why generalization, not raw scale, determines whether modern AI systems become usable, reliable intelligence in the real world.',
    speakers: [SPEAKERS[2]],
    day: 1,
  },
]

export const SPONSORS: Sponsor[] = [
  { name: 'BitGo', displayType: 'text', className: 'font-bold text-blue-600' },
  { name: 'Bitwise', displayType: 'text', className: 'font-serif text-xl' },
  { name: 'BLOCKCHANGE', displayType: 'text', className: 'font-mono font-bold tracking-widest text-xs' },
  { name: 'BLOCKDAEMON', displayType: 'text', className: 'font-bold text-xs' },
  { name: 'brave', displayType: 'text', className: 'font-bold text-orange-500', iconText: '🦁' },
  { name: 'DECASONIC', displayType: 'text', className: 'font-light tracking-wider' },
  { name: 'DoubleZero', displayType: 'text', className: 'font-serif' },
  { name: 'flipside', displayType: 'text', className: 'font-bold' },
  { name: 'G—20', displayType: 'text', className: 'font-helvetica text-2xl' },
  { name: 'Gate Ventures', displayType: 'text', className: 'font-bold text-blue-500' },
  { name: 'gumi Cryptos', displayType: 'text', className: 'font-serif' },
  { name: 'HARTMANN CAPITAL', displayType: 'text', className: 'font-light text-xs text-blue-400 text-center leading-tight' },
  { name: 'Kenetic', displayType: 'text', className: 'font-bold text-blue-800' },
  { name: 'manatt', displayType: 'box', bg: 'bg-yellow-500', textColor: 'text-white' },
  { name: 'NEAR MOBILE', displayType: 'text', className: 'font-bold' },
  { name: 'PANTERA', displayType: 'text', className: 'font-black tracking-widest text-xs', iconText: '|||' },
  { name: 'Stableflow', displayType: 'text', className: 'font-bold' },
  { name: 'SVRN', displayType: 'text', className: 'font-black text-2xl' },
  { name: 'Venice', displayType: 'text', className: 'font-serif italic text-2xl' },
  { name: '', displayType: 'empty' },
]

export const COMMUNITY_PARTNERS: Partner[] = [
  { name: 'Cooperative Futures Institute', category: 'community', icon: '🏛️', className: 'font-serif text-[8px] text-center' },
  { name: 'CRYPTO NOMADS', category: 'community', className: 'font-serif text-center font-bold' },
  { name: 'Edge & Node', category: 'community', className: 'font-bold text-blue-900' },
  { name: 'frontiertower', category: 'community', className: 'font-bold text-sm', icon: 'ft' },
  { name: 'Mission Bit', category: 'community', className: 'font-bold bg-black text-white px-2 py-1 text-xs' },
  { name: 'SVAI', category: 'community', className: 'font-black text-xl', extra: 'SILICON VALLEY AI HUB' },
  { name: 'The AI Collective', category: 'community', className: 'font-serif text-gray-600 text-sm', icon: 'C' },
  { name: '', category: 'community' },
]

export const MEDIA_PARTNERS: Partner[] = [
  { name: 'THE ROLLUP', category: 'media', className: 'font-black text-2xl tracking-tighter', icon: '🌀' },
  { name: 'YAP GLOBAL', category: 'media', className: 'text-red-500' },
]

export const PREVIOUS_NEARCON_IMAGES = [
  '/img/Near_pictures_-2-2.png',
  '/img/Near_pictures_-9.png',
  '/img/Near_pictures_-1.png',
  '/img/Near_pictures_-10.jpg',
]

export const RUNNING_NUMBERS =
  '352678901 | 60190811329048584726 | 13859794286574829381 | 13454565236475800732 | 42765432182739425 352678901 | 60190811329048584726 | 13859794286574829381 | 678958474564300263718 | 13847916745362117782 | 8901 | 60190811329048584726 | 13859794286574829381 | 823958474564300263718 | 24847916745362117782 | 13847'
