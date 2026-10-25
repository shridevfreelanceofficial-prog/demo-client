'use client';

import React from 'react';
import Link from 'next/link';
import { ServiceDetail } from '@/types';
import { useRFQ } from '@/components/LayoutWrapper';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  PhoneCall, 
  FileSpreadsheet,
  Globe2,
  Anchor,
  Wrench,
  Compass,
  Sparkles,
  PlaneTakeoff,
  Award,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface ServicePageTemplateProps {
  service: ServiceDetail;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const { openRFQ } = useRFQ();

  const serviceIcons: Record<string, React.ReactNode> = {
    'repair': <Wrench size={30} />,
    'shiphandling': <Compass size={30} />,
    'hull-cleaning': <Sparkles size={30} />,
    'express-shipment': <PlaneTakeoff size={30} />
  };

  return (
    <>
      {/* 1. Header Banner */}
      <section style={{
        backgroundColor: '#0a2540',
        padding: '65px 0 50px',
        color: '#ffffff',
        borderBottom: '3px solid #0284c7'
      }}>
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/services" style={{ color: '#cbd5e1' }}>Services</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>{service.title}</span>
          </div>

          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '8px',
                backgroundColor: '#0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                flexShrink: 0
              }}>
                {serviceIcons[service.slug] || <Anchor size={28} />}
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, lineHeight: 1.2, color: '#ffffff' }}>
                {service.title}
              </h1>
            </div>

            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '24px' }}>
              {service.tagline}
            </p>

            <div className="btn-group-responsive">
              <button 
                onClick={() => openRFQ(service.title)}
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
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

      {/* 2. Main Technical Overview & Scope */}
      <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', alignItems: 'start' }}>
            
            {/* Left Column: Scope & Capabilities */}
            <div>
              <div style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                Technical Overview
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0a2540', marginBottom: '16px' }}>
                Service Capabilities & Scope of Work
              </h2>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
                {service.description}
              </p>

              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '24px',
                marginBottom: '30px'
              }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0a2540', marginBottom: '16px' }}>
                  Core Operational Deliverables
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 500 }}>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Steps */}
              {service.processSteps && service.processSteps.length > 0 && (
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0a2540', marginBottom: '16px' }}>
                    Standard Execution Process
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {service.processSteps.map((step, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: '#0a2540',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          flexShrink: 0
                        }}>
                          {step.step || idx + 1}
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a2540', marginBottom: '2px' }}>
                            {step.title}
                          </h4>
                          <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Imagery & Quick RFQ Box */}
            <div>
              {/* Service Hero Image */}
              <div style={{
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                marginBottom: '24px'
              }}>
                <img 
                  src={service.heroImage} 
                  alt={service.title}
                  style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Inquiry Action Box */}
              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '26px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <ShieldCheck size={20} color="#0284c7" />
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0a2540' }}>
                    Need Immediate Attendance?
                  </h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5, marginBottom: '20px' }}>
                  Our technical managers review vessel location, ETA, and job specifications to confirm immediate riding squad mobilization or berthside agency support.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button 
                    onClick={() => openRFQ(service.title)}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '12px', justifyContent: 'center', backgroundColor: '#0284c7', borderColor: '#0284c7' }}
                  >
                    <FileSpreadsheet size={16} />
                    <span>Submit Service Inquiry</span>
                  </button>
                  <a 
                    href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="btn"
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      justifyContent: 'center',
                      backgroundColor: '#ffffff', 
                      color: '#0a2540', 
                      border: '1px solid #cbd5e1',
                      fontWeight: 600
                    }}
                  >
                    <PhoneCall size={16} color="#0284c7" />
                    <span>Call Hotline: {COMPANY_INFO.phone}</span>
                  </a>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e2e8f0', fontSize: '0.82rem', color: '#64748b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Clock size={14} color="#0284c7" />
                    <span>Average response time: <strong>&lt; 30 minutes</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Award size={14} color="#0284c7" />
                    <span>Full IACS Class work reporting</span>
                  </div>
                </div>
              </div>

              {/* Other Services Navigation */}
              <div style={{ marginTop: '24px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '20px' }}>
                <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0a2540', marginBottom: '12px' }}>
                  Other Maritime Services
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { slug: 'repair', name: 'Repair & Overhaul' },
                    { slug: 'shiphandling', name: 'Shiphandling & Port Agency' },
                    { slug: 'hull-cleaning', name: 'Hull Cleaning & Diving' },
                    { slug: 'express-shipment', name: 'Express Shipment' }
                  ].filter(s => s.slug !== service.slug).map(s => (
                    <Link 
                      key={s.slug} 
                      href={`/services/${s.slug}`}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        backgroundColor: '#f8fafc',
                        color: '#0a2540',
                        fontSize: '0.88rem',
                        fontWeight: 600
                      }}
                    >
                      <span>{s.name}</span>
                      <ArrowRight size={14} color="#0284c7" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
