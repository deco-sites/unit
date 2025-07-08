interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

export interface Props {
  /**
   * @title Badge Text
   * @description Texto da badge azul superior
   * @default Como funciona
   */
  badgeText?: string;
  
  /**
   * @title Section Title
   * @description Título principal da seção
   * @default Você define a missão. Os agents executam com precisão.
   */
  title?: string;
  
  /**
   * @title Steps
   * @description Lista de passos com número, título, descrição e imagem
   */
  steps?: Step[];
  
  /**
   * @title CTA Button Text
   * @description Texto do botão de call-to-action
   * @default Iniciar Primeira Missão
   */
  ctaText?: string;
  
  /**
   * @title CTA Button Link
   * @description Link do botão de call-to-action
   * @default #start
   */
  ctaHref?: string;
}

export default function HowItWorks({
  badgeText = "Como funciona",
  title = "Você define a missão. Os agents executam com precisão.",
  ctaText = "Iniciar Primeira Missão",
  ctaHref = "#start",
  steps = [
    {
      number: "1",
      title: "Lance a missão",
      description: "Defina o objetivo: \"Encontrar CFOs em fintechs de alto crescimento\".\n\nO Seals.ai ativa automaticamente os agentes certos para iniciar a operação.",
      image: "https://via.placeholder.com/295x220/22C55E/FFFFFF?text=Chat+Interface",
      imageAlt: "Interface de chat para definir missão"
    },
    {
      number: "2", 
      title: "Comande os agentes",
      description: "Cada agent executa sua parte com precisão — encontrar leads, enriquecer dados, escrever mensagens, marcar demos.\n\nVocê decide quando e como ativar cada um.",
      image: "https://via.placeholder.com/295x220/16A34A/FFFFFF?text=Agent+Network",
      imageAlt: "Rede de agentes conectados"
    },
    {
      number: "3",
      title: "Acompanhe, aprenda, escale", 
      description: "Monitore o avanço da missão em tempo real. Analise os resultados, refine a estratégia e escale sua operação.",
      image: "https://via.placeholder.com/295x220/15803D/FFFFFF?text=Dashboard+Analytics",
      imageAlt: "Dashboard com métricas e gráficos"
    }
  ]
}: Props) {
  return (
    <section 
      className="w-full px-8 py-36 flex flex-col items-center gap-12"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="flex flex-col items-center gap-12 w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          {/* Badge */}
          <div 
            className="flex items-center gap-2 px-4 py-2 rounded-[20px] border backdrop-blur-sm"
            style={{
              backgroundColor: "#EFF6FF",
              borderColor: "#93C5FD"
            }}
          >
            <span 
              className="text-xs font-medium text-center"
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "1em",
                color: "#1E3A8A"
              }}
            >
              {badgeText}
            </span>
          </div>
          
          {/* Title */}
          <h2 
            className="text-center text-4xl lg:text-6xl max-w-4xl"
            style={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "56px",
              lineHeight: "1em", 
              letterSpacing: "-2%",
              color: "#0A0A0A"
            }}
          >
            {title}
          </h2>
        </div>
        
        {/* Steps Grid */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-2 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-full max-w-[295px] h-[508px] relative"
            >
              {/* Card */}
              <div 
                className="absolute inset-0 rounded-[20px] border backdrop-blur-[80px] flex flex-col overflow-hidden"
                style={{
                  backgroundColor: "#FAFAFA",
                  borderColor: "#A3A3A3"
                }}
              >
                {/* Content with padding */}
                <div className="flex flex-col gap-8 p-7 flex-1">
                  {/* Number Circle */}
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#16A34A" }}
                  >
                    <span 
                      className="text-xl font-bold"
                      style={{
                        fontFamily: "Geist",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "1.2em",
                        color: "#F5F5F5"
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Title and Description */}
                  <div className="flex flex-col gap-2">
                    <h3 
                      className="text-2xl font-semibold"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        fontSize: "24px",
                        lineHeight: "1em",
                        letterSpacing: "-2%",
                        color: "#0A0A0A"
                      }}
                    >
                      {step.title}
                    </h3>
                    
                    <p 
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "500",
                        fontSize: "14px",
                        lineHeight: "1.714em",
                        color: "#71717A",
                        whiteSpace: "pre-line"
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Image - sem padding, sem cor de fundo, até 220px de altura */}
                <div className="w-full max-h-[220px] rounded-b-[20px] overflow-hidden">
                  <img 
                    src={step.image}
                    alt={step.imageAlt || step.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <a
          href={ctaHref}
          className="flex items-center justify-center gap-2 px-8 py-2 h-11 rounded-full border-2 transition-all hover:opacity-90"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, #22C55E 0%, #15803D 100%)",
            borderColor: "#FAFAFA",
            boxShadow: "0px 0px 0px 2px rgba(34, 197, 94, 1)",
            fontFamily: "Geist",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "1em",
            color: "#FAFAFA"
          }}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
} 