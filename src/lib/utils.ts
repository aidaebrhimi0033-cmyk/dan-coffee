import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a Toman price with Persian digits and thousands separators. */
export function formatToman(amount: number): string {
  const formatted = new Intl.NumberFormat("fa-IR").format(amount);
  return `${formatted} تومان`;
}
