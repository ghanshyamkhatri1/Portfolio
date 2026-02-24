import { ExternalLink, Github, Code2, HeartPulse, GraduationCap, MapPinned } from 'lucide-react';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: "Faculty-Management-System",
    desc: "A comprehensive system designed to manage faculty data, schedules, and administrative tasks efficiently.",
    tech: ["C++", "Qt","SQLite"],
    github: "https://github.com/ghanshyamkhatri1/Faculty-Management-System",
    icon: GraduationCap
  },
  {
    title: "Route-Hive",
    desc: "A smart routing application built to optimize pathfinding and logistics management using modern web tech.",
    tech: ["Python", "React", "TailWindCSS","SQLite","Flask"],
    github: "https://github.com/ghanshyamkhatri1/Route-Hive",
    icon: MapPinned
  },
  {
    title: "CuraMind",
    desc: "A project focused on mental health awareness or management, providing a platform for wellness resources.",
    tech: ["Python", "React", "TailWindCSS","Flask","Supabase",],
    github: "https://github.com/ghanshyamkhatri1/CuraMind",
    icon: HeartPulse
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div 
                key={index}
                className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                    <Icon size={24} />
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <Github size={22} />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-blue-50 text-[10px] font-bold text-blue-600 uppercase tracking-wider rounded-md border border-blue-100">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}