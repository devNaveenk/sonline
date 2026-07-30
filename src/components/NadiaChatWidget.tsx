"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";

interface ChatMessage {
  id: number;
  from: "nadia" | "user";
  text: string;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 0,
  from: "nadia",
  text: "Hi, I'm Nadia. Ask me anything about Sonline's services, solutions, or how to get started.",
};

const FALLBACK_REPLY =
  "Thanks for reaching out — one of our advisors will follow up shortly. For anything urgent, email support@sonline.us.";

export default function NadiaChatWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, isTyping]);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { id: prev.length, from: "user", text }]);
    setDraft("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: prev.length, from: "nadia", text: FALLBACK_REPLY },
      ]);
      setIsTyping(false);
    }, 900);
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {isOpen && (
        <div className="mb-4 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-ink px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-primary/40">
                <Image src="/Nadia.png" alt="Nadia" fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Nadia</p>
                <p className="flex items-center gap-1.5 text-xs text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  Online
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto bg-muted-bg px-4 py-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.from === "user"
                      ? "bg-primary text-on-primary"
                      : "border border-border bg-white text-ink"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
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
              placeholder="Type your message…"
              aria-label="Message Nadia"
              className="h-10 flex-1 rounded-lg border border-border bg-muted-bg px-3 text-sm text-ink outline-none focus:border-ink"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary transition-colors hover:bg-primary-dark cursor-pointer disabled:opacity-50"
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
          className="relative h-[48.4px] w-[48.4px] shrink-0 rounded-full shadow-xl ring-2 ring-primary transition-transform hover:scale-105 cursor-pointer"
        >
          <span className="relative block h-full w-full overflow-hidden rounded-full">
            <Image src="/Nadia.png" alt="Nadia" fill className="object-cover" />
          </span>
          <span className="absolute bottom-0 right-0 h-[13.2px] w-[13.2px] rounded-full border-2 border-white bg-emerald-400" />
        </button>
      </div>
    </div>
  );
}
