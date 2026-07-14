"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Ornament } from "@/components/shared/Ornament";

const timeline = [
  {
    year: "۱۳۲۰",
    title: "تأسیس دان",
    text: "در اول شهریور ۱۳۲۰، دان درهای خود را در یکی از کوچه‌های قدیمی تهران گشود؛ جایی برای گفت‌وگو، آرامش و فنجانی قهوه اصیل.",
  },
  {
    year: "۱۳۴۵",
    title: "میراث خانوادگی",
    text: "دستور دم‌آوری خانوادگی دان از نسلی به نسل دیگر منتقل شد و طعم امضای دان شکل گرفت.",
  },
  {
    year: "۱۴۰۰",
    title: "بازخوانی معاصر",
    text: "دان با حفظ روح قدیمی خود، فضایی مدرن و لوکس را برای نسل امروز بازآفرینی کرد.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-28 md:py-36">
      <Ornament className="pointer-events-none absolute -left-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 text-maroon/[0.05]" />

      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1200&auto=format&fit=crop"
              alt="فضای وینتیج و گرم کافه دان با میزهای چوبی و نور طبیعی"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 hidden aspect-square w-40 items-center justify-center rounded-md border border-gold/40 bg-ink/90 p-6 text-center shadow-soft backdrop-blur-sm sm:flex">
            <div className="text-cream">
              <p className="font-display text-3xl font-black text-gold-light">۱۳۲۰</p>
              <p className="mt-1 text-xs leading-5 tracking-wide">
                تأسیس
                <br />
                کافه دان
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 flex flex-col gap-10 lg:order-2"
        >
          <SectionHeading
            eyebrow="داستان دان"
            title="روایتی که از یک کوچه قدیمی آغاز شد"
            description="دان از دل خاطره‌های کافه‌های اصیل دهه ۱۳۲۰ بیرون آمده؛ جایی که بوی قهوه با صدای گفت‌وگوهای آرام درمی‌آمیخت. ما همان روح را با استانداردهای امروز زنده نگه داشته‌ایم."
          />

          <div className="font-editorial border-r-2 border-gold/50 pr-6 text-lg italic leading-9 text-ink/70">
            «قهوه در دان فقط نوشیدنی نیست؛ رسمی است که هر روز با احترام
            تکرار می‌شود.»
          </div>

          <ol className="flex flex-col gap-8">
            {timeline.map((item, index) => (
              <li key={item.year} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="font-display flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-maroon/20 bg-white text-sm font-bold text-maroon shadow-soft-sm">
                    {item.year}
                  </span>
                  {index < timeline.length - 1 && (
                    <span className="mt-2 h-full w-px flex-1 bg-maroon/15" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-7 text-ink/60">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
