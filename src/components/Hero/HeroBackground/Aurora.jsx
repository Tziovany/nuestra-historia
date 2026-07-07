import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="
          absolute
          -left-40
          top-32
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/20
          blur-[140px]
        "
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 60, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
        }}
        className="
          absolute
          right-0
          top-72
          h-[600px]
          w-[600px]
          rounded-full
          bg-blue-600/20
          blur-[170px]
        "
      />
    </>
  );
}