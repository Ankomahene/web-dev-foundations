import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Code, ArrowRight } from 'lucide-react';

const ProgrammingRecipeAnalogySlide: React.FC = () => {
  const recipeSteps = [
    { step: 1, instruction: 'Boil water', icon: '💧' },
    { step: 2, instruction: 'Add tea leaves', icon: '🍃' },
    { step: 3, instruction: 'Wait 5 minutes', icon: '⏰' },
    { step: 4, instruction: 'Pour into cup', icon: '☕' },
  ];

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
            <Coffee className="w-12 h-12 text-orange-600" />
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            Think of it Like a Recipe
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              Just like cooking, programming requires{' '}
              <strong className="text-orange-600 text-5xl">
                clear, step-by-step instructions
              </strong>
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Every step must be precise and logical
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Recipe Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-12 shadow-2xl"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Making Tea (Recipe)
            </h3>
            <div className="space-y-6">
              {recipeSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="flex items-center space-x-6 bg-orange-50 rounded-xl p-6"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-2xl font-bold text-orange-600">
                    {item.step}
                  </div>
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-2xl text-gray-700 flex-1">
                    {item.instruction}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programming Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="mb-8">
              <ArrowRight className="w-20 h-20 mx-auto mb-6 text-orange-500" />
              <h3 className="text-4xl font-bold text-gray-800 mb-8">
                Programming Works Similarly!
              </h3>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white">
              <Code className="w-20 h-20 mx-auto mb-8 text-orange-200" />
              <h4 className="text-3xl font-bold mb-6">
                Key Programming Principles
              </h4>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                  <span className="text-xl">
                    Each step must be <strong>clear</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                  <span className="text-xl">
                    Instructions must be <strong>logical</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                  <span className="text-xl">
                    Computers follow instructions <strong>exactly</strong>
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                  <span className="text-xl">
                    Precision <strong>matters</strong>!
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">🧠 Remember This!</h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Programming is just like giving someone a recipe - you need to be
              clear, specific, and think through every step!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgrammingRecipeAnalogySlide;
