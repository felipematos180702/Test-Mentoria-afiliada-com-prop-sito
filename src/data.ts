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
    title: "Mentalidade, Propósito e Direção",
    tag: "MÓDULO 01",
    description: "Desenvolva a mentalidade necessária para construir resultados consistentes, alinhar seus objetivos e iniciar sua jornada no digital com clareza, confiança e visão de longo prazo.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    duration: "Conteúdo Prático",
    lessonsCount: 8
  },
  {
    id: 2,
    title: "Trabalhando com Grandes Marcas",
    tag: "MÓDULO 02",
    description: "Aprenda como se posicionar profissionalmente, criar parcerias estratégicas e aproveitar oportunidades com grandes marcas e marketplaces para potencializar seus resultados.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    duration: "Modelos de Marcas",
    lessonsCount: 10
  },
  {
    id: 3,
    title: "Gestão de Tempo e Inteligência Financeira",
    tag: "MÓDULO 03",
    description: "Organize sua rotina, aumente sua produtividade e aprenda a administrar seus ganhos para construir uma operação sustentável e lucrativa.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    duration: "Gestão & Métricas",
    lessonsCount: 8
  },
  {
    id: 4,
    title: "Inteligência Artificial e Produção sem Aparecer",
    tag: "MÓDULO 04",
    description: "Descubra como utilizar ferramentas de Inteligência Artificial para criar conteúdos, automatizar tarefas e gerar resultados mesmo sem precisar mostrar o rosto.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    duration: "Automação com IA",
    lessonsCount: 12
  },
  {
    id: 5,
    title: "Escala com Tráfego Pago",
    tag: "MÓDULO 05",
    description: "Aprenda a acelerar seus resultados utilizando anúncios estratégicos para alcançar mais pessoas, gerar mais vendas e escalar sua operação de forma inteligente.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    duration: "Estratégia de Tráfego",
    lessonsCount: 14
  },
  {
    id: 6,
    title: "Produtos Físicos e Digitais",
    tag: "MÓDULO 06",
    description: "Aprenda a trabalhar com diferentes modelos de negócio, diversificando suas fontes de renda através da venda de produtos físicos e digitais.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    duration: "Diversificação",
    lessonsCount: 10
  },
  {
    id: 7,
    title: "Comunidade, Suporte e Crescimento Contínuo",
    tag: "MÓDULO 07",
    description: "Tenha acesso a uma comunidade ativa, suporte próximo, encontros ao vivo e atualizações constantes para continuar evoluindo e crescendo no digital com acompanhamento durante sua jornada.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    duration: "Comunidade AP",
    lessonsCount: 15
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    number: "01",
    title: "Comece do Absoluto Zero",
    description: "Você não precisa ter experiência, audiência ou conhecimento técnico. A AP foi estruturada para ajudar qualquer pessoa a iniciar sua jornada no digital com clareza e direção."
  },
  {
    id: 2,
    number: "02",
    title: "Liberdade de Tempo e Localização",
    description: "Construa uma fonte de renda que permita trabalhar de onde estiver, organizando sua rotina de forma mais flexível e alinhada aos seus objetivos de vida."
  },
  {
    id: 3,
    number: "03",
    title: "Estratégias que Geram Resultados",
    description: "Aprenda métodos práticos e atualizados para atuar no mercado digital, utilizando diferentes oportunidades para construir resultados consistentes."
  },
  {
    id: 4,
    number: "04",
    title: "Propósito e Posicionamento",
    description: "Desenvolva sua presença digital com autenticidade, construindo autoridade, conexão e um negócio alinhado aos seus valores."
  },
  {
    id: 5,
    number: "05",
    title: "Comunidade e Suporte Real",
    description: "Você não estará sozinho nessa jornada. Conte com acompanhamento próximo, suporte para dúvidas e uma comunidade que cresce, compartilha experiências e evolui junto."
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
    answer: "Não necessariamente. A Mentoria AP ensina estratégias para quem deseja aparecer e também para quem prefere atuar nos bastidores. Você aprenderá métodos sem exposição pessoal e utilizará ferramentas de Inteligência Artificial para criar conteúdos e potencializar seus resultados no digital."
  },
  {
    question: "Funciona mesmo se eu estiver começando do absoluto zero?",
    answer: "Sim! A Mentoria AP foi desenvolvida para pessoas que estão dando os primeiros passos no digital. Você terá acesso a um método estruturado, aulas passo a passo, suporte para dúvidas e uma comunidade pronta para caminhar com você durante sua jornada."
  },
  {
    question: "Quanto tempo preciso dedicar por dia?",
    answer: "A mentoria foi pensada para se adaptar à sua rotina. Com dedicação diária e consistência, mesmo que você tenha apenas algumas horas disponíveis, já é possível aplicar as estratégias e evoluir no mercado digital no seu próprio ritmo."
  },
  {
    question: "O suporte é direto com a equipe?",
    answer: "Sim! Na Mentoria AP você não fica sozinho após a compra. Oferecemos suporte humanizado através de grupos exclusivos no WhatsApp, separados por níveis para proporcionar um acompanhamento mais eficiente. Você também terá acesso a suporte para dúvidas, uma comunidade ativa e encontros semanais ao vivo para receber direcionamento e acelerar seu desenvolvimento no digital. 🚀"
  },
  {
    question: "Qual a garantia que tenho?",
    answer: "Oferecemos 7 dias completos de garantia incondicional. Se por qualquer motivo você achar que a mentoria não é para você, basta solicitar o reembolso e devolvemos 100% do seu dinheiro."
  }
];
