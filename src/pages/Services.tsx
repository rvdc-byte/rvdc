import React from 'react';
import { Activity, Info } from 'lucide-react';

const services = [
  {
    name: 'Ultrasound',
    description: 'General diagnostic ultrasound services for accurate imaging of internal organs and structures.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'ANC Ultrasounds',
    description: 'Comprehensive prenatal ultrasound monitoring for expectant mothers throughout their pregnancy journey.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: '3D/4D Ultrasound',
    description: 'Advanced imaging technology providing detailed visualization of your unborn baby with stunning clarity.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Echocardiography',
    description: 'Detailed examination of heart structure and function using advanced ultrasound technology.',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Fetal Echo',
    description: 'Specialized cardiac examination for unborn babies to detect and monitor heart conditions early.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Doppler',
    description: 'Advanced blood flow analysis and vascular studies using state-of-the-art Doppler technology.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'USG Elastography',
    description: 'Non-invasive evaluation of tissue stiffness to aid in diagnosis of various conditions.',
    image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'FNAC',
    description: 'Fine Needle Aspiration Cytology for precise diagnosis of lumps and masses.',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42cc05b6f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'USG Guided Biopsy',
    description: 'Accurate tissue sampling under ultrasound guidance for precise diagnosis.',
    image: 'https://images.unsplash.com/photo-1579165466991-467135ad3875?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Pigtail Drainage',
    description: 'Minimally invasive procedure for draining fluid collections under ultrasound guidance.',
    image: 'https://images.unsplash.com/photo-1583912267550-d6c2ac4b0154?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'ECG',
    description: 'Electrocardiogram for comprehensive heart rhythm analysis and cardiac evaluation.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  }
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer a comprehensive range of diagnostic services using state-of-the-art equipment and expert medical professionals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Activity className="text-blue-600 h-6 w-6 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                <Info className="h-5 w-5 mr-1" />
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Need More Information?</h2>
        <p className="text-gray-700 mb-6">
          Our team of experts is here to help you understand our services better and answer any questions you may have.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Services;