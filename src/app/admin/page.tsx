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
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Content state
  const [content, setContent] = useState<PortfolioContent>(defaultPortfolioContent);
  const [activeTab, setActiveTab] = useState<'profile' | 'hero' | 'about' | 'skills' | 'projects' | 'services' | 'testimonials' | 'inbox'>('profile');
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Inbox messages
  const [inbox, setInbox] = useState<InboxMessage[]>([]);
  const [loadingInbox, setLoadingInbox] = useState(false);

  // Check auth on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/admin/check');
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
      if (data.authenticated) {
        loadContent();
        loadInbox();
      }
    } catch (e) {
      setIsAuthenticated(false);
    }
  };

  const loadContent = async () => {
    try {
      const res = await fetch('/api/admin/content');
      if (res.ok) {
        const data = await res.json();
        setContent(data);
      }
    } catch (e) {
      console.error('Failed to load content:', e);
    }
  };

  const loadInbox = async () => {
    setLoadingInbox(true);
    try {
      const res = await fetch('/api/admin/inbox');
      if (res.ok) {
        const data = await res.json();
        setInbox(data.messages || []);
      }
    } catch (e) {
      console.error('Failed to load inbox:', e);
    } finally {
      setLoadingInbox(false);
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
        loadContent();
        loadInbox();
      } else {
        setLoginError(data.error || 'Invalid password');
      }
    } catch (e) {
      setLoginError('An error occurred during login');
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
      console.error('Logout error:', e);
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
      const data = await res.json();
      if (res.ok && data.success) {
        showToast('Changes saved & published successfully!', 'success');
      } else {
        showToast(data.error || 'Failed to save changes', 'error');
      }
    } catch (e) {
      showToast('Network error while saving', 'error');
    } finally {
      setSaving(false);
    }
  };

  if (isAuthenticated === null) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#06131B', color: '#FFF' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>Loading Control Center...</div>
        </div>
      </div>
    );
  }

  // --- LOGIN VIEW ---
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#06131B', color: '#FFF', padding: '20px', fontFamily: "'Poppins', sans-serif" }}>
        <div style={{ maxWidth: '440px', width: '100%', backgroundColor: '#0B1D28', border: '1.5px solid #139BFD33', borderRadius: '24px', padding: '40px 32px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ fontSize: '28px', fontWeight: 800, fontFamily: "'Montserrat', sans-serif" }}>
              <span style={{ background: 'linear-gradient(312deg, #13fdfd 0%, #139bfd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CHAMNAB</span> MEY
            </span>
            <div style={{ color: '#139BFD', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginTop: '6px' }}>Admin Control Center</div>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '8px', fontWeight: 500 }}>Admin Access Key</label>
              <input
                type="password"
                placeholder="Enter password (default: chamnab2026!)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '14px 18px', backgroundColor: '#06131B', border: '1.5px solid #1A365D', borderRadius: '12px', color: '#FFF', fontSize: '14px', outline: 'none' }}
                required
              />
            </div>

            {loginError && (
              <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', border: '1px solid #EF4444', color: '#FCA5A5', padding: '10px 14px', borderRadius: '8px', fontSize: '13px', marginBottom: '20px' }}>
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{ width: '100%', padding: '14px', borderRadius: '12px', backgroundColor: '#139BFD', color: '#FFF', fontWeight: 600, fontSize: '15px', border: 'none', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 20px rgba(19, 155, 253, 0.4)' }}
            >
              {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <a href="/" style={{ color: '#718096', fontSize: '13px', textDecoration: 'none' }}>&larr; Back to Live Portfolio</a>
          </div>
        </div>
      </div>
    );
  }

  // --- DASHBOARD VIEW ---
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#06131B', color: '#FFF', fontFamily: "'Poppins', sans-serif" }}>
      {/* Top Navigation */}
      <header style={{ backgroundColor: '#0B1D28', borderBottom: '1.5px solid #102A3C', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '20px', fontWeight: 800, fontFamily: "'Montserrat', sans-serif" }}>
            <span style={{ background: 'linear-gradient(312deg, #13fdfd 0%, #139bfd 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CHAMNAB</span> MEY
          </span>
          <span style={{ backgroundColor: 'rgba(19, 155, 253, 0.15)', color: '#139BFD', border: '1px solid #139BFD44', padding: '4px 10px', borderRadius: '500px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px' }}>
            ADMIN PORTAL
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '8px', backgroundColor: '#06131B', color: '#A0AEC0', border: '1px solid #1A365D', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}
          >
            <span>Live Site ↗</span>
          </a>
          <button
            onClick={handleLogout}
            style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#F87171', border: '1px solid rgba(239, 68, 68, 0.3)', cursor: 'pointer', fontSize: '13px', fontWeight: 500 }}
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Container with Sidebar Tabs and Content */}
      <div style={{ display: 'flex', minHeight: 'calc(100vh - 70px)' }}>
        {/* Navigation Sidebar */}
        <aside style={{ width: '260px', backgroundColor: '#081722', borderRight: '1.5px solid #102A3C', padding: '24px 16px', flexShrink: 0 }}>
          <div style={{ color: '#4A5568', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', padding: '0 12px 12px' }}>Content Sections</div>

          {[
            { id: 'profile', label: '👤 Profile & Contact' },
            { id: 'hero', label: '⚡ Hero & Intro' },
            { id: 'about', label: '📖 About Me' },
            { id: 'skills', label: '📊 Skills & Stats' },
            { id: 'projects', label: '💼 Portfolio Projects' },
            { id: 'services', label: '🛠️ Expertise Services' },
            { id: 'testimonials', label: '💬 Testimonials' },
            { id: 'inbox', label: `📬 Inquiries Inbox (${inbox.length})` },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '12px 16px',
                borderRadius: '10px',
                marginBottom: '6px',
                fontSize: '13px',
                fontWeight: activeTab === tab.id ? 600 : 500,
                backgroundColor: activeTab === tab.id ? '#139BFD' : 'transparent',
                color: activeTab === tab.id ? '#FFFFFF' : '#A0AEC0',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Tab Content Panel */}
        <main style={{ flex: 1, padding: '36px 48px 120px', maxWidth: '1000px' }}>
          {/* TAB 1: PROFILE & CONTACT */}
          {activeTab === 'profile' && (
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Personal Details & Channels</h2>
              <p style={{ color: '#718096', fontSize: '14px', marginBottom: '28px' }}>Update your primary contact channels, photo URL, and CV link.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Full Name</label>
                  <input
                    type="text"
                    value={content.profile.name}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, name: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Professional Tagline</label>
                  <input
                    type="text"
                    value={content.profile.tagline}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, tagline: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Phone Number</label>
                  <input
                    type="text"
                    value={content.profile.phone}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, phone: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Direct Email</label>
                  <input
                    type="text"
                    value={content.profile.email}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, email: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Telegram Profile URL</label>
                  <input
                    type="text"
                    value={content.profile.telegram}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, telegram: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Location / City</label>
                  <input
                    type="text"
                    value={content.profile.location}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, location: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>LinkedIn URL</label>
                  <input
                    type="text"
                    value={content.profile.linkedin}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, linkedin: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Facebook URL</label>
                  <input
                    type="text"
                    value={content.profile.facebook}
                    onChange={(e) => setContent({ ...content, profile: { ...content.profile, facebook: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <FileUploadButton
                    label="Portrait Profile Photo"
                    currentValue={content.profile.photo}
                    onUpload={(url) => setContent({ ...content, profile: { ...content.profile, photo: url } })}
                    accept="image/*"
                    fileType="image"
                    buttonText="Upload Photo File"
                    helperText="Upload JPG, PNG, or WebP. Automatically updates across sidebar and hero."
                  />
                </div>

                <div>
                  <FileUploadButton
                    label="Resume / CV Document"
                    currentValue={content.profile.resumeUrl}
                    onUpload={(url) => setContent({ ...content, profile: { ...content.profile, resumeUrl: url } })}
                    accept=".pdf,.doc,.docx"
                    fileType="file"
                    buttonText="Upload PDF / Resume"
                    helperText="Upload your latest PDF CV. Visitors will download this file."
                  />
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Sidebar Bio Summary</label>
                <textarea
                  rows={3}
                  value={content.profile.sidebarBio}
                  onChange={(e) => setContent({ ...content, profile: { ...content.profile, sidebarBio: e.target.value } })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                />
              </div>
            </div>
          )}

          {/* TAB 2: HERO & INTRO */}
          {activeTab === 'hero' && (
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Hero Banner & Rotating Titles</h2>
              <p style={{ color: '#718096', fontSize: '14px', marginBottom: '28px' }}>Configure hero greeting, dynamic headline keywords, and value statement.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Greeting Subtitle</label>
                  <input
                    type="text"
                    value={content.hero.greeting}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, greeting: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Title Prefix</label>
                  <input
                    type="text"
                    value={content.hero.titlePrefix}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, titlePrefix: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Rotating Roles (separated by comma)</label>
                <input
                  type="text"
                  value={content.hero.rotatingRoles.join(', ')}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, rotatingRoles: e.target.value.split(',').map(s => s.trim()) } })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Hero Description Paragraph</label>
                <textarea
                  rows={3}
                  value={content.hero.description}
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, description: e.target.value } })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Kinetic Badge Left</label>
                  <input
                    type="text"
                    value={content.hero.badgeLeft}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, badgeLeft: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Kinetic Badge Right</label>
                  <input
                    type="text"
                    value={content.hero.badgeRight}
                    onChange={(e) => setContent({ ...content, hero: { ...content.hero, badgeRight: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Statement Manifesto (Large Banner Text)</label>
                <textarea
                  rows={3}
                  value={content.statement}
                  onChange={(e) => setContent({ ...content, statement: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                />
              </div>
            </div>
          )}

          {/* TAB 3: ABOUT ME */}
          {activeTab === 'about' && (
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>About Me Credentials</h2>
              <p style={{ color: '#718096', fontSize: '14px', marginBottom: '28px' }}>Manage stats counters, strategic bio, and commercial pillars.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Years of Experience (Counter)</label>
                  <input
                    type="number"
                    value={content.about.yearsExperience}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, yearsExperience: parseInt(e.target.value) || 0 } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Ad Spend Managed (Stat)</label>
                  <input
                    type="text"
                    value={content.about.adSpendManaged}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, adSpendManaged: e.target.value } })}
                    style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>Section Main Title</label>
                <input
                  type="text"
                  value={content.about.title}
                  onChange={(e) => setContent({ ...content, about: { ...content.about, title: e.target.value } })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px' }}>About Bio Paragraph</label>
                <textarea
                  rows={4}
                  value={content.about.description}
                  onChange={(e) => setContent({ ...content, about: { ...content.about, description: e.target.value } })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '10px', color: '#FFF' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ padding: '18px', backgroundColor: '#0B1D28', borderRadius: '12px', border: '1px solid #1A365D' }}>
                  <label style={{ display: 'block', fontSize: '13px', color: '#139BFD', marginBottom: '6px', fontWeight: 600 }}>Feature Card 1</label>
                  <input
                    type="text"
                    placeholder="Title"
                    value={content.about.card1Title}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card1Title: e.target.value } })}
                    style={{ width: '100%', padding: '10px 12px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF', marginBottom: '10px' }}
                  />
                  <textarea
                    rows={2}
                    placeholder="Description"
                    value={content.about.card1Desc}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card1Desc: e.target.value } })}
                    style={{ width: '100%', padding: '10px 12px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF' }}
                  />
                </div>

                <div style={{ padding: '18px', backgroundColor: '#0B1D28', borderRadius: '12px', border: '1px solid #1A365D' }}>
                  <label style={{ display: 'block', fontSize: '13px', color: '#139BFD', marginBottom: '6px', fontWeight: 600 }}>Feature Card 2</label>
                  <input
                    type="text"
                    placeholder="Title"
                    value={content.about.card2Title}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card2Title: e.target.value } })}
                    style={{ width: '100%', padding: '10px 12px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF', marginBottom: '10px' }}
                  />
                  <textarea
                    rows={2}
                    placeholder="Description"
                    value={content.about.card2Desc}
                    onChange={(e) => setContent({ ...content, about: { ...content.about, card2Desc: e.target.value } })}
                    style={{ width: '100%', padding: '10px 12px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SKILLS & STATS */}
          {activeTab === 'skills' && (
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Competencies & Percentages</h2>
              <p style={{ color: '#718096', fontSize: '14px', marginBottom: '28px' }}>Adjust proficiency scores for advertising, tracking, and growth platforms.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                {/* Column 1: Paid Media */}
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#139BFD', marginBottom: '16px' }}>Paid Ads & Media Buying</h3>
                  {content.skills.paidMedia.map((skill, idx) => (
                    <div key={idx} style={{ marginBottom: '16px', padding: '14px', backgroundColor: '#0B1D28', borderRadius: '10px', border: '1px solid #1A365D' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => {
                            const updated = [...content.skills.paidMedia];
                            updated[idx].name = e.target.value;
                            setContent({ ...content, skills: { ...content.skills, paidMedia: updated } });
                          }}
                          style={{ backgroundColor: 'transparent', border: 'none', color: '#FFF', fontWeight: 600, fontSize: '13px', width: '80%', outline: 'none' }}
                        />
                        <span style={{ color: '#139BFD', fontWeight: 700, fontSize: '13px' }}>{skill.percentage}%</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="100"
                        value={skill.percentage}
                        onChange={(e) => {
                          const updated = [...content.skills.paidMedia];
                          updated[idx].percentage = parseInt(e.target.value);
                          setContent({ ...content, skills: { ...content.skills, paidMedia: updated } });
                        }}
                        style={{ width: '100%', accentColor: '#139BFD' }}
                      />
                    </div>
                  ))}
                </div>

                {/* Column 2: Tracking & Infrastructure */}
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#139BFD', marginBottom: '16px' }}>Tracking & Growth Infrastructure</h3>
                  {content.skills.tracking.map((skill, idx) => (
                    <div key={idx} style={{ marginBottom: '16px', padding: '14px', backgroundColor: '#0B1D28', borderRadius: '10px', border: '1px solid #1A365D' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => {
                            const updated = [...content.skills.tracking];
                            updated[idx].name = e.target.value;
                            setContent({ ...content, skills: { ...content.skills, tracking: updated } });
                          }}
                          style={{ backgroundColor: 'transparent', border: 'none', color: '#FFF', fontWeight: 600, fontSize: '13px', width: '80%', outline: 'none' }}
                        />
                        <span style={{ color: '#139BFD', fontWeight: 700, fontSize: '13px' }}>{skill.percentage}%</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="100"
                        value={skill.percentage}
                        onChange={(e) => {
                          const updated = [...content.skills.tracking];
                          updated[idx].percentage = parseInt(e.target.value);
                          setContent({ ...content, skills: { ...content.skills, tracking: updated } });
                        }}
                        style={{ width: '100%', accentColor: '#139BFD' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PORTFOLIO PROJECTS */}
          {activeTab === 'projects' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '4px' }}>Commercial Case Studies</h2>
                  <p style={{ color: '#718096', fontSize: '14px' }}>Add, edit, or delete portfolio items displayed in the tabs.</p>
                </div>
                <button
                  onClick={() => {
                    const newProj = {
                      id: 'proj-' + Date.now(),
                      title: 'New Client Growth Campaign',
                      category: 'meta' as const,
                      tags: ['Meta Ads', 'Lead Gen'],
                      description: 'Campaign overview and verified commercial results.',
                      metrics: '+100% ROI | 3.5x ROAS',
                      image: '/assets/images/latest-portfolio/portfoli-img-1.jpg',
                      link: '#contacts'
                    };
                    setContent({ ...content, projects: [newProj, ...content.projects] });
                  }}
                  style={{ padding: '10px 18px', backgroundColor: '#139BFD', color: '#FFF', borderRadius: '8px', border: 'none', fontWeight: 600, cursor: 'pointer' }}
                >
                  + Add New Project
                </button>
              </div>

              {content.projects.map((proj, idx) => (
                <div key={proj.id} style={{ backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div style={{ flex: 1, marginRight: '20px' }}>
                      <label style={{ display: 'block', fontSize: '12px', color: '#A0AEC0', marginBottom: '4px' }}>Project Title</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[idx].title = e.target.value;
                          setContent({ ...content, projects: updated });
                        }}
                        style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF', fontWeight: 600 }}
                      />
                    </div>
                    <button
                      onClick={() => {
                        const updated = content.projects.filter(p => p.id !== proj.id);
                        setContent({ ...content, projects: updated });
                      }}
                      style={{ padding: '8px 14px', backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#F87171', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', marginTop: '20px' }}
                    >
                      Delete
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: '#A0AEC0', marginBottom: '4px' }}>Category Tab</label>
                      <select
                        value={proj.category}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[idx].category = e.target.value as any;
                          setContent({ ...content, projects: updated });
                        }}
                        style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF' }}
                      >
                        <option value="meta">Meta & Paid Ads</option>
                        <option value="tracking">Conversion API & Tracking</option>
                        <option value="cro">Sales Funnels & CRO</option>
                        <option value="ecommerce">E-Commerce Growth</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: '#A0AEC0', marginBottom: '4px' }}>Tags (comma-separated)</label>
                      <input
                        type="text"
                        value={proj.tags.join(', ')}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[idx].tags = e.target.value.split(',').map(s => s.trim());
                          setContent({ ...content, projects: updated });
                        }}
                        style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: '#A0AEC0', marginBottom: '4px' }}>Verified Metrics Badge</label>
                      <input
                        type="text"
                        value={proj.metrics}
                        onChange={(e) => {
                          const updated = [...content.projects];
                          updated[idx].metrics = e.target.value;
                          setContent({ ...content, projects: updated });
                        }}
                        style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF' }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '14px' }}>
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
                      buttonText="Upload Project Image"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#A0AEC0', marginBottom: '4px' }}>Description</label>
                    <textarea
                      rows={2}
                      value={proj.description}
                      onChange={(e) => {
                        const updated = [...content.projects];
                        updated[idx].description = e.target.value;
                        setContent({ ...content, projects: updated });
                      }}
                      style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: SERVICES */}
          {activeTab === 'services' && (
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Expertise Services</h2>
              <p style={{ color: '#718096', fontSize: '14px', marginBottom: '28px' }}>Edit your core commercial service offerings and radial gauge scores.</p>

              {content.services.map((serv, idx) => (
                <div key={serv.id} style={{ backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: '#A0AEC0', marginBottom: '4px' }}>Service Title</label>
                      <input
                        type="text"
                        value={serv.title}
                        onChange={(e) => {
                          const updated = [...content.services];
                          updated[idx].title = e.target.value;
                          setContent({ ...content, services: updated });
                        }}
                        style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF', fontWeight: 600 }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: '#A0AEC0', marginBottom: '4px' }}>Radial Gauge Score (%)</label>
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
                        style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#A0AEC0', marginBottom: '4px' }}>Service Scope Description</label>
                    <textarea
                      rows={2}
                      value={serv.description}
                      onChange={(e) => {
                        const updated = [...content.services];
                        updated[idx].description = e.target.value;
                        setContent({ ...content, services: updated });
                      }}
                      style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 7: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>Client Endorsements</h2>
              <p style={{ color: '#718096', fontSize: '14px', marginBottom: '28px' }}>Manage client quotes, CEO reviews, and star ratings.</p>

              {content.testimonials.map((test, idx) => (
                <div key={test.id} style={{ backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: '#A0AEC0', marginBottom: '4px' }}>Client / Executive Name</label>
                      <input
                        type="text"
                        value={test.name}
                        onChange={(e) => {
                          const updated = [...content.testimonials];
                          updated[idx].name = e.target.value;
                          setContent({ ...content, testimonials: updated });
                        }}
                        style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF', fontWeight: 600 }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: '#A0AEC0', marginBottom: '4px' }}>Role / Company</label>
                      <input
                        type="text"
                        value={test.role}
                        onChange={(e) => {
                          const updated = [...content.testimonials];
                          updated[idx].role = e.target.value;
                          setContent({ ...content, testimonials: updated });
                        }}
                        style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#A0AEC0', marginBottom: '4px' }}>Endorsement Quote</label>
                    <textarea
                      rows={3}
                      value={test.quote}
                      onChange={(e) => {
                        const updated = [...content.testimonials];
                        updated[idx].quote = e.target.value;
                        setContent({ ...content, testimonials: updated });
                      }}
                      style={{ width: '100%', padding: '10px 14px', backgroundColor: '#06131B', border: '1px solid #1A365D', borderRadius: '8px', color: '#FFF' }}
                    />
                  </div>

                  <div style={{ marginTop: '14px' }}>
                    <FileUploadButton
                      label="Client Avatar Photo"
                      currentValue={test.avatar}
                      onUpload={(url) => {
                        const updated = [...content.testimonials];
                        updated[idx].avatar = url;
                        setContent({ ...content, testimonials: updated });
                      }}
                      accept="image/*"
                      fileType="image"
                      buttonText="Upload Client Photo"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 8: INBOX */}
          {activeTab === 'inbox' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '4px' }}>Incoming Inquiries Inbox</h2>
                  <p style={{ color: '#718096', fontSize: '14px' }}>Messages submitted via your website contact form.</p>
                </div>
                <button
                  onClick={loadInbox}
                  disabled={loadingInbox}
                  style={{ padding: '8px 16px', backgroundColor: '#0B1D28', color: '#139BFD', border: '1px solid #139BFD44', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}
                >
                  {loadingInbox ? 'Refreshing...' : '🔄 Refresh Inbox'}
                </button>
              </div>

              {inbox.length === 0 ? (
                <div style={{ padding: '60px', textAlign: 'center', backgroundColor: '#0B1D28', borderRadius: '16px', border: '1px dashed #1A365D' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>📬</div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#A0AEC0' }}>No messages yet</div>
                  <div style={{ fontSize: '13px', color: '#718096', marginTop: '6px' }}>When prospects submit your contact form, inquiries will appear here.</div>
                </div>
              ) : (
                inbox.map(msg => (
                  <div key={msg.id} style={{ backgroundColor: '#0B1D28', border: '1px solid #1A365D', borderRadius: '14px', padding: '20px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div>
                        <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFF' }}>{msg.name || 'Anonymous Visitor'}</div>
                        <div style={{ fontSize: '13px', color: '#139BFD' }}>{msg.email} {msg.phone ? `• ${msg.phone}` : ''}</div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#718096', backgroundColor: '#06131B', padding: '4px 10px', borderRadius: '500px' }}>
                        {new Date(msg.createdAt).toLocaleString()}
                      </span>
                    </div>
                    {msg.subject && <div style={{ fontSize: '13px', fontWeight: 600, color: '#E2E8F0', marginBottom: '6px' }}>Subject: {msg.subject}</div>}
                    <div style={{ fontSize: '14px', color: '#CBD5E0', lineHeight: 1.6, backgroundColor: '#06131B', padding: '14px', borderRadius: '10px', marginTop: '8px' }}>
                      {msg.message}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </main>
      </div>

      {/* Floating Save Bar */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '28px',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {toast && (
          <div
            style={{
              padding: '12px 20px',
              borderRadius: '500px',
              backgroundColor: toast.type === 'success' ? '#059669' : '#DC2626',
              color: '#FFF',
              fontSize: '13px',
              fontWeight: 600,
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            }}
          >
            {toast.message}
          </div>
        )}

        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 28px',
            borderRadius: '500px',
            backgroundColor: '#139BFD',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: '14px',
            fontFamily: "'Montserrat', sans-serif",
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(19, 155, 253, 0.4)',
            transition: 'all 0.2s',
          }}
        >
          <span>{saving ? '⏳ Saving...' : '💾 Save & Publish'}</span>
        </button>
      </div>
    </div>
  );
}
