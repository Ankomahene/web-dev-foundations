import React from 'react';
import { motion } from 'framer-motion';
import { List, User, Calculator, AlertCircle } from 'lucide-react';

const CalculatorStepsSlide: React.FC = () => {
  const exerciseSteps = [
    {
      step: 1,
      title: 'Get First Number',
      code: 'let num1 = prompt("Enter first number");',
      explanation: 'Ask user for the first number',
      color: 'blue',
      icon: '1️⃣',
      delay: 0.2,
    },
    {
      step: 2,
      title: 'Get Second Number',
      code: 'let num2 = prompt("Enter second number");',
      explanation: 'Ask user for the second number',
      color: 'green',
      icon: '2️⃣',
      delay: 0.4,
    },
    {
      step: 3,
      title: 'Convert & Calculate',
      code: 'let sum = Number(num1) + Number(num2);',
      explanation: 'Convert strings to numbers and add them',
      color: 'purple',
      icon: '3️⃣',
      delay: 0.6,
    },
    {
      step: 4,
      title: 'Show Result',
      code: 'alert("The sum is: " + sum);',
      explanation: 'Display the result to the user',
      color: 'orange',
      icon: '4️⃣',
      delay: 0.8,
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-8">
            <List className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            Step-by-Step Guide
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              Follow these{' '}
              <strong className="text-blue-600 text-5xl">4 simple steps</strong>{' '}
              to build your calculator
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              We'll write each line of code together
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {exerciseSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-6 mb-6">
                <div
                  className={`w-20 h-20 bg-${step.color}-100 rounded-full flex items-center justify-center`}
                >
                  <span className={`text-3xl font-bold text-${step.color}-600`}>
                    {step.step}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {step.explanation}
              </p>

              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <pre className="text-2xl font-mono text-green-400 whitespace-pre-wrap">
                  {step.code}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Input */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white text-center">
              <User className="w-16 h-16 mx-auto mb-6 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">Input</h3>
              <p className="text-lg">User types numbers when prompted</p>
            </div>

            {/* Process */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center">
              <Calculator className="w-16 h-16 mx-auto mb-6 text-purple-200" />
              <h3 className="text-2xl font-bold mb-4">Process</h3>
              <p className="text-lg">JavaScript converts and calculates</p>
            </div>

            {/* Output */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white text-center">
              <AlertCircle className="w-16 h-16 mx-auto mb-6 text-orange-200" />
              <h3 className="text-2xl font-bold mb-4">Output</h3>
              <p className="text-lg">Result appears in popup alert</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">💡 Coding Tip</h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Type each line carefully and press Enter after each one. Don't
              worry about making mistakes - that's how we learn!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CalculatorStepsSlide;
