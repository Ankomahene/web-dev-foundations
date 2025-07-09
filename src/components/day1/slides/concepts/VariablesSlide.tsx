import React from 'react';
import { motion } from 'framer-motion';
import { Database, Package, Tag, Archive } from 'lucide-react';

const VariablesSlide: React.FC = () => {
  const examples = [
    {
      code: 'let name = "John";',
      description: "Store a person's name",
      color: 'blue',
      delay: 0.2,
    },
    {
      code: 'let age = 25;',
      description: "Store someone's age",
      color: 'green',
      delay: 0.4,
    },
    {
      code: 'let isStudent = true;',
      description: 'Store yes/no information',
      color: 'purple',
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Database className="w-24 h-24 mx-auto text-blue-600 mb-8" />
            <h1 className="text-7xl font-bold text-gray-800 mb-12">
              Variables
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl mb-12"
          >
            <Package className="w-16 h-16 mx-auto text-green-600 mb-8" />
            <p className="text-4xl text-gray-700 leading-relaxed font-medium">
              Variables are like{' '}
              <strong className="text-blue-600 text-5xl">labeled boxes</strong>
              <br className="hidden lg:block" />
              that store information for later use
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: example.delay }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="bg-gray-900 rounded-xl p-6">
                    <pre className="text-green-400 font-mono text-2xl text-center">
                      {example.code}
                    </pre>
                  </div>
                  <div className="text-center">
                    <Tag
                      className={`w-12 h-12 mx-auto text-${example.color}-600 mb-4`}
                    />
                    <p className="text-xl text-gray-700 font-medium">
                      {example.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <Archive className="w-16 h-16 mx-auto mb-6 text-blue-200" />
              <h3 className="text-3xl font-bold mb-4">
                🎯 Think of variables like labeled storage boxes!
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                You can put different things in each box, label them, and come
                back later to use what you stored inside.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VariablesSlide;
