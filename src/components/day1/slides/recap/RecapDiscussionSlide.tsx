import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star } from 'lucide-react';

const RecapDiscussionSlide: React.FC = () => {
  const keySkills = [
    'Variables and Data Types',
    'JavaScript Console',
    'User Input with prompt()',
    'Displaying Output with alert()',
    'Basic Arithmetic Operations',
    'String Concatenation',
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
            <MessageCircle className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            Let's Discuss & Reflect
          </h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Time to share thoughts and address questions
          </p>
        </motion.div>

        {/* Skills Learned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            🌟 New Skills Unlocked
          </h2>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keySkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + 0.1 * index }}
                  className="flex items-center space-x-4 bg-white/10 rounded-xl p-6"
                >
                  <Star className="w-8 h-8 text-yellow-300 flex-shrink-0" />
                  <span className="text-xl font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Q&A Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <MessageCircle className="w-20 h-20 mx-auto mb-6 text-green-200" />
              <h3 className="text-4xl font-bold mb-6">
                Questions & Discussion
              </h3>
              <p className="text-2xl text-green-100 leading-relaxed">
                Let's discuss what you've learned and address any questions!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/10 rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-6">
                  💭 Reflection Questions
                </h4>
                <ul className="space-y-4 text-xl">
                  <li>• What surprised you most about programming?</li>
                  <li>• Which concept felt most challenging?</li>
                  <li>• What would you like to build next?</li>
                  <li>• How do you feel about your first coding experience?</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-6">🤔 Common Questions</h4>
                <ul className="space-y-4 text-xl">
                  <li>• "How long does it take to become a developer?"</li>
                  <li>• "What should I learn next?"</li>
                  <li>• "Is programming really for everyone?"</li>
                  <li>• "How do I practice what I learned?"</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecapDiscussionSlide;
