export default function RelationshipTimer() {
  const startDate = new Date("2025-06-23T00:00:00");
  const endDate = new Date("2026-08-02T18:00:00");
  const diff = endDate - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const time = { days, hours, minutes, seconds };

  return (
    <div className="mt-12 text-center">
      <p className="text-blue-300 text-xl">
        Lo que duró nuestra historia
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <TimeBox value={time.days} label="Días" />
        <TimeBox value={time.hours} label="Horas" />
        <TimeBox value={time.minutes} label="Minutos" />
        <TimeBox value={time.seconds} label="Segundos" />
      </div>
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div
      className="
        w-28
        rounded-2xl
        border
        border-blue-500/20
        bg-white/5
        p-4
        backdrop-blur-xl
      "
    >
      <div className="text-4xl font-bold text-white">
        {value}
      </div>

      <div className="mt-2 text-blue-300">
        {label}
      </div>
    </div>
  );
}