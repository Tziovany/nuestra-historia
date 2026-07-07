import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  className = "",
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(59,130,246,.6)",
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-full
        border
        border-cyan-300/30
        bg-gradient-to-r
        from-blue-600
        via-blue-500
        to-cyan-500
        px-10
        py-4
        text-lg
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>

      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
    </motion.button>
  );
}