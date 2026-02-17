import type { Metadata } from 'next';
import { Noto_Sans_Thai } from 'next/font/google';
import './globals.css';

const notoSansThai = Noto_Sans_Thai({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'thai'],
  display: 'swap',
  variable: '--font-noto-sans-thai',
});

export const metadata: Metadata = {
  title: 'SSK Budget Management System',
  description: 'ระบบบริหารจัดการงบประมาณ โรงเรียนสตรีสิริเกศ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='th' className={`${notoSansThai.variable}`}>
      <body className='antialiased bg-slate-50 text-slate-900 font-sans'>
        {children}
      </body>
    </html>
  );
}