import React from 'react';
import { motion } from 'framer-motion';

const HowWebWorksActionSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            Let's See It in Action!
          </h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Time to watch this process happen in real-time
          </p>
        </motion.div>

        {/* Activity Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">
              🎯 Interactive Demo Coming Up!
            </h2>
            <p className="text-2xl mb-8 leading-relaxed">
              Next, we'll watch an interactive demo of exactly how this process
              works when you visit a website.
            </p>

            <div className="bg-white/20 rounded-2xl p-6 text-left">
              <h3 className="text-2xl font-bold mb-6">Activity Preview:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-yellow-800">1</span>
                  </div>
                  <p className="text-xl">Visit example.com in the browser</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-yellow-800">2</span>
                  </div>
                  <p className="text-xl">Open Developer Tools (F12)</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-yellow-800">3</span>
                  </div>
                  <p className="text-xl">Watch the Network tab in action!</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowWebWorksActionSlide;
