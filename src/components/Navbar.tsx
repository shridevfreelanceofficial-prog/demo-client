'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
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
  Clock,
  MessageCircle,
  Layers,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

// 6 Nested product categories with 3-level hierarchy (Category -> Main/Aux Engine -> Brands)
export const NESTED_PRODUCT_CATEGORIES = [
  {
    name: 'Engine Spare Parts',
    param: 'Engine Spare Parts',
    icon: Wrench,
    description: 'Pistons, liners, cylinder heads, crankshafts & fuel injection systems',
    mainEngineBrands: ['MAN B&W', 'Wärtsilä', 'Yanmar', 'Daihatsu', 'Mitsubishi (MHI)', 'Sulzer', 'Himsen (Hyundai)'],
    auxEngineBrands: ['Cummins', 'Caterpillar (CAT)', 'Yanmar', 'Daihatsu', 'Volvo Penta', 'Scania', 'Deutz']
  },
  {
    name: 'Turbochargers',
    param: 'Turbochargers',
    icon: Sparkles,
    description: 'Complete assemblies, rotor shafts, turbine blades & nozzle rings',
    mainEngineBrands: ['ABB / Accelleron', 'MAN Energy Solutions', 'Mitsubishi (MET)', 'Napier', 'PBS Turbo'],
    auxEngineBrands: ['IHI', 'Holset', 'Garrett', 'BorgWarner', 'Schwitzer', 'Napier']
  },
  {
    name: 'Pumps',
    param: 'Pumps',
    icon: Ship,
    description: 'Screw, centrifugal, ballast, cargo & oily bilge pump systems',
    mainEngineBrands: ['IMO', 'Desmi', 'Taiko Kikai', 'Shinko', 'Teikoku', 'Naniwa'],
    auxEngineBrands: ['Allweiler', 'Hamworthy', 'Grundfos', 'Iron Pump', 'Heishin', 'Thune Eureka']
  },
  {
    name: 'Navigation Equipment',
    param: 'Navigation Equipment',
    icon: Layers,
    description: 'Radar scanners, ECDIS, gyrocompasses & GMDSS communication systems',
    mainEngineBrands: ['Furuno', 'JRC', 'Sperry Marine', 'Raytheon Anschütz', 'Simrad'],
    auxEngineBrands: ['Kongsberg Maritime', 'Tokyo Keiki', 'Sailor', 'Transas', 'Kelvin Hughes']
  },
  {
    name: 'Purifiers',
    param: 'Purifiers',
    icon: Layers,
    description: 'Fuel oil & lube oil centrifugal separators, bowls & seal rings',
    mainEngineBrands: ['Alfa Laval', 'GEA Westfalia', 'Mitsubishi Kakoki (SJ)'],
    auxEngineBrands: ['Alfa Laval', 'GEA Westfalia', 'Samgong', 'Mahle / Filtration']
  },
  {
    name: 'Heat Exchangers',
    param: 'Heat Exchangers',
    icon: Factory,
    description: 'Plate & shell-and-tube coolers, titanium plates & OEM gaskets',
    mainEngineBrands: ['Alfa Laval', 'Sondex / Danfoss', 'APV (SPX FLOW)', 'Kelvion (GEA)', 'SWEP'],
    auxEngineBrands: ['Alfa Laval', 'Sondex', 'Hisaka Works', 'Tranter', 'Kelvion']
  }
];

interface NavbarProps {
  onOpenRFQ?: (productName?: string) => void;
}

export default function Navbar({ onOpenRFQ }: NavbarProps = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<number | null>(0);
  const [productsHover, setProductsHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
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
    setProductsHover(false);
    setServicesHover(false);
  }, [pathname]);

  const activeCategory = NESTED_PRODUCT_CATEGORIES[activeCategoryIndex] || NESTED_PRODUCT_CATEGORIES[0];

  return (
    <>
      {/* Top Header Bar - Deep Navy (Exact styling like before) */}
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
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.78rem' }}>
            <a 
              href="https://wa.me/919819899051?text=Hello%20Crest%20%26%20Caliper%20Spares,%20I%20have%20an%20urgent%20marine%20inquiry." 
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#22c55e', fontWeight: 700, textDecoration: 'none' }}
            >
              <MessageCircle size={13} />
              <span>WhatsApp: 98198 99051</span>
            </a>
            <span style={{ color: '#475569' }} className="nav-desktop-only">•</span>
            <a 
              href="tel:+919819899051" 
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#fbbf24', fontWeight: 700, textDecoration: 'none' }}
            >
              <Phone size={13} />
              <span>24/7: +91 98198 99051</span>
            </a>
            <span style={{ color: '#475569' }} className="nav-desktop-only">•</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffffff', textDecoration: 'none' }}
              className="nav-desktop-only"
            >
              <Mail size={13} />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar - Clean White Background (Exact styling like before) */}
      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 90,
          backgroundColor: '#ffffff',
          boxShadow: scrolled ? '0 4px 15px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.05)',
          borderBottom: '1px solid #e2e8f0',
          transition: 'all 0.25s ease'
        }}
        onMouseLeave={() => {
          setProductsHover(false);
          setServicesHover(false);
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '88px', padding: '10px 16px' }}>
          
          {/* Logo (Exact styling like before) */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img 
              src="/images/crest-caliper-logo.jpg" 
              alt="Crest & Caliper Spares" 
              style={{
                height: 'clamp(58px, 9vw, 80px)',
                width: 'auto',
                maxWidth: '300px',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </Link>

          {/* Desktop Nav Items (Exact styling like before) */}
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

            {/* Products (Triggers FULL WIDTH nested dropdown) */}
            <div 
              style={{ position: 'relative', padding: '16px 0' }}
              onMouseEnter={() => {
                setProductsHover(true);
                setServicesHover(false);
              }}
            >
              <Link 
                href="/products"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: (pathname.startsWith('/products') || productsHover) ? '#0284c7' : '#0a2540',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s ease'
                }}
              >
                Products
                <ChevronDown 
                  size={16} 
                  style={{
                    transform: productsHover ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}
                />
              </Link>
            </div>

            {/* Services Dropdown (Repair, Hull cleaning, Express Shipment) */}
            <div 
              style={{ position: 'relative', padding: '16px 0' }}
              onMouseEnter={() => {
                setServicesHover(true);
                setProductsHover(false);
              }}
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
                  color: (pathname.startsWith('/services') || servicesHover) ? '#0284c7' : '#0a2540',
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
                      textDecoration: 'none',
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
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Wrench size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0a2540', fontSize: '0.92rem' }}>Repair & Overhaul</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Afloat marine repair & 24/7 overhaul</div>
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
                      textDecoration: 'none',
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
                      justifyContent: 'center',
                      flexShrink: 0
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
                      textDecoration: 'none',
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
                      justifyContent: 'center',
                      flexShrink: 0
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
            <a
              href="https://wa.me/919819899051?text=Hello%20Crest%20%26%20Caliper%20Spares,%20I%20have%20an%20urgent%20marine%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="btn nav-rfq-btn"
              style={{
                backgroundColor: '#22c55e',
                color: '#ffffff',
                padding: '9px 18px',
                fontSize: '0.84rem',
                fontWeight: 700,
                borderRadius: '6px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <MessageCircle size={16} />
              <span className="rfq-btn-text">WhatsApp 98198 99051</span>
            </a>

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

        {/* ======================================================== */}
        {/* FULL-WIDTH PRODUCTS HOVER MEGA MENU                      */}
        {/* ======================================================== */}
        {productsHover && (
          <div 
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              width: '100%',
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e2e8f0',
              borderBottom: '3px solid #0284c7',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              zIndex: 999
            }}
            onMouseEnter={() => setProductsHover(true)}
            onMouseLeave={() => setProductsHover(false)}
          >
            <div 
              className="container"
              style={{
                padding: '24px 16px',
                display: 'grid',
                gridTemplateColumns: '300px 1fr 1fr 280px',
                gap: '24px'
              }}
            >
              {/* Column 1: Categories Selector */}
              <div 
                style={{
                  borderRight: '1px solid #f1f5f9',
                  paddingRight: '16px'
                }}
              >
                <div 
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#64748b',
                    marginBottom: '12px'
                  }}
                >
                  Marine Categories
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {NESTED_PRODUCT_CATEGORIES.map((cat, idx) => {
                    const Icon = cat.icon;
                    const isSelected = activeCategoryIndex === idx;
                    return (
                      <div
                        key={cat.name}
                        onMouseEnter={() => setActiveCategoryIndex(idx)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 12px',
                          borderRadius: '6px',
                          backgroundColor: isSelected ? '#0a2540' : 'transparent',
                          color: isSelected ? '#ffffff' : '#1e293b',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <Link 
                          href={`/products?category=${encodeURIComponent(cat.param)}`}
                          onClick={() => setProductsHover(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: isSelected ? '#ffffff' : '#1e293b',
                            textDecoration: 'none',
                            fontWeight: isSelected ? 700 : 500,
                            fontSize: '0.88rem',
                            flex: 1
                          }}
                        >
                          <Icon size={16} style={{ color: isSelected ? '#38bdf8' : '#0284c7' }} />
                          <span>{cat.name}</span>
                        </Link>
                        <ChevronRight size={14} style={{ opacity: isSelected ? 1 : 0.4 }} />
                      </div>
                    );
                  })}
                </div>

                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                  <Link
                    href="/products"
                    onClick={() => setProductsHover(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#0284c7',
                      textDecoration: 'none'
                    }}
                  >
                    View All Product Categories <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Column 2: Main Engine Brands for Selected Category */}
              <div 
                style={{
                  borderRight: '1px solid #f1f5f9',
                  paddingRight: '16px'
                }}
              >
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#0a2540',
                    marginBottom: '12px',
                    backgroundColor: '#f8fafc',
                    padding: '6px 10px',
                    borderRadius: '4px'
                  }}
                >
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0284c7' }}></span>
                  1. Main Engine Brands
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {activeCategory.mainEngineBrands.map((brand) => (
                    <Link
                      key={brand}
                      href={`/products?category=${encodeURIComponent(activeCategory.param)}&brand=${encodeURIComponent(brand)}&engineType=main`}
                      onClick={() => setProductsHover(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 10px',
                        borderRadius: '5px',
                        color: '#334155',
                        fontSize: '0.86rem',
                        textDecoration: 'none',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f0f9ff';
                        e.currentTarget.style.color = '#0284c7';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#334155';
                      }}
                    >
                      <span>{brand}</span>
                      <ChevronRight size={13} style={{ opacity: 0.3 }} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 3: Auxiliary Engine Brands for Selected Category */}
              <div 
                style={{
                  borderRight: '1px solid #f1f5f9',
                  paddingRight: '16px'
                }}
              >
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#0a2540',
                    marginBottom: '12px',
                    backgroundColor: '#f8fafc',
                    padding: '6px 10px',
                    borderRadius: '4px'
                  }}
                >
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
                  2. Auxiliary Engine Brands
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {activeCategory.auxEngineBrands.map((brand) => (
                    <Link
                      key={brand}
                      href={`/products?category=${encodeURIComponent(activeCategory.param)}&brand=${encodeURIComponent(brand)}&engineType=aux`}
                      onClick={() => setProductsHover(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 10px',
                        borderRadius: '5px',
                        color: '#334155',
                        fontSize: '0.86rem',
                        textDecoration: 'none',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#ecfdf5';
                        e.currentTarget.style.color = '#059669';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#334155';
                      }}
                    >
                      <span>{brand}</span>
                      <ChevronRight size={13} style={{ opacity: 0.3 }} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 4: 24/7 Marine Desk Card */}
              <div 
                style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  padding: '20px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#0284c7',
                      backgroundColor: '#e0f2fe',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      marginBottom: '10px'
                    }}
                  >
                    <Clock size={11} /> 24/7 Port Logistics
                  </div>

                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0a2540', marginBottom: '8px', lineHeight: 1.3 }}>
                    Need Urgent Marine Spares?
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5, marginBottom: '16px' }}>
                    Critical engine components, turbochargers, pumps and heat exchangers dispatched directly to vessel anchorage or berth worldwide.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <a
                    href="https://wa.me/919819899051?text=Hello%20Crest%20%26%20Caliper%20Spares,%20I%20have%20an%20urgent%20marine%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      backgroundColor: '#22c55e',
                      color: '#ffffff',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      textAlign: 'center'
                    }}
                  >
                    <MessageCircle size={15} /> WhatsApp: 98198 99051
                  </a>

                  <a
                    href="tel:+919819899051"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      backgroundColor: '#0a2540',
                      color: '#ffffff',
                      padding: '9px 14px',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      textAlign: 'center'
                    }}
                  >
                    <Phone size={13} /> +91 98198 99051
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

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
            {/* Direct WhatsApp & Call Row on Mobile */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
              <a
                href="https://wa.me/919819899051?text=Hello%20Crest%20%26%20Caliper%20Spares,%20I%20have%20an%20urgent%20marine%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  backgroundColor: '#22c55e',
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

              <a
                href="tel:+919819899051"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  backgroundColor: '#0a2540',
                  color: '#ffffff',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <Phone size={14} />
                <span>Call Hotline</span>
              </a>
            </div>

            {/* Direct Phone Assistance Banner */}
            <a
              href="tel:+919819899051"
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
                <span>24/7 Duty Desk: +91 98198 99051</span>
              </div>
              <ChevronRight size={14} />
            </a>

            {/* Primary Nav Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '10px',
                  fontWeight: 700,
                  color: pathname === '/' ? '#0284c7' : '#0a2540',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  borderRadius: '6px',
                  backgroundColor: pathname === '/' ? '#f0f9ff' : 'transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textDecoration: 'none'
                }}
              >
                <span>Home</span>
                <ChevronRight size={16} color="#94a3b8" />
              </Link>

              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '10px',
                  fontWeight: 700,
                  color: pathname === '/about' ? '#0284c7' : '#0a2540',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  borderRadius: '6px',
                  backgroundColor: pathname === '/about' ? '#f0f9ff' : 'transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textDecoration: 'none'
                }}
              >
                <span>About Us</span>
                <ChevronRight size={16} color="#94a3b8" />
              </Link>

              {/* Products Accordion on Mobile */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '4px' }}>
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
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none'
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
                  <div style={{ padding: '6px 8px 10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {NESTED_PRODUCT_CATEGORIES.map((cat, idx) => {
                      const isCatOpen = mobileExpandedCat === idx;
                      return (
                        <div key={cat.name} style={{ borderBottom: idx < NESTED_PRODUCT_CATEGORIES.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                          <button
                            onClick={() => setMobileExpandedCat(isCatOpen ? null : idx)}
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '8px 4px',
                              background: 'none',
                              border: 'none',
                              fontSize: '0.88rem',
                              fontWeight: 700,
                              color: '#1e293b',
                              textAlign: 'left',
                              cursor: 'pointer'
                            }}
                          >
                            <span>{cat.name}</span>
                            <ChevronDown size={14} style={{ transform: isCatOpen ? 'rotate(180deg)' : 'none' }} />
                          </button>

                          {isCatOpen && (
                            <div style={{ padding: '0 4px 10px 4px', fontSize: '0.8rem' }}>
                              <div style={{ fontWeight: 700, color: '#0284c7', margin: '4px 0 4px 0' }}>
                                1. Main Engine Brands:
                              </div>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '8px' }}>
                                {cat.mainEngineBrands.map(b => (
                                  <Link
                                    key={b}
                                    href={`/products?category=${encodeURIComponent(cat.param)}&brand=${encodeURIComponent(b)}&engineType=main`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                      backgroundColor: '#f1f5f9',
                                      color: '#334155',
                                      padding: '3px 7px',
                                      borderRadius: '4px',
                                      textDecoration: 'none',
                                      fontSize: '0.75rem'
                                    }}
                                  >
                                    {b}
                                  </Link>
                                ))}
                              </div>

                              <div style={{ fontWeight: 700, color: '#10b981', margin: '4px 0 4px 0' }}>
                                2. Auxiliary Engine Brands:
                              </div>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                {cat.auxEngineBrands.map(b => (
                                  <Link
                                    key={b}
                                    href={`/products?category=${encodeURIComponent(cat.param)}&brand=${encodeURIComponent(b)}&engineType=aux`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                      backgroundColor: '#f1f5f9',
                                      color: '#334155',
                                      padding: '3px 7px',
                                      borderRadius: '4px',
                                      textDecoration: 'none',
                                      fontSize: '0.75rem'
                                    }}
                                  >
                                    {b}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Services Accordion on Mobile */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '4px' }}>
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
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none'
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
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderRadius: '6px', backgroundColor: '#f8fafc', color: '#0a2540', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}
                    >
                      <Wrench size={16} color="#0284c7" />
                      <span>Repair & Overhaul</span>
                    </Link>
                    <Link 
                      href="/services/hull-cleaning" 
                      onClick={() => setMobileMenuOpen(false)} 
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderRadius: '6px', backgroundColor: '#f8fafc', color: '#0a2540', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}
                    >
                      <Sparkles size={16} color="#059669" />
                      <span>Hull cleaning</span>
                    </Link>
                    <Link 
                      href="/services/express-shipment" 
                      onClick={() => setMobileMenuOpen(false)} 
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderRadius: '6px', backgroundColor: '#f8fafc', color: '#0a2540', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}
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
                  alignItems: 'center',
                  textDecoration: 'none'
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
