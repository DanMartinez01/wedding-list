const COLUMNS = [1, 8, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 97];
const ROWS = [0, 18, 36, 54, 72];

const HEARTS = ROWS.flatMap((row, rowIndex) =>
  COLUMNS.map((column, columnIndex) => {
    const index = rowIndex * COLUMNS.length + columnIndex;
    const drift = (index % 2 === 0 ? 1 : -1) * (10 + (index % 4) * 6);

    return {
      left: `${column}%`,
      top: `${-8 - row}%`,
      delay: `${(columnIndex % 4) * 0.18 + rowIndex * 0.08}s`,
      duration: `${6.2 + (index % 5) * 0.28}s`,
      size: 10 + (index % 4) * 2,
      drift: `${drift}px`,
      tilt: (index % 7) * 5 - 15,
      opacity: 0.36 + (index % 5) * 0.03,
    };
  }),
);

const Heart = ({ tilt }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-full w-full"
      style={{ transform: `rotate(${tilt}deg)` }}
      aria-hidden
    >
      <path
        d="M16 27.5C16 27.5 4 18.8 4 11.6 4 8.2 6.6 5.6 10 5.6c2 0 3.6 1 4.6 2.4 1-1.4 2.6-2.4 4.6-2.4 3.4 0 6 2.6 6 6 0 7.2-12 15.9-12 15.9z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FloatingPetals = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden>
      {HEARTS.map((heart) => (
        <span
          key={`${heart.left}-${heart.top}`}
          className="petal text-[#6e7c5e]"
          style={{
            left: heart.left,
            top: heart.top,
            width: heart.size,
            height: heart.size,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            "--drift": heart.drift,
            "--petal-opacity": String(heart.opacity),
          }}
        >
          <Heart tilt={heart.tilt} />
        </span>
      ))}
    </div>
  );
};
