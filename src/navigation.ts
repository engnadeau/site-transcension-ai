import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Solutions', href: '/#platform' },
    { text: 'Industries', href: '/#use-case-robotics' },
    { text: 'Insights', href: '/#how-we-drive-impact' },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'Overview', href: '/#platform' },
        { text: 'Data Transformation', href: '/#platform' },
        { text: 'Computer Vision Models', href: '/#platform' },
        { text: 'Edge-Optimized AI', href: '/#platform' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { text: 'Robotics and Industry 4.0', href: '/#use-case-robotics' },
        { text: 'Security and Defense', href: '/#use-case-security' },
        { text: 'AgTech and Precision Farming', href: '/#use-case-agtech' },
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
