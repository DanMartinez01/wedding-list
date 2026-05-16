export const Hero = () => {
  return (
    <header className="relative z-10 mx-auto max-w-[640px] px-6 pb-10 pt-12 text-center">
      <p className="font-display mb-3 text-[1.1rem] uppercase tracking-[0.35em] text-wedding-gold">
        Nos casamos
      </p>
      <h1 className="font-display mb-4 text-[clamp(2.75rem,8vw,4rem)] font-normal leading-tight text-wedding-text">
        Sol{" "}
        <span className="px-0.5 italic font-normal text-wedding-rose">&amp;</span> Ale
      </h1>
      <p className="mx-auto max-w-[32ch] text-[1.05rem] text-wedding-muted">
        Tu cariño es nuestro mejor regalo. Si deseas obsequiarnos algo simbólico, elige una idea y
        gira la tarjeta para ver cómo transferir.
      </p>
    </header>
  );
}
