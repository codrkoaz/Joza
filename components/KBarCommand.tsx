import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from 'kbar';

const actions = [
  {
    id: 'home',
    name: 'Home',
    shortcut: ['h'],
    keywords: 'Home, home',
    perform: () => (window.location.pathname = '/'),
  },
  {
    id: 'github',
    name: 'Github',
    shortcut: ['g'],
    keywords: 'github, Github',
    perform: () => window.open('https://github.com/codrkoaz'),
  },
  {
    id: 'work',
    name: 'Work',
    shortcut: ['w'],
    keywords: 'working, works, Work',
    perform: () => (window.location.pathname = 'Work'),
  },
  {
    id: 'skills',
    name: 'Skills',
    shortcut: ['s'],
    keywords: 'skills, Skills, skill',
    perform: () => (window.location.pathname = 'Skills'),
  },
  {
    id: 'brand',
    name: 'Brand',
    shortcut: ['b'],
    keywords: 'brand, Brand',
    perform: () => window.open('https://adreamersfuture.co', '_blank'),
  },
];

const KBarCommand = () => {
  function RenderResults() {
    const { results } = useMatches();
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === 'string' ? (
            <div>{item}</div>
          ) : (
            <div className={`bg-${active ? 'gray-400' : 'transparent'} h-12 `}>
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
