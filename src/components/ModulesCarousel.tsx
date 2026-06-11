import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COURSE_MODULES } from "../data";
import { ChevronLeft, ChevronRight, BookOpen, Layers, Clock } from "lucide-react";

export default function ModulesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? COURSE_MODULES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === COURSE_MODULES.length - 1 ? 0 : prev + 1));
  };

  const currentModule = COURSE_MODULES[currentIndex];

  return (
    <section className="py-24 bg-earth-900 relative overflow-hidden" id="modulos">
      {/* Decorative backdrop gradients */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-gold-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-96 h-96 bg-earth-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest rounded-full mb-3 sm:mb-4">
            <BookOpen className="h-4 w-4 sm:h-4.5 sm:w-4.5" /> Módulos exclusivos
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            O caminho que vai te levar <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">do zero aos seus primeiros resultados</span>
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
            Você não precisa descobrir tudo sozinho. A Mentoria AP foi estruturada em uma sequência prática para ajudar você a sair do zero, desenvolver as habilidades certas e construir sua presença e suas vendas nos maiores marketplaces do Brasil.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Slider Window */}
          <div className="bg-earth-950/80 border border-gold-400/10 rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-2xl relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                
                {/* Module Visual Column */}
                <div className="md:col-span-5 relative">
                  {/* Aspect Ratio 4:3 for module image */}
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-gold-400/20 relative shadow-lg">
                    {/* Adicione as imagens reais do curso aqui posteriormente */}
                    <img
                      src={currentModule.image}
                      alt={currentModule.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-550"
                    />
                    
                    {/* Dark gradient overlap */}
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-transparent to-transparent pointer-events-none" />
                    
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-1 px-2.5 py-1 bg-gold-400/25 border border-gold-400/30 text-white font-mono text-[10px] uppercase font-bold tracking-widest rounded-full backdrop-blur-sm">
                      Módulo 0{currentModule.id}
                    </span>
                  </div>
                </div>

                {/* Module Description Column */}
                <div className="md:col-span-7 space-y-4">
                  <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase font-display block">
                    {currentModule.tag}
                  </span>
                  
                  <h3 className="text-lg sm:text-2xl font-display font-bold text-white leading-tight">
                    {currentModule.title}
                  </h3>
                  
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {currentModule.description}
                  </p>
                  
                  {/* Metadata Indicators bar */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gold-400/10 text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5 bg-earth-900/50 px-3 py-1.5 border border-gold-400/5 rounded-lg">
                      <Clock className="h-4 w-4 text-gold-400" />
                      <span className="font-medium text-white">{currentModule.duration}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Slider Side Arrows `<` and `>` */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-gold-400/20 bg-earth-950/90 text-gold-400 flex items-center justify-center hover:scale-110 hover:bg-gold-500/10 hover:text-gold-300 transition-all shadow-xl z-20 focus:outline-none"
            aria-label="Módulo anterior"
          >
            <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-gold-400/20 bg-earth-950/90 text-gold-400 flex items-center justify-center hover:scale-110 hover:bg-gold-500/10 hover:text-gold-300 transition-all shadow-xl z-20 focus:outline-none"
            aria-label="Próximo módulo"
          >
            <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6" />
          </button>
        </div>

        {/* Carousel Pagination dots underneath */}
        <div className="flex justify-center gap-3 mt-8">
          {COURSE_MODULES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-gradient-to-r from-gold-400 to-gold-500" : "w-2 bg-zinc-600 hover:bg-zinc-500"
              }`}
              aria-label={`Ver módulo ${idx + 1}`}
            />
          ))}
        </div>

        {/* Extra Access Checklist Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-earth-950 to-earth-900 border border-gold-400/20 rounded-3xl p-8 sm:p-10 shadow-2xl relative"
        >
          {/* Decorative small sparkle accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-400/15 border border-gold-400/30 text-gold-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md">
            Bônus & Acompanhamento
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white text-center mb-8 tracking-tight">
            Você também terá <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-100">acesso a:</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-6">
            {[
              "Comunidade exclusiva de afiliados",
              "Grupo de suporte para dúvidas",
              "Atualizações constantes",
              "Encontros ao vivo",
              "Acompanhamento próximo",
              "Materiais complementares",
              "Estratégias atualizadas conforme o mercado"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-2 sm:gap-3.5 bg-earth-950/40 border border-gold-400/5 hover:border-gold-400/15 p-2.5 xs:p-3 sm:px-5 sm:py-4 rounded-xl transition-all duration-300 hover:translate-x-1"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-4.5 h-4.5 sm:w-6 sm:h-6 bg-gold-400/15 rounded-full border border-gold-400/40">
                  <span className="text-gold-400 text-[9px] sm:text-xs font-bold font-sans">✓</span>
                </div>
                <span className="text-zinc-200 text-[10px] xs:text-xs sm:text-base font-medium leading-tight">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
