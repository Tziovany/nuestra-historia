import "./Stars.css"

export default function Stars() {

  const stars = Array.from({ length: 120 });

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">

      {stars.map((_, i) => (

        <span
          key={i}
          className="absolute rounded-full bg-white"

          style={{
            width: Math.random() * 3 + "px",
            height: Math.random() * 3 + "px",

            top: Math.random() * 100 + "%",

            left: Math.random() * 100 + "%",

            opacity: Math.random(),

            animation: `twinkle ${2 + Math.random() * 5}s infinite`
          }}

        />

      ))}

    </div>
  );

}