import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Neural Network Protein Predictor",
    tech: "TensorFlow, Scikit-learn",
    desc: "Built and trained neural networks to classify protein structures. Improved model accuracy by tuning architecture, batch sizes, and learning rates.",
    outcome: "Achieved higher F1-score and reduced overfitting compared to baseline models.",
    link: "https://github.com/rennylee/Neural-Networks"
  },
  {
    title: "Hotel Booking System",
    tech: "React, PostgreSQL, TypeScript",
    desc: "Full-stack app with a React frontend and RESTful API backend for managing users, bookings, and admin tools.",
    outcome: "Improved backend performance by 40% through PLpgSQL optimizations.",
    link: "https://github.com/rennylee/hotel-booking"
  },
  {
    title: "Healthcare Queue System",
    tech: "Java",
    desc: "Simulated a multiple-server queue system for walk-in clinics in Ottawa. Tuned for minimum patient wait times and optimal server utilization.",
    outcome: "Maintained avg wait < 15 min and server utilization > 80%.",
    link: ""
  },
  {
    title: "RANSAC 3D Detection",
    tech: "Java, Go, Scheme",
    desc: "Optimized RANSAC algorithm to detect dominant planes in 3D point clouds using adaptive sampling.",
    outcome: "Reduced computational time by 70% (O(n³) to O(n log n)).",
    link: ""
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-blue-600 hover:text-blue-800 underline mb-6 inline-block text-sm">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-4xl font-extrabold mb-10 text-gray-800">Projects</h1>

        <div className="grid gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">{proj.title}</h2>
              <p className="text-sm text-gray-500 mb-3 italic">{proj.tech}</p>
              <p className="text-sm text-gray-700 mb-2">{proj.desc}</p>
              <p className="text-sm text-gray-800 font-medium">Outcome: {proj.outcome}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:text-blue-800 underline text-sm font-medium"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

