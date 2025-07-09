import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor, Settings } from 'lucide-react';

const SoftwareTypesSlide: React.FC = () => {
  const softwareTypes = [
    {
      icon: Globe,
      title: 'Web Applications',
      examples: ['Facebook', 'Gmail', 'YouTube'],
      color: 'blue',
      delay: 0.2,
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      examples: ['WhatsApp', 'TikTok', 'Instagram'],
      color: 'green',
      delay: 0.4,
    },
    {
      icon: Monitor,
      title: 'Desktop Software',
      examples: ['MS Word', 'Photoshop', 'VS Code'],
      color: 'purple',
      delay: 0.6,
    },
    {
      icon: Settings,
      title: 'System Software',
      examples: ['Windows', 'macOS', 'Android'],
      color: 'orange',
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
          <h1 className="text-6xl font-bold text-gray-800 mb-8">
            Types of Software
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Software comes in many different forms, each designed for specific
            purposes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softwareTypes.map((type, index) => (
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
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                {type.title}
              </h3>
              <div className="space-y-4">
                {type.examples.map((example, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: type.delay + 0.2 * idx,
                    }}
                    className="text-xl text-gray-600 bg-gray-50 rounded-xl px-6 py-3 text-center font-medium"
                  >
                    {example}
                  </motion.div>
                ))}
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
          <div className="bg-yellow-50 border-4 border-yellow-200 rounded-3xl p-8">
            <h4 className="text-3xl font-bold text-yellow-800 mb-4">
              🎯 Activity Time!
            </h4>
            <p className="text-xl text-yellow-700 font-medium">
              Can you think of 3 apps or programs you use every day?
              <br />
              Which category would each one belong to?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareTypesSlide;
