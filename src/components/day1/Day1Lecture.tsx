import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

// Import all slide components
import WelcomeSlide from './slides/WelcomeSlide';
import AgendaSlide from './slides/AgendaSlide';

// Software slides
import HardwareVsSoftwareSlide from './slides/software/HardwareVsSoftwareSlide';
import SoftwareDefinitionSlide from './slides/software/SoftwareDefinitionSlide';
import SoftwareTypesSlide from './slides/software/SoftwareTypesSlide';

// Software definition and types slides
import DeveloperDefinitionSlide from './slides/developer/DeveloperDefinitionSlide';
import DeveloperTypesSlide from './slides/developer/DeveloperTypesSlide';

// Developer Tools slides
import DeveloperToolsIntroSlide from './slides/tools/DeveloperToolsIntroSlide';
import EssentialToolsSlide from './slides/tools/EssentialToolsSlide';
import OnlinePlaygroundsSlide from './slides/tools/OnlinePlaygroundsSlide';
import SetupEnvironmentSlide from './slides/tools/SetupEnvironmentSlide';

// How the Web Works slides
import HowWebWorksIntroSlide from './slides/web-works/HowWebWorksIntroSlide';
import HowWebWorksFourStepsSlide from './slides/web-works/HowWebWorksFourStepsSlide';
import HowWebWorksKeyTermsSlide from './slides/web-works/HowWebWorksKeyTermsSlide';
import HowWebWorksActionSlide from './slides/web-works/HowWebWorksActionSlide';
import HowWebWorksDemo from './slides/web-works/HowWebWorksDemo';

// Programming slides
import ProgrammingDefinitionSlide from './slides/programming/ProgrammingDefinitionSlide';
import ProgrammingRecipeAnalogySlide from './slides/programming/ProgrammingRecipeAnalogySlide';
import ProgrammingLanguagesSlide from './slides/programming/ProgrammingLanguagesSlide';
import ProgrammingVsMarkupSlide from './slides/programming/ProgrammingVsMarkupSlide';
import ProgrammingActivitySlide from './slides/programming/ProgrammingActivitySlide';

// Core Programming Concepts slides
import CoreConceptsIntroSlide from './slides/concepts/CoreConceptsIntroSlide';
import VariablesSlide from './slides/concepts/VariablesSlide';
import DataTypesSlide from './slides/concepts/DataTypesSlide';
import OperatorsSlide from './slides/concepts/OperatorsSlide';
import ConditionsSlide from './slides/concepts/ConditionsSlide';
import LoopsSlide from './slides/concepts/LoopsSlide';
import InteractiveExamplesSlide from './slides/concepts/InteractiveExamplesSlide';

// JavaScript slides
import JavaScriptIntroSlide from './slides/javascript/JavaScriptIntroSlide';
import BrowserConsoleSlide from './slides/javascript/BrowserConsoleSlide';
import JavaScriptExamplesSlide from './slides/javascript/JavaScriptExamplesSlide';
import InteractiveJavaScriptSlide from './slides/javascript/InteractiveJavaScriptSlide';

// Exercise slides
import ExerciseIntroSlide from './slides/exercise/ExerciseIntroSlide';
import CalculatorStepsSlide from './slides/exercise/CalculatorStepsSlide';
import CompleteCodeSlide from './slides/exercise/CompleteCodeSlide';
import KeyConceptsSlide from './slides/exercise/KeyConceptsSlide';
import PairChallengesSlide from './slides/exercise/PairChallengesSlide';

// Recap slides
import RecapAchievementsSlide from './slides/recap/RecapAchievementsSlide';
import RecapDiscussionSlide from './slides/recap/RecapDiscussionSlide';
import ExitTicketSlide from './slides/recap/ExitTicketSlide';

// Homework slides
import HomeworkAssignmentsSlide from './slides/homework/HomeworkAssignmentsSlide';
import BonusResourcesSlide from './slides/homework/BonusResourcesSlide';
import NextStepsSlide from './slides/homework/NextStepsSlide';

const slides = [
  { component: WelcomeSlide, title: 'Welcome' },
  { component: AgendaSlide, title: "Today's Agenda" },

  // Software section (3 slides)
  { component: SoftwareDefinitionSlide, title: 'What is Software?' },
  { component: SoftwareTypesSlide, title: 'Types of Software' },
  { component: HardwareVsSoftwareSlide, title: 'Hardware vs Software' },

  // Developer section (2 slides)
  { component: DeveloperDefinitionSlide, title: 'Who is a Developer?' },
  { component: DeveloperTypesSlide, title: 'Types of Developers' },

  // Web-works section (4 slides + demo)
  { component: HowWebWorksIntroSlide, title: 'How the Web Works' },
  { component: HowWebWorksFourStepsSlide, title: 'The 4-Step Process' },
  { component: HowWebWorksKeyTermsSlide, title: 'Key Terms to Know' },
  { component: HowWebWorksActionSlide, title: "Let's See It in Action!" },
  { component: HowWebWorksDemo, title: 'Web Demo' },

  // Developer Tools section (4 slides)
  { component: DeveloperToolsIntroSlide, title: 'Developer Tools' },
  { component: EssentialToolsSlide, title: 'Essential Tools' },
  { component: OnlinePlaygroundsSlide, title: 'Online Code Playgrounds' },
  { component: SetupEnvironmentSlide, title: 'Setup Environment' },

  // Programming section (5 slides)
  { component: ProgrammingDefinitionSlide, title: 'What is Programming?' },
  { component: ProgrammingRecipeAnalogySlide, title: 'Recipe Analogy' },
  { component: ProgrammingLanguagesSlide, title: 'Programming Languages' },
  { component: ProgrammingVsMarkupSlide, title: 'Programming vs Markup' },
  { component: ProgrammingActivitySlide, title: 'Practice Activity' },

  // Core Programming Concepts section (7 slides)
  { component: CoreConceptsIntroSlide, title: 'Core Programming Concepts' },
  { component: VariablesSlide, title: 'Variables' },
  { component: DataTypesSlide, title: 'Data Types' },
  { component: OperatorsSlide, title: 'Operators' },
  { component: ConditionsSlide, title: 'Conditions' },
  { component: LoopsSlide, title: 'Loops' },
  { component: InteractiveExamplesSlide, title: 'Interactive Examples' },

  // JavaScript section (4 slides)
  { component: JavaScriptIntroSlide, title: 'JavaScript Introduction' },
  { component: BrowserConsoleSlide, title: 'Browser Console Setup' },
  { component: JavaScriptExamplesSlide, title: 'JavaScript Examples' },
  { component: InteractiveJavaScriptSlide, title: 'Interactive JavaScript' },

  // Exercise section (5 slides)
  { component: ExerciseIntroSlide, title: 'Hands-on Exercise' },
  { component: CalculatorStepsSlide, title: 'Step-by-Step Guide' },
  { component: CompleteCodeSlide, title: 'Complete Code' },
  { component: KeyConceptsSlide, title: 'Key Concepts' },
  { component: PairChallengesSlide, title: 'Pair Challenges' },

  // Recap section (3 slides)
  { component: RecapAchievementsSlide, title: 'Congratulations!' },
  { component: RecapDiscussionSlide, title: 'Discussion & Q&A' },
  { component: ExitTicketSlide, title: 'Exit Ticket' },

  // Homework section (3 slides)
  { component: HomeworkAssignmentsSlide, title: 'Your Homework' },
  { component: BonusResourcesSlide, title: 'Bonus & Resources' },
  { component: NextStepsSlide, title: "What's Next?" },
];

// Organized sections for navigation
const navigationSections = [
  {
    title: 'Introduction',
    icon: '👋',
    slides: [
      { index: 0, title: 'Welcome' },
      { index: 1, title: "Today's Agenda" },
    ],
  },
  {
    title: 'Software Basics',
    icon: '💻',
    slides: [
      { index: 2, title: 'What is Software?' },
      { index: 3, title: 'Types of Software' },
      { index: 4, title: 'Hardware vs Software' },
    ],
  },
  {
    title: 'Developers',
    icon: '👨‍💻',
    slides: [
      { index: 5, title: 'Who is a Developer?' },
      { index: 6, title: 'Types of Developers' },
    ],
  },
  {
    title: 'How the Web Works',
    icon: '🌐',
    slides: [
      { index: 7, title: 'How the Web Works' },
      { index: 8, title: 'The 4-Step Process' },
      { index: 9, title: 'Key Terms to Know' },
      { index: 10, title: "Let's See It in Action!" },
      { index: 11, title: 'Web Demo' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: '🔧',
    slides: [
      { index: 12, title: 'Developer Tools' },
      { index: 13, title: 'Essential Tools' },
      { index: 14, title: 'Online Code Playgrounds' },
      { index: 15, title: 'Setup Environment' },
    ],
  },
  {
    title: 'Programming',
    icon: '📝',
    slides: [
      { index: 16, title: 'What is Programming?' },
      { index: 17, title: 'Recipe Analogy' },
      { index: 18, title: 'Programming Languages' },
      { index: 19, title: 'Programming vs Markup' },
      { index: 20, title: 'Practice Activity' },
    ],
  },
  {
    title: 'Core Concepts',
    icon: '🧠',
    slides: [
      { index: 21, title: 'Core Programming Concepts' },
      { index: 22, title: 'Variables' },
      { index: 23, title: 'Data Types' },
      { index: 24, title: 'Operators' },
      { index: 25, title: 'Conditions' },
      { index: 26, title: 'Loops' },
      { index: 27, title: 'Interactive Examples' },
    ],
  },
  {
    title: 'JavaScript',
    icon: '🟨',
    slides: [
      { index: 28, title: 'JavaScript Introduction' },
      { index: 29, title: 'Browser Console Setup' },
      { index: 30, title: 'JavaScript Examples' },
      { index: 31, title: 'Interactive JavaScript' },
    ],
  },
  {
    title: 'Hands-on Exercise',
    icon: '🛠️',
    slides: [
      { index: 32, title: 'Exercise Introduction' },
      { index: 33, title: 'Step-by-Step Guide' },
      { index: 34, title: 'Complete Code' },
      { index: 35, title: 'Key Concepts' },
      { index: 36, title: 'Pair Challenges' },
    ],
  },
  {
    title: 'Recap',
    icon: '🎯',
    slides: [
      { index: 37, title: 'Congratulations!' },
      { index: 38, title: 'Discussion & Q&A' },
      { index: 39, title: 'Exit Ticket' },
    ],
  },
  {
    title: 'Homework',
    icon: '📚',
    slides: [
      { index: 40, title: 'Your Homework' },
      { index: 41, title: 'Bonus & Resources' },
      { index: 42, title: "What's Next?" },
    ],
  },
];

const Day1Lecture: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<number>>(
    new Set()
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const newSlide = currentSlide + newDirection;
    if (newSlide >= 0 && newSlide < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(newSlide);
    }
  };

  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < slides.length) {
      setDirection(slideIndex > currentSlide ? 1 : -1);
      setCurrentSlide(slideIndex);
      setIsNavOpen(false);
    }
  };

  const toggleSection = (sectionIndex: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionIndex)) {
      newExpanded.delete(sectionIndex);
    } else {
      newExpanded.add(sectionIndex);
    }
    setExpandedSections(newExpanded);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        paginate(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        paginate(-1);
      } else if (event.key === 'Escape') {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="fixed top-4 left-4 z-50 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 border border-gray-200"
        aria-label="Toggle navigation"
      >
        <motion.div
          animate={{ rotate: isNavOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isNavOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </motion.div>
      </button>

      {/* Navigation Sidebar */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsNavOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -400, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 },
              }}
              className="fixed top-0 left-0 h-full w-96 bg-white shadow-2xl z-50 overflow-y-auto border-r border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Day 1 Lecture
                  </h2>
                  <div className="text-sm text-gray-500">
                    {currentSlide + 1} / {slides.length}
                  </div>
                </div>

                <div className="space-y-2">
                  {navigationSections.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="border border-gray-100 rounded-lg"
                    >
                      <button
                        onClick={() => toggleSection(sectionIndex)}
                        className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{section.icon}</span>
                          <span className="font-medium text-gray-800">
                            {section.title}
                          </span>
                          <span className="text-xs text-gray-500">
                            ({section.slides.length})
                          </span>
                        </div>
                        <motion.div
                          animate={{
                            rotate: expandedSections.has(sectionIndex)
                              ? 180
                              : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {expandedSections.has(sectionIndex) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-2 px-3 space-y-1">
                              {section.slides.map((slide, slideIndex) => (
                                <button
                                  key={slideIndex}
                                  onClick={() => goToSlide(slide.index)}
                                  className={`w-full text-left p-2 rounded-md transition-colors flex items-center space-x-2 ${
                                    currentSlide === slide.index
                                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                                      : 'hover:bg-gray-50 text-gray-700'
                                  }`}
                                >
                                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                                    {slide.index + 1}
                                  </div>
                                  <span className="text-sm">{slide.title}</span>
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Progress
                    </span>
                    <span className="text-sm text-gray-500">
                      {Math.round(((currentSlide + 1) / slides.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Slide Container */}
      <div className="relative h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 overflow-auto"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-4 right-4 flex items-center space-x-3 z-30">
        <button
          onClick={() => paginate(-1)}
          disabled={currentSlide === 0}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 rotate-180" />
        </button>
        <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
          <span className="text-sm font-medium text-gray-700">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
        <button
          onClick={() => paginate(1)}
          disabled={currentSlide === slides.length - 1}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Day1Lecture;
