import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Loader2, AlertCircle } from "lucide-react";
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

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(apiUrl("/api/blogs"));
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <Loader2 className="animate-spin text-[#FC763A]" size={40} />
        <p className="text-gray-500 font-medium">Loading our latest stories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3 px-4 text-center">
        <AlertCircle className="text-red-500" size={40} />
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-5xl text-center font-bold mb-8 text-[#FC763A]"> Blogs</h1>

      {blogs.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">No blog posts found yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {blogs.map((post) => (
            <Link to={`/Knowledgwe/${post.slug || post._id}`} key={post._id} className="group">
              <div className="rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">

                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
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

                  <p className="text-slate-600 text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;