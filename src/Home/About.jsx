import React from "react";

const About = () => {
  return (
    <section className="w-full bg-[#f5f3ef] py-14 md:py-20" id="about">
      <div className=" mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            
            {/* Small Heading */}
            <p className="text-[#eea02b] tracking-[3px] text-xs font-semibold mb-3">
              ABOUT US
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Inspired by Tagore's <br /> Vision of Education
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Named after the Nobel laureate Rabindranath Tagore, our academy
              believes that the highest education is one that does not merely
              give us information but makes our life in harmony with all
              existence.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Since 1998, we have been committed to a balanced curriculum that
              integrates academics, arts, and character education — fostering a
              lifelong love of learning in every student.
            </p>

            {/* Quote */}
            <div className="border-l-4 border-[#eea02b] pl-4 italic text-gray-700 text-sm md:text-base">
              <p>
                "The highest education is that which does not merely give us
                information but makes our life in harmony with all existence."
              </p>
              <span className="block mt-2 text-xs text-gray-500">
                — Rabindranath Tagore
              </span>
            </div>

          </div>

          {/* RIGHT IMAGES */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            
            {/* Main Image */}
            <img
              src="/science-B2MzJLKU.jpg" // replace
              alt="kids learning"
              className="w-full sm:w-[55%] h-[250px] sm:h-[300px] md:h-[320px] object-cover rounded-2xl shadow-md"
            />

            {/* Side Image */}
            <img
              src="/arts-CFt7zDQh.jpg" // replace
              alt="kids art"
              className="w-full sm:w-[45%] h-[250px] sm:h-[300px] md:h-[320px] object-cover rounded-2xl shadow-md mt-0 sm:mt-10"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;