
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  // Simple admin access check (in production, this would be properly authenticated)
  const handleAdminAccess = () => {
    const password = prompt("Enter admin password:");
    if (password === "admin123") {
      setShowAdmin(true);
    } else {
      alert("Invalid password");
    }
  };

  // Blog data from admin section
  const blogs = [
    {
      id: 1,
      title: "Breaking Barriers: Success Stories from Kenyan Youth",
      author: "Sarah Wanjiku",
      category: "Success Stories", 
      status: "published",
      date: "2024-01-15",
      excerpt: "Inspiring stories of young Kenyans who have overcome challenges to achieve their career goals.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800",
      content: "In the heart of Nairobi, young professionals are breaking barriers and creating opportunities that were once thought impossible. From tech startups to creative industries, Kenyan youth are leading the charge in innovation and entrepreneurship. This article explores the journeys of several young Kenyans who have transformed their dreams into reality, overcoming obstacles and inspiring others along the way."
    },
    {
      id: 2,
      title: "Tech Opportunities in Nairobi: A Complete Guide",
      author: "James Mutua",
      category: "Career Guidance",
      status: "published", 
      date: "2024-01-12",
      excerpt: "Everything you need to know about landing your first tech job in Kenya's Silicon Savannah.",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800",
      content: "Nairobi has earned its reputation as the Silicon Savannah of Africa, with countless opportunities for tech enthusiasts. This comprehensive guide covers everything from the most in-demand skills to the best companies to work for, salary expectations, and how to navigate the application process. Whether you're a fresh graduate or looking to transition into tech, this guide provides the roadmap you need."
    },
    {
      id: 3,
      title: "Building Your Personal Brand in the Kenyan Market",
      author: "Grace Njeri",
      category: "Professional Development",
      status: "published",
      date: "2024-01-10", 
      excerpt: "Learn how to stand out and build credibility in Kenya's competitive job market.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800",
      content: "In today's competitive job market, having the right skills isn't enough. You need to build a personal brand that sets you apart from the crowd. This article explores practical strategies for building your professional reputation, leveraging social media, networking effectively, and positioning yourself as an expert in your field within the Kenyan context."
    }
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  const publishedBlogs = blogs.filter(blog => blog.status === 'published');

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToList = () => {
    setSelectedBlog(null);
  };

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-white">
        <Header onAdminClick={handleAdminAccess} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button onClick={handleBackToList} variant="outline" className="mb-6">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Back to Blog
          </Button>
          
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="outline" className="text-sm">
                  {selectedBlog.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {selectedBlog.title}
                </h1>
                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {selectedBlog.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {selectedBlog.date}
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed">
                  {selectedBlog.excerpt}
                </p>
                <div className="mt-8 text-gray-800 leading-relaxed">
                  {selectedBlog.content}
                </div>
              </div>
            </div>
          </article>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onAdminClick={handleAdminAccess} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-amber-400/20 rounded-full text-amber-300 text-sm font-medium mb-6">
              📝 Insights & Stories
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Career <span className="text-amber-400">Insights</span> & Success Stories
            </h1>
            <p className="text-xl text-indigo-100">
              Discover inspiring stories, career guidance, and professional development insights from Kenya's leading career experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedBlogs.map((blog) => (
              <Card key={blog.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-indigo-900">
                      {blog.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-900 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {blog.date}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => handleReadMore(blog)}
                      variant="outline" 
                      className="w-full group-hover:bg-indigo-900 group-hover:text-white group-hover:border-indigo-900 transition-colors"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
