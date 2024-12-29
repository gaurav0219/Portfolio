import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm Gaurav Pandey
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Computer Science Engineering Student | Aspiring Software Developer
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:gaurav99p99@gmail.com"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <Mail className="mr-2" size={20} />
              gaurav99p99@gmail.com
            </a>
            <a
              href="tel:+918052159909"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <Phone className="mr-2" size={20} />
              +91 8052159909
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;