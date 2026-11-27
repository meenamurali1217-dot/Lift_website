import React from 'react';
import './SocialLinks.css';

/**
 * Floating Social Media Bar for BlueStar Lifts
 *
 * Configurable via props:
 * @param {Object} links - Custom links for platforms { instagram, facebook, x, whatsapp }
 * @param {string} whatsappNumber - Custom WhatsApp phone number (with country code, no + or spaces)
 * @param {string} whatsappMessage - Default pre-filled message for WhatsApp inquiry
 */
export default function SocialLinks({
  links = {},
  whatsappNumber = '919876543210',
  whatsappMessage = 'Hello BlueStar Lifts, I would like to inquire about your elevator solutions.'
}) {
  const encodedMessage = encodeURIComponent(whatsappMessage);

  const socialPlatforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      url: links.instagram || 'https://instagram.com/bluestarlifts',
      ariaLabel: 'Visit BlueStar Lifts on Instagram',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: links.facebook || 'https://facebook.com/bluestarlifts',
      ariaLabel: 'Visit BlueStar Lifts on Facebook',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      url: links.x || 'https://x.com/bluestarlifts',
      ariaLabel: 'Visit BlueStar Lifts on X',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: links.whatsapp || `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      ariaLabel: 'Chat with BlueStar Lifts on WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.475-.15-.675.15-.2.301-.776.979-.95 1.18-.175.201-.35.226-.651.076-.301-.15-1.272-.469-2.424-1.496-.895-.8-1.5-1.787-1.675-2.088-.175-.301-.019-.464.131-.614.136-.134.301-.35.452-.526.15-.175.2-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.233-.244-.587-.492-.507-.676-.516l-.576-.01c-.2 0-.526.075-.802.376-.275.301-1.052 1.028-1.052 2.509 0 1.48 1.077 2.91 1.228 3.111.15.2 2.12 3.238 5.136 4.542.718.311 1.278.497 1.714.636.721.229 1.377.197 1.896.12.578-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.429-.075-.125-.275-.201-.576-.351zM12.042 21.657h-.002c-1.724 0-3.414-.463-4.896-1.34l-.351-.209-3.642.955.972-3.551-.229-.364c-.964-1.534-1.472-3.309-1.472-5.13 0-5.32 4.329-9.65 9.653-9.65 2.578 0 5.001 1.005 6.824 2.828 1.823 1.824 2.827 4.248 2.827 6.827-.002 5.32-4.331 9.644-9.656 9.644zM12.042 0C5.399 0 0 5.399 0 12.042c0 2.122.553 4.194 1.603 6.014L0 24l6.108-1.603c1.758.959 3.748 1.465 5.934 1.465 6.643 0 12.042-5.399 12.042-12.042C24.084 5.399 18.685 0 12.042 0z" />
        </svg>
      )
    }
  ];

  return (
    <aside
      className="floating-social-container"
      aria-label="Social media links and direct contact"
    >
      {socialPlatforms.map((platform) => (
        <a
          key={platform.id}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`floating-social-btn ${platform.id}`}
          aria-label={platform.ariaLabel}
        >
          {platform.icon}
          <span className="social-tooltip" role="tooltip">
            {platform.name}
          </span>
        </a>
      ))}
    </aside>
  );
}
