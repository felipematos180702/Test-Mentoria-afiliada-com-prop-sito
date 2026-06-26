import React from "react";
import { motion } from "motion/react";
import { Rocket, ShoppingBag, Package, EyeOff, Users, RefreshCw, Flame, Sparkles } from "lucide-react";

export default function PainPoints() {
  const learningOutcomes = [
    {
      icon: Rocket,
      title: "Comece do zero, mesmo sem experiência",
      description: "Mesmo que você nunca tenha vendido nada na internet ou nem saiba como funciona o mercado digital, você terá um passo a passo completo para começar com segurança e fazer suas primeiras vendas.",
    },
    {
      icon: ShoppingBag,
      title: "Venda nas maiores plataformas do Brasil",
      description: "Aprenda a vender em plataformas como Shopee, TikTok Shop, Mercado Livre, Amazon, Magalu, Shein e outras, utilizando estratégias que realmente funcionam.",
    },
    {
      icon: Package,
      title: "Venda sem precisar de estoque",
      description: "Você não precisa comprar produtos, investir em mercadorias ou ter estoque em casa. Aprenda a trabalhar como afiliado promovendo produtos de grandes marcas.",
    },
    {
      icon: EyeOff,
      title: "Venda mesmo sem aparecer",
      description: "Se você tem vergonha de gravar vídeos ou não quer expor sua imagem, a mentoria ensina estratégias para vender utilizando Inteligência Artificial, conteúdos estratégicos e outras formas de criar autoridade sem precisar mostrar o rosto.",
    },
    {
      icon: Users,
      title: "Suporte e comunidade",
      description: "Você não estará sozinho durante a sua jornada. Conte com suporte humanizado, encontros ao vivo e uma comunidade que incentiva, compartilha experiências e cresce junto.",
    },
    {
      icon: RefreshCw,
      title: "Materiais e atualizações constantes",
      description: "O mercado digital está sempre mudando, e a mentoria acompanha essa evolução. Você terá acesso a novas aulas, materiais, checklists, templates, ferramentas e atualizações para continuar evoluindo ao longo da sua jornada.",
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
      <div className="absolute right-1/2 translate-x-1/2 bottom-0 w-[400px] h-[400px] bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[300px] h-[300px] bg-gold-950/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* CRO Copywriting Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest rounded-full mb-3 sm:mb-4">
            <Flame className="h-4 w-4 sm:h-4.5 sm:w-4.5 animate-pulse text-gold-400" /> O Método Definitivo
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4 leading-normal">
            Pra você que deseja viver do digital: O que você vai ter na <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">Mentoria AP?</span>
          </h2>
          <p className="text-zinc-300 text-xs sm:text-base leading-relaxed">
            Se o seu objetivo é trabalhar de casa, conquistar uma renda através da internet e ter mais liberdade utilizando apenas o celular, a Mentoria AP foi desenvolvida para guiar você em cada etapa dessa jornada, mesmo que hoje você não tenha experiência no mercado digital.
          </p>
        </div>

        {/* Learning Outcomes Grid  */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-12"
        >
          {learningOutcomes.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                className="bg-earth-900/30 border border-gold-400/10 hover:border-gold-400/30 rounded-xl p-3 sm:p-6 transition-all duration-300 shadow-md flex flex-col justify-start"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <IconComponent className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  
                  <div>
                    <h3 className="text-xs sm:text-[16px] font-display font-bold text-zinc-100 mb-1 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="h-px w-6 sm:h-px sm:w-8 bg-gold-400/20" />

                  <p className="text-[10px] sm:text-xs text-zinc-300 leading-relaxed font-sans font-light">
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
            A solução completa para destravar o seu digital
          </h4>
          <p className="text-[11px] sm:text-sm text-zinc-300 max-w-2xl mx-auto mb-5 leading-relaxed font-light">
            Seja parceiro das maiores empresas do Brasil, crie uma esteira inteligente de vendas e faça do seu celular a sua ferramenta definitiva de liberdade financeira. Tudo com auxílio da Inteligência Artificial.
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
