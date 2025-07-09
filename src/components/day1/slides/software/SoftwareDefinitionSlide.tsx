import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb } from 'lucide-react';

const SoftwareDefinitionSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
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
            <Code className="w-24 h-24 mx-auto text-blue-600 mb-8" />
            <h1 className="text-7xl font-bold text-gray-800 mb-12">
              What is Software?
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
          >
            <Lightbulb className="w-16 h-16 mx-auto text-yellow-500 mb-8" />
            <p className="text-4xl text-gray-700 leading-relaxed font-medium">
              Software is a{' '}
              <strong className="text-blue-600 text-5xl">
                set of instructions
              </strong>
              <br className="hidden lg:block" />
              written by programmers to make
              <br className="hidden lg:block" />
              computers perform specific tasks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <div className="bg-blue-100 rounded-2xl p-8">
              <p className="text-2xl text-blue-800 font-medium">
                💡 Think of it as a recipe for computers!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareDefinitionSlide;
