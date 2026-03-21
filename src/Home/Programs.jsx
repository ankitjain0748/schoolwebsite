import React from "react";

const programs = [
  {
    range: "K–2",
    title: "Early Learners",
    desc: "Building foundations through play, stories, and discovery.",
  },
  {
    range: "3–5",
    title: "Explorers",
    desc: "Developing literacy, numeracy, and scientific curiosity.",
  },
  {
    range: "6–8",
    title: "Innovators",
    desc: "Critical thinking, leadership, and creative expression.",
  },
];

const Programs = () => {
  return (
    <section className="w-full bg-[#f8f6f2] py-14 md:py-20" id="classes">
      
      <div className="max-w-[1230px] mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          
          <p className="text-[#eea02b] tracking-[3px] text-xs md:text-sm font-semibold mb-3">
            OUR PROGRAMS
          </p>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Classes for Every Stage
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            From Kindergarten through 8th grade, our curriculum is designed to
            nurture intellectual growth and creative confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition duration-300"
            >
              
              {/* Badge */}
              <span className="inline-block bg-orange-100 text-[#eea02b] hover:text-white text-sm font-semibold px-4 py-1 hover:bg-[#eea02b] rounded-lg mb-5">
                {item.range}
              </span>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Programs;