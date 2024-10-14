import React from 'react';

const Skills = () => {
  const customStyle = {
    backgroundColor: "#121212", // Arka plan rengi
    color: "#FFFFFF", // Metin rengi
  };

  const experiences = [
    {
      title: 'Volunteer intern',
      company: 'Teknokent Turkey/Adana',
      date: 'June 2021 - August 2021',
      description: 'I completed an internship as a volunteer intern in the technopolis of Adana, Turkey, where I learned C# programming and SQL, and developed simple automation applications.',
      skills: ['C#', 'SQL']
    },
    {
      title: 'Intern',
      company: 'Teknokent Turkey/Adana',
      date: 'June 2022 - July 2022',
      description: 'I gained proficiency in Adobe After Effects, Photoshop, and Illustrator, allowing me to create visually compelling designs and animations. I developed my ability to produce high-quality graphics and engage audiences through creative visual storytelling.',
      skills: ['Adobe After Effects', 'Adobe Photoshop', 'Adobe Illustrator']
    },
    {
      title: 'Software Engineer Intern',
      company: 'Onay Yazılım - Turkey/Adana',
      date: 'August 2024 - continue',
      description: 'I learned React, HTML, CSS, Tailwind CSS, and Node.js, and successfully completed several projects utilizing these technologies. I am continuously improving my skills in these areas and actively working on personal projects to enhance my understanding and expertise.',
      skills: ['Javascript', 'HTML-CSS', 'React', 'Node.js']
    }
  ];

  return (
    <section className="py-12 px-4" style={customStyle}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-black">{experience.title}</h3>
              <h4 className="text-lg text-black">{experience.company}</h4>
              <p className="text-sm text-black mb-4">{experience.date}</p>
              <p className="text-indigo-600 mb-4">{experience.description}</p>
              <h5 className="font-semibold text-black">My skills</h5>
              <ul className="list-disc list-inside text-black">
                {experience.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
