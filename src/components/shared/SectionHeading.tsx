import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCenter && "items-center text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 text-sm font-medium tracking-[0.2em]",
          isLight ? "text-gold-light" : "text-gold"
        )}
      >
        <span className="h-px w-8 bg-current" aria-hidden="true" />
        {eyebrow}
        {!isCenter && <span className="h-px w-8 bg-current" aria-hidden="true" />}
      </div>
      <h2
        className={cn(
          "font-display text-4xl font-bold leading-tight dan-text-balance md:text-5xl lg:text-6xl",
          isLight ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-8 md:text-lg",
            isLight ? "text-cream/75" : "text-ink/65"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
