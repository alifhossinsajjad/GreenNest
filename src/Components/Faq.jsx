import React from "react";
import PlantImage from "../assets/plant(1).avif";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const faqs = [
    {
      question: "How can I take care of my plant?",
      answer:
        "Our experts provide step-by-step guidance on watering, sunlight, soil, and other care tips to ensure your plant thrives in any environment.",
    },
    {
      question: "Do you offer advice for all types of plants?",
      answer:
        "Yes! We provide consultations for indoor plants, outdoor plants, air-purifiers, flowering plants, and more. Each plant type gets personalized care instructions.",
    },
    {
      question: "Will your recommendations work for my home environment?",
      answer:
        "Absolutely! Our guidance is tailored to different light conditions, humidity levels, and space constraints, ensuring your plants flourish wherever they are.",
    },
    {
      question: "Can I customize my plant care plan?",
      answer:
        "Yes, you can! We offer personalized care plans based on your plant species, home environment, and lifestyle. Adjust watering schedules, sunlight, and fertilization according to your needs.",
    },
  ];
  return (
    <div>
      <section>
        <div className="my-20">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0">
            <img
              className="max-w-sm w-full rounded-xl h-auto"
              src={PlantImage}
              alt=""
            />
            <div>
              <p className="text-indigo-600 text-sm font-medium">FAQ's</p>
              <h1 className="text-3xl font-semibold">Looking for answer?</h1>
              <p className="text-sm text-slate-500 mt-2 pb-4">
                Grow Healthy Spaces Without the Hassle — Expert, Personalized,
                and Sustainable Plant Consultation Services.
              </p>
              {faqs.map((faq, index) => (
                <div
                  className="border-b border-slate-200 py-4 cursor-pointer"
                  key={index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium">{faq.question}</h3>
                    {openIndex === index ? (
                      <FaAngleUp className="text-green-600 transition-transform duration-300" />
                    ) : (
                      <FaAngleDown className="text-gray-500 transition-transform duration-300" />
                    )}
                  </div>
                  <p
                    className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                      openIndex === index
                        ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                        : "opacity-0 max-h-0 -translate-y-2"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
