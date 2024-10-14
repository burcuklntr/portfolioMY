import React from 'react';
import image1 from "../assets/images/coksatanlar1.png";
import image2 from "../assets/images/home.jpg";
import image3 from "../assets/images/seragazi_370x210.jpg";
const Projects = () => {
  const customStyle = {
    backgroundColor: "#121212", // Arka plan rengi
    color: "#FFFFFF", // Metin rengi
  };

  const projects = [
    {
      title: 'NBC CERT',
      image: image3, // Proje resmi
      description: 'REACT - TAILWIND CSS - JAVASCRİPT - NODE.JS ',
      link: 'https://nbccert.com.tr/',
    },
    {
      title: 'Furniture store',
      image: image1,
      description: 'HTML - TAILWIND CSS - JAVASCRİPT',
      link: 'https://burcuhome.netlify.app/',
    },
    {
      title: 'Restaurant Web Site',
      image: image2,
      description: 'HTML - CSS',
      link: 'https://burcununrestauranti.netlify.app/',
    },

    {
      title: 'My Portfolio',
      image: 'https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
      description: 'A brief description of Project 1.',
      link: 'https://example.com/project4',
    },
  ];

  return (
    <section className="py-24 px-4" style={customStyle}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 "> {/* Büyük ekranda 2 sütun olacak şekilde ayarladım */}
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 border"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 ">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3> 
                <p className="text-white text-sm mt-2">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
