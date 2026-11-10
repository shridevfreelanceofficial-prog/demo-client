'use client';

import React from 'react';
import Link from 'next/link';
import { useRFQ } from '@/components/LayoutWrapper';
import { 
  Ship, 
  ChevronRight, 
  Anchor, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  FileSpreadsheet, 
  PhoneCall, 
  Gauge, 
  Compass, 
  Wrench, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface FleetVessel {
  id: string;
  name: string;
  type: string;
  role: string;
  speed: string;
  length: string;
  deckCapacity: string;
  craneCapacity: string;
  ports: string;
  image: string;
  badge: string;
  specs: { label: string; value: string }[];
  features: string[];
}

const FLEET_VESSELS: FleetVessel[] = [
  {
    id: 'crest-express-1',
    name: 'Crest Express I',
    type: 'High-Speed OPL Spares Launch',
    role: 'Rapid Off-Port-Limits (OPL) Delivery & Emergency Technician Transfer',
    speed: '28 Knots (Max) / 22 Knots (Cruising)',
    length: '21.5 Meters',
    deckCapacity: '15 Metric Tons',
    craneCapacity: '2.5 Ton Deck Davit',
    ports: 'Singapore OPL • Malacca Strait Anchorage',
    image: '/images/ship3.webp',
    badge: 'Immediate Dispatch',
    specs: [
      { label: 'Classification', value: 'DNV + 1A1 HSLC Passenger / Cargo' },
      { label: 'Propulsion', value: 'Twin MTU Diesel Engines / Waterjets' },
      { label: 'Deck Area', value: '45 m² Clear Cargo Deck' },
      { label: 'Passenger Capacity', value: '12 Certified Service Technicians' }
    ],
    features: [
      'Equipped for sea-transfers in Sea State 4 conditions',
      'Hydraulic cargo crane for rapid pallet loading',
      'Integrated VHF, AIS, and satellite tracking for exact ETA updates',
      '24/7 dedicated berth in Singapore Western Anchorage'
    ]
  },
  {
    id: 'crest-express-2',
    name: 'Crest Express II',
    type: 'All-Weather Anchorage Tender',
    role: 'Time-Critical Ship Spares, Lube Drums & Marine Superintendent Boarding',
    speed: '24 Knots',
    length: '24.0 Meters',
    deckCapacity: '20 Metric Tons',
    craneCapacity: '3.0 Ton Hydraulic Crane',
    ports: 'Mumbai Anchorage • Jawaharlal Nehru Port (JNPT)',
    image: '/images/ship4.jpg',
    badge: '24/7 Duty',
    specs: [
      { label: 'Classification', value: 'Indian Register of Shipping (IRS) / ClassNK' },
      { label: 'Propulsion', value: 'Twin Caterpillar Marine Engines' },
      { label: 'Deck Area', value: '55 m² Reinforced Deck' },
      { label: 'Range', value: '350 Nautical Miles' }
    ],
    features: [
      'Heavy-duty fendering for high-sided container and tanker vessels',
      'Dedicated onboard secure lockbox for high-value electronics & AVR units',
      'Emergency towing bit and high-capacity bilge pumping assistance',
      'Monitored temperature storage for heat-sensitive gaskets & O-rings'
    ]
  },
  {
    id: 'caliper-workshop-1',
    name: 'Caliper Workshop Barge 1',
    type: 'Mobile Afloat Engineering Platform',
    role: 'In-Situ Afloat Overhauls, Crankshaft Machining & Voyage Rebuilds',
    speed: 'Towed / Self-Positioning Thrusters',
    length: '38.0 Meters',
    deckCapacity: '120 Metric Tons',
    craneCapacity: '15 Ton Knuckle-Boom Crane',
    ports: 'Rotterdam Europort • Botlek • Waalhaven',
    image: '/images/ship.gif',
    badge: 'Floating Workshop',
    specs: [
      { label: 'Classification', value: 'Lloyd\'s Register 100A1 Work Barge' },
      { label: 'Generators', value: '2x 350 kVA 440V / 60Hz 3-Phase Auxiliary Sets' },
      { label: 'Machining Lathe', value: 'Heavy Duty 4.5m Bed In-Situ Lathe' },
      { label: 'Welding', value: 'Multi-operator TIG, MIG, and Submerged Arc Stations' }
    ],
    features: [
      'Complete diesel engine component reconditioning workshop aboard',
      'Dynamic balancing bench for auxiliary and turbocharger rotors',
      'Class-approved ultrasonic parts cleaning tanks and MPI crack detection',
      'Overnight mooring alongside vessels for zero-interruption voyage repairs'
    ]
  },
  {
    id: 'crest-diver-alpha',
    name: 'Crest Diver Alpha',
    type: 'Subsea ROV & In-Water Cleaning Vessel',
    role: 'Underwater Hull Grooming, Propeller Super-Polishing & UWILD Surveys',
    speed: '14 Knots',
    length: '26.0 Meters',
    deckCapacity: '25 Metric Tons',
    craneCapacity: '5.0 Ton A-Frame & Launch Crane',
    ports: 'Fujairah Anchorage • Dubai Drydocks Anchorage',
    image: '/images/ship2.jpeg',
    badge: 'Eco Bio-Capture',
    specs: [
      { label: 'Classification', value: 'Bureau Veritas Underwater Survey & Diving Support' },
      { label: 'ROV System', value: 'Twin Hydraulic Bio-Capture Hull Cleaners' },
      { label: 'Propeller Polishing', value: 'Rupert Grade A Multi-Head Rotary Polisher' },
      { label: 'CCTV Survey', value: '4K Real-Time Dive Control Console' }
    ],
    features: [
      'Zero-discharge bio-capture filtration conforming to strict anchorage environmental rules',
      'Dual diver air-spread with decompression chamber support on standby',
      'High-output hydraulic power pack driving heavy-duty cleaning crawlers',
      'Full live video streaming to Class surveyors and shipowners'
    ]
  },
  {
    id: 'crest-heavylift-101',
    name: 'Crest Heavy Lift 101',
    type: 'Machinery Transfer & Crane Pontoon',
    role: 'Main Engine Cylinder Heads, Liners, Crankshafts & Generator Transits',
    speed: '6 Knots (Towed)',
    length: '45.0 Meters',
    deckCapacity: '250 Metric Tons',
    craneCapacity: '40 Ton Heavy Lift Crane',
    ports: 'Singapore Jurong • Tuas Shipyard Corridor',
    image: '/images/ship3.webp',
    badge: 'Heavy Cargo',
    specs: [
      { label: 'Classification', value: 'ABS + A1 Barge (Heavy Deck Loading 10T/m²)' },
      { label: 'Ballast System', value: 'High-Speed Automated Anti-Heeling Tanks' },
      { label: 'Deck Winches', value: '4-Point Mooring Hydraulic Positioning System' },
      { label: 'Tug Companion', value: 'Dedicated 3,200 BHP Harbor Tug Escort' }
    ],
    features: [
      'Built specifically for heavy marine diesel engine blocks and crankshaft replacements',
      'Spacious weather-deck for multiple simultaneous vessel spares offloads',
      'Integrated heavy lashings certified for open water transit',
      'Direct loading from shipyard wharfs to shipboard engine room skylights'
    ]
  }
];

export default function OwnFleetPage() {
  const { openRFQ } = useRFQ();

  return (
    <>
      {/* 1. Breadcrumb Header */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748b' }}>
            <Link href="/" style={{ color: '#0284c7', fontWeight: 600 }}>Home</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#0a2540', fontWeight: 700 }}>Own Fleet</span>
          </div>
          <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
            Dedicated Maritime Logistics & Workshop Vessels
          </div>
        </div>
      </div>

      {/* 2. Top Fleet Header & Strategic Overview */}
      <section style={{ padding: '36px 0 20px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div style={{ maxWidth: '780px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '4px', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                <Ship size={15} /> Marine Logistics Division
              </div>

              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#0a2540', lineHeight: 1.25, margin: '0 0 12px' }}>
                Our Own Marine Fleet & Delivery Launches
              </h1>

              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.65, margin: 0 }}>
                Crest & Caliper Spares operates an in-house fleet of high-speed launch boats, floating machine workshop barges, and diving support craft across premier global maritime hubs. By controlling our own marine transport, we guarantee zero anchorage delivery delays, secure crane handling for heavy diesel machinery, and round-the-clock boarding for emergency technical riding squads.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button 
                onClick={() => openRFQ('Own Fleet Launch & Delivery Booking')}
                className="btn btn-primary"
                style={{ padding: '12px 24px', fontSize: '0.88rem', justifyContent: 'center' }}
              >
                <FileSpreadsheet size={16} />
                <span>Book Fleet Launch / Delivery</span>
              </button>

              <a 
                href={`tel:${COMPANY_INFO.emergencyHotline.replace(/[^0-9+]/g, '')}`}
                className="btn"
                style={{ 
                  padding: '12px 24px', 
                  backgroundColor: '#0a2540', 
                  color: '#ffffff', 
                  border: '1px solid #0a2540',
                  fontSize: '0.88rem',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <PhoneCall size={16} color="#38bdf8" />
                <span>24/7 Hotline: {COMPANY_INFO.emergencyHotline}</span>
              </a>
            </div>
          </div>

          {/* Key Advantages Pill Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            padding: '20px 0 10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '0.88rem', color: '#0a2540', display: 'block' }}>Zero Demurrage Risk</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>No 3rd party vessel queues; direct scheduled transit.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '0.88rem', color: '#0a2540', display: 'block' }}>Heavy Lift Certified</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Up to 40T crane capacity for engine blocks & crankshafts.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '0.88rem', color: '#0a2540', display: 'block' }}>OPL & Outer Anchorage</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Licensed for high-sea transfers beyond port limits.</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ fontSize: '0.88rem', color: '#0a2540', display: 'block' }}>Class Surveyed & Insured</strong>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>Full P&I marine liability and IACS vessel compliance.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Vessel Cards Grid */}
      <section style={{ padding: '45px 0 70px', backgroundColor: '#f8fafc' }}>
        <div className="container">
          
          <div style={{ marginBottom: '32px' }}>
            <span style={{ color: '#0284c7', fontWeight: 800, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Vessel Specifications
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0a2540', marginTop: '4px' }}>
              Our Active Fleet Roster
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {FLEET_VESSELS.map((vessel) => (
              <div 
                key={vessel.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(10,37,64,0.06)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '0'
                }}>
                  {/* Vessel Image & Badge Container */}
                  <div style={{
                    position: 'relative',
                    minHeight: '260px',
                    backgroundColor: '#0a2540',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={vessel.image} 
                      alt={vessel.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        opacity: 0.92
                      }}
                    />
                    
                    {/* Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: '#0284c7',
                      color: '#ffffff',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '5px 12px',
                      borderRadius: '4px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {vessel.badge}
                    </div>

                    {/* Operational Area Pin */}
                    <div style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      right: '16px',
                      backgroundColor: 'rgba(10, 37, 64, 0.88)',
                      backdropFilter: 'blur(4px)',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      color: '#e2e8f0',
                      fontSize: '0.78rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <MapPin size={14} color="#38bdf8" style={{ flexShrink: 0 }} />
                      <span style={{ fontWeight: 600 }}>{vessel.ports}</span>
                    </div>
                  </div>

                  {/* Vessel Content & Technical Specs */}
                  <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                        <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0a2540', margin: 0 }}>
                          {vessel.name}
                        </h3>
                        <span style={{
                          backgroundColor: '#f0f9ff',
                          color: '#0369a1',
                          border: '1px solid #bae6fd',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '4px'
                        }}>
                          {vessel.type}
                        </span>
                      </div>

                      <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
                        {vessel.role}
                      </p>

                      {/* Quick Metric Bar */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                        gap: '10px',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        padding: '12px 14px',
                        marginBottom: '18px'
                      }}>
                        <div>
                          <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Service Speed</div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0a2540' }}>{vessel.speed}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Length Overall</div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0a2540' }}>{vessel.length}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Deck Capacity</div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0284c7' }}>{vessel.deckCapacity}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Crane Power</div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0a2540' }}>{vessel.craneCapacity}</div>
                        </div>
                      </div>

                      {/* Key Features List */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px', marginBottom: '20px' }}>
                        {vessel.features.map((feat, fIdx) => (
                          <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155' }}>
                            <CheckCircle2 size={15} color="#16a34a" style={{ flexShrink: 0 }} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Row */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                      paddingTop: '16px',
                      borderTop: '1px solid #f1f5f9'
                    }}>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                        Classification: <strong style={{ color: '#0a2540' }}>{vessel.specs[0].value}</strong>
                      </div>

                      <button
                        onClick={() => openRFQ(`Fleet Charter / Delivery Service for ${vessel.name}`)}
                        className="btn btn-primary"
                        style={{ padding: '8px 18px', fontSize: '0.84rem' }}
                      >
                        <FileSpreadsheet size={14} />
                        <span>Book This Vessel</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div style={{
            marginTop: '45px',
            backgroundColor: '#0a2540',
            color: '#ffffff',
            borderRadius: '12px',
            padding: '35px 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                <Clock size={16} /> 24/7 Priority Berth & Anchorage Operations
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 8px' }}>
                Require an Urgent Anchorage Launch or Workshop Barge?
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', margin: 0 }}>
                Our superintendents monitor ship movements 24/7. Contact us with your vessel name, IMO number, and ETA for instantaneous launch dispatch confirmation.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => openRFQ('Emergency Anchorage Launch Request')}
                className="btn btn-primary"
                style={{ padding: '12px 24px', backgroundColor: '#0284c7', borderColor: '#0284c7' }}
              >
                <FileSpreadsheet size={16} />
                <span>Submit Launch RFQ</span>
              </button>
              <Link
                href="/contact"
                className="btn"
                style={{ padding: '12px 22px', backgroundColor: '#ffffff', color: '#0a2540', fontWeight: 700 }}
              >
                <span>Contact Operations</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

