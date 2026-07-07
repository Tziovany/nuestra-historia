import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Envelope({ onOpen }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="
        w-full
        max-w-xl
        rounded-3xl
        border
        border-blue-400/20
        bg-white/5
        p-12
        text-center
        backdrop-blur-xl
      "
    >
      <div className="mb-8 text-7xl">
        ✉️
      </div>

      <h2 className="text-3xl font-bold">
        Una carta para ti
      </h2>

      <p className="mt-4 text-slate-300">
        Hay algo que quiero decirte...
      </p>

      <div className="mt-10">
        <Button onClick={onOpen}>
          Abrir
        </Button>
      </div>
    </motion.div>
  );
}