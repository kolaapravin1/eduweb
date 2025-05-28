import React from "react";
import {
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FOOTER_LINKS, SOCIAL_MEDIA } from "../utils/constants";

const Footer: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Facebook":
        return <Facebook className="h-5 w-5" />;
      case "Twitter":
        return <Twitter className="h-5 w-5" />;
      case "Instagram":
        return <Instagram className="h-5 w-5" />;
      case "Linkedin":
        return <Linkedin className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer id="footer" className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-green-400 mr-2" />
              <span className="text-xl font-bold">MindFulEdu</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering students through expert-guided learning and real-world
              experiences.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_MEDIA.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-700 hover:bg-green-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.about.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-2" />
                <a
                  href="mailto:support@mindfulai.co.in"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  support@mindfulai.co.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <a
                  href="tel:+916374067329"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-2 mt-1" />
                <span className="text-gray-300">
                  SNS Kalvi Nagar, <br />
                  Coimbatore, Tamil Nadu, <br />
                  India - 641107
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} MindFulEdu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
