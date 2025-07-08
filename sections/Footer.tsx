export interface Props {
  /**
   * @title Logo Text
   * @description Texto do logo
   * @default Unit
   */
  logoText?: string;

  /**
   * @title Copyright Text
   * @description Texto do copyright
   * @default © 2025 Seals. Todos os direitos reservados
   */
  copyrightText?: string;
}

export default function Footer({
  logoText = "Unit",
  copyrightText = "© 2025 Seals. Todos os direitos reservados",
}: Props) {
  return (
    <footer
      className="w-full px-8 py-10 flex flex-col items-center gap-18"
      style={{
        backgroundColor: "#14532D",
      }}
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-5 max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at -10.83% -13.33%, #AFFF81 0%, #1AEC41 56.68%, #30844E 91.67%)",
            }}
          />
          <span
            className="font-semibold text-center"
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "1em",
              color: "#EEF2FF",
            }}
          >
            {logoText}
          </span>
        </div>

        {/* Divider */}
        <div className="flex-1 flex justify-center items-center">
          <div
            className="w-full h-px"
            style={{
              backgroundColor: "#4ADE80",
            }}
          />
        </div>

        {/* Copyright */}
        <div className="flex-shrink-0">
          <span
            className="text-center font-medium"
            style={{
              fontFamily: "Inter",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "1.2em",
              color: "#4ADE80",
            }}
          >
            {copyrightText}
          </span>
        </div>
      </div>
    </footer>
  );
}
