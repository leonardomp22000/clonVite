import Cards from "./Cards";

export default function Content() {
  const cardContent = [
    {
      icon: "💡",
      title: "Instant Server Start",
      content: "On demand file serving over native ESM, no bundling required",
    },
    {
      icon: "⚡",
      title: "Lightning Fast HMR",
      content:
        "Hot Module Replacement(HMR), that stays fast regardless of app size",
    },
    {
      icon: "🛠️",
      title: "Rich Features",
      content: "Out-of-the-box support for TypeScript, JSX, CSS and more"
    }, 
    {
      icon: "📦",
      title: "Optimized Build",
      content: "Pre-configured Rollup build with multi-page and library mode support."
    },
    {
      icon: "🔩", 
      title: "Universal Plugins", 
      content: "Rollup-superset plugin interface shared between dev and build."
    }, 
    {
      icon: "🔑",
      title: "Fully Typed APIs",
      content: "Flexible programmatic APIs with full TypeScript typing."

    }
  ];

  return (
      <section id="cards-container">
        {cardContent.map((card) => {
          return (
            <Cards
              key={`card-${card.title}`}
              icon={card.icon}
              title={card.title}
              content={card.content}
            />
          );
        })}
      </section>
  );
}
