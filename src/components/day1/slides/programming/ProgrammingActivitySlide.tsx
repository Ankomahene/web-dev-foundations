import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Users, Target } from 'lucide-react';

const ProgrammingActivitySlide: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Think Like a Computer',
      description: 'Computers know nothing about sandwiches',
      icon: '🤖',
      color: 'blue',
    },
    {
      step: 2,
      title: 'Be Very Specific',
      description: 'Every tiny detail matters',
      icon: '🔍',
      color: 'green',
    },
    {
      step: 3,
      title: 'Use Simple Steps',
      description: 'Break complex actions into simple ones',
      icon: '📝',
      color: 'purple',
    },
    {
      step: 4,
      title: 'Test Your Logic',
      description: 'Would someone else understand?',
      icon: '✅',
      color: 'orange',
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-yellow-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-8">
            <Lightbulb className="w-12 h-12 text-yellow-600" />
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            💡 Practice Time!
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              Let's practice{' '}
              <strong className="text-yellow-600 text-5xl">
                thinking like a programmer!
              </strong>
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Time to write your first pseudocode
            </p>
          </motion.div>
        </motion.div>

        {/* The Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <div className="text-8xl mb-6">🥪</div>
              <Target className="w-20 h-20 mx-auto mb-6 text-purple-200" />
              <h3 className="text-4xl font-bold mb-6">Your Challenge</h3>
              <p className="text-2xl text-purple-100 leading-relaxed max-w-4xl mx-auto">
                Write step-by-step instructions for "How to make a sandwich"
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 max-w-5xl mx-auto">
              <h4 className="text-2xl font-bold mb-4 text-center">
                🤖 Important: Explain it to a Computer!
              </h4>
              <p className="text-xl text-center leading-relaxed">
                Imagine you're explaining to a computer that has never seen a
                sandwich, bread, or any food before. Be extremely specific!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Guidelines for Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <span
                      className={`text-2xl font-bold text-${step.color}-600`}
                    >
                      {step.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Activity Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <PenTool className="w-20 h-20 mb-6 text-green-200" />
                <h3 className="text-3xl font-bold mb-6">
                  How to Do This Activity
                </h3>
                <ul className="space-y-4 text-xl">
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">1️⃣</span>
                    <span>Get out a piece of paper or open a text editor</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">2️⃣</span>
                    <span>Write numbered steps (1, 2, 3, etc.)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">3️⃣</span>
                    <span>Use action words (take, place, spread, etc.)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">4️⃣</span>
                    <span>Be very specific about quantities and actions</span>
                  </li>
                </ul>
              </div>

              <div>
                <Users className="w-20 h-20 mb-6 text-blue-200" />
                <h3 className="text-3xl font-bold mb-6">Work Together!</h3>
                <div className="bg-white/10 rounded-2xl p-6">
                  <p className="text-xl leading-relaxed mb-4">
                    Partner up with someone nearby and compare your
                    instructions!
                  </p>
                  <ul className="space-y-2 text-lg">
                    <li>• Would their steps work?</li>
                    <li>• Are there any missing details?</li>
                    <li>• What would confuse a computer?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">🎯 You Have 10 Minutes!</h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              This exercise will help you think like a programmer. Don't worry
              about being perfect - just try your best!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgrammingActivitySlide;
