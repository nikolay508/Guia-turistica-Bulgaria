import { cardData } from "../constants/cardData.jsx";
import { FeatureCard } from "../components/FeatureCard.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-25 px-4">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-10 relative">
          <h1 className="text-5xl font-bold text-green-800">
            Guía turística: Bulgaria
          </h1>
          <img src="./bg.png" alt="Map of Bulgaria" className="absolute left-272 top-5" style={{ maxWidth: '150px', transform: 'rotate(345deg)' }} />
          <img src="./bg-slogan.png" alt="Map of Bulgaria" className="absolute right-272 top-5" style={{ maxWidth: '140px', transform: 'rotate(30deg)' }} />
        </div>
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            <br/>Bulgaria es un país fascinante del sureste de Europa, con montañas, playas, pueblos antiguos y ciudades modernas. Su rica historia y cultura reflejan influencias tracias, romanas, otomanas y ortodoxas.
            <br/><br/>Es un destino ideal para quienes buscan naturaleza, historia y buena comida, además de ser uno de los países más económicos de Europa. 
            Aquí tienes una guía con todo lo necesario para tu viaje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 md:justify-items-center">
          {cardData.map((card, index) => (
            <FeatureCard 
              key={index} 
              icon={card.icon} 
              title={card.title} 
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 