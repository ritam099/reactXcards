import React, { useState } from 'react';
import Card from './Card';

const paymentTypes = [
  {
    id: 1,
    title: 'Credit Card',
    features: ['Widely accepted', 'Build credit', 'Fraud protection'],
    image: '/src/assets/images.png',
  },
  {
    id: 2,
    title: 'Debit Card',
    features: ['Direct from bank account', 'No interest charges', 'Spending control'],
    image: '/src/assets/debit.jpg',
  },
  {
    id: 3,
    title: 'PayPal',
    features: ['Online payments', 'Buyer protection', 'International transactions'],
    image: '/src/assets/paypal.jpg',
  },
  {
    id: 4,
    title: 'Cash',
    features: ['Primitive Method', 'Buyer protection', 'National transactions'],
    image: '/src/assets/cash.jpg',
  },


];

const App = () => {
  const [likedCards, setLikedCards] = useState({});

  const handleMoneyToggle = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-green-300 container mx-auto h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Payment Types</h1>
      <div className="flex flex-nowrap justify-center">
        {paymentTypes.map((paymentType) => (
          <Card
            key={paymentType.id}
            paymentType={paymentType}
            isLiked={likedCards[paymentType.id]}
            onMoneyToggle={handleMoneyToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default App;