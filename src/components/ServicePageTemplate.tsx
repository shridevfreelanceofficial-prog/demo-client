'use client';

import React from 'react';
import Link from 'next/link';
import { ServiceDetail } from '@/types';
import { useRFQ } from '@/components/LayoutWrapper';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  PhoneCall, 
  FileSpreadsheet, 
  ChevronRight,
  Clock,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface ServicePageTemplateProps {
  service: ServiceDetail;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const { openRFQ } = useRFQ();

  return (
    <>
      {/* 1. Hero Section with Simple Background Color and Beautifully Styled Service Name */}
      <section 
        className="hero-header"
        style={{
          backgroundColor: '#0a2540',
          padding: '60px 0 50px',
          color: '#ffffff',
          borderBottom: '3px solid #0284c7'
        }}
      >
        <div className="container">
          {/* Breadcrumb Path */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '18px' }}>
            <Link href="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Services</Link>
            <ChevronRight size={14} />
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>{service.shortTitle || service.title}</span>
          </div>

          {/* Service Domain Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '4px',
            backgroundColor: 'rgba(2, 132, 199, 0.25)',
            color: '#38bdf8',
            fontSize: '0.82rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '16px'
          }}>
            <ShieldCheck size={15} /> 24/7 Technical Attendance & Port Engineering
          </div>

          {/* Beautifully Written Service Name */}
          <h1 style={{
            fontSize: 'clamp(2.1rem, 4.2vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.18,
            color: '#ffffff',
            margin: '0 0 12px',
            letterSpacing: '-0.02em',
            maxWidth: '920px'
          }}>
            {service.title}
          </h1>

          {service.tagline && (
            <p style={{
              fontSize: '1.08rem',
              color: '#cbd5e1',
              margin: 0,
              maxWidth: '780px',
              lineHeight: 1.6
            }}>
              {service.tagline}
            </p>
          )}
        </div>
      </section>

      {/* 2. Main Content Section: Left Side Image & Right Side One Paragraph Details */}
      <section style={{ padding: '60px 0 80px', backgroundColor: '#ffffff' }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            {/* LEFT SIDE: Given Sequential Image */}
            <div>
              <div style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 16px 36px rgba(10, 37, 64, 0.12)',
                backgroundColor: '#f8fafc'
              }}>
                <img 
                  src={service.heroImage} 
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '480px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* RIGHT SIDE: One Paragraph Details & Proper Details */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 12px',
                borderRadius: '4px',
                backgroundColor: '#f0f9ff',
                color: '#0284c7',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '14px'
              }}>
                Service Overview
              </div>

              <h2 style={{
                fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)',
                fontWeight: 800,
                color: '#0a2540',
                lineHeight: 1.25,
                marginBottom: '18px'
              }}>
                Dedicated Operational Capabilities
              </h2>

              {/* One Paragraph Details */}
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#334155',
                marginBottom: '26px'
              }}>
                {service.description}
              </p>

              {/* Proper Key Details / Deliverables */}
              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '20px 22px',
                marginBottom: '28px'
              }}>
                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#0a2540',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '14px'
                }}>
                  Core Service Deliverables
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '10px 16px'
                }}>
                  {service.capabilities.slice(0, 6).map((cap, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={16} color="#0284c7" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.88rem', color: '#1e293b', fontWeight: 600 }}>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <button
                  onClick={() => openRFQ(service.title)}
                  className="btn btn-primary"
                  style={{ padding: '13px 28px', fontSize: '0.94rem' }}
                >
                  <FileSpreadsheet size={16} />
                  <span>Request Service Quotation</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.emergencyHotline.replace(/[^0-9+]/g, '')}`}
                  className="btn"
                  style={{
                    padding: '13px 22px',
                    backgroundColor: '#f1f5f9',
                    color: '#0a2540',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.94rem',
                    fontWeight: 700
                  }}
                >
                  <PhoneCall size={16} color="#0284c7" />
                  <span>24/7 Hotline: {COMPANY_INFO.emergencyHotline}</span>
                </a>
              </div>

              {/* Micro assurance note */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '20px', fontSize: '0.82rem', color: '#64748b', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={14} color="#0284c7" />
                  <span>Response Time: <strong>&lt; 30 Minutes</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Award size={14} color="#0284c7" />
                  <span>IACS Class Classification Compliant</span>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Other Services Switcher Bar at Bottom */}
          <div style={{
            marginTop: '65px',
            paddingTop: '30px',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <span style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
              Explore Our Other Maritime Services:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '6px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    color: '#0a2540',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{s.name}</span>
                  <ArrowRight size={13} color="#0284c7" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
