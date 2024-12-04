import '@/app/globals.css';
import { type ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { AppMetaData } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata = AppMetaData;

const RootLayout = ({ children }: { children: ReactNode; }) => {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} flex justify-center items-center h-dvh`}>
                    <main>
                        {children}
                    </main>
                </body>
            </html>
        </ClerkProvider >
    );
};

export default RootLayout;