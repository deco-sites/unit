export interface Props {
  /**
   * @title Logo Text
   * @description Nome da marca que aparece no header
   * @default Vanguard
   */
  logoText?: string;

  /**
   * @title Menu Items
   * @description Items do menu de navegação
   */
  menuItems?: Array<{
    label: string;
    href: string;
  }>;

  /**
   * @title CTA Button Text
   * @description Texto do botão de call-to-action
   * @default Start your free trial
   */
  ctaText?: string;

  /**
   * @title CTA Button Link
   * @description Link do botão de call-to-action
   * @default #
   */
  ctaHref?: string;
}

export default function Header({
  logoText = "Vanguard",
  menuItems = [
    { label: "Features", href: "#features" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Pricing", href: "#pricing" },
    { label: "Applications", href: "#applications" },
  ],
  ctaText = "Start your free trial",
  ctaHref = "#",
}: Props) {
  return (
    <header className="w-full bg-[#FAFAFA] px-4 py-6 lg:px-20 lg:py-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto p-2 border border-[#E5E5E5] rounded-full bg-white">
          {/* Left Side - Logo and Menu */}
          <div className="flex items-center gap-4 lg:gap-10 pl-3 lg:pl-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 lg:w-6 lg:h-6 rounded-[5px]"
                style={{
                  background:
                    "radial-gradient(ellipse at -10.83% -13.33%, #AFFF81 0%, #1AEC41 56.68%, #30844E 91.67%)",
                }}
              />
              <span
                className="font-medium text-center text-sm lg:text-base"
                style={{
                  fontFamily: "Inter",
                  lineHeight: "1em",
                  color: "#166534",
                }}
              >
                {logoText}
              </span>
            </div>

            {/* Menu - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-1 text-sm hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: "Geist",
                    fontSize: "14px",
                    lineHeight: "1.4285714285714286em",
                    color: "#171717",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex items-center justify-end gap-2">
            <a
              href={ctaHref}
              className="flex items-center justify-center gap-2 px-3 py-2 lg:px-4 lg:py-2 rounded-full border transition-all hover:opacity-90 text-xs lg:text-sm"
              style={{
                border: "1px solid #22C55E",
                color: "#22C55E",
                fontFamily: "Geist",
                fontWeight: "500",
                lineHeight: "1.4285714285714286em",
              }}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
