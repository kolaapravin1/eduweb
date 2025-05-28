import React from 'react';
import { GraduationCap, Video } from 'lucide-react';
import { FEATURES } from '../utils/constants';

const Features: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-12 h-12 text-green-500 mb-4" />;
      case 'Video':
        return <Video className="w-12 h-12 text-green-500 mb-4" />;
      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How We <span className="text-green-500">Transform</span> Learning
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our approach to education combines expert guidance with interactive experiences, 
            creating an environment where students truly thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-green-100 p-4 rounded-full mb-4">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Personalized Learning Journey
              </h3>
              <p className="text-gray-600 mb-6">
                Our approach focuses on tailoring the educational experience to each student's unique needs, 
                strengths, and career aspirations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-700">Personalized feedback and guidance</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-700">Adaptive learning pathways</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-700">Real-world project experiences</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-500 h-full">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;