import React from 'react';
import { MapPin, Clock, Bus } from 'lucide-react';

const Location = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Our Location</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            {/* Address */}
            <div className="flex items-start space-x-4 mb-6">
              <MapPin className="text-blue-600 h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">
                  Radhavallabh Diagnostic Center<br />
                  Near Bus Stand, Main Road<br />
                  Hamirpur, Himachal Pradesh – 177001
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-4 mb-6">
              <Clock className="text-blue-600 h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Working Hours</h3>
                <p className="text-gray-600">
                  Monday – Saturday: 9:00 AM – 8:00 PM<br />
                  Sunday: 9:00 AM – 2:00 PM
                </p>
              </div>
            </div>

            {/* How to Reach */}
            <div className="flex items-start space-x-4">
              <Bus className="text-blue-600 h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">How to Reach</h3>
                <p className="text-gray-600">
                  - Located on Main Road near Hamirpur Bus Stand<br />
                  - Easily accessible by auto, bus, and private vehicle<br />
                  - Parking available nearby
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.071720646336!2d77.1536418!3d30.9006514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39058d578497b96b%3A0x4c444d3fba93c667!2sRadhavallabh%20Diagnostic%20Center!5e0!3m2!1sen!2sin!4v1713776212345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Radhavallabh Diagnostic Center"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Get Directions Button */}
          <div className="p-6 text-center">
            <a
              href="https://maps.app.goo.gl/uBYrXHez45m73G4NA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
