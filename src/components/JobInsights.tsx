
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Clock, DollarSign } from "lucide-react";

export const JobInsights = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technology", "Marketing", "Finance", "Healthcare", "Education"];

  const jobs = [
    {
      title: "Frontend Developer Intern",
      company: "TechStart Solutions",
      location: "Remote",
      type: "Internship",
      salary: "$2,000/month",
      category: "Technology",
      description: "Join our dynamic team to build cutting-edge web applications.",
      logo: "🚀",
      featured: true
    },
    {
      title: "Digital Marketing Assistant",
      company: "Growth Agency",
      location: "Lagos, Nigeria",
      type: "Part-time",
      salary: "$1,500/month",
      category: "Marketing",
      description: "Help drive digital marketing campaigns for emerging brands.",
      logo: "📈",
      featured: false
    },
    {
      title: "Junior Data Analyst",
      company: "DataCorp",
      location: "Abuja, Nigeria",
      type: "Full-time",
      salary: "$3,000/month",
      category: "Technology",
      description: "Analyze data trends and create insightful reports.",
      logo: "📊",
      featured: true
    },
    {
      title: "Content Writer",
      company: "Creative Hub",
      location: "Remote",
      type: "Freelance",
      salary: "$800/month",
      category: "Marketing",
      description: "Create engaging content for various digital platforms.",
      logo: "✍️",
      featured: false
    },
    {
      title: "Financial Planning Intern",
      company: "FinanceMax",
      location: "Port Harcourt, Nigeria",
      type: "Internship",
      salary: "$1,200/month",
      category: "Finance",
      description: "Learn financial planning and analysis in a supportive environment.",
      logo: "💰",
      featured: false
    },
    {
      title: "UI/UX Design Intern",
      company: "DesignFlow",
      location: "Remote",
      type: "Internship",
      salary: "$1,800/month",
      category: "Technology",
      description: "Design beautiful and intuitive user experiences.",
      logo: "🎨",
      featured: true
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="jobs" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Job <span className="text-indigo-900">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exclusive opportunities from our trusted partner network and take the next step in your career.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search jobs or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-gray-200 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-indigo-900 hover:bg-indigo-800" 
                  : "border-gray-300 text-gray-600 hover:border-indigo-900 hover:text-indigo-900"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${job.featured ? 'ring-2 ring-amber-400 relative' : ''}`}>
              {job.featured && (
                <div className="absolute -top-2 -right-2 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">
                  Featured
                </div>
              )}
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-amber-100 rounded-lg flex items-center justify-center text-xl">
                      {job.logo}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900 group-hover:text-indigo-900 transition-colors">
                        {job.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 font-medium">{job.company}</p>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-600">
                  {job.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {job.salary}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-900">
                    {job.category}
                  </Badge>
                  <Button size="sm" className="bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white px-8 py-4">
            View All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};
