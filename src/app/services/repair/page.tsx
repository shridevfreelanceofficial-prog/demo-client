import React from 'react';
import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICES } from '@/data/services';

export const metadata: Metadata = {
  title: 'Marine Machinery Repair & Diesel Engine Overhaul | Navyronix',
  description: 'Specialized 24/7 afloat marine repair, main diesel engine overhaul (MAN B&W, Wärtsilä, Yanmar), in-situ crankshaft machining, turbocharger balancing, and separator repairs.'
};

export default function RepairServicePage() {
  const service = SERVICES['repair'];
  return <ServicePageTemplate service={service} />;
}
