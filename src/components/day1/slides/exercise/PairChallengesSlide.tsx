import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calculator, AlertTriangle, Target, Zap } from 'lucide-react';

const PairChallengesSlide: React.FC = () => {
  const challenges = [
    {
      icon: Calculator,
      title: 'Change Operation',
      description:
        'Modify the calculator to subtract or multiply instead of add',
      difficulty: 'Easy',
      color: 'green',
      delay: 0.2,
    },
    {
      icon: AlertTriangle,
      title: 'Add Error Handling',
      description: 'What happens if someone types text instead of numbers?',
      difficulty: 'Medium',
      color: 'yellow',
      delay: 0.4,
    },
    {
      icon: Target,
      title: 'Three Numbers',
      description: 'Extend the calculator to work with three numbers',
      difficulty: 'Medium',
      color: 'blue',
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-green-50 via-white to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
            <Users className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            Pair Programming Challenges
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              Team up with a partner to{' '}
              <strong className="text-green-600 text-5xl">
                extend your calculator
              </strong>{' '}
              and explore more possibilities!
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Two minds are better than one - collaborate and learn together
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: challenge.delay }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div
                  className={`w-20 h-20 bg-${challenge.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <challenge.icon
                    className={`w-12 h-12 text-${challenge.color}-600`}
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {challenge.title}
                </h3>
                <span
                  className={`inline-block px-4 py-2 rounded-full text-lg font-medium ${
                    challenge.difficulty === 'Easy'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {challenge.difficulty}
                </span>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed text-center mb-8">
                {challenge.description}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <h4 className="text-lg font-bold text-gray-800 mb-3">
                  💡 Hint:
                </h4>
                <p className="text-base text-gray-600">
                  {challenge.title === 'Change Operation' &&
                    'Replace the + with -, *, or /'}
                  {challenge.title === 'Add Error Handling' &&
                    'Use if statements to check if inputs are valid'}
                  {challenge.title === 'Three Numbers' &&
                    'Add a third prompt() and include it in your calculation'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <Zap className="w-20 h-20 mx-auto mb-6 text-purple-200" />
              <h3 className="text-4xl font-bold mb-6">
                🎉 Ultimate Bonus Challenge
              </h3>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-3xl p-8 text-center">
                <h4 className="text-3xl font-bold mb-6">
                  Multi-Operation Calculator
                </h4>
                <p className="text-2xl leading-relaxed mb-6">
                  Create a calculator that can perform all four operations (add,
                  subtract, multiply, divide) and let the user choose which
                  operation to perform!
                </p>
                <div className="bg-white/10 rounded-2xl p-6">
                  <h5 className="text-xl font-bold mb-4">Steps to Consider:</h5>
                  <ul className="text-lg space-y-3 text-left max-w-3xl mx-auto">
                    <li>• Ask user for first number</li>
                    <li>• Ask user for second number</li>
                    <li>• Ask user which operation (+, -, *, /)</li>
                    <li>• Use if statements to perform the chosen operation</li>
                    <li>• Display the result</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <Users className="w-20 h-20 mx-auto mb-6 text-blue-200" />
              <h3 className="text-4xl font-bold mb-6">
                👥 Pair Programming Tips
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-2xl font-bold mb-4">
                  🎯 How to Collaborate
                </h4>
                <ul className="space-y-3 text-lg">
                  <li>• Take turns typing (switch every 5 minutes)</li>
                  <li>• Talk through your thinking out loud</li>
                  <li>• Ask questions when you don't understand</li>
                  <li>• Celebrate successes together! 🎉</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-2xl font-bold mb-4">
                  💡 Problem-Solving Approach
                </h4>
                <ul className="space-y-3 text-lg">
                  <li>• Break big problems into smaller steps</li>
                  <li>• Test each small change before moving on</li>
                  <li>• Don't be afraid to make mistakes</li>
                  <li>• Help each other debug issues</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              🚀 Ready to Code Together?
            </h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Remember: The best way to learn programming is by doing it with
              others. Share ideas, help each other, and have fun building
              something amazing!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PairChallengesSlide;
