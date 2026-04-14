'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

interface NavProps {
  variant?: 'home' | 'case-study';
}

export default function Nav({ variant = 'home' }: NavProps) {
  const navRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const dotLatinRef = useRef<HTMLSpanElement>(null);
  const dotUrduRef = useRef<HTMLSpanElement>(null);
  const tcursorRef = useRef<HTMLSpanElement>(null);

  useTypingAnimation(textRef, dotLatinRef, dotUrduRef, tcursorRef);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    onScroll(); // apply correct state immediately on mount / refresh
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav ref={navRef} id="nav">
      <Link href="/" className="logo">
        <span className="logo-inner">
          <span ref={dotUrduRef} id="dotUrdu" className="dot-urdu">۔</span>
          <span ref={textRef} id="logoText" className="logo-text latin"></span>
          <span ref={dotLatinRef} id="dotLatin" className="dot-latin">.</span>
          <span ref={tcursorRef} className="tcursor"></span>
        </span>
      </Link>

      {variant === 'home' ? (
        <ul className="nav-links">
          <li><a href="#works">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="mailto:humzadesign@gmail.com" className="nav-cta">Hire me</a></li>
        </ul>
      ) : (
        <Link href="/" className="nav-back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to portfolio
        </Link>
      )}
    </nav>
  );
}
