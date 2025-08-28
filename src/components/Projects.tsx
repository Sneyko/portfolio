import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4 }
  }
};


const ProjectCard: React.FC<{ project: Project; onSelect: (project: Project) => void }> = ({ project, onSelect }) => (
  <motion.div
    layoutId={`card-container-${project.id}`}
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-blue-500/20 transition-shadow duration-300 cursor-pointer"
    onClick={() => onSelect(project)}
    variants={cardVariants}
    whileHover={{ y: -10 }}
  >
    <motion.img
      layoutId={`card-image-${project.id}`}
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <motion.h3 layoutId={`card-title-${project.id}`} className="text-xl font-bold text-gray-800 dark:text-gray-100">{project.title}</motion.h3>
      <motion.p layoutId={`card-category-${project.id}`} className="text-sm text-[#007BFF] font-semibold mt-1">{project.category}</motion.p>
      <motion.p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</motion.p>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <motion.section
        id="projects"
        className="py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2C3E50] dark:text-gray-100">My Projects</h2>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </motion.div>
      </motion.section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
