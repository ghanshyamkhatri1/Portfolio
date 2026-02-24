import React from "react";
import { motion } from "framer-motion";
import Photo from "../assets/photo.1.jpeg";
import Resume from "../assets/Myresume.pdf";
import { Download, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-24 max-w-7xl mx-auto gap-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src={Photo} alt="Ghanshyam Khatri" className="w-full h-full object-cover" />
        </div>
     
        <div className="absolute -z-10 inset-0 bg-blue-400 blur-3xl opacity-20 rounded-full" />
      </motion.div>

      
      <div className="text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-bold text-slate-900"
        >
          Hi, I'm <span className="text-blue-600">Ghanshyam</span> <span className="text-purple-600">Khatri</span>
        </motion.h1>
        <p className="mt-4 text-lg text-slate-600 font-medium">
          Computer Engineering Student | Aspiring Developer
        </p>

        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-blue-200"
          >
            View Projects <ArrowRight size={18} />
          </motion.a>

          <motion.a
            href={Resume}
            download="Ghanshyam Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors"
          >
            <Download size={18} /> Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;