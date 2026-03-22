"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`modern-header ${isScrolled ? "scrolled" : ""}`} 
      role="banner" 
      aria-label="Primary"
    >
      <div className="header-container">
        <div className="header-brand">
          <Link href="/" className="brand-link brand-link-with-logo" aria-label="SuccessMentorix home">
            <span className="brand-header-logo-wrap">
              <Image
                src="/SMLogo.png"
                alt="SuccessMentorix"
                width={512}
                height={512}
                className="brand-header-logo-img"
                priority
                quality={100}
                sizes="(max-width: 480px) 40px, (max-width: 900px) 64px, 96px"
              />
            </span>
            <span className="brand-header-brand-name">SuccessMentorix</span>
          </Link>
        </div>

        <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`} role="navigation" aria-label="Main">
          <ul className="nav-list">
            <li>
              <Link href="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>About Us</Link>
            </li>
            <li>
              <Link href="/courses" onClick={closeMenu}>Courses</Link>
            </li>
            <li>
              <Link href="/universities" onClick={closeMenu}>Universities</Link>
            </li>
            <li>
              <Link href="/collaborate" onClick={closeMenu}>Partner collaboration</Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link 
            href="/career-counselling" 
            className="cta-link"
            onClick={closeMenu}
          >
            Free Counselling
          </Link>
          <a 
            href="https://wa.me/919335512881" 
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-primary" 
            aria-label="Enquire Now"
            onClick={closeMenu}
          >
            Enquire Now
          </a>
          <button
            className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}


