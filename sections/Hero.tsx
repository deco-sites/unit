import HeroButtons from "../islands/HeroButtons.tsx";

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
            {/* Hero Buttons with Modal */}
            <HeroButtons
              primaryButtonText={primaryButtonText}
              secondaryButtonText={secondaryButtonText}
              secondaryButtonHref={secondaryButtonHref}
            />

            {/* Trial Info */}
            <p
              className="text-center text-xs lg:text-sm px-4"
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "1.2em",
                color: "#A1A1AA",
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
