import { GIFTS } from "../data/gifts";
import { GiftCard } from "./GiftCard";

export const GiftSection = () => {
  return (
    <main className="relative z-10 mx-auto max-w-[1100px] px-5 pb-14">
      <h2 className="font-display mb-1.5 text-center text-3xl font-semibold text-wedding-text md:text-[2rem]">
        Regalos simbólicos
      </h2>
      <p className="mb-8 text-center text-[0.95rem] text-wedding-muted">
        Toca una tarjeta para ver el alias de transferencia.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 [perspective:1200px]">
        {GIFTS.map((gift) => (
          <GiftCard key={gift.id} gift={gift} />
        ))}
      </div>
    </main>
  );
}
