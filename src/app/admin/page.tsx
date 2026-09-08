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

  // Content
  const [content, setContent] = useState<PortfolioContent>(defaultPortfolioContent);
  const [activeTab, setActiveTab] = useState<'profile' | 'hero_about' | 'projects' | 'services' | 'testimonials' | 'inbox'>('profile');
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Inbox
  const [inbox, setInbox] = useState<InboxMessage[]>([]);

  useEffect(() => {
    checkAuth();
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
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
        setContent({ ...defaultPortfolioContent, ...d });
      }
      if (resI.ok) {
        const d = await resI.json();
        setInbox(d.messages || []);
      }
    } catch (e) {
      console.error(e);
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
        setLoginError(data.error || 'Wrong password');
      }
    } catch {
      setLoginError('Error logging in');
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
        showToast('Saved successfully!');
      } else {
        showToast('Failed to save');
      }
    } catch {
      showToast('Error saving');
    } finally {
      setSaving(false);
    }
  };

  // -------------------------------------------------------------
  // Loading
  // -------------------------------------------------------------
  if (isAuthenticated === null) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#090D12', color: '#94A3B8', fontSize: '13px' }}>
        Loading Control Panel...
      </div>
    );
  }

  // -------------------------------------------------------------
  // Minimal Login
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#090D12', padding: '20px' }}>
        <div style={{ width: '320px', backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '14px', padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: '#F1F5F9', marginBottom: '2px' }}>Chamnab Mey</div>
          <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '18px' }}>Admin Control Center</div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              style={{
                padding: '9px 12px',
                borderRadius: '8px',
                backgroundColor: '#090D12',
                border: '1px solid #1E293B',
                color: '#FFF',
                fontSize: '13px',
                outline: 'none',
              }}
            />
            {loginError && <div style={{ color: '#EF4444', fontSize: '11px' }}>{loginError}</div>}
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '9px',
                borderRadius: '8px',
                backgroundColor: '#139BFD',
                color: '#FFF',
                border: 'none',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              {loading ? '...' : 'Sign In'}
            </button>
          </form>
          <div style={{ fontSize: '11px', color: '#475569', marginTop: '14px', textAlign: 'center' }}>
            Key: <code>chamnab2026!</code>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // Compact Minimalist Admin Dashboard
  // -------------------------------------------------------------
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#090D12', color: '#E2E8F0', fontSize: '12px' }}>
      
      {/* Ultra-Slim Header (Height 46px) */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: '46px',
          backgroundColor: '#0F172A',
          borderBottom: '1px solid #1E293B',
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Branding & Minimal Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontWeight: 800, color: '#F1F5F9', fontSize: '13px' }}>
            <span style={{ color: '#139BFD' }}>CHAMNAB</span> MEY
          </span>

          <div style={{ display: 'flex', gap: '2px', backgroundColor: '#090D12', padding: '2px', borderRadius: '6px', border: '1px solid #1E293B' }}>
            {[
              { id: 'profile', label: '👤 Profile' },
              { id: 'hero_about', label: '🌟 Hero & Story' },
              { id: 'projects', label: `💼 Projects (${content.projects.length})` },
              { id: 'services', label: '⚡ Services & Skills' },
              { id: 'testimonials', label: `💬 Reviews (${content.testimonials?.length || 0})` },
              { id: 'inbox', label: `📬 Inbox ${inbox.length > 0 ? `(${inbox.length})` : ''}` },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id as any)}
                style={{
                  padding: '4px 9px',
                  borderRadius: '4px',
                  backgroundColor: activeTab === t.id ? '#139BFD' : 'transparent',
                  color: activeTab === t.id ? '#FFFFFF' : '#94A3B8',
                  border: 'none',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {toast && (
            <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 600, paddingRight: '8px' }}>
              ✓ {toast}
            </span>
          )}

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '4px 10px',
              borderRadius: '6px',
              backgroundColor: 'transparent',
              border: '1px solid #334155',
              color: '#94A3B8',
              fontSize: '11px',
              textDecoration: 'none',
            }}
          >
            Live Site ↗
          </a>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: '5px 14px',
              borderRadius: '6px',
              backgroundColor: '#139BFD',
              color: '#FFFFFF',
              border: 'none',
              fontSize: '11px',
              fontWeight: 700,
              cursor: saving ? 'not-allowed' : 'pointer',
            }}
          >
            {saving ? 'Saving...' : '💾 Save'}
          </button>

          <button
            type="button"
            onClick={async () => {
              await fetch('/api/admin/logout', { method: 'POST' });
              setIsAuthenticated(false);
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#64748B',
              cursor: 'pointer',
              fontSize: '12px',
              padding: '4px',
            }}
            title="Logout"
          >
            ✕
          </button>
        </div>
      </header>

      {/* Main Content Area: Compact & Space Saving */}
      <main style={{ maxWidth: '1040px', margin: '0 auto', padding: '16px 16px 40px 16px' }}>

        {/* ========================================================= */}
        {/* TAB 1: PROFILE & CONTACT */}
        {/* ========================================================= */}
        {activeTab === 'profile' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Box 1: Visual Identity (Photo, CV, Name, Tagline) */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '10px', padding: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', alignItems: 'flex-start' }}>
                <FileUploadButton
                  label="Profile Photo (Hero & Sidebar)"
                  currentValue={content.profile.photo}
                  onUpload={(url) => setContent({ ...content, profile: { ...content.profile, photo: url } })}
                  accept="image/*"
                  fileType="image"
                  buttonText="Upload Photo"
                />

                <FileUploadButton
                  label="Resume / CV File"
                  currentValue={content.profile.resumeUrl}
                  onUpload={(url) => setContent({ ...content, profile: { ...content.profile, resumeUrl: url } })}
                  accept=".pdf,.doc,.docx"
                  fileType="file"
                  buttonText="Upload PDF"
                />

                <div>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Full Name</span>
                  <input
                    type="text"
                    value={content.profile.name}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, name: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>

                <div>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Tagline</span>
                  <input
                    type="text"
                    value={content.profile.tagline}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, tagline: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>
              </div>
            </div>

            {/* Box 2: Contact Channels (4 fields in 1 compact row) */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase', marginBottom: '8px' }}>
                Contact & Location
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Phone / WhatsApp</span>
                  <input
                    type="text"
                    value={content.profile.phone}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, phone: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Email Address</span>
                  <input
                    type="email"
                    value={content.profile.email}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, email: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Telegram Username</span>
                  <input
                    type="text"
                    placeholder="@chamnabmey"
                    value={content.profile.telegramUser}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, telegramUser: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Location</span>
                  <input
                    type="text"
                    value={content.profile.location}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, location: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>
              </div>
            </div>

            {/* Box 3: Social Links & Bio */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase', marginBottom: '8px' }}>
                Social Channels & Bio
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '10px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Telegram Link</span>
                  <input
                    type="text"
                    value={content.profile.telegram}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, telegram: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>LinkedIn Link</span>
                  <input
                    type="text"
                    value={content.profile.linkedin}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, linkedin: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Facebook Link</span>
                  <input
                    type="text"
                    value={content.profile.facebook}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, facebook: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>
              </div>

              <div>
                <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Sidebar & Footer Bio</span>
                <textarea
                  rows={2}
                  value={content.profile.sidebarBio}
                  onChange={(e) => setContent({
                    ...content,
                    profile: { ...content.profile, sidebarBio: e.target.value },
                    footer: { ...content.footer, bio: e.target.value },
                  })}
                  style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px', lineHeight: 1.4 }}
                />
              </div>
            </div>

            {/* Quick Save */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                style={{
                  padding: '7px 20px',
                  borderRadius: '6px',
                  backgroundColor: '#139BFD',
                  color: '#FFFFFF',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                {saving ? 'Saving...' : '💾 Save Profile'}
              </button>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: HERO & STORY (FRONT-END COPY & STATS) */}
        {/* ========================================================= */}
        {activeTab === 'hero_about' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* Box 1: Hero Banner */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase', marginBottom: '8px' }}>
                Hero Banner Content
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', marginBottom: '10px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Hero Greeting</span>
                  <input
                    type="text"
                    value={content.hero.greeting}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, greeting: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Title Prefix</span>
                  <input
                    type="text"
                    value={content.hero.titlePrefix}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, titlePrefix: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Headline Rotating Roles (comma-separated)</span>
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
                  style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#42AFFD', fontSize: '12px', fontWeight: 600 }}
                />
              </div>

              <div>
                <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Hero Description</span>
                <textarea
                  rows={2}
                  value={content.hero.description}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, description: e.target.value } })}
                  style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px', lineHeight: 1.4 }}
                />
              </div>
            </div>

            {/* Box 2: Statement */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase', marginBottom: '8px' }}>
                High-Impact Statement
              </div>
              <textarea
                rows={2}
                value={content.statement}
                onChange={(e) => setContent({ ...content, statement: e.target.value })}
                style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px', lineHeight: 1.4 }}
              />
            </div>

            {/* Box 3: About Me Section */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase', marginBottom: '8px' }}>
                About Me Stats & Story
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '10px', marginBottom: '10px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Years Experience</span>
                  <input
                    type="number"
                    value={content.about.yearsExperience}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, yearsExperience: parseInt(e.target.value) || 0 } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>Ad Spend / Campaigns</span>
                  <input
                    type="text"
                    value={content.about.adSpendManaged}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, adSpendManaged: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>

                <div>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>About Headline</span>
                  <input
                    type="text"
                    value={content.about.title}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, title: e.target.value } })}
                    style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '3px' }}>About Story Narrative</span>
                <textarea
                  rows={2}
                  value={content.about.description}
                  onChange={(e) => setContent({ ...content, about: { ...content.about, description: e.target.value } })}
                  style={{ width: '100%', padding: '6px 10px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', color: '#FFF', fontSize: '12px', lineHeight: 1.4 }}
                />
              </div>

              {/* Feature Cards in About */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', padding: '8px 10px' }}>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '2px' }}>Feature Card 1 Title</span>
                  <input
                    type="text"
                    value={content.about.card1Title}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card1Title: e.target.value } })}
                    style={{ width: '100%', padding: '4px 8px', backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '4px', color: '#FFF', fontSize: '11px', marginBottom: '4px' }}
                  />
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '2px' }}>Feature Card 1 Description</span>
                  <input
                    type="text"
                    value={content.about.card1Desc}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card1Desc: e.target.value } })}
                    style={{ width: '100%', padding: '4px 8px', backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '4px', color: '#CBD5E1', fontSize: '11px' }}
                  />
                </div>

                <div style={{ backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', padding: '8px 10px' }}>
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '2px' }}>Feature Card 2 Title</span>
                  <input
                    type="text"
                    value={content.about.card2Title}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card2Title: e.target.value } })}
                    style={{ width: '100%', padding: '4px 8px', backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '4px', color: '#FFF', fontSize: '11px', marginBottom: '4px' }}
                  />
                  <span style={{ fontSize: '11px', color: '#94A3B8', display: 'block', marginBottom: '2px' }}>Feature Card 2 Description</span>
                  <input
                    type="text"
                    value={content.about.card2Desc}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card2Desc: e.target.value } })}
                    style={{ width: '100%', padding: '4px 8px', backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '4px', color: '#CBD5E1', fontSize: '11px' }}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                style={{ padding: '7px 20px', borderRadius: '6px', backgroundColor: '#139BFD', color: '#FFF', border: 'none', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
              >
                {saving ? 'Saving...' : '💾 Save Hero & Story'}
              </button>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: PROJECTS (COMPACT ROWS) */}
        {/* ========================================================= */}
        {activeTab === 'projects' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#F1F5F9' }}>
                Portfolio Projects ({content.projects.length})
              </span>

              <button
                type="button"
                onClick={() => {
                  const newProj = {
                    id: 'proj-' + Date.now(),
                    title: 'New Client Growth Campaign',
                    category: 'meta' as const,
                    tags: ['Meta Ads'],
                    description: 'Full-funnel campaign strategy and commercial ROI.',
                    metrics: '+100% Leads | 3.5x ROAS',
                    image: '/assets/images/latest-portfolio/portfoli-img-1.jpg',
                    link: '#contacts',
                  };
                  setContent({ ...content, projects: [newProj, ...content.projects] });
                  showToast('Added new project');
                }}
                style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#139BFD',
                  color: '#FFF',
                  border: 'none',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                + Add Project
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {content.projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  style={{
                    backgroundColor: '#0F172A',
                    border: '1px solid #1E293B',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    
                    {/* Left: Thumbnail & Upload */}
                    <div style={{ width: '140px', flexShrink: 0 }}>
                      <FileUploadButton
                        currentValue={proj.image}
                        onUpload={(url) => {
                          const updated = [...content.projects];
                          updated[idx].image = url;
                          setContent({ ...content, projects: updated });
                        }}
                        accept="image/*"
                        fileType="image"
                        buttonText="Cover"
                      />
                    </div>

                    {/* Middle: Title, Category, Metric */}
                    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '8px' }}>
                      <input
                        type="text"
                        placeholder="Project Title"
                        value={proj.title}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[idx].title = e.target.value;
                          setContent({ ...content, projects: updated });
                        }}
                        style={{ padding: '5px 8px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '5px', color: '#FFF', fontSize: '12px', fontWeight: 600 }}
                      />

                      <select
                        value={proj.category}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[idx].category = e.target.value as any;
                          setContent({ ...content, projects: updated });
                        }}
                        style={{ padding: '5px 8px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '5px', color: '#FFF', fontSize: '11px' }}
                      >
                        <option value="meta">Meta Ads</option>
                        <option value="tracking">Tracking / CAPI</option>
                        <option value="cro">Sales Funnels / CRO</option>
                        <option value="ecommerce">E-Commerce</option>
                      </select>

                      <input
                        type="text"
                        placeholder="Metric (+140% ROAS)"
                        value={proj.metrics}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[idx].metrics = e.target.value;
                          setContent({ ...content, projects: updated });
                        }}
                        style={{ padding: '5px 8px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '5px', color: '#42AFFD', fontSize: '11px' }}
                      />
                    </div>

                    {/* Delete Icon */}
                    <button
                      type="button"
                      onClick={() => {
                        const updated = content.projects.filter(p => p.id !== proj.id);
                        setContent({ ...content, projects: updated });
                      }}
                      title="Delete"
                      style={{ background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer', fontSize: '13px', padding: '4px' }}
                    >
                      🗑️
                    </button>
                  </div>

                  {/* Summary row */}
                  <input
                    type="text"
                    placeholder="Short description of challenge, strategy, and results..."
                    value={proj.description}
                    onChange={(e) => {
                      const updated = [...content.projects];
                      updated[idx].description = e.target.value;
                      setContent({ ...content, projects: updated });
                    }}
                    style={{ width: '100%', padding: '5px 8px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '5px', color: '#94A3B8', fontSize: '11px' }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                style={{ padding: '6px 18px', borderRadius: '6px', backgroundColor: '#139BFD', color: '#FFF', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
              >
                {saving ? 'Saving...' : '💾 Save Projects'}
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: SERVICES & SKILLS (BOTH SLIDERS & SCORES) */}
        {/* ========================================================= */}
        {activeTab === 'services' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* 3 Services in 1 row */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase', marginBottom: '10px' }}>
                Core Services (3 Pillars)
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
                {content.services.map((serv, idx) => (
                  <div key={serv.id} style={{ backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '8px', padding: '10px' }}>
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
                      <input
                        type="text"
                        value={serv.title}
                        onChange={(e) => {
                          const updated = [...content.services];
                          updated[idx].title = e.target.value;
                          setContent({ ...content, services: updated });
                        }}
                        style={{ flex: 1, padding: '4px 8px', backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '4px', color: '#FFF', fontSize: '12px', fontWeight: 600 }}
                      />
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
                        style={{ width: '50px', padding: '4px 6px', backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '4px', color: '#42AFFD', fontSize: '11px', textAlign: 'center' }}
                      />
                    </div>
                    <textarea
                      rows={2}
                      value={serv.description}
                      onChange={(e) => {
                        const updated = [...content.services];
                        updated[idx].description = e.target.value;
                        setContent({ ...content, services: updated });
                      }}
                      style={{ width: '100%', padding: '4px 8px', backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '4px', color: '#94A3B8', fontSize: '11px', lineHeight: 1.3 }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Paid Media Skills */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase', marginBottom: '10px' }}>
                Paid Media & Performance Skills
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                {content.skills.paidMedia.map((skill, idx) => (
                  <div key={skill.name + idx} style={{ backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', padding: '8px 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                      <span style={{ color: '#E2E8F0', fontWeight: 600 }}>{skill.name}</span>
                      <span style={{ color: '#139BFD', fontWeight: 700 }}>{skill.percentage}%</span>
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
                      style={{ width: '100%', accentColor: '#139BFD', cursor: 'pointer', height: '4px' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tracking & CRO Skills */}
            <div style={{ backgroundColor: '#0F172A', border: '1px solid #1E293B', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#42AFFD', textTransform: 'uppercase', marginBottom: '10px' }}>
                Tracking, CRO & Tech Skills
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                {content.skills.tracking && content.skills.tracking.map((skill, idx) => (
                  <div key={skill.name + idx} style={{ backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '6px', padding: '8px 10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '4px' }}>
                      <span style={{ color: '#E2E8F0', fontWeight: 600 }}>{skill.name}</span>
                      <span style={{ color: '#139BFD', fontWeight: 700 }}>{skill.percentage}%</span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={100}
                      value={skill.percentage}
                      onChange={(e) => {
                        const updated = [...content.skills.tracking];
                        updated[idx].percentage = parseInt(e.target.value);
                        setContent({ ...content, skills: { ...content.skills, tracking: updated } });
                      }}
                      style={{ width: '100%', accentColor: '#139BFD', cursor: 'pointer', height: '4px' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                style={{ padding: '6px 18px', borderRadius: '6px', backgroundColor: '#139BFD', color: '#FFF', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
              >
                {saving ? 'Saving...' : '💾 Save Services & Skills'}
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: TESTIMONIALS */}
        {/* ========================================================= */}
        {activeTab === 'testimonials' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#F1F5F9' }}>
                Client Testimonials ({content.testimonials?.length || 0})
              </span>

              <button
                type="button"
                onClick={() => {
                  const newTest = {
                    id: 'test-' + Date.now(),
                    name: 'Client Name',
                    role: 'Managing Director, Brand',
                    quote: 'Chamnab delivered outstanding results on our digital campaigns.',
                    stars: 5,
                    avatar: '/assets/images/testimonial/client-img-1.jpg',
                  };
                  setContent({ ...content, testimonials: [...(content.testimonials || []), newTest] });
                  showToast('Added new testimonial');
                }}
                style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#139BFD',
                  color: '#FFF',
                  border: 'none',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                + Add Review
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {content.testimonials && content.testimonials.map((test, idx) => (
                <div
                  key={test.id || idx}
                  style={{
                    backgroundColor: '#0F172A',
                    border: '1px solid #1E293B',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    <div style={{ width: '130px', flexShrink: 0 }}>
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

                    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 60px', gap: '8px' }}>
                      <input
                        type="text"
                        placeholder="Client Name"
                        value={test.name}
                        onChange={(e) => {
                          const updated = [...content.testimonials];
                          updated[idx].name = e.target.value;
                          setContent({ ...content, testimonials: updated });
                        }}
                        style={{ padding: '5px 8px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '5px', color: '#FFF', fontSize: '12px', fontWeight: 600 }}
                      />

                      <input
                        type="text"
                        placeholder="Role / Company"
                        value={test.role}
                        onChange={(e) => {
                          const updated = [...content.testimonials];
                          updated[idx].role = e.target.value;
                          setContent({ ...content, testimonials: updated });
                        }}
                        style={{ padding: '5px 8px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '5px', color: '#94A3B8', fontSize: '11px' }}
                      />

                      <input
                        type="number"
                        min="1"
                        max="5"
                        placeholder="Stars"
                        value={test.stars}
                        onChange={(e) => {
                          const updated = [...content.testimonials];
                          updated[idx].stars = parseInt(e.target.value) || 5;
                          setContent({ ...content, testimonials: updated });
                        }}
                        style={{ padding: '5px 8px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '5px', color: '#F59E0B', fontSize: '11px', textAlign: 'center' }}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const updated = content.testimonials.filter((_, i) => i !== idx);
                        setContent({ ...content, testimonials: updated });
                      }}
                      title="Delete"
                      style={{ background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer', fontSize: '13px', padding: '4px' }}
                    >
                      🗑️
                    </button>
                  </div>

                  <textarea
                    rows={2}
                    placeholder="Review quote..."
                    value={test.quote}
                    onChange={(e) => {
                      const updated = [...content.testimonials];
                      updated[idx].quote = e.target.value;
                      setContent({ ...content, testimonials: updated });
                    }}
                    style={{ width: '100%', padding: '5px 8px', backgroundColor: '#090D12', border: '1px solid #1E293B', borderRadius: '5px', color: '#CBD5E1', fontSize: '11px', lineHeight: 1.4 }}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                style={{ padding: '6px 18px', borderRadius: '6px', backgroundColor: '#139BFD', color: '#FFF', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}
              >
                {saving ? 'Saving...' : '💾 Save Reviews'}
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 6: INBOX (CLEAN COMPACT LIST) */}
        {/* ========================================================= */}
        {activeTab === 'inbox' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#F1F5F9' }}>
                Client Messages ({inbox.length})
              </span>
              <button
                type="button"
                onClick={loadData}
                style={{ padding: '4px 10px', borderRadius: '6px', backgroundColor: '#0F172A', border: '1px solid #1E293B', color: '#94A3B8', fontSize: '11px', cursor: 'pointer' }}
              >
                🔄 Refresh
              </button>
            </div>

            {inbox.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#0F172A', borderRadius: '8px', border: '1px dashed #1E293B', color: '#64748B' }}>
                No messages yet.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {inbox.map((msg) => (
                  <div
                    key={msg.id}
                    style={{
                      backgroundColor: '#0F172A',
                      border: '1px solid #1E293B',
                      borderRadius: '8px',
                      padding: '12px 14px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <div>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#FFF', marginRight: '10px' }}>
                          {msg.name || 'Visitor'}
                        </span>
                        <span style={{ fontSize: '11px', color: '#64748B' }}>
                          {msg.email} {msg.phone ? `• ${msg.phone}` : ''}
                        </span>
                      </div>
                      <span style={{ fontSize: '10px', color: '#64748B' }}>
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div style={{ fontSize: '12px', color: '#CBD5E1', lineHeight: 1.4, marginBottom: '8px' }}>
                      {msg.message}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {msg.attachmentName && (
                        <a
                          href={msg.attachmentUrl}
                          download={msg.attachmentName}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '3px 8px',
                            backgroundColor: '#090D12',
                            border: '1px solid #1E293B',
                            borderRadius: '4px',
                            color: '#42AFFD',
                            fontSize: '11px',
                            textDecoration: 'none',
                          }}
                        >
                          📎 {msg.attachmentName}
                        </a>
                      )}

                      {msg.email && (
                        <a
                          href={`mailto:${msg.email}`}
                          style={{
                            padding: '3px 8px',
                            backgroundColor: '#1E293B',
                            borderRadius: '4px',
                            color: '#94A3B8',
                            fontSize: '10px',
                            textDecoration: 'none',
                          }}
                        >
                          ✉️ Reply
                        </a>
                      )}

                      {msg.phone && (
                        <a
                          href={`https://wa.me/${msg.phone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: '3px 8px',
                            backgroundColor: '#064E3B',
                            borderRadius: '4px',
                            color: '#34D399',
                            fontSize: '10px',
                            textDecoration: 'none',
                          }}
                        >
                          💬 WhatsApp
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
