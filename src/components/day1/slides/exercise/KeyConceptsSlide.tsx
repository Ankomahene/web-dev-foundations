import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Hash, Type, MessageSquare } from 'lucide-react';

const KeyConceptsSlide: React.FC = () => {
  const concepts = [
    {
      concept: 'Number()',
      explanation: 'Converts text input to actual numbers for calculations',
      example: 'Number("5") → 5',
      realExample: 'Without this, "5" + "3" = "53" (text joining)',
      color: 'blue',
      icon: Hash,
      delay: 0.2,
    },
    {
      concept: 'String Concatenation',
      explanation: 'Joining text together using the + operator',
      example: '"Hello " + "World" → "Hello World"',
      realExample: '"The sum is: " + 8 → "The sum is: 8"',
      color: 'green',
      icon: Type,
      delay: 0.4,
    },
    {
      concept: 'prompt()',
      explanation: 'Gets input from the user through a popup dialog',
      example: 'prompt("Your name?") → user types response',
      realExample: 'Always returns text, even if user types numbers',
      color: 'purple',
      icon: MessageSquare,
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-100 rounded-full mb-8">
            <Lightbulb className="w-12 h-12 text-purple-600" />
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            Key Concepts Explained
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              Let's understand the{' '}
              <strong className="text-purple-600 text-5xl">
                important programming concepts
              </strong>{' '}
              you just used
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              These are fundamental building blocks every programmer needs to
              know
            </p>
          </motion.div>
        </motion.div>

        <div className="space-y-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: concept.delay }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Concept Explanation */}
                <div>
                  <div className="flex items-center space-x-6 mb-8">
                    <div
                      className={`w-20 h-20 bg-${concept.color}-100 rounded-full flex items-center justify-center`}
                    >
                      <concept.icon
                        className={`w-12 h-12 text-${concept.color}-600`}
                      />
                    </div>
                    <h3
                      className={`text-4xl font-bold text-${concept.color}-600`}
                    >
                      {concept.concept}
                    </h3>
                  </div>

                  <p className="text-2xl text-gray-700 leading-relaxed mb-6">
                    {concept.explanation}
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      💡 Why This Matters:
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {concept.realExample}
                    </p>
                  </div>
                </div>

                {/* Code Example */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-6">
                    Example:
                  </h4>
                  <div
                    className={`bg-${concept.color}-50 rounded-2xl p-8 border-2 border-${concept.color}-200`}
                  >
                    <code
                      className={`text-2xl text-${concept.color}-700 font-mono block text-center`}
                    >
                      {concept.example}
                    </code>
                  </div>

                  {/* Visual representation */}
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center space-x-4 bg-gray-100 rounded-xl p-4">
                      <span className="text-lg text-gray-600">Input</span>
                      <div
                        className={`w-4 h-4 bg-${concept.color}-500 rounded-full`}
                      ></div>
                      <span className="text-lg font-mono text-gray-800">
                        {concept.example.split(' → ')[0]}
                      </span>
                      <span className="text-2xl">→</span>
                      <span className="text-lg font-mono text-gray-800">
                        {concept.example.split(' → ')[1]}
                      </span>
                      <div
                        className={`w-4 h-4 bg-${concept.color}-500 rounded-full`}
                      ></div>
                      <span className="text-lg text-gray-600">Output</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <Lightbulb className="w-20 h-20 mx-auto mb-6 text-orange-200" />
              <h3 className="text-4xl font-bold mb-6">🧠 Memory Tip</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <h4 className="text-2xl font-bold mb-3">📥 Input</h4>
                <p className="text-lg">prompt() gets data FROM users</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <h4 className="text-2xl font-bold mb-3">🔄 Process</h4>
                <p className="text-lg">Number() converts text to numbers</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <h4 className="text-2xl font-bold mb-3">📤 Output</h4>
                <p className="text-lg">alert() shows results TO users</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              🎯 These Concepts Are Everywhere!
            </h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Every program you'll ever write uses these same basic concepts -
              getting input, processing data, and showing output.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyConceptsSlide;
