import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckSquare, Users, ArrowRight } from 'lucide-react';

const AgendaSlide: React.FC = () => {
  const agendaItems = [
    { topic: 'What is Software?', color: 'indigo', delay: 0.2 },
    { topic: 'Who is a Developer?', color: 'purple', delay: 0.3 },
    { topic: 'How the Web Works', color: 'blue', delay: 0.4 },
    { topic: 'Programming Basics', color: 'green', delay: 0.5 },
    { topic: 'JavaScript Introduction', color: 'yellow', delay: 0.6 },
    { topic: 'First Coding Exercise', color: 'red', delay: 0.7 },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Calendar className="w-24 h-24 mx-auto text-blue-600 mb-8" />
            <h1 className="text-7xl font-bold text-gray-800 mb-8">
              Today's Agenda
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Day 1: Introduction to Programming & the Web
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agendaItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <div
                  className={`w-6 h-6 bg-${item.color}-600 rounded-full flex-shrink-0`}
                ></div>
                <ArrowRight
                  className={`w-6 h-6 text-${item.color}-600 flex-shrink-0`}
                />
                <span className="text-xl font-medium text-gray-700 text-left">
                  {item.topic}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white mb-12"
        >
          <Users className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          <h3 className="text-4xl font-bold mb-6">Icebreaker Question</h3>
          <p className="text-2xl text-purple-100 mb-4">
            What do you hope to build someday?
          </p>
          <p className="text-lg text-purple-200">
            Share your dream project with the group!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-blue-100 rounded-2xl p-6">
            <CheckSquare className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="text-2xl font-bold text-blue-800 mb-2">
              Learning Goals
            </h4>
            <p className="text-lg text-blue-700">
              Understand the basics and build your first program
            </p>
          </div>

          <div className="bg-green-100 rounded-2xl p-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Calendar className="w-12 h-12 mx-auto text-green-600 mb-4" />
            </motion.div>
            <h4 className="text-2xl font-bold text-green-800 mb-2">
              Time to Code!
            </h4>
            <p className="text-lg text-green-700">
              Hands-on exercises throughout the day
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <div className="text-xl text-gray-500 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 inline-block">
            Use ← → arrows or spacebar to navigate through the slides
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgendaSlide;
