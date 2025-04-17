import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8" />
            <span className="font-bold text-xl">Radhavallabh Diagnostic Center</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition">Home</Link>
            <Link to="/book-appointment" className="hover:text-blue-200 transition">Book Appointment</Link>
            <Link to="/services" className="hover:text-blue-200 transition">Our Services</Link>
            <Link to="/location" className="hover:text-blue-200 transition">Location</Link>
            <Link to="/contact" className="hover:text-blue-200 transition">Contact Us</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden pb-4 transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="hover:bg-blue-700 px-3 py-2 rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/book-appointment"
              className="hover:bg-blue-700 px-3 py-2 rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="hover:bg-blue-700 px-3 py-2 rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Services
            </Link>
            <Link
              to="/location"
              className="hover:bg-blue-700 px-3 py-2 rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Location
            </Link>
            <Link
              to="/contact"
              className="hover:bg-blue-700 px-3 py-2 rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;