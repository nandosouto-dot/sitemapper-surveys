import React, { useState } from 'react';
import { Map, Ruler, Building2, Scan, Activity, Box, Mail } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  concept: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Land Topographical Surveying",
    icon: <Map className="w-6 h-6" />,
    concept: "The detailed mapping of both natural and man-made features and ground levels to provide a precise 3D representation of a site.",
    features: ["Boundary Surveys", "Topographical Mapping", "Subdivision Planning"]
  },
  {
    id: 2,
    title: "Setting Out Engineering",
    icon: <Ruler className="w-6 h-6" />,
    concept: "Transferring architectural and engineering design coordinates directly onto the ground to guide physical construction.",
    features: ["Foundation Layout", "Grid Line Establishment", "Infrastructure Alignment"]
  },
  {
    id: 3,
    title: "Measured Building Surveys",
    icon: <Building2 className="w-6 h-6" />,
    concept: "Creating highly accurate 2D floor plans, sections, and elevations of existing structures for refurbishment or heritage recording.",
    features: ["Floor Plans", "Building Elevations", "Internal Fit-out Details"]
  },
  {
    id: 4,
    title: "3D Laser Scanning (BIM)",
    icon: <Scan className="w-6 h-6" />,
    concept: "Capturing millions of data points to form a precise 'digital twin' of a physical space for BIM and clash detection.",
    features: ["Point Cloud Generation", "Scan-to-BIM Workflows", "3D Digital Twins"]
  },
  {
    id: 5,
    title: "Structural Monitoring",
    icon: <Activity className="w-6 h-6" />,
    concept: "Systematic measurement of movement or deformation in structures over time to ensure integrity and safety.",
    features: ["Settlement Tracking", "Deformation Analysis", "Real-time Alerting"]
  },
  {
    id: 6,
    title: "Volumetric Calculation",
    icon: <Box className="w-6 h-6" />,
    concept: "Using LiDAR or photogrammetry to calculate precise volumes of stockpiles or excavations for logistics.",
    features: ["Cut and Fill Analysis", "Stockpile Tonnage", "Earthwork Reporting"]
  }
];

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const isOpen = isHovered || isLocked;

  return (
    <div
      className={`relative p-6 border rounded-2xl transition-all duration-300 cursor-pointer
        ${isOpen ? 'border-blue-500 shadow-xl bg-white scale-[1.03]' : 'border-gray-100 bg-gray-50'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsLocked(!isLocked)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg transition-colors duration-300 
          ${isOpen ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 shadow-sm'}`}>
          {service.icon}
        </div>
        <h3 className={`font-bold text-lg transition-colors ${isOpen ? 'text-blue-700' : 'text-gray-900'}`}>
          {service.title}
        </h3>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out
        ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.concept}</p>
        <ul className="grid grid-cols-1 gap-2">
          {service.features.map((feat: string, i: number) => (
            <li key={i} className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {!isOpen && <p className="text-gray-400 text-xs italic mt-2">Hover to learn more...</p>}
    </div>
  );
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6 max-w-7xl mx-auto">
      {/* Value Proposition */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Precision Surveying Solutions
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Delivering high-accuracy geospatial data and site engineering services to de-risk your construction and design projects.
        </p>
      </header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map(s => <ServiceCard key={s.id} service={s} />)}
      </div>

      {/* Call to Action */}
      <section className="bg-blue-900 rounded-3xl p-10 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <p className="text-blue-200 mb-8 max-w-lg mx-auto">
          Contact our team for a free consultation and a detailed quotation within 24 hours.
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 mx-auto hover:bg-blue-50 transition-colors">
          <Mail className="w-5 h-5" />
          Request a Quote
        </button>
      </section>
    </div>
  );
}