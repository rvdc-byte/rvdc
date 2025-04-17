import React from 'react';
import { Award, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Radhavallabh Diagnostic Center</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in diagnostic healthcare. We combine cutting-edge technology with compassionate care to provide accurate and reliable diagnostic services.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Meet Our Expert</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400"
            alt="Doctor"
            className="rounded-full w-48 h-48 object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-blue-600">Dr. Gopal Sharma</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Award className="text-blue-600" />
                <span>MBBS, MD (Radiology)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-blue-600" />
                <span>Ex Junior Resident PGIMER Chandigarh</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-blue-600" />
                <span>Ex senior resident AIIMS Bilaspur</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-blue-600" />
                <span>Ex Consultant sparsh multispeciality Hospital Shimla</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Phone className="text-blue-600" />
                <span>Contact: +91 9816739577</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Our Mission</h3>
          <p className="text-gray-700">
            To provide accurate, timely, and affordable diagnostic services while maintaining the highest standards of quality and patient care.
          </p>
        </div>
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>State-of-the-art diagnostic equipment</li>
            <li>Experienced and qualified staff</li>
            <li>Quick report delivery</li>
            <li>Comfortable and hygienic environment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
