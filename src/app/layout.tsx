import type { Metadata } from 'next';
import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';

export const metadata: Metadata = {
  title: 'Crest & Caliper Spares | Marine & Industrial Spares, Turbochargers, Pumps & Voyage Services',
  description: 'Global supplier of marine diesel engine spares, Cummins/ABB turbochargers, starting air compressors, IMO screw pumps, valves, own fleet logistics, and 24/7 port agency & repair services.',
  keywords: [
    'Crest & Caliper Spares',
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
    'Own Fleet Marine Logistics'
  ],
  authors: [{ name: 'Crest & Caliper Spares' }],
  icons: {
    icon: '/images/crest-caliper-logo.jpg',
    apple: '/images/crest-caliper-logo.jpg'
  },
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
