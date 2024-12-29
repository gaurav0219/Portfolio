import React from 'react';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "LeetCode Achievement",
      description: "Solved 250+ coding problems on LeetCode, ranking in the top 15% globally",
      icon: Trophy,
    },
    {
      title: "Techfest NIET 2023",
      description: "Secured 2nd place in IoT Techfest",
      icon: Award,
    },
  ];

  const certifications = [
    "Databases and SQL for Data Science with Python (Coursera, 2023)",
    "Programming Fundamentals using Python - Part 1 (Infosys Springboard, 2023)",
    "Data Structures (Coursera, 2023)",
    "Object-Oriented Programming in Java (Coursera, 2022)",
    "Java Programming: Arrays, Lists, and Structured Data (Coursera, 2022)",
    "Python for Data Science, AI & Development (Coursera, 2022)",
    "Introduction to Artificial Intelligence (Coursera, 2022)",
  ];

  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Achievements & Certifications</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <achievement.icon className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                >
                  <Award className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;