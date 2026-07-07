import { motion } from "framer-motion";

export default function Moon() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 6,
      }}
      className="absolute right-20 top-20 h-52 w-52 rounded-full"
    >
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-br
          from-blue-100
          via-blue-300
          to-blue-600
          shadow-[0_0_120px_rgba(59,130,246,.8)]
        "
      />

      <div
        className="
          absolute
          inset-5
          rounded-full
          bg-white/10
          blur-xl
        "
      />
    </motion.div>
  );
}