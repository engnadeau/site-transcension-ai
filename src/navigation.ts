import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/about') },
    { text: 'Expertise', href: '/#services' },
    { text: 'Impact', href: '/#how-we-drive-impact' },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Expertise',
      links: [
        { text: 'Strategic Advisory', href: '/#services' },
        { text: 'Technology Due Diligence', href: '/#services' },
        { text: 'Corporate Innovation', href: '/#services' },
        { text: 'Speaking Engagements', href: '/#services' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { text: 'AI & Robotics', href: '/#why-transcension' },
        { text: 'Security & Defense', href: '/#why-transcension' },
        { text: 'Logistics & Supply Chain', href: '/#why-transcension' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms of Service', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/transcension-ai' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/transcension-ai' },
  ],
  footNote: `© ${new Date().getFullYear()} Transcension AI - Strategic AI & Emerging Tech Consulting. All rights reserved.`,
};
