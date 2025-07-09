import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Server, Layers, Smartphone, Settings } from 'lucide-react';

const DeveloperTypesSlide: React.FC = () => {
  const developerTypes = [
    {
      icon: Palette,
      title: 'Frontend Developer',
      description: 'Builds what users see and interact with',
      skills: ['HTML', 'CSS', 'JavaScript'],
      color: 'blue',
      delay: 0.2,
    },
    {
      icon: Server,
      title: 'Backend Developer',
      description: 'Builds the behind-the-scenes logic',
      skills: ['Python', 'Node.js', 'Databases'],
      color: 'green',
      delay: 0.4,
    },
    {
      icon: Layers,
      title: 'Fullstack Developer',
      description: 'Does both frontend and backend',
      skills: ['React', 'Express', 'MongoDB'],
      color: 'purple',
      delay: 0.6,
    },
    {
      icon: Smartphone,
      title: 'Mobile Developer',
      description: 'Builds apps for phones and tablets',
      skills: ['React Native', 'Swift', 'Kotlin'],
      color: 'orange',
      delay: 0.8,
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-gray-800 mb-8">
            Types of Developers
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Each type specializes in different aspects of software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {developerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: type.delay }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div
                className={`w-20 h-20 bg-${type.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}
              >
                <type.icon className={`w-12 h-12 text-${type.color}-600`} />
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                {type.title}
              </h3>

              <p className="text-xl text-gray-600 text-center mb-6 leading-relaxed">
                {type.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-700 text-center">
                  Key Skills:
                </h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {type.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: type.delay + 0.2 * idx,
                      }}
                      className={`text-lg px-4 py-2 bg-${type.color}-50 text-${type.color}-700 rounded-full font-medium border-2 border-${type.color}-200`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
            <Settings className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h3 className="text-4xl font-bold mb-4">
              🎯 We'll Focus on Web Development!
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Web development combines frontend and backend skills to create
              amazing websites and web applications. It's a perfect starting
              point for your coding journey!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeveloperTypesSlide;
