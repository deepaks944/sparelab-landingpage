import { useEffect, useRef, useState } from "react";
import faqs from "../data/faqs.js";

const initialMessage = {
  role: "assistant",
  content: "Hi! I can help with common questions about ordering from SpareLab.",
};

function findFaqAnswer(question) {
  const words = question.toLowerCase().match(/[a-z0-9]+/g) || [];
  let bestMatch = null;
  let bestScore = 0;

  for (const faq of faqs) {
    const score = faq.keywords.reduce(
      (total, keyword) =>
        total +
        (words.some(
          (word) =>
            word === keyword ||
            (word.length > 4 &&
              keyword.length > 4 &&
              (word.startsWith(keyword) || keyword.startsWith(word))),
        )
          ? 1
          : 0),
      0,
    );

    if (score > bestScore) {
      bestMatch = faq;
      bestScore = score;
    }
  }

  return bestMatch?.answer;
}

function FaqChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([initialMessage]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isQuestionMenuOpen, setIsQuestionMenuOpen] = useState(false);
  const launcherRef = useRef(null);
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages, isOpen]);

  const askQuestion = (text) => {
    const submittedQuestion = text.trim();
    if (!submittedQuestion) return;

    const answer =
      findFaqAnswer(submittedQuestion) ||
      "I couldn't find that in the FAQs. Try asking about returns, payments, delivery, invoices, or part types.";

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", content: submittedQuestion },
      { role: "assistant", content: answer },
    ]);
    setShowSuggestions(false);
    setIsQuestionMenuOpen(false);
    setQuestion("");
  };

  const closeChat = () => {
    setIsOpen(false);
    launcherRef.current?.focus();
  };

  return (
    <div className="fixed bottom-24 right-4 z-50 sm:right-6">
      {isOpen && (
        <section
          id="faq-chat-panel"
          aria-labelledby="faq-chat-title"
          aria-keyshortcuts="Escape"
          className="glass-panel faq-chat-panel mb-3 flex h-[min(34rem,70vh)] w-[calc(100vw-2rem)] max-w-96 flex-col overflow-hidden rounded-2xl border shadow-2xl"
          onKeyDown={(event) => {
            if (event.key === "Escape") closeChat();
          }}
          role="dialog"
        >
          <header className="flex items-center justify-between gap-3 border-b border-slate-200/70 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-slate-900/70">
            <div>
              <h2
                id="faq-chat-title"
                className="text-sm font-semibold text-slate-900 dark:text-white"
              >
                SpareLab FAQ assistant
              </h2>
              <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                Answers based on our FAQs
              </p>
            </div>
            <button
              type="button"
              aria-label="Close FAQ chat"
              className="flex size-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              onClick={closeChat}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="size-4"
              >
                <path
                  d="m5 5 10 10M15 5 5 15"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </header>

          <div
            aria-label="FAQ chat messages"
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto p-3"
            role="log"
          >
            {messages.map((message, index) => (
              <p
                key={`${message.role}-${index}`}
                className={`max-w-[95%] whitespace-pre-line rounded-2xl px-3 py-2.5 text-[13px] leading-5 ${
                  message.role === "user"
                    ? "ml-auto rounded-br-sm bg-emerald-600 text-white"
                    : "mr-auto rounded-bl-sm bg-white/80 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                }`}
              >
                {message.content}
              </p>
            ))}

            {showSuggestions && (
              <div className="space-y-2 pt-1">
                <p className="px-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Common questions
                </p>
                {faqs.map((faq) => (
                  <button
                    key={faq.question}
                    type="button"
                    className="block w-full rounded-xl border border-emerald-700/15 bg-white/55 px-3 py-2 text-left text-[11px] leading-4 text-emerald-800 transition hover:border-emerald-600/40 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-emerald-300/15 dark:bg-slate-900/50 dark:text-emerald-200 dark:hover:bg-emerald-400/10"
                    onClick={() => askQuestion(faq.question)}
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}
            {!showSuggestions && (
              <div className="pt-1">
                <button
                  type="button"
                  aria-controls="faq-question-menu"
                  aria-expanded={isQuestionMenuOpen}
                  className="flex w-full items-center justify-between rounded-xl border border-emerald-700/15 bg-white/55 px-3 py-2 text-left text-xs font-medium text-emerald-800 transition hover:border-emerald-600/40 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-emerald-300/15 dark:bg-slate-900/50 dark:text-emerald-200 dark:hover:bg-emerald-400/10"
                  onClick={() =>
                    setIsQuestionMenuOpen((isMenuOpen) => !isMenuOpen)
                  }
                >
                  Ask another question
                  <span aria-hidden="true">
                    {isQuestionMenuOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id="faq-question-menu"
                  className="mt-2 space-y-2"
                  hidden={!isQuestionMenuOpen}
                >
                  {faqs.map((faq) => (
                    <button
                      key={faq.question}
                      type="button"
                      className="block w-full rounded-xl border border-emerald-700/15 bg-white/55 px-3 py-2 text-left text-[11px] leading-4 text-emerald-800 transition hover:border-emerald-600/40 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-emerald-300/15 dark:bg-slate-900/50 dark:text-emerald-200 dark:hover:bg-emerald-400/10"
                      onClick={() => askQuestion(faq.question)}
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            className="flex items-center gap-2 border-t border-slate-200/70 bg-white/60 p-3 dark:border-white/10 dark:bg-slate-900/60"
            onSubmit={(event) => {
              event.preventDefault();
              askQuestion(question);
            }}
          >
            <label className="sr-only" htmlFor="faq-chat-question">
              Ask a question
            </label>
            <input
              ref={inputRef}
              id="faq-chat-question"
              autoComplete="off"
              className="min-w-0 flex-1 rounded-full border border-slate-300/80 bg-white/80 px-3 py-2 text-xs text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
              maxLength={240}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about delivery, returns..."
              value={question}
            />
            <button
              type="submit"
              aria-label="Send question"
              disabled={!question.trim()}
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:opacity-40"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="size-4"
              >
                <path
                  d="m3 10 14-7-4.5 14-2.7-5.3L3 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  d="m9.8 11.7 3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        aria-controls="faq-chat-panel"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close FAQ chat" : "Open FAQ chat"}
        className="glass-panel ml-auto flex h-12 items-center gap-2 rounded-full border px-4 text-sm font-semibold text-emerald-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-emerald-200 dark:hover:bg-slate-800/80"
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className="size-5"
        >
          <path
            d="M3 4.5h14v9H9l-4.5 3v-3H3v-9Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 8h7M6.5 10.5h4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        FAQs
      </button>
    </div>
  );
}

export default FaqChatbot;
