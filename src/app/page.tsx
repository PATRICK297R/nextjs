import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import EducationCard from './components/EducationCard';
import { projects, skills, education } from '@/data/projects';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero />
      
      <Section id="projects" title="My Projects" subtitle="Here are some of my recent works">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Section>
      
      <Section id="skills" title="My Skills" subtitle="Technologies I work with">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} index={index} />
          ))}
        </div>
      </Section>
      
      <Section id="education" title="Education" subtitle="My academic background">
        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </Section>
      
      <Section id="contact" title="Get In Touch">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </Section>
      
      <footer className="bg-gray-100 dark:bg-gray-900 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}