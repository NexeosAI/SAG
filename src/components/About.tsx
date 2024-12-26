import React from 'react';
import { Trophy, Users, Brain, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "Global Recognition",
    description: "Ranked #1 among 10,000+ AI specialists worldwide"
  },
  {
    icon: Users,
    title: "Scottish Focus",
    description: "Dedicated to empowering Scottish businesses with AI"
  },
  {
    icon: Brain,
    title: "AI Excellence",
    description: "Pioneer in practical AI implementation"
  },
  {
    icon: Target,
    title: "Proven Results",
    description: "100+ successful AI transformations"
  }
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Scotland's Premier AI Consultant
          </h2>
          <p className="text-xl text-gray-600">
            Bridging the gap between cutting-edge AI technology and Scottish business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-xl">
              <item.icon className="h-12 w-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}