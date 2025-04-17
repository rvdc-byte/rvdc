import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">Contact Us</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600 h-6 w-6" />
                <div>
                  <h3 className="font-medium text-gray-800">Phone Numbers</h3>
                  <p className="text-gray-600">+91 9816739577</p>
                  
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600 h-6 w-6" />
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">rvdc57@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="text-blue-600 h-6 w-6" />
                <div>
                  <h3 className="font-medium text-gray-800">Working Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600 h-6 w-6" />
                <div>
                  <h3 className="font-medium text-gray-800">Location</h3>
                  <p className="text-gray-600">
                    Near Civil Hospital Sunni <br />
                    Sunni<br />
                    Himachal Pradesh - 171301
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;