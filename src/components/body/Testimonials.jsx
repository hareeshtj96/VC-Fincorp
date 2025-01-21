import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            name: "Praveen",
            feedback: "This app made applying for a loan so easy and quick. I got approved within minutes!",
            image: '/images/person-1.jpg',
            designation: "Small Business Owner"
        },
        {
            name: "Rakesh",
            feedback: "I loved how transparent the process was. No hidden fees, and everything was clearly explained.",
            image: '/images/person-2.jpg',
            designation: "Freelancer"
        },
        {
            name: "Reshma",
            feedback: "The interest rates are competitive, and the repayment options fit my budget perfectly.",
            image: '/images/person-3.jpg',
            designation: "Teacher"
        }
    ]
    return (
        <div className="bg-blue-50 py-10">
            <h2 className="text-center text-3xl font-bold mb-8">What Our Customers Say</h2>
            <div className="flex justify-center gap-8 flex-wrap px-4">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-5 max-w-sm transform transition-transform hover:scale-105"
                    >
                        <div className="flex items-start gap-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-14 h-14 rounded-full grayscale border border-gray-300"
                            />
                            <div>
                                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                <p className="text-gray-500 text-sm">{testimonial.designation}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 italic mt-4">"{testimonial.feedback}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
