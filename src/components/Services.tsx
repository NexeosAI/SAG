import React from 'react';
import { Settings, BookOpen, Users, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: "AI Consultancy",
    description: "Strategic AI integration tailored for Scottish businesses",
    price: "From £750/day"
  },
  {
    icon: BookOpen,
    title: "Training Programs",
    description: "Hands-on AI workshops for your team",
    price: "From £2,500/program"
  },
  {
    icon: Users,
    title: "Implementation",
    description: "End-to-end AI solution deployment",
    price: "Custom pricing"
  },
  {
    icon: Lightbulb,
    title: "Innovation Lab",
    description: "R&D partnerships for breakthrough AI solutions",
    price: "Partnership based"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services & Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive AI services designed for Scottish business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="h-12 w-12 text-blue-900 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <p className="text-blue-900 font-semibold">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}