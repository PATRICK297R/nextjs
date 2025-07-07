import { motion } from 'framer-motion';

type Skill = {
  name: string;
  level: number;
  icon: string;
};

const SkillBadge = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
      </div>
      <h4 className="font-medium text-gray-800 dark:text-white mb-2">{skill.name}</h4>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-indigo-600 h-2 rounded-full" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">{skill.level}%</span>
    </motion.div>
  );
};

export default SkillBadge;