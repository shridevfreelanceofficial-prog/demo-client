import type { Metadata } from 'next';
import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';

export const metadata: Metadata = {
  title: 'Navyronix | Marine & Industrial Spares, Turbochargers, Pumps & Voyage Services',
  description: 'Global supplier of marine diesel engine spares, Cummins/ABB turbochargers, starting air compressors, IMO screw pumps, valves, and 24/7 port agency & repair services.',
  keywords: [
    'Marine Turbocharger',
    'Diesel Engine Spare Parts',
    'MAN B&W',
    'Yanmar',
    'Wärtsilä',
    'Daihatsu',
    'Cummins HX82 HX83',
    'Marine Pumps',
    'Compressors',
    'Shiphandling',
    'Underwater Hull Cleaning',
    'Ship Spares Supplier',
    'Navyronix'
  ],
  authors: [{ name: 'Navyronix Global Marine' }],
  robots: 'index, follow'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
