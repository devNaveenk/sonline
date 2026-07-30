import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-on-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-6 py-2.5 text-center sm:flex-row sm:justify-between">
        <p className="text-sm font-medium">
          Experience, Integrate, Visualize, Act.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold transition-colors hover:bg-white/25"
        >
          Talk to Us
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
