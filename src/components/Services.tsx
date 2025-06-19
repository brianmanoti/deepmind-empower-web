
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, TrendingUp, Calendar, MessageCircle, Target } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <MessageCircle className="h-8 w-8 text-indigo-900" />,
      title: "1-on-1 Career Coaching",
      description: "Personalized guidance to discover your passion and build a strategic career path.",
      features: ["Goal Setting", "Skills Assessment", "Career Planning", "Interview Prep"]
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-900" />,
      title: "Youth Programs",
      description: "Comprehensive workshops and mentorship programs for young professionals.",
      features: ["Leadership Training", "Soft Skills", "Networking", "Personal Branding"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-900" />,
      title: "Job Insights",
      description: "Access to exclusive job opportunities and industry insights from our partners.",
      features: ["Job Matching", "Industry Trends", "Salary Insights", "Company Culture"]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-900" />,
      title: "Resource Library",
      description: "Curated content, tools, and resources to accelerate your professional growth.",
      features: ["Career Guides", "Templates", "Video Courses", "Webinars"]
    },
    {
      icon: <Calendar className="h-8 w-8 text-indigo-900" />,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule with our expert career coaches.",
      features: ["Online Sessions", "Flexible Hours", "Multiple Coaches", "Follow-up Support"]
    },
    {
      icon: <Target className="h-8 w-8 text-indigo-900" />,
      title: "Success Tracking",
      description: "Monitor your progress and achievements with our comprehensive tracking system.",
      features: ["Progress Reports", "Goal Tracking", "Achievement Badges", "Performance Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-indigo-900">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive career development solutions designed to unlock your potential and accelerate your professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-amber-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-indigo-900 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white transition-all duration-200">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
