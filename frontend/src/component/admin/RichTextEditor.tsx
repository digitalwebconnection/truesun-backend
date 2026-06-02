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

  const modules = useMemo(() => {
    const Quill = (ReactQuill as any).Quill;
    if (!Quill) {
      return {
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
      };
    }

    const Delta = Quill.import('delta');

    return {
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
      clipboard: {
        matchers: [
          ['STRONG', (node: any, delta: any) => {
            if (node.innerText && node.innerText.includes(':')) {
              return delta;
            }
            return delta.compose(new Delta().retain(delta.length(), { bold: true }));
          }],
          ['B', (node: any, delta: any) => {
            if (node.innerText && node.innerText.includes(':')) {
              return delta;
            }
            return delta.compose(new Delta().retain(delta.length(), { bold: true }));
          }],
          ['*', (node: any, delta: any) => {
            const fontWeight = node.style ? node.style.fontWeight : '';
            const isBold = fontWeight === 'bold' || fontWeight === 'bolder' || parseInt(fontWeight) >= 600;
            if (isBold) {
              if (node.innerText && node.innerText.includes(':')) {
                return delta;
              }
              return delta.compose(new Delta().retain(delta.length(), { bold: true }));
            }
            return delta;
          }],
          [Node.TEXT_NODE || 3, (node: any, delta: any) => {
            const text = node.data;
            if (typeof text !== 'string' || !text.includes(':')) return delta;

            const lines = text.split('\n');
            const newDelta = new Delta();
            let hasFormatted = false;

            for (let i = 0; i < lines.length; i++) {
              const line = lines[i];
              // Match short labels (up to 30 characters) before a colon (e.g., username: message)
              const match = line.match(/^([^:]{1,30}):(.*)$/);
              if (match) {
                hasFormatted = true;
                const label = match[1] + ':';
                const rest = match[2];
                newDelta.insert(label, { bold: true });
                if (rest) {
                  newDelta.insert(rest);
                }
              } else {
                newDelta.insert(line);
              }
              
              if (i < lines.length - 1) {
                newDelta.insert('\n');
              }
            }

            return hasFormatted ? newDelta : delta;
          }]
        ]
      }
    };
  }, []);

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
        .rich-text-editor .ql-editor h1 { font-size: 2.2rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #0f172a; }
        .rich-text-editor .ql-editor h2 { font-size: 1.8rem; font-weight: 700; margin-top: 1.25rem; margin-bottom: 0.6rem; color: #0f172a; }
        .rich-text-editor .ql-editor h3 { font-size: 1.5rem; font-weight: 600; margin-top: 1.1rem; margin-bottom: 0.5rem; color: #1e293b; }
        .rich-text-editor .ql-editor h4 { font-size: 1.25rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.4rem; color: #1e293b; }
        .rich-text-editor .ql-editor h5 { font-size: 1.1rem; font-weight: 600; margin-top: 0.9rem; margin-bottom: 0.3rem; color: #334155; }
        .rich-text-editor .ql-editor h6 { font-size: 1rem; font-weight: 600; margin-top: 0.8rem; margin-bottom: 0.3rem; color: #475569; }
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
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-label::before,
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-item::before {
          content: 'Normal';
        }
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
          content: 'Heading 1' !important;
        }
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
          content: 'Heading 2' !important;
        }
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
          content: 'Heading 3' !important;
        }
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
          content: 'Heading 4' !important;
        }
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
          content: 'Heading 5' !important;
        }
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
        .rich-text-editor .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
          content: 'Heading 6' !important;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
