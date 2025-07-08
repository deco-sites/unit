import AgentsFilter from "../islands/AgentsFilter.tsx";

interface Agent {
  id: string;
  name: string;
  description: string;
  avatar: string;
  integrations: Array<{
    name: string;
    icon: string;
    color: string;
  }>;
}

interface Category {
  id: string;
  name: string;
  agents: Agent[];
}

export interface Props {
  /**
   * @title Section Title
   * @description Título da seção de agentes
   * @default Conheça o seu esquadrão
   */
  title?: string;

  /**
   * @title Categories
   * @description Categorias de agentes disponíveis
   */
  categories?: Category[];
}

export default function Agents({
  title = "Conheça o seu esquadrão",
  categories = [
    {
      id: "icp-strategist",
      name: "ICP STRATEGIST",
      agents: [
        {
          id: "scheduler",
          name: "Scheduler",
          description:
            "Marca reuniões com eficiência militar.\nAutomatize a logística e aumente o volume de demos marcadas.",
          avatar: "🤖",
          integrations: [
            { name: "Google Sheets", icon: "📊", color: "#20A464" },
            { name: "Gmail", icon: "📧", color: "#EA4335" },
          ],
        },
        {
          id: "qualifier",
          name: "Qualifier",
          description:
            "Qualifica leads com precisão cirúrgica.\nIdentifica prospects de alto valor automaticamente.",
          avatar: "🎯",
          integrations: [
            { name: "HubSpot", icon: "🔶", color: "#FF7A00" },
            { name: "Salesforce", icon: "☁️", color: "#00A1E0" },
          ],
        },
      ],
    },
    {
      id: "lead-hunters",
      name: "Lead Hunters",
      agents: [
        {
          id: "prospector",
          name: "Prospector",
          description:
            "Caça prospects como um sniper.\nEncontra leads qualificados em qualquer território.",
          avatar: "🔍",
          integrations: [
            { name: "LinkedIn", icon: "💼", color: "#0077B5" },
            { name: "Apollo", icon: "🚀", color: "#5B47FB" },
          ],
        },
      ],
    },
    {
      id: "lead-indepth",
      name: "Lead in-depth",
      agents: [
        {
          id: "researcher",
          name: "Researcher",
          description:
            "Investiga prospects em profundidade.\nColeta inteligência para abordagens certeiras.",
          avatar: "📚",
          integrations: [
            { name: "ZoomInfo", icon: "🔎", color: "#FF6B35" },
            { name: "Clearbit", icon: "⚡", color: "#5B47FB" },
          ],
        },
      ],
    },
    {
      id: "lead-operation",
      name: "Lead Operation",
      agents: [
        {
          id: "automator",
          name: "Automator",
          description:
            "Executa operações com precisão robótica.\nOtimiza todo o pipeline de vendas.",
          avatar: "⚙️",
          integrations: [
            { name: "Zapier", icon: "⚡", color: "#FF4A00" },
            { name: "Slack", icon: "💬", color: "#4A154B" },
          ],
        },
      ],
    },
  ],
}: Props) {
  return (
    <section className="w-full py-20 lg:py-36 px-4 lg:px-8 flex flex-col items-center gap-8 lg:gap-15">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-6 lg:gap-8 w-full max-w-4xl">
        <h2
          className="text-4xl lg:text-6xl font-medium text-center leading-tight"
          style={{
            fontFamily: "Inter",
            fontWeight: "500",
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: "1.1em",
            letterSpacing: "-2%",
            color: "#0A0A0A",
          }}
        >
          {title}
        </h2>
      </div>

      {/* Agents Filter Component */}
      <AgentsFilter categories={categories} />
    </section>
  );
}
