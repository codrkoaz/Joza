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
		id: 'work',
		name: 'Work',
		shortcut: ['w'],
		keywords: 'working, my works',
		perform: () => (window.location.pathname = 'Work'),
	},
	{
		id: 'skill',
		name: 'Skill',
		shortcut: ['s'],
		keywords: 'my skills',
		perform: () => (window.location.pathname = 'Skills'),
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
						<div className='active:bg-black p-3 h-20'>
							{item.name}
						</div>
					)
				}
			/>
		);
	}

	return (
		<KBarProvider actions={actions}>
			<KBarPortal>// Renders the content outside the root node
				<KBarPositioner className='bg-black/40 text-lg flex items-center text-white '>
					<KBarAnimator className=' w-1/3 flex flex-col justify-center overflow-hidden p-2 bg-black rounded-xl'>
						<KBarSearch className='flex px-4 w-full h-20 outline-none bg-black' />
						<RenderResults />
						{/* // Search input */}
					</KBarAnimator>
				</KBarPositioner>
			</KBarPortal>
		</KBarProvider>
	);
};

export default KBarCommand;
