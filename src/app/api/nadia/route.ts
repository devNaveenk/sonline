import { NextResponse } from "next/server";
import { work, whyChooseUs, payrollSystems, companyInfo } from "@/lib/content";
import {
  teamMembers,
  cultureValues,
  blogPosts,
  insightPosts,
  serviceDetails,
  solutionDetails,
} from "@/lib/detailPagesContent";

const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";

const SYSTEM_PROMPT = `You are Nadia, the AI assistant embedded on Sonline's website (sonline.us). Sonline is a technology consulting firm founded in 2015, headquartered at ${companyInfo.hq}.

Only answer using the facts below. If something is outside this scope (pricing specifics, unrelated topics), say you don't have that detail and point the visitor to ${companyInfo.email} or the Contact page. Keep answers short — 2-4 sentences. When relevant, mention which page has more detail (e.g. "see our Services page at /services").

SERVICES: ${serviceDetails.map((s) => `${s.title} — ${s.body}`).join(" | ")}

FLAGSHIP PLATFORMS: ${solutionDetails.map((s) => `${s.title}${s.url ? ` (${s.url})` : ""} — ${s.body}`).join(" | ")}

WHY CHOOSE SONLINE: ${whyChooseUs.map((w) => `${w.title} — ${w.body}`).join(" | ")}

FEATURED PROJECT: Connected BallotDA's poll worker payroll data to systems including ${payrollSystems.join(", ")}.

PAST WORK: ${work.map((w) => w.title).join(" | ")}

CULTURE & VALUES: ${cultureValues.map((v) => `${v.title} — ${v.body}`).join(" | ")}

LEADERSHIP TEAM: ${teamMembers.map((m) => `${m.name} — ${m.role}: ${m.bio}`).join(" | ")}

BLOG ARTICLES (at /blog): ${blogPosts.map((p) => `"${p.title}" — ${p.excerpt}`).join(" | ")}

INSIGHTS ARTICLES (at /insights): ${insightPosts.map((p) => `"${p.title}" — ${p.excerpt}`).join(" | ")}

CONTACT: ${companyInfo.email}, ${companyInfo.phone}, ${companyInfo.hq}. Contact page: /contact.`;

export async function POST(request: Request) {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        reply:
          "I don't have a live AI connection configured yet — please email us at " +
          companyInfo.email +
          " and our team will follow up directly.",
      },
      { status: 200 },
    );
  }

  const { message, history } = (await request.json()) as {
    message: string;
    history?: { role: "user" | "assistant"; content: string }[];
  };

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Missing message" }, { status: 400 });
  }

  const deepseekRes = await fetch(DEEPSEEK_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      max_tokens: 300,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...(history ?? []),
        { role: "user", content: message },
      ],
    }),
  });

  if (!deepseekRes.ok) {
    return NextResponse.json(
      { reply: "Sorry, I couldn't reach my AI brain just now — please try again shortly." },
      { status: 200 },
    );
  }

  const data = await deepseekRes.json();
  const reply = data.choices?.[0]?.message?.content;

  return NextResponse.json({
    reply: reply ?? "Sorry, I couldn't generate a response just now.",
  });
}
