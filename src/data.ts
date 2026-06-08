export interface CourseModule {
  id: number;
  title: string;
  tag: string;
  description: string;
  image: string;
  duration: string;
  lessonsCount: number;
}

export interface Benefit {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  location: string;
  stars: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    title: "O Despertar do Propósito & Mentalidade Próspera",
    tag: "Módulo Inicial",
    description: "Alinhando sua vida e objetivos para estruturar um negócio digital ético e de extremo valor. O segredo para sair do zero absoluto e pensar como um empresário próspero.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    duration: "4 Horas de Conteúdo",
    lessonsCount: 12
  },
  {
    id: 2,
    title: "Posicionamento Magnético no Digital",
    tag: "Atração Orgânica",
    description: "Esqueça correr atrás de clientes. Aprenda a estruturar um perfil que atrai compradores qualificados todos os dias pela sua autoridade e propósito.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    duration: "6 Horas de Conteúdo",
    lessonsCount: 15
  },
  {
    id: 3,
    title: "Máquina de Vendas Orgânicas na Shopee",
    tag: "Marketplaces Gigantes",
    description: "Como explorar o algoritmo da Shopee para realizar vendas em massa. Estratégias validadas de tráfego orgânico fáceis de aplicar pelo celular.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    duration: "5 Horas de Conteúdo",
    lessonsCount: 10
  },
  {
    id: 4,
    title: "Estratégia de Escala no Mercado Livre (Meli)",
    tag: "Consolidando Resultados",
    description: "Aprenda a cadastrar, otimizar e escalar suas ofertas no marketplace mais respeitado da América Latina, gerando receita recorrente.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    duration: "7 Horas de Conteúdo",
    lessonsCount: 18
  },
  {
    id: 5,
    title: "A Revolução do TikTok Shop",
    tag: "Estratégia Exclusiva",
    description: "Domine antes de todos a nova mina de ouro digital. Crie vídeos curtos, posicione tendências e transforme visualizações em comissões gordas no piloto automático.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    duration: "5 Horas de Conteúdo",
    lessonsCount: 14
  },
  {
    id: 6,
    title: "Copywriting Sensorial para Afiliados com Propósito",
    tag: "Persuasão Ética",
    description: "Aprenda roteiros e scripts prontos para fechar vendas no um a um de forma natural, gerando conexão profunda e desejo imediato no seu cliente.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    duration: "8 Horas de Conteúdo",
    lessonsCount: 16
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    number: "01",
    title: "Do Absoluto Zero ao Avançado",
    description: "Você não precisa ter experiência prévia ou diplomas. O treinamento pega você pela mão e ensina os primeiros passos de forma incrivelmente simples e prática."
  },
  {
    id: 2,
    number: "02",
    title: "Estratégia Focada em Marketplaces",
    description: "Aprenda o caminho 100% validado para lucrar de verdade com gigantes de vendas como Shopee, Mercado Livre e a nova febre do TikTok Shop."
  },
  {
    id: 3,
    number: "03",
    title: "Liberdade Geográfica e de Tempo",
    description: "Monte sua própria rotina de trabalho. Tudo o que você precisa é apenas de um telefone celular conectado à internet para gerenciar suas vendas de qualquer canto do mundo."
  },
  {
    id: 4,
    number: "04",
    title: "Posicionamento e Propósito",
    description: "Vá muito além de ficar simplesmente copiando e colando links vazios de afiliados. Aprenda a se posicionar no digital de forma consistente, atraindo clientes fiéis e recorrentes."
  },
  {
    id: 5,
    number: "05",
    title: "Suporte Dedicado de Verdade",
    description: "Esqueça de vez aquela clássica sensação de estar sozinho após a compra de um curso. Tenha acesso a um suporte estruturado diretamente com quem tem resultados para acelerar o seu progresso."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Amanda Silva",
    role: "Aluna Mentoria AP",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    text: "A Mentoria AP abriu completamente minha mente. Antes eu tentava vender sem rumo, mas depois que entendi o posicionamento que a Isa ensina, fiz minhas primeiras vendas na Shopee logo na primeira semana de aplicação!",
    location: "Rio de Janeiro - RJ",
    stars: 5
  },
  {
    id: 2,
    name: "Lucas Mendes",
    role: "Aluno Mentoria AP",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    text: "Trabalhar apenas usando o celular parecia uma grande ilusão de internet pra mim, mas o método pautado em propósito real me deu um norte e uma nova profissão altamente lucrativa. O suporte é maravilhoso e sempre prestativo!",
    location: "Salvador - BA",
    stars: 5
  },
  {
    id: 3,
    name: "Beatriz Rocha",
    role: "Aluna Mentoria AP",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    text: "Eu não entendia absolutamente nada sobre TikTok Shop ou Mercado Livre quando comecei. Graças a mentoria, hoje eu já vejo as vendas digitais como a minha principal fonte de renda familiar mensal. Valeu cada centavo investido!",
    location: "Curitiba - PR",
    stars: 5
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Preciso aparecer nas redes sociais?",
    answer: "Não necessariamente! A Mentoria AP ensina estratégias tanto para quem deseja se posicionar como autoridade quanto estratégias de tráfego direto e lojas sem aparecer (dark profiles), operando diretamente nos bastidores."
  },
  {
    question: "Quanto tempo preciso dedicar por dia?",
    answer: "Com apenas 1 a 2 horas por dia focadas, você já consegue aplicar o método passo a passo e começar a colher os primeiros resultados financeiros no digital."
  },
  {
    question: "Funciona mesmo se eu estiver começando do absoluto zero?",
    answer: "Sim! Todo o método foi desenhado especificamente para quem nunca trabalhou com vendas online antes. Explicamos cada termo técnico de forma simples e direta."
  },
  {
    question: "O suporte é direto com a equipe?",
    answer: "Sim! Oferecemos um dos suportes mais elogiados do mercado, com acompanhamento de dúvidas em tempo recorde de segunda a sábado para garantir que você nunca fique travado."
  },
  {
    question: "Qual a garantia que tenho?",
    answer: "Oferecemos 7 dias completos de garantia incondicional. Se por qualquer motivo você achar que a mentoria não é para você, basta solicitar o reembolso e devolvemos 100% do seu dinheiro."
  }
];
