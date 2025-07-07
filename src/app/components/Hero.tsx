import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">John Doe</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
              Full Stack Developer & UI/UX Designer
            </h2>
            <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0 text-gray-700 dark:text-gray-400">
              I build modern web applications with React, Next.js, and TypeScript. 
              Passionate about creating intuitive user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button 
                className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button 
                className="px-6 py-3 bg-white dark:bg-gray-800 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-600 dark:bg-indigo-700 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">5+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;