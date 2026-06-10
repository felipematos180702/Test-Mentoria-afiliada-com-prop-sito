import { motion } from "motion/react";
import { Sparkles, Calendar, Heart, Shield } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-earth-950 text-white relative overflow-hidden" id="mentora">
      {/* Decorative blurs */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-0 w-80 h-80 bg-earth-850/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Elegant styled Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Backglow layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500 to-earth-500 rounded-3xl blur-2xl opacity-20 -z-10 animate-pulse duration-4000" />
              
              {/* Golden frame decoration */}
              <div className="absolute -inset-2 rounded-3xl border border-gold-400/20 pointer-events-none -translate-x-2 translate-y-2 scale-100" />
              
              <div className="relative rounded-3xl overflow-hidden border border-gold-400/30 shadow-2xl max-w-full group/img">
                {/* Real premium portrait from Google Drive with smooth zoom on parent/image hover and high-contrast color styling */}
                <img
                  src="https://lh3.googleusercontent.com/d/1FCDzGKrfriqUjzZXgDAaHMPjlyXC12UJ"
                  alt="Isabelly Mariano - Fundadora da Mentoria AP"
                  referrerPolicy="no-referrer"
                  className="w-full max-w-xs sm:max-w-sm object-cover object-top aspect-[3/4] h-[480px] transform scale-102 group-hover/img:scale-105 group-hover/img:brightness-105 group-hover/img:contrast-105 transition-all duration-700 ease-out"
                />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-earth-950/90 border border-gold-400/30 p-3 rounded-xl backdrop-blur-md">
                  <p className="text-xs text-gold-300 font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-1.5">
                    <Sparkles className="h-4.5 w-4.5 text-gold-400" /> Isabelly Mariano
                  </p>
                  <p className="text-[10px] text-zinc-400 text-center mt-0.5">Empresária e Mentora Fundadora</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copywriting and Bullet Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-semibold uppercase tracking-widest rounded-full">
              Sua Acompanhante na Jornada
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
              Conheça Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">Mentora</span>
            </h2>

            <div className="text-zinc-300 space-y-4 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                <strong className="text-white font-semibold">Isabelly Mariano</strong> é empresária, mentora de afiliados e fundadora da <strong className="text-gold-300 font-semibold">Mentoria Afiliada com Propósito</strong>.
              </p>
              <p>
                Após transformar sua própria realidade através do digital, hoje ajuda pessoas comuns a construírem uma nova fonte de renda utilizando apenas o celular, através de estratégias práticas para <strong className="text-white font-medium">Shopee, Mercado Livre e TikTok Shop</strong>.
              </p>
              <p>
                Com uma comunidade ativa e suporte próximo aos alunos, seu objetivo é mostrar que é possível conquistar mais liberdade de tempo, qualidade de vida e novas oportunidades através do empreendedorismo digital.
              </p>
              <p>
                Movida por <strong className="text-gold-400 font-semibold">princípios cristãos</strong>, acredita que prosperidade, propósito e ética podem caminhar juntos, construindo negócios sólidos e duradouros.
              </p>
            </div>

            {/* Core Values / Authority microcards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 bg-earth-900/50 border border-gold-400/5 hover:border-gold-400/20 p-4 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 h-10 w-10 bg-gold-400/10 rounded-lg flex items-center justify-center text-gold-400">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Metodologia Ética</h4>
                  <p className="text-xs text-zinc-400 mt-1">Livre de hacks enganosos, focada em construir um negócio legítimo no digital.</p>
                </div>
              </div>

              <div className="flex gap-3 bg-earth-900/50 border border-gold-400/5 hover:border-gold-400/20 p-4 rounded-xl transition-all duration-300">
                <div className="flex-shrink-0 h-10 w-10 bg-gold-400/10 rounded-lg flex items-center justify-center text-gold-400">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Suporte Direto</h4>
                  <p className="text-xs text-zinc-400 mt-1">Acompanhamento ativo e constante para garantir que você tenha clareza.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
