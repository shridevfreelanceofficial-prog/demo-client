import React from 'react';
import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICES } from '@/data/services';

export const metadata: Metadata = {
  title: 'Underwater Hull Cleaning, Propeller Polishing & Diving | Navyronix',
  description: 'Eco-friendly ROV hull cleaning with bio-capture, Rupert Grade A propeller super-polishing, and Class-approved underwater surveys (UWILD / IWS).'
};

export default function HullCleaningServicePage() {
  const service = SERVICES['hull-cleaning'];
  return <ServicePageTemplate service={service} />;
}
