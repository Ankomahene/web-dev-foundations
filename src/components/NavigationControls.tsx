import { motion } from 'framer-motion';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const NavigationControls = ({
  currentSlide,
  paginate,
  slides,
  setDirection,
  setCurrentSlide,
}: {
  currentSlide: number;
  paginate: (direction: number) => void;
  slides: { component: React.FC<{ currentSlide: number }>; title: string }[];
  setDirection: (direction: number) => void;
  setCurrentSlide: (slide: number) => void;
}) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-50">
      <motion.button
        onClick={() => paginate(-1)}
        disabled={currentSlide === 0}
        className={`p-3 rounded-full transition-all duration-200 ${
          currentSlide === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
        }`}
        whileHover={{ scale: currentSlide === 0 ? 1 : 1.1 }}
        whileTap={{ scale: currentSlide === 0 ? 1 : 0.9 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      {/* Slide Indicators */}
      <div className="flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentSlide === index
                ? 'bg-indigo-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            whileHover={{ scale: currentSlide === index ? 1.25 : 1.2 }}
            whileTap={{ scale: 1 }}
          />
        ))}
      </div>

      <motion.button
        onClick={() => paginate(1)}
        disabled={currentSlide === slides.length - 1}
        className={`p-3 rounded-full transition-all duration-200 ${
          currentSlide === slides.length - 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
        }`}
        whileHover={{ scale: currentSlide === slides.length - 1 ? 1 : 1.1 }}
        whileTap={{ scale: currentSlide === slides.length - 1 ? 1 : 0.9 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>
    </div>
  );
};
