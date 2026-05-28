import { useState, useRef, useEffect } from "react";
import OpenAI from "openai";
import { profile, skills, experiences, certifications, education } from "../../data/resume";
import styles from "./Chatbot.module.css";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const systemPrompt = `You are an assistant for ${profile.name}'s personal portfolio website. Your role is to answer questions about ${profile.name} in a friendly, professional and concise way. Only answer based on the information provided below. If you don't know something, say so politely.

=== PROFILE ===
Name: ${profile.name}
Title: ${profile.title}
Location: ${profile.location}
Email: ${profile.email}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}
Bio: ${profile.bio}

=== EDUCATION ===
${education.degree} at ${education.school} (${education.year}) — Grade: ${education.grade}
${education.description}

=== WORK EXPERIENCE ===
${experiences.map(e => `• ${e.role} at ${e.company} (${e.period})\n  ${e.description}\n  Tech: ${e.tech.join(", ")}`).join("\n\n")}

=== SKILLS ===
${skills.map(s => `• ${s.category}: ${s.items.join(", ")}`).join("\n")}

=== CERTIFICATIONS ===
${certifications.map(c => `• ${c.title} — ${c.issuer} (${c.year})${c.grade ? ` — Grade: ${c.grade}` : ""}\n  Topics: ${c.topics.join(", ")}`).join("\n\n")}

Always respond in the same language the user uses. Be helpful and concise.`;

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: `Hi! I'm ${profile.name}'s AI assistant. Ask me anything about his background, skills, or experience! 👋` },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.map((m) => ({ role: m.role, content: m.content })),
          { role: "user", content: text },
        ],
        max_tokens: 400,
      });

      const reply = completion.choices[0]?.message?.content ?? "Sorry, I couldn't generate a response.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        className={`${styles.toggleBtn} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
            <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/>
            <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div className={`${styles.panel} ${isOpen ? styles.visible : ""}`} role="dialog" aria-label="Chat with AI">
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <span className={styles.avatar}>🤖</span>
            <div>
              <p className={styles.headerName}>Ask about {profile.name}</p>
              <p className={styles.headerStatus}>AI Assistant · Powered by GPT</p>
            </div>
          </div>
        </div>

        <div className={styles.messages}>
          {messages.map((msg, i) => (
            <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
              <p>{msg.content}</p>
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.message} ${styles.assistant}`}>
              <p className={styles.typing}>
                <span /><span /><span />
              </p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.inputRow}>
          <input
            ref={inputRef}
            className={styles.input}
            type="text"
            placeholder="Ask me anything…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            className={styles.sendBtn}
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            aria-label="Send"
          >
            ➤
          </button>
        </div>
      </div>
    </>
  );
}
