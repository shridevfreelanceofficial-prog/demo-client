import { ServiceDetail } from '@/types';

export const SERVICES: Record<string, ServiceDetail> = {
  repair: {
    slug: 'repair',
    title: 'Marine & Industrial Machinery Repair and Overhaul',
    shortTitle: 'Repair & Overhaul',
    tagline: '24/7 Riding Squads, Drydock Assistance & Precision Workshop Overhaul',
    description: 'Navyronix delivers world-class mechanical, electrical, and automation repair services both afloat and in major drydocks globally. Our factory-trained marine engineers specialize in main engine reconditioning, in-situ crankshaft machining, turbocharger balancing, centrifugal pump overhauls, and switchboard troubleshooting.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
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

  shiphandling: {
    slug: 'shiphandling',
    title: 'Port Agency, Husbandry & Vessel Shiphandling Services',
    shortTitle: 'Shiphandling',
    tagline: 'Comprehensive Port Agency, Crew Logistics, Bunkering & Technical Husbandry',
    description: 'Navyronix provides proactive vessel husbandry and port agency solutions across critical international trade hubs. We guarantee seamless vessel turnaround, customs clearance, owner protective agency (OPA), crew repatriation, fresh water supply, and certified marine logistics coordination.',
    heroImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80',
    capabilities: [
      'Full Port Agency & Owners Protective Agency (OPA)',
      'Bunker Coordination (VLSFO, LSMGO, Biofuels) & ISO 8217 Sampling',
      'Crew Change, Visa Processing, Hotel Transfers & Medical Assistance',
      'Cash to Master (CTM) Safe Delivery with Armed Escort',
      'Provisions, Fresh Water & Technical Ship Chandlery Supply',
      'Sludge, Bilge & Garbage Disposal with MARPOL Annex Endorsements',
      'Customs Clearance & Transit Handling of Ship Spares in Transit',
      'Off-Port Limits (OPL) Launch Boat & Supply Vessel Operations'
    ],
    keyFeatures: [
      {
        title: '24/7 Dedicated Port Agents',
        desc: 'Real-time port updates, berth availability forecasts, and immediate SOF (Statement of Facts) turnaround.',
        iconName: 'Anchor'
      },
      {
        title: 'Off-Port Limits (OPL) Excellence',
        desc: 'Fast crew boat and supply launch operations avoiding expensive port dues and unnecessary anchorage delays.',
        iconName: 'Ship'
      },
      {
        title: 'Transparent Disbursement Accounts',
        desc: 'Competitive port tariff negotiations with pre-funding reconciliation and clear PDA/FDA accounting.',
        iconName: 'FileText'
      },
      {
        title: 'Global Compliance',
        desc: 'Strict adherence to BIMCO, TRACE anti-bribery standards, and international maritime security rules.',
        iconName: 'Globe'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Pre-Arrival Planning (72/48/24h Notices)',
        desc: 'Immigration clearance, berth reservation, cargo readiness, pilotage requisition, and port health documentation.'
      },
      {
        step: '02',
        title: 'Berthing & Operational Attendance',
        desc: 'On-scene agent boardings, Master liaison, customs inward clearance, and cargo supervisor coordination.'
      },
      {
        step: '03',
        title: 'Husbandry & Technical Delivery',
        desc: 'Parallel delivery of spares in transit, technical service squads, bunker testing, and crew change execution.'
      },
      {
        step: '04',
        title: 'Expedited Outward Clearance & Sailing',
        desc: 'Port dues clearance, pilotage outward, prompt departure confirmation, and rapid final FDA audit.'
      }
    ],
    portCoverage: [
      'Singapore OPL & Terminals',
      'Fujairah & Khor Fakkan UAE',
      'Rotterdam & Europort',
      'Suez Canal Transit Coordination',
      'Panama Canal Agency',
      'Alang & Indian Subcontinent Ports'
    ],
    emergencyAvailable: true
  },

  'hull-cleaning': {
    slug: 'hull-cleaning',
    title: 'Underwater Hull Cleaning, Propeller Polishing & Diving Services',
    shortTitle: 'Hull Cleaning',
    tagline: 'Eco-Friendly ROV Grooming, Diver Video Surveys & Fuel Efficiency Optimization',
    description: 'Marine biofouling on ship hulls drastically increases hydrodynamic drag and fuel consumption by up to 25%. Navyronix deploys certified commercial diving teams and eco-friendly robotic hull crawlers (ROV) with bio-capture systems, delivering mirror-finish propeller polishing and Class-approved underwater surveys.',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80',
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
    title: 'Global Express Marine Spare Parts Shipment & AOG Logistics',
    shortTitle: 'Express Shipment',
    tagline: 'Time-Critical Door-to-Deck Global Delivery for Critical Machinery Spares',
    description: 'When a critical vessel system fails, every hour of demurrage counts in tens of thousands of dollars. Navyronix Express Shipment provides white-glove, emergency air-charter, onboard courier (OBC), and specialized customs clearance for critical marine spares delivered straight to the vessel deck anywhere on earth.',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
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
        desc: 'Handover to Navyronix local port team, customs boarding escort, and harbor launch boat loading.'
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
