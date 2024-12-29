import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-6">
            I am a passionate Computer Science and Engineering student at Noida Institute of Engineering and Technology, 
            with an expected graduation in 2025. My journey in technology has been driven by a deep interest in solving 
            complex problems and creating innovative solutions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With expertise in various programming languages and technologies, I have developed multiple projects that 
            demonstrate my technical abilities and problem-solving skills. I am particularly interested in AI, Machine Learning, 
            and Data Science, and I continuously strive to expand my knowledge in these areas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;