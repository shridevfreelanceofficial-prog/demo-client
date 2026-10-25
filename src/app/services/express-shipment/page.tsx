import React from 'react';
import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICES } from '@/data/services';

export const metadata: Metadata = {
  title: 'Global Express Marine Spare Parts Shipment & AOG Logistics | Navyronix',
  description: 'Time-critical air freight, dedicated charter, on-board courier (OBC), and bonded customs clearance for ship spares in transit straight to vessel deck.'
};

export default function ExpressShipmentServicePage() {
  const service = SERVICES['express-shipment'];
  return <ServicePageTemplate service={service} />;
}
