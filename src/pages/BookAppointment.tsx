import React, { useState } from 'react';
import { Calendar, Clock, User, Phone as PhoneIcon } from 'lucide-react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    alert('Appointment request sent! We will contact you shortly.');
    setFormData({ name: '', phone: '', date: '', time: '', service: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Book an Appointment</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <User className="inline mr-2 h-5 w-5" />
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <PhoneIcon className="inline mr-2 h-5 w-5" />
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Calendar className="inline mr-2 h-5 w-5" />
                Preferred Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Clock className="inline mr-2 h-5 w-5" />
                Preferred Time
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Service Required</label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                <option value="ultrasound">Ultrasound</option>
                <option value="anc">ANC Ultrasounds</option>
                <option value="3d4d">3D/4D Ultrasound</option>
                <option value="echo">Echocardiography</option>
                <option value="fetal">Fetal Echo</option>
                <option value="doppler">Doppler</option>
                <option value="elastography">USG Elastography</option>
                <option value="fnac">FNAC</option>
                <option value="biopsy">USG Guided Biopsy</option>
                <option value="pigtail">Pigtail Drainage</option>
                <option value="ecg">ECG</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;