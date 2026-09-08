"use client";

import React, { useState, useEffect } from 'react';
import { PortfolioContent, defaultPortfolioContent } from '@/data/portfolioContent';
import FileUploadButton from '@/components/FileUploadButton';

interface InboxMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt: string;
  source?: string;
  attachmentName?: string;
  attachmentUrl?: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Content state
  const [content, setContent] = useState<PortfolioContent>(defaultPortfolioContent);
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'services' | 'inbox'>('profile');
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Inbox
  const [inbox, setInbox] = useState<InboxMessage[]>([]);
  const [loadingInbox, setLoadingInbox] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin/check');
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
      if (data.authenticated) {
        loadData();
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const loadData = async () => {
    try {
      const [resContent, resInbox] = await Promise.all([
        fetch('/api/admin/content'),
        fetch('/api/admin/inbox'),
      ]);

      if (resContent.ok) {
        const cData = await resContent.json();
        setContent({ ...defaultPortfolioContent, ...cData });
      }

      if (resInbox.ok) {
        const iData = await resInbox.json();
        setInbox(iData.messages || []);
      }
    } catch (e) {
      console.error('Failed to load admin data:', e);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        loadData();
      } else {
        setLoginError(data.error || 'Incorrect password. Try again.');
      }
    } catch {
      setLoginError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setPassword('');
    } catch (e) {
      console.error(e);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      if (res.ok) {
        showToast('All changes saved! Updated live on website.');
      } else {
        showToast('Failed to save changes.', 'error');
      }
    } catch {
      showToast('Network error while saving.', 'error');
    } finally {
      setSaving(false);
    }
  };

  // -------------------------------------------------------------
  // Loading State
  // -------------------------------------------------------------
  if (isAuthenticated === null) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#06131B', color: '#FFF', fontFamily: "'Montserrat', sans-serif" }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '28px', marginBottom: '12px' }}>⚡</div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#42AFFD' }}>Opening Dashboard...</div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // Simple Login Screen
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#06131B', padding: '20px', fontFamily: "'Montserrat', sans-serif" }}>
        <div style={{ maxWidth: '400px', width: '100%', backgroundColor: '#0B1D28', border: '1px solid #16324A', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', textAlign: 'center' }}>
          
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(19, 155, 253, 0.15)', border: '1px solid rgba(19, 155, 253, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto', fontSize: '24px', color: '#139BFD' }}>
            🔒
          </div>

          <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '6px' }}>
            Chamnab Mey
          </h1>
          <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '28px' }}>
            Admin Control Center
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              style={{
                width: '100%',
                padding: '14px 18px',
                borderRadius: '12px',
                backgroundColor: '#06131B',
                border: '1.5px solid #16324A',
                color: '#FFFFFF',
                fontSize: '15px',
                outline: 'none',
              }}
            />

            {loginError && (
              <div style={{ color: '#F87171', fontSize: '13px', textAlign: 'left' }}>
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '14px',
                borderRadius: '12px',
                backgroundColor: '#139BFD',
                color: '#FFFFFF',
                border: 'none',
                fontWeight: 700,
                fontSize: '15px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                boxShadow: '0 6px 20px rgba(19, 155, 253, 0.35)',
              }}
            >
              {loading ? 'Verifying...' : 'Unlock Dashboard →'}
            </button>
          </form>

          <div style={{ marginTop: '24px', fontSize: '12px', color: '#64748B' }}>
            Default key: <code style={{ color: '#42AFFD' }}>chamnab2026!</code>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // Clean, Simple Main Dashboard
  // -------------------------------------------------------------
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#06131B', color: '#FFFFFF', fontFamily: "'Montserrat', sans-serif" }}>
      
      {/* Sticky Clean Top Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(6, 19, 27, 0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #16324A',
          padding: '16px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left: Branding & Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.5px' }}>
            <span style={{ color: '#139BFD' }}>CHAMNAB</span> MEY
          </div>
          <span style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '500px', backgroundColor: 'rgba(0, 230, 118, 0.15)', color: '#00E676', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00E676' }}></span>
            Live
          </span>
        </div>

        {/* Center: Simple Navigation Tabs */}
        <div style={{ display: 'flex', gap: '8px', backgroundColor: '#0B1D28', padding: '4px', borderRadius: '12px', border: '1px solid #16324A' }}>
          {[
            { id: 'profile', label: '👤 Profile & Links' },
            { id: 'projects', label: `💼 Projects (${content.projects.length})` },
            { id: 'services', label: '⚡ Services & Skills' },
            { id: 'inbox', label: `📬 Inbox ${inbox.length > 0 ? `(${inbox.length})` : ''}` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              type="button"
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: activeTab === tab.id ? '#139BFD' : 'transparent',
                color: activeTab === tab.id ? '#FFFFFF' : '#94A3B8',
                border: 'none',
                fontWeight: 700,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 16px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid #16324A',
              color: '#94A3B8',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            View Website ↗
          </a>

          <button
            onClick={handleSave}
            disabled={saving}
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 20px',
              borderRadius: '10px',
              backgroundColor: '#139BFD',
              color: '#FFFFFF',
              border: 'none',
              fontWeight: 700,
              fontSize: '13px',
              cursor: saving ? 'not-allowed' : 'pointer',
              boxShadow: '0 4px 15px rgba(19, 155, 253, 0.35)',
            }}
          >
            {saving ? 'Saving...' : '💾 Save Changes'}
          </button>

          <button
            onClick={handleLogout}
            title="Logout"
            type="button"
            style={{
              background: 'transparent',
              border: '1px solid #16324A',
              color: '#F87171',
              padding: '8px 12px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Floating Toast Notice */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            right: '28px',
            zIndex: 99999,
            padding: '14px 22px',
            borderRadius: '12px',
            backgroundColor: toast.type === 'success' ? '#00C853' : '#E53935',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: '14px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            animation: 'fadeInUp 0.25s ease',
          }}
        >
          {toast.message}
        </div>
      )}

      {/* Main Container */}
      <main style={{ maxWidth: '1040px', margin: '0 auto', padding: '36px 20px 80px 20px' }}>
        
        {/* ============================================================ */}
        {/* TAB 1: PROFILE & CONTACT */}
        {/* ============================================================ */}
        {activeTab === 'profile' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Card 1: Visual Assets (Photo & CV) */}
            <div style={{ backgroundColor: '#0B1D28', border: '1px solid #16324A', borderRadius: '20px', padding: '28px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', color: '#42AFFD' }}>
                1. Photos & Resume Document
              </h2>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '22px' }}>
                Upload your portrait photo and CV file. Click the button to choose a file from your computer.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <FileUploadButton
                  label="Profile Portrait Photo"
                  currentValue={content.profile.photo}
                  onUpload={(url) => setContent({ ...content, profile: { ...content.profile, photo: url } })}
                  accept="image/*"
                  fileType="image"
                  buttonText="📷 Upload Photo"
                  helperText="Shown on sidebar and hero section."
                />

                <FileUploadButton
                  label="Resume / CV File (PDF)"
                  currentValue={content.profile.resumeUrl}
                  onUpload={(url) => setContent({ ...content, profile: { ...content.profile, resumeUrl: url } })}
                  accept=".pdf,.doc,.docx"
                  fileType="file"
                  buttonText="📄 Upload Resume (PDF)"
                  helperText="Downloaded when visitors click 'Download CV'."
                />
              </div>
            </div>

            {/* Card 2: Personal & Headline */}
            <div style={{ backgroundColor: '#0B1D28', border: '1px solid #16324A', borderRadius: '20px', padding: '28px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', color: '#42AFFD' }}>
                2. Headline & Bio Information
              </h2>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '22px' }}>
                The main titles and summary copy displayed across the website.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '6px' }}>Full Name</label>
                  <input
                    type="text"
                    value={content.profile.name}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, name: e.target.value } })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '10px', color: '#FFF', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '6px' }}>Tagline</label>
                  <input
                    type="text"
                    value={content.profile.tagline}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, tagline: e.target.value } })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '10px', color: '#FFF', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '6px' }}>
                  Rotating Headline Roles (separated by commas)
                </label>
                <input
                  type="text"
                  value={content.hero.rotatingRoles.join(', ')}
                  onChange={(e) => setContent({
                    ...content,
                    hero: {
                      ...content.hero,
                      rotatingRoles: e.target.value.split(',').map(s => s.trim()).filter(Boolean),
                    }
                  })}
                  style={{ width: '100%', padding: '12px 16px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '10px', color: '#FFF', fontSize: '14px' }}
                />
                <span style={{ fontSize: '11px', color: '#64748B', marginTop: '4px', display: 'block' }}>
                  These words cycle smoothly in the Hero header (e.g. Digital Marketer, Growth Strategist, Meta Ads Specialist)
                </span>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '6px' }}>Summary Bio</label>
                <textarea
                  rows={3}
                  value={content.profile.sidebarBio}
                  onChange={(e) => setContent({
                    ...content,
                    profile: { ...content.profile, sidebarBio: e.target.value },
                    hero: { ...content.hero, description: e.target.value },
                  })}
                  style={{ width: '100%', padding: '12px 16px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '10px', color: '#FFF', fontSize: '14px', lineHeight: 1.5 }}
                />
              </div>
            </div>

            {/* Card 3: Contact & Social Channels */}
            <div style={{ backgroundColor: '#0B1D28', border: '1px solid #16324A', borderRadius: '20px', padding: '28px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', color: '#42AFFD' }}>
                3. Contact Details & Social Links
              </h2>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '22px' }}>
                Where clients can contact you directly.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '6px' }}>Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={content.profile.phone}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, phone: e.target.value } })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '10px', color: '#FFF', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '6px' }}>Email Address</label>
                  <input
                    type="email"
                    value={content.profile.email}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, email: e.target.value } })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '10px', color: '#FFF', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '6px' }}>Telegram Username</label>
                  <input
                    type="text"
                    placeholder="@chamnabmey"
                    value={content.profile.telegramUser}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, telegramUser: e.target.value } })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '10px', color: '#FFF', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '6px' }}>Telegram Link</label>
                  <input
                    type="text"
                    placeholder="https://t.me/chamnabmey"
                    value={content.profile.telegram}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, telegram: e.target.value } })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '10px', color: '#FFF', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '6px' }}>Location</label>
                  <input
                    type="text"
                    value={content.profile.location}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, location: e.target.value } })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '10px', color: '#FFF', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '6px' }}>LinkedIn Link</label>
                  <input
                    type="text"
                    value={content.profile.linkedin}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, linkedin: e.target.value } })}
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '10px', color: '#FFF', fontSize: '14px' }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Save Action */}
            <div style={{ textAlign: 'right', marginTop: '10px' }}>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                style={{
                  padding: '14px 32px',
                  borderRadius: '12px',
                  backgroundColor: '#139BFD',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(19, 155, 253, 0.4)',
                }}
              >
                {saving ? 'Saving...' : '💾 Save Profile Information'}
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: PROJECTS & CASE STUDIES */}
        {/* ============================================================ */}
        {activeTab === 'projects' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 800 }}>Portfolio Projects ({content.projects.length})</h2>
                <p style={{ fontSize: '13px', color: '#94A3B8' }}>These case studies are showcased in your interactive portfolio section.</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newProj = {
                    id: 'proj-' + Date.now(),
                    title: 'New Client Growth Campaign',
                    category: 'meta' as const,
                    tags: ['Meta Ads', 'Performance'],
                    description: 'Full-funnel campaign strategy and verified commercial results.',
                    metrics: '+120% Sales | 4.0x ROAS',
                    image: '/assets/images/latest-portfolio/portfoli-img-1.jpg',
                    link: '#contacts',
                  };
                  setContent({ ...content, projects: [newProj, ...content.projects] });
                  showToast('New project added at the top! Fill details and save.');
                }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px',
                  backgroundColor: '#139BFD',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>+ Add New Project</span>
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {content.projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  style={{
                    backgroundColor: '#0B1D28',
                    border: '1px solid #16324A',
                    borderRadius: '20px',
                    padding: '24px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #16324A', paddingBottom: '14px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#42AFFD' }}>
                      Project #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const updated = content.projects.filter(p => p.id !== proj.id);
                        setContent({ ...content, projects: updated });
                        showToast('Project removed. Click Save Changes to commit.');
                      }}
                      style={{
                        background: 'rgba(239, 68, 68, 0.15)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        color: '#F87171',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        fontWeight: 600,
                      }}
                    >
                      Delete Project
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '18px' }}>
                    {/* Image Upload */}
                    <div>
                      <FileUploadButton
                        label="Project Cover Image"
                        currentValue={proj.image}
                        onUpload={(url) => {
                          const updated = [...content.projects];
                          updated[idx].image = url;
                          setContent({ ...content, projects: updated });
                        }}
                        accept="image/*"
                        fileType="image"
                        buttonText="Upload Cover Photo"
                      />
                    </div>

                    {/* Details */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '4px' }}>Project Title</label>
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => {
                            const updated = [...content.projects];
                            updated[idx].title = e.target.value;
                            setContent({ ...content, projects: updated });
                          }}
                          style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '8px', color: '#FFF', fontSize: '14px', fontWeight: 600 }}
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '4px' }}>Category Tab</label>
                          <select
                            value={proj.category}
                            onChange={(e) => {
                              const updated = [...content.projects];
                              updated[idx].category = e.target.value as any;
                              setContent({ ...content, projects: updated });
                            }}
                            style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '8px', color: '#FFF', fontSize: '13px' }}
                          >
                            <option value="meta">Meta & Paid Ads</option>
                            <option value="tracking">Conversion API & Tracking</option>
                            <option value="cro">Sales Funnels & CRO</option>
                            <option value="ecommerce">E-Commerce Growth</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '4px' }}>ROI / Highlight Badge</label>
                          <input
                            type="text"
                            placeholder="+140% Leads | 3.8x ROAS"
                            value={proj.metrics}
                            onChange={(e) => {
                              const updated = [...content.projects];
                              updated[idx].metrics = e.target.value;
                              setContent({ ...content, projects: updated });
                            }}
                            style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '8px', color: '#FFF', fontSize: '13px' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '4px' }}>Case Summary</label>
                        <textarea
                          rows={2}
                          value={proj.description}
                          onChange={(e) => {
                            const updated = [...content.projects];
                            updated[idx].description = e.target.value;
                            setContent({ ...content, projects: updated });
                          }}
                          style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '8px', color: '#FFF', fontSize: '13px', lineHeight: 1.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Save Action */}
            <div style={{ textAlign: 'right', marginTop: '24px' }}>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                style={{
                  padding: '14px 32px',
                  borderRadius: '12px',
                  backgroundColor: '#139BFD',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(19, 155, 253, 0.4)',
                }}
              >
                {saving ? 'Saving...' : '💾 Save All Projects'}
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: SERVICES & SKILLS */}
        {/* ============================================================ */}
        {activeTab === 'services' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Services */}
            <div style={{ backgroundColor: '#0B1D28', border: '1px solid #16324A', borderRadius: '20px', padding: '28px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', color: '#42AFFD' }}>
                Core Service Offerings
              </h2>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '22px' }}>
                The 3 primary pillars displayed in your Expertise section.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {content.services.map((serv, idx) => (
                  <div key={serv.id} style={{ backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '14px', padding: '18px' }}>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '10px' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '4px' }}>Service Title</label>
                        <input
                          type="text"
                          value={serv.title}
                          onChange={(e) => {
                            const updated = [...content.services];
                            updated[idx].title = e.target.value;
                            setContent({ ...content, services: updated });
                          }}
                          style={{ width: '100%', padding: '10px 14px', backgroundColor: '#0B1D28', border: '1px solid #16324A', borderRadius: '8px', color: '#FFF', fontSize: '14px', fontWeight: 600 }}
                        />
                      </div>

                      <div style={{ width: '120px' }}>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '4px' }}>Score (%)</label>
                        <input
                          type="number"
                          min={50}
                          max={100}
                          value={serv.score}
                          onChange={(e) => {
                            const updated = [...content.services];
                            updated[idx].score = parseInt(e.target.value) || 0;
                            setContent({ ...content, services: updated });
                          }}
                          style={{ width: '100%', padding: '10px 14px', backgroundColor: '#0B1D28', border: '1px solid #16324A', borderRadius: '8px', color: '#FFF', fontSize: '14px' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#94A3B8', marginBottom: '4px' }}>Description</label>
                      <textarea
                        rows={2}
                        value={serv.description}
                        onChange={(e) => {
                          const updated = [...content.services];
                          updated[idx].description = e.target.value;
                          setContent({ ...content, services: updated });
                        }}
                        style={{ width: '100%', padding: '10px 14px', backgroundColor: '#0B1D28', border: '1px solid #16324A', borderRadius: '8px', color: '#FFF', fontSize: '13px', lineHeight: 1.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Skills */}
            <div style={{ backgroundColor: '#0B1D28', border: '1px solid #16324A', borderRadius: '20px', padding: '28px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', color: '#42AFFD' }}>
                Skills & Proficiency Progress
              </h2>
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '22px' }}>
                Percentages shown in the skill progress bars.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {content.skills.paidMedia.map((skill, idx) => (
                  <div key={skill.name + idx} style={{ backgroundColor: '#06131B', border: '1px solid #16324A', borderRadius: '12px', padding: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#FFF' }}>{skill.name}</span>
                      <span style={{ fontSize: '13px', fontWeight: 800, color: '#139BFD' }}>{skill.percentage}%</span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={100}
                      value={skill.percentage}
                      onChange={(e) => {
                        const updated = [...content.skills.paidMedia];
                        updated[idx].percentage = parseInt(e.target.value);
                        setContent({ ...content, skills: { ...content.skills, paidMedia: updated } });
                      }}
                      style={{ width: '100%', accentColor: '#139BFD', cursor: 'pointer' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Save */}
            <div style={{ textAlign: 'right' }}>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                style={{
                  padding: '14px 32px',
                  borderRadius: '12px',
                  backgroundColor: '#139BFD',
                  color: '#FFFFFF',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(19, 155, 253, 0.4)',
                }}
              >
                {saving ? 'Saving...' : '💾 Save Services & Skills'}
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: CLIENT INBOX */}
        {/* ============================================================ */}
        {activeTab === 'inbox' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '14px' }}>
              <div>
                <h2 style={{ fontSize: '22px', fontWeight: 800 }}>Client Inquiries Inbox</h2>
                <p style={{ fontSize: '13px', color: '#94A3B8' }}>Every message submitted through your website contact form appears here.</p>
              </div>

              <button
                type="button"
                onClick={loadData}
                disabled={loadingInbox}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  backgroundColor: '#0B1D28',
                  border: '1px solid #16324A',
                  color: '#42AFFD',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                🔄 Refresh Messages
              </button>
            </div>

            {inbox.length === 0 ? (
              <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#0B1D28', borderRadius: '20px', border: '1px dashed #16324A' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>📬</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>No messages yet</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', maxWidth: '380px', margin: '0 auto' }}>
                  When visitors or prospective clients fill out the contact form, their inquiry and files will appear right here.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {inbox.map((msg) => (
                  <div
                    key={msg.id}
                    style={{
                      backgroundColor: '#0B1D28',
                      border: '1px solid #16324A',
                      borderRadius: '18px',
                      padding: '24px',
                    }}
                  >
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
                      <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#FFFFFF', marginBottom: '4px' }}>
                          {msg.name || 'Website Visitor'}
                        </h4>
                        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', fontSize: '12px', color: '#94A3B8' }}>
                          <span>📧 {msg.email}</span>
                          {msg.phone && <span>📞 {msg.phone}</span>}
                          {msg.subject && <span style={{ color: '#42AFFD' }}>🎯 {msg.subject}</span>}
                        </div>
                      </div>

                      <span style={{ fontSize: '11px', color: '#64748B', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '4px 10px', borderRadius: '500px' }}>
                        {new Date(msg.createdAt).toLocaleDateString()} at {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    {/* Message Body */}
                    <div style={{ backgroundColor: '#06131B', borderRadius: '12px', padding: '16px', fontSize: '14px', lineHeight: 1.6, color: '#E2E8F0', marginBottom: '16px', border: '1px solid #16324A' }}>
                      {msg.message}
                    </div>

                    {/* Attachment if present */}
                    {msg.attachmentName && (
                      <div style={{ marginBottom: '16px' }}>
                        <a
                          href={msg.attachmentUrl}
                          download={msg.attachmentName}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(19, 155, 253, 0.15)',
                            border: '1px solid rgba(19, 155, 253, 0.35)',
                            color: '#42AFFD',
                            fontSize: '13px',
                            fontWeight: 600,
                            textDecoration: 'none',
                          }}
                        >
                          📎 Download Attached File: {msg.attachmentName}
                        </a>
                      </div>
                    )}

                    {/* Quick Reply Actions */}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <a
                        href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject || 'Inquiry')}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '8px 16px',
                          borderRadius: '8px',
                          backgroundColor: '#139BFD',
                          color: '#FFFFFF',
                          fontSize: '12px',
                          fontWeight: 700,
                          textDecoration: 'none',
                        }}
                      >
                        ✉️ Reply via Email
                      </a>

                      {msg.phone && (
                        <a
                          href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '8px 16px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(37, 211, 102, 0.15)',
                            border: '1px solid rgba(37, 211, 102, 0.3)',
                            color: '#25D366',
                            fontSize: '12px',
                            fontWeight: 700,
                            textDecoration: 'none',
                          }}
                        >
                          💬 Chat on WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}
