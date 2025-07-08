export interface Props {
  /**
   * @title Hero Description
   * @description Descrição que aparece abaixo do título
   * @default Comande um time de AI Agents especialistas em cada etapa do processo de vendas outbound, todos com a mesma missão: qualificar o seu pipeline e transformar seus resultados.
   */
  description?: string;

  /**
   * @title Primary Button Text
   * @description Texto do botão primário
   * @default Comece Agora
   */
  primaryButtonText?: string;

  /**
   * @title Primary Button Link
   * @description Link do botão primário
   * @default #
   */
  primaryButtonHref?: string;

  /**
   * @title Secondary Button Text
   * @description Texto do botão secundário
   * @default Conheça seu Esquadrão
   */
  secondaryButtonText?: string;

  /**
   * @title Secondary Button Link
   * @description Link do botão secundário
   * @default #
   */
  secondaryButtonHref?: string;

  /**
   * @title Trial Info Text
   * @description Texto informativo sobre o trial
   * @default 💳 No credit card • 🔄 Cancel anytime • ✨ 14-day free trial
   */
  trialInfoText?: string;
}

export default function Hero({
  description =
    "Comande um time de AI Agents especialistas em cada etapa do processo de vendas outbound, todos com a mesma missão: qualificar o seu pipeline e transformar seus resultados.",
  primaryButtonText = "Comece Agora",
  primaryButtonHref = "#start",
  secondaryButtonText = "Conheça seu Esquadrão",
  secondaryButtonHref = "#squad",
  trialInfoText =
    "💳 No credit card • 🔄 Cancel anytime • ✨ 14-day free trial",
}: Props) {
  return (
    <>
      {/* Google Fonts - Crimson Pro */}
      <link
        href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
        rel="stylesheet"
      />

      <section className="w-full bg-[#FAFAFA] flex flex-col items-center justify-center gap-8 lg:gap-16 px-4 lg:px-16 pt-4 lg:pt-8 pb-12 lg:pb-20 min-h-[600px] lg:h-[700px]">
        {/* Hero Content */}
        <div className="flex flex-col items-center gap-6 lg:gap-10 w-full max-w-6xl">
          {/* Hero Text */}
          <div className="flex flex-col items-center gap-4 lg:gap-6 w-full">
            {/* Heading - Mobile: single line, Desktop: two lines */}
            <div className="text-center leading-none">
              {/* Mobile version - single block */}
              <h1
                className="lg:hidden text-4xl px-4"
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  lineHeight: "1em",
                  letterSpacing: "-5%",
                  color: "#262626",
                }}
              >
                Mais um software de vendas? <br className="sm:hidden" />
                Não. É o seu{" "}
                <span
                  style={{
                    fontFamily: "'Crimson Pro', serif",
                    fontStyle: "italic",
                    fontSize: "calc(1em + 10px)",
                  }}
                >
                  esquadrão de elite
                </span>
                .
              </h1>

              {/* Desktop version - two lines */}
              <div className="hidden lg:block">
                <h1
                  className="text-7xl xl:text-[80px] mb-2"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                    lineHeight: "1em",
                    letterSpacing: "-5%",
                    color: "#262626",
                  }}
                >
                  Mais um software de vendas?
                </h1>
                <h1
                  className="text-7xl xl:text-[80px]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                    lineHeight: "1em",
                    letterSpacing: "-5%",
                    color: "#262626",
                  }}
                >
                  Não. É o seu{" "}
                  <span
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontStyle: "italic",
                      fontSize: "calc(1em + 10px)",
                    }}
                  >
                    esquadrão de elite
                  </span>
                  .
                </h1>
              </div>
            </div>
          </div>

          {/* Description wrapper */}
          <div className="flex items-stretch justify-stretch gap-2 px-4 lg:px-[60px] w-full max-w-[860px]">
            <p
              className="text-center w-full text-lg lg:text-2xl"
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: "1.2em",
                color: "#A1A1AA",
              }}
            >
              {description}
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-4 lg:gap-6">
            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full sm:w-auto">
              {/* Primary Button - Green */}
              <a
                href={primaryButtonHref}
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
              </a>

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

            {/* Trial Info */}
            <p
              className="text-center text-xs lg:text-sm px-4"
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "1em",
                color: "#71717A",
              }}
            >
              {trialInfoText}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
