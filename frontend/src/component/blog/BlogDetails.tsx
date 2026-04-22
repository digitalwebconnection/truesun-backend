import { useParams, Link } from "react-router-dom";
import LeadPopup from "../../component/LeadPopup";
import { useState, useEffect } from "react";
import { Clock, Calendar, ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import { apiUrl } from "../../lib/api";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
}

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openLeadPopup, setOpenLeadPopup] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // If the URL param looks like a MongoDB ObjectId (24-char hex), use the /:id endpoint.
        // Otherwise use the slug endpoint for clean URLs.
        const isObjectId = /^[a-f\d]{24}$/i.test(slug || '');
        const endpoint = isObjectId
          ? apiUrl(`/api/blogs/${slug}`)
          : apiUrl(`/api/blogs/slug/${slug}`);

        const res = await fetch(endpoint);
        const data = await res.json();
        if (data.success) {
          setBlog(data.data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] gap-3">
        <Loader2 className="animate-spin text-[#FC763A]" size={40} />
        <p className="text-gray-500 font-medium">Loading post...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] gap-3 text-center px-4">
        <AlertCircle className="text-red-500" size={40} />
        <h2 className="text-2xl font-bold text-slate-800">{error || "Blog post not found"}</h2>
        <Link to="/Knowledgwe" className="text-[#FC763A] font-semibold hover:underline mt-2">Back to all blogs</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 pb-20 relative">

      <Link 
        to="/Knowledgwe" 
        className="inline-flex items-center gap-2 px-4 mt-12 py-2 mb-8 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm w-fit"
      >
        <ArrowLeft size={16} />
        Back to Blogs
      </Link>

      <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600 text-sm mb-5">
        <span className="bg-slate-100 px-3 py-1 border rounded-full text-slate-800 font-semibold">{blog.categories}</span>
        <div className="flex items-center gap-1.5">
           <Calendar size={15} />
           <span>{blog.date}</span>
        </div>
        <div className="flex items-center gap-1.5">
           <Clock size={15} />
           <span>{blog.readTime}</span>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900 leading-tight">{blog.title}</h1>

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="mt-8 w-full md:h-[500px] object-cover rounded-2xl shadow-lg"
        />
      )}

      <div 
        className="mt-12 text-gray-800 text-lg md:text-xl leading-relaxed text-justify blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* CTA */}
      <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-2xl text-center shadow-sm">
        <h3 className="text-2xl font-bold mb-4 text-slate-900">Ready to Switch to Solar?</h3>
        <p className="text-slate-600 mb-6 max-w-lg mx-auto">Take control of your energy costs and join the sustainable revolution today with TrueSun's expert solutions.</p>
        <button onClick={() => setOpenLeadPopup(true)}
          className="px-8 py-3 bg-[#FC763A] hover:bg-[#e0652e] transition rounded-full text-white font-semibold shadow-md inline-block">
          Get Free Consultation
        </button>
      </div>

      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}

      <style>{`
        .blog-content h1 { font-size: 2.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; }
        .blog-content h2 { font-size: 2rem; font-weight: 700; margin-top: 1.75rem; margin-bottom: 0.85rem; }
        .blog-content h3 { font-size: 1.75rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; }
        .blog-content h4 { font-size: 1.5rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.65rem; }
        .blog-content h5 { font-size: 1.25rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem; }
        .blog-content h6 { font-size: 1.1rem; font-weight: 600; margin-top: 0.75rem; margin-bottom: 0.5rem; }
        .blog-content p { margin-bottom: 1.25rem; }
        .blog-content ul { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.25rem; }
        .blog-content ol { list-style-type: decimal; margin-left: 1.5rem; margin-bottom: 1.25rem; }
        .blog-content img { max-width: 100%; height: auto; border-radius: 12px; margin: 2rem 0; }
        .blog-content a { color: #FC763A; text-decoration: underline; }
        .blog-content blockquote { border-left: 4px solid #FC763A; padding-left: 1.5rem; font-style: italic; margin: 1.5rem 0; color: #475569; }
      `}</style>
    </div>
  );
};

export default BlogDetails;