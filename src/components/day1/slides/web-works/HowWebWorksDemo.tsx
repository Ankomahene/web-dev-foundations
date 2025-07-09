import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  User,
  Server,
  Globe,
  FileText,
  Palette,
  Code,
  ArrowRight,
  Wifi,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface SlideProps {
  children: React.ReactNode;
  isActive: boolean;
  direction: 'left' | 'right' | 'none';
}

const Slide: React.FC<SlideProps> = ({ children, isActive, direction }) => {
  return (
    <motion.div
      initial={{
        x: direction === 'left' ? -1000 : direction === 'right' ? 1000 : 0,
        opacity: 0,
      }}
      animate={{
        x: isActive ? 0 : direction === 'left' ? -1000 : 1000,
        opacity: isActive ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
};

const TypewriterEffect: React.FC<{ text: string; isActive: boolean }> = ({
  text,
  isActive,
}) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!isActive) {
      setDisplayText('');
      return;
    }

    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(text.substring(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text, isActive]);

  return (
    <span className="font-mono text-lg">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const FloatingFile: React.FC<{
  icon: React.ReactNode;
  label: string;
  delay: number;
  isActive: boolean;
}> = ({ icon, label, delay, isActive }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: isActive ? 1 : 0,
      y: isActive ? 0 : 20,
    }}
    transition={{ delay: isActive ? delay / 1000 : 0, duration: 0.5 }}
    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
  >
    <div className="text-blue-600 mb-2">{icon}</div>
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </motion.div>
);

const PulseAnimation: React.FC<{
  children: React.ReactNode;
  isActive: boolean;
}> = ({ children, isActive }) => (
  <motion.div
    animate={{ scale: isActive ? [1, 1.05, 1] : 1 }}
    transition={{ repeat: isActive ? Infinity : 0, duration: 2 }}
  >
    {children}
  </motion.div>
);

const HowWebWorksDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [slideDirection, setSlideDirection] = useState<
    'left' | 'right' | 'none'
  >('none');

  const totalSteps = 4; // 4 steps in the demo

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setSlideDirection('left');
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setSlideDirection('right');
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex !== currentStep) {
      setSlideDirection(stepIndex > currentStep ? 'right' : 'left');
      setCurrentStep(stepIndex);
    }
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="text-center py-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Interactive Demo
        </motion.h1>
      </div>

      {/* Demo Container */}
      <div className="flex-1 relative overflow-hidden">
        {/* Step 1: User Types URL */}
        <Slide
          isActive={currentStep === 0}
          direction={
            currentStep === 0
              ? 'none'
              : slideDirection === 'left'
              ? 'right'
              : 'left'
          }
        >
          <div className="h-full flex items-center justify-center py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  User Types a Web Address
                </h2>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
                  Every web journey begins when someone types a URL into their
                  browser's address bar
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="relative">
                      <User className="w-24 h-24 mx-auto text-blue-600 mb-4" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full"
                      />
                    </div>
                    <p className="text-lg font-medium text-gray-700">User</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                  >
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <Monitor className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <Globe className="w-5 h-5 text-gray-400" />
                          <div className="flex-1 bg-white rounded px-3 py-2">
                            <TypewriterEffect
                              text="www.example.com"
                              isActive={currentStep === 0}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg font-medium text-gray-700">Browser</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Step 2: Browser Sends Request */}
        <Slide
          isActive={currentStep === 1}
          direction={
            currentStep === 1
              ? 'none'
              : slideDirection === 'left'
              ? 'right'
              : 'left'
          }
        >
          <div className="h-full flex items-center justify-center py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Browser Sends HTTP Request
                </h2>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
                  The browser translates the URL into an HTTP request and sends
                  it across the internet
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <PulseAnimation isActive={currentStep === 1}>
                      <Monitor className="w-20 h-20 mx-auto text-blue-600 mb-4" />
                    </PulseAnimation>
                    <p className="text-lg font-medium text-gray-700">Browser</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ x: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <ArrowRight className="w-16 h-16 mx-auto text-purple-600" />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        <Wifi className="w-8 h-8 text-green-500" />
                      </motion.div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">HTTP Request</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <PulseAnimation isActive={currentStep === 1}>
                      <Server className="w-20 h-20 mx-auto text-green-600 mb-4" />
                    </PulseAnimation>
                    <p className="text-lg font-medium text-gray-700">Server</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Step 3: Server Responds */}
        <Slide
          isActive={currentStep === 2}
          direction={
            currentStep === 2
              ? 'none'
              : slideDirection === 'left'
              ? 'right'
              : 'left'
          }
        >
          <div className="h-full flex items-center justify-center py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Server Responds with Files
                </h2>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
                  The server finds the requested files and sends them back to
                  the browser
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-center"
                  >
                    <div className="relative">
                      <Server className="w-24 h-24 mx-auto text-green-600 mb-6" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"
                      />
                    </div>
                    <p className="text-lg font-medium text-gray-700 mb-4">
                      Server
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-white rounded-lg shadow-lg p-6"
                    >
                      <h4 className="font-semibold text-gray-800 mb-4">
                        Server Response
                      </h4>
                      <div className="space-y-3">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">Status: 200 OK</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700">Files Found</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="relative mb-6">
                      <motion.div
                        animate={{ x: [0, 20, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: 0.5,
                        }}
                      >
                        <ArrowRight className="w-12 h-12 mx-auto text-purple-600" />
                      </motion.div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <FloatingFile
                        icon={<FileText className="w-8 h-8" />}
                        label="index.html"
                        delay={500}
                        isActive={currentStep === 2}
                      />
                      <FloatingFile
                        icon={<Palette className="w-8 h-8" />}
                        label="style.css"
                        delay={1000}
                        isActive={currentStep === 2}
                      />
                      <FloatingFile
                        icon={<Code className="w-8 h-8" />}
                        label="script.js"
                        delay={1500}
                        isActive={currentStep === 2}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Step 4: Browser Renders */}
        <Slide
          isActive={currentStep === 3}
          direction={
            currentStep === 3
              ? 'none'
              : slideDirection === 'left'
              ? 'right'
              : 'left'
          }
        >
          <div className="h-full flex items-center justify-center py-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Browser Displays the Webpage
                </h2>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
                  The browser processes the files to render the final webpage
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-center"
                  >
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      {[
                        {
                          icon: FileText,
                          label: 'Structure',
                          color: 'blue',
                          delay: 0,
                        },
                        {
                          icon: Palette,
                          label: 'Styling',
                          color: 'purple',
                          delay: 500,
                        },
                        {
                          icon: Code,
                          label: 'Interactivity',
                          color: 'green',
                          delay: 1000,
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: item.delay / 1000 }}
                          className="flex items-center justify-center space-x-4"
                        >
                          <item.icon
                            className={`w-8 h-8 text-${item.color}-600`}
                          />
                          <ArrowRight className="w-6 h-6 text-gray-400" />
                          <span className="text-gray-700">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                    <Monitor className="w-20 h-20 mx-auto text-blue-600 mb-4" />
                    <p className="text-lg font-medium text-gray-700">
                      Browser Processing
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      className="bg-white rounded-lg shadow-2xl p-8 mb-4"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <Globe className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="space-y-4">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: 2, duration: 0.5 }}
                          className="h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '80%' }}
                          transition={{ delay: 2.2, duration: 0.5 }}
                          className="h-3 bg-gradient-to-r from-purple-200 to-pink-200 rounded"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '60%' }}
                          transition={{ delay: 2.4, duration: 0.5 }}
                          className="h-3 bg-gradient-to-r from-pink-200 to-red-200 rounded"
                        />
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.6 }}
                            className="h-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded"
                          />
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.8 }}
                            className="h-8 bg-gradient-to-r from-green-100 to-green-200 rounded"
                          />
                        </div>
                      </div>
                    </motion.div>
                    <p className="text-lg font-medium text-gray-700 mb-4">
                      Final Webpage
                    </p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 3 }}
                      className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white"
                    >
                      <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">
                        Journey Complete!
                      </h3>
                      <p className="text-sm">
                        This process happens in milliseconds!
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>

      {/* Demo Navigation */}
      <div className="py-6 flex justify-center items-center space-x-4">
        <motion.button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`p-2 rounded-full transition-all duration-200 ${
            currentStep === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
          }`}
          whileHover={{ scale: currentStep === 0 ? 1 : 1.1 }}
          whileTap={{ scale: currentStep === 0 ? 1 : 0.9 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <div className="flex space-x-2">
          {Array.from({ length: totalSteps }, (_, index) => (
            <motion.button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentStep === index
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: currentStep === index ? 1.25 : 1.2 }}
            />
          ))}
        </div>

        <motion.button
          onClick={nextStep}
          disabled={currentStep === totalSteps - 1}
          className={`p-2 rounded-full transition-all duration-200 ${
            currentStep === totalSteps - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
          }`}
          whileHover={{ scale: currentStep === totalSteps - 1 ? 1 : 1.1 }}
          whileTap={{ scale: currentStep === totalSteps - 1 ? 1 : 0.9 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default HowWebWorksDemo;
