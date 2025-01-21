import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Praveen",
      feedback:
        "This app made applying for a loan so easy and quick. I got approved within minutes!",
      image: "images/person-1.jpg",
      designation: "Small Business Owner",
    },
    {
      name: "Rakesh",
      feedback:
        "I loved how transparent the process was. No hidden fees, and everything was clearly explained.",
      image: "images/person-2.jpg",
      designation: "Freelancer",
    },
    {
      name: "Reshma",
      feedback:
        "The interest rates are competitive, and the repayment options fit my budget perfectly.",
      image: "images/person-3.jpg",
      designation: "Teacher",
    },
  ];
  return (
    <div className="bg-blue-50 py-10">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        What Our Customers Say
      </h2>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-6 transform transition-transform hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full grayscale border border-gray-300"
                />
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
