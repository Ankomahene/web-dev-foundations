import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Monitor, Wifi, ArrowRight, FileText } from 'lucide-react';

const HowWebWorksFourStepsSlide: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'User types a web address (URL)',
      icon: Globe,
      description: 'Like typing "google.com" in your browser',
      color: 'blue',
    },
    {
      number: 2,
      title: 'Browser sends request to server',
      icon: Wifi,
      description: 'Your browser asks the internet for the website',
      color: 'purple',
    },
    {
      number: 3,
      title: 'Server sends back files',
      icon: FileText,
      description: 'HTML, CSS, and JavaScript files are returned',
      color: 'green',
    },
    {
      number: 4,
      title: 'Browser displays the website',
      icon: Monitor,
      description: 'Your browser puts everything together to show the page',
      color: 'orange',
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
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            The 4-Step Process
          </h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Here's exactly what happens when you visit a website
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              >
                <div
                  className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}
                >
                  <span className={`text-2xl font-bold text-${step.color}-600`}>
                    {step.number}
                  </span>
                </div>
                <div
                  className={`w-20 h-20 bg-${step.color}-50 rounded-full flex items-center justify-center mb-6 mx-auto`}
                >
                  <step.icon className={`w-12 h-12 text-${step.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center leading-tight">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-600 text-center">
                  {step.description}
                </p>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowWebWorksFourStepsSlide;
