import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-[#F8F7F4] dark:bg-gray-900 text-[#2C3E50] dark:text-gray-300 antialiased">
        <Header />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <footer className="text-center py-8 text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Tom Testu. Tous droits réservés.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;