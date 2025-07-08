import FAQAccordion from "../islands/FAQAccordion.tsx";

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
      answer:
        "Our AI agents can save your team 20+ hours per week by automating manual tasks like lead enrichment, CRM updates, and prospect research. Most teams see immediate time savings from day one.",
    },
    {
      question: "When will I see results?",
      answer:
        "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes.",
    },
    {
      question: "Can it handle my entire product catalog?",
      answer:
        "Yes, our platform is designed to scale with businesses of all sizes. Whether you have 100 or 100,000 products, our AI agents can handle your entire catalog and adapt to your specific business needs.",
    },
  ],
}: Props) {
  return (
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
              color: "#0A0A0A",
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
              color: "#FAFAFA",
            }}
          >
            {ctaText}
          </a>
        </div>

        {/* Right Side - FAQ Accordion */}
        <FAQAccordion faqItems={faqItems} />
      </div>
    </section>
  );
}
