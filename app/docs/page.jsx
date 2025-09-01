import { descriptionSections } from './docs';

const Description = () => {
	return (
		<div className="flex flex-col md:flex-row justify-between m-auto max-w-[1440px] mt-[100px] px-7">
			<div className="sticky top-24 self-start overflow-y-auto w-full md:w-[300px] mb-8 md:mb-0 bg-white/80 backdrop-blur-sm rounded-lg p-4">
				<p className="text-2xl font-bold mb-4 text-[1b362b]">Get Started</p>
				<div className="flex">
					<div className="h-auto border-l-2 border-dark-blue opacity-65 ml-1 mr-5 mt-1 mb-3"></div>
					<div>
						{descriptionSections.sort().map((item) => {
							return (
								<p
									key={item.id}
									className="text-md mb-2 hover:scale-125 hover:cursor-pointer origin-left duration-200 ease-in-out"
								>
									<a href={`#${item.id}`} className="block">
										{item.title}
									</a>
								</p>
							);
						})}
					</div>
				</div>
			</div>
			<div className="w-full md:ml-8 lg:ml-12">
				{descriptionSections.map((item) => (
					<div
						className="scroll-pt-5 mb-12 p-6 bg-white rounded-lg  transition-shadow duration-300"
						id={item.id}
						key={item.id}
					>
						<p className="text-3xl font-bold mb-4 text[]">{item.title}</p>
						<div className="prose prose-indigo max-w-none">
							{item.description.split('\\n').map((paragraph, index) => (
								<p key={index} className="leading-7 text-gray-700 whitespace-pre-wrap">
									{paragraph}
								</p>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Description;
