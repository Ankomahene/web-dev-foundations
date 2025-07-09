import React from 'react';
import { motion } from 'framer-motion';
import { Code, FileText, CheckCircle, Zap, Layout } from 'lucide-react';

const ProgrammingVsMarkupSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-100 rounded-full mb-8">
            <span className="text-4xl font-bold text-purple-600">VS</span>
          </div>
          <h1 className="text-8xl font-bold text-gray-800 mb-12">
            Programming vs Markup
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-16 shadow-2xl"
          >
            <p className="text-4xl text-gray-700 leading-relaxed font-medium mb-8">
              Understanding the{' '}
              <strong className="text-purple-600 text-5xl">
                important distinction
              </strong>
            </p>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Not all computer languages work the same way
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-green-50 border-4 border-green-200 rounded-3xl p-12"
          >
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-4xl font-bold text-green-800 mb-6">
                Programming Languages
              </h3>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <p className="text-2xl text-green-700 leading-relaxed">
                Create logic, calculations, and interactive features
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-green-800">Examples</h4>
                  <p className="text-lg text-green-700">
                    JavaScript, Python, Java, C++
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-green-800">Can Do</h4>
                  <p className="text-lg text-green-700">
                    Make decisions, calculations, respond to user input
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-green-800">
                    Think of it as
                  </h4>
                  <p className="text-lg text-green-700">
                    The "brain" that makes things happen
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Markup Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-blue-50 border-4 border-blue-200 rounded-3xl p-12"
          >
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-blue-800 mb-6">
                Markup Languages
              </h3>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Layout className="w-8 h-8 text-white" />
              </div>
              <p className="text-2xl text-blue-700 leading-relaxed">
                Structure and format content
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-blue-800">Examples</h4>
                  <p className="text-lg text-blue-700">
                    HTML (structure), CSS (styling)
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-blue-800">Can Do</h4>
                  <p className="text-lg text-blue-700">
                    Describe how content should look and be organized
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-blue-800">
                    Think of it as
                  </h4>
                  <p className="text-lg text-blue-700">
                    The "skeleton" and "appearance" of content
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div className="text-6xl">🧠</div>
                <div className="text-4xl">+</div>
                <div className="text-6xl">🎨</div>
                <div className="text-4xl">=</div>
                <div className="text-6xl">🌐</div>
              </div>
              <h3 className="text-4xl font-bold mb-6">
                Together They Create Amazing Websites!
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <h4 className="text-2xl font-bold mb-3">HTML</h4>
                <p className="text-lg">Structure & Content</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <h4 className="text-2xl font-bold mb-3">CSS</h4>
                <p className="text-lg">Styling & Layout</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <h4 className="text-2xl font-bold mb-3">JavaScript</h4>
                <p className="text-lg">Logic & Interactivity</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              🎯 Today We Focus on JavaScript!
            </h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              JavaScript is a true programming language - it can think,
              calculate, and make decisions!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgrammingVsMarkupSlide;
