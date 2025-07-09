import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Repeat, ArrowRight } from 'lucide-react';

const LoopsSlide: React.FC = () => {
  const examples = [
    {
      title: 'Count to 3',
      description: 'Print numbers 1, 2, 3',
      code: 'for (let i = 1; i <= 3; i++)',
      output: ['1', '2', '3'],
      explanation: 'Repeats 3 times, counting from 1 to 3',
      color: 'blue',
      delay: 0.2,
    },
    {
      title: 'Greet Friends',
      description: 'Say hello to each friend',
      code: 'for (let friend of friends)',
      output: ['Hello Alice!', 'Hello Bob!', 'Hello Charlie!'],
      explanation: 'Repeats for each item in the friends list',
      color: 'green',
      delay: 0.4,
    },
    {
      title: 'Countdown',
      description: 'Count down from 3 to 1',
      code: 'for (let i = 3; i >= 1; i--)',
      output: ['3', '2', '1'],
      explanation: 'Repeats 3 times, counting backwards',
      color: 'purple',
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-green-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
            <RotateCcw className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">Loops</h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl mb-8"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-6">
              Loops help you{' '}
              <strong className="text-green-600 text-5xl">repeat code</strong>{' '}
              multiple times
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Instead of writing the same code over and over, just use a loop!
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
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {example.title}
                </h3>
                <p className="text-xl text-gray-600">{example.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Code */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: example.delay + 0.2 }}
                  className="bg-gray-900 rounded-xl p-6"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <Repeat className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">
                      Loop Code
                    </span>
                  </div>
                  <code className="text-lg font-mono text-white">
                    {example.code}
                  </code>
                </motion.div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-gray-400" />
                </div>

                {/* Output */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: example.delay + 0.4 }}
                  className={`bg-${example.color}-50 rounded-xl p-6 border-2 border-${example.color}-200`}
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <RotateCcw
                      className={`w-5 h-5 text-${example.color}-600`}
                    />
                    <span className={`text-${example.color}-700 font-semibold`}>
                      Output
                    </span>
                  </div>
                  <div className="space-y-2">
                    {example.output.map((output, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: example.delay + 0.6 + idx * 0.2,
                        }}
                        className={`bg-${example.color}-100 rounded-lg p-3 text-center`}
                      >
                        <code
                          className={`text-lg font-mono text-${example.color}-800 font-bold`}
                        >
                          {output}
                        </code>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: example.delay + 0.8 }}
                className="mt-6 text-center"
              >
                <p className="text-lg text-gray-600 italic">
                  {example.explanation}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white">
            <RotateCcw className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h3 className="text-3xl font-bold mb-4">🎯 Why Use Loops?</h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Imagine having to write "Hello!" 100 times. That's 100 lines of
              code! With a loop, you can do it in just 3 lines. Loops make
              coding much more efficient!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoopsSlide;
