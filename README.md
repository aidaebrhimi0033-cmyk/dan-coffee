# کافه دان — لندینگ‌پیج لوکس (DAN Coffee)

لندینگ‌پیج فارسی و راست‌به‌چپ (RTL) برای کافه لوکس ایرانی «دان»، ساخته‌شده با Next.js 15، React 19، TypeScript و Tailwind CSS v4.

## راه‌اندازی

```bash
npm install
npm run dev
```

سپس آدرس `http://localhost:3000` را در مرورگر باز کنید.

## ساخت نسخه نهایی

```bash
npm run build
npm run start
```

## پشته فناوری

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (پیکربندی مبتنی بر CSS با `@theme`)
- **Framer Motion** برای ریول‌های اسکرول، پارالاکس و پیشخوان تصاویر
- **GSAP** برای ورود متحرک تیتر هیرو
- **Radix UI** (Tabs / Dialog / Select / Label) به‌عنوان پایه کامپوننت‌های shadcn/ui
- **lucide-react** برای آیکون‌ها
- **next/image** و **next/font** برای بهینه‌سازی تصویر و فونت (Vazirmatn + Noto Naskh Arabic)

## ساختار پوشه‌ها

```
src/
  app/                 مسیرها، layout، متادیتا، sitemap و robots
  components/
    layout/            هدر و فوتر
    sections/          هیرو، درباره ما، منو، گالری، نظرات، رزرو، تماس
    ui/                کامپوننت‌های پایه (Button, Tabs, Input, Select, Label)
    shared/             Container, SectionHeading, Logo, Ornament
  lib/
    data/              دادهٔ منو، گالری و نظرات
    utils.ts           ابزارهای کمکی (cn, formatToman)
  hooks/               هوک‌های سفارشی (useScrolled)
  types/               تایپ‌های TypeScript مشترک
```

## نکات

- تصاویر گالری و هیرو از Unsplash بارگذاری می‌شوند؛ پیش از انتشار نهایی پیشنهاد می‌شود با عکاسی اختصاصی کافه جایگزین شوند.
- فرم رزرو در حال حاضر به‌صورت نمایشی است و پس از اتصال به بک‌اند یا سرویس ایمیل/پیامک، باید تابع `handleSubmit` در `src/components/sections/Reservation.tsx` به یک فراخوانی API واقعی متصل شود.
- نقشهٔ گوگل به‌صورت embed عمومی قرار داده شده؛ برای دقت بیشتر مختصات را در `src/components/sections/Contact.tsx` به‌روزرسانی کنید.
