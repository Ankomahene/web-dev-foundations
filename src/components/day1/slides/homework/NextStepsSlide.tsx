import React from 'react';
import { motion } from 'framer-motion';
import { Target, Calendar, Star, Sparkles } from 'lucide-react';

const NextStepsSlide: React.FC = () => {
  const upcomingDays = [
    {
      day: 'Day 2',
      title: 'HTML Structure',
      description: 'Learn to create web page structure with HTML elements',
      color: 'orange',
      icon: '📄',
      delay: 0.2,
    },
    {
      day: 'Day 3',
      title: 'CSS Styling',
      description:
        'Make your web pages beautiful with colors, fonts, and layouts',
      color: 'pink',
      icon: '🎨',
      delay: 0.4,
    },
    {
      day: 'Day 4+',
      title: 'Interactive Projects',
      description: 'Build complete web applications with JavaScript',
      color: 'purple',
      icon: '🚀',
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-8">
            <Target className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            What's Next?
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
          >
            <p className="text-3xl text-gray-700 leading-relaxed font-medium">
              Your programming journey is just beginning!{' '}
              <strong className="text-blue-600 text-4xl">Amazing things</strong>{' '}
              are coming in the next few days.
            </p>
          </motion.div>
        </motion.div>

        {/* Upcoming Days Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            🗓️ Coming Up Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingDays.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: day.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{day.icon}</div>
                  <div
                    className={`w-20 h-20 bg-${day.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}
                  >
                    <Calendar className={`w-10 h-10 text-${day.color}-600`} />
                  </div>
                  <h3
                    className={`text-2xl font-bold text-${day.color}-600 mb-2`}
                  >
                    {day.day}
                  </h3>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    {day.title}
                  </h4>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {day.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Encouragement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <Sparkles className="w-20 h-20 mx-auto mb-6 text-green-200" />
              <h3 className="text-4xl font-bold mb-6">
                🌟 You're On Your Way!
              </h3>
              <p className="text-2xl text-green-100 leading-relaxed max-w-4xl mx-auto">
                Every expert developer started exactly where you are right now.
                Complete your homework, stay curious, and come back ready to
                create amazing things!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div className="text-left">
                <h3 className="text-4xl font-bold mb-6">🎉 Great Job Today!</h3>
                <p className="text-xl leading-relaxed mb-6">
                  You've taken your first steps into programming. Keep
                  practicing, stay curious, and remember - every expert was once
                  a beginner!
                </p>
                <div className="flex items-center space-x-4">
                  <Star className="w-8 h-8 text-yellow-300" />
                  <span className="text-lg font-semibold">
                    See you tomorrow!
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🚀</div>
                <h4 className="text-2xl font-bold">Ready for Day 2?</h4>
                <p className="text-lg text-purple-100 mt-2">
                  We'll build our first web page!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextStepsSlide;
