import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ✏️ Escribe aquí tu mensaje (un string por párrafo)
const MESSAGE_PARAGRAPHS = [
  "No se si en algún momento veas esto, pero creeme que me arrepiento demasiado por lo que te hice.",
  "Y puede que en el fondo de tu corazón no me perdones.",
  "No tendré tiempo ni vida para poder remendar el daño que te he hecho.",
  "Pero quiero que sepas, que te amo y te amaré toda la vida, porque es enserio cuando te digo que eres el amor de mi vida."
  + "Y tengo cosas que solucionar, cosas que pudieron ser diferentes y no terminar, porque yo no quería dejar al amor de mi vida"
  + "Te dije que sería bueno dejar las cosas, pero no para mi bien si no para el tuyo, ibamos a convertir una relación tan bonita en algo tedioso para ti, e incluso para mí",
  "En la vida te hubiera sido infiel ni mucho menos, pero esa traición fue demasiado para ti y lo entiendo completamente. Quisiera poder regresar el tiempo"
  + " y enmedar todo ese daño, porque lo que menos quería era hacer eso. Y quisiera que tuvieras el beneficio de la duda con esto"
  + " porque lo digo de corazón, solo podía pensar en una vida entera contigo y una familia.",
  "Dañé todo y no puedo remediarlo ya, Dios hará lo posible en volver a unirnos si esa llega a ser su voluntad. Porque quiero todo contigo"
  + ", la mujer de mi vida.",
  "Juro por todo lo que tengo en mi vida importante, que no quiero ni quería nada con nadie más. Eres el amor de mi vida y te voy a tener para siempre en mi piel.",
  '"Sobre todo, ámense los unos a los otros profundamente, porque el amor cubre multitud de pecados."— 1 Pedro 4:8',
  "Te amo con todo mi corazón y nunca fue mi intención hacerte daño. Gracias por todo."

];

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-8 sm:px-6"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              flex
              max-w-3xl
              w-full
              max-h-[85vh]
              flex-col
              rounded-3xl
              border
              border-blue-400/20
              bg-white/5
              p-6
              sm:p-10
              text-center
              backdrop-blur-xl
              shadow-[0_0_60px_rgba(37,99,235,.35)]
            "
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-xl text-white/60 transition-colors hover:text-white sm:right-5 sm:top-5"
              aria-label="Cerrar"
            >
              ✕
            </button>

            <div className="space-y-4 overflow-y-auto text-left">
              {MESSAGE_PARAGRAPHS.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg font-medium text-white">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
