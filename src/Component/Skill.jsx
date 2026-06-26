import { Code2, Globe, Wrench } from 'lucide-react';
import { motion } from 'framer-motion'; 

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      skills: ['C', 'C++', , 'Python'],
      color: '#2563EB',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: ['HTML', 'Tailwind  CSS', 'JavaScript', 'React'],
      color: '#7C3AED',
      gradient: 'from-purple-600 to-purple-400'
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: ['Git', 'VS Code', 'Latex', 'GitHub'],
      color: '#808080',
      gradient: 'from-gray-600 to-gray-400'
    }
  ];

  return (
    <section id="skills" className="py-16 px-6 lg:px-8 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative">
                  <motion.div 
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent size={28} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-4 py-2 rounded-lg font-medium text-sm shadow-sm hover:shadow-md transition-shadow"
                        style={{ backgroundColor: '#EFF6FF', color: category.color }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + skillIndex * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}