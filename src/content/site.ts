export const siteConfig = {
  name: "Pedro Queiroz",
  brand: "Pedro Queiroz Video Maker",
  city: "Araguaina - TO",
  role: "Video Maker Mobile em Araguaina - TO",
  whatsappNumber: "5563992435592",
  whatsappUrl: "https://wa.me/5563992435592",
  instagramUrl: "https://www.instagram.com/pedrovideomakerr/",
  email: "[TEXTO: inserir e-mail profissional aqui]",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pedroqueiroz.com.br"
};

export const finalWhatsappMessage =
  "Olá, vi seu site e quero fazer um orçamento!";

export const finalWhatsappUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(
  finalWhatsappMessage
)}`;

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Servicos", href: "#servicos" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contato", href: "#contato" }
] as const;

export const services = [
  {
    id: "reels",
    title: "Reels para Instagram",
    description:
      "[TEXTO: videos verticais curtos para apresentar produtos, bastidores, ofertas e rotina da marca.]"
  },
  {
    id: "empresas",
    title: "Videos para empresas",
    description:
      "[TEXTO: videos institucionais curtos para negocios locais, prestadores de servico e equipes comerciais.]"
  },
  {
    id: "eventos",
    title: "Cobertura de eventos",
    description:
      "[TEXTO: registros dinamicos para eventos, lancamentos, encontros e acoes presenciais.]"
  },
  {
    id: "shorts",
    title: "TikTok e YouTube Shorts",
    description:
      "[TEXTO: conteudos pensados para ritmo de rede social, retencao e chamada para acao.]"
  }
] as const;

export const portfolioProjects = [
  {
    title: "[TEXTO: Projeto 01]",
    category: "Reels",
    description: "[TEXTO: breve contexto do video e resultado esperado.]",
    href: siteConfig.instagramUrl,
    orientation: "vertical"
  },
  {
    title: "[TEXTO: Projeto 02]",
    category: "Empresa",
    description: "[TEXTO: substituir por descricao curta do trabalho.]",
    href: siteConfig.instagramUrl,
    orientation: "vertical"
  },
  {
    title: "[TEXTO: Projeto 03]",
    category: "Evento",
    description: "[TEXTO: substituir por descricao curta da cobertura.]",
    href: siteConfig.instagramUrl,
    orientation: "vertical"
  },
  {
    title: "[TEXTO: Projeto 04]",
    category: "Shorts",
    description: "[TEXTO: substituir por descricao curta do conteudo.]",
    href: siteConfig.instagramUrl,
    orientation: "vertical"
  }
] as const;

export const testimonials = [
  {
    quote:
      "[TEXTO: inserir depoimento curto de cliente sobre atendimento, qualidade e agilidade.]",
    author: "[TEXTO: Nome do cliente]",
    role: "[TEXTO: Empresa ou segmento]"
  },
  {
    quote:
      "[TEXTO: inserir depoimento curto de cliente sobre o resultado dos videos.]",
    author: "[TEXTO: Nome do cliente]",
    role: "[TEXTO: Empresa ou segmento]"
  }
] as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.brand,
  description:
    "Video maker mobile em Araguaina - TO para reels, videos curtos, empresas e eventos.",
  areaServed: {
    "@type": "City",
    name: "Araguaina"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Araguaina",
    addressRegion: "TO",
    addressCountry: "BR"
  },
  url: siteConfig.baseUrl,
  sameAs: [siteConfig.instagramUrl],
  telephone: "+55 63 99243-5592",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "orcamentos",
    telephone: "+55 63 99243-5592",
    url: finalWhatsappUrl
  }
};
