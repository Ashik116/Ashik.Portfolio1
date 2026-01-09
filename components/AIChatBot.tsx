
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { askPortfolioAssistant } from '../services/geminiService';
import { Message } from '../types';

const SUGGESTIONS = [
  "Show me Flutter projects",
  "What is your tech stack?",
  "Tell me about your experience",
  "How can I hire you?"
];

const AIChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm your Flutter Portfolio Assistant. Ask me about my projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text?: string) => {
    const userMsg = (text || input).trim();
    if (!userMsg || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askPortfolioAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[320px] h-[500px] sm:w-[400px] glass-card rounded-3xl flex flex-col shadow-2xl overflow-hidden border border-blue-500/20 mb-4"
          >
            <div className="p-5 flutter-gradient text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-inner">✨</div>
                <div>
                  <h3 className="font-bold text-sm">Portfolio AI</h3>
                  <p className="text-[10px] opacity-70">Always online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-black/10 rounded-full p-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-900/30">
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white/10 text-slate-200 border border-white/5 rounded-bl-none'
                  }`}>
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3.5 rounded-2xl rounded-bl-none">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map(i => (
                        <motion.div 
                          key={i}
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                          className="w-2 h-2 bg-blue-400 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/5 bg-slate-900/80 backdrop-blur-md">
              <div className="flex gap-2 overflow-x-auto pb-3 mb-3 no-scrollbar scroll-smooth">
                {SUGGESTIONS.map(s => (
                  <button 
                    key={s}
                    onClick={() => handleSend(s)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={isLoading}
                  className="w-10 h-10 flutter-gradient rounded-xl text-white flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-transform"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center text-white transition-all duration-300 ${isOpen ? 'bg-red-500 rotate-90' : 'flutter-gradient'}`}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
            />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default AIChatBot;
