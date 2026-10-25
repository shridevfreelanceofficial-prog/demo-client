'use client';

import React from 'react';
import Link from 'next/link';
import { useRFQ } from '@/components/LayoutWrapper';
import { 
  Anchor, 
  ShieldCheck, 
  Award, 
  Globe2, 
  CheckCircle2, 
  Clock, 
  Users, 
  Wrench, 
  FileSpreadsheet,
  ArrowRight,
  Ship,
  Compass,
  Boxes,
  Layers,
  Settings
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function AboutPage() {
  const { openRFQ } = useRFQ();

  return (
    <>
      {/* 1. Sticked Video GIF Background for About Us */}
      <div className="fixed-about-bg" />
      <div className="fixed-about-overlay" />

      {/* 2. Page Header (Over Sticked Video GIF Background) */}
      <section 
        className="hero-header"
        style={{
          position: 'relative',
          padding: '85px 0 65px',
          color: '#ffffff',
          backgroundColor: 'rgba(10, 37, 64, 0.72)',
          backdropFilter: 'blur(3px)',
          borderBottom: '3px solid #0284c7'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '4px', backgroundColor: 'rgba(2, 132, 199, 0.35)', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', backdropFilter: 'blur(4px)' }}>
              <Ship size={15} /> Company Profile & Maritime Heritage
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px', color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              Specialized Marine Machinery & Diesel Engine Spare Parts Supplier
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#f8fafc', lineHeight: 1.6, marginBottom: '24px', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
              Navyronix is a globally recognized supplier and service partner for shipowners, vessel technical managers, and marine engineering contractors across 450+ ports worldwide.
            </p>

            <div className="btn-group-responsive">
              <button 
                onClick={() => openRFQ()}
                className="btn btn-primary"
                style={{ padding: '12px 28px', backgroundColor: '#0284c7', borderColor: '#0284c7' }}
              >
                <FileSpreadsheet size={16} />
                <span>Request Equipment Quotation</span>
              </button>
              <Link 
                href="/products" 
                className="btn" 
                style={{ 
                  padding: '12px 24px', 
                  backgroundColor: 'rgba(10, 37, 64, 0.65)', 
                  color: '#ffffff', 
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(4px)'
                }}
              >
                <span>Browse Marine Spares</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Bar (Clean White / Light Slate) */}
      <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #e2e8f0', padding: '30px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '20px'
          }}>
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div 
                key={idx}
                style={{
                  borderLeft: '4px solid #0284c7',
                  paddingLeft: '14px'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                  fontWeight: 800,
                  color: '#0a2540',
                  lineHeight: 1
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Company Story & Real Ship Image Showcase */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'center' }}>
            
            {/* Left Story Text */}
            <div>
              <div style={{ display: 'inline-block', color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                About Navyronix
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a2540', marginBottom: '20px', lineHeight: 1.25 }}>
                Supplying Premium Quality Marine Equipment Since 1999
              </h2>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '16px' }}>
                Navyronix was founded with a single mission: to provide shipowners and vessel operators with dependable, fast, and transparent marine machinery parts supply. From heavy-duty 2-stroke and 4-stroke marine diesel engine components to turbochargers, air compressors, and pumps, we stock and source equipment from leading global makers.
              </p>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
                We maintain active warehousing and technical transit hubs near major container terminals, shipyards, and bunkering anchorages. Our team consists of licensed Chief Engineers and master mariners who verify part numbers, tolerances, and Class approvals before any component leaves our facilities.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#0284c7" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#1e293b', fontWeight: 600 }}>Extensive Ready Stock for Immediate Vessel Dispatch</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#0284c7" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#1e293b', fontWeight: 600 }}>OEM Grade & Class-Certified Components (IACS Societies)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} color="#0284c7" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#1e293b', fontWeight: 600 }}>24/7 Voyage Engineering & Port Agency Coordination</span>
                </div>
              </div>
            </div>

            {/* Right Side: Dual Ship Images Stacked */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 20px 35px rgba(10, 37, 64, 0.12)',
                border: '4px solid #ffffff'
              }}>
                <img 
                  src="/images/ship3.webp" 
                  alt="Navyronix Vessel Cargo & Deck Operations"
                  style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Inset Photo (ship2.jpeg) */}
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-20px',
                width: '260px',
                height: '190px',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 15px 30px rgba(10, 37, 64, 0.2)',
                border: '4px solid #ffffff',
                backgroundColor: '#ffffff'
              }} className="nav-desktop-only">
                <img 
                  src="/images/ship2.jpeg" 
                  alt="Marine Anchor and Equipment Stock"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Experience Badge */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                backgroundColor: '#0a2540',
                color: '#ffffff',
                padding: '12px 18px',
                borderRadius: '6px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
              }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8', lineHeight: 1 }}>25+ Years</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '4px' }}>Maritime Excellence</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Clean White Cards) */}
      <section style={{ padding: '70px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <div style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Our Competitive Edge
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a2540' }}>
              Why Fleet Operators Choose Navyronix
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '8px' }}>
              Engineered reliability, rapid quotes, and dependable worldwide logistics for zero vessel downtime.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '30px',
              transition: 'all 0.25s ease'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                backgroundColor: '#0a2540',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Boxes size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0a2540', marginBottom: '10px' }}>
                Massive Physical Stock
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Thousands of complete marine turbochargers, cylinder covers, fuel injectors, pumps, and valves maintained in strategic warehouses for urgent delivery.
              </p>
            </div>

            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '30px',
              transition: 'all 0.25s ease'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                backgroundColor: '#0a2540',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0a2540', marginBottom: '10px' }}>
                Strict Quality Inspection
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Every item is tested for dimensional accuracy, dynamic rotor balance, and hydrostatic pressure, backed by traceable material test reports and mill sheets.
              </p>
            </div>

            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '30px',
              transition: 'all 0.25s ease'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                backgroundColor: '#0a2540',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Clock size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0a2540', marginBottom: '10px' }}>
                60-Minute RFQ Turnaround
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Our 24/7 technical desk delivers rapid proforma quotations with precise weights, dimensions, customs HS codes, and guaranteed port delivery windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Global Supply Hubs (Al-Tech Marine style) */}
      <section style={{ padding: '70px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <div style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              International Coverage
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a2540' }}>
              Our Strategic Marine Hubs
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '8px' }}>
              Immediate customs clearance and off-port-limit (OPL) launch boat deliveries at key global anchorages.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {COMPANY_INFO.hubs.map((hub, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '24px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Globe2 size={20} color="#0284c7" />
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0a2540' }}>
                    {hub.city}
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>({hub.country})</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  {hub.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action Banner with Ocean GIF Background */}
      <section 
        className="cta-banner"
        style={{
          position: 'relative',
          padding: '75px 0',
          color: '#ffffff',
          textAlign: 'center',
          backgroundImage: `linear-gradient(rgba(10, 37, 64, 0.78), rgba(10, 37, 64, 0.85)), url('/gifs/video-from-rawpixel-id-18087970-gif.gif')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderTop: '3px solid #0284c7',
          borderBottom: '3px solid #0284c7',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <h3 style={{ 
            fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            marginBottom: '14px',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}>
            Looking for Marine Spares or Technical Overhaul Assistance?
          </h3>
          <p style={{ 
            color: '#f8fafc', 
            fontSize: '1.05rem', 
            maxWidth: '680px', 
            margin: '0 auto 28px',
            lineHeight: 1.6,
            textShadow: '0 1px 4px rgba(0,0,0,0.8)'
          }}>
            Submit your part numbers or engine specifications. Our duty technical superintendent will prepare a comprehensive quotation within 60 minutes.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => openRFQ()}
              className="btn btn-primary"
              style={{ 
                padding: '14px 34px', 
                backgroundColor: '#0284c7', 
                borderColor: '#0284c7', 
                color: '#ffffff', 
                fontWeight: 700 
              }}
            >
              <FileSpreadsheet size={18} />
              <span>Submit RFQ Now</span>
            </button>
            <Link 
              href="/contact" 
              className="btn" 
              style={{ 
                padding: '14px 30px', 
                backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                color: '#ffffff', 
                border: '1px solid rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(4px)',
                fontWeight: 700
              }}
            >
              <span>Contact Operations Team</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
