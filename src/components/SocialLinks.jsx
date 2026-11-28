import React from 'react';
import { SOCIAL_CONFIG } from '../data/socialLinks';
import './SocialLinks.css';

/**
 * Floating Social Media Bar for BlueStar Lifts
 * Displays 6 circular floating social media icons on the right side:
 * 1. Instagram
 * 2. Facebook
 * 3. X (Twitter)
 * 4. WhatsApp
 * 5. YouTube
 * 6. Google (Reviews / Maps)
 */
export default function SocialLinks({ links = {} }) {
  const config = { ...SOCIAL_CONFIG, ...links };
  const encodedWhatsappMsg = encodeURIComponent(config.whatsappMessage);

  const socialPlatforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      url: config.instagram,
      ariaLabel: 'Visit BlueStar Lifts on Instagram',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 fill-white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: config.facebook,
      ariaLabel: 'Visit BlueStar Lifts on Facebook',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 fill-white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    {
      id: 'x',
      name: 'X (Twitter)',
      url: config.x,
      ariaLabel: 'Visit BlueStar Lifts on X',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5 fill-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      url: `https://wa.me/${config.whatsappNumber}?text=${encodedWhatsappMsg}`,
      ariaLabel: 'Chat with BlueStar Lifts on WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 fill-white">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.475-.15-.675.15-.2.301-.776.979-.95 1.18-.175.201-.35.226-.651.076-.301-.15-1.272-.469-2.424-1.496-.895-.8-1.5-1.787-1.675-2.088-.175-.301-.019-.464.131-.614.136-.134.301-.35.452-.526.15-.175.2-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.233-.244-.587-.492-.507-.676-.516l-.576-.01c-.2 0-.526.075-.802.376-.275.301-1.052 1.028-1.052 2.509 0 1.48 1.077 2.91 1.228 3.111.15.2 2.12 3.238 5.136 4.542.718.311 1.278.497 1.714.636.721.229 1.377.197 1.896.12.578-.087 1.78-.727 2.031-1.429.25-.702.25-1.304.175-1.429-.075-.125-.275-.201-.576-.351zM12.042 21.657h-.002c-1.724 0-3.414-.463-4.896-1.34l-.351-.209-3.642.955.972-3.551-.229-.364c-.964-1.534-1.472-3.309-1.472-5.13 0-5.32 4.329-9.65 9.653-9.65 2.578 0 5.001 1.005 6.824 2.828 1.823 1.824 2.827 4.248 2.827 6.827-.002 5.32-4.331 9.644-9.656 9.644zM12.042 0C5.399 0 0 5.399 0 12.042c0 2.122.553 4.194 1.603 6.014L0 24l6.108-1.603c1.758.959 3.748 1.465 5.934 1.465 6.643 0 12.042-5.399 12.042-12.042C24.084 5.399 18.685 0 12.042 0z" />
        </svg>
      )
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: config.youtube,
      ariaLabel: 'Visit BlueStar Lifts on YouTube',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 fill-white">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      id: 'google',
      name: 'Google Reviews & Location',
      url: config.google,
      ariaLabel: 'Find BlueStar Lifts on Google Maps and Reviews',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
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
