"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

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
          <Link href="/" className="brand-link" aria-label="Whiteboard Education home">
            <div className="brand-logo-wrapper">
              <Image 
                src="/Logo.png" 
                alt="Whiteboard Education" 
                width={70} 
                height={70} 
                className="brand-logo-img"
                priority
                quality={100}
              />
            </div>
            <span className="brand-text">
              <span className="brand-name">Whiteboard</span>
              <span className="brand-tagline">EDUCATION</span>
            </span>
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
            href="https://wa.me/917275131439" 
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


