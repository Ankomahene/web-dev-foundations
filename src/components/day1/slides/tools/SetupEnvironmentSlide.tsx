import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Download, FileText, Play } from 'lucide-react';

const SetupEnvironmentSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-100 rounded-full mb-8">
            <Settings className="w-12 h-12 text-indigo-600" />
          </div>
          <h1 className="text-7xl font-bold text-gray-800 mb-8">
            Let's Set Up Your Environment!
          </h1>
          <p className="text-3xl text-gray-600 leading-relaxed">
            Time for a hands-on activity to get you started
          </p>
        </motion.div>

        {/* Hands-on Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🎯 Hands-On Activity</h2>
            <p className="text-2xl text-white/90 leading-relaxed">
              Follow these steps to set up your coding environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Step 1: Install VS Code */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
                  <Download className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-2xl font-bold">Install VS Code</h3>
              </div>
              <ol className="space-y-3 text-xl text-white/90">
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-blue-200">1.</span>
                  <span>Go to code.visualstudio.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-blue-200">2.</span>
                  <span>Download for your operating system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-blue-200">3.</span>
                  <span>Install and open VS Code</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-blue-200">4.</span>
                  <span>Create a new folder for your projects</span>
                </li>
              </ol>
            </motion.div>

            {/* Step 2: Create Your First File */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-green-800" />
                </div>
                <h3 className="text-2xl font-bold">Create Your First File</h3>
              </div>
              <ol className="space-y-3 text-xl text-white/90">
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-green-200">1.</span>
                  <span>Open VS Code</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-green-200">2.</span>
                  <span>Create a new file</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-green-200">3.</span>
                  <span>Save it as "hello.html"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="font-bold text-green-200">4.</span>
                  <span>Type: &lt;h1&gt;Hello World!&lt;/h1&gt;</span>
                </li>
              </ol>
            </motion.div>
          </div>

          {/* Congratulations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 text-center"
          >
            <div className="bg-white/20 rounded-2xl p-8">
              <Play className="w-16 h-16 mx-auto mb-4 text-yellow-200" />
              <h3 className="text-3xl font-bold mb-4">🎉 Congratulations!</h3>
              <p className="text-2xl font-medium">
                You've just created your first web file!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SetupEnvironmentSlide;
