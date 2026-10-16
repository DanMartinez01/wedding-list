import { useCallback, useState } from "react";
import { TRANSFER_ALIAS } from "../data/gifts";

export const GiftCard = ({ gift, index = 0, transferAlias = TRANSFER_ALIAS }) => {
  const [flipped, setFlipped] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const toggleFlip = useCallback(() => {
    setFlipped((f) => !f);
  }, []);

  const handleFlipKeyDown = (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    toggleFlip();
  };

  return (
    <div
      className="rise-in h-[200px] [perspective:1000px]"
      style={{ animationDelay: `${0.6 + index * 0.07}s` }}
    >
      <div className="relative h-full w-full">
        <button
          type="button"
          data-favorite-btn
          aria-label={`Marcar como favorito: ${gift.name}`}
          aria-pressed={favorite}
          onClick={(e) => {
            e.stopPropagation();
            setFavorite((v) => !v);
          }}
          className={`absolute right-2.5 top-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-full border text-base leading-none transition-[background,border-color,transform] duration-200 ${
            favorite
              ? "border-wedding-rose bg-wedding-rose text-white"
              : "border-wedding-rose/35 bg-white/75 text-wedding-rose hover:border-wedding-rose hover:bg-white/95"
          } focus-visible:outline focus-visible:outline-2 focus-visible:outline-wedding-gold focus-visible:outline-offset-2`}
        >
          <span className="block translate-y-px" aria-hidden>
            {favorite ? "♥" : "♡"}
          </span>
        </button>

        <div
          role="button"
          tabIndex={0}
          aria-expanded={flipped}
          aria-label={`Regalo: ${gift.name}, ${gift.price}. Activar para ver alias de pago.`}
          onClick={toggleFlip}
          onKeyDown={handleFlipKeyDown}
          className="h-full w-full cursor-pointer rounded-[18px] outline-none focus-visible:shadow-[0_0_0_3px_var(--color-wedding-cream),0_0_0_5px_var(--color-wedding-rose)]"
        >
          <div
            className="relative h-full w-full rounded-[18px] shadow-[0_8px_32px_rgba(110,124,94,0.1)] [transform-style:preserve-3d] motion-safe:transition-transform motion-safe:duration-[650ms] motion-safe:ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none data-[flipped=true]:[transform:rotateY(180deg)] data-[favorite=true]:data-[flipped=false]:shadow-[0_10px_36px_rgba(110,124,94,0.16),0_0_0_2px_#a8bd9d]"
            data-flipped={flipped || undefined}
            data-favorite={favorite || undefined}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[18px] border border-white/85 bg-gradient-to-br from-white/95 to-wedding-blush/85 px-5 py-[1.35rem] backface-hidden">
              <span className="mb-1.5 text-[1.75rem] opacity-[0.88]" aria-hidden>
                {gift.icon}
              </span>
              <h3 className="font-display mb-2 text-center text-[1.35rem] font-semibold text-wedding-text">
                {gift.name}
              </h3>
              <p className="m-0 text-[1.15rem] font-medium tracking-wide text-wedding-rose">
                {gift.price}
              </p>
              <p className="mb-0 mt-[0.85rem] text-[0.78rem] uppercase tracking-[0.08em] text-wedding-muted">
                Ver datos de pago
              </p>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[18px] border border-white/85 bg-gradient-to-br from-[#f7f8ef]/98 to-wedding-gold-light/40 px-5 py-[1.35rem] backface-hidden [transform:rotateY(180deg)]">
              <p className="mb-2 mt-0 text-[0.72rem] uppercase tracking-[0.12em] text-wedding-muted">
                Alias para transferir
              </p>
              <p className="font-display mb-1.5 break-all text-center text-2xl font-semibold text-wedding-text">
                {transferAlias}
              </p>
              <p className="m-0 max-w-[22ch] text-center text-[0.85rem] text-wedding-muted">
                Incluye el concepto: &ldquo;{gift.name}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
