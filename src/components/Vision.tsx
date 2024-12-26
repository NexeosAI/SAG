import React from 'react';
import { Rocket, Youtube, Globe, LineChart } from 'lucide-react';

export default function Vision() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Future Vision (2025)
          </h2>
          <p className="text-xl text-gray-600">
            Leading Scotland's AI revolution through education and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Youtube className="h-12 w-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              YouTube Channel Launch
            </h3>
            <p className="text-gray-600">
              Weekly AI insights and tutorials specifically for Scottish businesses
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Globe className="h-12 w-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Market Expansion
            </h3>
            <p className="text-gray-600">
              Extending our reach while maintaining our Scottish roots
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Rocket className="h-12 w-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Technology Development
            </h3>
            <p className="text-gray-600">
              Pioneering Scottish-focused AI solutions
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <LineChart className="h-12 w-12 text-blue-900 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Growth Targets
            </h3>
            <p className="text-gray-600">
              Empowering 1000+ Scottish businesses with AI by 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}