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
              <span>+91 9816739577</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="h-5 w-5 mr-2" />
              <span>rvdc57@gmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Near Civil Hospital Sunni, Sunni Himachal Pradesh 171301</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
