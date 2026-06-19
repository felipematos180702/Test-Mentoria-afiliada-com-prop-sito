import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

const MODULE_IMAGES = [
  "https://lh3.googleusercontent.com/d/1TkqwPXx3grEk2JCWVSID7l9rliZPf3GC",
  "https://lh3.googleusercontent.com/d/1W9gnwlsK5PzhXgKQyzA0MHCzKw4xJWs1",
  "https://lh3.googleusercontent.com/d/1DYi4EWAOm4Wo5s5AQs8k2dwl-mdNYHcC",
  "https://lh3.googleusercontent.com/d/16Jl9_NRXlnfzPoIV_exISE7AbIAHiMpp",
  "https://lh3.googleusercontent.com/d/1dCE1CwQ3zqDW8DKq99gW6ys2LzMQ4n-r",
  "https://lh3.googleusercontent.com/d/1W4P_m-oXUocIF06_5fvbKLricAy7Sm6D",
  "https://lh3.googleusercontent.com/d/1PhEF3pEOCEyEUJ1uVARfZMA8LSz35nTK",
  "https://lh3.googleusercontent.com/d/10oV857cf1WxaPd-eKHEly1GSXcgSYswd",
  "https://lh3.googleusercontent.com/d/1ITU9-H--0Mf5FHS3TbdcV0xr7hGO-2Y0",
  "https://lh3.googleusercontent.com/d/1uSnoFyLi_v-9ZxyYQqT5lG59vZqS0yoY",
  "https://lh3.googleusercontent.com/d/1eloUX8jt__ZE4z1XiQDpGcSrUiSMSVTn"
];

export default function ModulesCarousel() {
  return (
    <section className="py-24 bg-earth-900 relative overflow-hidden" id="modulos">
      {/* Decorative backdrop gradients */}
      <div className="absolute right-0 top-10 w-96 h-96 bg-gold-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-96 h-96 bg-earth-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[100vw] mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-12 px-4 sm:px-6">
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

        {/* Infinite Auto-Scrolling Carousel */}
        <div className="relative w-full overflow-hidden flex flex-col py-10">
          
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[10%] bg-gradient-to-r from-earth-900 to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[10%] bg-gradient-to-l from-earth-900 to-transparent"></div>
          
          <motion.div
            className="flex w-max gap-4 px-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...MODULE_IMAGES, ...MODULE_IMAGES].map((img, idx) => (
              <div 
                key={idx} 
                className="h-[380px] sm:h-[480px] shrink-0 relative"
              >
                <img
                  src={img}
                  alt={`Módulo ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="h-full w-auto object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Extra Access Checklist Section */}
        <div className="px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-earth-950 to-earth-900 border border-gold-400/20 rounded-3xl p-8 sm:p-10 shadow-2xl relative"
          >
            {/* Decorative small sparkle accent */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-400/15 border border-gold-400/30 text-gold-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-md whitespace-nowrap">
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

      </div>
    </section>
  );
}
