import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, GitBranch, Play, Target } from 'lucide-react';

const InteractiveExamplesSlide: React.FC = () => {
  const examples = [
    {
      icon: Calculator,
      title: 'Simple Calculator',
      description: 'Using variables and operators',
      code: [
        '// Variables',
        'let num1 = 10;',
        'let num2 = 5;',
        '',
        '// Operation',
        'let sum = num1 + num2;',
        '',
        '// Result',
        'console.log(sum); // 15',
      ],
      color: 'blue',
      delay: 0.2,
    },
    {
      icon: GitBranch,
      title: 'Age Checker',
      description: 'Using conditions to make decisions',
      code: [
        '// Variable',
        'let age = 20;',
        '',
        '// Condition',
        'if (age >= 18) {',
        '  console.log("Adult");',
        '} else {',
        '  console.log("Minor");',
        '}',
      ],
      color: 'green',
      delay: 0.4,
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
            <Play className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            Let's See These in Action!
          </h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Interactive examples combining everything we've learned
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: example.delay }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div
                  className={`w-16 h-16 bg-${example.color}-100 rounded-full flex items-center justify-center mb-4 mx-auto`}
                >
                  <example.icon
                    className={`w-10 h-10 text-${example.color}-600`}
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {example.title}
                </h3>
                <p className="text-xl text-gray-600">{example.description}</p>
              </div>

              <div className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-2">
                    Code Example
                  </span>
                </div>
                <pre className="text-lg font-mono text-left leading-relaxed">
                  {example.code.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: example.delay + 0.1 * idx,
                      }}
                      className={
                        line.startsWith('//')
                          ? 'text-green-400'
                          : line.includes('console.log')
                          ? 'text-yellow-300'
                          : 'text-white'
                      }
                    >
                      {line}
                    </motion.div>
                  ))}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hands-on Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-8">
            <Target className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h3 className="text-4xl font-bold mb-4">
              🎯 Hands-On Activity: Pseudocode Practice
            </h3>
            <p className="text-2xl text-blue-100 leading-relaxed">
              Let's practice thinking like a programmer!
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-6 text-center">
              Challenge: "How to Make a Sandwich"
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/20 rounded-xl p-6">
                <h5 className="text-xl font-semibold mb-4">
                  Use These Concepts:
                </h5>
                <ul className="space-y-2 text-lg">
                  <li>✅ Variables (ingredients)</li>
                  <li>✅ Conditions (if bread is fresh)</li>
                  <li>✅ Step-by-step instructions</li>
                  <li>✅ Loops (for multiple sandwiches)</li>
                </ul>
              </div>
              <div className="bg-white/20 rounded-xl p-6">
                <h5 className="text-xl font-semibold mb-4">Think About:</h5>
                <ul className="space-y-2 text-lg">
                  <li>🤔 What ingredients do you need?</li>
                  <li>🤔 What's the order of steps?</li>
                  <li>🤔 What if you're out of bread?</li>
                  <li>🤔 How to make 5 sandwiches?</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveExamplesSlide;
