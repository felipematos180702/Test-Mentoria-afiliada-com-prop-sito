import { motion } from "motion/react";
import { BookOpen } from "lucide-react";

const MODULE_IMAGES = [
  "https://lh3.googleusercontent.com/d/1Ksg8NcAV3XOifdZKB__kFUDrVo8TFTwf",
  "https://lh3.googleusercontent.com/d/1mAqRk2FqiUnvWdEjcj_v_Bi0BvhZOqPP",
  "https://lh3.googleusercontent.com/d/1F5UmAnJhf5S4tO8QXTkU1XzXa5d_q66f",
  "https://lh3.googleusercontent.com/d/1Wqg-iTzyFSD5igMlPUuHbzRAclsz8THz",
  "https://lh3.googleusercontent.com/d/1hXUykghMI3rGvJLlhd3KSGNtswQwA1tp",
  "https://lh3.googleusercontent.com/d/1vVeXsBSGOoytqNIAli5uwA5_XoV5hqg4",
  "https://lh3.googleusercontent.com/d/1r4V2TMmIKBe-_gvsLb2EupL5i6wcTZIj",
  "https://lh3.googleusercontent.com/d/1sYYRSM8dbcKKy8yOUF-17Jeo_vGH81Rb",
  "https://lh3.googleusercontent.com/d/1nUSBzwpkVFidY1TVWx-f_eoBPoiNY6vJ",
  "https://lh3.googleusercontent.com/d/1sZ9s8l663H7Om00rhl_ZMwiYYbdLPpYi",
  "https://lh3.googleusercontent.com/d/1daVUlxZIcXr3aduAbK4xfkACY_WF6XkB",
  "https://lh3.googleusercontent.com/d/1tGLvn_tJhh5v9aVosYebzXTw7tvXBOJK",
  "https://lh3.googleusercontent.com/d/1lSw1BCWEmx5_SkTap8CAjLbgjKflgEuq",
  "https://lh3.googleusercontent.com/d/1u9ahrvbgiiuI9gJehslxpFglMyfYUI2m",
  "https://lh3.googleusercontent.com/d/18YPzXtKy143YVr9Rl_T7Hrtjqer-xUwy"
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
            className="flex w-max gap-4 px-2 will-change-transform transform-gpu"
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
                className="h-[240px] sm:h-[480px] shrink-0 relative rounded-xl overflow-hidden shadow-2xl shadow-black/40"
              >
                <img
                  src={img}
                  alt={`Módulo ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="h-full w-auto object-contain"
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
