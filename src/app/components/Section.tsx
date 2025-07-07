import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const Section = ({ id, title, subtitle, children }: SectionProps) => {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;