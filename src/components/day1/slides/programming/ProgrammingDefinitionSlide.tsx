import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Zap, Brain } from 'lucide-react';

const ProgrammingDefinitionSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-20">
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
            <Code className="w-24 h-24 mx-auto text-yellow-600 mb-8" />
            <h1 className="text-7xl font-bold text-gray-800 mb-12">
              What is Programming?
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl mb-12"
          >
            <Brain className="w-16 h-16 mx-auto text-blue-600 mb-8" />
            <p className="text-4xl text-gray-700 leading-relaxed font-medium">
              Programming is{' '}
              <strong className="text-yellow-600 text-5xl">
                writing instructions
              </strong>
              <br className="hidden lg:block" />
              for computers in a language
              <br className="hidden lg:block" />
              they can understand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-blue-100 rounded-2xl p-8">
              <Lightbulb className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                Step by Step
              </h3>
              <p className="text-xl text-blue-700">
                Each instruction must be clear and precise
              </p>
            </div>

            <div className="bg-green-100 rounded-2xl p-8">
              <Zap className="w-12 h-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Logical Order
              </h3>
              <p className="text-xl text-green-700">
                Instructions must follow a logical sequence
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <div className="bg-purple-100 rounded-3xl p-8">
              <h4 className="text-3xl font-bold text-purple-800 mb-4">
                🍳 Think of it like a recipe!
              </h4>
              <p className="text-xl text-purple-700 font-medium">
                Just like cooking, programming requires clear, step-by-step
                instructions
                <br />
                that anyone (or any computer) can follow.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgrammingDefinitionSlide;
