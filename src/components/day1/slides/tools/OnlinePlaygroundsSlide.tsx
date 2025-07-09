import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Palette } from 'lucide-react';

const OnlinePlaygroundsSlide: React.FC = () => {
  const playgrounds = [
    {
      name: 'Replit.com',
      description: 'Code online without installing anything',
      icon: Globe,
      color: 'orange',
      features: ['Instant setup', 'Collaboration', 'Multiple languages'],
    },
    {
      name: 'CodePen.io',
      description: 'Perfect for HTML, CSS, and JavaScript',
      icon: Palette,
      color: 'pink',
      features: ['Live preview', 'Community sharing', 'Templates'],
    },
  ];

  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-orange-50 via-white to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-8">
            <span className="text-4xl font-bold text-orange-600">🌐</span>
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            Online Code Playgrounds
          </h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Start coding immediately without installing anything
          </p>
        </motion.div>

        {/* Online Playgrounds */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {playgrounds.map((playground, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`w-20 h-20 bg-${playground.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <playground.icon
                      className={`w-12 h-12 text-${playground.color}-600`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-3xl font-bold text-${playground.color}-600 mb-4`}
                    >
                      {playground.name}
                    </h3>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {playground.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {playground.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className={`text-lg px-4 py-2 bg-${playground.color}-50 text-${playground.color}-700 rounded-full font-medium`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">🚀 Try Them Out!</h3>
            <p className="text-xl leading-relaxed">
              Both platforms are free and perfect for beginners. You can start
              coding right away!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OnlinePlaygroundsSlide;
