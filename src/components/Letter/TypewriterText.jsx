import { TypeAnimation } from "react-type-animation";
import Button from "../ui/Button";
import { scrollToSection } from "../../utils/scrollToSection";

export default function TypewriterText() {
  return (
    <>
    <TypeAnimation
      sequence={[
        `Desde el día en que llegaste a mi vida,
cada momento contigo ha sido un regalo.

Gracias por cada sonrisa,
cada abrazo,
cada conversación
y cada recuerdo que hemos construido juntos.

Esta página es solo una pequeña forma de decirte cuánto significas para mí.

Te amo muchísimo. 💙

"Mejores son dos que uno, porque obtienen más fruto de su esfuerzo. Si uno cae, el otro lo levanta."

— Eclesiastés 4:9-10
`,
      ]}
      wrapper="p"
      speed={70}
      className="whitespace-pre-line text-xl leading-9 text-slate-200"
      cursor
    />
    <Button className="mt-8" onClick={() => scrollToSection("final")}>
  Última sorpresa ✨
</Button>
    </>
  );
}