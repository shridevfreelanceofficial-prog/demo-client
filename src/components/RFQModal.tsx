'use client';

import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Ship, 
  Clock, 
  FileText,
  Anchor
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function RFQModal({ isOpen, onClose, defaultProduct }: RFQModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');
  const [formData, setFormData] = useState({
    vesselName: '',
    imoNumber: '',
    portOfDelivery: 'Singapore OPL',
    etaDate: '',
    partDescription: defaultProduct || '',
    quantity: '1',
    urgency: 'urgent',
    contactName: '',
    email: '',
    phone: '',
    company: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'NVX-RFQ-' + Math.floor(100000 + Math.random() * 900000);
    setRfqNumber(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        padding: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000
      }}
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ 
          maxWidth: '680px', 
          width: '100%',
          maxHeight: '94vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff', 
          borderRadius: '12px', 
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
          position: 'relative'
        }}
      >
        {/* Modal Top Bar (Maritime Navy) - Fixed at top */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '3px solid #0284c7',
          backgroundColor: '#0a2540',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Anchor size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.25 }}>
                Request For Quotation (RFQ)
              </h3>
              <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                Guaranteed quote reply within 60 minutes for worldwide ports
              </div>
            </div>
          </div>

          <button 
            onClick={onClose}
            aria-label="Close"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body - Scrollable on mobile & desktop */}
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#ffffff',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          flexGrow: 1,
          overscrollBehavior: 'contain'
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#dcfce7',
                color: '#15803d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                border: '1px solid #86efac'
              }}>
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a2540', marginBottom: '8px' }}>
                RFQ Successfully Transmitted!
              </h3>

              <div style={{
                backgroundColor: '#f1f5f9',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                padding: '12px',
                maxWidth: '340px',
                margin: '16px auto',
                fontFamily: 'monospace',
                fontSize: '1rem',
                color: '#0284c7',
                fontWeight: 700
              }}>
                Reference: {rfqNumber}
              </div>

              <p style={{ color: '#64748b', fontSize: '0.92rem', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                Our marine duty superintendents in Rotterdam and Singapore have received your inquiry. A formal proforma quote with lead time and freight options will be sent to <strong>{formData.email}</strong> shortly.
              </p>

              <button 
                onClick={handleReset}
                className="btn btn-primary"
                style={{ padding: '12px 30px', backgroundColor: '#0a2540', width: '100%', maxWidth: '280px' }}
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* Urgency Radio Selector - Responsive Chip Cards */}
              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '12px 14px',
                marginBottom: '18px'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Urgency Priority
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '8px'
                }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: formData.urgency === 'routine' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                    backgroundColor: formData.urgency === 'routine' ? '#f0f9ff' : '#ffffff',
                    cursor: 'pointer',
                    fontSize: '0.84rem',
                    color: formData.urgency === 'routine' ? '#0369a1' : '#334155',
                    fontWeight: formData.urgency === 'routine' ? 700 : 500,
                    transition: 'all 0.15s ease'
                  }}>
                    <input 
                      type="radio" 
                      name="urgency" 
                      value="routine"
                      checked={formData.urgency === 'routine'}
                      onChange={() => setFormData({ ...formData, urgency: 'routine' })}
                    />
                    <span>Routine</span>
                  </label>

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: formData.urgency === 'urgent' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                    backgroundColor: formData.urgency === 'urgent' ? '#f0f9ff' : '#ffffff',
                    cursor: 'pointer',
                    fontSize: '0.84rem',
                    color: formData.urgency === 'urgent' ? '#0284c7' : '#334155',
                    fontWeight: formData.urgency === 'urgent' ? 700 : 500,
                    transition: 'all 0.15s ease'
                  }}>
                    <input 
                      type="radio" 
                      name="urgency" 
                      value="urgent"
                      checked={formData.urgency === 'urgent'}
                      onChange={() => setFormData({ ...formData, urgency: 'urgent' })}
                    />
                    <span>Urgent (Port)</span>
                  </label>

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: formData.urgency === 'aog' ? '2px solid #dc2626' : '1px solid #cbd5e1',
                    backgroundColor: formData.urgency === 'aog' ? '#fef2f2' : '#ffffff',
                    cursor: 'pointer',
                    fontSize: '0.84rem',
                    color: formData.urgency === 'aog' ? '#dc2626' : '#334155',
                    fontWeight: formData.urgency === 'aog' ? 700 : 500,
                    transition: 'all 0.15s ease'
                  }}>
                    <input 
                      type="radio" 
                      name="urgency" 
                      value="aog"
                      checked={formData.urgency === 'aog'}
                      onChange={() => setFormData({ ...formData, urgency: 'aog' })}
                    />
                    <span>AOG Critical</span>
                  </label>
                </div>
              </div>

              {/* Grid 1: Vessel & Port Details */}
              <div className="form-row-2" style={{ marginBottom: '14px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Vessel Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g., M/V Pacific Pioneer"
                    className="form-input"
                    value={formData.vesselName}
                    onChange={(e) => setFormData({ ...formData, vesselName: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>IMO Number</label>
                  <input 
                    type="text" 
                    placeholder="e.g., 9482154"
                    className="form-input"
                    value={formData.imoNumber}
                    onChange={(e) => setFormData({ ...formData, imoNumber: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2" style={{ marginBottom: '14px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Port of Delivery *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g., Singapore OPL, Rotterdam, Fujairah"
                    className="form-input"
                    value={formData.portOfDelivery}
                    onChange={(e) => setFormData({ ...formData, portOfDelivery: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Vessel ETA / Target Date</label>
                  <input 
                    type="date" 
                    className="form-input"
                    value={formData.etaDate}
                    onChange={(e) => setFormData({ ...formData, etaDate: e.target.value })}
                  />
                </div>
              </div>

              {/* Spares / Machinery Description */}
              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Required Products / Part Numbers / Engine Specs *</label>
                <textarea 
                  rows={3}
                  required
                  placeholder="Provide part numbers, maker, engine type (e.g., Cummins QSK19 Turbocharger HX83 Assy: 4041703, or Yanmar 6EY18AL Spares)..."
                  className="form-textarea"
                  value={formData.partDescription}
                  onChange={(e) => setFormData({ ...formData, partDescription: e.target.value })}
                ></textarea>
              </div>

              {/* Grid 2: Contact Information */}
              <div className="form-row-2" style={{ marginBottom: '14px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Contact Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Chief Eng. / Superintendent"
                    className="form-input"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="tech@shippingcompany.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label" style={{ fontWeight: 600, color: '#1e293b' }}>WhatsApp / Phone *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+1 / +65 / +91..."
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Submit Buttons - Responsive Stacking */}
              <div className="btn-group-responsive" style={{ paddingTop: '14px', borderTop: '1px solid #e2e8f0', width: '100%' }}>
                <button 
                  type="submit"
                  className="btn btn-primary"
                  style={{ 
                    padding: '12px 18px', 
                    backgroundColor: '#0284c7', 
                    borderColor: '#0284c7', 
                    width: '100%', 
                    justifyContent: 'center',
                    whiteSpace: 'normal',
                    fontSize: '0.9rem',
                    lineHeight: 1.3
                  }}
                >
                  <Send size={16} />
                  <span>Submit RFQ to Duty Desk</span>
                </button>

                <button 
                  type="button" 
                  onClick={onClose}
                  className="btn"
                  style={{ padding: '12px 22px', border: '1px solid #cbd5e1', backgroundColor: '#ffffff', color: '#475569', fontWeight: 600, width: '100%' }}
                >
                  Cancel
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
