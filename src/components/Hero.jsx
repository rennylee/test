import React from 'react';

export default function Hero() {
  return (

    <section className="py-20 bg-white text-center relative z-10" id="hero">
      <h2 className="text-3xl font-semibold">Hi, I’m Yu-Chen Lee</h2>
      <p className="mt-4 text-lg">Computer Science Student at uOttawa • Full-Stack Developer • AI/ML Enthusiast</p>
      <div className="mt-6 space-x-4">
        <a href="mailto:ylee153@uottawa.ca" className="text-blue-600 underline">Email</a>
        <a href="https://github.com/rennylee" target="_blank" className="text-blue-600 underline">GitHub</a>
        <a href="https://linkedin.com/in/renny-lee1102" target="_blank" className="text-blue-600 underline">LinkedIn</a>
      </div>
    </section>
  );
}
