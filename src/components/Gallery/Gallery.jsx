import { photos } from "../../data/photos";
import { scrollToSection } from "../../utils/scrollToSection";
import Button from "../ui/Button";
import Section from "../ui/Sections";
import PhotoCard from "./PhotoCard";

export default function Gallery() {
    return (
        <Section
            id="gallery"
            className="mx-auto min-h-screen max-w-7xl px-6 py-32"
        >
            <h2 className="mb-16 text-center text-5xl font-bold text-blue-200">
                Nuestros Recuerdos
            </h2>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {photos.map((photo) => (
                    <PhotoCard
                        key={photo.id}
                        photo={photo}
                    />
                ))}
            </div>

            <Button className="mt-13" onClick={() => scrollToSection("letter")}>
                Leer mi carta 💌
            </Button>
        </Section>
    );
}