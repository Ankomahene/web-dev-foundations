import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Code } from 'lucide-react';

const HomeworkAssignmentsSlide: React.FC = () => {
  const homeworkTasks = [
    {
      icon: Users,
      title: 'Greeting App',
      description:
        'Create an app that prompts for name and age, then displays a custom greeting',
      difficulty: 'Beginner',
      color: 'blue',
      points: [
        'Use prompt() for input',
        'Use alert() for output',
        'Combine strings with +',
      ],
      delay: 0.2,
    },
    {
      icon: Code,
      title: 'Enhanced Calculator',
      description:
        'Modify your calculator to support three numbers instead of two',
      difficulty: 'Intermediate',
      color: 'green',
      points: [
        'Add a third prompt()',
        'Update the calculation',
        'Test with different numbers',
      ],
      delay: 0.4,
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
            <BookOpen className="w-12 h-12 text-purple-600" />
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            Your Homework
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
          >
            <p className="text-3xl text-gray-700 leading-relaxed font-medium">
              Keep the momentum going! Here are your{' '}
              <strong className="text-purple-600 text-4xl">
                practice assignments
              </strong>{' '}
              to reinforce what you've learned.
            </p>
          </motion.div>
        </motion.div>

        {/* Homework Tasks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {homeworkTasks.map((task, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: task.delay }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div
                  className={`w-16 h-16 bg-${task.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <task.icon className={`w-8 h-8 text-${task.color}-600`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-3xl font-bold text-${task.color}-600`}>
                      {task.title}
                    </h3>
                    <span
                      className={`px-4 py-2 rounded-full text-lg font-medium ${
                        task.difficulty === 'Beginner'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {task.difficulty}
                    </span>
                  </div>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {task.description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800">
                      Key Steps:
                    </h4>
                    {task.points.map((point, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <div
                          className={`w-3 h-3 bg-${task.color}-500 rounded-full`}
                        ></div>
                        <span className="text-lg text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">💡 Homework Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-2xl font-bold mb-4">✅ Before You Start</h4>
                <ul className="space-y-2 text-xl text-left">
                  <li>• Open your browser console</li>
                  <li>• Review today's examples</li>
                  <li>• Have a notepad ready</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="text-2xl font-bold mb-4">🎯 Success Strategy</h4>
                <ul className="space-y-2 text-xl text-left">
                  <li>• Type code yourself (don't copy)</li>
                  <li>• Test with different inputs</li>
                  <li>• Ask questions if stuck</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeworkAssignmentsSlide;
