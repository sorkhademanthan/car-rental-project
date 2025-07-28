import { useParams, Link } from "react-router-dom";
import posts from "../data/blogPosts";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Post Not Found</h2>
        <Link to="/blog" className="text-blue-600 underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-blue-800 mb-2">{post.title}</h1>
          <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <Link to="/blog" className="inline-block mt-8 text-blue-600 font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
