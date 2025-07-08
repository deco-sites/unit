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
          description: "Marca reuniões com eficiência militar.\nAutomatize a logística e aumente o volume de demos marcadas.",
          avatar: "🤖",
          integrations: [
            { name: "Google Sheets", icon: "📊", color: "#20A464" },
            { name: "Gmail", icon: "📧", color: "#EA4335" }
          ]
        },
        {
          id: "qualifier",
          name: "Qualifier",
          description: "Qualifica leads com precisão cirúrgica.\nIdentifica prospects de alto valor automaticamente.",
          avatar: "🎯",
          integrations: [
            { name: "HubSpot", icon: "🔶", color: "#FF7A00" },
            { name: "Salesforce", icon: "☁️", color: "#00A1E0" }
          ]
        }
      ]
    },
    {
      id: "lead-hunters",
      name: "Lead Hunters",
      agents: [
        {
          id: "prospector",
          name: "Prospector",
          description: "Caça prospects como um sniper.\nEncontra leads qualificados em qualquer território.",
          avatar: "🔍",
          integrations: [
            { name: "LinkedIn", icon: "💼", color: "#0077B5" },
            { name: "Apollo", icon: "🚀", color: "#5B47FB" }
          ]
        }
      ]
    },
    {
      id: "lead-indepth",
      name: "Lead in-depth",
      agents: [
        {
          id: "researcher",
          name: "Researcher",
          description: "Investiga prospects em profundidade.\nColeta inteligência para abordagens certeiras.",
          avatar: "📚",
          integrations: [
            { name: "ZoomInfo", icon: "🔎", color: "#FF6B35" },
            { name: "Clearbit", icon: "⚡", color: "#5B47FB" }
          ]
        }
      ]
    },
    {
      id: "lead-operation",
      name: "Lead Operation",
      agents: [
        {
          id: "automator",
          name: "Automator",
          description: "Executa operações com precisão robótica.\nOtimiza todo o pipeline de vendas.",
          avatar: "⚙️",
          integrations: [
            { name: "Zapier", icon: "⚡", color: "#FF4A00" },
            { name: "Slack", icon: "💬", color: "#4A154B" }
          ]
        }
      ]
    }
  ]
}: Props) {
  // Mostra sempre a primeira categoria por padrão
  const defaultCategory = categories[0];
  const currentAgents = defaultCategory?.agents || [];

  return (
    <>
      <section 
        className="w-full px-4 lg:px-16 py-16 lg:py-32"
        style={{ backgroundColor: "#F9FAFB" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-12 mb-16">
            {/* Title */}
            <h2 
              className="text-center text-3xl lg:text-5xl"
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                lineHeight: "1.2em",
                letterSpacing: "-5%",
                color: "#171717",
                maxWidth: "674px"
              }}
            >
              {title}
            </h2>
            
            {/* Category Filters */}
            <div 
              className="flex flex-wrap justify-center gap-4 p-1 rounded-full"
              style={{ backgroundColor: "#E4E4E7" }}
              id="category-filters"
            >
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={`px-3 py-3 lg:px-4 lg:py-3 rounded-full transition-all text-xs lg:text-base category-btn ${
                    index === 0 ? "active" : ""
                  }`}
                  data-category={category.id}
                  style={{
                    backgroundColor: index === 0 ? "#16A34A" : "transparent",
                    color: index === 0 ? "white" : "#71717A",
                    fontFamily: "Inter",
                    fontWeight: index === 0 ? "600" : "400",
                    lineHeight: "0.868em"
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="agents-grid">
            {currentAgents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white p-6 lg:p-8 rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all agent-card"
                style={{
                  borderColor: "#E4E4E7"
                }}
                data-category={defaultCategory.id}
              >
                {/* Agent Info */}
                <div className="flex flex-col gap-6">
                  {/* Agent Header */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div 
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl border shadow-sm"
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderColor: "rgba(120, 113, 108, 0.1)",
                        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.2), 0px 2px 8px 0px rgba(0, 0, 0, 0.03)"
                      }}
                    >
                      {agent.avatar}
                    </div>
                    
                    {/* Name */}
                    <h3 
                      className="text-lg lg:text-2xl font-medium"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "500",
                        lineHeight: "1em",
                        color: "#0A0A0A"
                      }}
                    >
                      {agent.name}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p 
                    className="text-sm lg:text-lg leading-relaxed"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "400",
                      lineHeight: "1.4em",
                      color: "#A3A3A3",
                      whiteSpace: "pre-line"
                    }}
                  >
                    {agent.description}
                  </p>
                  
                  {/* Integrations */}
                  <div className="flex gap-2 mt-2">
                    {agent.integrations.map((integration, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg border flex items-center justify-center text-xs lg:text-sm"
                        style={{
                          backgroundColor: "#FAFAFA",
                          borderColor: "#E4E4E7"
                        }}
                        title={integration.name}
                      >
                        {integration.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Hidden agent cards for other categories */}
            {categories.slice(1).map((category) =>
              category.agents.map((agent) => (
                <div
                  key={`${category.id}-${agent.id}`}
                  className="bg-white p-6 lg:p-8 rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all agent-card hidden"
                  style={{
                    borderColor: "#E4E4E7"
                  }}
                  data-category={category.id}
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl border shadow-sm"
                        style={{
                          backgroundColor: "#FFFFFF",
                          borderColor: "rgba(120, 113, 108, 0.1)",
                          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.2), 0px 2px 8px 0px rgba(0, 0, 0, 0.03)"
                        }}
                      >
                        {agent.avatar}
                      </div>
                      <h3 
                        className="text-lg lg:text-2xl font-medium"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "500",
                          lineHeight: "1em",
                          color: "#0A0A0A"
                        }}
                      >
                        {agent.name}
                      </h3>
                    </div>
                    <p 
                      className="text-sm lg:text-lg leading-relaxed"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "400",
                        lineHeight: "1.4em",
                        color: "#A3A3A3",
                        whiteSpace: "pre-line"
                      }}
                    >
                      {agent.description}
                    </p>
                    <div className="flex gap-2 mt-2">
                      {agent.integrations.map((integration, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg border flex items-center justify-center text-xs lg:text-sm"
                          style={{
                            backgroundColor: "#FAFAFA",
                            borderColor: "#E4E4E7"
                          }}
                          title={integration.name}
                        >
                          {integration.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Client-side JavaScript for interactivity */}
      <script 
        type="module"
        dangerouslySetInnerHTML={{
          __html: `
            const categoryButtons = document.querySelectorAll('.category-btn');
            const agentCards = document.querySelectorAll('.agent-card');
            
            categoryButtons.forEach(button => {
              button.addEventListener('click', () => {
                const categoryId = button.dataset.category;
                
                // Update button states
                categoryButtons.forEach(btn => {
                  btn.classList.remove('active');
                  btn.style.backgroundColor = 'transparent';
                  btn.style.color = '#71717A';
                  btn.style.fontWeight = '400';
                });
                
                button.classList.add('active');
                button.style.backgroundColor = '#16A34A';
                button.style.color = 'white';
                button.style.fontWeight = '600';
                
                // Show/hide agent cards
                agentCards.forEach(card => {
                  if (card.dataset.category === categoryId) {
                    card.classList.remove('hidden');
                  } else {
                    card.classList.add('hidden');
                  }
                });
              });
            });
          `
        }}
      />
    </>
  );
} 