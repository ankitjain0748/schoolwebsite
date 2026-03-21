import React from "react";
import {
  FaBookOpen,
  FaCalculator,
  FaFlask,
  FaGlobe,
  FaPalette,
  FaMusic,
} from "react-icons/fa";

const subjects = [
  { title: "Language Arts", icon: <FaBookOpen /> },
  { title: "Mathematics", icon: <FaCalculator /> },
  { title: "Sciences", icon: <FaFlask /> },
  { title: "Social Studies", icon: <FaGlobe /> },
  { title: "Visual Arts", icon: <FaPalette /> },
  { title: "Music & Drama", icon: <FaMusic /> },
];

const CoreSubjects = () => {
  return (
    <section className="w-full bg-[#f5f3ef] py-12 md:py-20">
      
      <div className="max-w-[1230px] mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Image */}
          <div className="w-full">
            <img
              src="/classroom-AmG1ZRx7.jpg" // apni image path daalo
              alt="classroom"
              className="w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover rounded-2xl"
            />
          </div>

          {/* Right Content */}
          <div>
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Core & Enrichment Subjects
            </h2>

            {/* Subjects Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              {subjects.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:shadow-md transition"
                >
                  
                  {/* Icon */}
                  <div className="text-[#eea02b] text-lg">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <p className="text-gray-800 font-medium text-sm md:text-base">
                    {item.title}
                  </p>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreSubjects;