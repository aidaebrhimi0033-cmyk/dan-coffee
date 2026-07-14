"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Ornament } from "@/components/shared/Ornament";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import type { ReservationFormData } from "@/types";

const initialData: ReservationFormData = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
};

const timeSlots = [
  "۱۰:۰۰",
  "۱۲:۰۰",
  "۱۴:۰۰",
  "۱۶:۰۰",
  "۱۸:۰۰",
  "۲۰:۰۰",
  "۲۲:۰۰",
];

const guestCounts = ["۱ نفر", "۲ نفر", "۳ نفر", "۴ نفر", "۵ نفر", "۶ نفر و بیشتر"];

export function Reservation() {
  const [data, setData] = useState<ReservationFormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!data.name || !data.phone || !data.date || !data.time || !data.guests) {
      setError("لطفاً همه فیلدها را تکمیل کنید.");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  return (
    <section id="reservation" className="relative overflow-hidden bg-maroon py-28 md:py-36">
      <Ornament className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 text-cream/[0.06]" spin />
      <Ornament className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 text-cream/[0.06]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="رزرو میز"
          title="میز خود را از هم‌اکنون رزرو کنید"
          tone="light"
          description="کافی است چند دقیقه وقت بگذارید تا میزی آرام و دنج در دان برای شما آماده شود."
        />

        <div className="rounded-lg bg-cream p-7 shadow-soft md:p-10">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <CheckCircle2 className="h-14 w-14 text-maroon" aria-hidden="true" />
                <h3 className="font-display text-2xl font-bold text-ink">
                  رزرو شما ثبت شد
                </h3>
                <p className="max-w-sm text-sm leading-7 text-ink/60">
                  به‌زودی همکاران دان جهت تأیید نهایی با شماره {data.phone} تماس
                  خواهند گرفت.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSubmitted(false);
                    setData(initialData);
                  }}
                >
                  ثبت رزرو جدید
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
                noValidate
              >
                <div>
                  <Label htmlFor="name">نام</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="نام و نام خانوادگی"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">شماره تماس</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">تاریخ</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={data.date}
                      onChange={(e) => setData({ ...data, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">ساعت</Label>
                    <Select
                      value={data.time}
                      onValueChange={(v) => setData({ ...data, time: v })}
                    >
                      <SelectTrigger id="time" aria-label="انتخاب ساعت">
                        <SelectValue placeholder="انتخاب ساعت" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="guests">تعداد نفرات</Label>
                  <Select
                    value={data.guests}
                    onValueChange={(v) => setData({ ...data, guests: v })}
                  >
                    <SelectTrigger id="guests" aria-label="تعداد نفرات">
                      <SelectValue placeholder="انتخاب تعداد نفرات" />
                    </SelectTrigger>
                    <SelectContent>
                      {guestCounts.map((count) => (
                        <SelectItem key={count} value={count}>
                          {count}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {error && (
                  <p role="alert" className="text-sm text-maroon">
                    {error}
                  </p>
                )}

                <Button type="submit" size="lg" className="mt-2 w-full">
                  رزرو
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
