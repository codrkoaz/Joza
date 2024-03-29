import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";

const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["Home"],
    keywords: "Home, Home",
    perform: () => (window.location.pathname = "/"),
  },
  {
    id: "work",
    name: "Work",
    shortcut: ["work"],
    keywords: "working, works, Work",
    perform: () => (window.location.pathname = "work"),
  },
  {
    id: "skills",
    name: "Skills",
    shortcut: ["skills"],
    keywords: "skills, Skills",
    perform: () => (window.location.pathname = "skills"),
  },
  {
    id: "brand",
    name: "Brand",
    shortcut: ["brand"],
    keywords: "brand, Brand",
    perform: () => window.open("https://adreamersfuture.co", "_blank"),
  },
];

const KBarCommand = () => {
  function RenderResults() {
    const { results } = useMatches();
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === "string" ? (
            <div>{item}</div>
          ) : (
            <div className={`bg-${active ? "gray-400" : "transparent"} h-12 `}>
              {item.name}
            </div>
          )
        }
      />
    );
  }

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        // Renders the content outside the root node
        <KBarPositioner className="flex items-center text-lg text-white bg-black/50 ">
          <KBarAnimator className="flex flex-col justify-center p-2 bg-zinc-900 w-96 rounded-xl">
            <KBarSearch className="flex w-full h-20 px-4 bg-transparent outline-none" />
            <RenderResults />
            {/* // Search input */}
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  );
};

export default KBarCommand;
