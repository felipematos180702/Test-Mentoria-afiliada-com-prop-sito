import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShieldCheck, CreditCard, Lock, Sparkles, Check, Hourglass } from "lucide-react";

export default function CheckoutSection() {
  // Scarcity countdown timer setup (15 minutes looping for demo or fixed countdown)
  const [timeLeft, setTimeLeft] = useState(874); // 14 mins 34 secs

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 899)); // loop back to 15 mins for demo
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section className="py-24 bg-earth-950 text-white relative overflow-hidden" id="checkout">
      {/* Decorative premium blurs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[600px] bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Urgent Warning Segment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-red-950/20 border border-red-500/20 rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 text-center sm:text-left"
        >
          <div className="space-y-1">
            <h4 className="text-red-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs">⚠️ ATENÇÃO: Oferta Exclusiva</h4>
            <p className="text-zinc-300 text-[10px] sm:text-sm leading-relaxed">
              Os bônus exclusivos e a condição especial para a nova turma da <strong className="text-white font-semibold">Mentoria AP</strong> estão disponíveis por tempo limitado. Garanta sua vaga com desconto especial antes da virada do próximo lote!
            </p>
          </div>
        </motion.div>

        {/* Pricing / Checkout Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-gradient-to-br from-earth-900/90 to-earth-950/90 border-2 border-gold-400/40 rounded-2xl sm:rounded-3xl p-4 sm:p-12 shadow-2xl relative overflow-visible"
        >
          {/* Top highlight ribbons or tags - placed inside the card view safely to prevent overflow clipping */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-400 to-gold-600 text-earth-950 text-[10px] sm:text-xs font-black px-5 py-1 sm:px-6 sm:py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1 z-10 whitespace-nowrap">
            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-earth-950" /> Vagas Limitadas
          </div>

          <div className="text-center mt-6 mb-6 sm:mt-8 sm:mb-8">
            <h3 className="text-xl sm:text-3xl font-display font-extrabold text-white">
              Sua Transformação Começa Hoje
            </h3>
            <p className="text-zinc-400 text-[10px] sm:text-sm mt-1.5 sm:mt-2">
              Tenha acesso imediato a todo o método da Mentoria AP + Bônus Especiais abaixo.
            </p>
          </div>

          {/* Core inclusions list mini grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto text-left">
            {[
              "Comunidade Exclusiva de alunos",
              "Estratégias para os maiores Marketplaces",
              "Treinamentos Semanais e Atualizações Constantes",
              "Suporte Humanizado e Direcionamento Próximo",
              "Materiais Práticos e Ferramentas",
              "Estratégias Avançadas para Escalar Resultados"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <div className="h-4.5 w-4.5 sm:h-5 sm:w-5 bg-gold-400/10 rounded-full flex items-center justify-center text-gold-400 flex-shrink-0">
                  <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Pricing breakdown */}
          <div className="bg-earth-950/70 border border-gold-400/10 p-6 rounded-2xl max-w-xl mx-auto text-center mb-8">
            <p className="text-xs sm:text-sm text-zinc-500 line-through">
              De R$ 397,00 no preço regular
            </p>
            
            <div className="mt-2 text-gold-400">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider block">Por apenas</span>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <span className="text-lg sm:text-2xl font-light text-zinc-300">12x de</span>
                <span className="text-4xl sm:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-100">
                  R$ 27,61
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-2">ou R$ 277,00 à vista no Pix / Boleto (Condição inédita especial)</p>
            </div>

            {/* Countdown timer for scarcity */}
            <div className="mt-4 pt-4 border-t border-gold-400/10 flex items-center justify-center gap-2 text-xs text-zinc-400">
              <Hourglass className="h-4 w-4 text-gold-400 animate-spin-slow" />
              <span>Esta condição especial de lançamento expira em: </span>
              <span className="font-mono font-bold text-gold-300 bg-earth-950 px-2 py-0.5 rounded border border-gold-400/20">{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Pulsing high conversion checkout button */}
          <div className="text-center space-y-4">
            <motion.a
              href="https://pay.kiwify.com.br" // Placeholder checkout link
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="inline-block w-full max-w-xl py-3 sm:py-5 px-5 sm:px-12 btn-premium-gold hover-glow-gold text-xs sm:text-lg font-black font-display tracking-widest rounded-xl sm:rounded-2xl shadow-2xl transition-all duration-300"
            >
              QUERO GARANTIR MINHA VAGA COM DESCONTO
            </motion.a>

            {/* Payment security details/locks */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-zinc-500 text-[10px] sm:text-xs">
              <span className="flex items-center gap-1">
                <Lock className="h-3.5 w-3.5 text-gold-400/60" /> Compra 100% Segura
              </span>
              <span className="h-3 w-px bg-zinc-800 hidden sm:inline" />
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-400/60" /> 7 Dias de Garantia
              </span>
              <span className="h-3 w-px bg-zinc-800 hidden sm:inline" />
              <span className="flex items-center gap-1">
                <CreditCard className="h-3.5 w-3.5 text-gold-400/60" /> Acesso Imediato
              </span>
            </div>
          </div>

          {/* Guarantee stamp card */}
          <div className="mt-12 pt-8 border-t border-gold-400/10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-3 flex justify-center text-center">
              <div className="h-20 w-20 rounded-full border-2 border-gold-400/40 flex items-center justify-center p-1 bg-earth-950 shadow-inner">
                <div className="h-full w-full rounded-full bg-gold-400/10 border border-dashed border-gold-400/40 flex flex-col items-center justify-center text-gold-400 select-none">
                  <span className="text-xl font-bold font-display leading-none">7</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest leading-none">Dias</span>
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-9 text-center sm:text-left">
              <h4 className="text-sm font-bold text-white mb-1">Sem Riscos: Garantia Incondicional de 7 Dias</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Você pode se inscrever agora, navegar pelas aulas e participar de nossa comunidade. Se dentro de 7 dias você achar que o método não serve para você ou simplesmente mudar de ideia, nós devolvemos cada centavo investido de forma rápida e desburoclatizada. O risco é inteiramente meu.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
