interface Benefit {
  /**
   * @title Icon Image URL
   * @description URL da imagem do ícone
   */
  iconUrl: string;
  title: string;
  description: string;
  size?: "large" | "medium";
}

export interface Props {
  /**
   * @title Background Image
   * @description Imagem de fundo da seção
   * @default https://via.placeholder.com/1440x800/22C55E/FFFFFF?text=Background+Image
   */
  backgroundImage?: string;
  
  /**
   * @title Badge Text
   * @description Texto da badge superior
   * @default Benefícios
   */
  badgeText?: string;
  
  /**
   * @title Section Title
   * @description Título principal da seção
   * @default Seus concorrentes têm ferramentas. Você terá um esquadrão
   */
  title?: string;
  
  /**
   * @title CTA Button Text
   * @description Texto do botão de call-to-action
   * @default Começar agora
   */
  ctaText?: string;
  
  /**
   * @title CTA Button Link
   * @description Link do botão de call-to-action
   * @default #start
   */
  ctaHref?: string;
  
  /**
   * @title Benefits
   * @description Lista de benefícios com ícone, título e descrição
   */
  benefits?: Benefit[];
}

export default function Benefits({
  backgroundImage = "https://via.placeholder.com/1440x800/22C55E/FFFFFF?text=Background+Image",
  badgeText = "Benefícios",
  title = "Seus concorrentes têm ferramentas. Você terá um esquadrão",
  ctaText = "Começar agora",
  ctaHref = "#start",
  benefits = [
    {
      iconUrl: "https://via.placeholder.com/50x50/16A34A/FFFFFF?text=⚡",
      title: "Salve +20 horas semanalmente",
      description: "Elimine tarefas manuais, do enriquecimento de leads à atualização do CRM.",
      size: "large"
    },
    {
      iconUrl: "https://via.placeholder.com/50x50/16A34A/FFFFFF?text=📊",
      title: "Convert with Data-Driven Content", 
      description: "Turn browsing into buying with AI content that addresses customer needs based on real-time market insights.",
      size: "medium"
    },
    {
      iconUrl: "https://via.placeholder.com/50x50/16A34A/FFFFFF?text=🔧",
      title: "Up and Running Today",
      description: "Install in under 15 minutes with our seamless integration for all major e-commerce platforms—zero technical headaches.",
      size: "medium"
    },
    {
      iconUrl: "https://via.placeholder.com/50x50/16A34A/FFFFFF?text=🎯",
      title: "Always Improving",
      description: "Our AI continuously refines your content based on performance data. Most clients see results within the first week.",
      size: "medium"
    }
  ]
}: Props) {
  return (
    <section 
      className="w-full px-8 py-36 flex flex-col items-center gap-15 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.7), rgba(34, 197, 94, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="flex flex-col items-center gap-20 w-full max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-8">
          {/* Badge */}
          <div 
            className="flex items-center gap-2 px-4 py-2 rounded-[20px] border backdrop-blur-sm"
            style={{
              backgroundColor: "transparent",
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
                color: "#FAFAFA",
                width: "174px"
              }}
            >
              {badgeText}
            </span>
          </div>
          
          {/* Title */}
          <h2 
            className="text-center text-4xl lg:text-6xl w-full"
            style={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "56px",
              lineHeight: "1em", 
              letterSpacing: "-2%",
              color: "#FAFAFA"
            }}
          >
            {title}
          </h2>
          
          {/* CTA Button */}
          <a
            href={ctaHref}
            className="flex items-center justify-center gap-2 px-8 py-2 h-11 rounded-full border-2 transition-all hover:opacity-90"
            style={{
              backgroundColor: "#FAFAFA",
              borderColor: "#16A34A",
              boxShadow: "0px 0px 0px 2px rgba(255, 255, 255, 1)",
              fontFamily: "Geist",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "1em",
              color: "#0A0A0A"
            }}
          >
            {ctaText}
          </a>
        </div>
        
        {/* Benefits Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-6xl">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border p-8 lg:p-10 flex flex-col gap-6 transition-all ${
                benefit.size === "large" 
                  ? "min-h-[400px] lg:min-h-[496px]" 
                  : "min-h-[300px] lg:min-h-[350px]"
              }`}
              style={{
                backgroundColor: "#FAFAFA",
                borderColor: "#E5E5E5"
              }}
            >
              {/* Icon Circle */}
              <div 
                className="w-fit rounded-full p-5 flex items-center justify-center"
                style={{ backgroundColor: "#BBF7D0" }}
              >
                <img 
                  src={benefit.iconUrl} 
                  alt={benefit.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-3 flex-1 justify-between">
                <div className="flex-1">
                  <h3 
                    className={`font-semibold mb-3 ${
                      benefit.size === "large" ? "text-2xl lg:text-4xl" : "text-xl lg:text-2xl"
                    }`}
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "600",
                      fontSize: benefit.size === "large" ? "clamp(24px, 5vw, 40px)" : "clamp(20px, 4vw, 32px)",
                      lineHeight: "1.1em",
                      letterSpacing: "-1%",
                      color: "#0A0A0A"
                    }}
                  >
                    {benefit.title}
                  </h3>
                  
                  <p 
                    className={`leading-relaxed ${
                      benefit.size === "large" ? "text-lg lg:text-xl" : "text-base lg:text-lg"
                    }`}
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "500",
                      fontSize: benefit.size === "large" ? "clamp(16px, 3vw, 24px)" : "clamp(14px, 2.5vw, 20px)",
                      lineHeight: "1.4em",
                      color: "#A1A1AA"
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 