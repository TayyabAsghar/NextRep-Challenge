import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { AppMetaData } from '@/lib/constants';
import Header from '@/components/shared/header';
import AppSidebar from '@/components/shared/app-sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = AppMetaData;

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} flex h-dvh`}>
                    <AppSidebar />
                    <div className='w-full h-full'>
                        <Header />
                        <main className='px-10 py-5 mt-[72px] ml-16'>
                            {children}
                        </main>
                    </div>
                </body>
            </html>
        </ClerkProvider >
    );
};

export default RootLayout;