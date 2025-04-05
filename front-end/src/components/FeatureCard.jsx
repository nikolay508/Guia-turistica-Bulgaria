
export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard; 