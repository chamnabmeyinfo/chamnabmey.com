"use client";

import React, { useState, useEffect } from 'react';
import { PortfolioContent, defaultPortfolioContent, ProjectItem, ServiceItem, TestimonialItem, BlogItem, SkillItem } from '@/data/portfolioContent';
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

  // Content
  const [content, setContent] = useState<PortfolioContent>(defaultPortfolioContent);
  const [activeTab, setActiveTab] = useState<'profile' | 'hero_about' | 'projects' | 'services' | 'testimonials' | 'blog' | 'inbox'>('profile');
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Inbox
  const [inbox, setInbox] = useState<InboxMessage[]>([]);
  const [inboxFilter, setInboxFilter] = useState('');

  // Chip input state for rotating roles
  const [newRoleInput, setNewRoleInput] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin/check');
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
      if (data.authenticated) loadData();
    } catch {
      setIsAuthenticated(false);
    }
  };

  const loadData = async () => {
    try {
      const [resC, resI] = await Promise.all([
        fetch('/api/admin/content'),
        fetch('/api/admin/inbox'),
      ]);
      if (resC.ok) {
        const d = await resC.json();
        setContent({
          ...defaultPortfolioContent,
          ...d,
          profile: { ...defaultPortfolioContent.profile, ...(d.profile || {}) },
          hero: { ...defaultPortfolioContent.hero, ...(d.hero || {}) },
          about: { ...defaultPortfolioContent.about, ...(d.about || {}) },
          skills: {
            paidMedia: d.skills?.paidMedia || defaultPortfolioContent.skills.paidMedia,
            tracking: d.skills?.tracking || defaultPortfolioContent.skills.tracking,
          },
          projects: d.projects || defaultPortfolioContent.projects,
          services: d.services || defaultPortfolioContent.services,
          testimonials: d.testimonials || defaultPortfolioContent.testimonials,
          blog: d.blog || defaultPortfolioContent.blog,
          footer: { ...defaultPortfolioContent.footer, ...(d.footer || {}) },
        });
      }
      if (resI.ok) {
        const d = await resI.json();
        setInbox(d.messages || []);
      }
    } catch (e) {
      console.error('Error loading admin data:', e);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError('');
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
        setLoginError(data.error || 'Invalid password credentials');
      }
    } catch {
      setLoginError('Authentication server error');
    } finally {
      setLoading(false);
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
        showToast('All changes published successfully!');
      } else {
        showToast('Error: Failed to save changes');
      }
    } catch {
      showToast('Connection error while saving');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      const res = await fetch(`/api/admin/inbox?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setInbox(prev => prev.filter(m => m.id !== id));
        showToast('Message deleted');
      } else {
        showToast('Failed to delete message');
      }
    } catch {
      showToast('Error deleting message');
    }
  };

  // Add rotating role chip
  const handleAddRole = () => {
    if (!newRoleInput.trim()) return;
    const currentRoles = content.hero.rotatingRoles || [];
    if (!currentRoles.includes(newRoleInput.trim())) {
      setContent({
        ...content,
        hero: {
          ...content.hero,
          rotatingRoles: [...currentRoles, newRoleInput.trim()],
        }
      });
    }
    setNewRoleInput('');
  };

  const handleRemoveRole = (indexToRemove: number) => {
    setContent({
      ...content,
      hero: {
        ...content.hero,
        rotatingRoles: content.hero.rotatingRoles.filter((_, idx) => idx !== indexToRemove),
      }
    });
  };

  // -------------------------------------------------------------
  // Visual Styles - Virtuo Cyber-Minimalist Design System Tokens
  // -------------------------------------------------------------
  const styles = {
    bgPage: '#010A10',
    card: '#06131B',
    cardInner: '#081722',
    border: '#0C1F2E',
    borderFocus: '#139BFD',
    cyan: '#13FDFD',
    blue: '#139BFD',
    gradient: 'linear-gradient(312deg, #13fdfd 0%, #139bfd 100%)',
    gradientHover: 'linear-gradient(312deg, #139bfd 0%, #13fdfd 100%)',
    textPrimary: '#FFFFFF',
    textMuted: '#94A3B8',
    textDim: '#4B6375',
    danger: '#F87171',
    fontHeading: "'Montserrat', sans-serif",
    fontBody: "'Poppins', sans-serif",
  };

  // Reusable card container style
  const cardStyle: React.CSSProperties = {
    backgroundColor: styles.card,
    border: `1px solid ${styles.border}`,
    borderRadius: '12px',
    padding: '20px 22px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
    position: 'relative',
  };

  // Reusable label style
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 700,
    color: styles.textMuted,
    textTransform: 'uppercase',
    letterSpacing: '0.6px',
    marginBottom: '6px',
    fontFamily: styles.fontHeading,
  };

  // Reusable input style
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '9px 12px',
    backgroundColor: styles.cardInner,
    border: `1px solid ${styles.border}`,
    borderRadius: '8px',
    color: styles.textPrimary,
    fontSize: '13px',
    fontFamily: styles.fontBody,
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  // Section Kicker Header
  const renderSectionHeader = (kicker: string, title: string, subtitle?: string) => (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ height: '6px', width: '6px', borderRadius: '50%', backgroundColor: styles.cyan, boxShadow: `0 0 8px ${styles.cyan}` }}></span>
        <span style={{ fontSize: '11px', fontWeight: 800, color: styles.cyan, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: styles.fontHeading }}>
          {kicker}
        </span>
      </div>
      <h3 style={{ fontSize: '16px', fontWeight: 700, color: styles.textPrimary, margin: '4px 0 2px 0', fontFamily: styles.fontHeading }}>
        {title}
      </h3>
      {subtitle && <p style={{ fontSize: '12px', color: styles.textDim, margin: 0, fontFamily: styles.fontBody }}>{subtitle}</p>}
    </div>
  );

  // Bottom action bar
  const renderActionBar = (saveLabel = 'Save Changes') => (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px', marginTop: '16px', paddingTop: '16px', borderTop: `1px solid ${styles.border}` }}>
      {toast && (
        <span style={{ fontSize: '12px', color: styles.cyan, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
          {toast}
        </span>
      )}
      <button
        type="button"
        onClick={handleSave}
        disabled={saving}
        style={{
          padding: '9px 24px',
          borderRadius: '8px',
          background: styles.gradient,
          color: '#010A10',
          border: 'none',
          fontSize: '12px',
          fontWeight: 800,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          fontFamily: styles.fontHeading,
          cursor: saving ? 'not-allowed' : 'pointer',
          boxShadow: '0 0 16px rgba(19, 253, 253, 0.3)',
          transition: 'transform 0.15s ease, box-shadow 0.15s ease',
          opacity: saving ? 0.7 : 1,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        {saving ? 'Publishing...' : `💾 ${saveLabel}`}
      </button>
    </div>
  );

  // -------------------------------------------------------------
  // 1. Loading Screen
  // -------------------------------------------------------------
  if (isAuthenticated === null) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: styles.bgPage, color: styles.textMuted, fontFamily: styles.fontBody }}>
        <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: `3px solid ${styles.border}`, borderTopColor: styles.cyan, animation: 'spin 1s linear infinite', marginBottom: '16px' }} />
        <div style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.5px', color: styles.textPrimary, fontFamily: styles.fontHeading }}>
          INITIALIZING CONTROL SUITE...
        </div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. Virtuo Dark Tech Minimalist Login
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: styles.bgPage,
          backgroundImage: 'radial-gradient(circle at 50% 35%, rgba(19, 155, 253, 0.08) 0%, transparent 65%)',
          padding: '20px',
          fontFamily: styles.fontBody,
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '380px',
            backgroundColor: styles.card,
            border: `1px solid ${styles.border}`,
            borderRadius: '16px',
            padding: '32px 28px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(19, 155, 253, 0.12)',
            position: 'relative',
          }}
        >
          {/* Top Cyan Accent Line */}
          <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '2px', background: styles.gradient, borderRadius: '2px' }} />

          {/* Brand Header */}
          <div style={{ textAlign: 'center', marginBottom: '26px' }}>
            <div style={{ fontSize: '20px', fontWeight: 800, color: styles.textPrimary, fontFamily: styles.fontHeading, letterSpacing: '-0.5px' }}>
              <span style={{ background: styles.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CHAMNAB</span> MEY
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '6px', padding: '3px 10px', borderRadius: '12px', backgroundColor: styles.cardInner, border: `1px solid ${styles.border}` }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: styles.cyan, boxShadow: `0 0 6px ${styles.cyan}` }}></span>
              <span style={{ fontSize: '10px', fontWeight: 700, color: styles.textMuted, letterSpacing: '1px', textTransform: 'uppercase', fontFamily: styles.fontHeading }}>
                ADMIN CONTROL SUITE
              </span>
            </div>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={labelStyle}>Security Passcode</label>
              <input
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                style={{
                  ...inputStyle,
                  padding: '11px 14px',
                  fontSize: '14px',
                  borderColor: loginError ? styles.danger : styles.border,
                }}
                onFocus={(e) => (e.target.style.borderColor = styles.blue)}
                onBlur={(e) => (e.target.style.borderColor = styles.border)}
              />
            </div>

            {loginError && (
              <div style={{ color: styles.danger, fontSize: '11px', padding: '6px 10px', borderRadius: '6px', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
                ⚠ {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                marginTop: '6px',
                padding: '12px',
                borderRadius: '8px',
                background: styles.gradient,
                color: '#010A10',
                border: 'none',
                fontWeight: 800,
                fontSize: '13px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: styles.fontHeading,
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: '0 0 20px rgba(19, 253, 253, 0.3)',
                transition: 'opacity 0.2s ease',
              }}
            >
              {loading ? 'Authenticating...' : 'Enter Control Panel →'}
            </button>
          </form>

          <div style={{ marginTop: '22px', textAlign: 'center', fontSize: '11px', color: styles.textDim }}>
            Default Passcode: <code style={{ color: styles.cyan, backgroundColor: styles.cardInner, padding: '2px 6px', borderRadius: '4px', border: `1px solid ${styles.border}` }}>chamnab2026!</code>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 3. Full Virtuo Dark Tech Minimalist Admin Dashboard
  // -------------------------------------------------------------
  return (
    <div style={{ minHeight: '100vh', backgroundColor: styles.bgPage, color: styles.textPrimary, fontFamily: styles.fontBody, fontSize: '13px' }}>
      
      {/* ========================================================= */}
      {/* Sticky Virtuo Header (Height 54px) */}
      {/* ========================================================= */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: '54px',
          backgroundColor: 'rgba(6, 19, 27, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${styles.border}`,
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Brand + Active Pulse */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 800, color: styles.textPrimary, fontSize: '14px', fontFamily: styles.fontHeading, letterSpacing: '-0.3px' }}>
              <span style={{ background: styles.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CHAMNAB</span> MEY
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 7px', borderRadius: '10px', backgroundColor: styles.cardInner, border: `1px solid ${styles.border}` }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 6px #10B981' }}></span>
              <span style={{ fontSize: '9px', fontWeight: 700, color: '#10B981', letterSpacing: '0.5px' }}>LIVE</span>
            </span>
          </div>

          {/* Navigation Tabs (Pill group) */}
          <nav style={{ display: 'flex', gap: '4px', backgroundColor: styles.cardInner, padding: '3px', borderRadius: '8px', border: `1px solid ${styles.border}` }}>
            {[
              { id: 'profile', label: 'Profile', icon: '👤' },
              { id: 'hero_about', label: 'Hero & Story', icon: '🌟' },
              { id: 'projects', label: 'Projects', icon: '💼', count: content.projects.length },
              { id: 'services', label: 'Services & Skills', icon: '⚡' },
              { id: 'testimonials', label: 'Reviews', icon: '💬', count: content.testimonials?.length || 0 },
              { id: 'blog', label: 'Blog', icon: '📝', count: content.blog?.length || 0 },
              { id: 'inbox', label: 'Inbox', icon: '📬', count: inbox.length, badgeColor: inbox.length > 0 ? styles.cyan : undefined },
            ].map((t) => {
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id as any)}
                  style={{
                    padding: '5px 11px',
                    borderRadius: '6px',
                    background: isActive ? styles.gradient : 'transparent',
                    color: isActive ? '#010A10' : styles.textMuted,
                    border: 'none',
                    fontSize: '11px',
                    fontWeight: 700,
                    fontFamily: styles.fontHeading,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'all 0.15s ease',
                    boxShadow: isActive ? '0 0 10px rgba(19, 253, 253, 0.25)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = styles.textMuted;
                  }}
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                  {t.count !== undefined && (
                    <span
                      style={{
                        padding: '1px 5px',
                        borderRadius: '8px',
                        fontSize: '9px',
                        fontWeight: 800,
                        backgroundColor: isActive ? 'rgba(1, 10, 16, 0.25)' : styles.border,
                        color: isActive ? '#010A10' : (t.badgeColor || styles.textMuted),
                      }}
                    >
                      {t.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {toast && (
            <span style={{ fontSize: '11px', color: styles.cyan, fontWeight: 700, paddingRight: '6px', animation: 'fadeIn 0.2s ease' }}>
              ✓ {toast}
            </span>
          )}

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              backgroundColor: styles.cardInner,
              border: `1px solid ${styles.border}`,
              color: styles.textMuted,
              fontSize: '11px',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: styles.fontHeading,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = styles.blue;
              e.currentTarget.style.color = '#FFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = styles.border;
              e.currentTarget.style.color = styles.textMuted;
            }}
          >
            Live Site ↗
          </a>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: '6px 16px',
              borderRadius: '6px',
              background: styles.gradient,
              color: '#010A10',
              border: 'none',
              fontSize: '11px',
              fontWeight: 800,
              fontFamily: styles.fontHeading,
              letterSpacing: '0.4px',
              textTransform: 'uppercase',
              cursor: saving ? 'not-allowed' : 'pointer',
              boxShadow: '0 0 14px rgba(19, 253, 253, 0.25)',
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? 'Publishing...' : '💾 Publish'}
          </button>

          <button
            type="button"
            onClick={async () => {
              await fetch('/api/admin/logout', { method: 'POST' });
              setIsAuthenticated(false);
            }}
            style={{
              background: 'transparent',
              border: `1px solid ${styles.border}`,
              borderRadius: '6px',
              color: styles.textDim,
              cursor: 'pointer',
              fontSize: '12px',
              padding: '5px 8px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            title="Logout"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = styles.danger;
              e.currentTarget.style.color = styles.danger;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = styles.border;
              e.currentTarget.style.color = styles.textDim;
            }}
          >
            ✕
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* Main Workspace */}
      {/* ========================================================= */}
      <main style={{ maxWidth: '1080px', margin: '0 auto', padding: '24px 20px 60px 20px' }}>

        {/* ========================================================= */}
        {/* TAB 1: PROFILE & CONTACT */}
        {/* ========================================================= */}
        {activeTab === 'profile' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Box 1: Visual Identity & Documents */}
            <div style={cardStyle}>
              {renderSectionHeader('IDENTITY', 'Visual Assets & Credentials', 'Manage your portrait and downloadable curriculum vitae')}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: styles.cardInner, padding: '14px', borderRadius: '10px', border: `1px solid ${styles.border}` }}>
                  <FileUploadButton
                    label="Profile Portrait (Hero & Sidebar)"
                    currentValue={content.profile.photo}
                    onUpload={(url) => setContent({ ...content, profile: { ...content.profile, photo: url } })}
                    accept="image/*"
                    fileType="image"
                    buttonText="Upload Portrait"
                  />
                </div>

                <div style={{ backgroundColor: styles.cardInner, padding: '14px', borderRadius: '10px', border: `1px solid ${styles.border}` }}>
                  <FileUploadButton
                    label="Resume / CV Document (PDF)"
                    currentValue={content.profile.resumeUrl}
                    onUpload={(url) => setContent({ ...content, profile: { ...content.profile, resumeUrl: url } })}
                    accept=".pdf,.doc,.docx"
                    fileType="file"
                    buttonText="Upload PDF"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    type="text"
                    value={content.profile.name}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, name: e.target.value } })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Tagline / Sub-Title</label>
                  <input
                    type="text"
                    value={content.profile.tagline}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, tagline: e.target.value } })}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            {/* Box 2: Direct Contact Channels */}
            <div style={cardStyle}>
              {renderSectionHeader('COMMUNICATION', 'Contact & Location Channels', 'Direct reach channels displayed on hero and contact cards')}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={labelStyle}>Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={content.profile.phone}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, phone: e.target.value } })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    value={content.profile.email}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, email: e.target.value } })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Telegram Handle (@username)</label>
                  <input
                    type="text"
                    placeholder="@chamnabmey"
                    value={content.profile.telegramUser}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, telegramUser: e.target.value } })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Base Location</label>
                  <input
                    type="text"
                    value={content.profile.location}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, location: e.target.value } })}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            {/* Box 3: Social Profiles & Footprint */}
            <div style={cardStyle}>
              {renderSectionHeader('NETWORKS', 'Social Profiles & Public Footprint', 'Direct URLs for social icons in sidebar, hero and footer')}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>Telegram Direct Link (t.me/...)</label>
                  <input
                    type="text"
                    value={content.profile.telegram}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, telegram: e.target.value } })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>LinkedIn Profile URL</label>
                  <input
                    type="text"
                    value={content.profile.linkedin}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, linkedin: e.target.value } })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Facebook Page / Profile URL</label>
                  <input
                    type="text"
                    value={content.profile.facebook}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, facebook: e.target.value } })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Executive Bio (Sidebar & Footer)</label>
                <textarea
                  rows={3}
                  value={content.profile.sidebarBio}
                  onChange={(e) => setContent({
                    ...content,
                    profile: { ...content.profile, sidebarBio: e.target.value },
                    footer: { ...content.footer, bio: e.target.value },
                  })}
                  style={{ ...inputStyle, lineHeight: 1.5 }}
                />
              </div>
            </div>

            {/* Box 4: Footer Pitch */}
            <div style={cardStyle}>
              {renderSectionHeader('FOOTER', 'Footer Pitch & Newsletter', 'Content for the bottom call-to-action area')}
              <div>
                <label style={labelStyle}>Newsletter / CTA Pitch Line</label>
                <input
                  type="text"
                  value={content.footer.newsletterPitch}
                  onChange={(e) => setContent({ ...content, footer: { ...content.footer, newsletterPitch: e.target.value } })}
                  style={inputStyle}
                />
              </div>
            </div>

            {renderActionBar('Save Profile Data')}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: HERO & STORY */}
        {/* ========================================================= */}
        {activeTab === 'hero_about' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Box 1: Hero Banner */}
            <div style={cardStyle}>
              {renderSectionHeader('HEADLINE', 'Hero Banner & Dynamic Rotating Roles', 'Controls the primary greeting, titles and animated role cycler')}
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>Greeting Kicker</label>
                  <input
                    type="text"
                    value={content.hero.greeting}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, greeting: e.target.value } })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Title Prefix (Static text before rotating roles)</label>
                  <input
                    type="text"
                    value={content.hero.titlePrefix}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, titlePrefix: e.target.value } })}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Rotating Roles Chip Editor */}
              <div style={{ marginBottom: '14px' }}>
                <label style={labelStyle}>Rotating Roles (Animated Typed Headings)</label>
                
                {/* Live chips list */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                  {content.hero.rotatingRoles.map((role, rIdx) => (
                    <span
                      key={rIdx}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '5px 10px',
                        borderRadius: '6px',
                        backgroundColor: styles.cardInner,
                        border: `1px solid ${styles.blue}`,
                        color: styles.cyan,
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      {role}
                      <button
                        type="button"
                        onClick={() => handleRemoveRole(rIdx)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: styles.danger,
                          cursor: 'pointer',
                          padding: 0,
                          fontSize: '12px',
                          lineHeight: 1,
                        }}
                        title="Remove role"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>

                {/* Add new role chip */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    placeholder="Type new role (e.g. CRO Specialist) and press Add..."
                    value={newRoleInput}
                    onChange={(e) => setNewRoleInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddRole();
                      }
                    }}
                    style={{ ...inputStyle, flex: 1 }}
                  />
                  <button
                    type="button"
                    onClick={handleAddRole}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      backgroundColor: styles.cardInner,
                      border: `1px solid ${styles.blue}`,
                      color: styles.cyan,
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    + Add Role
                  </button>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Hero Introduction Narrative</label>
                <textarea
                  rows={3}
                  value={content.hero.description}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, description: e.target.value } })}
                  style={{ ...inputStyle, lineHeight: 1.5 }}
                />
              </div>
            </div>

            {/* Box 2: High-Impact Statement */}
            <div style={cardStyle}>
              {renderSectionHeader('STATEMENT', 'High-Impact Philosophy Statement', 'Full-width banner quotation highlighting your strategic philosophy')}
              <textarea
                rows={3}
                value={content.statement}
                onChange={(e) => setContent({ ...content, statement: e.target.value })}
                style={{ ...inputStyle, lineHeight: 1.5 }}
              />
            </div>

            {/* Box 3: About Me Stats & Narrative */}
            <div style={cardStyle}>
              {renderSectionHeader('BIOGRAPHY', 'About Me Stats & Story', 'Quantifiable performance metrics and origin story')}
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={labelStyle}>Years Experience (Numeric)</label>
                  <input
                    type="number"
                    value={content.about.yearsExperience}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, yearsExperience: parseInt(e.target.value) || 0 } })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Ad Spend / Volume Managed</label>
                  <input
                    type="text"
                    value={content.about.adSpendManaged}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, adSpendManaged: e.target.value } })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>About Headline Title</label>
                  <input
                    type="text"
                    value={content.about.title}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, title: e.target.value } })}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>About Story Narrative</label>
                <textarea
                  rows={3}
                  value={content.about.description}
                  onChange={(e) => setContent({ ...content, about: { ...content.about, description: e.target.value } })}
                  style={{ ...inputStyle, lineHeight: 1.5 }}
                />
              </div>

              {/* Feature Cards in About */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                <div style={{ backgroundColor: styles.cardInner, border: `1px solid ${styles.border}`, borderRadius: '8px', padding: '12px' }}>
                  <label style={labelStyle}>Feature Highlight 1 Title</label>
                  <input
                    type="text"
                    value={content.about.card1Title}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card1Title: e.target.value } })}
                    style={{ ...inputStyle, marginBottom: '8px' }}
                  />
                  <label style={labelStyle}>Feature Highlight 1 Description</label>
                  <input
                    type="text"
                    value={content.about.card1Desc}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card1Desc: e.target.value } })}
                    style={inputStyle}
                  />
                </div>

                <div style={{ backgroundColor: styles.cardInner, border: `1px solid ${styles.border}`, borderRadius: '8px', padding: '12px' }}>
                  <label style={labelStyle}>Feature Highlight 2 Title</label>
                  <input
                    type="text"
                    value={content.about.card2Title}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card2Title: e.target.value } })}
                    style={{ ...inputStyle, marginBottom: '8px' }}
                  />
                  <label style={labelStyle}>Feature Highlight 2 Description</label>
                  <input
                    type="text"
                    value={content.about.card2Desc}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card2Desc: e.target.value } })}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            {renderActionBar('Save Hero & Story Content')}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: PROJECTS */}
        {/* ========================================================= */}
        {activeTab === 'projects' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: styles.cyan, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: styles.fontHeading }}>
                  CASE STUDIES
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: styles.textPrimary, margin: 0, fontFamily: styles.fontHeading }}>
                  Featured Projects ({content.projects.length})
                </h3>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newProj: ProjectItem = {
                    id: 'proj-' + Date.now(),
                    title: 'New Client Growth Campaign',
                    category: 'meta',
                    tags: ['Meta Ads', 'Scale'],
                    description: 'Full-funnel campaign strategy and measurable commercial ROI.',
                    metrics: '+100% Leads | 3.5x ROAS',
                    image: '/assets/images/latest-portfolio/portfoli-img-1.jpg',
                    link: '#contacts',
                  };
                  setContent({ ...content, projects: [newProj, ...content.projects] });
                  showToast('Added new project draft');
                }}
                style={{
                  padding: '7px 16px',
                  borderRadius: '8px',
                  background: styles.gradient,
                  color: '#010A10',
                  border: 'none',
                  fontSize: '11px',
                  fontWeight: 800,
                  fontFamily: styles.fontHeading,
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 0 12px rgba(19, 253, 253, 0.25)',
                }}
              >
                + Add Project
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {content.projects.map((proj, idx) => (
                <div
                  key={proj.id || idx}
                  style={{
                    backgroundColor: styles.card,
                    border: `1px solid ${styles.border}`,
                    borderRadius: '10px',
                    padding: '14px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                    
                    {/* Cover Image Upload */}
                    <div style={{ width: '150px', flexShrink: 0 }}>
                      <FileUploadButton
                        currentValue={proj.image}
                        onUpload={(url) => {
                          const updated = [...content.projects];
                          updated[idx].image = url;
                          setContent({ ...content, projects: updated });
                        }}
                        accept="image/*"
                        fileType="image"
                        buttonText="Cover Image"
                      />
                    </div>

                    {/* Title, Category, Metrics */}
                    <div style={{ flex: 1, minWidth: '320px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '10px' }}>
                      <div>
                        <label style={labelStyle}>Project Title</label>
                        <input
                          type="text"
                          placeholder="Project Title"
                          value={proj.title}
                          onChange={(e) => {
                            const updated = [...content.projects];
                            updated[idx].title = e.target.value;
                            setContent({ ...content, projects: updated });
                          }}
                          style={{ ...inputStyle, fontWeight: 700 }}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Category</label>
                        <select
                          value={proj.category}
                          onChange={(e) => {
                            const updated = [...content.projects];
                            updated[idx].category = e.target.value as any;
                            setContent({ ...content, projects: updated });
                          }}
                          style={{ ...inputStyle, cursor: 'pointer' }}
                        >
                          <option value="meta">Meta Ads</option>
                          <option value="tracking">Tracking / CAPI</option>
                          <option value="cro">Sales Funnels / CRO</option>
                          <option value="ecommerce">E-Commerce</option>
                        </select>
                      </div>

                      <div>
                        <label style={labelStyle}>Performance Metric</label>
                        <input
                          type="text"
                          placeholder="+140% ROAS"
                          value={proj.metrics}
                          onChange={(e) => {
                            const updated = [...content.projects];
                            updated[idx].metrics = e.target.value;
                            setContent({ ...content, projects: updated });
                          }}
                          style={{ ...inputStyle, color: styles.cyan, fontWeight: 700 }}
                        />
                      </div>
                    </div>

                    {/* Delete button */}
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Delete project "${proj.title}"?`)) {
                          const updated = content.projects.filter((_, pIdx) => pIdx !== idx);
                          setContent({ ...content, projects: updated });
                          showToast('Project deleted');
                        }
                      }}
                      title="Delete Project"
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '6px',
                        color: styles.danger,
                        cursor: 'pointer',
                        fontSize: '13px',
                        padding: '6px 10px',
                      }}
                    >
                      🗑️
                    </button>
                  </div>

                  {/* Description & Tags */}
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px' }}>
                    <div>
                      <label style={labelStyle}>Short Strategy & Results Summary</label>
                      <input
                        type="text"
                        placeholder="Strategy, execution and verifiable client impact..."
                        value={proj.description}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[idx].description = e.target.value;
                          setContent({ ...content, projects: updated });
                        }}
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Tags (comma-separated)</label>
                      <input
                        type="text"
                        placeholder="Meta Ads, CAPI, ROAS"
                        value={proj.tags.join(', ')}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[idx].tags = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                          setContent({ ...content, projects: updated });
                        }}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {renderActionBar('Save Projects Data')}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: SERVICES & SKILLS */}
        {/* ========================================================= */}
        {activeTab === 'services' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Core Services */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: styles.cyan, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: styles.fontHeading }}>
                    SOLUTIONS
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: styles.textPrimary, margin: 0, fontFamily: styles.fontHeading }}>
                    Core Services ({content.services.length})
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const newServ: ServiceItem = {
                      id: 'serv-' + Date.now(),
                      title: 'New Performance Service',
                      description: 'Comprehensive digital execution delivering measurable ROI.',
                      score: 95,
                      icon: 'flaticon-consulting',
                    };
                    setContent({ ...content, services: [...content.services, newServ] });
                    showToast('Added service card');
                  }}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '6px',
                    backgroundColor: styles.cardInner,
                    border: `1px solid ${styles.blue}`,
                    color: styles.cyan,
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  + Add Service
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
                {content.services.map((serv, idx) => (
                  <div key={serv.id || idx} style={{ backgroundColor: styles.cardInner, border: `1px solid ${styles.border}`, borderRadius: '10px', padding: '14px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                      <input
                        type="text"
                        placeholder="Service Title"
                        value={serv.title}
                        onChange={(e) => {
                          const updated = [...content.services];
                          updated[idx].title = e.target.value;
                          setContent({ ...content, services: updated });
                        }}
                        style={{ ...inputStyle, flex: 1, fontWeight: 700 }}
                      />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: styles.card, border: `1px solid ${styles.border}`, borderRadius: '6px', padding: '2px 8px' }}>
                        <span style={{ fontSize: '10px', color: styles.textMuted }}>Score:</span>
                        <input
                          type="number"
                          min="50"
                          max="100"
                          value={serv.score}
                          onChange={(e) => {
                            const updated = [...content.services];
                            updated[idx].score = parseInt(e.target.value) || 0;
                            setContent({ ...content, services: updated });
                          }}
                          style={{ width: '40px', background: 'none', border: 'none', color: styles.cyan, fontSize: '12px', fontWeight: 800, textAlign: 'center', outline: 'none' }}
                        />
                        <span style={{ fontSize: '10px', color: styles.cyan }}>%</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = content.services.filter((_, i) => i !== idx);
                          setContent({ ...content, services: updated });
                        }}
                        style={{ background: 'transparent', border: 'none', color: styles.danger, cursor: 'pointer', fontSize: '13px' }}
                        title="Delete Service"
                      >
                        🗑️
                      </button>
                    </div>
                    <textarea
                      rows={2}
                      placeholder="Service details and client deliverable..."
                      value={serv.description}
                      onChange={(e) => {
                        const updated = [...content.services];
                        updated[idx].description = e.target.value;
                        setContent({ ...content, services: updated });
                      }}
                      style={{ ...inputStyle, lineHeight: 1.4, fontSize: '12px' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Paid Media Skills */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: styles.cyan, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: styles.fontHeading }}>
                    PAID ACQUISITION
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: styles.textPrimary, margin: 0, fontFamily: styles.fontHeading }}>
                    Paid Media & Performance Skills ({content.skills.paidMedia.length})
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const newSkill: SkillItem = { name: 'NEW CAMPAIGN SKILL', percentage: 90 };
                    setContent({ ...content, skills: { ...content.skills, paidMedia: [...content.skills.paidMedia, newSkill] } });
                    showToast('Added skill');
                  }}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '6px',
                    backgroundColor: styles.cardInner,
                    border: `1px solid ${styles.blue}`,
                    color: styles.cyan,
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  + Add Skill
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                {content.skills.paidMedia.map((skill, idx) => (
                  <div key={idx} style={{ backgroundColor: styles.cardInner, border: `1px solid ${styles.border}`, borderRadius: '8px', padding: '10px 12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => {
                          const updated = [...content.skills.paidMedia];
                          updated[idx].name = e.target.value;
                          setContent({ ...content, skills: { ...content.skills, paidMedia: updated } });
                        }}
                        style={{ ...inputStyle, flex: 1, padding: '4px 8px', fontSize: '11px', fontWeight: 700 }}
                      />
                      <span style={{ color: styles.cyan, fontWeight: 800, fontSize: '12px' }}>{skill.percentage}%</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = content.skills.paidMedia.filter((_, i) => i !== idx);
                          setContent({ ...content, skills: { ...content.skills, paidMedia: updated } });
                        }}
                        style={{ background: 'transparent', border: 'none', color: styles.danger, cursor: 'pointer', fontSize: '11px' }}
                        title="Delete Skill"
                      >
                        ✕
                      </button>
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
                      style={{ width: '100%', accentColor: styles.blue, cursor: 'pointer', height: '4px' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tracking & CRO Skills */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: styles.cyan, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: styles.fontHeading }}>
                    TECHNICAL ARCHITECTURE
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: styles.textPrimary, margin: 0, fontFamily: styles.fontHeading }}>
                    Tracking, CAPI, CRO & Tech Skills ({(content.skills.tracking || []).length})
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const newSkill: SkillItem = { name: 'NEW TRACKING SKILL', percentage: 90 };
                    setContent({ ...content, skills: { ...content.skills, tracking: [...(content.skills.tracking || []), newSkill] } });
                    showToast('Added skill');
                  }}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '6px',
                    backgroundColor: styles.cardInner,
                    border: `1px solid ${styles.blue}`,
                    color: styles.cyan,
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  + Add Skill
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                {(content.skills.tracking || []).map((skill, idx) => (
                  <div key={idx} style={{ backgroundColor: styles.cardInner, border: `1px solid ${styles.border}`, borderRadius: '8px', padding: '10px 12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => {
                          const updated = [...(content.skills.tracking || [])];
                          updated[idx].name = e.target.value;
                          setContent({ ...content, skills: { ...content.skills, tracking: updated } });
                        }}
                        style={{ ...inputStyle, flex: 1, padding: '4px 8px', fontSize: '11px', fontWeight: 700 }}
                      />
                      <span style={{ color: styles.cyan, fontWeight: 800, fontSize: '12px' }}>{skill.percentage}%</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = (content.skills.tracking || []).filter((_, i) => i !== idx);
                          setContent({ ...content, skills: { ...content.skills, tracking: updated } });
                        }}
                        style={{ background: 'transparent', border: 'none', color: styles.danger, cursor: 'pointer', fontSize: '11px' }}
                        title="Delete Skill"
                      >
                        ✕
                      </button>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={100}
                      value={skill.percentage}
                      onChange={(e) => {
                        const updated = [...(content.skills.tracking || [])];
                        updated[idx].percentage = parseInt(e.target.value);
                        setContent({ ...content, skills: { ...content.skills, tracking: updated } });
                      }}
                      style={{ width: '100%', accentColor: styles.blue, cursor: 'pointer', height: '4px' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {renderActionBar('Save Services & Skills')}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: TESTIMONIALS */}
        {/* ========================================================= */}
        {activeTab === 'testimonials' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: styles.cyan, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: styles.fontHeading }}>
                  SOCIAL PROOF
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: styles.textPrimary, margin: 0, fontFamily: styles.fontHeading }}>
                  Client Reviews ({content.testimonials?.length || 0})
                </h3>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newTest: TestimonialItem = {
                    id: 'test-' + Date.now(),
                    name: 'Client Name',
                    role: 'Managing Director, Brand',
                    quote: 'Chamnab delivered outstanding results, dramatically reducing our customer acquisition costs.',
                    stars: 5,
                    avatar: '/assets/images/testimonial/client-img-1.jpg',
                  };
                  setContent({ ...content, testimonials: [...(content.testimonials || []), newTest] });
                  showToast('Added testimonial draft');
                }}
                style={{
                  padding: '7px 16px',
                  borderRadius: '8px',
                  background: styles.gradient,
                  color: '#010A10',
                  border: 'none',
                  fontSize: '11px',
                  fontWeight: 800,
                  fontFamily: styles.fontHeading,
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 0 12px rgba(19, 253, 253, 0.25)',
                }}
              >
                + Add Review
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(content.testimonials || []).map((test, idx) => (
                <div
                  key={test.id || idx}
                  style={{
                    backgroundColor: styles.card,
                    border: `1px solid ${styles.border}`,
                    borderRadius: '10px',
                    padding: '14px 16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                    
                    {/* Avatar Upload */}
                    <div style={{ width: '140px', flexShrink: 0 }}>
                      <FileUploadButton
                        currentValue={test.avatar}
                        onUpload={(url) => {
                          const updated = [...content.testimonials];
                          updated[idx].avatar = url;
                          setContent({ ...content, testimonials: updated });
                        }}
                        accept="image/*"
                        fileType="image"
                        buttonText="Avatar"
                      />
                    </div>

                    {/* Name, Role, Interactive Star Rating */}
                    <div style={{ flex: 1, minWidth: '300px', display: 'grid', gridTemplateColumns: '1fr 1fr 120px', gap: '10px', alignItems: 'center' }}>
                      <div>
                        <label style={labelStyle}>Client Name</label>
                        <input
                          type="text"
                          placeholder="Client Name"
                          value={test.name}
                          onChange={(e) => {
                            const updated = [...content.testimonials];
                            updated[idx].name = e.target.value;
                            setContent({ ...content, testimonials: updated });
                          }}
                          style={{ ...inputStyle, fontWeight: 700 }}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Role / Company</label>
                        <input
                          type="text"
                          placeholder="Role, Company"
                          value={test.role}
                          onChange={(e) => {
                            const updated = [...content.testimonials];
                            updated[idx].role = e.target.value;
                            setContent({ ...content, testimonials: updated });
                          }}
                          style={inputStyle}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Star Rating ({test.stars}★)</label>
                        <div style={{ display: 'flex', gap: '4px', paddingTop: '4px' }}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => {
                                const updated = [...content.testimonials];
                                updated[idx].stars = star;
                                setContent({ ...content, testimonials: updated });
                              }}
                              style={{
                                background: 'none',
                                border: 'none',
                                color: star <= test.stars ? '#F59E0B' : styles.border,
                                fontSize: '18px',
                                cursor: 'pointer',
                                padding: 0,
                                lineHeight: 1,
                              }}
                              title={`${star} Stars`}
                            >
                              ★
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Delete button */}
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Delete review from "${test.name}"?`)) {
                          const updated = content.testimonials.filter((_, i) => i !== idx);
                          setContent({ ...content, testimonials: updated });
                          showToast('Review deleted');
                        }
                      }}
                      title="Delete Review"
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '6px',
                        color: styles.danger,
                        cursor: 'pointer',
                        fontSize: '13px',
                        padding: '6px 10px',
                      }}
                    >
                      🗑️
                    </button>
                  </div>

                  <div>
                    <label style={labelStyle}>Client Testimonial Quote</label>
                    <textarea
                      rows={2}
                      placeholder="Quote detailing campaign performance, communication, and commercial growth..."
                      value={test.quote}
                      onChange={(e) => {
                        const updated = [...content.testimonials];
                        updated[idx].quote = e.target.value;
                        setContent({ ...content, testimonials: updated });
                      }}
                      style={{ ...inputStyle, lineHeight: 1.4 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {renderActionBar('Save Testimonials Data')}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 6: BLOG ARTICLES (NEW) */}
        {/* ========================================================= */}
        {activeTab === 'blog' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: styles.cyan, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: styles.fontHeading }}>
                  THOUGHT LEADERSHIP
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: styles.textPrimary, margin: 0, fontFamily: styles.fontHeading }}>
                  Articles & Insights ({content.blog?.length || 0})
                </h3>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newPost: BlogItem = {
                    id: 'blog-' + Date.now(),
                    title: 'New Performance Marketing Playbook',
                    author: content.profile.name || 'Chamnab Mey',
                    date: 'March 2026',
                    comments: '05',
                    image: '/assets/images/blog/blog-img-6.jpg',
                    summary: 'Executive breakdown of modern paid acquisition strategies and conversion optimization.',
                    content: 'Detailed deep-dive into digital advertising algorithms, creative strategy, and revenue attribution.',
                  };
                  setContent({ ...content, blog: [newPost, ...(content.blog || [])] });
                  showToast('Added new article draft');
                }}
                style={{
                  padding: '7px 16px',
                  borderRadius: '8px',
                  background: styles.gradient,
                  color: '#010A10',
                  border: 'none',
                  fontSize: '11px',
                  fontWeight: 800,
                  fontFamily: styles.fontHeading,
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  boxShadow: '0 0 12px rgba(19, 253, 253, 0.25)',
                }}
              >
                + Add Article
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {(content.blog || []).map((post, idx) => (
                <div
                  key={post.id || idx}
                  style={{
                    backgroundColor: styles.card,
                    border: `1px solid ${styles.border}`,
                    borderRadius: '10px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                    
                    {/* Cover Thumbnail */}
                    <div style={{ width: '150px', flexShrink: 0 }}>
                      <FileUploadButton
                        currentValue={post.image}
                        onUpload={(url) => {
                          const updated = [...(content.blog || [])];
                          updated[idx].image = url;
                          setContent({ ...content, blog: updated });
                        }}
                        accept="image/*"
                        fileType="image"
                        buttonText="Cover Image"
                      />
                    </div>

                    {/* Title, Author, Date, Comments */}
                    <div style={{ flex: 1, minWidth: '320px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 80px', gap: '10px' }}>
                      <div>
                        <label style={labelStyle}>Article Title</label>
                        <input
                          type="text"
                          placeholder="Article Title"
                          value={post.title}
                          onChange={(e) => {
                            const updated = [...(content.blog || [])];
                            updated[idx].title = e.target.value;
                            setContent({ ...content, blog: updated });
                          }}
                          style={{ ...inputStyle, fontWeight: 700 }}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Author</label>
                        <input
                          type="text"
                          placeholder="Author Name"
                          value={post.author}
                          onChange={(e) => {
                            const updated = [...(content.blog || [])];
                            updated[idx].author = e.target.value;
                            setContent({ ...content, blog: updated });
                          }}
                          style={inputStyle}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Publish Date</label>
                        <input
                          type="text"
                          placeholder="March 2026"
                          value={post.date}
                          onChange={(e) => {
                            const updated = [...(content.blog || [])];
                            updated[idx].date = e.target.value;
                            setContent({ ...content, blog: updated });
                          }}
                          style={inputStyle}
                        />
                      </div>

                      <div>
                        <label style={labelStyle}>Comments</label>
                        <input
                          type="text"
                          placeholder="05"
                          value={post.comments}
                          onChange={(e) => {
                            const updated = [...(content.blog || [])];
                            updated[idx].comments = e.target.value;
                            setContent({ ...content, blog: updated });
                          }}
                          style={{ ...inputStyle, textAlign: 'center' }}
                        />
                      </div>
                    </div>

                    {/* Delete button */}
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Delete article "${post.title}"?`)) {
                          const updated = (content.blog || []).filter((_, i) => i !== idx);
                          setContent({ ...content, blog: updated });
                          showToast('Article deleted');
                        }
                      }}
                      title="Delete Article"
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '6px',
                        color: styles.danger,
                        cursor: 'pointer',
                        fontSize: '13px',
                        padding: '6px 10px',
                      }}
                    >
                      🗑️
                    </button>
                  </div>

                  <div>
                    <label style={labelStyle}>Executive Summary (Card Preview Text)</label>
                    <textarea
                      rows={2}
                      placeholder="Brief teaser displayed on the homepage blog card..."
                      value={post.summary}
                      onChange={(e) => {
                        const updated = [...(content.blog || [])];
                        updated[idx].summary = e.target.value;
                        setContent({ ...content, blog: updated });
                      }}
                      style={{ ...inputStyle, lineHeight: 1.4 }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Full Article Body / Content</label>
                    <textarea
                      rows={3}
                      placeholder="In-depth article narrative and methodology..."
                      value={post.content}
                      onChange={(e) => {
                        const updated = [...(content.blog || [])];
                        updated[idx].content = e.target.value;
                        setContent({ ...content, blog: updated });
                      }}
                      style={{ ...inputStyle, lineHeight: 1.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {renderActionBar('Save Blog Articles')}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 7: INBOX */}
        {/* ========================================================= */}
        {activeTab === 'inbox' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: styles.cyan, textTransform: 'uppercase', letterSpacing: '1px', fontFamily: styles.fontHeading }}>
                  COMMUNICATIONS
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: styles.textPrimary, margin: 0, fontFamily: styles.fontHeading }}>
                  Client Inquiries & Briefs ({inbox.length})
                </h3>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="text"
                  placeholder="Filter messages..."
                  value={inboxFilter}
                  onChange={(e) => setInboxFilter(e.target.value)}
                  style={{ ...inputStyle, width: '180px', padding: '5px 10px', fontSize: '11px' }}
                />
                <button
                  type="button"
                  onClick={loadData}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    backgroundColor: styles.cardInner,
                    border: `1px solid ${styles.border}`,
                    color: styles.textMuted,
                    fontSize: '11px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  🔄 Refresh
                </button>
              </div>
            </div>

            {(() => {
              const filtered = inbox.filter(msg => {
                if (!inboxFilter) return true;
                const q = inboxFilter.toLowerCase();
                return (
                  msg.name?.toLowerCase().includes(q) ||
                  msg.email?.toLowerCase().includes(q) ||
                  msg.message?.toLowerCase().includes(q)
                );
              });

              if (filtered.length === 0) {
                return (
                  <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: styles.card, borderRadius: '12px', border: `1px dashed ${styles.border}`, color: styles.textMuted }}>
                    <div style={{ fontSize: '28px', marginBottom: '10px' }}>📬</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: styles.textPrimary, marginBottom: '4px' }}>No messages found</div>
                    <div style={{ fontSize: '12px', color: styles.textDim }}>Incoming contact form submissions will appear here in real-time.</div>
                  </div>
                );
              }

              return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {filtered.map((msg) => (
                    <div
                      key={msg.id}
                      style={{
                        backgroundColor: styles.card,
                        border: `1px solid ${styles.border}`,
                        borderRadius: '10px',
                        padding: '16px 18px',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2px' }}>
                            <span style={{ fontSize: '14px', fontWeight: 800, color: styles.textPrimary, fontFamily: styles.fontHeading }}>
                              {msg.name || 'Anonymous Visitor'}
                            </span>
                            {msg.source && (
                              <span style={{ fontSize: '9px', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', backgroundColor: styles.cardInner, color: styles.cyan, border: `1px solid ${styles.border}` }}>
                                {msg.source}
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: '11px', color: styles.textMuted }}>
                            <span>{msg.email}</span>
                            {msg.phone && <span style={{ marginLeft: '8px' }}>• {msg.phone}</span>}
                          </div>
                        </div>

                        <span style={{ fontSize: '11px', color: styles.textDim }}>
                          {new Date(msg.createdAt).toLocaleString()}
                        </span>
                      </div>

                      <div style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: 1.5, marginBottom: '14px', whiteSpace: 'pre-wrap', backgroundColor: styles.cardInner, padding: '12px 14px', borderRadius: '8px', border: `1px solid ${styles.border}` }}>
                        {msg.message}
                      </div>

                      {/* Quick Actions & Attachments */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        {msg.attachmentUrl && (
                          <a
                            href={msg.attachmentUrl}
                            download={msg.attachmentName || 'attachment'}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '5px 10px',
                              backgroundColor: styles.cardInner,
                              border: `1px solid ${styles.blue}`,
                              borderRadius: '6px',
                              color: styles.cyan,
                              fontSize: '11px',
                              fontWeight: 600,
                              textDecoration: 'none',
                            }}
                          >
                            📎 {msg.attachmentName || 'Download Attachment'}
                          </a>
                        )}

                        {msg.email && (
                          <a
                            href={`mailto:${msg.email}?subject=Re: Your Inquiry on chamnabmey.com`}
                            style={{
                              padding: '5px 12px',
                              backgroundColor: styles.cardInner,
                              border: `1px solid ${styles.border}`,
                              borderRadius: '6px',
                              color: styles.textPrimary,
                              fontSize: '11px',
                              fontWeight: 600,
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            ✉️ Reply Email
                          </a>
                        )}

                        {msg.phone && (
                          <a
                            href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              padding: '5px 12px',
                              backgroundColor: 'rgba(16, 185, 129, 0.12)',
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                              borderRadius: '6px',
                              color: '#34D399',
                              fontSize: '11px',
                              fontWeight: 700,
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            💬 WhatsApp
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => handleDeleteMessage(msg.id)}
                          style={{
                            marginLeft: 'auto',
                            padding: '5px 12px',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            borderRadius: '6px',
                            color: styles.danger,
                            fontSize: '11px',
                            fontWeight: 600,
                            cursor: 'pointer',
                          }}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        )}

      </main>
    </div>
  );
}
