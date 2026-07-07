export default function GradientGlow() {
  return (
    <>
      <div
        className="
          absolute
          left-0
          top-0
          h-96
          w-96
          rounded-full
          bg-blue-500/20
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/20
          blur-[180px]
        "
      />
    </>
  );
}