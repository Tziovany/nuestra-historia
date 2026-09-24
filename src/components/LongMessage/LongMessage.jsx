import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Heart, Maximize2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

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
  "No sé si alguna vez volveremos a encontrarnos, pero quiero que sepas que siempre te desearé lo mejor. Que encuentres la felicidad que mereces y que sigas brillando con esa luz que siempre me cautivó. Siempre recordaré los momentos que compartimos y los llevaré conmigo como un tesoro invaluable. Ojalá encuentres a alguien que te ame y te valore como yo lo hice, y que te haga sentir tan especial como tú me hiciste sentir a mí. No puedo describir con palabras lo que significaste para mí, pero eres lo que siempre he querido en mi vida y no habrán vidas o universos que puedan cambiar lo que siento por ti y lo mucho que quise estar contigo para el resto de mi vida y más allá.",
  "Voy a tener un vacío el resto de mi vida, porque también sé que no habrá nadie que pueda reemplazarte, y aunque me duela aceptarlo, sé que es lo mejor para los dos. ",
  "Ojalá hubiera hecho las cosas diferentes y aunque todo es un aprendizaje, no puedo dejar de pensar en ti y en lo que pude haber hecho para que no pasara nada. Perdón si esto para ti suena canson o si no está bien decirte estas cosas, pero extraño mucho tu sonrisa, tu voz, tu forma de ser y hacerme sentir amado.",
  "Y aunque con el tiempo sé que no vas a recordarme o no vas a tener el mismo cariño que yo tengo y voy a tener por ti. Quiero que seas feliz, que si alguien te trata como te mereces puedas darle la oportunidad, no sé si yo seré esa persona porque siempre va a haber una herida que no se va a cerrar completamente, sé que eres una mujer increiblemente fuerte y esto va a ser solo algo que pasó, pero que no va a ser un obstáculo o algo que te detenga de ser feliz, lo único que quiero es que si algún día me recuerdas, lo hagas con cariño y no con rencor, porque yo siempre te voy a recordar con mucho amor y cariño.",
  "Solo quiero que recuerdes que de mi lado lo único que siempre hubo fue un amor tan inmenso y puro que no puedo describir, pero que solo Dios sabe que nunca quise herirte y que estoy tan enamorado de la mujer que eres, así como te había dicho, dejaste la vara muy alta y te voy a amar por el resto de mi vida así no sea de la misma forma que yo quisiera.",
  "Te amo como a nadie, y si Dios tiene un plan para nosotros, espero que algún día podamos encontrarnos de nuevo y tener la oportunidad de amarnos como merecemos.",
  "Dios, la vida y tu me enseñaron mucho sobre el amor, sobre la vida y sobre lo que significa amar a alguien de verdad. Y aunque no pueda cambiar lo que pasó, quiero que sepas que siempre te llevaré en mi corazón y que siempre te desearé lo mejor.",
  "Te amo, y siempre voy a desear que encuentres paz, amor y motivos para sonreír. Gracias por nuestra historia.",
  "Siempre tuyo, Giovanny.",
  "Te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo, te amo.",
];

const STORAGE_KEY = "nuestra-historia-extra-message";
const TABLE_NAME = "shared_messages";
const normalizeMessages = (value) => {
  if (Array.isArray(value)) return value;

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : parsed ? [parsed] : [];
    } catch {
      return value.trim() ? [value.trim()] : [];
    }
  }

  return [];
};
const MESSAGE_FROM_CREATOR = [
  "Karem (Mi vida) ...",
  "No sé si esto también lo vayas a ver, pero en este caso, en esta página de esta web que te hice con todo mi cariño quería dejar todo lo que nunca te he podido decir, y aunque sea muy tarde es solo una opción para desahogarme.",
  "Tuve muchas primeras veces en mi vida contigo, pero enamorarme de ti fue la mas hermosa y la que mas me marcó. Aunque hay algunas cosas que también fueron mi primera vez, como sentir que podía pasar toda mi vida con alguien que amaba inmensamente como lo eras tú, como sentir que podía confiar y formar una familia con la mujer mas hermosa que he tenido en mi vida, como querer tener una niña con tus ojos hermosos, tus cachetes, tu hermosa sonrisa, con tu gran bondad, con tu gran corazón, definitivamente toda tú.",
  "Aunque hayamos terminado acá siempre voy a estar, esperando que tu vida mejore y que si yo era lo que te tenía mal o no te dejaba avanzar prefiero estar lejos y que tu puedas ser la mujer mas feliz del mundo.",
  "No sabes cuato extraño estar para ti, abrazarte, besarte, decirte que te amo y que eres la mujer mas hermosa del mundo, que siempre voy a estar sin importar nada. Extraño nuestras charlas, así yo no haya aportado mucho en tu vida, así no sea el mas interesante, pero hasta en los momentos en los que solo te veía y sabía que era el mas afortunado en tenerte, igualmente eran los momentos mas valiosos y hermosos de mi vida, enserio que gracias por todo y por haber estado ahí.",
  "Te amo mucho",
  "A la derecha dejé un cuadro donde puedes escribir lo que quieras decirme, y si quieres que lo guarde para siempre, solo dale click en guardar y va a quedar guardado para leerlo siempre que quieras y si quieres que yo lo lea.",
];
const supabase =
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
    ? createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)
    : null;

export default function LongMessage() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [extraMessage, setExtraMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [expandedIds, setExpandedIds] = useState({});

  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === "Escape") setSelectedMedia(null);
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  useEffect(() => {
    const loadSavedMessages = async () => {
      const savedText = localStorage.getItem(STORAGE_KEY);
      let loadedMessages = normalizeMessages(savedText);

      if (supabase) {
        const { data, error } = await supabase.from(TABLE_NAME).select("content").eq("id", "shared").maybeSingle();

        if (!error && data?.content) {
          loadedMessages = normalizeMessages(data.content);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(loadedMessages));
        }
      }

      setMessages(loadedMessages);
    };

    loadSavedMessages();
  }, []);

  const handleSaveMessage = async () => {
    const finalMessage = extraMessage.trim();

    if (!finalMessage) return;

    const nextMessages = [...messages, finalMessage];

    if (supabase) {
      const { error } = await supabase
        .from(TABLE_NAME)
        .upsert({ id: "shared", content: JSON.stringify(nextMessages) }, { onConflict: "id" });

      if (error) {
        console.error("Error saving to Supabase:", error);
        return;
      }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextMessages));
    setMessages(nextMessages);
    setExtraMessage("");
  };

  const toggleMessage = (index) => {
    setExpandedIds((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{
                scale: [1, 1.12, 1, 1.08, 1],
                rotate: [0, -4, 4, -2, 0],
                opacity: 1,
                filter: [
                  "drop-shadow(0 0 18px rgba(59,130,246,.45))",
                  "drop-shadow(0 0 34px rgba(96,165,250,.9))",
                  "drop-shadow(0 0 18px rgba(59,130,246,.45))",
                ],
              }}
              transition={{
                delay: 0.45,
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-10 flex justify-center"
            >
              <Heart
                className="fill-blue-500 text-blue-300"
                size={82}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_10rem]">
            <div className="columns-1 gap-5 sm:columns-2">
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

            <motion.aside
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -8, 0] }}
              transition={{ opacity: { delay: 0.35 }, x: { delay: 0.35 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="sticky top-8 rounded-[2rem] border border-pink-200/25 bg-gradient-to-b from-pink-300/20 via-fuchsia-300/10 to-white/[0.04] p-5 text-center shadow-[0_18px_45px_rgba(236,72,153,.2)] backdrop-blur-xl"
            >
              <Heart className="mx-auto mb-4 fill-pink-300 text-pink-200" size={22} aria-hidden="true" />
              <p className="text-sm font-medium leading-relaxed text-pink-50">
                Son una muestra de los muchos recuerdos de ti, de nosotros.
              </p>
            </motion.aside>
          </div>

          <div className="mt-4 grid gap-5 lg:col-span-2 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="rounded-2xl border border-pink-200/20 bg-slate-950/40 p-5 shadow-[0_0_30px_rgba(244,114,182,0.12)]"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-pink-200/80">
                Mensajito de mi parte
              </p>
              <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-base leading-relaxed text-slate-100">
                {MESSAGE_FROM_CREATOR.map((paragraph, index) => (
                  <p key={paragraph} className={index === MESSAGE_FROM_CREATOR.length - 1 ? "font-bold" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className="rounded-2xl border border-pink-200/20 bg-slate-950/40 p-5 shadow-[0_0_30px_rgba(244,114,182,0.12)]"
            >
              <textarea
                id="extra-message"
                value={extraMessage}
                onChange={(event) => setExtraMessage(event.target.value)}
                placeholder="Escribe aquí lo que quieres decir..."
                className="min-h-[170px] w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base leading-relaxed text-slate-100 placeholder:text-slate-400 focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400/40"
              />

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveMessage}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-200"
                >
                  Guardar
                </button>
              </div>

              {messages.length > 0 && (
                <div className="mt-5 space-y-3">
                  {messages.map((message, index) => {
                    const isExpanded = Boolean(expandedIds[index]);
                    const isLong = message.length > 220;
                    const preview = isLong ? `${message.slice(0, 220).trimEnd()}...` : message;

                    return (
                      <div
                        key={`${message}-${index}`}
                        className="overflow-hidden rounded-2xl border border-pink-200/20 bg-white/[0.04] p-4 text-base leading-relaxed text-slate-100 shadow-[0_0_25px_rgba(244,114,182,0.06)]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-200/80">
                            Mensaje {index + 1}
                          </span>
                          {isLong && (
                            <button
                              type="button"
                              onClick={() => toggleMessage(index)}
                              className="inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-pink-500/10 px-2.5 py-1 text-[11px] font-semibold text-pink-100 transition hover:border-pink-200/60 hover:bg-pink-400/15 hover:text-white"
                            >
                              <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-300" />
                              {isExpanded ? "Minimizar" : "Leer más"}
                            </button>
                          )}
                        </div>

                        <div className="mt-3">
                          <div
                            className={
                              isExpanded || !isLong
                                ? "whitespace-pre-wrap text-slate-100"
                                : "max-h-[7.1rem] overflow-hidden whitespace-pre-wrap text-slate-200"
                            }
                          >
                            {isExpanded || !isLong ? message : preview}
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
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
