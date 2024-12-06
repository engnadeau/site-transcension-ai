import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Solutions', href: '/#solutions' },
    { text: 'Industries', href: '/#use-case-intelligent-systems' },
    { text: 'Impact', href: '/#how-we-drive-impact' },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'Overview', href: '/#solutions' },
        { text: 'Agent-Based Intelligence', href: '/#solutions' },
        { text: 'Multi-Modal Data Fusion', href: '/#solutions' },
        { text: 'Human-AI Collaboration', href: '/#solutions' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { text: 'Intelligent Systems', href: '/#use-case-intelligent-systems' },
        { text: 'Security and Defense', href: '/#use-case-security' },
        { text: 'Logistics and Supply Chain', href: '/#use-case-logistics' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms of Service', href: '/terms' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/transcension-ai' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/transcension-ai' },
  ],
  footNote: `© ${new Date().getFullYear()} Transcension AI - Transforming Data Into Intelligence. All rights reserved.`,
};
