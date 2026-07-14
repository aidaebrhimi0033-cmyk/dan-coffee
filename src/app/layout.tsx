import type { Metadata, Viewport } from "next";
import { Vazirmatn, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-naskh",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://dancoffee.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "دان | کافه لوکس ایرانی از سال ۱۳۲۰",
    template: "%s | کافه دان",
  },
  description:
    "کافه دان، میزبان عاشقان قهوه از اول شهریور ۱۳۲۰. تجربه‌ای اصیل و لوکس از طعم، آرامش و میراث قهوه ایرانی در قلب شهر.",
  keywords: [
    "کافه دان",
    "کافه لوکس تهران",
    "بهترین قهوه تهران",
    "کافه اصیل ایرانی",
    "رزرو میز کافه",
    "دان کافی شاپ",
  ],
  authors: [{ name: "کافه دان" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "کافه دان",
    title: "دان | کافه لوکس ایرانی از سال ۱۳۲۰",
    description:
      "هر فنجان، یک تجربه ماندگار. از اول شهریور ۱۳۲۰، دان میزبان عاشقان قهوه، آرامش و طعم‌های اصیل بوده است.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "فنجان قهوه دان",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "دان | کافه لوکس ایرانی از سال ۱۳۲۰",
    description:
      "هر فنجان، یک تجربه ماندگار. تجربه‌ای اصیل و لوکس از طعم و آرامش در کافه دان.",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#6b0f1a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "کافه دان",
  alternateName: "DAN",
  description:
    "کافه لوکس ایرانی با ریشه در سال ۱۳۲۰، میزبان عاشقان قهوه و طعم‌های اصیل.",
  foundingDate: "1941",
  servesCuisine: ["Coffee", "Iranian", "Cafe"],
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "خیابان ولیعصر، بالاتر از میدان ونک",
    addressLocality: "تهران",
    addressCountry: "IR",
  },
  telephone: "+98-21-88776655",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "09:00",
      closes: "23:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "10:00",
      closes: "23:30",
    },
  ],
  sameAs: ["https://instagram.com/dan.coffee", "https://t.me/dancoffee"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${notoNaskh.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          رفتن به محتوای اصلی
        </a>
        {children}
      </body>
    </html>
  );
}
