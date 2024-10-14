import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // %10 görünürlükte tetiklenecek
    triggerOnce: true // Sadece bir kez tetiklenecek
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  const customStyle = {
    backgroundColor: "#121212", // Arka plan rengi
    color: "#FFFFFF", // Metin rengi
  };

  return (
    <section className=" py-12 px-4" ref={ref} style={customStyle}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <p className="text-white mb-8">
          I am a passionate Front-End developer with a keen interest in building user-friendly web applications. My skills include modern web technologies, and I love working on creative projects that challenge me.
        </p>
        <div className="flex justify-between mb-12">
          <div className="w-1/2 pr-4">
            <h3 className="text-2xl font-semibold text-white mb-4">Graphic Design</h3>
            <div className="space-y-4">
              {/* Graphic Design Skill 1 */}
              <div>
                <div className="flex justify-between">
                  <span className="text-white">Photoshop</span>
                 
                </div>
                <div className="bg-gray-300 rounded-full h-2 w-full">
                  <div
                    className={`bg-indigo-600 h-2 rounded-full transition-all duration-700`}
                    style={{ width: isVisible ? '85%' : '0%' }}
                  ></div>
                </div>
              </div>

              {/* Graphic Design Skill 2 */}
              <div>
                <div className="flex justify-between">
                  <span className="text-white">Illustrator</span>
                 
                </div>
                <div className="bg-gray-300 rounded-full h-2 w-full">
                  <div
                    className={`bg-indigo-600 h-2 rounded-full transition-all duration-700`}
                    style={{ width: isVisible ? '70%' : '0%' }}
                  ></div>
                </div>
              </div>

              {/* Graphic Design Skill 3 */}
              <div>
                <div className="flex justify-between">
                  <span className="text-white">After Effects</span>
                 
                </div>
                <div className="bg-gray-300 rounded-full h-2 w-full">
                  <div
                    className={`bg-indigo-600 h-2 rounded-full transition-all duration-700`}
                    style={{ width: isVisible ? '60%' : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 pl-4">
            <h3 className="text-2xl font-semibold text-white mb-4">Software Development</h3>
            <div className="space-y-4">
              {/* Software Skill 1 */}
              <div>
                <div className="flex justify-between">
                  <span className="text-white">HTML</span>
                 
                </div>
                <div className="bg-gray-300 rounded-full h-2 w-full">
                  <div
                    className={`bg-indigo-600 h-2 rounded-full transition-all duration-700`}
                    style={{ width: isVisible ? '90%' : '0%' }}
                  ></div>
                </div>
              </div>

              {/* Software Skill 2 */}
              <div>
                <div className="flex justify-between">
                  <span className="text-white">CSS</span>
                 
                </div>
                <div className="bg-gray-300 rounded-full h-2 w-full">
                  <div
                    className={`bg-indigo-600 h-2 rounded-full transition-all duration-700`}
                    style={{ width: isVisible ? '85%' : '0%' }}
                  ></div>
                </div>
              </div>
   {/* Software Skill 5 */}
   <div>
                <div className="flex justify-between">
                  <span className="text-white">Tailwind CSS</span>
                 
                </div>
                <div className="bg-gray-300 rounded-full h-2 w-full">
                  <div
                    className={`bg-indigo-600 h-2 rounded-full transition-all duration-700`}
                    style={{ width: isVisible ? '90%' : '0%' }}
                  ></div>
                </div>
              </div>
              {/* Software Skill 3 */}
              <div>
                <div className="flex justify-between">
                  <span className="text-white">JavaScript</span>
                  
                </div>
                <div className="bg-gray-300 rounded-full h-2 w-full">
                  <div
                    className={`bg-indigo-600 h-2 rounded-full transition-all duration-700`}
                    style={{ width: isVisible ? '80%' : '0%' }}
                  ></div>
                </div>
              </div>

              {/* Software Skill 4 */}
              <div>
                <div className="flex justify-between">
                  <span className="text-white">React</span>
                 
                </div>
                <div className="bg-gray-300 rounded-full h-2 w-full">
                  <div
                    className={`bg-indigo-600 h-2 rounded-full transition-all duration-700`}
                    style={{ width: isVisible ? '75%' : '0%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="text-white">Node.js</span>
               
                </div>
                <div className="bg-gray-300 rounded-full h-2 w-full">
                  <div
                    className={`bg-indigo-600 h-2 rounded-full transition-all duration-700`}
                    style={{ width: isVisible ? '50%' : '0%' }}
                  ></div>
                </div>
              </div>

           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
