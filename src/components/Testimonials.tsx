import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Star, MessageCircle, Quote } from "lucide-react";

export default function Testimonials() {
  // Animation container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="py-24 bg-earth-900 bg-grid-pattern relative overflow-hidden" id="depoimentos">
      {/* Visual background lights */}
      <div className="absolute right-10 bottom-1/4 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-1/3 w-80 h-80 bg-earth-850/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            <MessageCircle className="h-4.5 w-4.5" /> Depoimentos Reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
            Resultados de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">Milhares de Alunos</span>
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Veja o que dizem as pessoas comuns que saíram do absoluto zero e alcançaram sua independência com a metodologia com propósito.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="flex flex-col justify-between bg-earth-950/80 border border-gold-400/10 rounded-2xl p-6 relative group hover:border-gold-400/30 transition-all duration-300 shadow-xl"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-4 right-4 text-gold-400/10 group-hover:text-gold-400/20 transition-colors">
                <Quote className="h-10 w-10 stroke-[3]" />
              </div>

              <div>
                {/* 5 Stars Indicator */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold-400 text-gold-400 stroke-none"
                    />
                  ))}
                </div>

                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed italic relative z-10 mb-6">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gold-400/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-gold-400/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gold-300 font-medium font-display">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Stat badging inside section for extra conversion weight */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 bg-earth-950/60 border border-gold-400/10 p-6 rounded-2xl max-w-3xl mx-auto backdrop-blur-sm">
          <div className="text-center sm:text-left">
            <h3 className="text-3xl font-display font-extrabold text-gold-400">
              +15.000
            </h3>
            <p className="text-xs text-zinc-400 font-medium mt-1">Alunos Transformados no Brasil</p>
          </div>
          <div className="h-px sm:h-12 w-24 sm:w-px bg-gold-400/20" />
          <div className="text-center sm:text-left">
            <h3 className="text-3xl font-display font-extrabold text-gold-400">
              98.2%
            </h3>
            <p className="text-xs text-zinc-400 font-medium mt-1">Índice de Recomendação e Satisfação</p>
          </div>
          <div className="h-px sm:h-12 w-24 sm:w-px bg-gold-400/20" />
          <div className="text-center sm:text-left">
            <h3 className="text-3xl font-display font-extrabold text-gold-400">
              24/7
            </h3>
            <p className="text-xs text-zinc-400 font-medium mt-1">Comunidade Global & Apoio Prático</p>
          </div>
        </div>
      </div>
    </section>
  );
}
