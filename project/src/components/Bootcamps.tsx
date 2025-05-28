import React from 'react';
import { ArrowRight, Laptop, Users, Calendar, BookOpen } from 'lucide-react';

const Bootcamps: React.FC = () => {
  const bootcamps = [
    {
      title: "Web Development Bootcamp",
      duration: "8 weeks",
      format: "Hybrid",
      icon: Laptop,
    },
    {
      title: "Product Management",
      duration: "6 weeks",
      format: "In-person",
      icon: Users,
    },
    {
      title: "Data Science Fundamentals",
      duration: "10 weeks",
      format: "Hybrid",
      icon: BookOpen,
    }
  ];

  return (
    <section id="bootcamps" className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Hands-on <span className="text-green-500">Bootcamps</span> & Real-World <span className="text-green-500">Internships</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering practical education through curated bootcamps and internship programs 
            led by industry experts. No pre-recorded courses — just real mentorship and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {bootcamps.map((bootcamp, index) => {
            const Icon = bootcamp.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-3 bg-green-500"></div>
                <div className="p-6">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{bootcamp.title}</h3>
                  
                  <div className="flex items-center mb-1 mt-4">
                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{bootcamp.duration}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Users className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{bootcamp.format}</span>
                  </div>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-green-500 hover:text-green-600 font-medium mt-2"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students in internship" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Industry-Integrated Internships
              </h3>
              <p className="text-gray-600 mb-6">
                Our internship programs connect students with leading companies, offering real-world 
                experience that builds practical skills and industry connections.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Mentorship from Industry Leaders</p>
                    <p className="text-sm text-gray-600">Work directly with professionals from top companies</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Real Project Experience</p>
                    <p className="text-sm text-gray-600">Work on actual business challenges, not simulations</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Career Advancement</p>
                    <p className="text-sm text-gray-600">Build your portfolio and network with potential employers</p>
                  </div>
                </li>
              </ul>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Explore Internship Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bootcamps;