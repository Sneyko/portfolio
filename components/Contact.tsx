import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/Icons';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 dark:text-gray-400 hover:text-[#007BFF] dark:hover:text-blue-400"
    whileHover={{ scale: 1.2, transition: { type: 'spring', stiffness: 300 } }}
  >
    {children}
  </motion.a>
);

const Contact: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-[#2C3E50] dark:text-gray-100">Me contacter</h2>
        <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Je suis actuellement ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter si vous avez un projet en tête ou si vous souhaitez simplement entrer en contact !
        </motion.p>
        
        <motion.a 
            href="mailto:hello@janedoe.com"
            variants={itemVariants}
            className="inline-block bg-[#007BFF] text-white text-xl font-bold py-4 px-10 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg"
            whileHover={{ y: -5 }}
        >
            Dire bonjour
        </motion.a>
        
        <motion.div 
            variants={itemVariants} 
            className="flex justify-center gap-8 mt-12"
        >
          <SocialLink href="https://github.com/Sneyko">
            <GithubIcon className="w-8 h-8" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/sneyko-testu-25b9a9376/">
            <LinkedinIcon className="w-8 h-8" />
          </SocialLink>
           <SocialLink href="mailto:contactsneyko@gmail.com">
            <MailIcon className="w-8 h-8" />
          </SocialLink>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
