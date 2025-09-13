import { NavigationItem, StandaloneLink } from '@/types/navigation';

export const navigationItems: NavigationItem[] = [
  {
    id: 'creative',
    title: 'Creative Platform',
    items: [
      { title: 'Voice Library', href: '#' },
      { title: 'Speech Synthesis', href: '#' },
      { title: 'Voice Cloning', href: '#' }
    ]
  },
  {
    id: 'agents',
    title: 'Agents Platform',
    items: [
      { title: 'Conversational AI', href: '#' },
      { title: 'Voice Agents', href: '#' }
    ]
  },
  {
    id: 'developers',
    title: 'Developers',
    items: [
      { title: 'API Documentation', href: '#' },
      { title: 'SDKs', href: '#' },
      { title: 'Tutorials', href: '#' }
    ]
  },
  {
    id: 'resources',
    title: 'Resources',
    items: [
      { title: 'Blog', href: '#' },
      { title: 'Help Center', href: '#' },
      { title: 'Case Studies', href: '#' }
    ]
  }
];

export const standaloneLinks: StandaloneLink[] = [
  { title: 'Enterprise', href: '#' },
  { title: 'Pricing', href: '#' }
];