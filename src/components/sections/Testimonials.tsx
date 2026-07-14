"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];
  if (!current) return null;

  return (
    <section className="bg-ink py-28 md:py-36" aria-label="نظرات مشتریان">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <SectionHeading
          eyebrow="آنچه مهمانان می‌گویند"
          title="روایت‌هایی از تجربه دان"
          align="center"
          tone="light"
          className="mx-auto"
        />

        <div className="relative mt-14">
          <Quote
            className="mx-auto mb-6 h-10 w-10 text-gold/40"
            aria-hidden="true"
          />

          <div className="relative min-h-[260px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5 flex gap-1" aria-label={`${current.rating} از ۵ ستاره`}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="font-editorial dan-text-balance max-w-2xl text-xl leading-10 text-cream/90 md:text-2xl">
                  {current.quote}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold/30">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-right">
                    <p className="font-display text-sm font-bold text-cream">
                      {current.name}
                    </p>
                    <p className="text-xs text-cream/50">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="rounded-full border border-cream/15 p-3 text-cream/70 transition-colors hover:border-gold/50 hover:text-gold-light"
              aria-label="نظر قبلی"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`نظر ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-cream/25"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="rounded-full border border-cream/15 p-3 text-cream/70 transition-colors hover:border-gold/50 hover:text-gold-light"
              aria-label="نظر بعدی"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
