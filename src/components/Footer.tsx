'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Anchor, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  Globe2,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { CATEGORIES } from '@/data/products';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0a2540',
      borderTop: '3px solid #0284c7',
      color: '#cbd5e1',
      fontSize: '0.9rem',
      position: 'relative',
      zIndex: 10
    }}>
      {/* Certifications Bar */}
      <div style={{
        backgroundColor: '#061c3d',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '20px 0'
      }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            <div style={{
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#38bdf8',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <ShieldCheck size={16} /> Certified Marine Classification Standards & Memberships
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px 32px'
            }}>
              {COMPANY_INFO.certifications.map((cert, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.85rem'
                }}>
                  <CheckCircle2 size={16} color="#38bdf8" />
                  <span>{cert.name}</span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>({cert.code})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container footer-content-wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Column 1: Brand & Contact Info */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: '#0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Anchor size={24} color="#ffffff" />
              </div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.02em'
              }}>
                NAVY<span style={{ color: '#38bdf8' }}>RONIX</span>
              </div>
            </Link>

            <p style={{ lineHeight: 1.6, marginBottom: '20px', color: '#cbd5e1', fontSize: '0.88rem' }}>
              International supplier of genuine & OEM marine machinery, diesel engine spare parts, turbochargers, and 24/7 voyage engineering services across 450+ global ports.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>24/7/365 Emergency Dispatch Desk</span>
              </div>
            </div>
          </div>

          {/* Column 2: 12 Product Categories (Marine Only) */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.05rem',
              fontWeight: 700,
              marginBottom: '16px',
              borderBottom: '2px solid #0284c7',
              paddingBottom: '8px',
              display: 'inline-block'
            }}>
              Marine Product Categories
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px 12px',
              fontSize: '0.85rem'
            }}>
              {CATEGORIES.map((cat, idx) => (
                <Link
                  key={idx}
                  href={`/products?category=${encodeURIComponent(cat)}`}
                  style={{
                    color: '#cbd5e1',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                >
                  <span style={{ color: '#38bdf8' }}>›</span> {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Marine Services */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.05rem',
              fontWeight: 700,
              marginBottom: '16px',
              borderBottom: '2px solid #0284c7',
              paddingBottom: '8px',
              display: 'inline-block'
            }}>
              Maritime Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li>
                <Link href="/services/repair" style={{ color: '#ffffff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ArrowRight size={14} color="#38bdf8" />
                  <span>Repair & Overhaul</span>
                </Link>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginLeft: '22px' }}>
                  In-situ machining, diesel overhaul, dynamic balancing
                </div>
              </li>
              <li>
                <Link href="/services/shiphandling" style={{ color: '#ffffff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ArrowRight size={14} color="#38bdf8" />
                  <span>Shiphandling & Port Agency</span>
                </Link>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginLeft: '22px' }}>
                  Bunkering coordination, crew changes, husbandry, OPA
                </div>
              </li>
              <li>
                <Link href="/services/hull-cleaning" style={{ color: '#ffffff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ArrowRight size={14} color="#38bdf8" />
                  <span>Hull Cleaning & Diving</span>
                </Link>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginLeft: '22px' }}>
                  ROV bio-cleaning, propeller polishing, UWILD surveys
                </div>
              </li>
              <li>
                <Link href="/services/express-shipment" style={{ color: '#ffffff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ArrowRight size={14} color="#38bdf8" />
                  <span>Express Shipment</span>
                </Link>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginLeft: '22px' }}>
                  Time-critical air freight, door-to-deck customs clearance
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Hubs & Technical Inquiries */}
          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.05rem',
              fontWeight: 700,
              marginBottom: '16px',
              borderBottom: '2px solid #0284c7',
              paddingBottom: '8px',
              display: 'inline-block'
            }}>
              Global Supply Hubs
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {COMPANY_INFO.hubs.slice(0, 4).map((hub, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                  <Globe2 size={14} color="#38bdf8" />
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>{hub.city}</span>
                  <span style={{ color: '#94a3b8' }}>({hub.country})</span>
                </div>
              ))}
            </div>

            <div style={{
              backgroundColor: '#061c3d',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                Join Marine Spares Network
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '12px' }}>
                Receive monthly stock lists and urgent inventory updates.
              </div>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Navyronix technical bulletin!'); }} style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="email" 
                  placeholder="chief@vessel.com"
                  required
                  style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '4px',
                    padding: '8px 10px',
                    fontSize: '0.82rem',
                    color: '#0f172a',
                    outline: 'none'
                  }}
                />
                <button 
                  type="submit"
                  style={{
                    backgroundColor: '#0284c7',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '8px 14px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '25px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '0.82rem',
          color: '#94a3b8'
        }}>
          <div>
            © {new Date().getFullYear()} Navyronix Marine & Industrial Services Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <span>ISO 9001:2015</span>
            <span>•</span>
            <span>SOLAS & MARPOL Aligned</span>
            <span>•</span>
            <span>IMPA / ISSA Codes</span>
            <span>•</span>
            <Link href="/contact" style={{ color: '#38bdf8', fontWeight: 600 }}>Emergency RFQ Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
