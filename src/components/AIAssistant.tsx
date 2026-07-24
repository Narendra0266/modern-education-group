"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, GraduationCap } from "lucide-react";

interface Message {
  sender: "ai" | "user";
  text: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "Welcome to Modern Education Group! I'm your AI Counselor. Ask me about admissions, fees, hostel boardings, or specific campus courses." },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputValue("");

    // Simulated reply trigger
    setTimeout(() => {
      let aiResponse = "Thank you for reaching out! How can I assist you further regarding admissions, boarding facilities, fee structures, or campus streams?";
      const lower = userText.toLowerCase();

      if (lower.includes("admission") || lower.includes("apply") || lower.includes("enroll")) {
        aiResponse = "Admissions for the 2026-27 session are currently open! You can submit an online application under the Admissions section, or connect directly with our admissions desk at admissions@moderneducation.org.";
      } else if (lower.includes("fee") || lower.includes("pay") || lower.includes("cost")) {
        aiResponse = "Fee structures are tailored by grade level and campus. If you enroll, you can log in to our secure ERP Portal under '/erp' to review fee invoices, select installments, and make card payments online.";
      } else if (lower.includes("hostel") || lower.includes("boarding") || lower.includes("stay")) {
        aiResponse = "Modern Girls College offers full residential hostel rooms for out-of-town students. Features include secure double-sharing rooms, common studies, laundry setups, and 24/7 welfare wardens.";
      } else if (lower.includes("robotics") || lower.includes("stem") || lower.includes("lab") || lower.includes("ai")) {
        aiResponse = "Both our Senior Secondary School and Girls College campuses have AI Computational Hubs and Robotics Sandboxes equipped with GPU servers for deep learning, mechanical workbenches, and coding playgroups.";
      }

      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary dark:bg-accent text-white dark:text-primary p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer border border-primary/10 dark:border-accent/20"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>

      {/* Chat Box Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] rounded-3xl overflow-hidden glass shadow-2xl flex flex-col justify-between border border-primary/5 dark:border-white/10"
          >
            {/* Header */}
            <div className="bg-primary dark:bg-navy p-4 text-white flex items-center justify-between border-b border-primary/10 dark:border-white/10">
              <div className="flex items-center space-x-2.5">
                <div className="bg-accent/15 p-2 rounded-xl text-accent flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-poppins">Group AI Assistant</h4>
                  <span className="text-[10px] text-accent font-semibold tracking-wider block uppercase">
                    Admissions & Counseling
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg text-white/80"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Pane */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 max-h-[350px] bg-secondary/30 dark:bg-navy-dark/40">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-xs md:text-sm font-medium leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-white dark:bg-navy text-primary dark:text-white rounded-bl-none border border-primary/5 dark:border-white/5 shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-white dark:bg-navy border-t border-primary/5 dark:border-white/10 flex items-center space-x-2"
            >
              <input
                type="text"
                placeholder="Ask about admissions, boarding, fees..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow bg-secondary dark:bg-navy-dark text-primary dark:text-white px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium focus:outline-none border border-primary/5 dark:border-white/5 focus:border-accent"
              />
              <button
                type="submit"
                className="bg-primary dark:bg-accent text-white dark:text-primary p-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}