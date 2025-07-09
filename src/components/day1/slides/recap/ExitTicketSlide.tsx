import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, Brain } from 'lucide-react';

const ExitTicketSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-100 rounded-full mb-8">
            <Lightbulb className="w-12 h-12 text-yellow-600" />
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">Exit Ticket</h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Before you leave, please share your thoughts!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-yellow-50 border-4 border-yellow-200 rounded-3xl p-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* One thing you learned */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Brain className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">
                      One thing you learned:
                    </h4>
                  </div>
                  <div className="h-32 bg-gray-50 rounded-xl border-4 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-xl text-gray-400">
                      Write your reflection here
                    </span>
                  </div>
                </motion.div>

                {/* One thing you enjoyed */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Heart className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800">
                      One thing you enjoyed:
                    </h4>
                  </div>
                  <div className="h-32 bg-gray-50 rounded-xl border-4 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-xl text-gray-400">
                      Share what you liked
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Thank you message */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white"
              >
                <h3 className="text-3xl font-bold mb-4">
                  🙏 Thank You for Participating!
                </h3>
                <p className="text-xl leading-relaxed">
                  Your feedback helps us improve the learning experience for
                  future students. You've been amazing today!
                </p>
              </motion.div>

              {/* Next steps reminder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-8 bg-white/80 rounded-2xl p-6 border-2 border-yellow-200"
              >
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  🚀 Don't Forget Your Homework!
                </h4>
                <p className="text-xl text-gray-700">
                  Practice makes perfect. Complete your assignments and come
                  back ready for Day 2!
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExitTicketSlide;
