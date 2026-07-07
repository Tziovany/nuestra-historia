import { motion } from "framer-motion";

import Stars from "./Stars/Stars";
import HeroBackground from "./HeroBackground/HeroBackground";
import Moon from "../Moon/Moon";
import FloatingHearts from "../FloatingHearts/FloatingHearts";
import Navbar from "../Navbar/Navbar";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import Aurora from "./HeroBackground/Aurora";
import { useState } from "react";
import Button from "../ui/Button";
import MusicPlayer from "../Music/MusicPlayer";
import GradientGlow from "./HeroBackground/GradientGlow";
import RelationshipTimer from "../RelationshipTimer/RelationshipTimer";
import { scrollToSection } from "../../utils/scrollToSection";

export default function Hero() {

    const [playing, setPlaying] = useState(false)

    return (

        <section id="hero" className="relative min-h-screen overflow-hidden">

            <HeroBackground />
            <GradientGlow />
            <Aurora />
            <Stars />
            <Moon />
            <FloatingHearts />


            <Navbar />

            <div className="flex min-h-screen flex-col items-center justify-center">

                <motion.h2

                    initial={{ opacity: 0 }}

                    animate={{ opacity: 1 }}

                    className="text-3xl text-blue-300"

                >

                    Esta es

                </motion.h2>

                <motion.h1

                    initial={{ opacity: 0, y: 40 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 1 }}

                    className="glow-text mt-2 text-7xl font-bold"

                >

                    Nuestra Historia 💙

                </motion.h1>

                <motion.p

                    initial={{ opacity: 0 }}

                    animate={{ opacity: 1 }}

                    transition={{ delay: .8 }}

                    className="mt-8 max-w-xl text-center text-xl text-slate-300"

                >

                    Cada momento contigo es mi recuerdo favorito.

                </motion.p>

                <RelationshipTimer />


                <Button className="mt-12" onClick={() => {scrollToSection("timeline"); setPlaying(true)}}>
                    Comenzar
                </Button>

                <MusicPlayer playing={playing} />

            </div>

            <ScrollIndicator />

        </section>

    );

}