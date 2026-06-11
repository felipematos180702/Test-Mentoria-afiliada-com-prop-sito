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
      
      {/* Background Image with Dark Vignette/Overlay for pristine contrast */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src="https://lh3.googleusercontent.com/d/1i5NJSGn5SuhCXDlKfsUryC75gdoZyd8m"
          alt="Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-102 sm:scale-105 filter brightness-125 contrast-110 opacity-95 animate-fade-in"
        />
        {/* Optimized lighter premium overlays to protect text legibility without washing out the golden lines and textures */}
        <div className="absolute inset-0 bg-gradient-to-b from-earth-950/10 via-earth-950/35 to-earth-950" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-earth-950/50" />
      </div>

      {/* Absolute graphic layout backgrounds */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-12 w-[600px] h-[600px] bg-gold-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-earth-850/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto pl-4 pr-4 sm:pl-6 sm:pr-6 lg:pr-0 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Persuasive Balanced Copy */}
          <div className="lg:col-span-7 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            


            {/* Main Headline with optimized premium typographic contrast */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white flex flex-col font-display leading-snug sm:leading-tight text-center lg:text-left mt-12 lg:mt-0"
            >
              <span className="text-[14px] sm:text-xs md:text-base font-bold uppercase tracking-widest text-gold-400 mb-1.5 sm:mb-3 text-shadow-sm">
                Descubra como Transformar sua
              </span>
              <span className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.05] mb-2 sm:mb-3">
                Realidade Através{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ebd59b] via-[#e2c16e] to-[#fcf5e3] inline xs:block">
                  do Digital
                </span>
              </span>
              <span className="text-[13px] sm:text-xs md:text-base font-semibold text-zinc-400 tracking-wider uppercase mt-1">
                Trabalhando de Casa Pelo Celular
              </span>
            </motion.h1>

            {/* Subtitle / Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-300 text-[13px] sm:text-base md:text-lg leading-relaxed font-sans font-light max-w-2xl mx-0 sm:mx-auto lg:mx-0 mt-[18px] sm:mt-8"
            >
              <strong className="text-white font-semibold">Mais do que uma mentoria, uma comunidade</strong> para quem deseja transformar sua realidade através do digital. Aprenda um método passo a passo para vender na <strong className="text-white font-medium">Shopee, Mercado Livre e TikTok Shop</strong>, com acompanhamento, suporte e direcionamento para ajudar você a construir sua jornada com mais segurança e confiança.
            </motion.p>

            {/* Interactive Benefits Pills underneath subheader */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-[10px] sm:text-xs font-medium text-zinc-300"
            >
              <div className="flex items-center gap-1 sm:gap-1.5 bg-earth-900/40 border border-gold-400/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg">
                <Smartphone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold-400" />
                <span>100% Pelo Celular</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 bg-earth-900/40 border border-gold-400/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg">
                <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold-400" />
                <span>Estratégia Shopee & TikTok</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 bg-earth-900/40 border border-gold-400/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg">
                <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold-400" />
                <span>Compra Com Garantia</span>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <button
                onClick={handleScrollToCheckout}
                className="w-full sm:w-auto py-3 px-6 sm:py-4 sm:px-10 btn-premium-gold hover-glow-gold rounded-xl cursor-pointer text-center text-xs sm:text-sm font-black font-display tracking-widest uppercase shadow-2xl"
              >
                QUERO FAZER PARTE DA MENTORIA
              </button>
              
              <a
                href="#modulos"
                className="w-full sm:w-auto text-center px-4 py-3 sm:px-6 sm:py-4 border border-gold-400/20 hover:border-gold-400/40 text-xs sm:text-sm font-semibold rounded-xl text-zinc-300 hover:text-white transition-all bg-earth-900/20 shadow-sm"
              >
                Ver Cronograma Completo
              </a>
             </motion.div>

          </div>

          {/* Right Column: Producer's Portrait - Floating cut-out effect with asymmetric overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1.1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative lg:-ml-12 xl:-ml-16 mt-6 sm:-mt-16 lg:-mt-28 z-20 overflow-visible"
          >
            {/* Glowing Backdrop Halo */}
            <div className="absolute inset-x-10 inset-y-20 bg-gold-500/15 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative group/portrait max-w-[240px] xs:max-w-[280px] sm:max-w-lg lg:max-w-2xl w-full lg:mr-[-60px] xl:mr-[-100px] lg:translate-x-8 xl:translate-x-12">
              {/* Floating cutout container without borders or solid backgrounds */}
              <div 
                className="relative pointer-events-auto flex flex-col items-center overflow-hidden h-[320px] xs:h-[370px] sm:h-[520px] md:h-[640px] lg:h-[750px] xl:h-[780px]"
                style={{
                  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%)",
                  maskImage: "linear-gradient(to top, transparent 0%, black 15%)"
                }}
              >
                <motion.img 
                  src="https://lh3.googleusercontent.com/d/1PahcaVEF_5mgpAvVkyBXPSPHtt_cmpL6"
                  alt="Isabelly Mariano - Mentora AP"
                  referrerPolicy="no-referrer"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="w-full h-[calc(100%+32px)] absolute -top-4 object-cover object-top brightness-105 contrast-[1.03] transition-all duration-700 ease-out group-hover/portrait:scale-105"
                />

                {/* Highly elegant float badge at bottom of floating portrait layout */}
                <div className="absolute bottom-3 sm:bottom-6 bg-earth-950/90 border border-gold-400/30 rounded-xl sm:rounded-2xl px-4 py-2 sm:px-6 sm:py-3 backdrop-blur-md shadow-2xl text-center pointer-events-none transform z-20">
                  <h4 className="text-xs sm:text-base font-display font-black text-white tracking-wide uppercase">
                    Isabelly Mariano
                  </h4>
                  <p className="text-[8px] sm:text-xs text-gold-400 font-bold uppercase tracking-widest mt-0.5">
                    Fundadora da Mentoria AP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
