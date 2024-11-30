import React from 'react';
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from 'kbar';

// Type for an action item
interface Action {
  id: string;
  name: string;
  shortcut: string[];
  keywords: string;
  perform: () => void;
}

// Define the actions array with TypeScript type
const actions: Action[] = [
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
    perform: () => (window.location.pathname = '/Work'),
  },
  {
    id: 'skills',
    name: 'Skills',
    shortcut: ['s'],
    keywords: 'skills, Skills, skill',
    perform: () => (window.location.pathname = '/Skills'),
  },
  {
    id: 'brand',
    name: 'Brand',
    shortcut: ['b'],
    keywords: 'brand, Brand',
    perform: () => window.open('https://adreamersfuture.co', '_blank'),
  },
];

const KBarCommand: React.FC = () => {
  const searchRef = React.useRef<HTMLInputElement>(null);

  // Function to focus the search input when clicked

  function RenderResults() {
    const { results } = useMatches();
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) =>
          typeof item === 'string' ? (
            <div>{item}</div>
          ) : (
            <div className={`bg-${active ? 'gray-400' : 'transparent'} h-10`}>
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
        {/* Renders the content outside the root node */}
        <KBarPositioner className="fixed flex items-center text-white text-md bg-black/50">
          <KBarAnimator className="flex flex-col justify-center w-1/2 p-4 bg-zinc-900 rounded-xl">
            <KBarSearch className="relative flex w-full h-20 px-20 bg-transparent outline-none" />
            <RenderResults />
            {/* Search input */}
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </KBarProvider>
  );
};

export default KBarCommand;
