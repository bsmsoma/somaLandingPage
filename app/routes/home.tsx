import type { Route } from "./+types/home";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "~/contexts/LanguageContext";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import { FaRocket, FaStore, FaCogs, FaBrain, FaCode } from "react-icons/fa";

export function meta({ }: Route.MetaArgs) {
    const baseUrl = "https://brunnomota.com.br";
    const imageUrl = `${baseUrl}/assets/image/optimized/profile-optimized.jpg`;

    return [
        { title: "Brunno Mota — Soluções Digitais que Convertem" },
        { name: "description", content: "Landing pages de alta conversão, e-commerces, automações com IA e sistemas personalizados. Presença digital que gera resultado real para o seu negócio." },
        { name: "keywords", content: "landing page, e-commerce, automação, inteligência artificial, desenvolvimento web, conversão, presença digital, sistema personalizado" },
        { name: "author", content: "Brunno Mota" },
        { name: "robots", content: "index, follow" },
        { property: "og:site_name", content: "Brunno Mota" },
        { property: "og:title", content: "Brunno Mota — Soluções Digitais que Convertem" },
        { property: "og:description", content: "Landing pages de alta conversão, e-commerces, automações com IA e sistemas personalizados. Presença digital que gera resultado real." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: baseUrl },
        { property: "og:image", content: imageUrl },
        { property: "og:image:secure_url", content: imageUrl },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Brunno Mota — Soluções Digitais" },
        { name: "cache-control", content: "public, max-age=31536000" },
    ];
}

type Lang = "pt" | "en";

const serviceIcons = {
    rocket: <FaRocket />,
    store: <FaStore />,
    cogs: <FaCogs />,
    brain: <FaBrain />,
    code: <FaCode />,
} as const;

const t = {
    hero: {
        headline: {
            en: "Your business grows when your digital presence converts.",
            pt: "Seu negócio cresce quando sua presença digital converte.",
        },
        subheadline: {
            en: "I build systems, interfaces, and automations that generate real results — not just beautiful pages.",
            pt: "Construo sistemas, interfaces e automações que geram resultado real — não só páginas bonitas.",
        },
        ctaPrimary: { en: "View projects", pt: "Ver projetos" },
        ctaSecondary: { en: "Talk about your project", pt: "Falar sobre seu projeto" },
        microcopy: {
            en: "No long contracts. No bureaucracy. Just delivery.",
            pt: "Sem contrato longo. Sem processo burocrático. Só entrega.",
        },
    },
    services: {
        title: { en: "What I build for you", pt: "O que construo para você" },
        items: [
            {
                icon: "rocket" as const,
                title: { en: "High-Conversion Landing Pages", pt: "Landing Pages de Alta Conversão" },
                description: {
                    en: "Pages built to turn visitors into customers. Copy, design, and performance working together to maximize results.",
                    pt: "Páginas criadas para transformar visitante em cliente. Copy, design e performance trabalhados juntos para maximizar resultado.",
                },
                microcopy: {
                    en: "More visitors becoming customers — without increasing traffic.",
                    pt: "Mais visitantes virando clientes — sem aumentar o tráfego.",
                },
            },
            {
                icon: "store" as const,
                title: { en: "E-commerces and Online Stores", pt: "E-commerces e Lojas Digitais" },
                description: {
                    en: "Online sales infrastructure that works while you sleep. Fast, reliable, and ready to scale.",
                    pt: "Estrutura de venda online que funciona enquanto você dorme. Rápido, confiável e pronto para escalar.",
                },
                microcopy: {
                    en: "Your store open 24/7. Selling automatically.",
                    pt: "Sua loja aberta 24h. Vendendo no automático.",
                },
            },
            {
                icon: "cogs" as const,
                title: { en: "Systems and Automations", pt: "Sistemas e Automações" },
                description: {
                    en: "I eliminate repetitive tasks from your team with smart automations. Less operational cost, more focus on what matters.",
                    pt: "Elimino tarefas repetitivas do seu time com automações inteligentes. Menos custo operacional, mais foco no que importa.",
                },
                microcopy: {
                    en: "Hours saved every week. Automatically.",
                    pt: "Horas economizadas toda semana. Automaticamente.",
                },
            },
            {
                icon: "brain" as const,
                title: { en: "AI Applied to Business", pt: "IA Aplicada ao Negócio" },
                description: {
                    en: "I integrate AI where it generates real impact: support, analysis, content generation, internal processes.",
                    pt: "Integro inteligência artificial onde ela gera impacto real: atendimento, análise, geração de conteúdo, processos internos.",
                },
                microcopy: {
                    en: "Not a trend. A competitive advantage now.",
                    pt: "Não é tendência. É vantagem competitiva agora.",
                },
            },
            {
                icon: "code" as const,
                title: { en: "Custom Solutions", pt: "Soluções Personalizadas" },
                description: {
                    en: "When the problem is specific, the solution needs to be too. I develop custom systems for your context.",
                    pt: "Quando o problema é específico, a solução precisa ser também. Desenvolvo sistemas sob medida para o seu contexto.",
                },
                microcopy: {
                    en: "Built for your business. Not adapted from someone else's.",
                    pt: "Feito para o seu negócio. Não adaptado do de outro.",
                },
            },
        ],
    },
    differentials: {
        title: { en: "Why it works", pt: "Por que funciona" },
        items: [
            {
                title: { en: "Conversion-focused, not aesthetics", pt: "Foco em conversão, não em estética" },
                description: {
                    en: "Pretty design that doesn't sell is just decoration. Every visual decision has commercial intention behind it.",
                    pt: "Design bonito que não vende é decoração. Cada decisão visual tem intenção comercial por trás.",
                },
            },
            {
                title: { en: "Delivery that scales with you", pt: "Entrega que escala com você" },
                description: {
                    en: "What I build today won't become a problem tomorrow. Systems designed to grow alongside the business.",
                    pt: "O que construo hoje não vira problema amanhã. Sistemas pensados para crescer junto com o negócio.",
                },
            },
            {
                title: { en: "No noise in the process", pt: "Sem ruído no processo" },
                description: {
                    en: "Direct communication, respected deadlines, deliveries that make sense for the buyer — not just the coder.",
                    pt: "Comunicação direta, prazos respeitados e entregas que fazem sentido para quem está comprando — não só para quem está codando.",
                },
            },
            {
                title: { en: "Measurable results", pt: "Resultado mensurável" },
                description: {
                    en: "Speed, conversion rate, load time, leads generated. Everything trackable. Everything purposeful.",
                    pt: "Velocidade, taxa de conversão, tempo de carregamento, leads gerados. Tudo rastreável. Tudo com propósito.",
                },
            },
        ],
    },
    finalCta: {
        headline: { en: "Ready to grow?", pt: "Pronto para crescer?" },
        subheadline: {
            en: "Tell me the challenge. In 48 hours you get a clear proposal, no runaround.",
            pt: "Me conta o desafio. Em 48h você tem uma proposta clara, sem enrolação.",
        },
        cta: { en: "Start now", pt: "Começar agora" },
        microcopy: {
            en: "I respond personally. No generic form.",
            pt: "Respondo pessoalmente. Sem formulário genérico.",
        },
    },
};

export default function Home() {
    const { theme } = useTheme();
    const { language } = useLanguage();
    const lang = language as Lang;

    return (
        <div className={`home-page ${theme}`}>

            {/* ── Hero ── */}
            <section className={`hero-section ${theme}`}>
                <div className="hero-content">
                    <div className={`hero-profile-image ${theme}`} />
                    <div className="hero-text">
                        <h1 className={`hero-headline ${theme}`}>
                            {t.hero.headline[lang]}
                        </h1>
                        <p className={`hero-subheadline ${theme}`}>
                            {t.hero.subheadline[lang]}
                        </p>
                        <div className="hero-ctas">
                            <Link to="/projects" className={`btn-primary ${theme}`}>
                                {t.hero.ctaPrimary[lang]} <FiArrowRight />
                            </Link>
                            <Link to="/contact" className={`btn-secondary ${theme}`}>
                                {t.hero.ctaSecondary[lang]}
                            </Link>
                        </div>
                        <p className={`hero-microcopy ${theme}`}>
                            {t.hero.microcopy[lang]}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Services ── */}
            <section className={`services-section ${theme}`}>
                <h2 className={`section-title ${theme}`}>{t.services.title[lang]}</h2>
                <div className="services-grid">
                    {t.services.items.map((service, i) => (
                        <div key={i} className={`service-card ${theme}`}>
                            <div className={`service-icon ${theme}`}>
                                {serviceIcons[service.icon]}
                            </div>
                            <h3 className="service-title">{service.title[lang]}</h3>
                            <p className="service-description">{service.description[lang]}</p>
                            <span className={`service-microcopy ${theme}`}>{service.microcopy[lang]}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Differentials ── */}
            <section className={`differentials-section ${theme}`}>
                <h2 className={`section-title ${theme}`}>{t.differentials.title[lang]}</h2>
                <div className="differentials-grid">
                    {t.differentials.items.map((item, i) => (
                        <div key={i} className={`differential-item ${theme}`}>
                            <span className={`differential-number ${theme}`}>0{i + 1}</span>
                            <h3 className="differential-title">{item.title[lang]}</h3>
                            <p className="differential-description">{item.description[lang]}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section className={`final-cta-section ${theme}`}>
                <h2 className="final-cta-headline">{t.finalCta.headline[lang]}</h2>
                <p className="final-cta-subheadline">{t.finalCta.subheadline[lang]}</p>
                <Link to="/contact" className="btn-cta-final">
                    {t.finalCta.cta[lang]} <FiArrowRight />
                </Link>
                <p className="final-cta-microcopy">{t.finalCta.microcopy[lang]}</p>
            </section>

        </div>
    );
}
