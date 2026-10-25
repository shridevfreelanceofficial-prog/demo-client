'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { useRFQ } from '@/components/LayoutWrapper';
import { PRODUCTS, MARINE_CATEGORIES } from '@/data/products';
import { SERVICES } from '@/data/services';
import { COMPANY_INFO } from '@/data/company';
import { Product } from '@/types';
import { 
  Ship, 
  ArrowRight, 
  ShieldCheck, 
  Wrench, 
  Compass, 
  Sparkles, 
  PlaneTakeoff, 
  CheckCircle2, 
  Anchor, 
  Clock, 
  FileSpreadsheet,
  PhoneCall,
  Search,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const { openRFQ } = useRFQ();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sliced featured products
  const featuredProducts = PRODUCTS.slice(0, 8);

  const categoryImages: Record<string, string> = {
    'Engine Spare Parts': '/images/engine_zxq100-12-siemens-generator-rotary-rectifier-module-wuxi-feihang-j.webp',
    'Turbochargers': '/images/turbo_qsk19-turbocharger-hx83-assy4041703-cust4041702-288177-463456-1-j.webp',
    'Compressors': '/images/deck_three-lobe-rotary-blower-tss-32-for-marine-sewage-1-4493-j.webp',
    'Pumps': '/images/pump_marine-lube-oil-gear-pump-2cy-1-1-14-5-2-5345-1-j.webp',
    'Valves': '/images/valve_5683468346345634-6marine-steel-globe-valve-j.webp',
    'Motors': '/images/motor_y-h-series-ip44-marine-three-phase-asynchronous-motor-634-j.webp',
    'Navigation Equipment': '/images/nav_wdlych-marine-tachometer-with-backlight-and-bracket-192-192cm-1-j.webp',
    'Automation Systems': '/images/nav_pdcr-921-1742-pressure-transducer-pdcr-is-1745-is-0069-1-j.webp',
    'Electrical Equipment': '/images/elec_2236674088_1185364784-j.webp',
    'Anchors': '/images/ship2.jpeg',
    'Ropes': '/images/ship3.webp',
    'Stores': '/images/deck_german-centamaxcm3500-marine-diesel-engine-vasiland-generator-set-high-elasticity-coupling-rubber-pad-1-8880-j.webp'
  };

  return (
    <>
      {/* 1. Sticked Ship GIF Background (As Requested: scrollable content, fixed gif) */}
      <div className="fixed-ship-bg" />
      <div className="fixed-ship-overlay" />

      {/* 2. Hero Section over Fixed Ship GIF */}
      <section style={{
        position: 'relative',
        minHeight: '84vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        zIndex: 1
      }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)',
              padding: '6px 16px',
              borderRadius: '4px',
              color: '#ffffff',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              border: '1px solid rgba(255,255,255,0.25)'
            }}>
              <Ship size={16} /> Worldwide Ship Machinery & Spares Supplier
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              textShadow: '0 3px 15px rgba(0,0,0,0.7)',
              marginBottom: '20px'
            }}>
              Our Experience, <br />
              <span style={{ color: '#38bdf8' }}>Your Seaworthiness</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
              color: '#f8fafc',
              lineHeight: 1.6,
              maxWidth: '720px',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              marginBottom: '32px'
            }}>
              A comprehensive range of marine diesel engine spares, turbochargers, pumps, compressors, and 24/7 afloat technical voyage repairs across 450+ international ports.
            </p>

            {/* Action Buttons */}
            <div className="btn-group-responsive" style={{ marginBottom: '36px' }}>
              <button 
                onClick={() => openRFQ()}
                className="btn btn-primary"
                style={{
                  backgroundColor: '#0284c7',
                  borderColor: '#0284c7',
                  padding: '14px 32px',
                  fontSize: '1rem',
                  boxShadow: '0 4px 15px rgba(2,132,199,0.4)'
                }}
              >
                <FileSpreadsheet size={18} />
                <span>Request a Quote (RFQ)</span>
              </button>

              <Link 
                href="/products" 
                className="btn btn-outline-white"
                style={{ padding: '14px 28px', fontSize: '1rem' }}
              >
                <span>Browse Marine Spares</span>
                <ArrowRight size={18} />
              </Link>

              <a 
                href={`tel:${COMPANY_INFO.emergencyHotline.replace(/\s+/g, '')}`}
                className="btn btn-red"
                style={{ padding: '14px 24px', fontSize: '1rem' }}
              >
                <PhoneCall size={18} />
                <span>Emergency Hotline</span>
              </a>
            </div>

            {/* Quick Part / Model Search Box */}
            <div 
              className="hero-search-box"
              style={{
                background: '#ffffff',
                borderRadius: '8px',
                padding: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                maxWidth: '680px'
              }}
            >
              <div style={{ paddingLeft: '12px', color: '#0a2540' }}>
                <Search size={20} />
              </div>
              <input 
                type="text"
                placeholder="Search marine part number, turbocharger model (e.g. QSK19, HX83, 2CY)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
                  }
                }}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.95rem',
                  color: '#1e293b',
                  fontFamily: 'inherit'
                }}
              />
              <button 
                onClick={() => {
                  window.location.href = searchQuery 
                    ? `/products?search=${encodeURIComponent(searchQuery)}`
                    : '/products';
                }}
                className="btn btn-primary"
                style={{ padding: '10px 22px', fontSize: '0.85rem' }}
              >
                Search
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Company Introduction & User Loaded Ship Images (Clean White Background) */}
      <section className="section section-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            
            {/* Left: User Uploaded Ship Images */}
            <div style={{ position: 'relative' }}>
              {/* Primary Image: Ship with products loaded (ship3.webp) */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(10, 37, 64, 0.15)',
                border: '4px solid #ffffff'
              }}>
                <img 
                  src="/images/ship3.webp" 
                  alt="Vessel Loaded with Marine Spares"
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
              </div>

              {/* Inset Secondary Image: Ship Loading (ship2.jpeg) */}
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-20px',
                width: '240px',
                height: '180px',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '4px solid #ffffff',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }} className="nav-desktop-only">
                <img 
                  src="/images/ship2.jpeg" 
                  alt="Marine Anchor and Cargo Loading"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Experience Stamp */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                backgroundColor: '#0a2540',
                color: '#ffffff',
                padding: '12px 18px',
                borderRadius: '8px',
                boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1 }}>25+</div>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  Years Experience
                </div>
              </div>
            </div>

            {/* Right: Company Profile & Capabilities */}
            <div>
              <div className="section-header text-left" style={{ marginBottom: '24px' }}>
                <span className="sub-title">About Navyronix</span>
                <h2 className="main-title">Ship Machinery & Engine Spares Supplier</h2>
              </div>

              <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '16px', color: '#475569' }}>
                <strong>Navyronix</strong> is a premier global provider of genuine and OEM marine machinery, main & auxiliary diesel engine spare parts, and comprehensive port agency engineering.
              </p>

              <p style={{ fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '24px', color: '#64748b' }}>
                With dedicated supply hubs in Singapore, Rotterdam, Fujairah, and Mumbai, we supply commercial container carriers, bulk carriers, tankers, and offshore tugs with tested components aligned with <strong>IACS classification rules (DNV, ClassNK, Lloyd&apos;s Register, ABS)</strong>.
              </p>

              {/* Key Features Bullet Points */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#0a2540', fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#0284c7" />
                  <span>85,000+ Parts in Stock</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#0a2540', fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#0284c7" />
                  <span>450+ Ports Worldwide</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#0a2540', fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#0284c7" />
                  <span>Class Mill Certificates</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#0a2540', fontWeight: 700 }}>
                  <CheckCircle2 size={18} color="#0284c7" />
                  <span>24/7 Riding Squads</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <Link href="/about" className="btn btn-primary">
                  <span>Read Full Profile</span>
                  <ArrowRight size={16} />
                </Link>
                <button onClick={() => openRFQ()} className="btn btn-outline">
                  <span>Request Proforma Quote</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. The 12 Marine Products Categories (Clean Light Grey Section) */}
      <section className="section section-light">
        <div className="container">
          
          <div className="section-header">
            <span className="sub-title">Marine Products Range</span>
            <h2 className="main-title">12 Marine Equipment Categories</h2>
            <p style={{ maxWidth: '650px', margin: '14px auto 0', color: '#64748b' }}>
              Genuine & OEM replacement machinery sourced directly for marine vessels and classified ship systems.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
            gap: '18px'
          }}>
            {MARINE_CATEGORIES.map((cat, idx) => {
              const imgSrc = categoryImages[cat] || '/images/ship2.jpeg';
              return (
                <Link 
                  key={idx}
                  href={`/products?category=${encodeURIComponent(cat)}`}
                  className="card-clean"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none'
                  }}
                >
                  {/* Category Real Photo */}
                  <div style={{
                    width: '100%',
                    height: '180px',
                    backgroundColor: '#ffffff',
                    borderBottom: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px'
                  }}>
                    <img 
                      src={imgSrc} 
                      alt={cat}
                      style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Link */}
                  <div style={{
                    padding: '16px 20px',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexGrow: 1
                  }}>
                    <div>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#0a2540',
                        marginBottom: '4px'
                      }}>
                        {cat}
                      </h4>
                      <span style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 600 }}>
                        View Products Catalog
                      </span>
                    </div>

                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0a2540'
                    }}>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/products" className="btn btn-primary" style={{ padding: '14px 34px' }}>
              <span>View All Marine Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Featured Products Showcase (WZS Marine Turbochargers & Spares) */}
      <section className="section section-white">
        <div className="container">
          
          <div className="section-header">
            <span className="sub-title">Inventory Spotlight</span>
            <h2 className="main-title">Featured Marine Spares & Turbochargers</h2>
            <p style={{ maxWidth: '650px', margin: '14px auto 0', color: '#64748b' }}>
              Real product details and images extracted from WZS Marine Service catalog.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '40px' }}>
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onViewDetails={(p) => setSelectedProduct(p)}
                onRequestQuote={(name) => openRFQ(name)}
              />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => openRFQ()}
              className="btn btn-primary"
              style={{ padding: '14px 36px', fontSize: '0.95rem' }}
            >
              <FileSpreadsheet size={18} />
              <span>Submit General Vessel Inquiry</span>
            </button>
          </div>

        </div>
      </section>

      {/* 6. Translucent Section revealing the Sticked ship.gif Background */}
      <section style={{
        position: 'relative',
        padding: '90px 0',
        backgroundColor: 'rgba(10, 37, 64, 0.78)',
        backdropFilter: 'blur(4px)',
        color: '#ffffff',
        textAlign: 'center',
        zIndex: 1
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '14px' }}>
            <Clock size={14} /> 24/7 Global Maritime Network
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '16px'
          }}>
            Fast Global Delivery to Vessel Anchorage & Berth
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#e2e8f0',
            lineHeight: 1.7,
            marginBottom: '32px'
          }}>
            Whether your vessel is calling Singapore, Rotterdam, Fujairah, or Houston — our logistics teams ensure smooth customs clearance under &ldquo;Ship Spares in Transit&rdquo; and immediate launch boat boarding.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => openRFQ()}
              className="btn btn-primary"
              style={{
                backgroundColor: '#0284c7',
                borderColor: '#0284c7',
                padding: '14px 34px'
              }}
            >
              <FileSpreadsheet size={18} />
              <span>Request Urgent Delivery</span>
            </button>

            <Link href="/services/express-shipment" className="btn btn-outline-white" style={{ padding: '14px 28px' }}>
              <span>Express Logistics Info</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. The 4 Maritime Services (Clean White Section) */}
      <section className="section section-white">
        <div className="container">
          
          <div className="section-header">
            <span className="sub-title">Technical Support</span>
            <h2 className="main-title">Our Maritime Services</h2>
            <p style={{ maxWidth: '650px', margin: '14px auto 0', color: '#64748b' }}>
              Field-proven voyage engineering, husbandry agency, and diving services.
            </p>
          </div>

          <div className="grid-4">
            {/* 1. Repair */}
            <div className="card-clean" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                backgroundColor: '#e0f2fe',
                color: '#0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <Wrench size={26} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a2540', marginBottom: '8px' }}>
                Repair & Overhaul
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '20px' }}>
                Diesel engine overhaul, in-situ crankshaft journal grinding, dynamic turbocharger balancing, and plate heat exchanger servicing.
              </p>
              <Link href="/services/repair" className="btn btn-outline" style={{ width: '100%', fontSize: '0.82rem' }}>
                <span>Read More</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* 2. Shiphandling */}
            <div className="card-clean" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                backgroundColor: '#fefce8',
                color: '#a16207',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <Compass size={26} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a2540', marginBottom: '8px' }}>
                Shiphandling
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '20px' }}>
                Comprehensive port agency, bunker coordination, crew changes, Cash to Master, and Off-Port Limits (OPL) launch boats.
              </p>
              <Link href="/services/shiphandling" className="btn btn-outline" style={{ width: '100%', fontSize: '0.82rem' }}>
                <span>Read More</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* 3. Hull cleaning */}
            <div className="card-clean" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                backgroundColor: '#ecfdf5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <Sparkles size={26} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a2540', marginBottom: '8px' }}>
                Hull cleaning
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '20px' }}>
                Eco-friendly ROV hull grooming with bio-capture, Rupert Grade A propeller super-polishing, and Class UWILD CCTV inspections.
              </p>
              <Link href="/services/hull-cleaning" className="btn btn-outline" style={{ width: '100%', fontSize: '0.82rem' }}>
                <span>Read More</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* 4. Express Shipment */}
            <div className="card-clean" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                backgroundColor: '#f3e8ff',
                color: '#7c3aed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <PlaneTakeoff size={26} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a2540', marginBottom: '8px' }}>
                Express Shipment
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '20px' }}>
                Time-critical air charters, onboard couriers (OBC), and bonded customs transit for critical machinery spares delivered to deck.
              </p>
              <Link href="/services/express-shipment" className="btn btn-outline" style={{ width: '100%', fontSize: '0.82rem' }}>
                <span>Read More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 8. RFQ Contact Strip */}
      <section style={{
        backgroundColor: '#0a2540',
        color: '#ffffff',
        padding: '50px 0'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
            Need Immediate Spare Parts or Technical Attendance?
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto 24px' }}>
            Our marine superintendents provide quotation and availability within 60 minutes.
          </p>
          <button 
            onClick={() => openRFQ()}
            className="btn btn-primary"
            style={{
              backgroundColor: '#0284c7',
              borderColor: '#0284c7',
              padding: '14px 34px',
              fontSize: '0.96rem'
            }}
          >
            <FileSpreadsheet size={18} />
            <span>Submit Vessel RFQ</span>
          </button>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(name) => openRFQ(name)}
      />
    </>
  );
}
