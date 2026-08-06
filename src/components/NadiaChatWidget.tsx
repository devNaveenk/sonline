"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Send,
  X,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Workflow,
  CheckSquare,
  GraduationCap,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { matchBotIntent, type BotAction } from "@/lib/nadiaBot";
import { hasCookieConsent, COOKIE_CONSENT_EVENT } from "@/lib/cookieConsent";

interface ChatMessage {
  id: number;
  from: "nadia" | "user";
  text: string;
  action?: BotAction;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 0,
  from: "nadia",
  text: "Welcome to Sonline. I'm Nadia, your AI assistant.",
};

const AI_ERROR_REPLY =
  "Sorry, I'm having trouble reaching my AI brain right now — please email support@sonline.us and we'll follow up directly.";

interface Topic {
  icon: LucideIcon;
  label: string;
  question: string;
}

const TOPICS: Topic[] = [
  { icon: Workflow, label: "Our Services", question: "What services do you offer?" },
  { icon: CheckSquare, label: "BallotDA", question: "Tell me about BallotDA" },
  { icon: GraduationCap, label: "Edukadu", question: "Tell me about Edukadu" },
  { icon: Mail, label: "Contact Us", question: "How can I contact you?" },
];

export default function NadiaChatWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stay hidden until the cookie banner is dismissed so the two widgets
    // never fight for the same corner of the screen, especially on mobile.
    let timer: number | undefined;

    function reveal() {
      timer = window.setTimeout(() => setIsVisible(true), 700);
    }

    if (hasCookieConsent()) {
      reveal();
    } else {
      window.addEventListener(COOKIE_CONSENT_EVENT, reveal, { once: true });
    }

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, reveal);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, isTyping]);

  async function sendMessage(text: string) {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { id: prev.length, from: "user", text }]);

    // Bot layer: instant, deterministic, zero network latency.
    const botReply = matchBotIntent(text);
    if (botReply) {
      setMessages((prev) => [
        ...prev,
        { id: prev.length, from: "nadia", text: botReply.text, action: botReply.action },
      ]);
      return;
    }

    // AI layer: only reached when the bot layer has no confident match.
    setIsTyping(true);
    try {
      const res = await fetch("/api/nadia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { id: prev.length, from: "nadia", text: data.reply ?? AI_ERROR_REPLY },
      ]);
    } catch {
      setMessages((prev) => [...prev, { id: prev.length, from: "nadia", text: AI_ERROR_REPLY }]);
    } finally {
      setIsTyping(false);
    }
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    void sendMessage(text);
  }

  function handleTopicTap(question: string) {
    void sendMessage(question);
  }

  function handleReset() {
    setMessages([INITIAL_MESSAGE]);
    setDraft("");
    setIsTyping(false);
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {isOpen && (
        <div className="mb-4 flex h-[30rem] max-h-[calc(100vh-8rem)] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-ink px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-primary/40">
                <Image src="/Nadia.png" alt="Nadia" fill sizes="36px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Nadia</p>
                <p className="flex items-center gap-1.5 text-xs text-white/60">
                  <Sparkles className="h-3 w-3 text-primary" aria-hidden="true" />
                  AI ASSISTANT
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                aria-label="Reset conversation"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto bg-muted-bg px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2 ${
                  message.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.from === "nadia" && (
                  <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
                    <Image src="/Nadia.png" alt="" fill sizes="28px" className="object-cover" />
                  </div>
                )}
                <div className="flex max-w-[78%] flex-col gap-2">
                  <p
                    className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      message.from === "user"
                        ? "bg-primary text-on-primary"
                        : "border border-border bg-white text-ink"
                    }`}
                  >
                    {message.text}
                  </p>
                  {message.action && (
                    <Link
                      href={message.action.href}
                      className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-on-primary transition-colors hover:bg-primary-dark cursor-pointer"
                    >
                      {message.action.label}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div>
                <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground">
                  TOPICS
                </p>
                <div className="space-y-2">
                  {TOPICS.map((topic) => (
                    <button
                      key={topic.label}
                      type="button"
                      onClick={() => handleTopicTap(topic.question)}
                      className="flex w-full items-center gap-3 rounded-xl border border-border bg-white px-3.5 py-3 text-left transition-colors hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <topic.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      </span>
                      <span className="flex-1 text-sm font-medium text-ink">{topic.label}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl border border-border bg-white px-3.5 py-2.5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:0.2s]" />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-border p-3">
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask Nadia anything…"
              aria-label="Message Nadia"
              className="h-11 flex-1 rounded-full border border-border bg-muted-bg px-4 text-sm text-ink outline-none focus:border-ink"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary transition-colors hover:bg-primary-dark cursor-pointer disabled:opacity-50"
              disabled={!draft.trim()}
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close Nadia chat" : "Ask Nadia"}
          className="rounded-full bg-primary px-4 py-2 text-xs font-bold tracking-wide text-on-primary shadow-xl transition-transform hover:scale-105 cursor-pointer"
        >
          {isOpen ? "CLOSE" : "ASK NADIA"}
        </button>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close Nadia chat" : "Ask Nadia"}
          className="relative h-[55.7px] w-[55.7px] shrink-0 rounded-full shadow-xl ring-2 ring-primary transition-transform hover:scale-105 cursor-pointer"
        >
          <span className="relative block h-full w-full overflow-hidden rounded-full">
            <Image src="/Nadia.png" alt="Nadia" fill sizes="56px" className="object-cover" />
          </span>
          <span className="absolute bottom-0 right-0 h-[15.2px] w-[15.2px] rounded-full border-2 border-white bg-emerald-400" />
        </button>
      </div>
    </div>
  );
}
