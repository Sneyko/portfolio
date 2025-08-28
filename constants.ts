
import { Project, TimelineEvent } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A full-stack e-commerce site with modern features.',
    longDescription: 'Developed a feature-rich e-commerce platform using the MERN stack. Implemented user authentication, product catalog, shopping cart, and a secure Stripe payment gateway. Focused on creating a responsive and intuitive user interface.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'Productivity Tool',
    description: 'A Kanban-style task manager to boost productivity.',
    longDescription: 'A sleek and responsive Kanban-style task management application built with React and TypeScript. Features drag-and-drop functionality, real-time updates with WebSocket, and data persistence using local storage. Designed for individuals and small teams to organize workflows efficiently.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'Personal Project',
    description: 'This very portfolio, designed with animations.',
    longDescription: 'The portfolio you are currently viewing. Designed and developed from scratch to showcase my skills in front-end development, UI/UX design, and animation. Built with a modern tech stack to be performant, responsive, and visually appealing.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: '#',
    repoUrl: '#',
  },
    {
    id: 4,
    title: 'Weather Dashboard',
    category: 'Utility App',
    description: 'A clean weather app with real-time data.',
    longDescription: 'A minimalist weather dashboard that provides current weather conditions and a 5-day forecast for any city. Integrated with the OpenWeatherMap API for real-time data. The UI is designed to be clean, simple, and easy to read at a glance.',
    techStack: ['React', 'API Integration', 'CSS Modules'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    liveUrl: '#',
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2025 - Présent',
    title: 'BUT Informatique',
    institution: 'IUT de Toulouse',
    description: 'Spécialisé en génie logiciel, algorithmes et développement web.',
  },
  {
    year: '2022 - 2025',
    title: 'Lycée - Baccalauréat Général',
    institution: 'Blaise Pascal Châteauroux',
    description: 'Spécialité mathématiques, physique/chimie, NSI et option mathématiques expert en terminale.',
  },
  {
    year: '2020',
    title: 'Premier "Hello, World!"',
    institution: 'Parcours autodidacte',
    description: 'J\'ai commencé mon parcours dans le codage avec Python et les bases du web, ce qui a éveillé ma passion pour la création à partir de code.',
  },
];
