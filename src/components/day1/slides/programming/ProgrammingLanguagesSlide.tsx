import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe } from 'lucide-react';

const ProgrammingLanguagesSlide: React.FC = () => {
  const programmingLanguages = [
    {
      name: 'JavaScript',
      description: 'For web development',
      color: 'yellow',
      icon: '🌐',
      delay: 0.2,
    },
    {
      name: 'Python',
      description: 'Great for beginners',
      color: 'green',
      icon: '🐍',
      delay: 0.4,
    },
    {
      name: 'Java',
      description: 'Enterprise applications',
      color: 'red',
      icon: '☕',
      delay: 0.6,
    },
    {
      name: 'C++',
      description: 'High performance apps',
      color: 'blue',
      icon: '⚡',
      delay: 0.8,
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-8">
            <Globe className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            Programming Languages
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              Different languages for{' '}
              <strong className="text-blue-600 text-5xl">
                different purposes
              </strong>
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Each language has its own strengths and use cases
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {programmingLanguages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: lang.delay }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-6xl mb-6">{lang.icon}</div>
                <div
                  className={`w-20 h-20 bg-${lang.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}
                >
                  <Code className={`w-12 h-12 text-${lang.color}-600`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {lang.name}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {lang.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <Code className="w-20 h-20 mx-auto mb-6 text-green-200" />
              <h3 className="text-4xl font-bold mb-6">
                Which Language Should You Learn?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4">🎯 For Beginners</h4>
                <ul className="space-y-3 text-xl">
                  <li>
                    • <strong>JavaScript</strong> - Start here for web
                    development
                  </li>
                  <li>
                    • <strong>Python</strong> - Great for learning basics
                  </li>
                  <li>
                    • <strong>Scratch</strong> - Visual programming for kids
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4">💡 Good to Know</h4>
                <ul className="space-y-3 text-xl">
                  <li>• You don't need to learn all languages</li>
                  <li>• Master one before moving to another</li>
                  <li>• Concepts transfer between languages</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              🚀 Today We're Using JavaScript!
            </h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              JavaScript is perfect for beginners because it runs in any web
              browser - no special software needed!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgrammingLanguagesSlide;
