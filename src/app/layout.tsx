import type { Metadata } from 'next';
import { Stick_No_Bills } from 'next/font/google';
import { Providers } from './providers';
import Header from '@/components/header/Header';

import './globals.scss';

const stickNoBills = Stick_No_Bills({ subsets: ['latin'], weight: '200' });

export const metadata: Metadata = {
  title: 'Async Race App',
  description: 'App for Epam JS course',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={stickNoBills.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
