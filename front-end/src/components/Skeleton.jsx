import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Skeleton = ({ title, sections }) => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Navigation Header - increased height with py-8 */}
      <div className="w-full bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center justify-between py-9">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                to="/"
                className="group inline-flex items-center px-4 py-2 text-green-800 
                  hover:text-green-900 font-medium text-lg transition-all duration-300 
                  border-2 border-green-800 rounded-lg hover:bg-green-50"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                    clipRule="evenodd"
                  />
                </svg>
                Back
              </Link>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-green-800"
            >
              {title}
            </motion.h1>

            {/* Empty div for flex spacing */}
            <div className="w-[100px]"></div>
          </div>
        </div>
      </div>

      {/* Main Content - increased top padding with pt-24 */}
      <div className="max-w-6xl mx-auto px-4 pt-25 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-24 pb-32"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-16 items-stretch flex-col md:flex-row`}
            >
              {/* Content Box - increased width */}
              <div className="flex-[2] bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>

              {/* Updated Image Container - removed decorative lines */}
              <div className="flex-1 relative min-h-[500px] md:min-h-full flex items-center justify-center mx-4">
                {section.image && (
                  <img
                    src={section.image}
                    alt="Section illustration"
                    className="w-full h-auto rounded-xl"
                    style={{ maxHeight: '800px', objectFit: 'contain' }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

Skeleton.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      image: PropTypes.string
    })
  ).isRequired
};

export default Skeleton;
