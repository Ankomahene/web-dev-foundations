import React from 'react';
import { motion } from 'framer-motion';
import { Code, Play, Copy, CheckCircle } from 'lucide-react';

const CompleteCodeSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
            <Code className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            Complete Calculator Code
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              Here's your{' '}
              <strong className="text-green-600 text-5xl">
                complete program
              </strong>{' '}
              in just 4 lines of code!
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Copy this into your browser console and try it out
            </p>
          </motion.div>
        </motion.div>

        {/* The Complete Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gray-900 rounded-3xl p-16 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-white">
                🧮 Your Calculator
              </h3>
              <div className="flex items-center space-x-4">
                <Copy className="w-8 h-8 text-gray-400" />
                <span className="text-xl text-gray-400">
                  Copy & Paste Ready
                </span>
              </div>
            </div>

            <div className="bg-black/50 rounded-2xl p-8 overflow-x-auto">
              <pre className="text-3xl font-mono text-green-400 leading-relaxed">
                {`let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let sum = Number(num1) + Number(num2);
alert("The sum is: " + sum);`}
              </pre>
            </div>

            <div className="mt-8 text-center">
              <p className="text-2xl text-blue-300 leading-relaxed">
                That's it! Just 4 lines and you have a working calculator! 🎉
              </p>
            </div>
          </div>
        </motion.div>

        {/* How to Use */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            How to Test Your Calculator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Open Console
              </h4>
              <p className="text-xl text-gray-600 leading-relaxed">
                Press F12, go to Console tab
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Paste Code
              </h4>
              <p className="text-xl text-gray-600 leading-relaxed">
                Copy the code above and paste it in
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Press Enter
              </h4>
              <p className="text-xl text-gray-600 leading-relaxed">
                Hit Enter and follow the prompts!
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <Play className="w-20 h-20 mx-auto mb-6 text-purple-200" />
              <h3 className="text-4xl font-bold mb-6">
                🎯 Try These Test Cases
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-2xl font-bold mb-4">✅ Should Work</h4>
                <ul className="space-y-3 text-xl">
                  <li>• First: 5, Second: 3 → Result: 8</li>
                  <li>• First: 10, Second: 25 → Result: 35</li>
                  <li>• First: 0, Second: 7 → Result: 7</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-2xl font-bold mb-4">
                  🤔 What Happens If...
                </h4>
                <ul className="space-y-3 text-xl">
                  <li>• You type "hello" instead of a number?</li>
                  <li>• You leave one field empty?</li>
                  <li>• You use decimal numbers like 1.5?</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h3 className="text-3xl font-bold mb-4">🎉 Congratulations!</h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              You just wrote your first computer program! You're officially a
              programmer now! 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompleteCodeSlide;
