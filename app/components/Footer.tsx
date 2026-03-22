"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

const FOOTER_UNIVERSITIES = [
  "Amity University",
  "Uttaranchal University",
  "Sikkim Manipal University",
  "Manipal University Jaipur",
  "MIT University",
  "Mangalayatan University",
];

const FOOTER_COURSES = [
  { name: "MBA", href: "/courses" },
  { name: "BBA", href: "/courses" },
  { name: "MCA", href: "/courses" },
  { name: "B.Com", href: "/courses" },
  { name: "M.Sc", href: "/courses" },
  { name: "B.Sc", href: "/courses" },
  { name: "MA", href: "/courses" },
  { name: "BA", href: "/courses" },
];

const FOOTER_QUICK_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Partner with Us", href: "/collaborate" },
  { name: "Courses", href: "/courses" },
  { name: "Universities", href: "/universities" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Refund Policy", href: "/refund" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  useEffect(() => {
    const closed = sessionStorage.getItem("footer-welcome-closed");
    if (!closed) setShowWelcomePopup(true);
  }, []);

  const closePopup = () => {
    setShowWelcomePopup(false);
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem("footer-welcome-closed", "true");
    }
  };

  return (
    <footer className="footer-edukyu">
      <div className="footer-edukyu-container">
        <div className="footer-edukyu-grid">
          {/* Brand + Contact + Follow */}
          <div className="footer-edukyu-brand-col">
            <Link href="/" className="footer-edukyu-logo footer-edukyu-logo-img-wrap">
              <Image
                src="/SMLogo.png"
                alt="SuccessMentorix"
                width={440}
                height={140}
                className="footer-edukyu-logo-img"
                quality={100}
                sizes="(max-width: 600px) 100vw, 400px"
              />
            </Link>
            <p className="footer-edukyu-desc">
              SuccessMentorix – Your Path to Extraordinary Success.
            </p>
            <h3 className="footer-edukyu-heading">Contact Us</h3>
            <ul className="footer-edukyu-contact-list">
              <li className="footer-edukyu-contact-address">
                <span className="footer-edukyu-contact-icon" aria-hidden>📍</span>
                <span className="footer-edukyu-address-text">
                  12/279 Gandhi Nagar, Shukla Ganj, Unnao
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/919335512881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-edukyu-wa-link"
                  aria-label="WhatsApp +91 93355 12881"
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  <span>+91 93355 12881</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918112592546"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-edukyu-wa-link"
                  aria-label="WhatsApp +91 81125 92546"
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  <span>+91 81125 92546</span>
                </a>
              </li>
              <li>
                <span className="footer-edukyu-contact-icon" aria-hidden>✉️</span>
                <a
                  href="mailto:info@successmentorix.com"
                  className="footer-edukyu-link"
                >
                  info@successmentorix.com
                </a>
              </li>
            </ul>
            <h3 className="footer-edukyu-heading">Follow us on</h3>
            <div className="footer-edukyu-social">
              <a
                href="https://wa.me/919335512881"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-edukyu-social-btn"
                aria-label="WhatsApp primary number"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://wa.me/918112592546"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-edukyu-social-btn"
                aria-label="WhatsApp second number"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Colleges */}
          <div className="footer-edukyu-nav-col">
            <h3 className="footer-edukyu-heading">Colleges</h3>
            <ul className="footer-edukyu-nav-list">
              {FOOTER_UNIVERSITIES.map((name) => (
                <li key={name}>
                  <Link href="/universities" className="footer-edukyu-nav-link">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Courses */}
          <div className="footer-edukyu-nav-col">
            <h3 className="footer-edukyu-heading">Online Courses</h3>
            <ul className="footer-edukyu-nav-list">
              {FOOTER_COURSES.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="footer-edukyu-nav-link footer-edukyu-nav-link-arrow">
                    {name}
                    <span className="footer-edukyu-arrow" aria-hidden>›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-edukyu-nav-col">
            <h3 className="footer-edukyu-heading">Quick Links</h3>
            <ul className="footer-edukyu-nav-list">
              {FOOTER_QUICK_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="footer-edukyu-nav-link footer-edukyu-nav-link-arrow">
                    {name}
                    <span className="footer-edukyu-arrow" aria-hidden>›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-edukyu-bottom">
          <p className="footer-edukyu-copy">
            © {currentYear} SuccessMentorix. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating action buttons */}
      <div className="footer-edukyu-fab-wrap">
        <a
          href="tel:+919335512881"
          className="footer-edukyu-fab footer-edukyu-fab-phone"
          aria-label="Call us"
        >
          <svg className="footer-edukyu-fab-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
        <a
          href="https://wa.me/919335512881"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-edukyu-fab footer-edukyu-fab-chat"
          aria-label="Chat on WhatsApp"
        >
          <svg className="footer-edukyu-fab-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        </a>
      </div>

      {/* Welcome popup */}
      {showWelcomePopup && (
        <div className="footer-edukyu-popup" role="dialog" aria-label="Welcome message">
          <button
            type="button"
            onClick={closePopup}
            className="footer-edukyu-popup-close"
            aria-label="Close"
          >
            ×
          </button>
          <p className="footer-edukyu-popup-title">SuccessMentorix</p>
          <p className="footer-edukyu-popup-text">SuccessMentorix – Your Path to Extraordinary Success.</p>
        </div>
      )}
    </footer>
  );
}
