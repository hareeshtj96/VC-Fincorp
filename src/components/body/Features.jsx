import React from 'react';

const Features = () => {
    const features = [
        {
          title: 'Investment',
          description: 'Grow your wealth with tailored investment plans.',
          icon: '📈',
          link: '#investment',
          gradient: 'bg-gradient-to-r from-blue-50 to-sky-100',
        },
        {
          title: 'Personal Loans',
          description: 'Flexible personal loans to meet your financial needs.',
          icon: '💳',
          link: '#personal-loans',
          gradient: 'bg-gradient-to-r from-amber-50 to-orange-100',
        },
        {
          title: 'Gold Zone',
          description: 'Unlock the value of your gold with safe loans.',
          icon: '🏆',
          link: '#gold-zone',
          gradient: 'bg-gradient-to-r from-yellow-50 to-amber-100',
        },
        {
          title: 'Education Loan',
          description: 'Support your educational dreams with easy financing.',
          icon: '🎓',
          link: '#education-loan',
          gradient: 'bg-gradient-to-r from-indigo-50 to-blue-100',
        },
      ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${feature.gradient}`}
            >
              <div className="text-4xl mb-4 text-black">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-black mb-4">{feature.description}</p>
              <a
                href={feature.link}
                className={`inline-block text-black py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-all ${
                  feature.gradient
                } hover:opacity-80`}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
