import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OTUA Protocol',
  description:
    'OTUA Protocol — open-source collective bulk-purchasing coordination on the Stellar network.',
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
