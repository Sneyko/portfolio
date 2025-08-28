import React from 'react';
import { motion, Variants } from 'framer-motion';
import { TIMELINE_EVENTS } from '../constants';
import { TimelineEvent } from '../types';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const timelineItemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};


const TimelineItem: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => (
    <motion.div 
        className="relative pl-8 sm:pl-12 py-4 group"
        variants={timelineItemVariants}
    >
        <div className="absolute left-0 h-full w-px bg-gray-300 dark:bg-gray-700 group-hover:bg-[#007BFF] transition-colors duration-300"></div>
        <div className="absolute left-[-9px] top-6 w-5 h-5 bg-[#F8F7F4] dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-full group-hover:border-[#007BFF] transition-colors duration-300"></div>
        
        <p className="text-sm font-semibold text-[#007BFF]">{event.year}</p>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mt-1">{event.title}</h3>
        <p className="text-md font-medium text-gray-600 dark:text-gray-400">{event.institution}</p>
        <p className="text-gray-500 dark:text-gray-500 mt-2">{event.description}</p>
    </motion.div>
);

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[#2C3E50] dark:text-gray-100">À propos de moi</h2>
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Étudiant en BUT Informatique à Toulouse, je possède une solide base en développement web moderne. Curieux et motivé, je m’attache à concevoir des interfaces utilisateurs intuitives, performantes et esthétiques répondant à des problématiques concrètes.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            J’apprécie particulièrement le travail en équipe et je cherche constamment à enrichir mes compétences à travers de nouveaux projets techniques exigeants. En dehors de mes études, j'aime les voyages et la photographie.
          </p>
        </div>
        <div className="md:col-span-3">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {TIMELINE_EVENTS.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
