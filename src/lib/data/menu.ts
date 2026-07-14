import type { MenuCategory } from "@/types";

export const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    label: "قهوه",
    icon: "coffee",
    items: [
      {
        id: "espresso",
        name: "اسپرسو",
        description: "دان ویژه رست تیره، عصاره غلیظ و معطر",
        price: 85000,
        signature: true,
      },
      {
        id: "latte",
        name: "لاته",
        description: "اسپرسو با شیر بخارداده و فوم ابریشمی",
        price: 120000,
      },
      {
        id: "mocha",
        name: "موکا",
        description: "اسپرسو، شکلات تلخ بلژیکی و شیر گرم",
        price: 135000,
      },
      {
        id: "iced-americano",
        name: "آیس آمریکانو",
        description: "اسپرسو دوبل روی یخ با آب سرد",
        price: 110000,
      },
      {
        id: "matcha-latte",
        name: "ماچا لاته",
        description: "ماچای درجه یک ژاپنی با شیر گرم",
        price: 145000,
      },
      {
        id: "spirulina-latte",
        name: "اسپیرولینا لاته",
        description: "طعم گیاهی ملایم با جلوه‌ای فیروزه‌ای",
        price: 150000,
      },
      {
        id: "ube-latte",
        name: "اوبه لاته",
        description: "سیب‌زمینی بنفش، شیرینی ملایم و رنگی خیره‌کننده",
        price: 155000,
        signature: true,
      },
    ],
  },
  {
    id: "tea",
    label: "چای",
    icon: "leaf",
    items: [
      {
        id: "iranian-tea",
        name: "چای ایرانی",
        description: "دم‌کرده در سماور، تازه و پررنگ",
        price: 65000,
      },
      {
        id: "masala-tea",
        name: "چای ماسالا",
        description: "چای شیرین‌شده با ادویه‌های گرم هندی",
        price: 95000,
      },
      {
        id: "green-tea",
        name: "چای سبز",
        description: "برگ سبز اصیل، ملایم و آنتی‌اکسیدان",
        price: 80000,
      },
      {
        id: "herbal-tea",
        name: "دمنوش‌های گیاهی",
        description: "ترکیبی از گیاهان معطر فصلی",
        price: 85000,
      },
    ],
  },
  {
    id: "desserts",
    label: "دسر",
    icon: "cake-slice",
    items: [
      {
        id: "chocolate-cake",
        name: "کیک شکلاتی اسلایسی",
        description: "لایه‌های نرم شکلاتی با گاناش تلخ",
        price: 165000,
      },
      {
        id: "carrot-cake",
        name: "کیک هویج گردو اسلایسی",
        description: "هویج تازه، گردوی برشته و کرم پنیر",
        price: 165000,
      },
      {
        id: "daily-cake",
        name: "کیک روز",
        description: "انتخاب ویژه باریستا، هر روز متفاوت",
        price: 150000,
      },
    ],
  },
  {
    id: "food",
    label: "غذا",
    icon: "utensils",
    items: [
      {
        id: "classic-fries",
        name: "سیب زمینی کلاسیک",
        price: 145000,
      },
      {
        id: "special-fries",
        name: "سیب زمینی ویژه",
        description: "با سس مخصوص دان و پنیر پارمزان",
        price: 175000,
      },
      {
        id: "caesar-salad",
        name: "سالاد سزار",
        price: 195000,
      },
      {
        id: "grilled-salad",
        name: "سالاد گریل",
        price: 210000,
      },
      {
        id: "crispy-salad",
        name: "سالاد سوخاری",
        price: 205000,
      },
      {
        id: "classic-burger",
        name: "برگر کلاسیک",
        price: 245000,
      },
      {
        id: "cheese-burger",
        name: "چیزبرگر",
        price: 265000,
      },
      {
        id: "dan-special-burger",
        name: "برگر مخصوص DAN",
        description: "دستور اختصاصی آشپزخانه دان",
        price: 320000,
        signature: true,
      },
      {
        id: "margherita-pizza",
        name: "پیتزا مارگاریتا",
        price: 275000,
      },
      {
        id: "pepperoni-pizza",
        name: "پیتزا پپرونی",
        price: 310000,
      },
      {
        id: "dan-special-pizza",
        name: "پیتزا مخصوص DAN",
        description: "ترکیب اختصاصی مواد اولیه فصلی",
        price: 345000,
        signature: true,
      },
    ],
  },
  {
    id: "cold",
    label: "نوشیدنی سرد",
    icon: "cup-soda",
    items: [
      {
        id: "mojito",
        name: "موهیتو",
        price: 135000,
      },
      {
        id: "iced-tea",
        name: "آیس تی",
        price: 110000,
      },
      {
        id: "lemonade",
        name: "لیموناد",
        price: 105000,
      },
      {
        id: "smoothie",
        name: "اسموتی",
        description: "میوه‌های فصلی تازه",
        price: 140000,
      },
      {
        id: "milkshake",
        name: "میلک شیک",
        price: 145000,
      },
      {
        id: "cool-drinks",
        name: "نوشیدنی‌های خنک",
        description: "انتخاب متنوع نوشیدنی‌های بدون کافئین",
        price: 95000,
      },
    ],
  },
];
