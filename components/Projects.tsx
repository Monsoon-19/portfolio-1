'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative section-fade">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-secondary/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider uppercase block mb-4">
            projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Things I&apos;ve built
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg text-lg">
            Not class assignments. Real apps, real users, real problems.
          </p>
        </motion.div>

        {/* Featured projects (first two) — larger cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background-secondary/60 rounded-2xl border border-gray-800/60 overflow-hidden card-lift backdrop-blur-sm hover:border-amber-500/20 transition-all duration-500"
            >
              {/* Project header bar */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono rounded uppercase tracking-wider">
                      {project.status}
                    </span>
                    <span className="text-text-secondary text-xs font-mono">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-2xl text-text-primary mb-1 group-hover:text-accent-primary transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-text-secondary/70 text-sm italic mb-4">
                  &quot;{project.tagline}&quot;
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {project.highlight && (
                  <p className="text-accent-mint text-xs mb-5 flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-accent-mint rounded-full" />
                    {project.highlight}
                  </p>
                )}

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/60 text-text-secondary text-[11px] rounded-lg font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2 border-t border-gray-800/50">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent-primary hover:text-amber-300 transition-colors text-sm pt-4"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm pt-4"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Source
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Smaller projects — compact row */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group p-6 bg-background-secondary/40 rounded-2xl border border-gray-800/40 hover:border-gray-700/60 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent-primary transition-colors">
                  {project.name}
                </h3>
                <span className="text-text-secondary text-xs font-mono">{project.year}</span>
              </div>

              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {project.tagline}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gray-800/40 text-text-secondary text-[10px] rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-primary transition-colors ml-4 flex-shrink-0"
                    aria-label={`View ${project.name} source code`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}