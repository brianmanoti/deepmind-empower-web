import { useState } from "react";
import { Layout } from "@/components/Layout";
import { AdminPanel } from "@/components/admin/AdminPanel";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  imageUrl?: string;
  category: string;
  author: string;
  createdAt: Date;
}

const mockBlogs: Blog[] = [
  {
    id: 1,
    title: "Empowering Youth Through Tech Education",
    excerpt: "Discover how Deepmind Concepts is transforming lives by providing access to quality tech education and mentorship.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    category: "Education",
    author: "Jane Doe",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "The Future of Work in Kenya: Opportunities and Challenges",
    excerpt: "An in-depth look at the evolving job market in Kenya and how young professionals can prepare for the future.",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c522?w=400&h=200&fit=crop",
    category: "Career",
    author: "John Smith",
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Building a Strong Online Presence for Job Seekers",
    excerpt: "Practical tips and strategies for creating a compelling online presence that attracts potential employers.",
    imageUrl: "https://images.unsplash.com/photo-1487059255767-94b9c1405ee6?w=400&h=200&fit=crop",
    category: "Career",
    author: "Alice Johnson",
    createdAt: new Date(),
  },
];

const Blog = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <Layout onAdminClick={() => setShowAdmin(true)}>
      <div className="min-h-screen bg-gray-50">
        {showAdmin && (
          <AdminPanel onClose={() => setShowAdmin(false)} />
        )}
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, tips, and stories from our journey of empowering Kenyan youth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockBlogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={blog.imageUrl || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop"} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {blog.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" 
                      alt={blog.author}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <span className="text-sm text-gray-700">By {blog.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
