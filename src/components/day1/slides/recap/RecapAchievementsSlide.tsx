import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle,
  Globe,
  Users,
  Code,
  Lightbulb,
  Calculator,
} from 'lucide-react';

const RecapAchievementsSlide: React.FC = () => {
  const achievements = [
    {
      icon: Globe,
      title: 'Understanding Software',
      description: 'You learned what software is and who builds it',
      color: 'blue',
      delay: 0.2,
    },
    {
      icon: Users,
      title: 'Developer Roles',
      description: 'Discovered different types of developers and their skills',
      color: 'green',
      delay: 0.4,
    },
    {
      icon: Code,
      title: 'How the Web Works',
      description: 'Understood the journey from URL to webpage',
      color: 'purple',
      delay: 0.6,
    },
    {
      icon: Lightbulb,
      title: 'Programming Basics',
      description:
        'Grasped core concepts like variables, data types, and logic',
      color: 'orange',
      delay: 0.8,
    },
    {
      icon: Calculator,
      title: 'First JavaScript App',
      description: 'Built your very first interactive calculator!',
      color: 'red',
      delay: 1.0,
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
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="mb-8"
          >
            <Award className="w-24 h-24 mx-auto text-yellow-500" />
          </motion.div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            🎉 Congratulations!
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              You've completed Day 1 and taken your{' '}
              <strong className="text-green-600 text-5xl">first steps</strong>{' '}
              into the world of programming!
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Look at everything you've accomplished in just one day!
            </p>
          </motion.div>
        </motion.div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: achievement.delay }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`w-20 h-20 bg-${achievement.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}
              >
                <achievement.icon
                  className={`w-12 h-12 text-${achievement.color}-600`}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {achievement.title}
              </h3>
              <p className="text-xl text-gray-600 text-center mb-6">
                {achievement.description}
              </p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: achievement.delay + 0.5 }}
                className="flex justify-center"
              >
                <CheckCircle className="w-8 h-8 text-green-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">
              🌟 You're Now a Programmer!
            </h3>
            <p className="text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Every expert developer started exactly where you are right now.
              You've built a solid foundation and should be proud of your
              progress!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecapAchievementsSlide;
