import React from 'react';
import { MapPin, Clock, Bus } from 'lucide-react';

const Location = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Our Location</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-start space-x-4 mb-6">
              <MapPin className="text-blue-600 h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Medical Street<br />
                  Landmark City<br />
                  State - 123456
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-6">
              <Clock className="text-blue-600 h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Working Hours</h3>
                <p className="text-gray-600">
                  Monday - Saturday: 9:00 AM - 8:00 PM<br />
                  Sunday: 9:00 AM - 2:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Bus className="text-blue-600 h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">How to Reach</h3>
                <p className="text-gray-600">
                  - 5 minutes walk from City Central Metro Station<br />
                  - Bus routes: 101, 102, 103<br />
                  - Ample parking space available
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-96">
            <iframe
              src="https://www.google.co.in/maps/place/National+Institute+of+Technology,+Hamirpur/@31.7090101,76.5270034,18.76z/data=!4m6!3m5!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.7084291!4d76.5273526!16zL20vMGNybnJ4?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hospital Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;