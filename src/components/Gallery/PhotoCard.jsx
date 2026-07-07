import { motion } from "framer-motion";

export default function PhotoCard({ photo }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        y: -10,
      }}
      transition={{
        duration: 0.5,
      }}
      style={{
        rotate: `${photo.rotation}deg`,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-blue-500/20
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
        shadow-blue-500/10
      "
    >
      <div className="overflow-hidden">
        <img
          src={photo.image}
          alt={photo.title}
          className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {photo.title}
        </h3>

        <p className="mt-3 text-slate-300">
          {photo.description}
        </p>

        <span className="mt-4 inline-block text-sm text-blue-300">
          {photo.date}
        </span>
      </div>
    </motion.article>
  );
}