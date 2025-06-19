
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Job Insights", href: "#jobs" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Career Coaching", href: "#" },
        { name: "Youth Programs", href: "#" },
        { name: "Job Matching", href: "#" },
        { name: "Skills Assessment", href: "#" },
        { name: "Interview Prep", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Career Guides", href: "#" },
        { name: "Templates", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "FAQ", href: "#" }
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 relative">
                  <div className="absolute inset-0">
                    <div className="w-2 h-2 bg-amber-400 rounded-full absolute top-0 left-0"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full absolute top-0 right-0"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full absolute bottom-0 left-1"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full absolute bottom-0 right-1"></div>
                    <div className="w-1 h-1 bg-white rounded-full absolute top-2 left-2"></div>
                    <div className="w-1 h-1 bg-white rounded-full absolute top-2 right-2"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Deepmind Concepts</h3>
                <p className="text-sm text-gray-400">Clarity. Strategy. Empowerment.</p>
              </div>
            </div>
            
            <p className="text-gray-300 max-w-md">
              Empowering youth through strategic career guidance, personalized coaching, and exclusive opportunities with our trusted partner network.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>hello@deepmindconcepts.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>+2547123456789</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Deepmind Concepts. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
