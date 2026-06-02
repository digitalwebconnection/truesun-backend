import { useParams, Link, useNavigate } from "react-router-dom";
import LeadPopup from "../../component/LeadPopup";
import { useState, useEffect, useRef } from "react";
import { Clock, Calendar, ArrowLeft, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { Helmet } from "react-helmet";
import { apiUrl, getImageUrl } from "../../lib/api";
import { fetchWithRetry } from "../../lib/fetchWithRetry";
import { cacheGetStale, cacheSet } from "../../lib/dataCache";
import { staticBlogs } from "../../lib/staticBlogs";

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
  meta?: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    longContent: string;
    schema: string;
  };
}

const BlogDetails = () => {
  const { slug: slugParam } = useParams();
  const slug = slugParam ?? "";

  // Cache key is unique per slug so each post is cached separately
  const cacheKey = `blog_detail_${slug}`;

  // Seed state instantly from stale cache — returning users see content on first paint
  const [blog, setBlog] = useState<Blog | null>(() => cacheGetStale<Blog>(cacheKey));
  const [loading, setLoading]       = useState(() => !cacheGetStale<Blog>(cacheKey));
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError]           = useState("");
  const [openLeadPopup, setOpenLeadPopup] = useState(false);
  const hasFetched = useRef<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset when slug changes (navigating between blog posts)
    if (hasFetched.current === slug) return;
    hasFetched.current = slug;

    // Check if the blog was deleted by the admin
    const deletedRaw = localStorage.getItem("deleted_blog_slugs");
    const deletedSlugs: string[] = deletedRaw ? JSON.parse(deletedRaw) : [];
    if (deletedSlugs.includes(slug || "")) {
      // Blog was deleted, navigate back to list
      navigate('/Knowledgwe');
      return;
    }

    // Early exit if slug is missing
  if (!slug) {
    setError('Blog not found');
    setLoading(false);
    return;
  }
    const stale = cacheGetStale<Blog>(cacheKey);
    const staticMatch = staticBlogs.find((sb) => sb.slug === slug);
    const initialBlog = stale || staticMatch;

    if (initialBlog) {
      setBlog(initialBlog as any);
      setLoading(false);
    }

    // Refresh in background to ensure it is still active and up-to-date
    setIsRefreshing(!!initialBlog);
    if (!initialBlog) setLoading(true);

    const isObjectId = /^[a-f\d]{24}$/i.test(slug || '');
    const endpoint   = isObjectId
      ? apiUrl(`/api/blogs/${slug}`)
      : apiUrl(`/api/blogs/slug/${slug}`);

    fetchWithRetry(endpoint, { cache: "no-store" })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBlog(data.data);
          cacheSet(cacheKey, data.data);
          setError("");
        } else {
          // If the server explicitly says success=false (e.g. blog not in db or deleted)
          if (staticMatch) {
            // Keep displaying the static dummy content since it's a known static blog
            setBlog(staticMatch as any);
            setError("");
          } else {
            // It's a genuine 404 for a dynamic blog
            localStorage.removeItem(`ts_cache_${cacheKey}`);
            setBlog(null);
            setError(data.message ?? "Blog post not found.");
          }
        }
      })
      .catch(() => {
        if (!initialBlog) {
          setError("Failed to load blog post. Please try again later.");
        }
      })
      .finally(() => {
        setLoading(false);
        setIsRefreshing(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Helmet>
        <title>{blog.meta?.title || blog.title || "Blog Post"}</title>
        {blog.meta?.description && <meta name="description" content={blog.meta.description} />}
        {blog.meta?.keywords && <meta name="keywords" content={blog.meta.keywords} />}
        {blog.meta?.canonical && <link rel="canonical" href={blog.meta.canonical} />}
        {blog.meta?.schema && (
          <script type="application/ld+json">
            {blog.meta.schema.replace(/<script.*?>|<\/script>/gi, '').trim()}
          </script>
        )}
      </Helmet>

      <div className="flex items-center justify-between mt-12 mb-8">
        <Link
          to="/Knowledgwe"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm w-fit"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </Link>
        {isRefreshing && (
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
            <RefreshCw size={14} className="animate-spin text-[#FC763A]" />
            Refreshing…
          </span>
        )}
      </div>

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

      {(() => {
        const staticMatch = staticBlogs.find((sb) => sb.slug === blog.slug);
        const displayImage = getImageUrl(staticMatch ? staticMatch.image : blog.image);
        return displayImage ? (
          <img
            src={displayImage}
            alt={blog.title}
            className="mt-8 w-full md:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        ) : null;
      })()}

      <div
        className="mt-12 text-gray-800 text-lg md:text-xl blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {blog.meta?.longContent && (
        <div
          className="hidden"
          dangerouslySetInnerHTML={{ __html: blog.meta.longContent }}
        />
      )}

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
        .blog-content {
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
          text-align: left;
          line-height: 1.8;
        }
        .blog-content h1 { font-size: 2.5rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; line-height: 1.2; text-align: left; }
        .blog-content h2 { font-size: 2rem; font-weight: 700; margin-top: 1.75rem; margin-bottom: 0.85rem; line-height: 1.25; text-align: left; }
        .blog-content h3 { font-size: 1.75rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; text-align: left; }
        .blog-content h4 { font-size: 1.5rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.65rem; text-align: left; }
        .blog-content h5 { font-size: 1.25rem; font-weight: 600; margin-top: 1.1rem; margin-bottom: 0.5rem; text-align: left; }
        .blog-content h6 { font-size: 1.1rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.4rem; text-align: left; }
        .blog-content p { margin-bottom: 1.25rem; line-height: 1.8; text-align: left; white-space: normal; }
        .blog-content ul { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.25rem; }
        .blog-content ol { list-style-type: decimal; margin-left: 1.5rem; margin-bottom: 1.25rem; }
        .blog-content li { margin-bottom: 0.5rem; line-height: 1.8; }
        .blog-content img { max-width: 100%; height: auto; border-radius: 12px; margin: 2rem 0; }
        .blog-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .blog-content table td, .blog-content table th { border: 1px solid #e2e8f0; padding: 0.75rem; text-align: left; }
        .blog-content a { color: #FC763A; text-decoration: underline; }
        .blog-content blockquote { border-left: 4px solid #FC763A; padding-left: 1.5rem; font-style: italic; margin: 1.5rem 0; color: #475569; }
        .blog-content pre { background: #f1f5f9; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1.5rem 0; }
        .blog-content iframe, .blog-content video { max-width: 100%; border-radius: 12px; margin: 2rem 0; }
        
        @media (max-width: 768px) {
          .blog-content h1 { font-size: 2rem; }
          .blog-content h2 { font-size: 1.75rem; }
          .blog-content h3 { font-size: 1.5rem; }
          .blog-content h4 { font-size: 1.3rem; }
          .blog-content h5 { font-size: 1.15rem; }
          .blog-content h6 { font-size: 1.05rem; }
          .blog-content { font-size: 1.125rem; }
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;
