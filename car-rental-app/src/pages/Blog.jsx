const posts = [
  {
    title: "5 Tips for Renting a Car in India",
    excerpt: "Learn how to get the best deals and avoid common pitfalls when renting a car.",
    date: "2024-06-01",
  },
  {
    title: "How to Choose the Right Car for Your Trip",
    excerpt: "From hatchbacks to SUVs, find out which car suits your journey best.",
    date: "2024-05-20",
  },
];

export default function Blog() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Blog & Guides</h2>
      <div className="space-y-6">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-blue-700 mb-2">{post.title}</h3>
            <p className="text-gray-500 text-sm mb-2">{post.date}</p>
            <p className="text-gray-700">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
