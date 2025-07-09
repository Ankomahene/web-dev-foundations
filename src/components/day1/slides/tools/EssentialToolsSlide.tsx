import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Monitor, Terminal } from 'lucide-react';

const EssentialToolsSlide: React.FC = () => {
  const tools = [
    {
      icon: Code2,
      title: 'VS Code',
      description: 'Your main code editor',
      features: [
        'Syntax highlighting',
        'Auto-completion',
        'Debugging',
        'Extensions',
      ],
      color: 'blue',
      delay: 0.2,
    },
    {
      icon: Monitor,
      title: 'Web Browser',
      description: 'For testing your websites',
      features: [
        'Chrome DevTools',
        'Live preview',
        'Mobile simulation',
        'Performance testing',
      ],
      color: 'green',
      delay: 0.4,
    },
    {
      icon: Terminal,
      title: 'Terminal',
      description: 'Run commands and scripts',
      features: [
        'File navigation',
        'Package installation',
        'Git commands',
        'Server startup',
      ],
      color: 'purple',
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
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            Essential Tools
          </h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            The three must-have tools for every web developer
          </p>
        </motion.div>

        {/* Main Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: tool.delay }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`w-20 h-20 bg-${tool.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}
              >
                <tool.icon className={`w-12 h-12 text-${tool.color}-600`} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                {tool.title}
              </h3>
              <p className="text-xl text-gray-600 text-center mb-6">
                {tool.description}
              </p>
              <div className="space-y-3">
                {tool.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: tool.delay + 0.1 * idx,
                    }}
                    className="flex items-center space-x-3"
                  >
                    <div
                      className={`w-3 h-3 bg-${tool.color}-500 rounded-full`}
                    ></div>
                    <span className="text-lg text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EssentialToolsSlide;
