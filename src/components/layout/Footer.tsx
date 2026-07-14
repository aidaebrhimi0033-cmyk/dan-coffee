import { Instagram, Send, Phone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/shared/Container";

const navItems = [
  { href: "#home", label: "خانه" },
  { href: "#about", label: "درباره ما" },
  { href: "#menu", label: "منو" },
  { href: "#gallery", label: "گالری" },
  { href: "#reservation", label: "رزرو" },
  { href: "#contact", label: "تماس" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com/dan.coffee", label: "اینستاگرام دان" },
  { icon: Send, href: "https://t.me/dancoffee", label: "تلگرام دان" },
  { icon: Phone, href: "tel:+982188776655", label: "تماس با دان" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.06] bg-ink py-14">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Logo tone="light" />

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3" aria-label="ناوبری فوتر">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-cream/60 transition-colors hover:text-gold-light"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold/50 hover:text-gold-light"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <div className="dan-divider w-full max-w-xs" />

        <p className="text-xs leading-6 text-cream/40">
          تمامی حقوق این وب‌سایت متعلق به کافه دان است. © {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}
