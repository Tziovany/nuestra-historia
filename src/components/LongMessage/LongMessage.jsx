import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Heart, Maximize2 } from "lucide-react";

const media = Object.entries(
  import.meta.glob("../../assets/images/*.{jpeg,mp4}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
).sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath));
const LONG_MESSAGE = [
  "No sé si algún día volverás a leer mis palabras con el mismo cariño, pero necesitaba dejarte algo que pudiera guardar todo lo que siento.",
  "Contigo descubrí que los momentos más sencillos pueden convertirse en recuerdos enormes: una comida, un viaje, una tarde cualquiera o una sonrisa que todavía recuerdo con claridad.",
  "Sé que cometí errores y que algunas heridas no desaparecen solo porque uno pida perdón. No quiero disfrazar lo que pasó ni pedirte que olvides. Solo quiero reconocer el daño que te hice y decirte que lo lamento de corazón.",
  "Gracias por cada día, por cada abrazo, por la confianza y por todo lo que construimos. Fuiste mi lugar seguro, mi compañía y una parte muy importante de mi vida.",
  "Ojalá estas fotos te recuerden que también hubo amor, alegría y momentos verdaderos. Yo voy a conservarlos con respeto, sin importar lo que el futuro decida para nosotros.",
  "Recuerdo mucho cuando te dije por primera vez que te amaba, nunca se lo había dicho a nadie de una forma tan automática y sincera. Así tu no lo sintienras en ese momento, yo ya sabía que quería estar contigo para toda la vida."
  + "Pero no me arrepiento ni un solo momento de haberte conocido y haberte amado tan intensamente como lo hice. Dios me ayudará a seguir adelante aún sabiendo que perdí a la mujer de mi vida, pero también me ayudará a mejorar para que si algún día nos volvemos a encontrar, pueda ser la mejor versión de mí mismo.",
  "Mi tiempo junto a ti fue el más feliz de mi vida, y aunque no pueda cambiar lo que pasó, quiero que sepas que siempre te llevaré en mi corazón. Me enseñaste a amar de una manera que nunca imaginé y por eso siempre te estaré agradecido, igualmente sé que si hubieramos estado juntos habría hecho todo en esta vida para poder hacerte feliz, y aunque no pueda hacerlo ahora, quiero que sepas que siempre te desearé lo mejor.",
  "Creo que cada recuerdo contigo ha sido el más hermoso de mi vida, y lo atesoraré para siempre. Puede que ya no pueda tener la hermosa niña con tus ojos hermosos, tus cachetes hermosos y la forma tan divina que tienes de ser, de sonreir, de haberme hecho mejor persona, pero sé que hubiera sido hermoso poder tener una familia contigo y verte todos lo días de mi vida al despertar y al dormir, pero sé que no fue el momento y que Dios tiene un plan para nosotros, y aunque no pueda entenderlo ahora, confío en que todo tiene un propósito.",
  "Te amo, y siempre voy a desear que encuentres paz, amor y motivos para sonreír. Gracias por nuestra historia."
];

export default function LongMessage() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === "Escape") setSelectedMedia(null);
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020617] px-5 py-8 text-white sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-pink-200 transition-colors hover:text-white"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Volver a nuestra historia
        </motion.a>

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-3xl py-16 text-center sm:py-24"
        >
          <Heart className="mx-auto mb-6 fill-pink-400 text-pink-400" size={30} aria-hidden="true" />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-pink-200/80">
            Una carta para ti
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Todo lo que todavía quería decirte
          </h1>
        </motion.header>

        <section className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-pink-200/15 bg-white/[0.06] p-7 shadow-[0_0_60px_rgba(236,72,153,.12)] backdrop-blur-xl sm:p-10"
          >
            <div className="space-y-6 text-lg leading-relaxed text-slate-200 sm:text-xl">
              {LONG_MESSAGE.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {media.map(([path, source], index) => {
              const isVideo = path.endsWith(".mp4");

              return (
                <motion.figure
                  key={path}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: Math.min(index * 0.03, 0.3) }}
                  className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/20 transition duration-500 hover:-translate-y-2 hover:border-pink-200/70 hover:shadow-[0_18px_45px_rgba(236,72,153,.25)]"
                >
                  {isVideo ? (
                    <video
                      src={source}
                      controls
                      preload="metadata"
                      onClick={() => setSelectedMedia({ source, isVideo })}
                      className="block w-full cursor-pointer transition duration-700 group-hover:scale-105"
                      aria-label={`Recuerdo en video ${index + 1}`}
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedMedia({ source, isVideo })}
                      className="block w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-200"
                      aria-label={`Ampliar recuerdo ${index + 1}`}
                    >
                      <img
                        src={source}
                        alt={`Recuerdo de nuestra historia ${index + 1}`}
                        className="block w-full cursor-pointer transition duration-700 group-hover:scale-105"
                      />
                    </button>
                  )}

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-pink-950/0 opacity-0 transition duration-500 group-hover:bg-pink-950/25 group-hover:opacity-100">
                    <span className="flex h-12 w-12 scale-75 items-center justify-center rounded-full border border-white/60 bg-slate-950/60 text-white shadow-xl transition duration-500 group-hover:scale-100">
                      <Maximize2 size={21} aria-hidden="true" />
                    </span>
                  </div>
                </motion.figure>
              );
            })}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setSelectedMedia(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Previsualización del recuerdo"
          >
            <motion.div
              initial={{ scale: 0.92, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 12 }}
              className="relative flex max-h-[90vh] max-w-6xl items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedMedia(null)}
                className="absolute -right-2 -top-12 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-2xl text-white transition hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200 sm:-right-12 sm:top-0"
                aria-label="Cerrar previsualización"
              >
                ×
              </button>

              {selectedMedia.isVideo ? (
                <video
                  src={selectedMedia.source}
                  controls
                  autoPlay
                  className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
                />
              ) : (
                <img
                  src={selectedMedia.source}
                  alt="Previsualización del recuerdo"
                  className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
