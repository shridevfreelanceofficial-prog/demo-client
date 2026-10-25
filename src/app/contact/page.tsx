'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Anchor, 
  ShieldCheck, 
  Globe2 
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    vesselName: '',
    imoNumber: '',
    portOfDelivery: 'Singapore OPL',
    urgency: 'urgent',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = 'NVX-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(id);
    setSubmitted(true);
  };

  return (
    <>
      {/* 1. Sticked Ship4 Image Background for Contact Us */}
      <div className="fixed-contact-bg" />
      <div className="fixed-contact-overlay" />

      {/* 2. Header Banner (Over Sticked Ship4 Background) */}
      <section 
        className="hero-header"
        style={{
          position: 'relative',
          padding: '80px 0 60px',
          color: '#ffffff',
          backgroundColor: 'rgba(10, 37, 64, 0.72)',
          backdropFilter: 'blur(3px)',
          borderBottom: '3px solid #0284c7'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '4px', backgroundColor: 'rgba(2, 132, 199, 0.35)', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px', backdropFilter: 'blur(4px)' }}>
              <Clock size={15} /> 24/7 Operations Desk
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px', color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
              Contact Navyronix Marine Operations & RFQ Desk
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#f8fafc', lineHeight: 1.6, textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
              Whether you require urgent spare parts delivery to an anchorage, riding squads for voyage engine repairs, or a competitive proforma quote — our marine superintendents are on duty 24/7/365.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Content & Form Grid (Crisp White Cards over Maritime Ship Backdrop) */}
      <section style={{ padding: '70px 0', backgroundColor: 'rgba(248, 250, 252, 0.88)', backdropFilter: 'blur(8px)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            
            {/* Left Column: Contact Channels & Hubs */}
            <div>
              <div style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                Direct Channels
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0a2540', marginBottom: '24px' }}>
                Reach Our Duty Technical Superintendents
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                
                {/* 24/7 Hotline Card */}
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: '#0a2540',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>24/7 Worldwide Hotline / WhatsApp</div>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a2540' }}>
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email Desk Card */}
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: '#0284c7',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Direct RFQ & Commercial Inquiries</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0a2540' }}>
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Headquarters Address Card */}
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    backgroundColor: '#0a2540',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Corporate & Warehousing Hub</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e293b', marginTop: '2px' }}>
                      {COMPANY_INFO.address}
                    </div>
                  </div>
                </div>

              </div>

              {/* Major Maritime Hubs List */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '24px'
              }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0a2540', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Globe2 size={18} color="#0284c7" /> Regional Port Attendance Desks
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                  {COMPANY_INFO.hubs.map((hub, idx) => (
                    <div key={idx} style={{ padding: '8px 12px', borderRadius: '6px', backgroundColor: '#f8fafc', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 700, color: '#0a2540' }}>{hub.city}</span>{' '}
                      <span style={{ color: '#64748b' }}>({hub.country})</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Inquiry & Technical RFQ Form */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '36px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#dcfce7',
                    color: '#15803d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a2540', marginBottom: '10px' }}>
                    Inquiry Received Successfully!
                  </h3>
                  <div style={{
                    backgroundColor: '#f1f5f9',
                    borderRadius: '6px',
                    padding: '12px',
                    maxWidth: '300px',
                    margin: '16px auto',
                    fontFamily: 'monospace',
                    fontSize: '1rem',
                    color: '#0284c7',
                    fontWeight: 700
                  }}>
                    Ticket ID: {ticketId}
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                    Our duty superintendent has received your inquiry. A formal response will be provided to <strong>{formData.email}</strong> within 30 to 60 minutes.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn btn-primary"
                    style={{ padding: '12px 30px', backgroundColor: '#0a2540' }}
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a2540', marginBottom: '8px' }}>
                    Send Technical Inquiry / RFQ
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '24px' }}>
                    Please provide vessel name, engine model, or part specifications for immediate pricing.
                  </p>

                  <div className="form-row-2" style={{ marginBottom: '16px' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g., Capt. Erik Lindqvist"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Company / Fleet *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g., Nordic Tankers Management"
                        className="form-input"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2" style={{ marginBottom: '16px' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="superintendent@fleet.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+44 20 7946 0912"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2" style={{ marginBottom: '16px' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Vessel Name & IMO</label>
                      <input 
                        type="text" 
                        placeholder="e.g., M/V Blue Horizon (IMO 952341)"
                        className="form-input"
                        value={formData.vesselName}
                        onChange={(e) => setFormData({ ...formData, vesselName: e.target.value })}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Port of Delivery</label>
                      <input 
                        type="text" 
                        placeholder="e.g., Singapore, Rotterdam, Fujairah"
                        className="form-input"
                        value={formData.portOfDelivery}
                        onChange={(e) => setFormData({ ...formData, portOfDelivery: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '24px' }}>
                    <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Inquiry Details / Part Numbers / Engine Specs *</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Specify part numbers, maker name, turbocharger model, pump type, or repair service requirements..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '14px', justifyContent: 'center', backgroundColor: '#0284c7', borderColor: '#0284c7', fontSize: '1rem' }}
                  >
                    <Send size={18} />
                    <span>Send Message to Operations Desk</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
