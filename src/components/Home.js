import React, { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { useSpring, animated } from 'react-spring';
import image1 from '../assets/images/logo.png'; // image1'in doğru yolu
import video from "../assets/video/back.mp4";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  // Yazı yazma animasyonu için spring
  const animatedProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3000 }, // Animasyon süresi
  });

  const [photoVisible, setPhotoVisible] = useState(false); // Animasyon durumu
  useEffect(() => {
    // Sağdan sola geçiş efekti
    setPhotoVisible(true); // Sayfa yüklendiğinde fotoğraf görünür hale gelir
  }, []);

  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-3 items-center px-7 sm:px-8 md:px-14 lg:px-24"> <video
    autoPlay
    loop
    muted
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      {/* Sol Taraf */}
      <div className="md:col-span-1 flex flex-col justify-center items-start text-left mb-8 md:mb-0 w-full z-10">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white mb-2 font-medium">
          Burcu Sahin
        </h1>
        <h2 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl mb-4">
          <animated.span style={animatedProps} className="block tracking-wider  text-indigo-600 font-semibold mt-3 ml-2">
            FRONT-END
          </animated.span>
          <animated.span style={animatedProps} className="block tracking-widest py-5 ml-12 mt-4 text-white font-semibold">
            DEVELOPER.
          </animated.span>
        </h2>

        <p className="text-white max-w-md mb-6 text-sm sm:text-base lg:text-lg">
          Hello, I'm Burcu. I am a developer specializing in Front-End development. I create user-friendly and modern web applications using HTML, CSS, JavaScript, and React. I enjoy working on creative and innovative projects.
        </p>

        <motion.a
  href="/cv.pdf"
      download
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300 flex items-center"
    >
      <div className="relative z-10 flex items-center gap-2">
        <FiDownload className="mr-2 text-white" />
        Download CV
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.a>
      </div>

      {/* Ortada Boş Alan */}
      <div className="hidden md:block md:col-span-1" />

      {/* Sağ Taraf (Fotoğraf) */}
      <div
        className={`md:col-span-1 flex justify-center items-center transition-transform duration-1000 ${
          photoVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="w-56 h-72 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full  flex items-center justify-center overflow-hidden">
          <img src={image1} alt="Burcu Sahin" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Home;
