import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  Zap,
  TrendingUp,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Target,
  Lightbulb,
  BarChart3,
  Rocket,
  ArrowRight,
} from 'lucide-react';

/**
 * Design Philosophy: Modernismo Corporativo Dinâmico com UX/UI Melhorado
 * - Navegação intuitiva por seções
 * - Animações chamativas que guiam a atenção
 * - Botões arredondados com hover effects
 * - Ícones interativos e visuais
 * - Footer dinâmico com contacto e acesso rápido
 * - Formulário externo para inscrição
 */

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const FORM_URL = 'https://forms.google.com/forms/d/e/1FAIpQLSd_example/viewform';

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Por que Participar', href: '#beneficios' },
    { label: 'Conteúdo', href: '#conteudo' },
    { label: 'Público-Alvo', href: '#publico' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      const newVisible = new Set<string>();

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          newVisible.add(section.id);
        }
      });

      setVisibleSections(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-soft z-50 transition-all duration-300">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              Webinar B2B
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground font-medium hover:text-accent transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block px-6 py-2.5 bg-accent text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-1 animate-pulse-glow"
            >
              Inscrever-se
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-slide-down">
            <div className="container py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-4 py-2 text-foreground hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="block w-full px-4 py-2 bg-accent text-white rounded-full font-semibold text-center transition-all duration-300 hover:shadow-lg"
              >
                Inscrever-se
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        data-section
        className="pt-32 pb-20 px-4 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-50 rounded-full -ml-36 -mb-36 opacity-50"></div>

        <div className="container relative z-10 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible('hero')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full">
                <span className="text-primary font-semibold text-sm">
                  Webinar Estratégico
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Tendências de Marketing B2B para 2026 em Angola
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Prepare a sua empresa hoje para competir e crescer no mercado B2B de amanhã.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-accent text-white rounded-full font-semibold text-center transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-2 inline-flex items-center justify-center gap-2 group animate-pulse-glow"
                >
                  Inscrever-se Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#conteudo"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-center hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-2"
                >
                  Saiba Mais
                </a>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible('hero')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 gradient-blue rounded-3xl opacity-20 blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 shadow-medium">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Data do Evento</p>
                        <p className="font-bold text-lg">11 de Fevereiro 2026</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Duração</p>
                        <p className="font-bold text-lg">60 minutos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Formato</p>
                        <p className="font-bold text-lg">Online (Zoom)</p>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-blue-200">
                      <p className="text-sm text-muted-foreground mb-2">Inscrição</p>
                      <p className="font-bold text-lg text-accent">100% Gratuita</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section
        id="beneficios"
        data-section
        className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container max-w-6xl">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible('beneficios')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Por que participar deste webinar?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              As empresas B2B que se antecipam às tendências ganham vantagem competitiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Decisões Estratégicas',
                description: 'Tomam decisões mais estratégicas baseadas em dados e tendências reais',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Zap,
                title: 'Otimização de Investimentos',
                description: 'Otimizam investimentos em marketing e vendas com ROI mensurável',
                color: 'from-yellow-500 to-yellow-600',
              },
              {
                icon: Target,
                title: 'Autoridade no Mercado',
                description: 'Fortalecem autoridade e posicionamento no mercado B2B angolano',
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: Rocket,
                title: 'Vantagem Competitiva',
                description: 'Criam vantagem competitiva sustentável e duradoura',
                color: 'from-red-500 to-red-600',
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 bg-white rounded-3xl shadow-soft hover:shadow-medium transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
                    isVisible('beneficios')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    ✔ {benefit.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section
        id="conteudo"
        data-section
        className="py-20 px-4 bg-white"
      >
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible('conteudo')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                O que você vai aprender
              </h2>
              <div className="space-y-4">
                {[
                  'As principais tendências globais de marketing B2B e como aplicá-las em Angola',
                  'Como está a evoluir o processo de decisão e compra B2B até 2026',
                  'Estratégias de posicionamento, autoridade e geração de oportunidades',
                  'O papel do marketing digital, conteúdo estratégico e tecnologia',
                  'O que líderes e gestores devem começar a implementar ainda hoje',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1 shadow-soft group-hover:scale-125 transition-transform duration-300">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible('conteudo')
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="bg-gradient-to-br from-accent/10 to-blue-50 rounded-3xl p-12 relative overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-accent opacity-10 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 shadow-soft">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Conteúdo Prático e Adaptado
                  </h3>
                  <p className="text-lg text-foreground mb-6 leading-relaxed">
                    Visão clara, prática e adaptada à realidade angolana, sem teorias genéricas ou promessas vazias.
                  </p>
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <p className="text-sm text-muted-foreground mb-2">
                      Especialista em Marketing B2B
                    </p>
                    <p className="font-bold text-foreground">
                      Estratégias comprovadas para o mercado africano
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section
        id="publico"
        data-section
        className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container max-w-6xl">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible('publico')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Para quem é este webinar
            </h2>
            <p className="text-xl text-muted-foreground">
              Se a sua empresa vende para outras empresas, este conteúdo é para si
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'CEOs, Diretores e Administradores',
              'Gestores de Marketing e Comercial',
              'Empresários e decisores B2B',
              'Profissionais que atuam com vendas consultivas',
              'Empreendedores em crescimento',
              'Consultores e especialistas B2B',
            ].map((audience, index) => (
              <div
                key={index}
                className={`group p-6 bg-white rounded-2xl shadow-soft border-l-4 border-accent transition-all duration-500 cursor-pointer hover:shadow-lg hover:scale-105 hover:-translate-y-2 ${
                  isVisible('publico')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <p className="font-semibold text-foreground text-center group-hover:text-accent transition-colors">
                  {audience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section
        id="inscricao"
        data-section
        className="py-20 px-4 bg-white"
      >
        <div className="container max-w-2xl">
          <div
            className={`text-center transition-all duration-700 ${
              isVisible('inscricao')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Garanta a sua vaga
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Inscrição 100% gratuita. Vagas limitadas.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-medium">
              <p className="text-lg text-foreground mb-8">
                Clique no botão abaixo para preencher o formulário de inscrição e garantir a sua participação no webinar estratégico.
              </p>

              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 bg-gradient-accent text-accent rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-2 shadow-soft group animate-pulse-glow"
              >
                <span className="flex items-center gap-2 justify-center">
                  Preencher Formulário de Inscrição
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" text-pink-500/>
                </span>
              </a>

              <p className="text-sm text-muted-foreground mt-6">
                ✓ Inscrição 100% gratuita
                <br />✓ Sem compromissos
                <br />✓ Acesso à gravação incluído
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        data-section
        className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container max-w-4xl">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible('faq')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'O webinar é gratuito?',
                answer:
                  'Sim. A participação é totalmente gratuita, mediante inscrição prévia. Vagas limitadas.',
              },
              {
                question: 'O webinar será gravado?',
                answer:
                  'Sim. Os inscritos terão acesso à gravação após o evento, podendo assistir quando melhor lhes convier.',
              },
              {
                question: 'Quem pode participar?',
                answer:
                  'Empresários, gestores, diretores e profissionais que atuam no mercado B2B. Se a sua empresa vende para outras empresas, este conteúdo é para si.',
              },
              {
                question: 'Como recebo o acesso ao Zoom?',
                answer:
                  'O link de acesso será enviado por email após a confirmação da inscrição, com 24 horas de antecedência do evento.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className={`group p-6 bg-white rounded-2xl shadow-soft cursor-pointer transition-all duration-500 hover:shadow-lg hover:border-l-4 hover:border-accent ${
                  isVisible('faq')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <summary className="flex items-center justify-between font-semibold text-foreground">
                  <span className="group-hover:text-accent transition-colors">{faq.question}</span>
                  <span className="text-accent group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <p className="text-muted-foreground mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section
        id="cta-final"
        data-section
        className="py-20 px-4 bg-gradient-accent text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -ml-36 -mb-36"></div>

        <div className="container max-w-4xl relative z-10 text-center">
          <div
            className={`transition-all duration-700 ${
              isVisible('cta-final')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prepare a sua empresa para o futuro do marketing B2B em Angola
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Inscreva-se agora e reserve a sua vaga no webinar estratégico
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-white text-accent rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-110 hover:-translate-y-2 shadow-soft group"
            >
              <span className="flex items-center gap-2 justify-center">
                Inscrever-se Agora
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contacto"
        data-section
        className="bg-foreground text-white py-16 px-4"
      >
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div
              className={`transition-all duration-700 ${
                isVisible('contacto')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">W</span>
                </div>
                <span className="font-bold text-lg">Webinar B2B</span>
              </div>
              <p className="text-gray-300">
                Tendências de Marketing B2B para 2026 em Angola
              </p>
            </div>

            {/* Quick Links */}
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible('contacto')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h4 className="font-bold mb-4 text-lg">Acesso Rápido</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Details */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible('contacto')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h4 className="font-bold mb-4 text-lg">Detalhes do Evento</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-accent" />
                  <span className="text-gray-300">11 de Fevereiro 2026</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-gray-300">60 minutos</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-gray-300">Online (Zoom)</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible('contacto')
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h4 className="font-bold mb-4 text-lg">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <a
                    href="mailto:info@webinar-b2b.ao"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@webinar-b2b.ao
                  </a>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <a
                    href="tel:+244923456789"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +244 923 456 789
                  </a>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <MapPin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">Luanda, Angola</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 py-8 border-t border-gray-700">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-accent text-white rounded-full font-semibold text-center transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <span className="flex items-center justify-center gap-2">
                Inscrever-se Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#hero"
              className="px-6 py-3 border-2 border-accent text-white rounded-full font-semibold text-center transition-all duration-300 hover:bg-accent hover:shadow-lg hover:scale-105"
            >
              Voltar ao Topo
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>
              &copy; 2026 Webinar - Impêrio Digital. Todos os direitos reservados.
            </p>
<p className="text-sm mt-2">
  Desenvolvido por{" "}
  <a
    href="https://www.instagram.com/adilson.designer_/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:opacity-80"
  >
    Adilson Fernandes
  </a>
</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
