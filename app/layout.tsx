import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Upendra Murmu — Full Stack Developer',
  description:
    'Full Stack Developer from Bhubaneswar, building production-ready apps with Next.js, React, TypeScript, and Supabase.',
  openGraph: {
    title: 'Upendra Murmu — Full Stack Developer',
    description:
      'Full Stack Developer from Bhubaneswar, building production-ready apps with Next.js, React, TypeScript, and Supabase.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upendra Murmu — Full Stack Developer',
    description:
      'Full Stack Developer from Bhubaneswar, building production-ready apps with Next.js, React, TypeScript, and Supabase.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="grain-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}