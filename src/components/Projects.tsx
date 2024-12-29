import React from 'react';
import { Calendar, LineChart, Receipt, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Automatic Timetable Generator",
      description: "Automated scheduling system capable of handling 200 classes in under 30 seconds.",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"],
      icon: Calendar,
    },
    {
      title: "Stock Trading Platform",
      description: "Platform supporting 10,000 daily transactions with real-time data updates.",
      technologies: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot"],
      icon: LineChart,
    },
    {
      title: "Billing System",
      description: "Python-based retail billing system using tkinter. Optimized for 500 items/session.",
      technologies: ["Python", "tkinter"],
      icon: Receipt,
    },
    {
      title: "Summer Cure",
      description: "IoT project with Arduino Uno and DHT11 Sensor. Secured 2nd place in Techfest NIET 2023.",
      technologies: ["Arduino", "IoT", "Sensors"],
      icon: Cpu,
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <project.icon className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                  >
                    {tech}
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

export default Projects;