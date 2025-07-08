import { useEffect } from "preact/hooks";

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqItems: FAQItem[];
}

export default function FAQAccordion({ faqItems }: Props) {
  useEffect(() => {
    const handleFAQClick = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const content = button.nextElementSibling as HTMLElement;
      const icon = button.querySelector(".faq-icon") as HTMLElement;
      const container = button.parentElement as HTMLElement;

      if (!content || !icon || !container) return;

      const isOpen = content.classList.contains("open");

      if (isOpen) {
        content.classList.remove("open");
        icon.classList.remove("rotated");
        container.classList.remove("active");
      } else {
        content.classList.add("open");
        icon.classList.add("rotated");
        container.classList.add("active");
      }
    };

    const faqButtons = document.querySelectorAll(".faq-button");
    faqButtons.forEach((button) => {
      button.addEventListener("click", handleFAQClick);
    });

    return () => {
      faqButtons.forEach((button) => {
        button.removeEventListener("click", handleFAQClick);
      });
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 flex-1 w-full">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="faq-item pb-5 pt-5 first:pt-0"
          style={{ borderBottom: "1px solid #737373" }}
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
                color: "#0A0A0A",
              }}
            >
              {item.question}
            </h3>

            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <svg
                className="faq-icon w-4 h-4 transition-transform duration-300 ease-in-out"
                style={{ color: "#A3A3A3" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </div>
          </button>

          <div
            className="faq-content overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight: "0px",
              paddingTop: "0px",
            }}
          >
            <p
              className="text-lg lg:text-xl leading-relaxed"
              style={{
                fontFamily: "Geist",
                fontWeight: "400",
                fontSize: "clamp(16px, 2.5vw, 24px)",
                lineHeight: "1.2em",
                color: "#A3A3A3",
              }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}

      <style jsx>
        {`
        .faq-item.active {
          border-bottom-color: #2563EB !important;
        }
        
        .faq-content.open {
          max-height: 500px !important;
          padding-top: 16px !important;
        }
        
        .faq-icon.rotated {
          transform: rotate(180deg);
        }
      `}
      </style>
    </div>
  );
}
