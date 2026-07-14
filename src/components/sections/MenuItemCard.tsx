import { motion } from "framer-motion";
import { formatToman } from "@/lib/utils";
import type { MenuItem } from "@/types";

export function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: "easeOut" }}
      className="group relative flex items-start justify-between gap-4 rounded-md border border-ink/[0.06] bg-white/60 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-soft-sm"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-display truncate text-lg font-bold text-ink">
            {item.name}
          </h3>
          {item.signature && (
            <span className="shrink-0 rounded-full bg-gold/15 px-2.5 py-0.5 text-[11px] font-medium text-maroon">
              امضای دان
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1.5 text-sm leading-6 text-ink/55">
            {item.description}
          </p>
        )}
      </div>

      <div className="flex shrink-0 flex-col items-end gap-2 pt-1">
        <span className="font-display whitespace-nowrap text-base font-bold text-maroon">
          {formatToman(item.price)}
        </span>
      </div>

      <span
        className="pointer-events-none absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </motion.div>
  );
}
