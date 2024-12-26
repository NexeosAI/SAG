import React from 'react';
import { ArrowRight, Youtube } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#2c2128]">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506670053666-34e1a9ed13e4?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-[#2c2128]/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-20">
        <Logo />
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Democratising AI for Scottish Business
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            #1 Ranked AI Expert Making AI Accessible
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2c2128] px-8 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-50 transition-colors">
              Get Your Free AI Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-white/10 transition-colors">
              Watch AI Insights
              <Youtube className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}