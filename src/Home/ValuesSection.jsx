import React from "react";
import { FaLightbulb, FaHeart, FaUsers, FaAward } from "react-icons/fa";

const values = [
  {
    title: "Curiosity-Driven",
    description: "We encourage questions and exploration at every turn.",
    icon: <FaLightbulb />,
  },
  {
    title: "Compassionate",
    description: "Empathy and kindness are woven into daily life.",
    icon: <FaHeart />,
  },
  {
    title: "Community",
    description: "Families, teachers, and students thrive together.",
    icon: <FaUsers />,
  },
  {
    title: "Excellence",
    description: "High standards with individualized support for every child.",
    icon: <FaAward />,
  },
];

export default function ValuesSection() {
  return (
    <div className="bg-[#f5f3ef] py-10 px-4">
      <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((item, index) => (
          <div
            key={index}
            className="bg-[#EFF5F5] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-gray-300 p-4 rounded-full text-teal-600 text-xl">
                {item.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}