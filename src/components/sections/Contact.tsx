import { Phone, Instagram, Send, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const contactDetails = [
  {
    icon: Phone,
    label: "تماس تلفنی",
    value: "۰۲۱-۸۸۷۷۶۶۵۵",
    href: "tel:+982188776655",
  },
  {
    icon: Instagram,
    label: "اینستاگرام",
    value: "dan.coffee@",
    href: "https://instagram.com/dan.coffee",
  },
  {
    icon: Send,
    label: "تلگرام",
    value: "dancoffee@",
    href: "https://t.me/dancoffee",
  },
  {
    icon: MapPin,
    label: "آدرس",
    value: "تهران، خیابان ولیعصر، بالاتر از میدان ونک",
    href: undefined,
  },
  {
    icon: Clock,
    label: "ساعات کاری",
    value: "همه‌روزه ۹:۰۰ تا ۲۳:۳۰",
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-cream py-28 md:py-36">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="ارتباط با ما"
          title="دان همیشه در دسترس شماست"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="grid gap-4 sm:grid-cols-2">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex h-full items-start gap-4 rounded-md border border-ink/[0.06] bg-white/70 p-5 transition-colors hover:border-gold/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-ink/45">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-6 text-ink">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-soft lg:aspect-auto">
            <iframe
              title="موقعیت کافه دان روی نقشه گوگل"
              src="https://www.google.com/maps?q=Tehran,Valiasr%20St&output=embed"
              className="h-full w-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
