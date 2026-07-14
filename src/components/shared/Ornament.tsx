import { cn } from "@/lib/utils";

/**
 * DAN's signature mark: a toranj-inspired rosette drawn from the same
 * eight-point star geometry used in Qajar/Pahlavi-era tazhib illumination.
 * Reused across the hero, dividers and the reservation seal so the brand
 * has one motif people will actually remember.
 */
export function Ornament({
  className,
  spin = false,
}: {
  className?: string;
  spin?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn(spin && "animate-spin-slow", className)}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="100" cy="100" r="92" strokeOpacity="0.55" />
        <circle cx="100" cy="100" r="78" strokeOpacity="0.35" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <path
              key={i}
              d="M100 22 C 112 45, 112 55, 100 72 C 88 55, 88 45, 100 22 Z"
              transform={`rotate(${angle} 100 100)`}
              strokeOpacity="0.85"
            />
          );
        })}
        <circle cx="100" cy="100" r="30" strokeOpacity="0.7" />
        <circle cx="100" cy="100" r="4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
