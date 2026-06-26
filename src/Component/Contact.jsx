import React, { useState } from "react";
import { Send, User, Mail, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 
  const [debugErrorMessage, setDebugErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setDebugErrorMessage("");

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus("error");
      setDebugErrorMessage("Configuration credentials missing. Please check your .env variables.");
      setIsSubmitting(false);
      return;
    }

    emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
        to_name: "Ghanshyam"
      },
      publicKey
    )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSubmitStatus("error");
        const reason = error?.text || (typeof error === 'string' ? error : JSON.stringify(error));
        setDebugErrorMessage(reason || "API Connection failure.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="w-full min-w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 block clear-both">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-20" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-25" />
      </div>

      {/* Main Container Wrapper */}
      <div className="w-full max-w-4xl mx-auto relative z-10 block">
        
        {/* Header Layout */}
        <div className="text-center mb-16 w-full">
          <motion.span 
            className="text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Conversation</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium px-2 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Drop a message below and I'll get right back to you.
          </motion.p>
        </div>

        {/* Card Container Layout */}
        <motion.div
          className="w-full block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.3 }}
        >
          <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl shadow-slate-200/90 border border-slate-100 w-full block">
            
            <form onSubmit={handleSubmit} className="space-y-8 w-full block">
              
              {/* Status Banners */}
              <AnimatePresence mode="wait">
                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-base flex items-center gap-4 font-medium overflow-hidden w-full"
                  >
                    <CheckCircle2 className="text-emerald-600 shrink-0" size={22} />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}
                
                {submitStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-base flex flex-col gap-2 overflow-hidden font-medium w-full"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <AlertCircle className="text-rose-600 shrink-0" size={22} />
                      <span>Submission failed.</span>
                    </div>
                    {debugErrorMessage && (
                      <span className="text-xs font-mono bg-white/50 p-3 rounded-xl text-rose-600 border border-rose-100 mt-1 break-words w-full block">
                        {debugErrorMessage}
                      </span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name Field */}
              <div className="w-full block group">
                <label htmlFor="name" className="block text-sm sm:text-base font-bold text-slate-700 mb-2.5 transition-colors group-focus-within:text-blue-600">
                  Full Name
                </label>
                <div className="relative w-full block">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors z-20">
                    <User size={22} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full min-w-full block pl-14 pr-5 py-4 bg-slate-50/60 hover:bg-slate-50 border border-slate-200 focus:bg-white rounded-2xl text-slate-800 text-base font-medium placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all disabled:opacity-50 box-border relative z-10"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="w-full block group">
                <label htmlFor="email" className="block text-sm sm:text-base font-bold text-slate-700 mb-2.5 transition-colors group-focus-within:text-blue-600">
                  Email Address
                </label>
                <div className="relative w-full block">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors z-20">
                    <Mail size={22} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full min-w-full block pl-14 pr-5 py-4 bg-slate-50/60 hover:bg-slate-50 border border-slate-200 focus:bg-white rounded-2xl text-slate-800 text-base font-medium placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all disabled:opacity-50 box-border relative z-10"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="w-full block group">
                <label htmlFor="message" className="block text-sm sm:text-base font-bold text-slate-700 mb-2.5 transition-colors group-focus-within:text-blue-600">
                  Your Message
                </label>
                <div className="relative w-full block">
                  <div className="absolute left-5 top-5 pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors z-20">
                    <MessageSquare size={22} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className="w-full pl-14 pr-5 py-4 bg-slate-50/60 hover:bg-slate-50 border border-slate-200 focus:bg-white rounded-2xl text-slate-800 text-base font-medium placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none disabled:opacity-50 box-border relative z-10"
                    placeholder="Write your thoughts here..."
                  />
                </div>
              </div>

              {/* Action Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full min-w-full py-4 px-8 rounded-2xl font-bold text-white text-base sm:text-lg flex items-center justify-center gap-3 transition-all block ${
                  isSubmitting 
                    ? "bg-slate-400 cursor-not-allowed shadow-none" 
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-600/20"
                }`}
                whileHover={!isSubmitting ? { scale: 1.01, y: -1 } : {}}
                whileTap={!isSubmitting ? { scale: 0.99 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <circle className="opacity-75" fill="currentColor" cx="12" cy="12" r="10" />
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <span>Send Message</span>
                    <Send size={20} />
                  </div>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};