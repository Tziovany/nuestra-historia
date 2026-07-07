export default function HeroBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-[#020617]" />

      <div
        className="
        fixed
        inset-0
        -z-40
        bg-gradient-to-b
        from-[#020617]
        via-[#071A35]
        to-[#020617]
      "
      />

      <div
        className="
        fixed
        top-40
        left-1/2
        h-[700px]
        w-[700px]
        -translate-x-1/2
        rounded-full
        bg-blue-500/20
        blur-[180px]
        -z-30
      "
      />
    </>
  );
}