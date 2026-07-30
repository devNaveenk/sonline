import { services, solutions, work, companyInfo, payrollSystems } from "./content";
import { teamMembers } from "./detailPagesContent";

const founder = teamMembers.find((m) => m.bio.toLowerCase().includes("founding member"));
const cto = teamMembers.find((m) => m.role === "Chief Technology Officer");

interface BotIntent {
  keywords: string[];
  reply: string;
}

const intents: BotIntent[] = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
    reply: "Hi there! I'm Nadia. Ask me about Sonline's services, solutions, or how to get in touch.",
  },
  {
    keywords: ["service", "services", "what do you do", "offer"],
    reply: `Sonline offers: ${services.map((s) => s.title).join(", ")}. Which one would you like to know more about?`,
  },
  {
    keywords: ["edukadu"],
    reply: `Edukadu is our AI/ML-driven e-learning platform for teaching, tracking, and engaging learners. Learn more at ${solutions.find((s) => s.title === "Edukadu")?.url}.`,
  },
  {
    keywords: ["ballotda", "ballot", "election"],
    reply: `BallotDA is our election management platform for poll worker onboarding, training, scheduling, and payroll handoff. Learn more at ${solutions.find((s) => s.title === "BallotDA")?.url}.`,
  },
  {
    keywords: ["payroll", "sap", "oracle", "adp", "quickbooks"],
    reply: `We've integrated BallotDA's payroll data with systems including ${payrollSystems.join(", ")} — automating the handoff from onboarding to final payment.`,
  },
  {
    keywords: ["price", "pricing", "cost", "quote"],
    reply: "Pricing depends on the scope of your project. Head to our Contact page and someone from our team will follow up with a custom quote.",
  },
  {
    keywords: ["contact", "email", "phone", "call", "reach"],
    reply: `You can reach us at ${companyInfo.email} or ${companyInfo.phone}. We're based at ${companyInfo.hq}.`,
  },
  {
    keywords: ["location", "address", "where are you", "headquarters", "hq"],
    reply: `Our headquarters: ${companyInfo.hq}.`,
  },
  {
    keywords: ["founder", "who started", "who created", "ceo", "leadership", "who runs"],
    reply: founder
      ? `Sonline was founded in 2015. ${founder.name} (${founder.role}) is one of our founding members, bringing 30+ years of industry experience and C-level advisory on IT strategy and execution.${cto ? ` ${cto.name} serves as our ${cto.role}, leading our Digital Transformation business.` : ""}`
      : companyInfo.aboutParagraph,
  },
  {
    keywords: ["team", "who works", "employees", "staff"],
    reply: `Our team includes ${teamMembers
      .slice(0, 4)
      .map((m) => `${m.name} (${m.role})`)
      .join(", ")}, and more. Visit the Culture page to meet everyone.`,
  },
  {
    keywords: ["about", "who are you", "company", "founded", "history"],
    reply: companyInfo.aboutParagraph,
  },
  {
    keywords: ["work", "case study", "case studies", "project", "portfolio"],
    reply: `A few things we've built: ${work
      .slice(0, 3)
      .map((w) => w.title)
      .join("; ")}. Check the "Our Work" section for the full list.`,
  },
  {
    keywords: ["thank", "thanks"],
    reply: "You're welcome! Anything else I can help with?",
  },
];

/**
 * Fast, deterministic keyword match — runs instantly with no network call.
 * Only when this returns null do we fall back to the slower AI layer.
 */
export function matchBotIntent(message: string): string | null {
  const lower = message.toLowerCase();
  for (const intent of intents) {
    if (intent.keywords.some((keyword) => lower.includes(keyword))) {
      return intent.reply;
    }
  }
  return null;
}
