import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Star,
  Globe,
  FileText,
  Code,
  Play,
  ExternalLink,
} from 'lucide-react';

const BonusResourcesSlide: React.FC = () => {
  const bonusChallenges = [
    'Create a simple age calculator that tells you how many days old you are',
    'Build a temperature converter (Celsius to Fahrenheit)',
    'Make a tip calculator for restaurants',
    'Create a simple quiz with 3 questions',
  ];

  const resources = [
    {
      icon: Globe,
      title: 'W3Schools JavaScript Intro',
      description: 'Comprehensive beginner-friendly JavaScript tutorial',
      url: 'https://www.w3schools.com/js/js_intro.asp',
      color: 'blue',
      delay: 0.2,
    },
    {
      icon: FileText,
      title: 'MDN JavaScript Basics',
      description: 'Official Mozilla documentation for JavaScript fundamentals',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics',
      color: 'orange',
      delay: 0.4,
    },
    {
      icon: Code,
      title: 'Replit.com',
      description:
        'Code online without installing anything - perfect for practice',
      url: 'https://replit.com/',
      color: 'green',
      delay: 0.6,
    },
    {
      icon: Play,
      title: 'What is Programming? - Video',
      description: 'Great video explanation of programming concepts',
      url: 'https://www.youtube.com/watch?v=FCMxA3m_Imc',
      color: 'red',
      delay: 0.8,
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-8">
            <Zap className="w-12 h-12 text-orange-600" />
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            Bonus & Resources
          </h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Want to go further? Here are extra challenges and helpful resources
          </p>
        </motion.div>

        {/* Bonus Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <Zap className="w-20 h-20 mx-auto mb-6 text-orange-200" />
              <h3 className="text-4xl font-bold mb-6">🚀 Bonus Challenges</h3>
              <p className="text-2xl text-orange-100 leading-relaxed">
                Feeling adventurous? Try these extra projects!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bonusChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + 0.2 * index }}
                  className="bg-white/10 rounded-xl p-6 flex items-start space-x-4"
                >
                  <Star className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                  <span className="text-xl leading-relaxed">{challenge}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            📚 Helpful Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: resource.delay }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-16 h-16 bg-${resource.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <resource.icon
                      className={`w-8 h-8 text-${resource.color}-600`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold text-${resource.color}-600 mb-4`}
                    >
                      {resource.title}
                    </h3>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-3 text-${resource.color}-600 hover:text-${resource.color}-700 font-medium text-lg transition-colors`}
                    >
                      <span>Visit Resource</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              🎯 Practice Makes Perfect
            </h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              The best way to learn programming is by doing. Don't just read
              about it - open your browser console and start experimenting!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BonusResourcesSlide;
