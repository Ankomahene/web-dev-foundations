import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, Target } from 'lucide-react';

const ExerciseIntroSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-8">
            <Calculator className="w-12 h-12 text-orange-600" />
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            Hands-on Coding Exercise
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <div className="flex items-center justify-center space-x-6 mb-8">
              <Calculator className="w-16 h-16 text-orange-600" />
              <h2 className="text-5xl font-bold text-gray-800">
                Build a Basic Calculator
              </h2>
            </div>
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              Time to put everything together! Let's create your{' '}
              <strong className="text-orange-600 text-5xl">
                first interactive program
              </strong>
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              You'll use variables, user input, and mathematical operations
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* What You'll Build */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-12 shadow-2xl"
          >
            <div className="text-center mb-8">
              <Zap className="w-20 h-20 mx-auto mb-6 text-blue-600" />
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                What You'll Build
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-2xl text-gray-700">
                  A calculator that asks for two numbers
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-2xl text-gray-700">
                  Adds them together automatically
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-2xl text-gray-700">
                  Shows the result in a popup
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <span className="text-2xl text-gray-700">
                  Uses real JavaScript programming concepts
                </span>
              </div>
            </div>
          </motion.div>

          {/* What You'll Learn */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-2xl"
          >
            <div className="text-center mb-8">
              <Target className="w-20 h-20 mx-auto mb-6 text-green-600" />
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                Skills You'll Practice
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-2xl text-gray-700">
                  <strong>Variables</strong> - storing data
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                <span className="text-2xl text-gray-700">
                  <strong>User Input</strong> - getting data from users
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                <span className="text-2xl text-gray-700">
                  <strong>Data Types</strong> - converting text to numbers
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-2xl text-gray-700">
                  <strong>Output</strong> - displaying results
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">🚀 Ready to Code?</h3>
            <p className="text-2xl leading-relaxed max-w-4xl mx-auto mb-8">
              Don't worry if you make mistakes - that's how we learn! Follow
              along step by step and ask questions anytime.
            </p>
            <div className="bg-white/10 rounded-2xl p-6 max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">💡 Remember</h4>
              <p className="text-xl">
                Every expert programmer started exactly where you are right now!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExerciseIntroSlide;
