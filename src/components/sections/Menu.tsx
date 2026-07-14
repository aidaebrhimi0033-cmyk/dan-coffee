"use client";

import { Coffee, Leaf, CakeSlice, Utensils, CupSoda } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MenuItemCard } from "@/components/sections/MenuItemCard";
import { menuCategories } from "@/lib/data/menu";

const icons = {
  coffee: Coffee,
  leaf: Leaf,
  "cake-slice": CakeSlice,
  utensils: Utensils,
  "cup-soda": CupSoda,
};

export function Menu() {
  return (
    <section id="menu" className="relative bg-beige/40 py-28 md:py-36">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="منوی دان"
          title="طعم‌هایی که هر بار انتخاب می‌شوند"
          align="center"
          description="از اسپرسوی امضای دان تا دسرهای خانگی؛ منویی که با دقت و سلیقه برای شما چیده شده است."
          className="mx-auto"
        />

        <Tabs defaultValue={menuCategories[0]?.id} className="mt-14 flex flex-col items-center">
          <TabsList aria-label="دسته‌بندی‌های منو">
            {menuCategories.map((category) => {
              const Icon = icons[category.icon as keyof typeof icons] ?? Coffee;
              return (
                <TabsTrigger key={category.id} value={category.id}>
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {category.label}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="w-full">
              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item, index) => (
                  <MenuItemCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
