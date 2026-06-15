import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-earth-950 bg-grid-pattern relative overflow-hidden" id="faq">
      {/* Decorative gradient radial blur */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-1/4 w-72 h-72 bg-earth-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest rounded-full mb-3 sm:mb-4">
            <MessageCircleQuestion className="h-4 w-4 sm:h-4.5 sm:w-4.5" /> Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Ainda Tem Alguma <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">Pergunta?</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Selecione uma das perguntas abaixo para entender todos os detalhes operacionais e de garantia da mentoria.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gold-400/10 rounded-2xl overflow-hidden bg-earth-900/40 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/20"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-xs sm:text-base pr-4 hover:text-gold-300 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-6.5 h-6.5 sm:w-8 sm:h-8 rounded-full border border-gold-400/10 flex items-center justify-center text-gold-400 bg-earth-950/50 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-gold-500/10 text-gold-300 border-gold-400/30" : ""
                    }`}
                  >
                    <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-gold-400/5 bg-earth-950/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
