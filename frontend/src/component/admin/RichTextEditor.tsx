import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import { useEffect, useCallback, useState } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export default function RichTextEditor({ value, onChange, placeholder, label }: RichTextEditorProps) {
  const [linkUrl, setLinkUrl] = useState('');
  const [showLinkInput, setShowLinkInput] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
        HTMLAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'rte-editor',
        ...(placeholder ? { 'data-placeholder': placeholder } : {}),
      },
    },
  });

  // Sync external value on first load or reset
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '', { emitUpdate: false });
    }
  }, [value, editor]);

  // Intercept paste to format 'name: message' patterns (bolding only the label before the colon)
  useEffect(() => {
    if (!editor) return;

    const handlePasteEvent = (event: ClipboardEvent) => {
      const text = event.clipboardData?.getData('text/plain');
      if (!text || !text.includes(':')) return;

      const lines = text.split('\n');
      let hasPattern = false;
      const htmlParts = lines.map(line => {
        const match = line.match(/^([^:]{1,30}):(.*)$/);
        if (match) {
          hasPattern = true;
          return `<strong>${match[1]}:</strong>${match[2]}`;
        }
        // HTML escape non-matching text to prevent layout breaks
        return line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      });

      if (hasPattern) {
        event.preventDefault();
        event.stopPropagation();
        const htmlContent = htmlParts.map(p => `<p>${p}</p>`).join('');
        editor.commands.insertContent(htmlContent);
      }
    };

    const element = editor.view.dom;
    element.addEventListener('paste', handlePasteEvent, true);
    return () => {
      element.removeEventListener('paste', handlePasteEvent, true);
    };
  }, [editor]);

  const applyLink = useCallback(() => {
    if (!editor) return;
    if (!linkUrl.trim()) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
    } else {
      editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl.trim() }).run();
    }
    setLinkUrl('');
    setShowLinkInput(false);
  }, [editor, linkUrl]);

  const removeLink = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().extendMarkRange('link').unsetLink().run();
    setShowLinkInput(false);
  }, [editor]);

  if (!editor) return null;

  const btn = (active: boolean, extra = '') =>
    `px-2 py-1 rounded text-xs font-medium transition select-none ${extra} ${
      active
        ? 'bg-amber-500 text-white'
        : 'text-slate-400 hover:text-white hover:bg-slate-700'
    }`;

  return (
    <div>
      {/* Editor Styles */}
      <style>{`
        .rte-editor { min-height: 120px; outline: none; color: #e2e8f0; font-size: 0.875rem; line-height: 1.6; padding: 12px 16px; }
        .rte-editor p { margin: 0 0 0.5rem 0; }
        .rte-editor strong { font-weight: 700; color: #f8fafc; }
        .rte-editor em { font-style: italic; }
        .rte-editor u { text-decoration: underline; }
        .rte-editor a { color: #f59e0b; text-decoration: underline; cursor: pointer; }
        .rte-editor ul { list-style: disc; padding-left: 1.25rem; margin: 0.5rem 0; }
        .rte-editor ol { list-style: decimal; padding-left: 1.25rem; margin: 0.5rem 0; }
        .rte-editor li { margin-bottom: 0.25rem; }
        .rte-editor h1, .rte-editor h2, .rte-editor h3, .rte-editor h4, .rte-editor h5, .rte-editor h6 { font-weight: 600; color: #fff; margin: 0.75rem 0 0.25rem; }
        .rte-editor h1 { font-size: 1.5rem; }
        .rte-editor h2 { font-size: 1.35rem; }
        .rte-editor h3 { font-size: 1.2rem; }
        .rte-editor h4 { font-size: 1.1rem; }
        .rte-editor h5 { font-size: 1rem; }
        .rte-editor h6 { font-size: 0.9rem; color: #94a3b8; }
        .rte-editor blockquote { border-left: 3px solid #f59e0b; padding-left: 1rem; color: #94a3b8; margin: 0.5rem 0; }
        .rte-editor[data-placeholder]:empty::before { content: attr(data-placeholder); color: #64748b; pointer-events: none; }
        .rte-editor p.is-editor-empty:first-child::before { content: attr(data-placeholder); color: #64748b; float: left; height: 0; pointer-events: none; }
      `}</style>

      {label && (
        <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
      )}

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 bg-slate-900 border border-slate-700 border-b-0 rounded-t-xl px-3 py-2">
        <button type="button" title="Bold" onClick={() => editor.chain().focus().toggleBold().run()}
          className={btn(editor.isActive('bold'), 'font-bold')}>B</button>

        <button type="button" title="Italic" onClick={() => editor.chain().focus().toggleItalic().run()}
          className={btn(editor.isActive('italic'), 'italic')}>I</button>

        <button type="button" title="Underline" onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={btn(editor.isActive('underline'), 'underline')}>U</button>

        <span className="w-px h-4 bg-slate-700 mx-1" />

        {/* H1 to H6 Header Buttons */}
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <button
            key={level}
            type="button"
            title={`Heading ${level}`}
            onClick={() => editor.chain().focus().toggleHeading({ level: level as any }).run()}
            className={btn(editor.isActive('heading', { level }), 'font-semibold')}
          >
            H{level}
          </button>
        ))}

        <span className="w-px h-4 bg-slate-700 mx-1" />

        <button type="button" title="Bullet List" onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={btn(editor.isActive('bulletList'))}>• List</button>

        <button type="button" title="Ordered List" onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={btn(editor.isActive('orderedList'))}>1. List</button>

        <span className="w-px h-4 bg-slate-700 mx-1" />

        {/* 🔗 Link button */}
        <button
          type="button"
          title="Add Link — select text first, then click this"
          onClick={() => setShowLinkInput(v => !v)}
          className={btn(editor.isActive('link'))}
        >
          🔗 Link
        </button>

        {editor.isActive('link') && (
          <button type="button" onClick={removeLink}
            className="px-2 py-1 rounded text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 transition">
            ✕ Remove Link
          </button>
        )}

        <span className="w-px h-4 bg-slate-700 mx-1" />

        <button type="button" title="Clear all formatting"
          onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
          className={btn(false)}>Clear</button>
      </div>

      {/* Link URL input panel */}
      {showLinkInput && (
        <div className="flex gap-2 items-center bg-slate-900 border-x border-slate-700 px-3 py-2">
          <span className="text-slate-400 text-xs shrink-0">URL:</span>
          <input
            type="text"
            value={linkUrl}
            onChange={e => setLinkUrl(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); applyLink(); } }}
            placeholder="https://example.com  or  /services"
            autoFocus
            className="flex-1 bg-slate-800 border border-slate-600 text-white placeholder-slate-500 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-amber-400"
          />
          <button type="button" onClick={applyLink}
            className="shrink-0 px-3 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-semibold hover:bg-amber-400 transition">
            Apply
          </button>
          <button type="button" onClick={() => { setShowLinkInput(false); setLinkUrl(''); }}
            className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-700 text-slate-300 text-xs hover:bg-slate-600 transition">
            Cancel
          </button>
        </div>
      )}

      {/* Editor content */}
      <div className="border border-slate-700 rounded-b-xl overflow-hidden bg-slate-800">
        <EditorContent editor={editor} />
      </div>

      {/* Helper hint */}
      <p className="text-slate-600 text-xs mt-1">
        💡 To add a link: <strong className="text-slate-500">select the text</strong> → click 🔗 Link → enter URL → Apply
      </p>
    </div>
  );
}
