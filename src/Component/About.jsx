import { GraduationCap, Calendar, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion'; 

export function About() {
  return (
    <section id="about" className="relative py-16 px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto relative">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: '#0F172A' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: '#475569' }}>
              I'm a dedicated Computer Engineering student with a strong passion for technology 
              and innovation. My journey in tech began with curiosity about how things work, 
              which evolved into a deep interest in software development and problem-solving.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#475569' }}>
              I thrive on learning new technologies and applying them to create meaningful 
              solutions. Whether it's building web applications, working on algorithms, or 
              exploring new programming paradigms, I'm always eager to expand my skill set.
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl relative overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg">
                <graduationcap size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: '#0F172A' }}>
                Education
              </h3>
            </div>
            
            <div className="space-y-1">
              <div>
                <h4 className="font-bold text-lg " style={{ color: '#0F172A' }}>
                  Bachelor in Computer Engineering
                </h4>
                <p className="font-medium  text-blue-600">
                  Kathmandu University
                </p>
                <p className="text-sm text-gray-500 italic">
                  Currently Pursuing
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <calendar size={18} style={{ color: '#2563EB' }} />
                <span style={{ color: '#475569' }}>2024 - Present </span>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-1" style={{ color: '#0F172A' }}>
                  +2 Science in Computer Science
                </h4>
                <p className="font-medium  text-blue-600">
                  SushmaSecondarySchool
                </p>
              </div>
              
              <div className="flex items-center gap-2 ">
                <calendar size={18} style={{ color: '#2563EB' }} />
                <span style={{ color: '#475569' }}>2021 - 2023 </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}