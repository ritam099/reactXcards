import React from 'react';

const Card = ({ paymentType, isLiked, onMoneyToggle }) => {
  return (
    <div className="bg-lime-300 rounded-lg shadow-md overflow-hidden m-4 w-64">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{paymentType.title}</h2>
        <img src={paymentType.image} alt={paymentType.title} className="w-full h-40 object-cover mb-4 rounded" />
        <ul className="list-disc pl-5 mb-4">
          {paymentType.features.map((feature, index) => (
            <li key={index} className="text-sm">{feature}</li>
          ))}
        </ul>
      </div>
      <div className="px-4 py-2 bg-gray-100 flex justify-end">
        <button
          onClick={() => onMoneyToggle(paymentType.id)}
          className={`transition-all duration-400 ${isLiked ? 'text-green-500 transform scale-150' : 'text-yellow-500'}`}  //ternary operator for 
        >
          🤑
        </button>
      </div>
    </div>
  );
};

export default Card;