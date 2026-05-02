'use client';

import { motion } from 'framer-motion';
import { aboutText } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 section-fade">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider uppercase block mb-4">
            about
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            The person behind the code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left side — visual card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-amber-500/10 via-background-secondary to-orange-600/10 rounded-2xl flex items-center justify-center border border-gray-800/50 overflow-hidden group">
                <div className="text-center relative z-10">
                  <span className="text-7xl block mb-4 group-hover:scale-110 transition-transform duration-500">🌱</span>
                  <p className="text-text-secondary text-sm">Mayurbhanj → Bhubaneswar</p>
                </div>
                {/* Decorative gradient behind emoji */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 via-transparent to-transparent" />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-primary/5 rounded-2xl border border-accent-primary/10 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-orange-600/5 rounded-xl border border-orange-600/10 -z-10" />
            </div>
          </motion.div>

          {/* Right side — text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-text-primary text-xl leading-relaxed font-display">
              {aboutText.intro}
            </p>
            <p className="text-text-secondary leading-[1.8] text-base">
              {aboutText.body}
            </p>
            <p className="text-text-secondary leading-[1.8] text-base">
              {aboutText.creative}
            </p>
            <div className="pt-6">
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-accent-primary/8 rounded-full text-accent-primary text-sm border border-accent-primary/15">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                {aboutText.vibe}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}