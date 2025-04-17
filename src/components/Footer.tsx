import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Radhavallabh Diagnostic Center</h3>
            <p className="mt-2">Providing Quality Healthcare Services</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="h-5 w-5 mr-2" />
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="h-5 w-5 mr-2" />
              <span>contact@radhavallabh.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-5 w-5 mr-2" />
              <span>123 Medical Street, City, State</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;