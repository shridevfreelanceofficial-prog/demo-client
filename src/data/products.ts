import { Product, ProductCategory } from '@/types';

// The 12 categories strictly for Marine Products as requested
export const MARINE_CATEGORIES: ProductCategory[] = [
  'Engine Spare Parts',
  'Turbochargers',
  'Compressors',
  'Pumps',
  'Valves',
  'Motors',
  'Navigation Equipment',
  'Automation Systems',
  'Electrical Equipment',
  'Anchors',
  'Ropes',
  'Stores'
];

export const CATEGORIES = MARINE_CATEGORIES;

export const INDUSTRIAL_CATEGORIES = [
  'Industrial Centrifuges & Separators',
  'Plate Heat Exchangers',
  'Fresh Water Generators',
  'Industrial Pumps',
  'Industrial Valves & Actuators',
  'Power Generation Motors'
];

export const PRODUCTS: Product[] = [
  // ==================== TURBOCHARGERS (REAL WZS MARINE PRODUCTS & IMAGES) ====================
  {
    id: 'turbo-qsk19-hx83',
    name: 'Cummins QSK19 Turbocharger Assembly HX83',
    category: 'Turbochargers',
    sector: 'marine',
    model: 'HX83 (Water-Cooled)',
    partNumber: 'Assy: 4041703 | Cust: 4041702, 288177',
    oemEquivalent: 'Genuine & OEM Grade Holset / Cummins',
    compatibleBrands: ['Cummins', 'Holset'],
    description: 'Genuine specification water-cooled marine turbocharger for Cummins QSK19 marine propulsion engines and generator sets. Manufactured with high nickel ductile iron water jacket casing and balanced turbine wheel.',
    shortDescription: 'Holset HX83 water-cooled marine turbocharger for Cummins QSK19 diesel engines.',
    specifications: {
      'Turbo Model': 'HX83 Water-Cooled',
      'Engine Fitment': 'Cummins QSK19 Marine',
      'Assembly Part No.': '4041703 / 4041702 / 288177',
      'Cooling': 'Integrated Water Jacket Cooling',
      'Material': 'High-Nickel Ductile Iron Housing',
      'Balancing': 'Dynamic Balancing ISO 1940 Grade G1.0'
    },
    image: '/images/turbo_qsk19-turbocharger-hx83-assy4041703-cust4041702-288177-463456-1-j.webp',
    inStock: true,
    leadTime: 'Immediate Dispatch / Ready in Stock',
    certification: ['ISO 9001:2015', 'Factory Tested'],
    featured: true
  },
  {
    id: 'turbo-qsk60-hx82',
    name: 'Cummins QSK60 Turbocharger HX82',
    category: 'Turbochargers',
    sector: 'marine',
    model: 'HX82 Heavy Duty',
    partNumber: '2843368 / 4033489 / 4089730 / 4036395',
    oemEquivalent: 'Cummins OEM Standard',
    compatibleBrands: ['Cummins', 'Holset'],
    description: 'High-boost heavy marine turbocharger for Cummins QSK60 propulsion and auxiliary power. Provides optimum air mass flow, high thermal efficiency, and lower exhaust gas temperatures under full vessel loads.',
    shortDescription: 'Cummins QSK60 Holset HX82 heavy duty marine turbocharger.',
    specifications: {
      'Turbo Model': 'Holset HX82',
      'Application': 'Cummins QSK60 Marine V16',
      'Part Numbers': '2843368, 4033489, 4089730, 4036395',
      'Pressure Ratio': 'Up to 4.2:1',
      'Bearing Type': 'Heavy Duty Full-Floating Journal'
    },
    image: '/images/turbo_qsk60-turbocharger-hx82-2843368-4033489-4089730-4036395-34572389524-1-j.webp',
    inStock: true,
    leadTime: 'In Stock',
    certification: ['ClassNK', 'DNV Compliant'],
    featured: true
  },
  {
    id: 'turbo-nt855-ht3b-safety',
    name: 'Cummins NT855 Water-Cooled Explosion-Proof Booster HT3B',
    category: 'Turbochargers',
    sector: 'marine',
    model: 'HT3B Explosion-Proof',
    partNumber: 'Assy: 3529040 | Cust: 3529041',
    oemEquivalent: 'Cummins / Holset Marine Specification',
    compatibleBrands: ['Cummins', 'Holset', 'Chongqing Cummins'],
    description: 'SOLAS safe water-cooled explosion-proof marine turbocharger for Cummins NT855 and NTA855 marine engines. Fully water-jacketed to keep outer skin temperature safely below 220°C in compliance with SOLAS fire safety.',
    shortDescription: 'Water-cooled explosion-proof HT3B turbocharger for Cummins NT855.',
    specifications: {
      'Turbo Model': 'HT3B Marine Explosion-Proof',
      'Engine Fitment': 'Cummins NT855 / NTA855-M',
      'Part Numbers': '3529040 / 3529041',
      'Safety Standard': 'SOLAS Fire Safe (<220°C Skin Temp)',
      'Water Jacket': 'Full Perimeter Sea/Jacket Water Cooled'
    },
    image: '/images/turbo_nt855water-cooled-safety-explosion-proof-booster-ht3b-3529040-3529041-2576289525-1-j.webp',
    inStock: true,
    leadTime: 'In Stock for Immediate Loading',
    certification: ['CCS', 'SOLAS Compliance'],
    featured: true
  },
  {
    id: 'turbo-qsm11-hx55w',
    name: 'Cummins QSM11 Marine Turbocharger HX55W',
    category: 'Turbochargers',
    sector: 'marine',
    model: 'HX55W Wastegate Series',
    partNumber: 'Assy: 4352298 | Cust: 4955714',
    oemEquivalent: 'Holset / Cummins Genuine',
    compatibleBrands: ['Cummins', 'Holset'],
    description: 'Precision wastegated marine turbocharger for Cummins QSM11 high-speed patrol craft, commercial fishing vessels, and auxiliary generator packages. Delivers instant boost response and reduced fuel consumption.',
    shortDescription: 'HX55W turbocharger assembly for Cummins QSM11 marine propulsion.',
    specifications: {
      'Turbo Model': 'Holset HX55W Wastegate',
      'Engine': 'Cummins QSM11 Marine',
      'Part No': '4352298 / 4955714',
      'Wastegate': 'Pneumatic Actuator Control',
      'Max Speed': '95,000 RPM'
    },
    image: '/images/turbo_qsm11trubocharger-hx55w-assy4352298-cust4955714-567289572895245-1-j.webp',
    inStock: true,
    leadTime: 'Immediate Air Courier Dispatch',
    certification: ['ISO 9001'],
    featured: false
  },
  {
    id: 'turbo-cummins-240-hx40w',
    name: 'Cummins 240 / 6BT Marine Turbocharger HX40W',
    category: 'Turbochargers',
    sector: 'marine',
    model: 'HX40W',
    partNumber: 'Assy: 4029184 | Cust: 4049355',
    oemEquivalent: 'Holset Original',
    compatibleBrands: ['Cummins', 'Dongfeng Cummins'],
    description: 'Complete turbocharger assembly with precision machined compressor housing and ductile iron turbine housing for medium marine diesel engines.',
    shortDescription: 'HX40W turbocharger for Cummins marine engines.',
    specifications: {
      'Model': 'HX40W',
      'Assembly No.': '4029184 / 4049355',
      'Cooling': 'Oil Lubricated / Water Assisted',
      'Application': 'Marine Propulsion & Auxiliaries'
    },
    image: '/images/turbo_cummins-240-turbocharger-hx40w-assy4029184-cust4049355-3457258945-1-j.webp',
    inStock: true,
    leadTime: 'Stock Available',
    certification: ['ISO 9001'],
    featured: false
  },

  // ==================== ENGINE SPARE PARTS (REAL WZS & MARINE DATA) ====================
  {
    id: 'eng-siemens-rectifier',
    name: 'Siemens / Hyundai Marine Generator Rotary Rectifier Module',
    category: 'Engine Spare Parts',
    sector: 'marine',
    model: 'ZXQ100-12 / 1FC5 / 1FC6 Generator',
    partNumber: 'ZXQ100-12 / Wuxi Feihang',
    oemEquivalent: 'Siemens Marine / Hyundai Heavy Industries Spec',
    compatibleBrands: ['Siemens', 'Hyundai HHI', 'CSSC'],
    description: 'Rotary rectifier bridge module for marine brushless synchronous diesel generator sets on commercial vessels. Resists high rotational g-forces and thermal shocks.',
    shortDescription: 'Rotary diode rectifier module for marine diesel generator sets.',
    specifications: {
      'Model': 'ZXQ100-12',
      'Generator Fitment': 'Siemens 1FC5, 1FC6, CSSC HFC5, HFC6',
      'Current Rating': '100A, Peak Reverse 1200V',
      'Application': 'Marine Auxiliary Alternators'
    },
    image: '/images/engine_zxq100-12-siemens-generator-rotary-rectifier-module-wuxi-feihang-j.webp',
    inStock: true,
    leadTime: 'In Stock - Fast Delivery',
    certification: ['ClassNK', 'DNV Approved'],
    featured: true
  },
  {
    id: 'eng-hyundai-transformer',
    name: 'CSSC Hyundai 1FC6 / HFC6 Generator Rectification Transformer',
    category: 'Engine Spare Parts',
    sector: 'marine',
    model: '4AP40TI16933.1',
    partNumber: 'T20070650-6-1',
    oemEquivalent: 'Hyundai Heavy Industries Genuine',
    compatibleBrands: ['Hyundai', 'CSSC', 'Siemens'],
    description: 'Intermediate measurement and compounding transformer for marine auxiliary diesel engine generator excitation systems.',
    shortDescription: 'Excitation rectification transformer for Hyundai and Siemens marine alternators.',
    specifications: {
      'Part No': '4AP40TI16933.1',
      'Application': '1FC6 / HFC6 Marine Diesel Gensets',
      'Insulation Class': 'Class H Marine Duty',
      'Testing': 'High Voltage Dielectric Tested'
    },
    image: '/images/engine_cssc-hyundai-1fc6-hfc6-generator-rectification-transformer-4ap40ti16933.1-t20070650-6-1-j.webp',
    inStock: true,
    leadTime: 'Stock Available',
    certification: ['ClassNK', 'ABS'],
    featured: false
  },
  {
    id: 'eng-vulkan-coupling',
    name: 'Vulkan Vulastik-L Marine Diesel Engine Flexible Coupling',
    category: 'Engine Spare Parts',
    sector: 'marine',
    model: 'Vulastik-L / Centamax CM-3500',
    partNumber: 'VK-VULASTIK-L-02',
    oemEquivalent: 'Vulkan Kupplungs Genuine Standard',
    compatibleBrands: ['Vulkan', 'Wärtsilä', 'Yanmar', 'Volvo Penta', 'Yuchai'],
    description: 'High-elasticity rubber coupling element and damping pads for marine main propulsion diesel engines and auxiliary gensets to absorb torsional vibrations.',
    shortDescription: 'Vulkan flexible rubber coupling for marine diesel engines and generators.',
    specifications: {
      'Type': 'Highly flexible rubber-in-shear coupling',
      'Fitment': 'Wärtsilä, Yanmar, Shangchai, Volvo Penta',
      'Torsional Stiffness': 'Custom rated for marine propulsion',
      'Application': 'Engine flywheel to reduction gear / alternator'
    },
    image: '/images/deck_vulkan-high-elasticity-rubber-coupling-can-be-used-for-engines-such-as-yuchai-shangchai-wartsila-volvo-etc-1-j.webp',
    inStock: true,
    leadTime: 'In Stock',
    certification: ['DNV', 'Bureau Veritas'],
    featured: true
  },

  // ==================== PUMPS (REAL WZS MARINE DATA) ====================
  {
    id: 'pump-wzs-2cy-gear',
    name: 'Marine Lube Oil Positive Displacement Gear Pump 2CY Series',
    category: 'Pumps',
    sector: 'marine',
    model: '2CY-1.1 / 2CY-3.3 Heavy Duty',
    partNumber: 'WZS-2CY-1.1/14.5',
    oemEquivalent: 'WZS Marine Machinery',
    compatibleBrands: ['WZS Marine', 'Taiko Kikai', 'Shinko'],
    description: 'Heavy duty marine positive displacement gear pump for lubricating oil and heavy fuel oil transfer. Equipped with self-priming helical gears and built-in pressure safety valve.',
    shortDescription: 'Heavy-duty marine lube oil gear transfer pump with built-in safety relief valve.',
    specifications: {
      'Model': '2CY-1.1/14.5',
      'Flow Rate': '1.1 m³/h to 14.5 m³/h',
      'Pressure': '1.45 MPa (14.5 Bar)',
      'Suction Lift': '5 meters self-priming',
      'Medium': 'Lube oil, diesel oil, heavy fuel oil (HFO)'
    },
    image: '/images/pump_marine-lube-oil-gear-pump-2cy-1-1-14-5-2-5345-1-j.webp',
    inStock: true,
    leadTime: 'In Stock - Multiple Sizes',
    certification: ['CCS', 'ISO 9001'],
    featured: true
  },
  {
    id: 'pump-cb-b-hydraulic',
    name: 'CB-B Series Low Pressure Marine Gear Oil Pump',
    category: 'Pumps',
    sector: 'marine',
    model: 'CB-B25 / CB-B50',
    partNumber: 'CB-B25-WZS',
    oemEquivalent: 'WZS Standard Marine Hydraulic',
    compatibleBrands: ['WZS Marine', 'Yuken', 'Nachi'],
    description: 'Low-pressure positive displacement gear pump widely installed on shipboard hydraulic steering gear systems, winch power packs, and engine lubrication circuits.',
    shortDescription: 'Low-pressure marine hydraulic and oil transfer gear pump.',
    specifications: {
      'Displacement': '25 mL/r to 100 mL/r',
      'Working Pressure': '2.5 MPa',
      'Speed': '1450 RPM',
      'Drive': 'Direct motor coupling mount'
    },
    image: '/images/pump_2547257283572525252354-cb-b25-1-j.webp',
    inStock: true,
    leadTime: 'Stock in Warehouse',
    certification: ['CCS'],
    featured: false
  },
  {
    id: 'pump-clz-foam-fire',
    name: 'CLZ Series Marine Foam & Emergency Fire Centrifugal Pump',
    category: 'Pumps',
    sector: 'marine',
    model: 'CLZ-9 / CLZ-125 Vertical',
    partNumber: 'WZS-CLZ-125',
    oemEquivalent: 'Zhenhua / WZS Marine',
    compatibleBrands: ['WZS Marine', 'Desmi', 'Taiko'],
    description: 'Vertical marine centrifugal pump designed for shipboard sea water fire fighting, foam extinguishing, bilge pumping, and cooling duties. Heavy bronze impeller for seawater durability.',
    shortDescription: 'Vertical centrifugal marine fire, foam, and ballast pump.',
    specifications: {
      'Capacity': '60 m³/h to 300 m³/h',
      'Discharge Head': '45 m to 95 m',
      'Body Material': 'Cast Bronze / Ductile Iron',
      'Impeller': 'Dynamic balanced tin bronze'
    },
    image: '/images/pump_557290582305823052354125clz-9-2-1-j.webp',
    inStock: true,
    leadTime: 'In Stock',
    certification: ['CCS', 'DNV Class Approved'],
    featured: false
  },

  // ==================== VALVES (REAL WZS MARINE DATA) ====================
  {
    id: 'valve-cast-steel-globe',
    name: 'Marine Flanged Cast Steel Globe Stop Valve (JIS Standard)',
    category: 'Valves',
    sector: 'marine',
    model: 'JIS 10K / 16K Flanged Globe',
    partNumber: 'WZS-JIS-GLOBE-DN80',
    oemEquivalent: 'JIS F7305 / F7307 Marine Valve',
    compatibleBrands: ['WZS Marine', 'Kitz', 'Keystone'],
    description: 'High-strength marine cast steel flanged globe stop valve for ship steam lines, boiler feed, fuel oil piping, and sea water manifolds. Fitted with stainless steel disc and seat.',
    shortDescription: 'JIS 10K/16K cast steel flanged marine globe stop valve.',
    specifications: {
      'Standard': 'JIS F7305 / JIS F7307',
      'Pressure Class': 'JIS 5K, 10K, 16K',
      'Size Range': 'DN25 - DN300',
      'Body': 'Cast Steel SC480',
      'Trim': 'Stainless Steel SUS420'
    },
    image: '/images/valve_5683468346345634-6marine-steel-globe-valve-j.webp',
    inStock: true,
    leadTime: 'All Standard Sizes in Stock',
    certification: ['ClassNK', 'CCS', 'DNV'],
    featured: true
  },
  {
    id: 'valve-marine-ball',
    name: 'Marine Stainless Steel Threaded & Flanged Ball Valve',
    category: 'Valves',
    sector: 'marine',
    model: 'SS316 2-Piece / 3-Piece Ball Valve',
    partNumber: 'WZS-BV-SS316-DN50',
    oemEquivalent: 'Marine Piping Standard',
    compatibleBrands: ['WZS Marine', 'Swagelok', 'Parker'],
    description: 'Full-bore marine grade SS316 ball valve designed for fuel lines, lube lines, compressed air, and sea water sampling. Features blowout-proof stem and PTFE seats.',
    shortDescription: 'Full-bore marine SS316 ball valve for fuel and compressed air lines.',
    specifications: {
      'Material': 'CF8M (Stainless Steel 316)',
      'Pressure': '1000 WOG (6.4 MPa)',
      'Seat': 'Reinforced PTFE (RPTFE)',
      'End Connection': 'Threaded BSP / NPT / Flanged'
    },
    image: '/images/valve_256825284525423525-marien-ball-valve-1-j.webp',
    inStock: true,
    leadTime: 'In Stock',
    certification: ['ISO 9001', 'CE'],
    featured: false
  },
  {
    id: 'valve-safety-relief',
    name: 'Marine Boiler & Pressure Vessel Safety Relief Valve',
    category: 'Valves',
    sector: 'marine',
    model: 'Sanjie High-Lift Safety Valve',
    partNumber: 'WZS-SFV-5723',
    oemEquivalent: 'SOLAS Boiler Safety Standard',
    compatibleBrands: ['WZS Marine', 'Sanjie', 'Crosby'],
    description: 'Spring-loaded full-lift safety relief valve for marine auxiliary boilers, economizers, air receivers, and cargo piping systems. Pre-calibrated with Class inspection certificate.',
    shortDescription: 'Class-approved spring-loaded full-lift marine safety valve.',
    specifications: {
      'Type': 'Full Lift Spring Loaded',
      'Set Pressure Range': '0.1 MPa to 3.2 MPa',
      'Temperature': '-20°C to +350°C',
      'Body Material': 'Cast Steel WCB'
    },
    image: '/images/valve_57235892352354-sanjie-safety-valve-1-j.webp',
    inStock: true,
    leadTime: 'In Stock (Pre-Set and Certified)',
    certification: ['CCS', 'ClassNK', 'DNV'],
    featured: false
  },

  // ==================== MOTORS (REAL WZS MARINE DATA) ====================
  {
    id: 'motor-yh-three-phase',
    name: 'Marine Three-Phase Asynchronous Motor Y-H Series (IP44 / IP56)',
    category: 'Motors',
    sector: 'marine',
    model: 'Y-H Series Marine Motor',
    partNumber: 'Y-H-132M-4',
    oemEquivalent: 'WZS Marine Machinery Electric',
    compatibleBrands: ['WZS Marine', 'Siemens', 'ABB'],
    description: 'Totally enclosed marine duty three-phase squirrel-cage induction motor built to withstand salt mist, vibration, and ship roll/pitch. Used on pumps, deck winches, separators, and fans.',
    shortDescription: 'Y-H series marine three-phase asynchronous motor for shipboard machinery.',
    specifications: {
      'Rated Output': '1.5 kW to 110 kW',
      'Voltage': '380V / 50Hz, 440V / 60Hz marine',
      'Protection Degree': 'IP44 / IP56 Marine Grade',
      'Insulation': 'Class F (Class B temperature rise)',
      'Mounting': 'B3 Foot / B5 Flange / B35'
    },
    image: '/images/motor_y-h-series-ip44-marine-three-phase-asynchronous-motor-634-j.webp',
    inStock: true,
    leadTime: 'Common Sizes in Stock',
    certification: ['CCS', 'ClassNK', 'DNV'],
    featured: true
  },
  {
    id: 'motor-yzr-crane',
    name: 'Marine Cargo Crane & Winch Wound-Rotor Motor YZR Series',
    category: 'Motors',
    sector: 'marine',
    model: 'YZR112M-6 / YZTD Series',
    partNumber: 'YZR-112M-6-WZS',
    oemEquivalent: 'MacGregor / TTS Crane Standard',
    compatibleBrands: ['WZS Marine', 'MacGregor', 'Liebherr'],
    description: 'Heavy duty slip-ring wound-rotor marine motor designed for cargo winches, mooring capstans, and deck cranes. High starting torque with smooth acceleration under full shipboard loads.',
    shortDescription: 'Marine cargo crane and winch high-torque wound-rotor motor.',
    specifications: {
      'Model': 'YZR112M-6',
      'Duty': 'S3 - 40% intermittent marine rating',
      'Starting Torque': '250% rated torque',
      'Insulation': 'Class H High Temperature'
    },
    image: '/images/motor_3452375723589723952354-yzr112m-6-1-j.webp',
    inStock: true,
    leadTime: 'In Stock',
    certification: ['CCS'],
    featured: false
  },

  // ==================== NAVIGATION EQUIPMENT (REAL WZS DATA) ====================
  {
    id: 'nav-weidian-tachometer',
    name: 'Marine Main Engine Tachometer & Bridge Speed Indicator',
    category: 'Navigation Equipment',
    sector: 'marine',
    model: 'WDLYC 192x192 Backlight Indicator',
    partNumber: 'WDLYC-192-RPM',
    oemEquivalent: 'Wei Dian Union Marine Instruments',
    compatibleBrands: ['WZS Marine', 'Wei Dian Union', 'Yokogawa'],
    description: 'Illuminated bridge and engine control room tachometer indicator. Displays propeller shaft speed and engine RPM with adjustable red/amber night-vision backlighting.',
    shortDescription: 'Marine bridge and engine control room tachometer speed indicator.',
    specifications: {
      'Dial Size': '192 x 192 mm panel mount',
      'Lighting': 'Integrated adjustable dimming backlight',
      'Input Signal': 'Magnetic pulse sensor / 4-20mA / Pulse frequency',
      'Accuracy': 'Class 1.0 Marine Standard'
    },
    image: '/images/nav_wdlych-marine-tachometer-with-backlight-and-bracket-192-192cm-1-j.webp',
    inStock: true,
    leadTime: 'In Stock',
    certification: ['CCS', 'ISO 9001'],
    featured: true
  },
  {
    id: 'nav-marine-freq-meter',
    name: 'Marine Wide-Angle Frequency & Power Distribution Meter',
    category: 'Navigation Equipment',
    sector: 'marine',
    model: 'WDG96-Hz / WDG72-Hz',
    partNumber: 'WDG96-HZ-WZS',
    oemEquivalent: 'Wei Dian Union Standard',
    compatibleBrands: ['WZS Marine', 'Wei Dian Union', 'Schneider'],
    description: 'Precision 240° wide-angle pointer frequency meter for marine switchboards, generator control consoles, and bridge electrical monitoring.',
    shortDescription: 'Marine 240° wide-angle generator frequency meter 45-65 Hz.',
    specifications: {
      'Frequency Range': '45 - 55 Hz / 55 - 65 Hz',
      'Voltage Input': '100V, 220V, 380V, 440V AC',
      'Angle': '240° Wide Angle Scale',
      'Vibration Resistance': 'Grade 2 Marine Shock Proof'
    },
    image: '/images/nav_wdlych-marine-wide-angle-frequency-meter-wdg96-hz-wdg72-hz-f96-hz-f72-hz234234-1-j.webp',
    inStock: true,
    leadTime: 'In Stock',
    certification: ['CCS'],
    featured: false
  },

  // ==================== AUTOMATION SYSTEMS ====================
  {
    id: 'auto-pressure-transducer',
    name: 'Marine Pressure Transducer & Engine Monitoring Sensor',
    category: 'Automation Systems',
    sector: 'marine',
    model: 'PDCR-921 / IS-1745 Intrinsically Safe',
    partNumber: 'PDCR-921-1742',
    oemEquivalent: 'Druck / GE / WZS Marine Instrument',
    compatibleBrands: ['WZS Marine', 'Druck', 'Danfoss'],
    description: 'Intrinsically safe heavy-duty marine pressure transmitter for main engine lube oil pressure, starting air bottles, scavenge air manifold, and ballast tank level gauging.',
    shortDescription: 'Intrinsically safe marine pressure transmitter for engine monitoring.',
    specifications: {
      'Model': 'PDCR-921-1742',
      'Pressure Range': '0 to 10 Bar / 0 to 40 Bar / 0 to 250 Bar',
      'Output': '4-20 mA 2-wire loop powered',
      'Explosion Proof': 'Ex ia IIC T4 Intrinsically Safe'
    },
    image: '/images/nav_pdcr-921-1742-pressure-transducer-pdcr-is-1745-is-0069-1-j.webp',
    inStock: true,
    leadTime: 'Stock Available',
    certification: ['ATEX', 'CCS', 'DNV'],
    featured: true
  },

  // ==================== ELECTRICAL EQUIPMENT ====================
  {
    id: 'elec-marine-lighting',
    name: 'Marine Explosion-Proof & Deck Navigation Floodlight',
    category: 'Electrical Equipment',
    sector: 'marine',
    model: 'Marine LED Heavy Deck Floodlight',
    partNumber: 'WZS-LGT-2236',
    oemEquivalent: 'WZS Marine Lighting',
    compatibleBrands: ['WZS Marine', 'Glamox', 'DHR'],
    description: 'Corrosion-proof marine grade stainless steel and copper alloy floodlight with tempered safety glass. Sealed to IP67 for cargo holds, open decks, and tanker manifold lighting.',
    shortDescription: 'IP67 stainless steel marine deck floodlight and searchlight.',
    specifications: {
      'Wattage': '200W / 400W High Lumen LED',
      'Voltage': '110V - 240V AC 50/60Hz',
      'Protection': 'IP67 Waterproof & Anti-Corrosion (C5-M)',
      'Housing': 'Marine Grade Cast Alloy'
    },
    image: '/images/elec_2236674088_1185364784-j.webp',
    inStock: true,
    leadTime: 'In Stock',
    certification: ['CCS', 'CE'],
    featured: true
  },

  // ==================== COMPRESSORS ====================
  {
    id: 'comp-marine-starting',
    name: 'Marine Starting Air Compressor Complete Unit & Spare Parts',
    category: 'Compressors',
    sector: 'marine',
    model: '30-Bar 2-Stage Reciprocating Unit',
    partNumber: 'NVX-CMP-30BAR',
    oemEquivalent: 'Tanabe / Sperre / Yanmar Standard',
    compatibleBrands: ['Tanabe', 'Sperre', 'Yanmar', 'Matsubara'],
    description: 'Heavy duty 30-bar marine starting air compressor and replacement valve plates, piston rings, connecting rods, and crankshafts for ship main engine starting systems.',
    shortDescription: '30-Bar two-stage reciprocating marine starting air compressor.',
    specifications: {
      'Discharge Pressure': '3.0 MPa (30 Bar)',
      'FAD Capacity': '45 to 160 m³/h',
      'Cooling': 'Water Cooled or Air Cooled options',
      'Motor': '15 kW - 37 kW Marine Rated'
    },
    image: '/images/deck_three-lobe-rotary-blower-tss-32-for-marine-sewage-1-4493-j.webp',
    inStock: true,
    leadTime: 'Stock Singapore & Rotterdam',
    certification: ['ClassNK', 'DNV', 'ABS'],
    featured: true
  },

  // ==================== ANCHORS ====================
  {
    id: 'anc-ac14-marine',
    name: 'AC-14 High Holding Power (HHP) Stockless Anchor',
    category: 'Anchors',
    sector: 'marine',
    model: 'AC-14 HHP (1,000kg - 15,000kg)',
    partNumber: 'NVX-ANC-AC14',
    oemEquivalent: 'IACS Class Certified Anchor',
    compatibleBrands: ['WZS Marine', 'Vicor', 'Vryhof'],
    description: 'IACS classification certified high-holding power stockless bower anchor with wide flukes for rapid penetration and double holding capacity compared to standard Hall anchors.',
    shortDescription: 'IACS Class certified AC-14 High Holding Power marine anchor.',
    specifications: {
      'Weight': '500 kg to 20,000 kg',
      'Material': 'Normalized Cast Steel ZG200-400',
      'Holding Power': 'Twice standard Hall anchor capacity',
      'Testing': 'Class Pull-Test Certified'
    },
    image: '/images/ship2.jpeg',
    inStock: true,
    leadTime: 'Ready in Yard (Zhoushan, Alang, Singapore)',
    certification: ['DNV', 'ClassNK', 'Lloyds Register', 'ABS'],
    featured: true
  },

  // ==================== ROPES ====================
  {
    id: 'rope-uhmwpe-marine',
    name: '12-Strand UHMWPE High-Tenacity Mooring Line (MEG4)',
    category: 'Ropes',
    sector: 'marine',
    model: 'UHMWPE Plasma 12-Strand',
    partNumber: 'NVX-ROP-UHMWPE',
    oemEquivalent: 'OCIMF MEG4 Standard',
    compatibleBrands: ['Samson', 'Marlow', 'Katradis'],
    description: 'High strength, lightweight synthetic mooring line that floats on seawater. 7 times lighter than steel wire of equivalent breaking load with low snap-back risk.',
    shortDescription: 'OCIMF MEG4 compliant 12-strand UHMWPE lightweight mooring hawser.',
    specifications: {
      'Diameter': '32 mm to 88 mm',
      'Breaking Strength': 'Up to 5,500 kN (560 Tons)',
      'Specific Gravity': '0.97 (Floats on water)',
      'Eyes': 'Reinforced Cordura Chafe Sleeves on both ends'
    },
    image: '/images/ship3.webp',
    inStock: true,
    leadTime: 'Coils in Stock Worldwide',
    certification: ['OCIMF MEG4 Certified', 'DNV Type Approval'],
    featured: true
  },

  // ==================== STORES ====================
  {
    id: 'store-sacrificial-anodes',
    name: 'Zinc & Aluminium Sacrificial Hull Cathodic Anodes',
    category: 'Stores',
    sector: 'marine',
    model: 'IMPA 67 01 Weld-On / Bolt-On Anodes',
    partNumber: 'IMPA-670101',
    oemEquivalent: 'US Military Spec MIL-A-18001K',
    compatibleBrands: ['Wilson Walton', 'Cathelco', 'WZS Marine'],
    description: 'High efficiency cathodic protection sacrificial zinc and aluminium anodes for ship hull plating, rudder blades, sea chests, and ballast tanks.',
    shortDescription: 'Sacrificial zinc and aluminium hull anodes for corrosion protection.',
    specifications: {
      'Alloy': 'High Purity Zinc (99.995%) or Al-Zn-In Alloy',
      'Capacity': 'Zinc 780 Ah/kg | Al 2700 Ah/kg',
      'Mounting': 'Steel Core Strap for direct hull welding',
      'IMPA Code': 'IMPA Chapter 67'
    },
    image: '/images/deck_german-centamaxcm3500-marine-diesel-engine-vasiland-generator-set-high-elasticity-coupling-rubber-pad-1-8880-j.webp',
    inStock: true,
    leadTime: 'Tons in Stock at Major Port Warehouses',
    certification: ['ISO 9001', 'DNV Verified'],
    featured: true
  }
];
