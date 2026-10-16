export const BackgroundLace = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 32% at 50% 0%, rgba(255,255,255,0.45), transparent 62%),
          radial-gradient(ellipse 70% 40% at 50% 100%, rgba(154,174,143,0.35), transparent 55%)
        `,
      }}
      aria-hidden
    />
  );
}
