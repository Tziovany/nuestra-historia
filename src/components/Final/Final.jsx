import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { launchHearts } from "../../utils/confetti";
import Button from "../ui/Button";

const messages = [
    "Gracias por existir 💙",
    "De todos los caminos que pude recorrer...",
    "Siempre volvería a elegirte a ti.",
    "Te amo ❤️",
];

export default function Final() {
    const [step, setStep] = useState(0);
    const started = useRef(false);

    const startAnimation = () => {
        if (started.current) return;

        started.current = true;

        launchHearts();

        setTimeout(() => setStep(1), 3000);
        setTimeout(() => setStep(2), 6500);
        setTimeout(() => setStep(3), 10000);
    };

    return (
        <motion.section
            id="final"
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
            viewport={{ once: true, amount: 0.6 }}
            onViewportEnter={startAnimation}
        >
            <AnimatePresence mode="wait">
                <motion.h1
                    key={step}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-5xl font-bold text-white"
                >
                    {messages[step]}
                </motion.h1>
            </AnimatePresence>
        </motion.section>
    );
}