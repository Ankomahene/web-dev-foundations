import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Plus, Equal } from 'lucide-react';

const OperatorsSlide: React.FC = () => {
  const operators = [
    {
      icon: Plus,
      category: 'Math Operators',
      description: 'Do calculations with numbers',
      examples: [
        { code: '5 + 3', result: '8', operation: 'Addition' },
        { code: '10 - 4', result: '6', operation: 'Subtraction' },
        { code: '6 * 2', result: '12', operation: 'Multiplication' },
        { code: '8 / 2', result: '4', operation: 'Division' },
      ],
      color: 'blue',
      delay: 0.2,
    },
    {
      icon: Equal,
      category: 'Comparison Operators',
      description: 'Compare values and get true/false',
      examples: [
        { code: '5 > 3', result: 'true', operation: 'Greater than' },
        { code: '2 < 10', result: 'true', operation: 'Less than' },
        { code: '5 === 5', result: 'true', operation: 'Equal to' },
        { code: '3 !== 7', result: 'true', operation: 'Not equal to' },
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
            <Calculator className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">Operators</h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Perform calculations and comparisons with your data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {operators.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: category.delay }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-8">
                <div
                  className={`w-20 h-20 bg-${category.color}-100 rounded-full flex items-center justify-center mb-4 mx-auto`}
                >
                  <category.icon
                    className={`w-12 h-12 text-${category.color}-600`}
                  />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {category.category}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.examples.map((example, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: category.delay + 0.1 * idx,
                    }}
                    className="bg-gray-50 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <code className="text-2xl font-mono text-gray-800 font-bold">
                          {example.code}
                        </code>
                        <span className="text-xl text-gray-500">=</span>
                        <code
                          className={`text-2xl font-mono text-${category.color}-600 font-bold`}
                        >
                          {example.result}
                        </code>
                      </div>
                      <span className="text-lg text-gray-500">
                        {example.operation}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
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
            <Calculator className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h3 className="text-3xl font-bold mb-4">🎯 Try It Yourself!</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Operators are like tools in a toolbox. Math operators help you
              calculate, and comparison operators help you make decisions!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OperatorsSlide;
