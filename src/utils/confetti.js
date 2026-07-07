import confetti from "canvas-confetti";

const heart = confetti.shapeFromText({
  text: "💙",
  scalar: 2,
});

export function launchHearts() {
  const end = Date.now() + 5000;

  (function frame() {
    confetti({
      particleCount: 3,
      spread: 90,
      startVelocity: 25,
      origin: { x: 0, y: 0.8 },
      shapes: [heart],
      scalar: 1.4,
    });

    confetti({
      particleCount: 3,
      spread: 90,
      startVelocity: 25,
      origin: { x: 1, y: 0.8 },
      shapes: [heart],
      scalar: 1.4,
    });

    confetti({
      particleCount: 2,
      spread: 120,
      startVelocity: 15,
      origin: { x: 0.5, y: 0.2 },
      shapes: [heart],
      scalar: 1,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}