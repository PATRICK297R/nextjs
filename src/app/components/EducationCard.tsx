import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

type Education = {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description: string;
};

const EducationCard = ({ education, index }: { education: Education; index: number }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-start">
        <div className="mr-4 mt-1">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{education.degree}</h3>
          <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">{education.institution}</h4>
          
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <FiCalendar className="mr-2" />
              <span>{education.period}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <FiMapPin className="mr-2" />
              <span>{education.location}</span>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {education.description}
          </p>
          
          <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm inline-block">
            {education.field}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;