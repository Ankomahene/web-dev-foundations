import { motion } from 'framer-motion';
import { Hash, Quote, ToggleLeft } from 'lucide-react';
import React from 'react';

const DataTypesSlide: React.FC = () => {
  const dataTypes = [
    {
      icon: Quote,
      name: 'String',
      description: 'Text data - words and sentences',
      example: '"Hello World"',
      color: 'blue',
      delay: 0.2,
    },
    {
      icon: Hash,
      name: 'Number',
      description: 'Numeric values - whole or decimal',
      example: '42, 3.14, -7',
      color: 'green',
      delay: 0.4,
    },
    {
      icon: ToggleLeft,
      name: 'Boolean',
      description: 'True or false values only',
      example: 'true, false',
      color: 'purple',
      delay: 0.6,
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-7xl font-bold text-gray-800 mb-8">
              Data Types
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Different kinds of information you can store in variables
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {dataTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: type.delay }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 text-center"
            >
              <div
                className={`w-20 h-20 bg-${type.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}
              >
                <type.icon className={`w-12 h-12 text-${type.color}-600`} />
              </div>

              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                {type.name}
              </h3>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {type.description}
              </p>

              <div
                className={`bg-${type.color}-50 rounded-2xl p-6 border-2 border-${type.color}-200`}
              >
                <h4 className="text-lg font-semibold text-gray-700 mb-3">
                  Examples:
                </h4>
                <code
                  className={`text-2xl text-${type.color}-700 font-mono font-bold`}
                >
                  {type.example}
                </code>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-5xl font-bold mb-4">
              🎯 Why do data types matter?
            </h3>
            <p className="text-4xl text-blue-100 max-w-4xl mx-auto">
              Computers need to know what kind of data they're working with. You
              can't do math with words, and you can't make words uppercase if
              they're numbers!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-blue-100 rounded-2xl p-6 text-center">
            <Quote className="w-8 h-8 mx-auto text-blue-600 mb-2" />
            <code className="text-2xl font-mono text-blue-800">
              let name = "Alice";
            </code>
          </div>

          <div className="bg-green-100 rounded-2xl p-6 text-center">
            <Hash className="w-8 h-8 mx-auto text-green-600 mb-2" />
            <code className="text-2xl font-mono text-green-800">
              let score = 95;
            </code>
          </div>

          <div className="bg-purple-100 rounded-2xl p-6 text-center">
            <ToggleLeft className="w-8 h-8 mx-auto text-purple-600 mb-2" />
            <code className="text-2xl font-mono text-purple-800">
              let passed = true;
            </code>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataTypesSlide;
