import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Solutions', href: getPermalink('/#solutions') },
    { text: 'FAQs', href: getPermalink('/#faqs') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'Get Started', href: getPermalink('/#solutions') }],
};

export const footerData = {
  links: [
    { title: 'Company', links: [{ text: 'About Us', href: getPermalink('/#vision') }] },
    { title: 'Support', links: [{ text: 'Contact', href: getPermalink('/contact') }] },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/transcension-ai' },
  ],
  footNote: `© ${new Date().getFullYear()} Transcension AI - All rights reserved.`,
};
