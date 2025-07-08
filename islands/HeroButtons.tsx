import { useState } from "preact/hooks";
import FormModal from "./FormModal.tsx";

interface Props {
  primaryButtonText: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export default function HeroButtons({
  primaryButtonText,
  secondaryButtonText,
  secondaryButtonHref,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Buttons Row */}
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full sm:w-auto">
        {/* Primary Button - Opens Modal */}
        <button
          onClick={openModal}
          className="flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-2 rounded-full transition-all hover:opacity-90 text-sm lg:text-base min-w-[200px] lg:min-w-auto"
          style={{
            height: "44px",
            background:
              "radial-gradient(ellipse at 50% 50%, #22C55E 0%, #15803D 100%)",
            border: "2px solid #FAFAFA",
            boxShadow: "0px 0px 0px 2px rgba(34, 197, 94, 1)",
            fontFamily: "Geist",
            fontWeight: "500",
            lineHeight: "1em",
            color: "#FAFAFA",
          }}
        >
          {primaryButtonText}
        </button>

        {/* Secondary Button - Green Outline */}
        <a
          href={secondaryButtonHref}
          className="flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-2 rounded-full transition-all hover:opacity-90 text-sm lg:text-base min-w-[200px] lg:min-w-auto bg-transparent"
          style={{
            height: "44px",
            border: "2px solid #22C55E",
            boxShadow: "0px 0px 0px 2px rgba(34, 197, 94, 0.1)",
            fontFamily: "Geist",
            fontWeight: "500",
            lineHeight: "1em",
            color: "#22C55E",
          }}
        >
          {secondaryButtonText}
        </a>
      </div>

      {/* Form Modal */}
      <FormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
