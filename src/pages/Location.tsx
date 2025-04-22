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
                  RadhaVallabh Diagnostic Centre<br />
                  31, Sector 1, New Shimla, Himachal Pradesh – 171009
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
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* How to Reach */}
            <div className="flex items-start space-x-4">
              <Bus className="text-blue-600 h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">How to Reach</h3>
                <p className="text-gray-600">
                  - Located near the Shimla bypass road, easily accessible by car or local transport<br />
                  - Just a short walk from the nearby bus stop<br />
                  - Ample parking available
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.0847441762776!2d77.1224041!3d31.2418193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905776f7792fc4d%3A0x26a6d23522c28873!2sRadhaVallabh%20Diagnostic%20Centre!5e0!3m2!1sen!2sin!4v1713776253615!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RadhaVallabh Diagnostic Centre"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Get Directions Button */}
          <div className="p-6 text-center">
            <a
              href="https://www.google.com/maps/place/RadhaVallabh+Diagnostic+Centre/@31.2418193,77.1224041,17z/data=!3m1!4b1!4m6!3m5!1s0x3905776f7792fc4d:0x26a6d23522c28873!8m2!3d31.2418193!4d77.1224041!16s%2Fg%2F11mcw8mfv9?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
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
