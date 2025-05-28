import React from "react";
import { INSTITUTIONS } from "../utils/constants";

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by{" "}
            <span className="text-green-500">Leading Institutions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've empowered over 1,00,000 students across colleges and schools
            in India, providing them with the skills and knowledge needed for
            success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {INSTITUTIONS.map((institution, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3">
                <img
                  src={institution.logo}
                  alt={institution.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-center text-gray-700 font-medium">
                {institution.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 max-w-5xl mx-auto">
          <div className="bg-green-50 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                  100,000+
                </p>
                <p className="text-gray-700 font-medium">Students Trained</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                  10+
                </p>
                <p className="text-gray-700 font-medium">
                  Partner Institutions
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                  99%
                </p>
                <p className="text-gray-700 font-medium">
                  Student Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <blockquote className="italic text-lg md:text-xl text-gray-600">
            "MindFulEdu has transformed how our students approach learning.
            Their bootcamps and internship programs provide practical skills
            that complement our academic curriculum perfectly."
          </blockquote>
          <div className="mt-4">
            <p className="font-medium text-gray-800">Dr. R. SAMSON RAVINDRAN</p>
            <p className="text-sm text-gray-600">
              Director, Mahendra Institutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
