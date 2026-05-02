'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-secondary/20 to-background-secondary/40" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider uppercase block mb-4">
            contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s talk
          </h2>
          <p className="text-text-secondary text-lg max-w-md mx-auto">
            Got an idea, a project, or just want to say hi? I&apos;m always open to interesting conversations.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-16"
        >
          <Link
            href={`mailto:${personalInfo.email}`}
            className="group p-6 bg-background-secondary/60 rounded-2xl border border-gray-800/50 hover:border-accent-primary/30 transition-all duration-300 text-center card-lift backdrop-blur-sm"
          >
            <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">✉️</div>
            <h3 className="font-semibold text-text-primary text-sm mb-1">Email</h3>
            <p className="text-text-secondary text-xs break-all">{personalInfo.email}</p>
          </Link>

          <Link
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            className="group p-6 bg-background-secondary/60 rounded-2xl border border-gray-800/50 hover:border-accent-primary/30 transition-all duration-300 text-center card-lift backdrop-blur-sm"
          >
            <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">📱</div>
            <h3 className="font-semibold text-text-primary text-sm mb-1">Phone</h3>
            <p className="text-text-secondary text-xs">{personalInfo.phone}</p>
          </Link>

          <div className="group p-6 bg-background-secondary/60 rounded-2xl border border-gray-800/50 text-center backdrop-blur-sm">
            <div className="text-2xl mb-3">📍</div>
            <h3 className="font-semibold text-text-primary text-sm mb-1">Location</h3>
            <p className="text-text-secondary text-xs">{personalInfo.location}</p>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3.5 bg-background-secondary/60 rounded-xl border border-gray-800/50 hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-300"
            aria-label="GitHub profile"
          >
            <svg className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </Link>
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3.5 bg-background-secondary/60 rounded-xl border border-gray-800/50 hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-300"
            aria-label="LinkedIn profile"
          >
            <svg className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}