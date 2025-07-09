import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, FileText, Palette, Cpu, Keyboard, Mouse } from 'lucide-react';

const HardwareVsSoftwareSlide: React.FC = () => {
  return (
    <div className="min-h-full flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-gray-800 mb-8">
            Hardware vs Software
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            Understanding the difference between the physical and digital parts
            of computing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Hardware Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-3xl p-8 text-white shadow-2xl"
          >
            <div className="text-center mb-8">
              <Cpu className="w-20 h-20 mx-auto mb-6 text-gray-200" />
              <h2 className="text-4xl font-bold mb-4">Hardware</h2>
              <p className="text-xl text-gray-200 font-medium">
                Physical Parts
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-4 bg-white/10 rounded-xl p-4"
              >
                <Monitor className="w-8 h-8 text-gray-200" />
                <span className="text-xl font-medium">Computer Screen</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-4 bg-white/10 rounded-xl p-4"
              >
                <Keyboard className="w-8 h-8 text-gray-200" />
                <span className="text-xl font-medium">Keyboard</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center space-x-4 bg-white/10 rounded-xl p-4"
              >
                <Mouse className="w-8 h-8 text-gray-200" />
                <span className="text-xl font-medium">Mouse</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Software Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl"
          >
            <div className="text-center mb-8">
              <FileText className="w-20 h-20 mx-auto mb-6 text-blue-200" />
              <h2 className="text-4xl font-bold mb-4">Software</h2>
              <p className="text-xl text-blue-200 font-medium">Digital Parts</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-4 bg-white/10 rounded-xl p-4"
              >
                <FileText className="w-8 h-8 text-blue-200" />
                <span className="text-xl font-medium">Apps & Programs</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center space-x-4 bg-white/10 rounded-xl p-4"
              >
                <Palette className="w-8 h-8 text-blue-200" />
                <span className="text-xl font-medium">Operating Systems</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex items-center space-x-4 bg-white/10 rounded-xl p-4"
              >
                <FileText className="w-8 h-8 text-blue-200" />
                <span className="text-xl font-medium">Code & Instructions</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mb-6"
            >
              <Palette className="w-20 h-20 mx-auto text-purple-200" />
            </motion.div>
            <h3 className="text-4xl font-bold mb-4">
              🚀 Software brings hardware to life!
            </h3>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Without software, your computer would just be an expensive
              paperweight. Software tells the hardware what to do and how to do
              it.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HardwareVsSoftwareSlide;
