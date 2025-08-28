import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon, CloseIcon } from './icons/Icons';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { y: "100vh", opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.4, type: "spring", damping: 25, stiffness: 200 }
  },
  exit: { y: "100vh", opacity: 0, transition: { duration: 0.3 } }
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 dark:bg-opacity-80 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        layoutId={`card-container-${project.id}`}
        className="bg-[#F8F7F4] dark:bg-gray-900 rounded-xl overflow-hidden w-11/12 md:w-3/4 lg:w-1/2 max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
      >
        <div className="relative">
             <motion.img
                layoutId={`card-image-${project.id}`}
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover"
            />
            <button onClick={onClose} className="absolute top-4 right-4 bg-white/70 dark:bg-gray-800/70 rounded-full p-2 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 transition-colors">
                <CloseIcon />
            </button>
        </div>
        
        <div className="p-8 overflow-y-auto">
            <motion.h3 layoutId={`card-title-${project.id}`} className="text-3xl font-bold text-gray-900 dark:text-gray-100">{project.title}</motion.h3>
            <motion.p layoutId={`card-category-${project.id}`} className="text-md text-[#007BFF] font-semibold mt-1">{project.category}</motion.p>
            
            <p className="text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">{project.longDescription}</p>

            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                    <span key={tech} className="bg-blue-100 text-[#007BFF] dark:bg-blue-900/50 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                ))}
            </div>

            <div className="flex gap-4 mt-8">
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#007BFF] text-white px-5 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                        <ExternalLinkIcon />
                        Live Demo
                    </a>
                )}
                {project.repoUrl && (
                     <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition-colors duration-300">
                        <GithubIcon />
                        View Code
                    </a>
                )}
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
