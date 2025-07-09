import React from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Keyboard, Target } from 'lucide-react';

const InteractiveJavaScriptSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-100 rounded-full mb-8">
            <Play className="w-12 h-12 text-purple-600" />
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            Let's Code Together!
          </h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Time for hands-on JavaScript practice
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* What You'll See */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-10 shadow-xl"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">
                What You'll See
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { color: 'green', text: 'Messages appear in the console' },
                { color: 'blue', text: 'Popup boxes for alerts and prompts' },
                { color: 'purple', text: 'Variables store your data' },
                { color: 'yellow', text: 'Instant feedback as you type' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div
                    className={`w-6 h-6 bg-${item.color}-400 rounded-full`}
                  ></div>
                  <span className="text-xl text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pro Tips */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-10 shadow-xl"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Keyboard className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Pro Tips</h3>
            </div>
            <div className="space-y-4">
              {[
                { color: 'orange', text: 'Press F12 to open Developer Tools' },
                { color: 'pink', text: 'Use console.log() to debug your code' },
                {
                  color: 'cyan',
                  text: 'Try different values and see what happens',
                },
                { color: 'red', text: "Don't worry about making mistakes!" },
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div
                    className={`w-6 h-6 bg-${tip.color}-400 rounded-full`}
                  ></div>
                  <span className="text-xl text-gray-700">{tip.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-8">
            <Target className="w-20 h-20 mx-auto mb-6 text-purple-200" />
            <h3 className="text-4xl font-bold mb-6">🎯 Your First Challenge</h3>
            <p className="text-2xl text-purple-100 leading-relaxed">
              Create a greeting app step by step!
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-6 text-center">
              Build a Greeting App
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/20 rounded-xl p-6">
                <h5 className="text-xl font-bold mb-4">
                  Step 1: Get User Info
                </h5>
                <div className="bg-black/20 rounded-lg p-4 font-mono text-lg">
                  <div className="text-green-300">
                    let name = prompt("Your name?");
                  </div>
                  <div className="text-blue-300">
                    let age = prompt("Your age?");
                  </div>
                </div>
              </div>
              <div className="bg-white/20 rounded-xl p-6">
                <h5 className="text-xl font-bold mb-4">
                  Step 2: Display Greeting
                </h5>
                <div className="bg-black/20 rounded-lg p-4 font-mono text-lg">
                  <div className="text-yellow-300">
                    alert("Hi " + name + "!");
                  </div>
                  <div className="text-pink-300">alert("You are " + age);</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveJavaScriptSlide;
