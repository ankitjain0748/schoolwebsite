import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // mobile menu close
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navColour
          ? "bg-white shadow-md"
          : "bg-white/90 backdrop-blur-md"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-xl font-semibold cursor-pointer"
        >
          <span className="text-black">Tagore</span>{" "}
          <span className="text-[#eea02b] font-bold">Academy</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <button onClick={() => scrollToSection("home")} className="hover:text-[#eea02b]">
            Home
          </button>
          <button onClick={() => scrollToSection("classes")} className="hover:text-[#eea02b]">
            Classes
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-[#eea02b]">
            About Us
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-[#eea02b]">
            Contact
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#eea02b] text-white px-5 py-2 rounded-xl font-medium"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1.5"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 ${isOpen ? "block" : "hidden"
          }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-3 text-gray-700">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("classes")}>Classes</button>
          <button onClick={() => scrollToSection("about")}>About Us</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#eea02b] text-white py-2 rounded-full"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;