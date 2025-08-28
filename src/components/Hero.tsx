import React from 'react';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const heading = "Bienvenue, je suis Tom Testu.".split(/\n|/);
  const subheading = "Étudiant informatique à l'IUT de Toulouse.".split(' ');

  const headingVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  const subheadingVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delay: heading.length * 0.05 + 0.5,
      },
    },
  };
  
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#2C3E50] dark:text-gray-100 mb-4 tracking-tight"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          {heading.map((char, index) => (
            <motion.span key={index} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
           {subheading.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block mr-2">
              {word}
            </motion.span>
          ))}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: heading.length * 0.05 + subheading.length * 0.1 + 0.5 }}
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="bg-[#007BFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg"
          >
            Mes travaux
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
