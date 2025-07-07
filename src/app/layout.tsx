'use client';
import { ThemeProvider } from '@/context/ThemeContext';
import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import './animations.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('animate-on-load');
      setTimeout(() => {
        document.documentElement.classList.remove('animate-on-load');
      }, 2000);
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}