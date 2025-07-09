import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const CoreConceptsIntroSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-100 rounded-full mb-12">
            <Lightbulb className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            Core Programming Concepts
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              These are the{' '}
              <strong className="text-indigo-600 text-5xl">
                fundamental building blocks
              </strong>{' '}
              that every programmer needs to understand.
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Let's explore each concept step by step, starting with the basics
              and building up to more complex ideas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoreConceptsIntroSlide;
