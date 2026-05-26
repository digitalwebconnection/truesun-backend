import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sun, LogOut, PlusCircle, Pencil, Trash2,FolderOpen, AlertCircle, Loader2,
  FileText
} from 'lucide-react';
import ProjectForm, { type Project } from './ProjectForm';
import BlogForm, { type Blog } from './BlogForm';
import { apiUrl, getImageUrl } from '../../lib/api';

/* ── Palette ──────────────────────────────────────────────── */
const CLR = {
  primary: '#FC763A',
  accent: '#FEC24A',
  sidebarBg: '#111827',
  sidebarTx: 'rgba(255,255,255,0.65)',
  mainBg: '#f1f5f9',
  cardBg: '#ffffff',
  border: '#e2e8f0',
  textDark: '#1e293b',
  textMuted: '#64748b',
  danger: '#ef4444',
  success: '#10b981',
};

/* ── Styles ───────────────────────────────────────────────── */
const S: Record<string, React.CSSProperties> = {
  root: {
    display: 'flex', minHeight: '100vh',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    background: CLR.mainBg,
  },
  /* Sidebar */
  sidebar: {
    width: 240, flexShrink: 0,
    background: CLR.sidebarBg,
    display: 'flex', flexDirection: 'column',
    padding: '1.5rem 0',
    position: 'sticky', top: 0, height: '100vh',
    boxShadow: '2px 0 12px rgba(0,0,0,0.18)',
  },
  sidebarLogo: {
    display: 'flex', alignItems: 'center', gap: '0.6rem',
    padding: '0 1.25rem 1.5rem',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
    marginBottom: '1rem',
  },
  logoCircle: {
    width: 36, height: 36, borderRadius: '50%',
    background: 'linear-gradient(135deg, #FC763A, #FEC24A)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  logoText: { color: '#fff', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.3px' },
  logoSub: { color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' },
  navItem: {
    display: 'flex', alignItems: 'center', gap: '0.65rem',
    padding: '0.6rem 1.25rem', cursor: 'pointer',
    color: CLR.sidebarTx, fontSize: '0.85rem', fontWeight: 500,
    borderLeft: '3px solid transparent',
    transition: 'all 0.15s',
    userSelect: 'none',
  },
  navItemActive: {
    color: '#fff',
    background: 'rgba(252,118,58,0.12)',
    borderLeftColor: CLR.primary,
  },
  sidebarSpacer: { flex: 1 },
  logoutBtn: {
    margin: '0 1rem',
    display: 'flex', alignItems: 'center', gap: '0.55rem',
    padding: '0.6rem 0.9rem',
    background: 'rgba(239,68,68,0.12)',
    border: '1px solid rgba(239,68,68,0.25)',
    borderRadius: '8px', cursor: 'pointer',
    color: '#fca5a5', fontSize: '0.82rem', fontWeight: 600,
  },
  /* Main */
  main: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  topbar: {
    background: CLR.cardBg, borderBottom: `1px solid ${CLR.border}`,
    padding: '0.9rem 1.75rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  },
  topbarTitle: { fontWeight: 700, fontSize: '1.05rem', color: CLR.textDark },
  topbarSub: { fontSize: '0.75rem', color: CLR.textMuted, marginTop: '0.1rem' },
  addBtn: {
    display: 'flex', alignItems: 'center', gap: '0.45rem',
    padding: '0.55rem 1.1rem',
    background: 'linear-gradient(135deg, #FC763A, #FEC24A)',
    border: 'none', borderRadius: '8px', cursor: 'pointer',
    color: '#fff', fontWeight: 700, fontSize: '0.85rem',
    boxShadow: '0 3px 10px rgba(252,118,58,0.35)',
    transition: 'opacity 0.15s',
  },
  content: { flex: 1, padding: '1.5rem 1.75rem', overflowY: 'auto' },
  /* Stats */
  statsRow: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' },
  statCard: {
    background: CLR.cardBg, borderRadius: '12px',
    border: `1px solid ${CLR.border}`,
    padding: '1rem 1.25rem',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
  },
  statVal: { fontSize: '1.6rem', fontWeight: 800, color: CLR.textDark, lineHeight: 1.2 },
  statLabel: { fontSize: '0.73rem', color: CLR.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.3rem' },
  statAccent: { width: 4, height: 36, borderRadius: 4, background: 'linear-gradient(180deg,#FC763A,#FEC24A)', marginRight: '0.9rem', flexShrink: 0 },
  /* Table card */
  tableCard: {
    background: CLR.cardBg, borderRadius: '14px',
    border: `1px solid ${CLR.border}`,
    boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
    overflow: 'hidden',
  },
  tableHead: { background: '#f8fafc', borderBottom: `1px solid ${CLR.border}` },
  th: {
    padding: '0.65rem 1rem', textAlign: 'left',
    fontSize: '0.7rem', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.1em', color: CLR.textMuted,
    whiteSpace: 'nowrap' as const,
  },
  td: {
    padding: '0.75rem 1rem', fontSize: '0.85rem',
    color: CLR.textDark, verticalAlign: 'middle',
    borderBottom: `1px solid ${CLR.border}`,
  },
  tdMuted: { color: CLR.textMuted, fontSize: '0.78rem' },
  badge: {
    display: 'inline-block', padding: '0.22rem 0.6rem',
    borderRadius: '99px', fontSize: '0.7rem', fontWeight: 600,
    background: 'rgba(252,118,58,0.1)', color: CLR.primary,
  },
  imgThumb: {
    width: 52, height: 40, objectFit: 'cover',
    borderRadius: '6px', border: `1px solid ${CLR.border}`,
    background: '#f1f5f9',
  },
  imgPlaceholder: {
    width: 52, height: 40, borderRadius: '6px',
    border: `1px dashed ${CLR.border}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: CLR.border, fontSize: '0.65rem',
  },
  actionBtn: {
    border: 'none', borderRadius: '7px', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 30, height: 30,
    transition: 'background 0.15s',
  },
  editBtn: { background: 'rgba(99,102,241,0.1)', color: '#6366f1' },
  deleteBtn: { background: 'rgba(239,68,68,0.1)', color: CLR.danger },
  /* States */
  center: { display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 0', flexDirection: 'column', gap: '0.75rem' },
  /* Delete confirm */
  confirmOverlay: {
    position: 'fixed', inset: 0, zIndex: 999,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  confirmBox: {
    background: '#fff', borderRadius: '14px', padding: '1.75rem',
    width: '90%', maxWidth: '360px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
    textAlign: 'center',
  },
  confirmIcon: {
    width: 52, height: 52, borderRadius: '50%',
    background: 'rgba(239,68,68,0.1)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 1rem',
  },
  confirmTitle: { fontWeight: 700, fontSize: '1.05rem', color: CLR.textDark, marginBottom: '0.4rem' },
  confirmSub: { color: CLR.textMuted, fontSize: '0.83rem', marginBottom: '1.25rem' },
  confirmRow: { display: 'flex', gap: '0.75rem', justifyContent: 'center' },
  confirmCancel: {
    padding: '0.5rem 1.2rem', border: `1px solid ${CLR.border}`,
    borderRadius: '8px', background: '#fff', cursor: 'pointer',
    fontSize: '0.85rem', color: CLR.textMuted, fontWeight: 600,
  },
  confirmDelete: {
    padding: '0.5rem 1.2rem', border: 'none',
    borderRadius: '8px', background: CLR.danger, cursor: 'pointer',
    fontSize: '0.85rem', color: '#fff', fontWeight: 700,
  },
};

type ActiveTab = 'projects' | 'blogs';

/* ── Component ────────────────────────────────────────────── */
export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ActiveTab>('projects');

  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');
  const [showForm, setShowForm] = useState(false);

  const [editItem, setEditItem] = useState<Project | Blog | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [toast, setToast] = useState('');
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  /* ── fetch ── */
  const fetchData = async (tab: ActiveTab) => {
    setLoading(true);
    setFetchError('');
    try {
      const endpoint = tab === 'projects' ? apiUrl('/api/projects') : apiUrl('/api/blogs');
      const res = await fetch(endpoint);
      const data = await res.json();
      if (data.success) {
        if (tab === 'projects') setProjects(data.data);
        else setBlogs(data.data);
      } else {
        setFetchError(data.message);
      }
    } catch {
      setFetchError('Cannot reach the backend. Make sure the backend server is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(activeTab); }, [activeTab]);

  /* ── toast helper ── */
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  /* ── logout ── */
  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin', { replace: true });
  };

  /* ── delete ── */
  const confirmDelete = async () => {
    if (!deletingId) return;
    setDeleteLoading(true);
    try {
      const endpoint = activeTab === 'projects' ? apiUrl(`/api/projects/${deletingId}`) : apiUrl(`/api/blogs/${deletingId}`);
      const res = await fetch(endpoint, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        if (activeTab === 'projects') {
          setProjects(p => p.filter(x => x._id !== deletingId));
          localStorage.removeItem('ts_cache_projects_list');
        } else {
          // Find the deleted blog to evict its specific detail cache
          const deletedBlog = blogs.find(x => x._id === deletingId);
          if (deletedBlog) {
            localStorage.removeItem(`ts_cache_blog_detail_${deletedBlog.slug}`);
            localStorage.removeItem(`ts_cache_blog_detail_${deletedBlog._id}`);
            
            // Cleanup clicked_blogs in localStorage
            try {
              const raw = localStorage.getItem("clicked_blogs");
              if (raw) {
                const clicked = JSON.parse(raw);
                if (Array.isArray(clicked)) {
                  const updated = clicked.filter((b: any) => b.slug !== deletedBlog.slug && b._id !== deletedBlog._id);
                  localStorage.setItem("clicked_blogs", JSON.stringify(updated));
                }
              }
            } catch (e) {
              console.error("Failed to update clicked_blogs upon deletion:", e);
            }

            // Record it as deleted to prevent other views from pulling it from cache
            try {
              const deletedRaw = localStorage.getItem("deleted_blog_slugs");
              const deletedSlugs = deletedRaw ? JSON.parse(deletedRaw) : [];
              const newDeleted = Array.from(new Set([...deletedSlugs, deletedBlog.slug, deletedBlog._id]));
              localStorage.setItem("deleted_blog_slugs", JSON.stringify(newDeleted));
            } catch (e) {
              console.error("Failed to update deleted_blog_slugs upon deletion:", e);
            }
          }
          setBlogs(b => b.filter(x => x._id !== deletingId));
          localStorage.removeItem('ts_cache_blogs_list');
        }
        showToast(`${activeTab === 'projects' ? 'Project' : 'Blog'} deleted successfully`);
      } else {
        alert(data.message || 'Delete failed');
      }
    } catch {
      alert('Failed to delete. Check backend connection.');
    } finally {
      setDeleteLoading(false);
      setDeletingId(null);
    }
  };

  /* ── form success ── */
  const handleFormSuccess = (item: any, isEdit: boolean) => {
    if (activeTab === 'projects') {
      const project = item as Project;
      if (isEdit) {
        setProjects(p => p.map(x => x._id === project._id ? project : x));
      } else {
        setProjects(p => [project, ...p]);
      }
      localStorage.removeItem('ts_cache_projects_list');
    } else {
      const blog = item as Blog;
      if (isEdit) {
        setBlogs(b => b.map(x => x._id === blog._id ? blog : x));
      } else {
        setBlogs(b => [blog, ...b]);
      }
      localStorage.removeItem('ts_cache_blogs_list');
      localStorage.removeItem(`ts_cache_blog_detail_${blog.slug}`);
      localStorage.removeItem(`ts_cache_blog_detail_${blog._id}`);
    }
    setShowForm(false);
    setEditItem(null);
    showToast(isEdit ? `${activeTab === 'projects' ? 'Project' : 'Blog'} updated!` : `${activeTab === 'projects' ? 'Project' : 'Blog'} added!`);
  };

  /* ── Derived stats ── */
  const stats = activeTab === 'projects' ? [
    { label: 'Total Projects', value: projects.length, accent: CLR.primary },
    {
      label: 'Cumulative Capacity',
      value: (() => {
        const total = projects.reduce((sum, p) => {
          const m = (p.capacity || '').replace(/,/g, '').match(/[\d.]+/);
          if (!m) return sum;
          const n = parseFloat(m[0]);
          return sum + ((p.capacity || '').toLowerCase().includes('mw') ? n * 1000 : n);
        }, 0);
        return total >= 1000 ? `${(total / 1000).toFixed(1)} MWp` : `${total.toFixed(0)} kWp`;
      })(),
      accent: CLR.accent
    },
    { label: 'Segments Covered', value: [...new Set(projects.map(p => p.segment).filter(Boolean))].length, accent: '#6366f1' },
  ] : [
    { label: 'Total Blogs', value: blogs.length, accent: CLR.primary },
    { label: 'Total Categories', value: [...new Set(blogs.map(b => b.categories).filter(Boolean))].length, accent: CLR.accent },
    { label: 'Published Blogs', value: blogs.length, accent: '#6366f1' },
  ];

  return (
    <div style={S.root}>
      {/* ── Sidebar ── */}
      <aside style={S.sidebar}>
        <div style={S.sidebarLogo}>
          <div style={S.logoCircle}>
            <Sun size={17} color="#fff" strokeWidth={2.5} />
          </div>
          <div>
            <div style={S.logoText}>TrueSun</div>
            <div style={S.logoSub}>Admin Panel</div>
          </div>
        </div>

        <div style={{ padding: '0 0.5rem' }}>
          <div
            style={{ ...S.navItem, ...(activeTab === 'projects' ? S.navItemActive : {}) }}
            onClick={() => setActiveTab('projects')}
          >
            <FolderOpen size={16} /> Projects
          </div>
          <div
            style={{ ...S.navItem, ...(activeTab === 'blogs' ? S.navItemActive : {}) }}
            onClick={() => setActiveTab('blogs')}
          >
            <FileText size={16} /> Blogs
          </div>
        </div>

        <div style={S.sidebarSpacer} />
        <button style={S.logoutBtn} onClick={handleLogout}>
          <LogOut size={14} /> Logout
        </button>
      </aside>

      {/* ── Main ── */}
      <main style={S.main}>
        {/* Topbar */}
        <div style={S.topbar}>
          <div>
            <div style={S.topbarTitle}>{activeTab === 'projects' ? 'Projects Management' : 'Blogs Management'}</div>
            <div style={S.topbarSub}>{activeTab === 'projects' ? 'Add, edit and delete solar projects' : 'Manage your blog posts and articles'}</div>
          </div>
          <button
            id={`admin-add-${activeTab}-btn`}
            style={S.addBtn}
            onClick={() => { setEditItem(null); setShowForm(true); }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <PlusCircle size={15} /> Add {activeTab === 'projects' ? 'Project' : 'Blog'}
          </button>
        </div>

        <div style={S.content}>
          {/* Stats */}
          <div style={S.statsRow}>
            {stats.map(({ label, value, accent }) => (
              <div key={label} style={{ ...S.statCard, display: 'flex', alignItems: 'center' }}>
                <div style={{ ...S.statAccent, background: accent }} />
                <div>
                  <div style={S.statVal}>{value}</div>
                  <div style={S.statLabel}>{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Table card */}
          <div style={S.tableCard}>
            {loading ? (
              <div style={S.center}>
                <Loader2 size={28} color={CLR.primary} style={{ animation: 'spin 1s linear infinite' }} />
                <span style={{ color: CLR.textMuted, fontSize: '0.85rem' }}>Loading {activeTab}…</span>
              </div>
            ) : fetchError ? (
              <div style={S.center}>
                <AlertCircle size={28} color={CLR.danger} />
                <span style={{ color: CLR.danger, fontSize: '0.85rem', textAlign: 'center', maxWidth: 400 }}>{fetchError}</span>
                <button
                  onClick={() => fetchData(activeTab)}
                  style={{ ...S.addBtn, marginTop: '0.5rem', fontSize: '0.78rem', padding: '0.45rem 1rem' }}
                >
                  Retry
                </button>
              </div>
            ) : (activeTab === 'projects' ? projects : blogs).length === 0 ? (
              <div style={S.center}>
                <FolderOpen size={32} color={CLR.border} />
                <span style={{ color: CLR.textMuted, fontSize: '0.85rem' }}>No {activeTab} yet. Click "Add {activeTab === 'projects' ? 'Project' : 'Blog'}" to get started.</span>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead style={S.tableHead}>
                    {activeTab === 'projects' ? (
                      <tr>
                        <th style={S.th}>Image</th>
                        <th style={S.th}>Name</th>
                        <th style={S.th}>Segment</th>
                        <th style={S.th}>Location</th>
                        <th style={S.th}>Capacity</th>
                        <th style={S.th}>Annual Gen.</th>
                        <th style={{ ...S.th, textAlign: 'center' }}>Actions</th>
                      </tr>
                    ) : (
                      <tr>
                        <th style={S.th}>Image</th>
                        <th style={S.th}>Title</th>
                        <th style={S.th}>Category</th>
                        <th style={S.th}>Date</th>
                        <th style={S.th}>Read Time</th>
                        <th style={{ ...S.th, textAlign: 'center' }}>Actions</th>
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    {(activeTab === 'projects' ? projects : blogs).map((item: any, i) => (
                      <tr
                        key={item._id}
                        style={{ background: i % 2 === 0 ? '#fff' : '#fafbfc' }}
                      >
                        <td style={S.td}>
                          {item.image ? (
                            <img
                              src={getImageUrl(item.image)}
                              alt={item.name || item.title}
                              style={S.imgThumb}
                              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                            />
                          ) : (
                            <div style={S.imgPlaceholder}>No img</div>
                          )}
                        </td>
                        <td style={S.td}>
                          <div style={{ fontWeight: 600 }}>{item.name || item.title || '—'}</div>
                        </td>
                        <td style={S.td}>
                          {(item.segment || item.categories) ? <span style={S.badge}>{item.segment || item.categories}</span> : '—'}
                        </td>
                        <td style={{ ...S.td, ...S.tdMuted }}>{item.location || item.date || '—'}</td>
                        {activeTab === 'projects' ? (
                          <>
                            <td style={{ ...S.td, fontWeight: 600 }}>{item.capacity || '—'}</td>
                            <td style={S.tdMuted}>{item.annualGen || '—'}</td>
                          </>
                        ) : (
                          <td style={S.tdMuted}>{item.readTime || '—'}</td>
                        )}
                        <td style={{ ...S.td, textAlign: 'center' }}>
                          <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center' }}>
                            <button
                              title={`Edit ${activeTab === 'projects' ? 'project' : 'blog'}`}
                              style={{ ...S.actionBtn, ...S.editBtn }}
                              onClick={() => { setEditItem(item); setShowForm(true); }}
                            >
                              <Pencil size={14} />
                            </button>
                            <button
                              title={`Delete ${activeTab === 'projects' ? 'project' : 'blog'}`}
                              style={{ ...S.actionBtn, ...S.deleteBtn }}
                              onClick={() => setDeletingId(item._id!)}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* ── Forms ── */}
      {showForm && activeTab === 'projects' && (
        <ProjectForm
          project={editItem as Project}
          onSuccess={handleFormSuccess}
          onClose={() => { setShowForm(false); setEditItem(null); }}
        />
      )}
      {showForm && activeTab === 'blogs' && (
        <BlogForm
          blog={editItem as Blog}
          onSuccess={handleFormSuccess}
          onClose={() => { setShowForm(false); setEditItem(null); }}
        />
      )}

      {/* ── Logout Confirmation ── */}
      {showLogoutConfirm && (
        <div style={S.confirmOverlay}>
          <div style={S.confirmBox}>
            <div style={S.confirmIcon}>
              <LogOut size={22} color={CLR.danger} />
            </div>
            <div style={S.confirmTitle}>Confirm Logout</div>
            <div style={S.confirmSub}>
              Are you sure you want to log out of the admin panel?
            </div>
            <div style={S.confirmRow}>
              <button style={S.confirmCancel} onClick={() => setShowLogoutConfirm(false)}>Cancel</button>
              <button style={S.confirmDelete} onClick={confirmLogout}>Yes, Logout</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation ── */}
      {deletingId && (
        <div style={S.confirmOverlay}>
          <div style={S.confirmBox}>
            <div style={S.confirmIcon}>
              <Trash2 size={22} color={CLR.danger} />
            </div>
            <div style={S.confirmTitle}>Delete {activeTab === 'projects' ? 'Project' : 'Blog'}?</div>
            <div style={S.confirmSub}>
              This will permanently delete the item and its images from the server. This action cannot be undone.
            </div>
            <div style={S.confirmRow}>
              <button style={S.confirmCancel} onClick={() => setDeletingId(null)}>Cancel</button>
              <button
                style={{ ...S.confirmDelete, opacity: deleteLoading ? 0.7 : 1 }}
                onClick={confirmDelete}
                disabled={deleteLoading}
              >
                {deleteLoading ? 'Deleting…' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 2000,
          background: '#1e293b', color: '#fff', borderRadius: '10px',
          padding: '0.75rem 1.25rem', fontSize: '0.85rem', fontWeight: 600,
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          animation: 'fadeIn 0.2s ease',
        }}>
          ✓ {toast}
        </div>
      )}

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes spin    { to { transform: rotate(360deg); } }
        @keyframes fadeIn  { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
