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
		keywords: 'practicing my skills, my skills',
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
						<div
							style={{
								background: active ? 'black' : 'transparent',
							}}
						>
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
					<KBarPositioner className='bg-black/70 font-bold text-lg flex items-center text-white'>
                        <KBarAnimator className=' w-1/3 flex flex-col justify-center overflow-hidden p-2 dark:bg-black/80 rounded-xl'>
							<KBarSearch className="flex px-4 w-full h-20 outline-none dark:bg-black/80"/>
							<RenderResults />
							{/* // Search input */}
						</KBarAnimator>
					</KBarPositioner>
				</KBarPortal>
			</KBarProvider>
		
	);
};

export default KBarCommand;
