"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "خانه" },
  { href: "#about", label: "درباره ما" },
  { href: "#menu", label: "منو" },
  { href: "#gallery", label: "گالری" },
  { href: "#reservation", label: "رزرو" },
  { href: "#contact", label: "تماس" },
];

export function Header() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-lux)]",
        scrolled
          ? "border-b border-cream/10 bg-ink/70 py-3 backdrop-blur-xl shadow-soft-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#home" aria-label="دان — بازگشت به خانه">
          <Logo tone="light" />
        </a>

        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="ناوبری اصلی"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-cream/85 transition-colors hover:text-gold-light"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="gold" size="sm">
            <a href="#reservation">رزرو میز</a>
          </Button>
        </div>

        <button
          type="button"
          className="text-cream md:hidden"
          onClick={() => setOpen(true)}
          aria-label="باز کردن منو"
          aria-expanded={open}
        >
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Logo tone="light" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="بستن منو"
                className="text-cream"
              >
                <X className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>
            <nav
              className="flex flex-col items-center gap-8 pt-16"
              aria-label="ناوبری موبایل"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-bold text-cream"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: "easeOut" }}
                >
                  {item.label}
                </motion.a>
              ))}
              <Button asChild variant="gold" className="mt-4">
                <a href="#reservation" onClick={() => setOpen(false)}>
                  رزرو میز
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
