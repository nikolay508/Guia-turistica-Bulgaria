import { cardData } from "../constants/cardData.jsx";
import { FeatureCard } from "../components/FeatureCard.jsx";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-25 px-4"
    >
      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 relative"
        >
          <h1 className="text-5xl font-bold text-green-800">
            Guía turística: Bulgaria
          </h1>
          <motion.img 
            initial={{ rotate: 345, scale: 0.8 }}
            animate={{ rotate: 345, scale: 1 }}
            transition={{ duration: 0.35 }}
            src="./bg.png" 
            alt="Map of Bulgaria" 
            className="absolute left-272 top-5" 
            style={{ maxWidth: '150px' }} 
          />
          <motion.img 
            initial={{ rotate: 30, scale: 0.8 }}
            animate={{ rotate: 30, scale: 1 }}
            transition={{ duration: 0.35 }}
            src="./bg-slogan.png" 
            alt="Map of Bulgaria" 
            className="absolute right-272 top-5" 
            style={{ maxWidth: '140px' }} 
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            <br/>Bulgaria es un país fascinante del sureste de Europa, con montañas, playas, pueblos antiguos y ciudades modernas. Su rica historia y cultura reflejan influencias tracias, romanas, otomanas y ortodoxas.
            <br/><br/>Es un destino ideal para quienes buscan naturaleza, historia y buena comida, además de ser uno de los países más económicos de Europa. 
            Aquí tienes una guía con todo lo necesario para tu viaje.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16 md:justify-items-center"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.12 }}
            >
              <FeatureCard 
                icon={card.icon} 
                title={card.title} 
                description={card.description}
                link={card.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 