import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const Pricing = () => {
  return (
    <div className="mx-auto bg-white py-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Simple, transparent pricing. <br />Always know what you’ll pay.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <div className="text-4xl font-bold mb-4">{plan.price}</div>
            <ul className="space-y-2 text-center mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Get Started <BsArrowUpRight className="inline" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const pricingPlans = [
  {
    name: 'Basic',
    price: '₹100/month',
    features: [
      '100 Transactions',
      '0.2% Transaction Fee',
      'Basic Support',
      'Free Integration',
    ],
  },
  {
    name: 'Pay As You Go',
    price: '₹250/month',
    features: [
      'Pay Per Transactions',
      '0.1% Transaction Fee',
      'Priority Support',
      'Advanced Analytics',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited Transactions',
      'Custom Transaction Fee',
      'Dedicated Support',
      'Custom Features',
    ],
  },
];

export default Pricing;
