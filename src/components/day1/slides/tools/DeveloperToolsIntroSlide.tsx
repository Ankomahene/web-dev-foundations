import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const DeveloperToolsIntroSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-100 rounded-full mb-12">
            <Wrench className="w-12 h-12 text-purple-600" />
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            Developer Tools
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              Every developer needs the right{' '}
              <strong className="text-purple-600 text-5xl">tools</strong> to
              write, test, and debug their code effectively.
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Let's explore the essential tools that will make your coding
              journey easier and more productive.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeveloperToolsIntroSlide;
