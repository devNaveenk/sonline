import { services, work, companyInfo, payrollSystems } from "./content";
import { teamMembers, solutionDetails, createFramework } from "./detailPagesContent";

const founder = teamMembers.find((m) => m.bio.toLowerCase().includes("founding member"));
const cto = teamMembers.find((m) => m.role === "Chief Technology Officer");

export interface BotAction {
  label: string;
  href: string;
}

export interface BotReply {
  text: string;
  action?: BotAction;
}

interface BotIntent {
  keywords: string[];
  reply: BotReply;
}

const intents: BotIntent[] = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    reply: {
      text: "Hi there! I'm Nadia. Ask me about Sonline's services, solutions, or how to get in touch.",
    },
  },
  {
    keywords: ["what is sonline", "what's sonline", "who are you", "about sonline", "company", "founded", "history"],
    reply: { text: companyInfo.aboutParagraph },
  },
  {
    keywords: ["contribut", "real world", "impact", "difference", "mission"],
    reply: {
      text: "Sonline has transformed 50+ organizations across education, government, and corporate sectors on 4 continents — from digitizing election operations for county governments to building AI-matched mentoring for a UN-affiliated nonprofit. We focus on measurable, lasting outcomes, not just projects.",
      action: { label: "See Our Work", href: "/#work" },
    },
  },
  {
    keywords: ["service", "services", "what do you do", "offer"],
    reply: {
      text: `Sonline offers: ${services.map((s) => s.title).join(", ")}. Which one would you like to know more about?`,
      action: { label: "View All Services", href: "/services" },
    },
  },
  {
    keywords: ["solution", "solutions", "platform", "platforms"],
    reply: {
      text: `Our flagship platforms: ${solutionDetails.map((s) => s.title).join(", ")}. Ask me about any one of them, or check out the full breakdown.`,
      action: { label: "Explore Solutions", href: "/solutions" },
    },
  },
  {
    keywords: ["edukadu"],
    reply: {
      text: solutionDetails.find((s) => s.title === "Edukadu")?.body ?? "",
      action: { label: "Explore Solutions", href: "/solutions" },
    },
  },
  {
    keywords: ["ballotda", "ballot", "election"],
    reply: {
      text: solutionDetails.find((s) => s.title === "BallotDA")?.body ?? "",
      action: { label: "Explore Solutions", href: "/solutions" },
    },
  },
  {
    keywords: ["lga search", "lga"],
    reply: {
      text: solutionDetails.find((s) => s.title === "LGA Search")?.body ?? "",
      action: { label: "Explore Solutions", href: "/solutions" },
    },
  },
  {
    keywords: ["oms flow", "oms", "order management"],
    reply: {
      text: solutionDetails.find((s) => s.title === "OMS Flow")?.body ?? "",
      action: { label: "Explore Solutions", href: "/solutions" },
    },
  },
  {
    keywords: ["create framework", "create methodology"],
    reply: {
      text: `Our CREATE framework guides transformation in six steps: ${createFramework.map((s) => s.title).join(", ")}. It helps evaluate current systems, cut redundancies, and chart a path that fits your long-term goals.`,
      action: { label: "See the CREATE Framework", href: "/solutions" },
    },
  },
  {
    keywords: ["payroll", "sap", "oracle", "adp", "quickbooks"],
    reply: {
      text: `We've integrated BallotDA's payroll data with systems including ${payrollSystems.join(", ")} — automating the handoff from onboarding to final payment.`,
      action: { label: "See This Project", href: "/#featured-project" },
    },
  },
  {
    keywords: ["price", "pricing", "cost", "quote"],
    reply: {
      text: "Pricing depends on the scope of your project. Head to our Contact page and someone from our team will follow up with a custom quote.",
      action: { label: "Contact Us", href: "/contact" },
    },
  },
  {
    keywords: ["contact", "email", "phone", "call", "reach", "get in touch"],
    reply: {
      text: `You can reach us at ${companyInfo.email} or ${companyInfo.phone}. We're based at ${companyInfo.hq}.`,
      action: { label: "Contact Us", href: "/contact" },
    },
  },
  {
    keywords: ["location", "address", "where are you", "headquarters", "hq"],
    reply: { text: `Our headquarters: ${companyInfo.hq}.` },
  },
  {
    keywords: ["founder", "who started", "who created", "ceo", "who runs"],
    reply: {
      text: founder
        ? `Sonline was founded in 2015. ${founder.name} (${founder.role}) is one of our founding members, bringing 30+ years of industry experience and C-level advisory on IT strategy and execution.${cto ? ` ${cto.name} serves as our ${cto.role}, leading our Digital Transformation business.` : ""}`
        : companyInfo.aboutParagraph,
      action: { label: "Meet the Team", href: "/culture" },
    },
  },
  {
    keywords: ["team", "who works", "employees", "staff", "leadership"],
    reply: {
      text: `Our team includes ${teamMembers
        .slice(0, 4)
        .map((m) => `${m.name} (${m.role})`)
        .join(", ")}, and more.`,
      action: { label: "Meet the Team", href: "/culture" },
    },
  },
  {
    keywords: ["culture", "values"],
    reply: {
      text: "We're built on six values: Endurance, Courage, Persistence, Diligence, Tranquility, and Empathy — every engagement is guided by them.",
      action: { label: "See Our Culture", href: "/culture" },
    },
  },
  {
    keywords: ["blog", "article", "insight"],
    reply: {
      text: "We publish articles on digital transformation, AI, GovTech, and leadership, plus personal insights from our team.",
      action: { label: "Read Our Blog", href: "/blog" },
    },
  },
  {
    keywords: ["work", "case study", "case studies", "project", "portfolio"],
    reply: {
      text: `A few things we've built: ${work
        .slice(0, 3)
        .map((w) => w.title)
        .join("; ")}.`,
      action: { label: "See Our Work", href: "/#work" },
    },
  },
  {
    keywords: ["thank", "thanks"],
    reply: { text: "You're welcome! Anything else I can help with?" },
  },
];

function matchesKeyword(lower: string, keyword: string): boolean {
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\b${escaped}\\b`, "i").test(lower);
}

/**
 * Fast, deterministic keyword match — runs instantly with no network call.
 * Word-boundary matching avoids false positives like "framework" matching "work".
 * Only when this returns null do we fall back to the slower AI layer.
 */
export function matchBotIntent(message: string): BotReply | null {
  const lower = message.toLowerCase();
  for (const intent of intents) {
    if (intent.keywords.some((keyword) => matchesKeyword(lower, keyword))) {
      return intent.reply;
    }
  }
  return null;
}
