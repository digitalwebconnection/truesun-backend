import React, { useState, useRef } from 'react';
import { apiUrl } from '../../lib/api';

/* ── Project type (matches MongoDB model) ──────────────────── */
export interface Project {
  _id?: string;
  name: string;
  segment: string;
  location: string;
  description: string;
  image: string;
  capacity: string;
  roofType: string;
  co2Mitigated: string;
  annualGen: string;
  payback: string;
  savings: string;
}

interface Props {
  project?: Project | null;
  onSuccess: (project: Project, isEdit: boolean) => void;
  onClose: () => void;
}

const EMPTY: Project = {
  name: '', segment: '', location: '', description: '',
  image: '',
  capacity: '', roofType: '',
  co2Mitigated: '', annualGen: '', payback: '', savings: '',
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
  grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' },
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
export default function ProjectForm({ project, onSuccess, onClose }: Props) {
  const isEdit = !!project?._id;

  const [form, setForm] = useState<Project>(project ? { ...EMPTY, ...project } : EMPTY);
  const [imgFile, setImgFile] = useState<File | null>(null);

  const [imgPreview, setImgPreview] = useState(project?.image || '');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = (key: keyof Project, value: string) =>
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
      const scalars: (keyof Project)[] = [
        'name', 'segment', 'location', 'description',
        'capacity', 'roofType',
        'co2Mitigated', 'annualGen', 'payback', 'savings',
      ];
      scalars.forEach(k => fd.append(k as string, (form[k] as string) || ''));

      // Image files (only if new file selected)
      if (imgFile) fd.append('image', imgFile);

      const url = isEdit ? apiUrl(`/api/projects/${form._id}`) : apiUrl('/api/projects');
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

  return (
    <div style={S.overlay}>
      <div style={S.modal}>
        {/* Header */}
        <div style={S.header}>
          <h2 style={S.headerTitle}>{isEdit ? '✏️ Edit Project' : '➕ Add New Project'}</h2>
          <button style={S.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={S.body}>
            {error && <div style={S.errBanner}>⚠ {error}</div>}

            {/* ── Basic Info ── */}
            <div style={S.section}>
              <div style={S.sectionTitle}>Basic Information</div>
              <div style={S.grid2}>
                <Field label="Project Name">
                  <TextInput id="f-name" value={form.name} onChange={v => set('name', v)} placeholder="e.g. Bloom Packaging" />
                </Field>
                <Field label="Segment">
                  <TextInput id="f-segment" value={form.segment} onChange={v => set('segment', v)} placeholder="e.g. Industrial" />
                </Field>
              </div>
              <div style={{ ...S.grid1, marginTop: '0.75rem' }}>
                <Field label="Location">
                  <TextInput id="f-location" value={form.location} onChange={v => set('location', v)} placeholder="e.g. Daman, India" />
                </Field>
              </div>
              <div style={{ marginTop: '0.75rem' }}>
                <Field label="Description">
                  <TextArea id="f-desc" value={form.description} onChange={v => set('description', v)} placeholder="Short project description..." rows={3} />
                </Field>
              </div>
            </div>

            {/* ── Technical ── */}
            <div style={S.section}>
              <div style={S.sectionTitle}>Technical Details</div>
              <div style={S.grid2}>
                <Field label="Capacity">
                  <TextInput id="f-capacity" value={form.capacity} onChange={v => set('capacity', v)} placeholder="e.g. 60 kW" />
                </Field>
                <Field label="Roof Type">
                  <TextInput id="f-rooftype" value={form.roofType} onChange={v => set('roofType', v)} placeholder="e.g. RCC Roof" />
                </Field>
              </div>
            </div>

            {/* ── Performance ── */}
            <div style={S.section}>
              <div style={S.sectionTitle}>Performance Metrics</div>
              <div style={S.grid2}>
                <Field label="Annual Generation">
                  <TextInput id="f-annualgen" value={form.annualGen} onChange={v => set('annualGen', v)} placeholder="e.g. 90,000 kWh" />
                </Field>
                <Field label="CO₂ Mitigated">
                  <TextInput id="f-co2" value={form.co2Mitigated} onChange={v => set('co2Mitigated', v)} placeholder="e.g. 2,445 tonnes" />
                </Field>
                <Field label="Payback Period">
                  <TextInput id="f-payback" value={form.payback} onChange={v => set('payback', v)} placeholder="e.g. 3 years" />
                </Field>
                <Field label="Estimated Savings">
                  <TextInput id="f-savings" value={form.savings} onChange={v => set('savings', v)} placeholder="e.g. ₹10 Lakhs/year" />
                </Field>
              </div>
            </div>

            <div style={S.grid2}>
              <ImageField
                label="Main Image"
                fieldName="image"
                preview={imgPreview}
                onChange={f => handleFileChange(f, setImgFile, setImgPreview)}
              />
            </div>
          </div>
          {/* Footer */}
          <div style={S.footer}>
            <button type="button" style={S.cancelBtn} onClick={onClose}>Cancel</button>
            <button
              type="submit"
              style={{ ...S.saveBtn, opacity: loading ? 0.7 : 1 }}
              disabled={loading}
            >
              {loading ? 'Saving…' : isEdit ? 'Update Project' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div >
  );
}
