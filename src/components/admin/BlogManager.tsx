
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Image, Calendar, User } from "lucide-react";

export const BlogManager = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any>(null);

  const kenyanBlogs = [
    {
      id: 1,
      title: "Breaking Barriers: Success Stories from Kenyan Youth",
      author: "Sarah Wanjiku",
      category: "Success Stories",
      status: "published",
      date: "2024-01-15",
      excerpt: "Inspiring stories of young Kenyans who have overcome challenges to achieve their career goals.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800"
    },
    {
      id: 2,
      title: "Tech Opportunities in Nairobi: A Complete Guide",
      author: "James Mutua",
      category: "Career Guidance",
      status: "published",
      date: "2024-01-12",
      excerpt: "Everything you need to know about landing your first tech job in Kenya's Silicon Savannah.",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800"
    },
    {
      id: 3,
      title: "Building Your Personal Brand in the Kenyan Market",
      author: "Grace Njeri",
      category: "Professional Development",
      status: "draft",
      date: "2024-01-10",
      excerpt: "Learn how to stand out and build credibility in Kenya's competitive job market.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800"
    }
  ];

  const [blogs, setBlogs] = useState(kenyanBlogs);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would save to a database
    setShowForm(false);
    setEditingBlog(null);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In production, this would upload to a cloud storage service
      console.log("Uploading image:", file.name);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Post
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingBlog ? "Edit Blog Post" : "Create New Blog Post"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="blog-title">Title</Label>
                  <Input id="blog-title" placeholder="Blog post title..." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input id="author" placeholder="Author name..." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blog-category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="career-guidance">Career Guidance</SelectItem>
                      <SelectItem value="success-stories">Success Stories</SelectItem>
                      <SelectItem value="professional-development">Professional Development</SelectItem>
                      <SelectItem value="industry-insights">Industry Insights</SelectItem>
                      <SelectItem value="youth-empowerment">Youth Empowerment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="featured-image">Featured Image</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="featured-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="flex-1"
                  />
                  <Button type="button" variant="outline" size="sm">
                    <Image className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea id="excerpt" placeholder="Brief description of the post..." rows={2} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" placeholder="Write your blog post content here..." rows={10} required />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="featured-post" />
                  <Label htmlFor="featured-post">Featured Post</Label>
                </div>
                <div className="space-x-2">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingBlog ? "Update Post" : "Create Post"}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Post Details</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell>
                    <div className="flex items-start gap-3">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <div className="font-medium">{blog.title}</div>
                        <div className="text-sm text-gray-500 mt-1">{blog.excerpt}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {blog.author}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{blog.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {blog.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                      {blog.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingBlog(blog);
                          setShowForm(true);
                        }}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(blog.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
