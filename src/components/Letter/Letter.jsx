import { motion } from "framer-motion";
import { useState } from "react";
import Envelope from "./Envelope";
import TypewriterText from "./TypewriterText";

export default function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="letter"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {!open ? (
        <Envelope onOpen={() => setOpen(true)} />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="
            max-w-3xl
            rounded-3xl
            border
            border-blue-400/20
            bg-white/5
            p-10
            backdrop-blur-xl
          "
        >
          <h2 className="mb-8 text-center text-4xl font-bold text-blue-300">
            Para ti 💙
          </h2>

          <TypewriterText />
          
        </motion.div>
      )}
    </section>
  );
}