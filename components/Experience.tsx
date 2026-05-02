'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 section-fade">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider uppercase block mb-4">
            experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Where I&apos;ve learned
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] md:left-[11px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-accent-primary/50 via-accent-secondary/30 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex gap-8 group"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 mt-2">
                  <div className="w-[9px] h-[9px] bg-accent-primary rounded-full ring-4 ring-background-primary relative z-10" />
                  <div className="absolute inset-0 w-[9px] h-[9px] bg-accent-primary rounded-full animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 bg-accent-primary/15 text-accent-primary text-[11px] font-mono rounded-md uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <span className="text-text-secondary text-sm">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-xl text-text-primary mb-1 group-hover:text-accent-primary transition-colors duration-300">
                    {exp.title}
                  </h3>

                  <p className="text-accent-secondary/80 font-medium text-sm mb-3">
                    {exp.company} · {exp.location}
                  </p>

                  <p className="text-text-secondary text-sm leading-relaxed max-w-lg">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}