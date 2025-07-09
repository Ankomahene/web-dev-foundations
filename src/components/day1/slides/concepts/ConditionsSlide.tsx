import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const ConditionsSlide: React.FC = () => {
  const examples = [
    {
      title: 'Age Check',
      condition: 'if (age >= 18)',
      trueAction: 'Allow voting',
      falseAction: 'Too young to vote',
      color: 'blue',
      delay: 0.2,
    },
    {
      title: 'Weather Check',
      condition: 'if (weather === "sunny")',
      trueAction: 'Go to the beach',
      falseAction: 'Stay inside',
      color: 'green',
      delay: 0.4,
    },
    {
      title: 'Score Check',
      condition: 'if (score >= 90)',
      trueAction: 'Grade: A',
      falseAction: 'Grade: B or lower',
      color: 'purple',
      delay: 0.6,
    },
  ];

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
            <GitBranch className="w-12 h-12 text-purple-600" />
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">Conditions</h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl mb-8"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-6">
              Conditions help your program{' '}
              <strong className="text-purple-600 text-5xl">
                make decisions
              </strong>
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Just like in real life: "IF it's raining, THEN bring an umbrella,
              ELSE leave it at home"
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: example.delay }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {example.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Condition */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: example.delay + 0.2 }}
                  className={`bg-${example.color}-50 rounded-xl p-6 text-center border-2 border-${example.color}-200`}
                >
                  <GitBranch
                    className={`w-8 h-8 mx-auto mb-3 text-${example.color}-600`}
                  />
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Condition
                  </h4>
                  <code
                    className={`text-lg font-mono text-${example.color}-700 font-bold`}
                  >
                    {example.condition}
                  </code>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>

                {/* Results */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: example.delay + 0.4 }}
                    className="bg-green-50 rounded-xl p-4 border-2 border-green-200"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <span className="text-sm font-semibold text-green-700">
                          IF TRUE:
                        </span>
                        <p className="text-lg text-green-800">
                          {example.trueAction}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: example.delay + 0.6 }}
                    className="bg-red-50 rounded-xl p-4 border-2 border-red-200"
                  >
                    <div className="flex items-center space-x-3">
                      <XCircle className="w-6 h-6 text-red-600" />
                      <div>
                        <span className="text-sm font-semibold text-red-700">
                          IF FALSE:
                        </span>
                        <p className="text-lg text-red-800">
                          {example.falseAction}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-8 text-white">
            <GitBranch className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h3 className="text-3xl font-bold mb-4">🎯 Code Example</h3>
            <div className="bg-black/20 rounded-xl p-6 max-w-2xl mx-auto">
              <pre className="text-2xl font-mono text-left">
                <span className="text-purple-300">if</span> (age &gt;= 18) {'{'}
                <br />
                <span className="ml-4 text-green-300">
                  console.log("You can vote!");
                </span>
                <br />
                {'}'} <span className="text-purple-300">else</span> {'{'}
                <br />
                <span className="ml-4 text-red-300">
                  console.log("Too young to vote.");
                </span>
                <br />
                {'}'}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConditionsSlide;
