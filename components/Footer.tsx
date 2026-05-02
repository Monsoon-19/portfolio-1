import { personalInfo } from '@/lib/data';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-gray-800/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-display font-bold text-sm text-text-secondary hover:text-text-primary transition-colors">
            <span className="text-accent-primary">u</span>pendra<span className="text-accent-primary">.</span>
          </Link>
          <span className="text-gray-700">·</span>
          <p className="text-text-secondary text-sm">
            Built from scratch, not from a template
          </p>
        </div>
        <p className="text-text-secondary text-xs">
          © {currentYear} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}