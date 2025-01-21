import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const slides = [
    {
      image: '/images/image-1.webp',
      heading: 'Welcome to VC FINCORP',
      subText: 'Empowering you with financial solutions that make a difference!',
    },
    {
      image: '/images/image-2.webp',
      heading: 'Your Trusted Financial Partner',
      subText: 'We offer customized solutions for all your financial needs.',
    },
    {
      image: '/images/image-3.webp',
      heading: 'Let’s Grow Together',
      subText: 'Achieve your dreams with VC FINCORP’s support!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[calc(100vh-96px)] w-full bg-[#edf2f7]">
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-gray-800 py-8">
        <h1 className="text-4xl font-extrabold tracking-wide">
          {slides[currentIndex].heading}
        </h1>
        <p className="text-lg mt-4 max-w-3xl">
          {slides[currentIndex].subText}
        </p>
        <a
          href="#explore"
          className="mt-6 inline-block bg-yellow-400 text-gray-900 py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition-all"
        >
          Explore Services
        </a>
      </div>

      {/* Images */}
      <div className="relative h-2/3">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Decorative Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full bg-gray-800 transition-all ${
              index === currentIndex ? 'bg-yellow-400 w-6' : 'opacity-50'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
