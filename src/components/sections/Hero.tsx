"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Ornament } from "@/components/shared/Ornament";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (!headlineRef.current) return;
    const words = headlineRef.current.querySelectorAll<HTMLElement>(
      "[data-word]"
    );
    gsap.fromTo(
      words,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.3,
      }
    );
  }, []);

  const headline = "هر فنجان، یک تجربه ماندگار".split(" ");

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden bg-ink"
      aria-label="بخش معرفی"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2000&auto=format&fit=crop"
          alt="فنجان قهوه دان روی میز چوبی در نور گرم عصرگاهی"
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Floating ambient particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {particlePositions.map((p, i) => (
          <span
            key={i}
            className="absolute animate-float rounded-full bg-gold-light/60"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <Ornament
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 text-gold/25 md:h-96 md:w-96"
        spin
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-6 flex items-center gap-3 text-sm font-medium tracking-[0.25em] text-gold-light"
        >
          <span className="h-px w-8 bg-current" />
          از ۱۳۲۰ تاکنون
          <span className="h-px w-8 bg-current" />
        </motion.span>

        <h1
          ref={headlineRef}
          className="font-display max-w-4xl text-4xl font-black leading-[1.25] text-cream dan-text-balance sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline.map((word, i) => (
            <span key={i} className="mx-1.5 inline-block overflow-hidden align-bottom">
              <span data-word className="inline-block">
                {word}
              </span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-7 max-w-xl text-base leading-8 text-cream/80 md:text-lg"
        >
          از اول شهریور ۱۳۲۰، دان میزبان عاشقان قهوه، آرامش و طعم‌های اصیل بوده
          است.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild variant="gold" size="lg">
            <a href="#menu">مشاهده منو</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#reservation">رزرو میز</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="پیمایش به پایین"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70 transition-colors hover:text-gold-light"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8" aria-hidden="true" />
      </motion.a>
    </section>
  );
}

const particlePositions = [
  { top: "20%", left: "12%", size: "6px", delay: "0s", duration: "9s" },
  { top: "65%", left: "22%", size: "4px", delay: "1.2s", duration: "7s" },
  { top: "35%", left: "80%", size: "5px", delay: "0.6s", duration: "8s" },
  { top: "75%", left: "70%", size: "7px", delay: "2s", duration: "10s" },
  { top: "15%", left: "60%", size: "3px", delay: "1.5s", duration: "6s" },
  { top: "50%", left: "45%", size: "4px", delay: "0.3s", duration: "8.5s" },
];
