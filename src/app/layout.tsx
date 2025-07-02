import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
