import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  AI-ML Virtual Internship
                </h3>
                <p className="text-gray-600 mt-1">EduSkills, supported by Google for Developers</p>
                <p className="text-gray-500 mt-1">Oct 2024 – Dec 2024</p>
                <p className="text-gray-600 mt-4">
                  Focused on AI and Machine Learning with hands-on experience using Google's AI tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;