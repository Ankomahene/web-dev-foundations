import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Target, Calendar } from 'lucide-react';

const WelcomeSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="mb-8"
          >
            <GraduationCap className="w-32 h-32 mx-auto text-indigo-600 mb-8" />
          </motion.div>
          <h1 className="text-8xl font-bold text-gray-800 mb-6">Welcome to</h1>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Web Development Foundations
          </h2>
          <p className="text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your journey into the exciting world of programming and web
            development starts here!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
          >
            <Calendar className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">6 Days</h3>
            <p className="text-xl text-gray-600">
              Comprehensive learning journey
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
          >
            <Target className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Hands-On</h3>
            <p className="text-xl text-gray-600">Build real projects</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
          >
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Beginner Friendly
            </h3>
            <p className="text-xl text-gray-600">No prior experience needed</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              🚀 Ready to start your coding journey?
            </h3>
            <p className="text-xl text-indigo-100">
              From complete beginner to building your first web applications!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeSlide;
