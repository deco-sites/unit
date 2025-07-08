import { useEffect } from "preact/hooks";

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

interface Props {
  categories: Category[];
}

export default function AgentsFilter({ categories }: Props) {
  const defaultCategory = categories[0];

  useEffect(() => {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const agentCards = document.querySelectorAll(".agent-card");

    const handleCategoryClick = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const categoryId = button.dataset.category;

      // Update button states
      categoryButtons.forEach((btn) => {
        btn.classList.remove("active");
        (btn as HTMLElement).style.backgroundColor = "transparent";
        (btn as HTMLElement).style.color = "#71717A";
        (btn as HTMLElement).style.fontWeight = "400";
      });

      button.classList.add("active");
      button.style.backgroundColor = "#16A34A";
      button.style.color = "white";
      button.style.fontWeight = "600";

      // Show/hide agent cards
      agentCards.forEach((card) => {
        const cardElement = card as HTMLElement;
        if (cardElement.dataset.category === categoryId) {
          cardElement.classList.remove("hidden");
        } else {
          cardElement.classList.add("hidden");
        }
      });
    };

    categoryButtons.forEach((button) => {
      button.addEventListener("click", handleCategoryClick);
    });

    return () => {
      categoryButtons.forEach((button) => {
        button.removeEventListener("click", handleCategoryClick);
      });
    };
  }, []);

  return (
    <div className="w-full max-w-7xl flex flex-col gap-8 lg:gap-12">
      {/* Categories Filter */}
      <div className="flex flex-col gap-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 lg:gap-4 justify-center">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`category-btn px-4 lg:px-6 py-2 lg:py-3 rounded-full border border-gray-300 transition-all hover:bg-gray-50 text-sm lg:text-base ${
                index === 0 ? "active" : ""
              }`}
              data-category={category.id}
              style={{
                fontFamily: "Geist",
                fontWeight: index === 0 ? "600" : "400",
                lineHeight: "1em",
                backgroundColor: index === 0 ? "#16A34A" : "transparent",
                color: index === 0 ? "white" : "#71717A",
                borderColor: "#D4D4D8",
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Agents Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        id="agents-grid"
      >
        {/* Current category agents (visible by default) */}
        {defaultCategory.agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white p-6 lg:p-8 rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all agent-card"
            style={{
              borderColor: "#E4E4E7",
            }}
            data-category={defaultCategory.id}
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-lg lg:text-xl border shadow-sm"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(120, 113, 108, 0.1)",
                    boxShadow:
                      "0px 0px 4px 0px rgba(0, 0, 0, 0.2), 0px 2px 8px 0px rgba(0, 0, 0, 0.03)",
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
                    color: "#0A0A0A",
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
                  whiteSpace: "pre-line",
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
                      borderColor: "#E4E4E7",
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
                borderColor: "#E4E4E7",
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
                      boxShadow:
                        "0px 0px 4px 0px rgba(0, 0, 0, 0.2), 0px 2px 8px 0px rgba(0, 0, 0, 0.03)",
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
                      color: "#0A0A0A",
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
                    whiteSpace: "pre-line",
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
                        borderColor: "#E4E4E7",
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
  );
}
