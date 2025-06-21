import React from 'react';
import { FaPython, FaJava, FaReact, FaGitAlt, FaNodeJs, FaCloud } from 'react-icons/fa';
import { SiCplusplus, SiPostgresql, SiTensorflow, SiJavascript, SiHtml5, SiCss3, SiGo, SiGooglecloud } from 'react-icons/si';


export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-orange-500" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "C/C++", icon: <SiCplusplus className="text-blue-400" /> },
        { name: "Go", icon: <SiGo className="text-cyan-600" /> },
        { name: "SQL (Postgres)", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "HTML/CSS", icon: <SiHtml5 className="text-red-500" />, extra: <SiCss3 className="ml-1 text-blue-500" /> },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-400" /> },
      ],
    },
  ];

  
  return (
     <section className="py-12 bg-gray-100" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8 text-center">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow hover:shadow-md transition duration-300"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-sm font-medium">
                      {skill.name}
                      {skill.extra && skill.extra}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}