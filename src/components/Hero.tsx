import React from "react";
import { motion } from "motion/react";
import { Sparkles, Play, Shield, Users, Smartphone, TrendingUp } from "lucide-react";

export default function Hero() {
  const handleScrollToCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const checkoutElem = document.getElementById("checkout");
    if (checkoutElem) {
      checkoutElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-earth-950 text-white overflow-hidden pt-28 pb-20">
      
      {/* Absolute graphic layout backgrounds */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-10" />
      <div className="absolute left-1/2 -translate-x-1/2 top-12 w-[600px] h-[600px] bg-gold-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-earth-850/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center flex flex-col items-center justify-center">
        
        {/* Core Persuasive Balanced Copy */}
        <div className="space-y-8 flex flex-col items-center">
          
          {/* Top Tag Badging */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gold-400/10 border border-gold-400/20 text-gold-300 text-xs font-bold uppercase tracking-widest rounded-full"
          >
            <Sparkles className="h-4 w-4 text-gold-400 animate-spin-slow" /> Inscrições Abertas • Mentoria AP
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.12] text-white max-w-3xl"
          >
            Descubra como Construir um{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-100">
              Negócio Digital Sólido
            </span>{" "}
            e Lucrativo Trabalhando de Casa Pelo Celular
          </motion.h1>

          {/* Subtitle / Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-light max-w-2xl mx-auto"
          >
            <strong className="text-white font-medium">Mentoria Afiliada com Propósito (AP).</strong> O método definitivo para você começar do absoluto ZERO e dominar as melhores estratégias de vendas nos maiores marketplaces do mercado digital (Shopee, Mercado Livre e TikTok Shop).
          </motion.p>

          {/* Interactive Benefits Pills underneath subheader */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-medium text-zinc-300"
          >
            <div className="flex items-center gap-1.5 bg-earth-900/40 border border-gold-400/10 px-3 py-1.5 rounded-lg">
              <Smartphone className="h-4 w-4 text-gold-400" />
              <span>100% Pelo Celular</span>
            </div>
            <div className="flex items-center gap-1.5 bg-earth-900/40 border border-gold-400/10 px-3 py-1.5 rounded-lg">
              <TrendingUp className="h-4 w-4 text-gold-400" />
              <span>Estratégia Shopee & TikTok</span>
            </div>
            <div className="flex items-center gap-1.5 bg-earth-900/40 border border-gold-400/10 px-3 py-1.5 rounded-lg">
              <Shield className="h-4 w-4 text-gold-400" />
              <span>Compra Com Garantia</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={handleScrollToCheckout}
              className="w-full sm:w-auto py-4 px-8 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-earth-950 font-black font-display text-sm tracking-wider uppercase rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/10 shadow-inner cursor-pointer text-center"
            >
              QUERO FAZER PARTE DA MENTORIA
            </button>
            
            <a
              href="#modulos"
              className="w-full sm:w-auto text-center px-6 py-4 border border-gold-400/20 hover:border-gold-400/40 text-sm font-semibold rounded-xl text-zinc-300 hover:text-white transition-all bg-earth-900/20 shadow-sm"
            >
              Ver Cronograma Completo
            </a>
          </motion.div>

          {/* Authority Social Proof micro-strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-gold-400/5 w-full max-w-md"
          >
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=60&auto=format&fit=facearea&facepad=2",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=60&auto=format&fit=facearea&facepad=2",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=60&auto=format&fit=facearea&facepad=2"
              ].map((face, index) => (
                <img
                  key={index}
                  src={face}
                  alt="Aluno"
                  className="w-8 h-8 rounded-full border-2 border-earth-950 object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold-400 text-xs">★</span>
                ))}
              </div>
              <p className="text-[10px] text-zinc-400 mt-0.5">
                Junte-se a <strong className="text-zinc-200 font-semibold">+15.000 alunos</strong> construindo propósito online
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
