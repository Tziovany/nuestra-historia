import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <ChevronDown
        size={40}
        className="text-blue-300"
      />
    </motion.div>
  );
}