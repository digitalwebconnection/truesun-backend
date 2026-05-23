import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, AlertCircle, RefreshCw } from "lucide-react";
import { apiUrl } from "../../lib/api";
import { fetchWithRetry } from "../../lib/fetchWithRetry";
import { cacheGet, cacheGetStale, cacheSet } from "../../lib/dataCache";

const CACHE_KEY = "blogs_list";

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

const BlogPage = () => {
  // Immediately seed state from stale cache so something renders on first paint
  const [blogs, setBlogs] = useState<Blog[]>(() => cacheGetStale<Blog[]>(CACHE_KEY) ?? []);
  const [loading, setLoading] = useState(() => {
    // If we have ANY cached data (even stale) we don't show full skeleton
    return (cacheGetStale<Blog[]>(CACHE_KEY) ?? []).length === 0;
  });
  const [error, setError] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const stale = cacheGetStale<Blog[]>(CACHE_KEY) ?? [];
    const fresh = cacheGet<Blog[]>(CACHE_KEY); // null if expired

    // If cache is still fresh, no need to re-fetch
    if (fresh && fresh.length > 0) {
      setBlogs(fresh);
      setLoading(false);
      return;
    }

    // We have stale data → show it immediately, refresh silently in background
    if (stale.length > 0) {
      setBlogs(stale);
      setLoading(false);
      setIsRefreshing(true);
    }

    fetchWithRetry(apiUrl("/api/blogs"))
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setBlogs(data.data);
          cacheSet(CACHE_KEY, data.data);
          setError("");
        } else {
          if (stale.length === 0) setError(data.message ?? "Failed to load blogs.");
        }
      })
      .catch(() => {
        if (stale.length === 0) setError("Could not reach server. Please try again.");
      })
      .finally(() => {
        setLoading(false);
        setIsRefreshing(false);
      });
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <h1 className="text-5xl text-center font-bold text-[#FC763A]">Blogs</h1>
          {isRefreshing && (
            <RefreshCw
              size={22}
              className="text-[#FC763A] animate-spin mt-1"
            />
          )}
        </div>

        {loading ? (
          // Full skeleton — shown only on very first visit with no cache
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-white shadow-md h-full flex flex-col overflow-hidden animate-pulse"
              >
                <div className="h-56 w-full bg-gray-200" />
                <div className="p-6 flex flex-col grow gap-3">
                  <div className="flex justify-between items-center">
                    <div className="h-6 w-20 bg-gray-200 rounded-full" />
                    <div className="h-4 w-16 bg-gray-200 rounded" />
                  </div>
                  <div className="h-8 w-full bg-gray-200 rounded mt-2" />
                  <div className="h-8 w-3/4 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : error && blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 px-4 text-center">
            <AlertCircle className="text-red-500" size={44} />
            <p className="text-red-600 font-medium text-lg">{error}</p>
            <button
              onClick={() => {
                hasFetched.current = false;
                setError("");
                setLoading(true);
              }}
              className="mt-2 px-6 py-2 bg-[#FC763A] text-white rounded-full font-semibold hover:bg-[#e0652e] transition"
            >
              Retry
            </button>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No blog posts found yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {blogs.map((post) => (
              <Link
                to={`/Knowledgwe/${post.slug || post._id}`}
                key={post._id}
                className="group"
              >
                <div className="rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="bg-slate-100 text-slate-800 font-semibold px-3 py-1 rounded-full text-[13px]">
                        {post.categories}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm gap-1.5">
                        <Clock size={15} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3 leading-snug group-hover:text-[#FC763A] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPage;