'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Anchor, 
  ChevronDown, 
  ChevronRight,
  Phone, 
  Mail,
  Menu, 
  X, 
  Ship, 
  Factory, 
  Wrench, 
  Sparkles, 
  PlaneTakeoff,
  Compass,
  FileSpreadsheet,
  Clock,
  MessageCircle
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { MARINE_CATEGORIES, INDUSTRIAL_CATEGORIES } from '@/data/products';

interface NavbarProps {
  onOpenRFQ?: (productName?: string) => void;
}

export default function Navbar({ onOpenRFQ }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [productsHover, setProductsHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Header Bar - Deep Navy */}
      <div style={{
        backgroundColor: '#0a2540',
        color: '#e2e8f0',
        padding: '7px 0',
        fontSize: '0.8rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        zIndex: 100,
        position: 'relative'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontWeight: 600, fontSize: '0.78rem' }}>
              <Clock size={13} /> 24/7 Ship Spares & Technical Service
            </span>
            <span style={{ color: '#475569' }} className="nav-desktop-only">•</span>
            <span style={{ color: '#cbd5e1' }} className="nav-desktop-only">
              Certified: DNV • ClassNK • Lloyd&apos;s Register • ABS
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.78rem' }}>
            <a 
              href={`tel:${COMPANY_INFO.emergencyHotline.replace(/\s+/g, '')}`} 
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#fbbf24', fontWeight: 700 }}
            >
              <Phone size={13} />
              <span>AOG: {COMPANY_INFO.emergencyHotline}</span>
            </a>
            <span style={{ color: '#475569' }} className="nav-desktop-only">•</span>
            <a 
              href="mailto:sales@navyronix.com" 
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffffff' }}
              className="nav-desktop-only"
            >
              <Mail size={13} />
              <span>sales@navyronix.com</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar - Clean White Background */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        backgroundColor: '#ffffff',
        boxShadow: scrolled ? '0 4px 15px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.05)',
        borderBottom: '1px solid #e2e8f0',
        transition: 'all 0.25s ease'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '74px', padding: '8px 16px' }}>
          
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              backgroundColor: '#0a2540',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 2px 8px rgba(10,37,64,0.2)',
              flexShrink: 0
            }}>
              <Anchor size={24} color="#ffffff" />
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.4rem, 4vw, 1.75rem)',
                fontWeight: 800,
                color: '#0a2540',
                letterSpacing: '0.02em',
                lineHeight: 1
              }}>
                NAVY<span style={{ color: '#0284c7' }}>RONIX</span>
              </div>
              <div style={{
                fontSize: '0.64rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#64748b',
                fontWeight: 700,
                marginTop: '3px'
              }}>
                Marine & Industrial Spares
              </div>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '26px' }} className="desktop-nav">
            
            <Link 
              href="/"
              style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: pathname === '/' ? '#0284c7' : '#0a2540',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '10px 0',
                transition: 'color 0.2s ease'
              }}
            >
              Home
            </Link>

            <Link 
              href="/about"
              style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: pathname === '/about' ? '#0284c7' : '#0a2540',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '10px 0',
                transition: 'color 0.2s ease'
              }}
            >
              About Us
            </Link>

            {/* Products Dropdown (Marine & Industrial) */}
            <div 
              style={{ position: 'relative', padding: '16px 0' }}
              onMouseEnter={() => setProductsHover(true)}
              onMouseLeave={() => setProductsHover(false)}
            >
              <Link 
                href="/products"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: pathname.startsWith('/products') ? '#0284c7' : '#0a2540',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s ease'
                }}
              >
                Products
                <ChevronDown size={16} />
              </Link>

              {/* Mega Dropdown Menu */}
              {productsHover && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-60px',
                  width: '560px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                  border: '1px solid #e2e8f0',
                  padding: '20px',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '20px',
                  zIndex: 99,
                  animation: 'fadeIn 0.2s ease'
                }}>
                  {/* Column 1: Marine Products (12 Categories) */}
                  <div style={{ borderRight: '1px solid #f1f5f9', paddingRight: '16px' }}>
                    <Link 
                      href="/products?sector=marine"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 10px',
                        borderRadius: '6px',
                        backgroundColor: '#f0f9ff',
                        color: '#0284c7',
                        fontWeight: 800,
                        fontSize: '0.92rem',
                        marginBottom: '10px',
                        textTransform: 'uppercase'
                      }}
                    >
                      <Ship size={18} />
                      <span>Marine Products</span>
                    </Link>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '4px 10px',
                      fontSize: '0.78rem'
                    }}>
                      {MARINE_CATEGORIES.map((cat, idx) => (
                        <Link 
                          key={idx}
                          href={`/products?category=${encodeURIComponent(cat)}`}
                          style={{
                            padding: '4px 6px',
                            borderRadius: '4px',
                            color: '#334155',
                            fontWeight: 600,
                            display: 'block',
                            transition: 'all 0.15s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#0284c7';
                            e.currentTarget.style.backgroundColor = '#f8fafc';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#334155';
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          • {cat}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Industrial Products */}
                  <div>
                    <Link 
                      href="/products?sector=industrial"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 10px',
                        borderRadius: '6px',
                        backgroundColor: '#fefce8',
                        color: '#a16207',
                        fontWeight: 800,
                        fontSize: '0.92rem',
                        marginBottom: '10px',
                        textTransform: 'uppercase'
                      }}
                    >
                      <Factory size={18} />
                      <span>Industrial Products</span>
                    </Link>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8rem' }}>
                      {INDUSTRIAL_CATEGORIES.map((cat, idx) => (
                        <Link 
                          key={idx}
                          href={`/products?category=${encodeURIComponent(cat)}`}
                          style={{
                            padding: '4px 6px',
                            borderRadius: '4px',
                            color: '#334155',
                            fontWeight: 600,
                            transition: 'all 0.15s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#a16207';
                            e.currentTarget.style.backgroundColor = '#f8fafc';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#334155';
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          • {cat}
                        </Link>
                      ))}
                    </div>

                    <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                      <Link 
                        href="/products"
                        style={{ fontSize: '0.8rem', color: '#0284c7', fontWeight: 700 }}
                      >
                        Browse Full Catalog →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown (Repair, Shiphandling, Hull cleaning, Express Shipment) */}
            <div 
              style={{ position: 'relative', padding: '16px 0' }}
              onMouseEnter={() => setServicesHover(true)}
              onMouseLeave={() => setServicesHover(false)}
            >
              <Link 
                href="/services"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: pathname.startsWith('/services') ? '#0284c7' : '#0a2540',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s ease'
                }}
              >
                Services
                <ChevronDown size={16} />
              </Link>

              {servicesHover && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-40px',
                  width: '320px',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                  border: '1px solid #e2e8f0',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  zIndex: 99,
                  animation: 'fadeIn 0.2s ease'
                }}>
                  <Link 
                    href="/services/repair"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f9ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      backgroundColor: '#e0f2fe',
                      color: '#0284c7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Wrench size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0a2540', fontSize: '0.92rem' }}>Repair & Overhaul</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Engine overhaul, in-situ machining</div>
                    </div>
                  </Link>

                  <Link 
                    href="/services/shiphandling"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f9ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      backgroundColor: '#fefce8',
                      color: '#a16207',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Compass size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0a2540', fontSize: '0.92rem' }}>Shiphandling</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Port agency, bunkering, crew changes</div>
                    </div>
                  </Link>

                  <Link 
                    href="/services/hull-cleaning"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f9ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0a2540', fontSize: '0.92rem' }}>Hull cleaning</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>ROV bio-cleaning, propeller polish</div>
                    </div>
                  </Link>

                  <Link 
                    href="/services/express-shipment"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '10px',
                      borderRadius: '8px',
                      backgroundColor: '#f8fafc',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f9ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      backgroundColor: '#f3e8ff',
                      color: '#7c3aed',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <PlaneTakeoff size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0a2540', fontSize: '0.92rem' }}>Express Shipment</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>AOG air charter, door-to-deck</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/contact"
              style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: pathname === '/contact' ? '#0284c7' : '#0a2540',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '10px 0',
                transition: 'color 0.2s ease'
              }}
            >
              Contact Us
            </Link>

          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              onClick={() => onOpenRFQ ? onOpenRFQ() : (window.location.href = '/contact')}
              className="btn btn-primary nav-rfq-btn"
              style={{ padding: '9px 18px', fontSize: '0.84rem' }}
            >
              <FileSpreadsheet size={15} />
              <span className="rfq-btn-text">Request Quote</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1',
                backgroundColor: mobileMenuOpen ? '#0a2540' : '#ffffff',
                color: mobileMenuOpen ? '#ffffff' : '#0a2540',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            className="mobile-drawer-animate"
            style={{
              backgroundColor: '#ffffff',
              borderBottom: '3px solid #0284c7',
              padding: '18px 20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              boxShadow: '0 12px 30px rgba(10,37,64,0.18)',
              maxHeight: 'calc(100vh - 120px)',
              overflowY: 'auto'
            }}
          >
            {/* Quick 1-Tap Action Row on Mobile */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenRFQ) onOpenRFQ();
                }}
                className="btn btn-primary"
                style={{ padding: '10px 12px', fontSize: '0.82rem', justifyContent: 'center' }}
              >
                <FileSpreadsheet size={15} />
                <span>Submit RFQ</span>
              </button>

              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Direct Phone Assistance Banner */}
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '6px',
                backgroundColor: '#f0f9ff',
                border: '1px solid #bae6fd',
                color: '#0369a1',
                fontSize: '0.82rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="#0284c7" />
                <span>24/7 Duty Desk: {COMPANY_INFO.phone}</span>
              </div>
              <ChevronRight size={14} />
            </a>

            {/* Primary Nav Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontWeight: 700,
                  color: pathname === '/' ? '#0284c7' : '#0a2540',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  backgroundColor: pathname === '/' ? '#f0f9ff' : 'transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Home</span>
                <ChevronRight size={16} color="#94a3b8" />
              </Link>

              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontWeight: 700,
                  color: pathname === '/about' ? '#0284c7' : '#0a2540',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  padding: '8px 10px',
                  borderRadius: '6px',
                  backgroundColor: pathname === '/about' ? '#f0f9ff' : 'transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>About Us</span>
                <ChevronRight size={16} color="#94a3b8" />
              </Link>

              {/* Mobile Products Accordion */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    fontWeight: 800,
                    color: '#0a2540',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ color: pathname.startsWith('/products') ? '#0284c7' : '#0a2540' }}>
                    Products
                  </span>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }} 
                  />
                </button>

                {mobileProductsOpen && (
                  <div style={{ padding: '8px 6px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {/* Marine Products Header */}
                    <div style={{ padding: '4px 6px', fontSize: '0.78rem', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Marine Equipment (12 Categories)
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                      gap: '6px'
                    }}>
                      {MARINE_CATEGORIES.map((cat, idx) => (
                        <Link 
                          key={idx}
                          href={`/products?category=${encodeURIComponent(cat)}`}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            padding: '6px 8px',
                            borderRadius: '4px',
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            color: '#1e293b',
                            fontWeight: 600,
                            fontSize: '0.76rem',
                            display: 'block',
                            textAlign: 'left'
                          }}
                        >
                          {cat}
                        </Link>
                      ))}
                    </div>

                    {/* Industrial Header & Link */}
                    <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
                      <Link 
                        href="/products?sector=industrial"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '6px 8px',
                          borderRadius: '6px',
                          backgroundColor: '#fefce8',
                          color: '#a16207',
                          fontWeight: 700,
                          fontSize: '0.82rem'
                        }}
                      >
                        <span>› Browse Industrial Machinery</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Services Accordion */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    fontWeight: 800,
                    color: '#0a2540',
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ color: pathname.startsWith('/services') ? '#0284c7' : '#0a2540' }}>
                    Services
                  </span>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }} 
                  />
                </button>

                {mobileServicesOpen && (
                  <div style={{ padding: '6px 8px 10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <Link 
                      href="/services/repair" 
                      onClick={() => setMobileMenuOpen(false)} 
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderRadius: '6px', backgroundColor: '#f8fafc', color: '#0a2540', fontWeight: 600, fontSize: '0.85rem' }}
                    >
                      <Wrench size={16} color="#0284c7" />
                      <span>Repair & Overhaul</span>
                    </Link>
                    <Link 
                      href="/services/shiphandling" 
                      onClick={() => setMobileMenuOpen(false)} 
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderRadius: '6px', backgroundColor: '#f8fafc', color: '#0a2540', fontWeight: 600, fontSize: '0.85rem' }}
                    >
                      <Compass size={16} color="#a16207" />
                      <span>Shiphandling</span>
                    </Link>
                    <Link 
                      href="/services/hull-cleaning" 
                      onClick={() => setMobileMenuOpen(false)} 
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderRadius: '6px', backgroundColor: '#f8fafc', color: '#0a2540', fontWeight: 600, fontSize: '0.85rem' }}
                    >
                      <Sparkles size={16} color="#059669" />
                      <span>Hull cleaning</span>
                    </Link>
                    <Link 
                      href="/services/express-shipment" 
                      onClick={() => setMobileMenuOpen(false)} 
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderRadius: '6px', backgroundColor: '#f8fafc', color: '#0a2540', fontWeight: 600, fontSize: '0.85rem' }}
                    >
                      <PlaneTakeoff size={16} color="#7c3aed" />
                      <span>Express Shipment</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  borderTop: '1px solid #f1f5f9',
                  marginTop: '4px',
                  padding: '10px',
                  fontWeight: 700,
                  color: pathname === '/contact' ? '#0284c7' : '#0a2540',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>Contact Us</span>
                <ChevronRight size={16} color="#94a3b8" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop for open mobile menu */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10, 37, 64, 0.45)',
            backdropFilter: 'blur(2px)',
            zIndex: 80
          }}
        />
      )}

      <style jsx global>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .nav-desktop-only {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .nav-rfq-btn .rfq-btn-text {
            display: none !important;
          }
          .nav-rfq-btn {
            padding: 9px 12px !important;
          }
        }
      `}</style>
    </>
  );
}

