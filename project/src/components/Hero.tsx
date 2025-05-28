import React from "react";
import { ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-green-500 opacity-10" />
        <div className="h-full w-full bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Empowering Students Through{" "}
            <span className="text-green-500">Expert-Guided Learning</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Join 1,00,000+ learners from top institutions across India
          </p>

          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <a
              href="#bootcamps"
              className="relative inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Bootcamps & Internships
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Hero illustration */}
          <div className="mt-12 relative">
            <div className="aspect-[16/9] max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Students learning together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Floating stats */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4 md:space-x-8">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-green-500 font-bold text-xl md:text-2xl">
                  100K+
                </p>
                <p className="text-gray-700 text-xs md:text-sm">Students</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-green-500 font-bold text-xl md:text-2xl">
                  10+
                </p>
                <p className="text-gray-700 text-xs md:text-sm">Institutions</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-green-500 font-bold text-xl md:text-2xl">
                  30+
                </p>
                <p className="text-gray-700 text-xs md:text-sm">Bootcamps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
