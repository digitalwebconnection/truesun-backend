import React, { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { apiUrl } from '../../lib/api';

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder }) => {
  const quillRef = useRef<ReactQuill>(null);

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        const formData = new FormData();
        formData.append('image', file);

        try {
          const res = await fetch(apiUrl('/api/upload'), {
            method: 'POST',
            body: formData,
          });
          const data = await res.json();
          if (data.success && data.url) {
            const quill = quillRef.current?.getEditor();
            if (quill) {
              const range = quill.getSelection();
              quill.insertEmbed(range ? range.index : 0, 'image', data.url);
            }
          }
        } catch (error) {
          console.error('Image upload failed:', error);
        }
      }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link', 'image'],
        ['clean'],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  }), []);

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'color', 'background',
    'link', 'image',
  ];

  return (
    <div className="rich-text-editor">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        style={{ height: '300px', marginBottom: '50px' }}
      />
      <style>{`
        .rich-text-editor {
          margin-bottom: 2rem;
        }
        .rich-text-editor .ql-container {
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          border: 1px solid #e2e8f0 !important;
          font-family: 'Inter', system-ui, sans-serif;
          min-height: 300px;
        }
        .rich-text-editor .ql-toolbar {
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          border: 1px solid #e2e8f0 !important;
          border-bottom: none !important;
          background: #f8fafc;
          padding: 0.75rem !important;
        }
        .rich-text-editor .ql-editor {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #1e293b;
          padding: 1.25rem !important;
        }
        .rich-text-editor .ql-editor.ql-blank::before {
          color: #94a3b8;
          font-style: normal;
          left: 1.25rem !important;
        }
        .rich-text-editor .ql-snow.ql-toolbar button:hover,
        .rich-text-editor .ql-snow .ql-toolbar button:hover,
        .rich-text-editor .ql-snow.ql-toolbar button:focus,
        .rich-text-editor .ql-snow .ql-toolbar button:focus,
        .rich-text-editor .ql-snow.ql-toolbar button.ql-active,
        .rich-text-editor .ql-snow .ql-toolbar button.ql-active,
        .rich-text-editor .ql-snow.ql-toolbar .ql-picker-label:hover,
        .rich-text-editor .ql-snow .ql-toolbar .ql-picker-label:hover,
        .rich-text-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
        .rich-text-editor .ql-snow .ql-toolbar .ql-picker-label.ql-active,
        .rich-text-editor .ql-snow.ql-toolbar .ql-picker-item:hover,
        .rich-text-editor .ql-snow .ql-toolbar .ql-picker-item:hover,
        .rich-text-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
        .rich-text-editor .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
          color: #FC763A !important;
        }
        .rich-text-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
        .rich-text-editor .ql-snow .ql-toolbar button:hover .ql-stroke,
        .rich-text-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
        .rich-text-editor .ql-snow .ql-toolbar button.ql-active .ql-stroke,
        .rich-text-editor .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
        .rich-text-editor .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
        .rich-text-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
        .rich-text-editor .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke {
          stroke: #FC763A !important;
        }
        .rich-text-editor .ql-snow.ql-toolbar button:hover .ql-fill,
        .rich-text-editor .ql-snow .ql-toolbar button:hover .ql-fill,
        .rich-text-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
        .rich-text-editor .ql-snow .ql-toolbar button.ql-active .ql-fill,
        .rich-text-editor .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
        .rich-text-editor .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
        .rich-text-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
        .rich-text-editor .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill {
          fill: #FC763A !important;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
