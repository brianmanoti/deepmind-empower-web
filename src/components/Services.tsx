
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, BookOpen, Briefcase, Calendar, MessageSquare } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Career Coaching",
      description: "Personalized guidance to help you navigate Kenya's job market and identify your ideal career path.",
      features: ["1-on-1 Sessions", "Career Assessments", "Goal Setting", "Industry Insights"],
      color: "bg-blue-50 text-blue-600",
      price: "From KSh 3,000"
    },
    {
      icon: Users,
      title: "Youth Programs",
      description: "Comprehensive development programs designed specifically for Kenyan youth aged 18-25.",
      features: ["Leadership Training", "Soft Skills Development", "Networking Events", "Mentorship"],
      color: "bg-green-50 text-green-600",
      price: "KSh 8,000/month"
    },
    {
      icon: Briefcase,
      title: "Job Placement",
      description: "Direct connections with top Kenyan employers and international companies operating in Kenya.",
      features: ["CV Optimization", "Interview Prep", "Company Matching", "Follow-up Support"],
      color: "bg-purple-50 text-purple-600",
      price: "Success-based"
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Technical and professional skills training aligned with Kenya's growing industries.",
      features: ["Tech Bootcamps", "Digital Marketing", "Financial Literacy", "Entrepreneurship"],
      color: "bg-orange-50 text-orange-600",
      price: "KSh 12,000/course"
    },
    {
      icon: Calendar,
      title: "Workshop Series",
      description: "Regular workshops on trending topics affecting young professionals in Kenya.",
      features: ["Industry Trends", "Networking Skills", "Personal Branding", "Career Transitions"],
      color: "bg-indigo-50 text-indigo-600",
      price: "KSh 1,500/session"
    },
    {
      icon: MessageSquare,
      title: "Peer Support Groups",
      description: "Connect with like-minded Kenyan youth facing similar career challenges and aspirations.",
      features: ["Monthly Meetups", "Online Community", "Success Stories", "Resource Sharing"],
      color: "bg-pink-50 text-pink-600",
      price: "Free to join"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-900 text-sm font-medium">
            🎯 Our Impact Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Empowering <span className="text-indigo-900">Kenyan Youth</span> Through Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive career development services tailored for Kenya's dynamic job market and emerging opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-indigo-900 transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="text-sm font-semibold text-amber-600 mt-1">
                      {service.price}
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600 group-hover:shadow-lg transition-all duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-50 to-amber-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Career Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join over 2,500 Kenyan youth who have successfully launched their careers with our guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-900 to-indigo-700 hover:from-indigo-800 hover:to-indigo-600 px-8">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white px-8">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
