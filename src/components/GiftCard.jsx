import { useState } from "react";

export const GiftCard = ({ gift, index = 0 }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div
      className="rise-in h-[200px]"
      style={{ animationDelay: `${0.6 + index * 0.07}s` }}
    >
      <div className="relative h-full w-full">
        <button
          type="button"
          aria-label={`Marcar como favorito: ${gift.name}`}
          aria-pressed={favorite}
          onClick={() => setFavorite((v) => !v)}
          className={`absolute right-2.5 top-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-full border text-base leading-none transition-[background,border-color] duration-200 ${
            favorite
              ? "border-wedding-rose bg-wedding-rose text-white"
              : "border-wedding-rose/35 bg-white text-wedding-rose hover:border-wedding-rose"
          } focus-visible:outline focus-visible:outline-2 focus-visible:outline-wedding-gold focus-visible:outline-offset-2`}
        >
          <span className="block translate-y-px" aria-hidden>
            {favorite ? "♥" : "♡"}
          </span>
        </button>

        <a
          href={gift.paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Pagar ${gift.name}, ${gift.price}, con Mercado Pago`}
          className={`flex h-full w-full flex-col items-center rounded-[18px] border border-white/80 bg-gradient-to-b from-[#a8bd9d] via-[#e7eed6] to-white px-5 pb-4 pt-7 text-center shadow-[0_8px_28px_rgba(110,124,94,0.08)] outline-none transition-shadow hover:shadow-[0_10px_32px_rgba(110,124,94,0.14)] focus-visible:shadow-[0_0_0_3px_#ffffff,0_0_0_5px_var(--color-wedding-rose)] ${
            favorite ? "ring-2 ring-[#6e7c5e]" : ""
          }`}
        >
          <span className="mb-1 text-[1.75rem]" aria-hidden>
            {gift.icon}
          </span>
          <h3 className="font-display mb-1 text-center text-[1.35rem] font-semibold text-wedding-text">
            {gift.name}
          </h3>
          <p className="m-0 text-[1.15rem] font-medium tracking-wide text-wedding-rose">
            {gift.price}
          </p>
          <p className="mb-0 mt-auto text-[0.78rem] uppercase tracking-[0.08em] text-wedding-text">
            Ver datos de pago
          </p>
        </a>
      </div>
    </div>
  );
}
