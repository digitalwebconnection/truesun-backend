import React, { useState, useRef } from 'react';
import { apiUrl } from '../../lib/api';

/* ── Blog type (matches MongoDB model) ──────────────────── */
export interface Blog {
  _id?: string;
  title: string;
  excerpt: string;
  categories: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
}

interface Props {
  blog?: Blog | null;
  onSuccess: (blog: Blog, isEdit: boolean) => void;
  onClose: () => void;
}

const EMPTY: Blog = {
  title: '', excerpt: '', categories: '', readTime: '',
  date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  image: '',
  content: '',
};

/* ── Tiny style helpers ────────────────────────────────────── */
const S: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed', inset: 0, zIndex: 1000,
    background: 'rgba(0,0,0,0.65)',
    display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
    padding: '1.5rem 1rem', overflowY: 'auto',
    backdropFilter: 'blur(4px)',
  },
  modal: {
    background: '#fff',
    borderRadius: '16px',
    width: '100%', maxWidth: '780px',
    boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
    overflow: 'hidden',
    flexShrink: 0,
    marginTop: 'auto', marginBottom: 'auto',
  },
  header: {
    background: 'linear-gradient(135deg, #FC763A, #FEC24A)',
    padding: '1.25rem 1.75rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  headerTitle: { color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: 0 },
  closeBtn: {
    background: 'rgba(255,255,255,0.25)', border: 'none',
    borderRadius: '8px', width: 32, height: 32, cursor: 'pointer',
    color: '#fff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  body: { padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' },
  section: {
    border: '1px solid #e2e8f0', borderRadius: '10px',
    padding: '1rem 1.25rem',
  },
  sectionTitle: {
    fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: '#FC763A', marginBottom: '0.85rem',
  },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' },
  grid1: { display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' },
  label: {
    display: 'block', fontSize: '0.75rem', fontWeight: 600,
    color: '#475569', marginBottom: '0.3rem',
  },
  input: {
    width: '100%', padding: '0.5rem 0.75rem',
    border: '1px solid #cbd5e1', borderRadius: '7px',
    fontSize: '0.85rem', color: '#1e293b',
    outline: 'none', boxSizing: 'border-box',
    background: '#f8fafc', transition: 'border-color 0.18s',
  },
  textarea: {
    width: '100%', padding: '0.5rem 0.75rem',
    border: '1px solid #cbd5e1', borderRadius: '7px',
    fontSize: '0.85rem', color: '#1e293b',
    outline: 'none', boxSizing: 'border-box',
    background: '#f8fafc', resize: 'vertical', minHeight: '72px',
    fontFamily: 'inherit',
  },
  imgPreview: {
    marginTop: '0.4rem', width: '100%', maxHeight: '130px',
    objectFit: 'cover', borderRadius: '6px', border: '1px solid #e2e8f0',
  },
  footer: {
    padding: '1rem 1.75rem', borderTop: '1px solid #e2e8f0',
    display: 'flex', justifyContent: 'flex-end', gap: '0.75rem',
    background: '#f8fafc',
  },
  cancelBtn: {
    padding: '0.55rem 1.25rem', border: '1px solid #cbd5e1',
    borderRadius: '8px', background: '#fff', cursor: 'pointer',
    fontSize: '0.85rem', color: '#64748b', fontWeight: 600,
  },
  saveBtn: {
    padding: '0.55rem 1.5rem',
    background: 'linear-gradient(135deg, #FC763A, #FEC24A)',
    border: 'none', borderRadius: '8px', cursor: 'pointer',
    fontSize: '0.85rem', color: '#fff', fontWeight: 700,
    boxShadow: '0 3px 10px rgba(252,118,58,0.35)',
  },
  errBanner: {
    background: '#fef2f2', border: '1px solid #fecaca',
    borderRadius: '8px', padding: '0.6rem 1rem',
    color: '#dc2626', fontSize: '0.82rem',
  },
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={S.label}>{label}</label>
      {children}
    </div>
  );
}

function TextInput({ id, value, onChange, placeholder = '' }: {
  id: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={S.input}
      onFocus={e => (e.currentTarget.style.borderColor = '#FC763A')}
      onBlur={e => (e.currentTarget.style.borderColor = '#cbd5e1')}
    />
  );
}

function TextArea({ id, value, onChange, placeholder = '', rows = 3 }: {
  id: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number;
}) {
  return (
    <textarea
      id={id}
      value={value}
      rows={rows}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={S.textarea}
      onFocus={e => (e.currentTarget.style.borderColor = '#FC763A')}
      onBlur={e => (e.currentTarget.style.borderColor = '#cbd5e1')}
    />
  );
}

function ImageField({
  label, fieldName, preview, onChange,
}: {
  label: string; fieldName: string; preview: string; onChange: (file: File | null) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label style={S.label}>{label}</label>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        style={{ ...S.input, padding: '0.35rem 0.5rem', cursor: 'pointer' }}
        onChange={e => onChange(e.target.files?.[0] ?? null)}
        id={`img-${fieldName}`}
      />
      {preview && (
        <img src={preview} alt={label} style={S.imgPreview} />
      )}
    </div>
  );
}

/* ── Main Component ────────────────────────────────────────── */
export default function BlogForm({ blog, onSuccess, onClose }: Props) {
  const isEdit = !!blog?._id;

  const [form, setForm] = useState<Blog>(blog ? { ...EMPTY, ...blog } : EMPTY);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [imgPreview, setImgPreview] = useState(blog?.image || '');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = (key: keyof Blog, value: string) =>
    setForm(f => ({ ...f, [key]: value }));

  const handleFileChange = (
    file: File | null,
    setFile: (f: File | null) => void,
    setPreview: (s: string) => void,
  ) => {
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = e => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const fd = new FormData();

      // Append all scalar fields
      const scalars: (keyof Blog)[] = [
        'title', 'excerpt', 'categories', 'readTime', 'date', 'content',
      ];
      scalars.forEach(k => fd.append(k as string, (form[k] as string) || ''));

      // Image files (only if new file selected)
      if (imgFile) fd.append('image', imgFile);

      const url = isEdit ? apiUrl(`/api/blogs/${form._id}`) : apiUrl('/api/blogs');
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, { method, body: fd });
      const data = await res.json();

      if (!res.ok || !data.success) throw new Error(data.message || 'Server error');

      onSuccess(data.data, isEdit);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement) === e.currentTarget) onClose();
  };

  return (
    <div style={S.overlay} onClick={handleOverlayClick}>
      <div style={S.modal}>
        {/* Header */}
        <div style={S.header}>
          <h2 style={S.headerTitle}>{isEdit ? '✏️ Edit Blog' : '➕ Add New Blog'}</h2>
          <button style={S.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={S.body}>
            {error && <div style={S.errBanner}>⚠ {error}</div>}

            <div style={S.section}>
              <div style={S.sectionTitle}>Blog Info</div>
              <div style={S.grid1}>
                <Field label="Blog Title">
                  <TextInput id="f-title" value={form.title} onChange={v => set('title', v)} placeholder="e.g. Solar Trends 2024" />
                </Field>
              </div>
              <div style={{ ...S.grid2, marginTop: '0.75rem' }}>
                <Field label="Category / Categories">
                  <TextInput id="f-categories" value={form.categories} onChange={v => set('categories', v)} placeholder="e.g. Policy, Sustainability" />
                </Field>
                <Field label="Read Time">
                  <TextInput id="f-readtime" value={form.readTime} onChange={v => set('readTime', v)} placeholder="e.g. 5 min read" />
                </Field>
              </div>
              <div style={{ ...S.grid1, marginTop: '0.75rem' }}>
                <Field label="Date">
                  <TextInput id="f-date" value={form.date} onChange={v => set('date', v)} placeholder="e.g. Mar 24, 2024" />
                </Field>
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <Field label="Excerpt">
                  <TextArea id="f-excerpt" value={form.excerpt} onChange={v => set('excerpt', v)} placeholder="Short summary for the card..." rows={2} />
                </Field>
              </div>
            </div>

            <div style={S.section}>
              <div style={S.sectionTitle}>Content</div>
              <Field label="Blog Content (Markdown supported)">
                <TextArea id="f-content" value={form.content} onChange={v => set('content', v)} placeholder="Write your blog post content here..." rows={10} />
              </Field>
            </div>

            <div style={S.grid2}>
              <ImageField
                label="Feature Image"
                fieldName="image"
                preview={imgPreview}
                onChange={f => handleFileChange(f, setImgFile, setImgPreview)}
              />
            </div>
          </div>

          <div style={S.footer}>
            <button type="button" style={S.cancelBtn} onClick={onClose}>Cancel</button>
            <button
              type="submit"
              style={{ ...S.saveBtn, opacity: loading ? 0.7 : 1 }}
              disabled={loading}
            >
              {loading ? 'Saving…' : isEdit ? 'Update Blog' : 'Add Blog'}
            </button>
          </div>
        </form>
      </div>
    </div >
  );
}
