import type { IconCardItem } from "@/lib/types";

interface IconCardGridProps {
  items: IconCardItem[];
  variant?: "border" | "shadow";
  columns?: 3 | 4;
}

const cardStyles: Record<NonNullable<IconCardGridProps["variant"]>, string> = {
  border:
    "rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-lg",
  shadow: "rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-lg",
};

const iconWrapStyles: Record<NonNullable<IconCardGridProps["variant"]>, string> = {
  border: "bg-primary/10",
  shadow: "bg-ink/5",
};

const iconStyles: Record<NonNullable<IconCardGridProps["variant"]>, string> = {
  border: "text-primary",
  shadow: "text-ink",
};

export function IconCardGrid({
  items,
  variant = "border",
  columns = 4,
}: IconCardGridProps) {
  const colClass = columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  return (
    <div className={`mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 ${colClass}`}>
      {items.map((item) => (
        <div key={item.title} className={cardStyles[variant]}>
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconWrapStyles[variant]}`}
          >
            <item.icon
              className={`h-5 w-5 ${iconStyles[variant]}`}
              aria-hidden="true"
            />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
