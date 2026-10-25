'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Package, 
  Anchor, 
  FileSpreadsheet,
  Compass as CompassIcon,
  Search,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface HeroVideoProps {
  onOpenRFQ?: (productName?: string) => void;
}

export default function HeroVideo({ onOpenRFQ }: HeroVideoProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="section-hero">
      {/* Background Video Layer with Fallback Nautical Gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        backgroundColor: '#040d1a'
      }}>
        {/* Direct streaming high quality marine cargo vessel in ocean */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            opacity: videoLoaded ? 0.38 : 0,
            transition: 'opacity 1s ease',
            filter: 'contrast(1.15) brightness(0.85) saturate(1.2)'
          }}
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-cargo-ship-in-the-sea-43950-large.mp4" 
            type="video/mp4" 
          />
          <source 
            src="https://cdn.pixabay.com/video/2020/05/25/40156-424756538_large.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Ambient Dark Ocean Multi-Gradient Overlays */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(4, 9, 20, 0.75) 0%, rgba(4, 13, 26, 0.6) 40%, rgba(4, 9, 20, 0.95) 100%)'
        }}></div>

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 75% 30%, rgba(14, 165, 233, 0.18) 0%, transparent 60%)'
        }}></div>

        {/* Nautical Radar Concentric Circles in Background */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '1px solid rgba(56, 189, 248, 0.12)',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            border: '1px solid rgba(56, 189, 248, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              border: '1px dashed rgba(56, 189, 248, 0.25)',
              animation: 'radarSweep 20s linear infinite'
            }}></div>
          </div>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', maxWidth: '850px' }}>
          
          {/* Top Live Telemetry & Badge */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
            <div className="badge badge-cyan" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#38bdf8',
                boxShadow: '0 0 10px #38bdf8'
              }}></span>
              GLOBAL MARINE TECHNICAL LOGISTICS
            </div>

            <div style={{
              fontSize: '0.82rem',
              color: '#cbd5e1',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(14, 28, 54, 0.6)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              padding: '6px 14px',
              borderRadius: '9999px',
              backdropFilter: 'blur(8px)'
            }}>
              <Clock size={14} color="#f59e0b" />
              <span>AOG Dispatch: <strong>Under 30 Minutes</strong></span>
            </div>
          </div>

          {/* Main Headline */}
          <div>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '22px'
            }}>
              Powering Global Fleets with <span className="heading-gradient">Engine Precision</span> & Marine Spares
            </h1>

            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
              lineHeight: 1.6,
              color: '#cbd5e1',
              maxWidth: '720px',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)'
            }}>
              Your trusted partner for <strong>Marine Turbochargers</strong>, Diesel Engine Spares (MAN B&W, Yanmar, Wärtsilä, Daihatsu), Industrial Pumps, Compressors, and 24/7 Port Engineering.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <button 
              onClick={() => onOpenRFQ ? onOpenRFQ() : (window.location.href = '/contact')}
              className="btn btn-primary"
              style={{ padding: '16px 36px', fontSize: '1.05rem' }}
            >
              <FileSpreadsheet size={20} />
              <span>Request Fast Quote (RFQ)</span>
            </button>

            <Link 
              href="/products" 
              className="btn btn-outline"
              style={{ padding: '16px 32px', fontSize: '1.05rem' }}
            >
              <span>Explore 12 Categories</span>
              <ArrowRight size={18} />
            </Link>

            <Link 
              href="/services/repair" 
              className="btn btn-gold"
              style={{ padding: '16px 28px', fontSize: '0.98rem' }}
            >
              <Anchor size={18} />
              <span>24/7 Voyage Repairs</span>
            </Link>
          </div>

          {/* Interactive Live Search Bar / Category Quick Selector */}
          <div style={{
            background: 'rgba(10, 21, 41, 0.85)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            borderRadius: '16px',
            padding: '16px 20px',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.5), 0 0 20px rgba(14,165,233,0.15)',
            maxWidth: '760px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Search size={22} color="#38bdf8" />
              <input 
                type="text"
                placeholder="Search engine model (e.g., QSK19, L16/24, HX83, VTR 354, IMO Pump)..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const target = e.currentTarget.value;
                    window.location.href = `/products?search=${encodeURIComponent(target)}`;
                  }
                }}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontSize: '0.95rem'
                }}
              />
              <button 
                onClick={(e) => {
                  const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                  if (input && input.value) {
                    window.location.href = `/products?search=${encodeURIComponent(input.value)}`;
                  } else {
                    window.location.href = '/products';
                  }
                }}
                className="btn btn-primary"
                style={{ padding: '10px 22px', fontSize: '0.88rem', borderRadius: '10px' }}
              >
                Search Spares
              </button>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '12px',
              paddingTop: '12px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              fontSize: '0.78rem'
            }}>
              <span style={{ color: '#64748b', fontWeight: 600 }}>Popular:</span>
              <Link href="/products?search=QSK19" style={{ color: '#38bdf8' }}>Cummins QSK19 HX83</Link>
              <span style={{ color: '#475569' }}>•</span>
              <Link href="/products?search=L16" style={{ color: '#38bdf8' }}>MAN L16/24 Cylinder Head</Link>
              <span style={{ color: '#475569' }}>•</span>
              <Link href="/products?search=VTR" style={{ color: '#38bdf8' }}>ABB VTR 354</Link>
              <span style={{ color: '#475569' }}>•</span>
              <Link href="/products?search=Tanabe" style={{ color: '#38bdf8' }}>Tanabe Compressors</Link>
              <span style={{ color: '#475569' }}>•</span>
              <Link href="/products?search=IMO" style={{ color: '#38bdf8' }}>IMO 3-Screw Pumps</Link>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '16px',
            marginTop: '10px'
          }}>
            {COMPANY_INFO.stats.slice(0, 4).map((stat, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(14, 28, 54, 0.4)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '2px'
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
