import React from "react";
import { motion } from "motion/react";
import { Compass, UserX, AlertTriangle, Coins, Sparkles, Flame } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    {
      icon: Compass,
      title: "Paralisia por excesso de informação",
      description: "Você assiste a dezenas de vídeos teóricos, consome conteúdos gratuitos desordenados e acumula cursos obsoletos, mas continua no mesmo lugar por falta de um passo a passo simples.",
    },
    {
      icon: UserX,
      title: "Solidão absoluta e suporte inútil",
      description: "Travar em uma configuração simples do TikTok ou da Shopee é péssimo. Sem um suporte humano e ativo que te mostre onde está errando, a desistência se torna quase inevitável.",
    },
    {
      icon: Coins,
      title: "Medo crônico de gastar o que não tem",
      description: "Dizem por aí que você precisa investir milhares de reais em anúncios recomendados por falsos gurus. No final, você queima dinheiro sem ver um centavo de comissão voltar.",
    },
    {
      icon: AlertTriangle,
      title: "Brigar por preço com produtos ruins",
      description: "Vender o que todo mundo oferece satura seu mercado e aniquila sua margem de lucro. Sem os produtos certos e validados pela demanda, você é apenas mais um mandando links de spam.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 16,
      },
    },
  };

  const handleScrollToCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const elem = document.getElementById("checkout");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-earth-950 text-white relative overflow-hidden" id="diagnostico">
      {/* Background glow effects */}
      <div className="absolute right-1/2 translate-x-1/2 bottom-0 w-[400px] h-[400px] bg-red-950/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[300px] h-[300px] bg-gold-950/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* CRO Copywriting Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest rounded-full mb-3 sm:mb-4">
            <Flame className="h-4 w-4 sm:h-4.5 sm:w-4.5 animate-pulse" /> Se identificou com esses problemas?
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4 leading-normal">
            Por que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-300">95% das pessoas desistem</span> de viver do digital antes da primeira venda?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base leading-relaxed">
            Se você já tentou de tudo e ainda não conseguiu os resultados que deseja, acalme-se. A culpa não é sua. O mercado tradicional te ensina a ser um spammer ineficiente, e não a construir um negócio legítimo.
          </p>
        </div>

        {/* Pain Points Grid - Responsive for Mobile with fine margins and optimized fonts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
        >
          {painPoints.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                className="bg-earth-900/30 border border-red-500/10 hover:border-red-500/30 rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-red-500/5 border border-red-500/10 flex items-center justify-center text-red-400 flex-shrink-0">
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-display font-bold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* The Copywriting Bridge / CTA trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-earth-900/60 to-earth-950/60 border border-gold-400/10 rounded-2xl p-4 sm:p-8 max-w-4xl mx-auto text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/[0.02] rounded-full blur-2xl pointer-events-none" />
          
          <h4 className="text-xs sm:text-lg font-bold text-white mb-2 font-display">
            Existe um método mais inteligente para prosperar pelo celular
          </h4>
          <p className="text-[11px] sm:text-sm text-zinc-300 max-w-2xl mx-auto mb-5 leading-relaxed font-light">
            Na <strong className="text-gold-300 font-semibold">Mentoria Afiliada com Propósito</strong>, nós eliminamos o desperdício técnico e o tráfego pago arriscado da sua rota. Desenvolvemos seu processo de vendas passo a passo nos maiores sites integrados ao TikTok e Shopee com suporte constante.
          </p>
          
          <button
            onClick={handleScrollToCheckout}
            className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-6 sm:py-3 btn-premium-gold hover-glow-gold font-bold font-display text-[10px] sm:text-xs tracking-wider uppercase rounded-lg transition-transform hover:scale-103 cursor-pointer shadow-lg outline-none"
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 fill-earth-950 animate-pulse" /> Quero Mudar Minha Realidade
          </button>
        </motion.div>

      </div>
    </section>
  );
}
