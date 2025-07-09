import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, AlertTriangle, Code, Keyboard } from 'lucide-react';

const JavaScriptExamplesSlide: React.FC = () => {
  const codeExamples = [
    {
      title: 'Hello World',
      code: 'console.log("Hello, world!");',
      description: 'Display a message in the console',
      icon: Terminal,
      color: 'blue',
      delay: 0.2,
    },
    {
      title: 'Alert Message',
      code: 'alert("Welcome to Web Dev!");',
      description: 'Show a popup message',
      icon: AlertTriangle,
      color: 'orange',
      delay: 0.4,
    },
    {
      title: 'Variables',
      code: 'let user = "Mary";\nlet school = "Dev Academy";',
      description: 'Store information in variables',
      icon: Code,
      color: 'green',
      delay: 0.6,
    },
    {
      title: 'User Input',
      code: 'let name = prompt("What is your name?");\nalert("Hi, " + name);',
      description: 'Get input from the user',
      icon: Keyboard,
      color: 'purple',
      delay: 0.8,
    },
  ];

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
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            Try These Examples
          </h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Copy and paste these into your browser console
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {codeExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: example.delay }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-16 h-16 bg-${example.color}-100 rounded-full flex items-center justify-center`}
                >
                  <example.icon
                    className={`w-8 h-8 text-${example.color}-600`}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {example.title}
                </h3>
              </div>
              <p className="text-xl text-gray-600 mb-6">
                {example.description}
              </p>
              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <pre className="text-2xl font-mono text-green-400 whitespace-pre-wrap">
                  {example.code}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white">
            <Terminal className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h3 className="text-3xl font-bold mb-4">🎯 Your Turn!</h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Open your browser console and try each example. Don't just copy -
              type them out to build muscle memory!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JavaScriptExamplesSlide;
