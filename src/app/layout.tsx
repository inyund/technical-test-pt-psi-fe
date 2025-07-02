import type { Metadata } from 'next';
import { poppins } from './constants/fonts';

export const metadata: Metadata = {
  title: 'Technical Test PT PSI',
  description: 'App for Technical Test PT PSI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
