import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import posts from "../data/blogPosts";

export default function Blog() {
	return (
		<section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 flex flex-col items-center">
			<div className="w-full max-w-4xl mx-auto text-center mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 drop-shadow">
					VroomHub Blog & Guides
				</h1>
				<p className="text-lg md:text-xl text-gray-700 mb-2">
					Tips, stories, and inspiration for your next journey.
				</p>
			</div>
			<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
				{posts.map((post) => (
					<div
						key={post.id}
						className="bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-200 border border-blue-100"
					>
						<img
							src={post.image}
							alt={post.title}
							className="w-full h-48 object-cover"
						/>
						<div className="flex-1 flex flex-col p-6">
							<h3 className="text-xl font-bold text-blue-800 mb-2">
								{post.title}
							</h3>
							<p className="text-gray-600 mb-4 flex-1">
								{post.excerpt}
							</p>
							<div className="flex items-center justify-between text-sm text-gray-400 mb-4">
								<span>{post.author}</span>
								<span>{post.date}</span>
							</div>
							<Link
								to={`/blog/${post.id}`}
								className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline mt-auto"
							>
								Read More <FaArrowRight />
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

