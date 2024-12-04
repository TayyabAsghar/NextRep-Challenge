import '@/app/globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { AppMetaData } from '@/lib/constants';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = AppMetaData;

const RootLayout = ({ children }: { children: ReactNode; }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className='pt-[72px]'>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider >
  );
};

export default RootLayout;