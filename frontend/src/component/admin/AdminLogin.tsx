import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Eye, EyeOff, Lock, User } from 'lucide-react';
import { apiUrl } from '../../lib/api';

/* ── Styles ────────────────────────────────────────────────── */
const S: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0c17 0%, #1a1533 50%, #0f2027 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    padding: '1rem',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '2.5rem 2rem',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #FC763A, #FEC24A)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(252,118,58,0.4)',
  },
  brand: {
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#fff',
    letterSpacing: '-0.5px',
  },
  brandOrange: { color: '#FC763A' },
  subtitle: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.45)',
    fontSize: '0.78rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '2rem',
  },
  label: {
    display: 'block',
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '0.4rem',
  },
  inputWrap: {
    position: 'relative',
    marginBottom: '1rem',
  },
  inputIcon: {
    position: 'absolute',
    left: '0.9rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'rgba(255,255,255,0.3)',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '0.7rem 2.75rem',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  },
  eyeBtn: {
    position: 'absolute',
    right: '0.9rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.3)',
    padding: 0,
    display: 'flex',
  },
  error: {
    background: 'rgba(239,68,68,0.15)',
    border: '1px solid rgba(239,68,68,0.3)',
    borderRadius: '8px',
    color: '#fca5a5',
    fontSize: '0.8rem',
    padding: '0.6rem 0.9rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  btn: {
    width: '100%',
    padding: '0.75rem',
    background: 'linear-gradient(135deg, #FC763A, #FEC24A)',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '0.95rem',
    fontWeight: 700,
    cursor: 'pointer',
    letterSpacing: '0.05em',
    transition: 'opacity 0.2s, transform 0.1s',
    marginTop: '0.5rem',
    boxShadow: '0 4px 15px rgba(252,118,58,0.35)',
  },
  hint: {
    marginTop: '1.5rem',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.25)',
    fontSize: '0.72rem',
  },
};

export default function AdminLogin() {
  const [username, setUsername]         = useState('');
  const [password, setPassword]         = useState('');
  const [showPass, setShowPass]         = useState(false);
  const [error, setError]               = useState('');
  const [loading, setLoading]           = useState(false);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem('adminAuth') === 'true') {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(apiUrl('/api/auth/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.trim(), password })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('adminAuth', 'true');
        navigate('/admin/dashboard', { replace: true });
      } else {
        setError(data.message || 'Invalid username or password. Please try again.');
        setLoading(false);
      }
    } catch (err) {
      setError('An error occurred during login. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div style={S.page}>
      <div style={S.card}>
        {/* Logo */}
        <div style={S.logoRow}>
          <div style={S.logoCircle}>
            <Sun size={20} color="#fff" strokeWidth={2.5} />
          </div>
          <span style={S.brand}>
            True<span style={S.brandOrange}>Sun</span>
          </span>
        </div>
        <p style={S.subtitle}>Admin Panel</p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <label style={S.label}>Username</label>
          <div style={S.inputWrap}>
            <span style={S.inputIcon}><User size={15} /></span>
            <input
              id="admin-username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter username"
              required
              style={S.input}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(252,118,58,0.6)')}
              onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
            />
          </div>

          {/* Password */}
          <label style={S.label}>Password</label>
          <div style={S.inputWrap}>
            <span style={S.inputIcon}><Lock size={15} /></span>
            <input
              id="admin-password"
              type={showPass ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              style={S.input}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(252,118,58,0.6)')}
              onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
            />
            <button
              type="button"
              style={S.eyeBtn}
              onClick={() => setShowPass(p => !p)}
              aria-label={showPass ? 'Hide password' : 'Show password'}
            >
              {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>

          {error && <div style={S.error}>{error}</div>}

          <button
            type="submit"
            style={{ ...S.btn, opacity: loading ? 0.7 : 1 }}
            disabled={loading}
            onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.opacity = '0.88'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = loading ? '0.7' : '1'; }}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <p style={S.hint}>TrueSun Energy · Secure Admin Access</p>
      </div>
    </div>
  );
}
