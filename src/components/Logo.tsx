import React from 'react';

export default function Logo() {
  return (
    <div className="w-48 h-48 mx-auto mb-8">
      <img
        src="https://imgur.com/z7tDySC.jpg"
        alt="Scottish AI Guy Logo"
        className="w-full h-full object-contain"
        loading="eager"
        priority="high"
      />
    </div>
  );
}