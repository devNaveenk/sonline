import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface IconCardItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SolutionItem {
  title: string;
  body: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface WorkItem {
  title: string;
  body: string;
  systems?: string[];
}
