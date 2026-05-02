'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-background-primary/80 backdrop-blur-xl py-3 shadow-[0_1px_0_rgba(245,158,11,0.08)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-xl text-text-primary hover:opacity-80 transition-opacity">
          <span className="text-accent-primary">u</span>pendra
          <span className="text-accent-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-200 animated-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2 text-sm bg-accent-primary/10 text-accent-primary rounded-lg border border-accent-primary/20 hover:bg-accent-primary/20 transition-all duration-200"
          >
            Say hello
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-text-primary p-2 relative w-8 h-8"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`absolute left-1 w-6 h-[1.5px] bg-text-primary transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 top-[15px]' : 'top-[10px]'
            }`}
          />
          <span
            className={`absolute left-1 w-6 h-[1.5px] bg-text-primary transition-all duration-300 top-[15px] ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`absolute left-1 w-6 h-[1.5px] bg-text-primary transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 top-[15px]' : 'top-[20px]'
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background-primary/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-text-secondary hover:text-accent-primary text-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}