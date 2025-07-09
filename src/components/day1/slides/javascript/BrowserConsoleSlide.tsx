import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Code, MessageSquare } from 'lucide-react';

const BrowserConsoleSlide: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Open Browser Console',
      description: 'Right-click → Inspect → Console tab',
      icon: Monitor,
      color: 'blue',
      delay: 0.2,
    },
    {
      step: 2,
      title: 'Try Your First Code',
      description: 'Type commands and see instant results',
      icon: Code,
      color: 'green',
      delay: 0.4,
    },
    {
      step: 3,
      title: 'Interact with Users',
      description: 'Use prompt() and alert() functions',
      icon: MessageSquare,
      color: 'purple',
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-8">
            <span className="text-4xl font-bold text-blue-600">3</span>
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            Browser Console Setup
          </h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            3 simple steps to start coding in your browser
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: step.delay }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div
                className={`w-20 h-20 bg-${step.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}
              >
                <step.icon className={`w-12 h-12 text-${step.color}-600`} />
              </div>
              <div
                className={`w-12 h-12 bg-${step.color}-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto`}
              >
                {step.step}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-xl text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">💡 Pro Tip</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Press <strong>F12</strong> on your keyboard as a shortcut to open
              Developer Tools instantly!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrowserConsoleSlide;
