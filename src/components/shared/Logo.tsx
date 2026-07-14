import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <span
      className={cn(
        "font-display select-none text-3xl font-black tracking-[0.08em] md:text-4xl",
        isLight ? "text-cream" : "text-maroon",
        className
      )}
    >
      دان
      <span
        className={cn(
          "mr-1 inline-block h-1.5 w-1.5 rounded-full align-middle",
          isLight ? "bg-gold-light" : "bg-gold"
        )}
        aria-hidden="true"
      />
    </span>
  );
}
