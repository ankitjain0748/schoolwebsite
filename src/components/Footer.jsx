import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-gray-300 pt-12 pb-6 px-6">
      <div className=" mx-auto">
        
        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Left */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              Tagore <span className="text-[#eea02b]">Academy</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              Nurturing curious minds and compassionate hearts since 1998.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Classes</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>123 Learning Lane, Cityville</li>
              <li>(555) 123-4567</li>
              <li>admissions@tagoreacademy.edu</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
          © 2026 Tagore Academy. All rights reserved.
        </div>

      </div>
    </footer>
  );
}