import { motion } from "framer-motion";
import Container from "./Container";

export default function Section({
  id,
  title,
  subtitle,
  children,
}) {
  return (
    <section
      id={id}
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24"
    >
        <Container>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl font-bold text-blue-200">
          {title}
        </h2>

        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            {subtitle}
          </p>
        )}
      </motion.div>

      {children}

      </Container>
    </section>
  );
}