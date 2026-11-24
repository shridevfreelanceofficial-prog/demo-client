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
  MessageCircle,
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

  const categoryDescriptions: Record<string, string> = {
    'Engine Spare Parts': 'Pistons, cylinder liners, cylinder heads, valves & fuel injection systems',
    'Turbochargers': 'Complete assemblies, rotor shafts, turbine blades & nozzle rings',
    'Purifiers': 'Centrifugal fuel & lube oil separators, bowls & seal rings',
    'Heat Exchangers': 'Plate type coolers, titanium plates, gaskets & fresh water generators',
    'Compressors': '2-stage marine air compressors, valve plates, piston rings & gaskets',
    'Pumps': 'Lube oil, ballast, centrifugal, screw, boiler feed & oily bilge pumps',
    'Valves': 'Marine JIS/DIN bronze & cast steel globe, butterfly, storm & safety valves',
    'Motors': 'IP44 & IP56 marine 3-phase asynchronous & explosion-proof electric motors',
    'Navigation Equipment': 'Radar scanners, ECDIS, gyrocompasses, GPS & tachometer indicators',
    'Automation Systems': 'Pressure transducers, temperature transmitters, sensors & PLC units',
    'Electrical Equipment': 'Generators, rectifiers, main switchboards, circuit breakers & relays',
    'Anchors': 'Stockless bower anchors, stud link anchor chains & kenter shackles',
    'Ropes': 'Mooring tails, polypropylene, wire ropes & ultra-high molecular synthetic lines',
    'Stores': 'Deck consumables, engine room pneumatic tools & marine hardware supplies'
  };

  return (
    <>
      {/* 2. Hero Section with Local Video Background */}
      <section style={{
        position: 'relative',
        minHeight: '84vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        overflow: 'hidden'
      }}>
        {/* Background Video */}
        <div style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 0
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          >
            <source src="/video/ship_hero.mp4" type="video/mp4" />
          </video>
          {/* Dark Navy Overlay for Crisp Readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(10, 37, 64, 0.72) 0%, rgba(10, 37, 64, 0.5) 45%, rgba(10, 37, 64, 0.88) 100%)'
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
              <a
                href="https://wa.me/919819899051?text=Inquiry%20regarding%20marine%20spares"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  backgroundColor: '#25D366',
                  borderColor: '#25D366',
                  padding: '14px 28px',
                  fontSize: '1rem',
                  boxShadow: '0 4px 15px rgba(37,211,102,0.4)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#ffffff',
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>

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
                <span className="sub-title">About Crest & Caliper Spares</span>
                <h2 className="main-title">Ship Machinery & Engine Spares Supplier</h2>
              </div>

              <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '16px', color: '#475569' }}>
                <strong>Crest & Caliper Spares</strong> is a premier global provider of genuine and OEM marine machinery, main & auxiliary diesel engine spare parts, and comprehensive port agency engineering.
              </p>

              <p style={{ fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '24px', color: '#64748b' }}>
                With dedicated supply hubs in Singapore, Rotterdam, Fujairah, and Mumbai, we supply commercial container carriers, bulk carriers, tankers, and offshore tugs with tested components aligned with <strong>IACS classification rules (DNV, ClassNK, Lloyd&apos;s Register, ABS)</strong>.
              </p>

              {/* Key Features Bullet Points */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '14px', marginBottom: '30px' }}>
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

              <div className="btn-group-responsive">
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

      {/* 4. The 12 Marine Products Categories (Clean Technical Cards - No Images) */}
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {MARINE_CATEGORIES.map((cat, idx) => {
              const desc = categoryDescriptions[cat] || 'Certified spares and assemblies for commercial marine vessels.';
              return (
                <Link
                  key={idx}
                  href={`/products?category=${encodeURIComponent(cat)}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '24px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s ease'
                  }}
                  className="hover:border-sky-500 hover:shadow-md"
                >
                  <div>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      backgroundColor: '#e0f2fe',
                      color: '#0284c7',
                      marginBottom: '16px'
                    }}>
                      <Layers size={22} />
                    </div>

                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: '#0a2540',
                      marginBottom: '8px',
                      lineHeight: 1.3
                    }}>
                      {cat}
                    </h4>

                    <p style={{
                      fontSize: '0.86rem',
                      color: '#64748b',
                      lineHeight: 1.5,
                      margin: 0
                    }}>
                      {desc}
                    </p>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                    paddingTop: '12px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#0284c7'
                  }}>
                    <span>Explore Spares</span>
                    <ChevronRight size={16} />
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
              Verified technical specifications, OEM part numbers, and classification certificates for marine machinery.
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

          <div style={{ textAlign: 'center', padding: '0 12px' }}>
            <a
              href="https://wa.me/919819899051?text=Inquiry%20regarding%20marine%20equipment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-vessel-inquiry"
              style={{
                padding: '10px 20px',
                fontSize: '0.84rem',
                backgroundColor: '#25D366',
                borderColor: '#25D366',
                color: '#ffffff',
                textDecoration: 'none',
                maxWidth: '100%',
                boxSizing: 'border-box',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MessageCircle size={15} />
              <span>Submit Vessel Enquiry via WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 6. Global Maritime Delivery Network with Animated Ocean Ship GIF Background */}
      <section style={{
        position: 'relative',
        padding: '100px 0',
        color: '#ffffff',
        textAlign: 'center',
        backgroundImage: `linear-gradient(rgba(10, 37, 64, 0.78), rgba(10, 37, 64, 0.88)), url('/gifs/ship.gif')`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderTop: '3px solid #0284c7',
        borderBottom: '3px solid #0284c7',
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
            marginBottom: '16px',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}>
            Fast Global Delivery to Vessel Anchorage & Berth
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#e2e8f0',
            lineHeight: 1.7,
            marginBottom: '32px',
            textShadow: '0 1px 4px rgba(0,0,0,0.8)'
          }}>
            Whether your vessel is calling Singapore, Rotterdam, Fujairah, or Houston — our logistics teams ensure smooth customs clearance under &ldquo;Ship Spares in Transit&rdquo; and immediate launch boat boarding.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919819899051?text=Urgent%20vessel%20delivery%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                backgroundColor: '#25D366',
                borderColor: '#25D366',
                padding: '14px 34px',
                color: '#ffffff',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MessageCircle size={18} />
              <span>Contact via WhatsApp</span>
            </a>

            <Link href="/services/express-shipment" className="btn btn-outline-white" style={{ padding: '14px 28px' }}>
              <span>Express Logistics Info</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Maritime Services (Clean White Section - Shiphandling Removed) */}
      <section className="section section-white">
        <div className="container">

          <div className="section-header">
            <span className="sub-title">Technical Support</span>
            <h2 className="main-title">Our Maritime Services</h2>
            <p style={{ maxWidth: '650px', margin: '14px auto 0', color: '#64748b' }}>
              Field-proven voyage engineering, afloat hull maintenance, and AOG logistics.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
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

            {/* 2. Hull cleaning */}
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

            {/* 3. Express Shipment */}
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

      {/* 8. Assistance Strip */}
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
            Our marine superintendents provide technical assistance and availability within 60 minutes.
          </p>
          <a
            href="https://wa.me/919819899051?text=Immediate%20spare%20parts%20inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-vessel-inquiry"
            style={{
              backgroundColor: '#25D366',
              borderColor: '#25D366',
              padding: '11px 22px',
              fontSize: '0.85rem',
              maxWidth: '100%',
              boxSizing: 'border-box',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              color: '#ffffff',
              textDecoration: 'none'
            }}
          >
            <MessageCircle size={16} />
            <span>Inquire on WhatsApp (98198 99051)</span>
          </a>
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
