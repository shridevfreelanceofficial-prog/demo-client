'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { useRFQ } from '@/components/LayoutWrapper';
import { PRODUCTS, MARINE_CATEGORIES, INDUSTRIAL_CATEGORIES } from '@/data/products';
import { Product } from '@/types';
import { 
  Search, 
  Filter, 
  Ship, 
  Factory, 
  X, 
  FileSpreadsheet, 
  Layers
} from 'lucide-react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const { openRFQ } = useRFQ();

  const [selectedSector, setSelectedSector] = useState<string>('marine');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync state from query parameters
  useEffect(() => {
    const sectorParam = searchParams.get('sector');
    if (sectorParam && (sectorParam === 'marine' || sectorParam === 'industrial' || sectorParam === 'all')) {
      setSelectedSector(sectorParam);
    }

    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }

    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  // Determine current categories based on sector
  const currentCategories = selectedSector === 'industrial' 
    ? INDUSTRIAL_CATEGORIES 
    : MARINE_CATEGORIES;

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    // Sector match
    if (selectedSector !== 'all') {
      if (product.sector !== selectedSector && product.sector !== 'both') {
        return false;
      }
    }

    // Category match
    if (selectedCategory !== 'all') {
      if (product.category !== selectedCategory) {
        return false;
      }
    }

    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchModel = product.model.toLowerCase().includes(q);
      const matchPart = product.partNumber ? product.partNumber.toLowerCase().includes(q) : false;
      const matchCat = product.category.toLowerCase().includes(q);
      const matchBrands = product.compatibleBrands.some(b => b.toLowerCase().includes(q));

      if (!matchName && !matchModel && !matchPart && !matchCat && !matchBrands) {
        return false;
      }
    }

    return true;
  });

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <>
      {/* Breadcrumb Header */}
      <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '14px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748b' }}>
            <Link href="/" style={{ color: '#0284c7', fontWeight: 600 }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#0a2540', fontWeight: 700 }}>Products Catalog</span>
          </div>
          <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
            85,000+ Marine & Industrial Parts In Stock
          </div>
        </div>
      </div>

      {/* Main Catalog View (Clean White Background) */}
      <section className="section section-white" style={{ paddingTop: '28px' }}>
        <div className="container">
          
          {/* Top Catalog Header & Sector Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0a2540', margin: '0 0 6px' }}>
                Marine Machinery & Spare Parts Catalog
              </h1>
              <p style={{ color: '#64748b', fontSize: '0.92rem', margin: 0 }}>
                Explore genuine and OEM marine spare parts across our 12 certified equipment categories.
              </p>
            </div>

            {/* Sector Tabs: Marine vs Industrial */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  setSelectedSector('marine');
                  setSelectedCategory('all');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  backgroundColor: selectedSector === 'marine' ? '#0284c7' : '#f1f5f9',
                  color: selectedSector === 'marine' ? '#ffffff' : '#334155',
                  border: '1px solid ' + (selectedSector === 'marine' ? '#0284c7' : '#cbd5e1'),
                  transition: 'all 0.2s ease'
                }}
              >
                <Ship size={15} />
                <span>Marine Products (12 Categories)</span>
              </button>

              <button
                onClick={() => {
                  setSelectedSector('industrial');
                  setSelectedCategory('all');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  backgroundColor: selectedSector === 'industrial' ? '#0284c7' : '#f1f5f9',
                  color: selectedSector === 'industrial' ? '#ffffff' : '#334155',
                  border: '1px solid ' + (selectedSector === 'industrial' ? '#0284c7' : '#cbd5e1'),
                  transition: 'all 0.2s ease'
                }}
              >
                <Factory size={15} />
                <span>Industrial Products</span>
              </button>

              <button
                onClick={() => {
                  setSelectedSector('all');
                  setSelectedCategory('all');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  backgroundColor: selectedSector === 'all' ? '#0284c7' : '#f1f5f9',
                  color: selectedSector === 'all' ? '#ffffff' : '#334155',
                  border: '1px solid ' + (selectedSector === 'all' ? '#0284c7' : '#cbd5e1'),
                  transition: 'all 0.2s ease'
                }}
              >
                <Layers size={15} />
                <span>All Divisions</span>
              </button>
            </div>
          </div>
          
          {/* Controls Bar: Search & Category Filter */}
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '18px',
            marginBottom: '30px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '14px',
              alignItems: 'center'
            }}>
              {/* Search Bar */}
              <div style={{ position: 'relative' }}>
                <Search size={18} color="#64748b" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type="text"
                  placeholder="Search model, part number (e.g. QSK19, HX82, 2CY)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px 10px 38px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                    color: '#1e293b',
                    outline: 'none',
                    backgroundColor: '#ffffff'
                  }}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Category Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Filter size={18} color="#0a2540" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                    color: '#0a2540',
                    fontWeight: 600,
                    backgroundColor: '#ffffff',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="all">All {selectedSector === 'marine' ? '12 Marine Categories' : 'Categories'}</option>
                  {currentCategories.map((cat, idx) => (
                    <option key={idx} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div style={{
              display: 'flex',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              gap: '8px',
              paddingTop: '14px',
              paddingBottom: '4px',
              marginTop: '14px',
              borderTop: '1px solid #e2e8f0'
            }}>
              <button
                onClick={() => setSelectedCategory('all')}
                style={{
                  padding: '6px 14px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  border: selectedCategory === 'all' ? '1px solid #0284c7' : '1px solid #cbd5e1',
                  backgroundColor: selectedCategory === 'all' ? '#0284c7' : '#ffffff',
                  color: selectedCategory === 'all' ? '#ffffff' : '#334155'
                }}
              >
                All Categories ({PRODUCTS.length})
              </button>

              {currentCategories.map((cat, idx) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      border: isSelected ? '1px solid #0284c7' : '1px solid #cbd5e1',
                      backgroundColor: isSelected ? '#0284c7' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#334155'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Active Filters Display */}
            {(selectedCategory !== 'all' || searchQuery !== '') && (
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '10px',
                marginTop: '10px',
                fontSize: '0.82rem',
                color: '#64748b'
              }}>
                <div>
                  Showing <strong>{filteredProducts.length}</strong> matching products
                </div>

                <button 
                  onClick={clearFilters}
                  style={{ color: '#d9232d', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <X size={14} /> Clear Filter
                </button>
              </div>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid-4">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  onViewDetails={(p) => setSelectedProduct(p)}
                  onRequestQuote={(name) => openRFQ(name)}
                />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#f8fafc',
              borderRadius: '8px',
              border: '1px dashed #cbd5e1'
            }}>
              <h4 style={{ fontSize: '1.2rem', color: '#0a2540', marginBottom: '8px' }}>
                No Products Match Your Exact Search
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem', maxWidth: '440px', margin: '0 auto 20px' }}>
                We stock over 85,000 marine parts in Singapore, Rotterdam, and Mumbai. Contact our technical team for immediate stock inquiry.
              </p>
              <button onClick={clearFilters} className="btn btn-outline" style={{ marginRight: '10px' }}>
                Reset Filters
              </button>
              <button onClick={() => openRFQ(searchQuery || 'Custom Inquiry')} className="btn btn-primary">
                <FileSpreadsheet size={16} />
                <span>Submit RFQ</span>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(name) => openRFQ(name)}
      />
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div style={{ padding: '80px 0', textAlign: 'center', color: '#0a2540', fontWeight: 700 }}>
        Loading Products Catalog...
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
