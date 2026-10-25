import React from 'react';
import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { SERVICES } from '@/data/services';

export const metadata: Metadata = {
  title: 'Shiphandling, Port Agency & Vessel Husbandry | Navyronix',
  description: 'Full port agency, owner protective agency (OPA), bunkering coordination, crew changes, Cash to Master, and Off-Port Limits (OPL) launch boat operations.'
};

export default function ShiphandlingServicePage() {
  const service = SERVICES['shiphandling'];
  return <ServicePageTemplate service={service} />;
}
