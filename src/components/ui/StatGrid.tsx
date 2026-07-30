import type { StatItem } from "@/lib/types";

interface StatGridProps {
  stats: StatItem[];
  tone?: "light" | "dark";
  size?: "sm" | "lg";
}

export function StatGrid({ stats, tone = "dark", size = "lg" }: StatGridProps) {
  const valueClass = size === "lg" ? "text-4xl" : "text-3xl";
  const labelClass = tone === "dark" ? "text-white/60" : "text-muted-foreground";
  const borderClass = tone === "dark" ? "border-white/15" : "border-border";

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className={`border-t ${borderClass} pt-6`}>
          <p className={`${valueClass} font-extrabold ${tone === "dark" ? "text-white" : "text-ink"}`}>
            {stat.value}
          </p>
          <p className={`mt-2 text-sm ${labelClass}`}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
