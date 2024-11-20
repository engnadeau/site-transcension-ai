import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Platform', href: '/#platform' },
    { text: 'Use Cases', href: '/#use-case-robotics' },
    { text: 'Impact', href: '/#how-we-drive-impact' },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Platform',
      links: [
        { text: 'Overview', href: '/#platform' },
        { text: 'Modular Tools', href: '/#platform' },
        { text: '80/20 Solutions', href: '/#platform' },
        { text: 'Private Equity-Ready', href: '/#platform' },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { text: 'Robotics and Industry 4.0', href: '/#use-case-robotics' },
        { text: 'Operational Intelligence', href: '/#use-case-operations' },
        { text: 'Generative AI for Insights', href: '/#use-case-llm' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'Large Language Models', href: '/#use-case-llm' },
        { text: 'Computer Vision', href: '/#use-case-robotics' },
        { text: 'Predictive Maintenance', href: '/#use-case-operations' },
        { text: 'AI-Powered Forecasting', href: '/#use-case-operations' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Privacy Policy', href: '/privacy-policy' },
        { text: 'Terms of Service', href: '/terms' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/transcension-ai' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/transcension-ai' },
  ],
  footNote: `© ${new Date().getFullYear()} Transcension AI - Scalable AI for Real-World Impact. All rights reserved.`,
};
