import { motion } from "framer-motion";
import Button from "../ui/Button";
import { scrollToSection } from "../../utils/scrollToSection";

const events = [
    {
        date: "El día que nos conocimos",
        text: "Ese día comenzó una historia que nunca imaginé."
    },
    {
        date: "Nuestra primera salida",
        text: "Descubrí que contigo cualquier lugar era especial."
    },
    {
        date: "Nuestro primer viaje",
        text: "Cada kilómetro fue un recuerdo nuevo."
    },
    {
        date: "Hoy",
        text: "Y sigo eligiéndote todos los días."
    }
];

export default function Timeline() {
    return (
        <section
            id="timeline"
            className="relative flex min-h-screen items-center justify-center px-8"
        >
            <div className="w-full max-w-5xl">

                <h2 className="mb-20 text-center text-5xl font-bold text-blue-200">
                    Nuestra Historia
                </h2>

                <div className="relative border-l border-blue-400/40">

                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * .2 }}
                            className="mb-16 ml-10"
                        >
                            <div className="absolute -left-[10px] h-5 w-5 rounded-full bg-blue-400 shadow-lg shadow-blue-500" />

                            <h3 className="text-2xl font-semibold">
                                {event.date}
                            </h3>

                            <p className="mt-3 text-slate-300">
                                {event.text}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </div>

            <Button onClick={() => scrollToSection("gallery")}>
                Ver nuestros recuerdos
            </Button>

        </section>
    );
}