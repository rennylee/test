import React from 'react';

export default function CodeImageBackground() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-0 bg-fixed bg-cover opacity-10 blur-sm"
      style={{
        backgroundImage: "url('/bg2.png')",
        animation: 'scrollBG 60s linear infinite'
      }}
    ></div>
  );
}
