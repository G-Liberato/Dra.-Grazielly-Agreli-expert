
import React from 'react';
import { 
  Instagram, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  ChevronRight,
  UserCheck,
  MessageCircle,
  Map
} from 'lucide-react';
import { IMAGES, INSTAGRAM_LINK, WHATSAPP_LINK } from './constants';
import { CTAButton } from './components/CTAButton';
import { Gallery } from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-[#FDF2F2]">
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="bg-logo-pattern w-full h-full"></div>
      </div>

      <main className="relative z-10 overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
          {/* Hero Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
          
          <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">
            {/* 1. Location and Names */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="inline-flex items-center justify-center gap-2 text-gray-500 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                <MapPin size={14} className="text-[#5B0D15]" /> Palmas - TO
              </div>
              <h1 className="text-4xl md:text-7xl text-gray-900 leading-tight max-w-3xl">
                Eu sou <span className="text-gray-800 font-bold italic">Grazielly Agreli</span>,<br className="hidden md:block" /> especialista em <span className="text-[#5B0D15]">Resinas e Estética oral</span>.
              </h1>
            </div>

            {/* 2. Hero Image */}
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-[#FDF2F2] rounded-full transform scale-110 -z-10 blur-2xl opacity-50"></div>
              <div className="relative w-64 h-64 md:w-[450px] md:h-[450px]">
                <img 
                  src={IMAGES.hero} 
                  alt="Dra. Grazielly Agreli" 
                  className="w-full h-full object-cover rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] border-white"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-2 md:bottom-8 md:-right-8 bg-white p-3 md:p-5 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100 animate-bounce-slow">
                   <div className="w-10 h-10 bg-[#FDF2F2] rounded-full flex items-center justify-center text-[#5B0D15]">
                     <Sparkles size={20} />
                   </div>
                   <div className="text-left">
                     <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">Transformação</p>
                     <p className="text-sm md:text-base font-bold text-gray-800 italic">Sorriso Natural</p>
                   </div>
                </div>
              </div>
            </div>

            {/* 3. Subheadline and CTA */}
            <div className="flex flex-col items-center gap-8 max-w-2xl">
              <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-light">
                Minha missão é devolver a sua vontade de sorrir com segurança, naturalidade e o cuidado premium que você merece.
              </p>
              <CTAButton className="w-full max-w-md" />
            </div>
          </div>
        </section>

        {/* AUTHORITY / WHO I AM */}
        <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img 
                src={IMAGES.expert[0]} 
                alt="Autoridade" 
                className="rounded-2xl shadow-xl w-full max-w-sm mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                 <div className="glass-card p-4 rounded-xl shadow-lg flex items-center gap-3">
                   <div className="w-10 h-10 bg-[#FDF2F2] rounded-full flex items-center justify-center text-[#5B0D15]">
                     <UserCheck size={20} />
                   </div>
                   <div className="text-sm">
                     <p className="font-bold text-[#4A0E0E]">Especialista</p>
                     <p className="text-gray-500 text-xs">Resinas Estéticas</p>
                   </div>
                 </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl text-gray-800">Cuidado humano, foco total em você.</h2>
              <div className="w-20 h-1 bg-[#5B0D15]"></div>
              <p className="text-gray-600 leading-relaxed italic text-lg">
                "Não acredito em sorrisos 'artificiais'. Meu trabalho é entender a sua história, seus desejos e construir algo que seja único e real."
              </p>
              <ul className="grid gap-4">
                {[
                  "Atendimento personalizado e humanizado.",
                  "Técnicas modernas em resina composta.",
                  "Foco absoluto na preservação dental.",
                  "Ambiente planejado para seu total conforto."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 size={20} className="text-[#5B0D15] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* RESULTS GRID */}
        <Gallery />

        {/* WHY TRUST ME (Bloco 4) */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Por que confiar em mim?</h2>
              <div className="w-20 h-1 bg-[#5B0D15] mx-auto"></div>
            </div>

            <div className="mb-16 flex justify-center">
              <div className="relative max-w-2xl w-full">
                <img 
                  src="https://i.imgur.com/dKMTuYF.png" 
                  alt="Dra. Grazielly em atendimento" 
                  className="rounded-3xl shadow-xl w-full object-cover h-[300px] md:h-[450px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
                <p className="absolute bottom-6 left-6 right-6 text-white text-lg md:text-xl font-serif italic">
                  Excelência técnica unida ao olhar artístico.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: <ShieldCheck className="text-[#5B0D15]" size={32} />, 
                  title: "Avaliação Honestíssima", 
                  desc: "Indico apenas o que é necessário para a sua saúde e estética." 
                },
                { 
                  icon: <Sparkles className="text-[#5B0D15]" size={32} />, 
                  title: "Resultado Natural", 
                  desc: "Fuja do aspecto artificial. Valorizamos a harmonia do seu rosto." 
                },
                { 
                  icon: <Heart className="text-[#5B0D15]" size={32} />, 
                  title: "Foco no Bem-estar", 
                  desc: "Todo o processo é pensado para ser leve e sem traumas." 
                }
              ].map((card, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center md:text-left">
                  <div className="mb-6 flex justify-center md:justify-start">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-gray-700 mb-6 font-medium">Sua transformação começa com uma conversa clara e gratuita.</p>
              <CTAButton />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-16">Como funciona sua primeira consulta</h2>
            
            <div className="grid gap-12 relative">
              <div className="hidden md:block absolute top-0 bottom-0 left-[50%] w-px bg-gray-100 -z-10"></div>
              
              {[
                { step: "01", title: "Contato via WhatsApp", desc: "Você clica no botão e inicia uma conversa rápida comigo ou com minha equipe." },
                { step: "02", title: "Agendamento Simples", desc: "Escolhemos o melhor horário para você vir ao consultório em Palmas." },
                { step: "03", title: "Sua Avaliação Gratuita", desc: "Analisamos seu caso detalhadamente, sem compromisso, e montamos seu plano." }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-20 h-20 bg-[#FDF2F2] rounded-full flex items-center justify-center text-[#5B0D15] text-2xl font-bold border-2 border-[#F5D5D5] flex-shrink-0">
                    {item.step}
                  </div>
                  <div className={`flex-1 text-center ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEHIND THE SCENES */}
        <section className="py-20 px-4 bg-gray-50/80">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-center mb-12">Bastidores e Atendimento</h2>
            <div className="flex justify-center">
              <img 
                src={IMAGES.expert[2]} 
                alt="Atendimento" 
                className="rounded-2xl shadow-md w-full max-w-3xl h-[400px] object-cover" 
              />
            </div>
            <p className="text-center mt-8 text-gray-500 italic">Ambiente planejado para oferecer segurança e os melhores resultados.</p>
          </div>
        </section>

        {/* FAMILY / MESSAGE SECTION */}
        <section className="py-20 px-4 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex flex-col gap-6">
                <Heart size={40} className="text-[#5B0D15]/60" />
                <h2 className="text-3xl md:text-4xl text-gray-800">Além da Odontologia</h2>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  "Quero agradecer imensamente por você ter acompanhado meu trabalho até aqui. Para mim, cada sorriso que transformo é o reflexo da gratidão que tenho pela minha própria vida e pela minha família. Eles são o meu suporte e a razão de eu buscar a excelência em tudo o que faço. Quando você senta na minha cadeira, não é apenas um paciente; é alguém que confia o seu bem-estar a mim, e trato essa confiança com o maior respeito do mundo."
                </p>
                <p className="font-bold text-gray-800">— Dra. Grazielly Agreli</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={IMAGES.family} 
                alt="Família Dra. Grazielly" 
                className="rounded-3xl shadow-2xl border-8 border-gray-50 transform rotate-2 w-full max-w-sm mx-auto"
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-4 bg-[#2D0606] text-white relative overflow-hidden">
          {/* Subtle logo background for the final section */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            <img src={IMAGES.logo} className="w-[80%] max-w-lg filter invert" alt="Watermark" />
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-serif">Seu novo sorriso está a apenas uma conversa de distância.</h2>
            <p className="text-xl text-[#F5D5D5] opacity-90">
              Não deixe para depois a chance de recuperar sua autoestima. Lembre-se: sua primeira avaliação é <strong>100% gratuita</strong> e sem compromisso.
            </p>
            <div className="flex flex-col items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#5B0D15] font-black py-6 px-10 rounded-full shadow-2xl hover:scale-105 transition-all w-full md:w-auto text-xl"
              >
                <MessageCircle size={24} fill="currentColor" />
                AGENDAR AVALIAÇÃO AGORA
              </a>
              <p className="text-[#F5D5D5] text-sm flex items-center gap-2">
                <ShieldCheck size={16} /> Fale direto com minha equipe
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-4 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
            <img src={IMAGES.logo} alt="Dra. Grazielly Logo" className="h-16 opacity-80" />
            
            <div className="text-center">
              <p className="text-xl font-serif text-gray-800 mb-1">Dra. Grazielly Agreli</p>
              <p className="text-gray-500 text-sm uppercase tracking-widest">Especialista em Resinas e Estética • Palmas - TO</p>
            </div>

            <div className="flex gap-6">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:text-[#5B0D15] transition-colors text-gray-800">
                <Instagram size={24} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:text-[#5B0D15] transition-colors text-gray-800">
                <MessageCircle size={24} />
              </a>
              <a href="https://maps.app.goo.gl/7CqAx9zAT5uh1dU97?g_st=ipc" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-sm hover:text-[#5B0D15] transition-colors text-gray-800">
                <Map size={24} />
              </a>
            </div>

            <p className="text-gray-400 text-xs text-center">
              &copy; {new Date().getFullYear()} Dra. Grazielly Agreli. Todos os direitos reservados.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;
