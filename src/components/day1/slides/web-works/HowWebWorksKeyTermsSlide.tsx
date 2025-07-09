import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Monitor, Server, Cloud } from 'lucide-react';

const HowWebWorksKeyTermsSlide: React.FC = () => {
  const keyTerms = [
    {
      term: 'Browser',
      definition: 'The app you use to view websites (Chrome, Firefox, Safari)',
      icon: Monitor,
      color: 'blue',
    },
    {
      term: 'Server',
      definition: 'A powerful computer that stores websites',
      icon: Server,
      color: 'green',
    },
    {
      term: 'Domain',
      definition: 'The website name (like google.com)',
      icon: Globe,
      color: 'purple',
    },
    {
      term: 'Hosting',
      definition: 'Where your website files live on the internet',
      icon: Cloud,
      color: 'orange',
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-100 rounded-full mb-4">
              <span className="text-4xl font-bold text-purple-600">📚</span>
            </div>

            <h1 className="text-7xl font-bold text-gray-800 mb-4">
              Key Terms to Know
            </h1>
          </div>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Important words that will help you understand the web
          </p>
        </motion.div>

        {/* Key Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTerms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-20 h-20 bg-${term.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <term.icon className={`w-10 h-10 text-${term.color}-600`} />
                  </div>
                  <div>
                    <h3
                      className={`text-3xl font-bold text-${term.color}-600 mb-4`}
                    >
                      {term.term}
                    </h3>
                    <p className="text-2xl text-gray-600 leading-relaxed">
                      {term.definition}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowWebWorksKeyTermsSlide;
