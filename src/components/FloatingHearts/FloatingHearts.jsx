import { Heart } from "lucide-react";

export default function FloatingHearts() {
  const hearts = Array.from({ length: 20 });

  return (
    <>
      {hearts.map((_, i) => (
        <Heart
          key={i}
          fill="#3b82f6"
          color="#60a5fa"
          size={18 + Math.random() * 22}
          className="absolute opacity-70 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </>
  );
}