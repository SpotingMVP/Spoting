import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Gnb from '@/components/common/Gnb';
import Footer from '@/components/common/Footer';
import dynamic from 'next/dynamic';

const ModalProvider = dynamic(() => import('@/providers/ModalProvider'), { ssr: false });

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
});

/* eslint-disable react-refresh/only-export-components*/
export const metadata: Metadata = {
  title: 'Sporting | 건강한 만남, 함께 운동하세요',
  description: '건강한 만남, 함께 운동하세요',
  icons: {
    icon: '/logo.svg'
  },
  openGraph: {
    title: 'Sporting ',
    description: '건강한 만남, 함께 운동하세요',
    url: 'https://spoting-2oyi.vercel.app/',
    siteName: 'Sporting',
    locale: 'ko_KR',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <Gnb />
        {children}
        <Footer />
        <ModalProvider />
        <div id="root-portal"></div>
      </body>
    </html>
  );
}
