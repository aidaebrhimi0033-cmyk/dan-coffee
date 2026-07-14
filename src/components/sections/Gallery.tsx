"use client";

import { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { galleryImages } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  const showPrev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
    );

  const active = activeIndex !== null ? galleryImages[activeIndex] : null;

  return (
    <section id="gallery" className="bg-cream py-28 md:py-36">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="گالری دان"
          title="لحظه‌هایی از دل کافه"
          align="center"
          description="نگاهی به فضا، طعم‌ها و جزئیاتی که تجربه دان را می‌سازند."
          className="mx-auto"
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
              className={cn(
                "group relative overflow-hidden rounded-md focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2",
                image.span === "tall" && "row-span-2",
                image.span === "wide" && "col-span-2"
              )}
              aria-label={`بزرگ‌نمایی تصویر: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[var(--ease-lux)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog.Root open={active !== null} onOpenChange={(open) => !open && close()}>
        <AnimatePresence>
          {active && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount aria-label={active.alt}>
                <motion.div
                  className="fixed inset-0 z-[70] flex items-center justify-center p-6"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Dialog.Title className="sr-only">{active.alt}</Dialog.Title>
                  <div className="relative aspect-[4/3] w-full max-w-4xl">
                    <Image
                      src={active.src}
                      alt={active.alt}
                      fill
                      sizes="90vw"
                      className="rounded-md object-contain"
                    />
                  </div>

                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="absolute left-6 top-6 text-cream/80 hover:text-gold-light"
                      aria-label="بستن گالری"
                    >
                      <X className="h-8 w-8" aria-hidden="true" />
                    </button>
                  </Dialog.Close>

                  <button
                    type="button"
                    onClick={showPrev}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/20 md:right-8"
                    aria-label="تصویر قبلی"
                  >
                    <ChevronRight className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/20 md:left-8"
                    aria-label="تصویر بعدی"
                  >
                    <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                  </button>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}
