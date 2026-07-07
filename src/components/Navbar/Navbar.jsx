import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Historia", href: "#timeline" },
  { label: "Galería", href: "#gallery" },
  { label: "Carta", href: "#letter" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 z-50 w-full"
    >
      <nav className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-full border border-blue-400/20 bg-white/5 px-8 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <Heart className="text-blue-400 fill-blue-400" />
          <span className="font-semibold text-white">
            Nuestra Historia
          </span>
        </div>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-slate-300 transition hover:text-blue-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}