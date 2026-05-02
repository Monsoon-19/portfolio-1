'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

const categoryColors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  languages: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', glow: 'shadow-amber-500/5' },
  frameworks: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20', glow: 'shadow-orange-500/5' },
  tools: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', glow: 'shadow-emerald-500/5' },
  coreCS: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20', glow: 'shadow-violet-500/5' },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-secondary/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider uppercase block mb-4">
            toolkit
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What I work with
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg text-lg">
            Not everything on this list is equal — some I use daily, some I pull out when the project calls for it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-8 rounded-2xl border ${categoryColors.languages.border} bg-background-secondary/60 backdrop-blur-sm hover:bg-background-secondary/80 transition-all duration-300 group`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-2 h-2 rounded-full bg-amber-400`} />
              <h3 className="font-display font-semibold text-xl text-text-primary">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((lang) => (
                <span
                  key={lang.name}
                  className={`px-4 py-2 rounded-xl text-sm ${categoryColors.languages.bg} ${categoryColors.languages.text} ${categoryColors.languages.border} border transition-all duration-200 hover:scale-105 cursor-default`}
                >
                  {lang.name}
                  {lang.level === 'Primary' && <span className="ml-1 opacity-60">·</span>}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`p-8 rounded-2xl border ${categoryColors.frameworks.border} bg-background-secondary/60 backdrop-blur-sm hover:bg-background-secondary/80 transition-all duration-300 group`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-2 h-2 rounded-full bg-orange-400`} />
              <h3 className="font-display font-semibold text-xl text-text-primary">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((fw) => (
                <span
                  key={fw.name}
                  className={`px-4 py-2 rounded-xl text-sm ${categoryColors.frameworks.bg} ${categoryColors.frameworks.text} ${categoryColors.frameworks.border} border transition-all duration-200 hover:scale-105 cursor-default group/pill`}
                >
                  {fw.name}
                  <span className="ml-2 text-xs opacity-0 group-hover/pill:opacity-50 transition-opacity">{fw.note}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-8 rounded-2xl border ${categoryColors.tools.border} bg-background-secondary/60 backdrop-blur-sm hover:bg-background-secondary/80 transition-all duration-300 group`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-2 h-2 rounded-full bg-emerald-400`} />
              <h3 className="font-display font-semibold text-xl text-text-primary">Tools & Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool) => (
                <span
                  key={tool.name}
                  className={`px-4 py-2 rounded-xl text-sm ${categoryColors.tools.bg} ${categoryColors.tools.text} ${categoryColors.tools.border} border transition-all duration-200 hover:scale-105 cursor-default group/pill`}
                >
                  {tool.name}
                  <span className="ml-2 text-xs opacity-0 group-hover/pill:opacity-50 transition-opacity">{tool.note}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Core CS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`p-8 rounded-2xl border ${categoryColors.coreCS.border} bg-background-secondary/60 backdrop-blur-sm hover:bg-background-secondary/80 transition-all duration-300 group`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-2 h-2 rounded-full bg-violet-400`} />
              <h3 className="font-display font-semibold text-xl text-text-primary">Core CS</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.coreCS.map((subj) => (
                <span
                  key={subj}
                  className={`px-4 py-2 rounded-xl text-sm ${categoryColors.coreCS.bg} ${categoryColors.coreCS.text} ${categoryColors.coreCS.border} border transition-all duration-200 hover:scale-105 cursor-default`}
                >
                  {subj}
                </span>
              ))}
            </div>
            <p className="text-text-secondary text-sm mt-4 opacity-0 group-hover:opacity-60 transition-opacity">
              The fundamentals that make everything else click.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
