import React from 'react';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "SQL", "HTML", "CSS"],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["MySQL", "Power BI", "Tableau"],
    },
    {
      title: "Technical Knowledge",
      icon: Database,
      skills: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming (OOP)",
        "Artificial Intelligence",
        "Machine Learning",
      ],
    },
    {
      title: "Soft Skills",
      icon: Brain,
      skills: [
        "Leadership",
        "Problem Solving",
        "Teamwork",
        "Team Management",
        "Learner",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;