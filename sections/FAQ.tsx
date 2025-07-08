interface FAQItem {
  question: string;
  answer: string;
}

export interface Props {
  /**
   * @title Section Title
   * @description Título principal da seção
   * @default Frequently asked questions
   */
  title?: string;
  
  /**
   * @title CTA Button Text
   * @description Texto do botão de call-to-action
   * @default Talk to sales
   */
  ctaText?: string;
  
  /**
   * @title CTA Button Link
   * @description Link do botão de call-to-action
   * @default #contact
   */
  ctaHref?: string;
  
  /**
   * @title FAQ Items
   * @description Lista de perguntas e respostas frequentes
   */
  faqItems?: FAQItem[];
}

export default function FAQ({
  title = "Frequently asked questions",
  ctaText = "Talk to sales",
  ctaHref = "#contact",
  faqItems = [
    {
      question: "How much time will this save my team?",
      answer: "Our AI agents can save your team 20+ hours per week by automating manual tasks like lead enrichment, CRM updates, and prospect research. Most teams see immediate time savings from day one."
    },
    {
      question: "When will I see results?",
      answer: "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes."
    },
    {
      question: "Can it handle my entire product catalog?",
      answer: "Yes, our platform is designed to scale with businesses of all sizes. Whether you have 100 or 100,000 products, our AI agents can handle your entire catalog and adapt to your specific business needs."
    }
  ]
}: Props) {
  return (
    <>
      <style>{`
        .faq-item {
          border-bottom: 1px solid #737373;
        }
        
        .faq-item.active {
          border-bottom-color: #2563EB;
        }
        
        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out, padding-top 0.3s ease-in-out;
          padding-top: 0;
        }
        
        .faq-content.open {
          max-height: 500px;
          padding-top: 16px;
        }
        
        .faq-icon {
          transition: transform 0.3s ease-in-out;
        }
        
        .faq-icon.rotated {
          transform: rotate(180deg);
        }
      `}</style>
      
      <section className="w-full py-36 px-8 flex flex-col items-center gap-15">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Header */}
          <div className="flex flex-col gap-8 lg:min-w-[520px] w-full lg:w-auto">
            <h2 
              className="text-4xl lg:text-6xl font-semibold"
              style={{
                fontFamily: "Geist",
                fontWeight: "600",
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: "1em",
                letterSpacing: "-2%",
                color: "#0A0A0A"
              }}
            >
              {title}
            </h2>
            
            <a
              href={ctaHref}
              className="flex items-center justify-center gap-2 px-8 py-2 h-11 rounded-full border-2 transition-all hover:opacity-90 w-fit"
              style={{
                background: "radial-gradient(circle, #22C55E 0%, #15803D 100%)",
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
          
          {/* Right Side - FAQ Accordion */}
          <div className="flex flex-col gap-4 flex-1 w-full">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="faq-item pb-5 pt-5 first:pt-0"
              >
                <button
                  className="w-full flex items-center justify-between text-left group faq-button"
                  type="button"
                >
                  <h3 
                    className="text-xl lg:text-2xl font-medium pr-4"
                    style={{
                      fontFamily: "Geist",
                      fontWeight: "500",
                      fontSize: "clamp(18px, 3vw, 24px)",
                      lineHeight: "1.2em",
                      color: "#0A0A0A"
                    }}
                  >
                    {item.question}
                  </h3>
                  
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <svg
                      className="faq-icon w-4 h-4"
                      style={{ color: "#A3A3A3" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                </button>
                
                <div className="faq-content">
                  <p 
                    className="text-lg lg:text-xl leading-relaxed"
                    style={{
                      fontFamily: "Geist",
                      fontWeight: "400",
                      fontSize: "clamp(16px, 2.5vw, 24px)",
                      lineHeight: "1.2em",
                      color: "#A3A3A3"
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            function toggleFAQ(button) {
              const content = button.nextElementSibling;
              const icon = button.querySelector('.faq-icon');
              const container = button.parentElement;
              
              const isOpen = content.classList.contains('open');
              
              if (isOpen) {
                content.classList.remove('open');
                icon.classList.remove('rotated');
                container.classList.remove('active');
              } else {
                content.classList.add('open');
                icon.classList.add('rotated');
                container.classList.add('active');
              }
            }
            
            // Adicionar event listeners para todos os botões FAQ
            const faqButtons = document.querySelectorAll('.faq-button');
            faqButtons.forEach(function(button) {
              button.addEventListener('click', function() {
                toggleFAQ(this);
              });
            });
          });
        `
      }} />
    </>
  );
} 