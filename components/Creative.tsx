'use client';

import { motion } from 'framer-motion';
import { creative } from '@/lib/data';

export default function Creative() {
  return (
    <section id="creative" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider uppercase block mb-4">
            beyond code
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            The other stuff
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg text-lg">
            Code is my main thing, but not my only thing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* DSA Practice */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-orange-500/5 group hover:border-amber-500/40 transition-all duration-500"
          >
            <div className="absolute top-6 right-6 text-5xl opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              ⚡
            </div>
            <h3 className="font-display font-semibold text-2xl text-text-primary mb-2">
              DSA Practice
            </h3>
            <p className="text-5xl font-bold text-accent-primary mb-3 font-display">
              {creative.dsa.count}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              {creative.dsa.note}
            </p>
          </motion.div>

          {/* Content Creation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-8 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-pink-500/5 group hover:border-violet-500/40 transition-all duration-500"
          >
            <div className="absolute top-6 right-6 text-5xl opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              🎨
            </div>
            <h3 className="font-display font-semibold text-2xl text-text-primary mb-4">
              Content Creation
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {creative.content.note}
            </p>
            <div className="flex flex-wrap gap-2">
              {creative.content.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-violet-500/10 text-violet-300 rounded-xl text-sm border border-violet-500/20 hover:scale-105 transition-transform cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
