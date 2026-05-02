'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] bg-orange-600/[0.03] rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-text-secondary font-mono text-sm">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Bhubaneswar, Odisha
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] mb-8"
        >
          I build things
          <br />
          that work.{' '}
          <span className="gradient-text">And I</span>
          <br />
          <span className="gradient-text">like it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
        >
          Full Stack Developer — Next.js, React, Supabase.
          <br className="hidden md:block" />
          Building real apps, not just following tutorials.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="#projects"
            className="px-7 py-3.5 bg-accent-primary text-background-primary font-semibold rounded-xl hover:bg-amber-400 transition-colors duration-200 text-sm"
          >
            See my work
          </Link>
          <Link
            href="#contact"
            className="px-7 py-3.5 text-text-secondary font-medium rounded-xl border border-gray-700 hover:border-gray-500 hover:text-text-primary transition-all duration-200 text-sm"
          >
            Get in touch
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-6"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-text-secondary text-[10px] font-mono uppercase tracking-[0.2em] -rotate-90 origin-center translate-y-8">
              scroll
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}