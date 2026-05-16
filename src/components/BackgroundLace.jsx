export const BackgroundLace = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.5), transparent),
          radial-gradient(circle at 10% 90%, rgba(232,196,200,0.25), transparent 45%),
          radial-gradient(circle at 90% 80%, rgba(201,169,98,0.12), transparent 40%)
        `,
      }}
      aria-hidden
    />
  );
}
