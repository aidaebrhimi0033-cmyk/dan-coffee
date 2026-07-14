import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
}

export function Container({ children, className, as = "div" }: ContainerProps) {
  const Tag = as;
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}>
      {children}
    </Tag>
  );
}
