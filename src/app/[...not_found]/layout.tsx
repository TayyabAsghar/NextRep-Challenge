import '@/app/globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { AppMetaData } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata = AppMetaData;

const RootLayout = ({ children }: { children: ReactNode; }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

