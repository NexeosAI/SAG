import React from 'react';
import { Mail, MapPin, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4" />
                <span>contact@scottishaiguy.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-4" />
                <span>Edinburgh, Scotland</span>
              </div>
              <a 
                href="https://www.youtube.com/@ScottishAIGuy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-200 transition-colors"
              >
                <Youtube className="h-6 w-6 mr-4" />
                <span>Scottish AI Guy</span>
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white h-32"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-900 py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}