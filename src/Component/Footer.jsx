import { Github, Linkedin, Facebook, Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  const socials = [
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/ghanshyamkhatri.1234" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/ghanshyam-khatri-5b376b308/" },
    { icon: <Github size={18} />, href: "https://github.com/ghanshyamkhatri1" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/ghanashyam_khatri/" },
  ];

  return (
    <footer className="py-12 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-8">
        <div className="flex gap-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-slate-400 hover:text-blue-600 transition-all duration-300 hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[14px] text-slate-400 font-normal tracking-wide">
            © 2026 <span className="text-slate-900 font-semibold">Ghanshyam Khatri</span>. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}