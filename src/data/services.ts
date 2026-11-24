import { ServiceDetail } from '@/types';

export const SERVICES: Record<string, ServiceDetail> = {
  repair: {
    slug: 'repair',
    title: 'Marine Machinery Repair & Diesel Engine Overhaul',
    shortTitle: 'Repair & Overhaul',
    tagline: '24/7 Flying Squads, In-Situ Machining & Precision Workshop Overhauls',
    description: 'Crest & Caliper Spares delivers world-class mechanical, electrical, and automation repair services both afloat and in major drydocks globally. Our factory-trained marine engineers specialize in main engine reconditioning, in-situ crankshaft orbital grinding, turbocharger dynamic balancing, centrifugal pump overhauls, and main switchboard troubleshooting, deploying certified flying squads with specialized diagnostic tooling within 6 to 12 hours worldwide to ensure zero vessel downtime.',
    heroImage: '/images/service-repair.jpg',
    capabilities: [
      'Main & Auxiliary Diesel Engine Full Overhaul (MAN B&W, Wärtsilä, Yanmar, Daihatsu)',
      'Dynamic Balancing & Reconditioning of Marine Turbochargers (ABB, Napier, Holset, MET)',
      'In-Situ Crankshaft Journal Grinding & Line Boring',
      'Plate Heat Exchanger Ultrasonic Cleaning, Re-Gasketing & Pressure Testing',
      'Air Compressor & Starting System Re-valving and Rebuilding',
      'Centrifugal Separator & Decanter Re-balancing (Alfa Laval, Westfalia, Mitsubishi)',
      'Hydraulic Crane, Windlass & Steering Gear Overhaul',
      'Class Survey Preparation & Major Overhaul Certification'
    ],
    keyFeatures: [
      {
        title: 'Emergency Flying Squads',
        desc: 'Mobilized within 6 to 12 hours worldwide with diagnostic gear, laser alignment tools, and specialized pulling rigs.',
        iconName: 'Wrench'
      },
      {
        title: 'In-Situ Machining',
        desc: 'Precision orbital grinding of crankshaft crankpins, main journals, and liner landing faces without engine removal.',
        iconName: 'Cpu'
      },
      {
        title: 'Class Approved Procedures',
        desc: 'All repairs performed strictly in accordance with DNV, Lloyd’s Register, ClassNK, ABS, and BV guidelines.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Comprehensive Guarantee',
        desc: 'All reconditioned components and overhaul labor backed by full 12-month marine operational warranty.',
        iconName: 'Award'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Afloat Inspection & NDT Diagnostics',
        desc: 'Non-destructive testing, vibration analysis, crankshaft deflection logging, and endoscopic cylinder examination.'
      },
      {
        step: '02',
        title: 'Class-Aligned Work Scope & Quotation',
        desc: 'Detailed breakdown of required spares, precision machining parameters, and guaranteed time of completion.'
      },
      {
        step: '03',
        title: 'Execution by Certified Riding Squads',
        desc: 'Execution by licensed marine chief engineers and certified fitters either at anchorage, berth, or during voyage.'
      },
      {
        step: '04',
        title: 'Full Load Trials & Class Sign-Off',
        desc: 'Sea trials, temperature/pressure telemetry verification, performance reporting, and Class surveyor endorsement.'
      }
    ],
    portCoverage: [
      'Singapore / Malacca Straits',
      'Rotterdam / Antwerp Hub',
      'Dubai / Fujairah UAE',
      'Houston / US Gulf Coast',
      'Zhoushan / Shanghai / Ningbo',
      'Mumbai / Kandla / Alang India'
    ],
    emergencyAvailable: true
  },

  'hull-cleaning': {
    slug: 'hull-cleaning',
    title: 'Underwater Hull Cleaning & Propeller Polishing',
    shortTitle: 'Hull Cleaning & Diving',
    tagline: 'Eco-Friendly ROV Grooming, Diver Video Surveys & Fuel Efficiency Optimization',
    description: 'Marine biofouling on ship hulls drastically increases hydrodynamic drag and fuel consumption by up to 25%. Crest & Caliper Spares deploys certified commercial diving teams and eco-friendly robotic hull crawlers (ROV) equipped with suction-based bio-capture systems, delivering mirror-finish Rupert Grade A propeller polishing, sea chest cleaning, and Class-approved underwater surveys (UWILD / IWS) that fully comply with international port environmental regulations.',
    heroImage: '/images/service-hull-cleaning.jpg',
    capabilities: [
      'Hydraulic Multi-Brush & Cavitation Jet Underwater Hull Cleaning',
      'Automated ROV Cleaning with Effluent Capture (Global Port Environmental Compliant)',
      'Rubert Scale Grade A Propeller Super-Polishing',
      'Underwater Class In-Water Surveys (IWS / UWILD) with CCTV Live Feed',
      'Sea Chest Grating Cleaning, Blanking & Sacrificial Anode Inspection',
      'Rudder Pintle & Tail-Shaft Clearance Measurements',
      'Underwater Wet Welding & Cold Bonding Patch Repairs',
      'Biofouling Risk Management & Port State Control Compliance Reports'
    ],
    keyFeatures: [
      {
        title: 'Fuel Savings up to 18%',
        desc: 'Removes macro-fouling, tubeworms, and slime layers to restore design hydrodynamic vessel performance.',
        iconName: 'Zap'
      },
      {
        title: 'Eco-Compliant Bio-Capture',
        desc: 'Suction-based filtration captures 99% of removed organisms and paint particulate, meeting strict IMO/BIMCO rules.',
        iconName: 'Shield'
      },
      {
        title: 'Class Approved UWILD',
        desc: 'Certified by DNV, ABS, ClassNK, and Lloyd’s Register for survey in lieu of drydocking.',
        iconName: 'Camera'
      },
      {
        title: 'High-Definition Video Reports',
        desc: 'Comprehensive before-and-after digital hull condition documentation and surface roughness metrics.',
        iconName: 'Layers'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Pre-Cleaning CCTV Assessment',
        desc: 'Diver or ROV inspection assessing fouling rating (FR), paint condition, and delicate sonar/echo sounder areas.'
      },
      {
        step: '02',
        title: 'Selective Brush & Cavitation Cleaning',
        desc: 'Utilizing soft nylon, polypropylene, or wire brushes matched to antifouling coating thickness.'
      },
      {
        step: '03',
        title: 'Propeller High-Gloss Super Polishing',
        desc: 'Flexible diamond-disc polishing achieving Rupert Grade A smooth finish on both pressure and suction blade faces.'
      },
      {
        step: '04',
        title: 'Engineering Sign-Off & Speed-Power Log',
        desc: 'Detailed underwater photolog, speed warranty documentation, and fuel efficiency recovery estimation.'
      }
    ],
    portCoverage: [
      'Singapore Anchorage & Western OPL',
      'Fujairah Outer Anchorage (UAE)',
      'Gibraltar / Algeciras Strait',
      'Panama Balboa & Cristobal',
      'Rotterdam Maasvlakte',
      'Durban & Port Elizabeth South Africa'
    ],
    emergencyAvailable: true
  },

  'express-shipment': {
    slug: 'express-shipment',
    title: 'Global Express Marine Spares Shipment',
    shortTitle: 'Express Shipment',
    tagline: 'Time-Critical Door-to-Deck Global Delivery for Critical Machinery Spares',
    description: 'When a critical vessel system fails, every hour of demurrage counts in tens of thousands of dollars. Crest & Caliper Spares Express Shipment provides white-glove, emergency air-charter, On-Board Courier (OBC / hand-carry), and specialized customs clearance for critical marine spares delivered straight to the vessel deck anywhere on earth, backed by door-to-deck transit tracking, dedicated launch boat boarding, and priority clearance under "Ship Spares in Transit" protocols.',
    heroImage: '/images/service-express-shipment.jpg',
    capabilities: [
      '24/7/365 Aircraft on Ground (AOG) & Vessel Critical Spare Logistics',
      'On-Board Courier (OBC / Hand-Carry) for Emergency Circuit Boards & Injectors',
      'Dedicated Part & Full Cargo Aircraft Charter Services',
      'Customs Bonded Transit Clearance ("Ship Spares in Transit" Documentation)',
      'Dangerous Goods (DG) Handling for Pyrotechnics, Gases & Chemical Stores',
      'Strategic Pre-Positioned Inventory in Rotterdam, Singapore, Dubai & Houston',
      'Last-Mile Delivery by Launch Boat, Offshore Tug or Helicopter Hoist',
      'Real-Time GPS Tracking & Milestone Notifications via Web & SMS'
    ],
    keyFeatures: [
      {
        title: 'Guaranteed 24-48hr Transit',
        desc: 'Priority air freight connections with global airline partners directly into primary and secondary port hubs.',
        iconName: 'Clock'
      },
      {
        title: 'Duty-Free Transit Clearance',
        desc: 'Proper documentation under "Ship Spares in Transit" exempting owners from local customs tariffs and VAT.',
        iconName: 'FileCheck'
      },
      {
        title: 'Heavy Lift Marine Transport',
        desc: 'Specialized low-loaders, flat-racks, and sea freight charters for crankshafts, anchors, and complete engines.',
        iconName: 'Truck'
      },
      {
        title: 'Last-Mile Delivery to Deck',
        desc: 'We coordinate port security gates, launch boats, and ship cranes until the spare is safely on ship deck.',
        iconName: 'Plane'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Emergency RFQ & Route Optimization',
        desc: 'Within 30 minutes: parts verification, export packing, air cargo space reservation, and vessel ETA matching.'
      },
      {
        step: '02',
        title: 'Export Control & Transit Clearance',
        desc: 'Immediate bonded customs release, export declarations, and air waybill issuance under emergency priority.'
      },
      {
        step: '03',
        title: 'Direct Flight & Port Hub Arrival',
        desc: 'Handover to Crest & Caliper Spares local port team, customs boarding escort, and harbor launch boat loading.'
      },
      {
        step: '04',
        title: 'Deck Handover & Proof of Delivery (POD)',
        desc: 'Signed Captain / Chief Engineer receipt, Class certificate physical handover, and timestamped delivery log.'
      }
    ],
    portCoverage: [
      'Worldwide Service - 140+ Maritime Countries',
      'Rotterdam / Hamburg / Antwerp (Europe Hub)',
      'Singapore / Port Klang (Southeast Asia Hub)',
      'Dubai / Fujairah / Dammam (Middle East Hub)',
      'Houston / New Orleans / Los Angeles (Americas Hub)',
      'Busan / Shanghai / Tokyo (East Asia Hub)'
    ],
    emergencyAvailable: true
  }
};
