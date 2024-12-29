import React from 'react';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Noida Institute of Engineering and Technology",
      degree: "B.Tech, Computer Science and Engineering",
      duration: "2021 - 2025 (Expected)",
      location: "Greater Noida, India",
      icon: GraduationCap,
    },
    {
      institution: "Einstein Public School",
      degree: "Intermediate",
      duration: "April 2020",
      location: "Pratapgarh",
      icon: School,
    },
    {
      institution: "Einstein Public School",
      degree: "High School",
      duration: "April 2018",
      location: "Pratapgarh",
      icon: School,
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex items-start mb-8 bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="mr-4">
                <edu.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.institution}
                </h3>
                <p className="text-gray-600 mt-1">{edu.degree}</p>
                <p className="text-gray-500 mt-1">{edu.duration}</p>
                <p className="text-gray-500">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;