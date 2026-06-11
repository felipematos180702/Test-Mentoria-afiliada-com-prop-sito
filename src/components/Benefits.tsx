import { motion } from "motion/react";
import { BENEFITS } from "../data";
import { Award, CheckCircle2, TrendingUp, Compass, PhoneCall } from "lucide-react";

export default function Benefits() {
  // Mapping icons to benefits
  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-gold-400" />;
      case 2:
        return <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-gold-400" />;
      case 3:
        return <Compass className="h-5 w-5 sm:h-6 sm:w-6 text-gold-400" />;
      case 4:
        return <Award className="h-5 w-5 sm:h-6 sm:w-6 text-gold-400" />;
      case 5:
        return <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6 text-gold-400" />;
      default:
        return <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-gold-400" />;
    }
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-24 bg-earth-950 text-white relative overflow-hidden" id="beneficios">
      {/* Visual glowing gradients for luxury feel */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[500px] bg-gold-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest rounded-full mb-3 sm:mb-4">
            <Award className="h-4 w-4 sm:h-4.5 sm:w-4.5" /> Os Fundamentos Do Sucesso
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            5 Pilares da <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">Mentoria AP</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Nossa abordagem visa criar resultados financeiros consistentes e perenes, mantendo sempre seus valores, paz e ética mercantil alinhados ao seu propósito de vida.
          </p>
        </div>

        {/* Dynamic Grid using Motion's Viewport Trigger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8"
        >
          {BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="flex flex-col justify-between bg-earth-900/40 border border-gold-400/10 hover:border-gold-400/30 rounded-xl sm:rounded-2xl p-3.5 xs:p-5 sm:p-8 backdrop-blur-sm transition-all duration-300 group shadow-lg"
            >
              <div className="space-y-3 sm:space-y-6">
                {/* Micro Header with Custom Card Icon and Number */}
                <div className="flex items-center justify-between">
                  {/* Icon Container */}
                  <div className="h-9 w-9 sm:h-12 sm:w-12 bg-gold-500/10 group-hover:bg-gold-500/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-gold-400/20 group-hover:border-gold-400/40 transition-all">
                    {getIcon(benefit.id)}
                  </div>
                  
                  {/* Absolute positioning element representing order value */}
                  <span className="font-mono text-[9px] sm:text-sm font-semibold text-gold-400/40 opacity-70">
                    Pilar {benefit.number}
                  </span>
                </div>
 
                <div className="space-y-1.5 sm:space-y-3">
                  <h3 className="text-xs sm:text-xl font-display font-extrabold text-white group-hover:text-gold-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-300 text-[10px] sm:text-sm leading-relaxed font-sans font-light">
                    {benefit.description}
                  </p>
                </div>
              </div>
 
              {/* Minimal visual completion indicator in gold inside cards */}
              <div className="h-0.5 sm:h-1 w-6 sm:w-12 bg-gradient-to-r from-gold-400 to-transparent rounded-full mt-4 sm:mt-6 opacity-40 group-hover:opacity-100 group-hover:w-12 sm:group-hover:w-24 transition-all duration-500" />
            </motion.div>
          ))}
 
          {/* Quick Bonus Callout in the last grid slot for asymmetric design beauty */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-gold-950/40 to-earth-900/40 border border-dashed border-gold-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-8 backdrop-blur-sm shadow-xl col-span-2 lg:col-span-1"
          >
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gold-400/10 flex items-center justify-center text-gold-400 mb-2 sm:mb-4 animate-bounce text-sm sm:text-base">
              🌟
            </div>
            <h3 className="text-sm sm:text-base font-display font-bold text-white mb-1 sm:mb-2">Supere Seus Limites</h3>
            <p className="text-[10px] sm:text-xs text-zinc-400 max-w-[180px] sm:max-w-[240px] leading-relaxed mb-3 sm:mb-4">
              Faça parte de uma comunidade que cresce com propósito.
            </p>
            <a
              href="#checkout"
              className="px-3 py-1.5 sm:px-4 sm:py-2 btn-premium-gold hover-glow-gold font-bold font-display text-[10px] sm:text-xs rounded-lg transition-transform hover:scale-105 shadow-inner"
            >
              Matricule-se Agora
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
