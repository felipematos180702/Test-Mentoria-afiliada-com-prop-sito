import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, ZoomIn, X, ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface ProofImage {
  id: number;
  url: string;
  title: string;
  category: "vendas" | "conversas" | "comissoes";
}

const PROOF_IMAGES: ProofImage[] = [
  {
    id: 1,
    url: "https://lh3.googleusercontent.com/d/1IZBR9-TJS1g0Qbygutsw3XHHbjhd2AzK",
    title: "Resultados diários expressivos",
    category: "comissoes"
  },
  {
    id: 2,
    url: "https://lh3.googleusercontent.com/d/1NVfoiQKKovMhdWH4mLdWou8SzodsYrUd",
    title: "Comissões caindo no WhatsApp",
    category: "conversas"
  },
  {
    id: 3,
    url: "https://lh3.googleusercontent.com/d/1xNEH72hErtif-_660dq4a7nJjc9XVedl",
    title: "Mais uma venda faturada",
    category: "vendas"
  },
  {
    id: 4,
    url: "https://lh3.googleusercontent.com/d/1exhQNtY6Daawku0bLO7Hz0zjX8xA3R43",
    title: "Faturamento constante no digital",
    category: "vendas"
  },
  {
    id: 5,
    url: "https://lh3.googleusercontent.com/d/1BiULBPbvxqdiaDP_c_bmJjyXR5YJMnke",
    title: "Resultados escaláveis de alunos",
    category: "comissoes"
  },
  {
    id: 6,
    url: "https://lh3.googleusercontent.com/d/1w0simvXzEKHiReJSeMCYhDbJy_2GH8UG",
    title: "Comissões destravadas com o método",
    category: "comissoes"
  },
  {
    id: 7,
    url: "https://lh3.googleusercontent.com/d/1exE5IzK7rNQRo44ydSi_LU4W30Q9mX4D",
    title: "Agradecimentos e primeiras vendas",
    category: "conversas"
  },
  {
    id: 8,
    url: "https://lh3.googleusercontent.com/d/158jd-slP_eUwRnzgU4R-rnLgBz4gxoid",
    title: "Faturamento acumulado aplicando a mentoria",
    category: "vendas"
  },
  {
    id: 9,
    url: "https://lh3.googleusercontent.com/d/1VW0b7ps-MQhOCcnLDIrDHC_ZEhiV85pQ",
    title: "Aluna comemorando lucros diários",
    category: "conversas"
  },
  {
    id: 10,
    url: "https://lh3.googleusercontent.com/d/1sknlW2kFJMM4nGUe7rXXfmNituXnlv0F",
    title: "Mais de R$5.000 faturados da cozinha de casa",
    category: "comissoes"
  }
];

export default function Testimonials() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = PROOF_IMAGES;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === null) return null;
        return prev === 0 ? filteredImages.length - 1 : prev - 1;
      });
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === null) return null;
        return prev === filteredImages.length - 1 ? 0 : prev + 1;
      });
    }
  };

  // Keyboard navigation inside lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex(prev => (prev === null || prev === 0 ? filteredImages.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex(prev => (prev === null || prev === filteredImages.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  return (
    <section className="py-20 bg-earth-900 bg-grid-pattern relative overflow-hidden" id="depoimentos">
      {/* Visual background lights */}
      <div className="absolute right-10 bottom-1/4 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-1/3 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest rounded-full mb-3 sm:mb-4">
            <MessageCircle className="h-4 w-4 sm:h-4.5 sm:w-4.5" /> Depoimentos Reais
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Mais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">1.200 Pessoas</span> Já Decidiram Começar
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
            Conheça histórias reais de alunos que encontraram no digital uma oportunidade para gerar renda, conquistar mais liberdade e transformar suas vidas.
          </p>
        </div>

        {/* Masonry / Grid Proof Photos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setLightboxIndex(index)}
              className="bg-earth-950/60 border border-zinc-800 hover:border-emerald-500/40 rounded-xl overflow-hidden cursor-pointer relative group transition-all duration-300 shadow-md aspect-[3/4]"
              id={`proof-card-${image.id}`}
            >
              {/* Overlay with Zoom Indicator on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 z-10 text-center">
                <ZoomIn className="h-6 w-6 text-emerald-400 mb-2 animate-bounce" />
                <span className="text-[10px] sm:text-xs text-white font-medium">Resultado de aluno</span>
              </div>

              {/* Real Screenshot */}
              <img
                src={image.url}
                alt={image.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Tag Category Bubble */}
              <span className="absolute bottom-2 left-2 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-black/50 backdrop-blur-sm text-zinc-300">
                {image.category === "comissoes" ? "Comissões" : image.category === "conversas" ? "Suporte" : "Venda"}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Interactive Stats Panel */}
        <div className="mt-16 flex flex-row items-center justify-between sm:justify-center gap-1.5 xs:gap-3 sm:gap-12 bg-earth-950/60 border border-gold-400/10 p-3 sm:p-6 rounded-2xl max-w-3xl mx-auto backdrop-blur-sm">
          <div className="text-center flex-1 sm:flex-initial">
            <h3 className="text-base xs:text-xl sm:text-3xl font-display font-extrabold text-gold-400 leading-none">
              +1.200
            </h3>
            <p className="text-[9px] xs:text-[10px] sm:text-xs text-zinc-400 font-medium mt-1 sm:mt-1.5 leading-tight">Alunos Impactados</p>
          </div>
          <div className="h-8 sm:h-12 w-px bg-gold-400/20 flex-shrink-0" />
          <div className="text-center flex-1 sm:flex-initial">
            <h3 className="text-base xs:text-xl sm:text-3xl font-display font-extrabold text-gold-400 leading-none">
              100%
            </h3>
            <p className="text-[9px] xs:text-[10px] sm:text-xs text-zinc-400 font-medium mt-1 sm:mt-1.5 leading-tight">Acesso Online</p>
          </div>
          <div className="h-8 sm:h-12 w-px bg-gold-400/20 flex-shrink-0" />
          <div className="text-center flex-1 sm:flex-initial">
            <h3 className="text-base xs:text-xl sm:text-3xl font-display font-extrabold text-gold-400 leading-none">
              Comunidade
            </h3>
            <p className="text-[9px] xs:text-[10px] sm:text-xs text-zinc-400 font-medium mt-1 sm:mt-1.5 leading-tight">Ativa e Colaborativa</p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal (Zoom Interface) */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            id="lightbox-container"
          >
            {/* Close button with high visibility */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 h-10 w-10 bg-zinc-900/80 border border-zinc-800 rounded-full flex items-center justify-center text-white hover:bg-zinc-800 hover:text-emerald-400 transition-colors cursor-pointer z-50"
              aria-label="Fechar"
              id="close-lightbox-btn"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation Left */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 h-12 w-12 bg-zinc-900/60 border border-zinc-800/40 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 hover:text-black transition-all cursor-pointer z-40"
              aria-label="Anterior"
              id="prev-lightbox-btn"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Enlarged Screenshot Canvas */}
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-full max-h-[85vh] flex flex-col items-center justify-center"
              id="active-proof-canvas"
            >
              <img
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-lg border-2 border-zinc-800/80 shadow-2xl"
              />
              <div className="mt-4 text-center px-4">
                <p className="text-white font-display text-sm sm:text-base font-bold">
                  Resultado de aluno
                </p>
                <p className="text-zinc-400 text-xs mt-1">
                  Resultado {lightboxIndex + 1} de {filteredImages.length} • Clique nas laterais para navegar
                </p>
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 h-12 w-12 bg-zinc-900/60 border border-zinc-800/40 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 hover:text-black transition-all cursor-pointer z-40"
              aria-label="Próximo"
              id="next-lightbox-btn"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

