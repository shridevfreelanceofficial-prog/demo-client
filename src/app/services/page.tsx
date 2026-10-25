'use client';

import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { useRFQ } from '@/components/LayoutWrapper';
import { 
  Wrench, 
  Compass, 
  Sparkles, 
  PlaneTakeoff, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileSpreadsheet,
  Anchor,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function ServicesPage() {
  const { openRFQ } = useRFQ();

  const serviceIcons: Record<string, React.ReactNode> = {
    'repair': <Wrench size={28} />,
    'shiphandling': <Compass size={28} />,
    'hull-cleaning': <Sparkles size={28} />,
    'express-shipment': <PlaneTakeoff size={28} />
  };

  return (
    <>
      {/* 1. Header Banner */}
      <section 
        className="hero-header"
        style={{
          backgroundColor: '#0a2540',
          padding: '70px 0 55px',
          color: '#ffffff',
          borderBottom: '3px solid #0284c7'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '4px', backgroundColor: 'rgba(2, 132, 199, 0.2)', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px' }}>
              <Anchor size={15} /> Voyage Support & Port Engineering
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px', color: '#ffffff' }}>
              Comprehensive Maritime Services & Technical Solutions
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '24px' }}>
              From emergency voyage repairs and main engine overhaul to vessel husbandry, green hull grooming, and express air charter logistics — Navyronix keeps maritime vessels compliant, seaworthy, and on schedule.
            </p>

            <div className="btn-group-responsive">
              <button 
                onClick={() => openRFQ('Maritime Services General Inquiry')}
                className="btn btn-primary"
                style={{ padding: '12px 28px', backgroundColor: '#0284c7', borderColor: '#0284c7' }}
              >
                <FileSpreadsheet size={16} />
                <span>Request Service Attendance</span>
              </button>
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="btn"
                style={{ 
                  padding: '12px 24px', 
                  backgroundColor: '#061c3d', 
                  color: '#ffffff', 
                  border: '1px solid rgba(255, 255, 255, 0.2)' 
                }}
              >
                <PhoneCall size={16} color="#38bdf8" />
                <span>24/7 Operations Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 Core Services Grid (Clean White Cards) */}
      <section style={{ padding: '60px 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <div style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Our Capabilities
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a2540' }}>
              Specialized Maritime Services
            </h2>
            <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '8px' }}>
              Select a specialized service category below to view technical scopes, deployment capabilities, and certifications.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {Object.values(SERVICES).map((srv) => (
              <div 
                key={srv.slug}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                {/* Image Banner */}
                <div style={{ position: 'relative', height: '200px', backgroundColor: '#0a2540', overflow: 'hidden' }}>
                  <img 
                    src={srv.heroImage} 
                    alt={srv.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: '#0a2540',
                    color: '#ffffff',
                    width: '46px',
                    height: '46px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  }}>
                    {serviceIcons[srv.slug] || <Wrench size={24} />}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0a2540', marginBottom: '10px' }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
                    {srv.description}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#0284c7', marginBottom: '8px' }}>
                      Key Capabilities:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {srv.capabilities.slice(0, 3).map((cap, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                          <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link 
                      href={`/services/${srv.slug}`}
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '10px 16px', fontSize: '0.88rem', justifyContent: 'center', backgroundColor: '#0a2540' }}
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={14} />
                    </Link>
                    <button 
                      onClick={() => openRFQ(srv.title)}
                      className="btn"
                      style={{ 
                        padding: '10px 16px', 
                        fontSize: '0.88rem', 
                        border: '1px solid #cbd5e1', 
                        backgroundColor: '#ffffff', 
                        color: '#0a2540',
                        fontWeight: 600
                      }}
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Standards & Deployments */}
      <section style={{ padding: '60px 0', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0a2540', marginBottom: '6px' }}>24/7 Riding Squads</h4>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.5 }}>Certified marine diesel mechanics and certified coded welders mobilized within 12 hours to any anchorage.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0a2540', marginBottom: '6px' }}>IACS Class Approved</h4>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.5 }}>Repairs executed in full compliance with DNV, Lloyd's Register, ABS, and BV standards and certification reports.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FileSpreadsheet size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0a2540', marginBottom: '6px' }}>Transparent Proforma Costing</h4>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.5 }}>No hidden fees. Full breakdown of technician daily rates, launch boat fees, permits, and consumable costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
