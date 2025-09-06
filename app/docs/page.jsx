const Description = () => {
	const sections = [
		{
			id: 'what-is-zen-ui',
			title: 'What is Zen UI',
			content: (
				<>
					<p className="mb-4 text-gray-700 leading-relaxed">
						Zen UI is a modern, lightweight React component library designed to help developers build beautiful and responsive user interfaces with minimal effort. Built with TypeScript and styled using Tailwind CSS, it offers a collection of carefully crafted components that follow best practices in design and accessibility.
					</p>
					<p className="mb-4 text-gray-700 leading-relaxed">
						Our philosophy centers around simplicity and zen-like clarity in design, ensuring that each component is intuitive to use while maintaining a clean, modern aesthetic. The library is built with performance in mind, ensuring smooth interactions and minimal bundle size.
					</p>
				</>
			)
		},
		{
			id: 'why-use-zen-ui',
			title: 'Why use Zen UI',
			content: (
				<>
					<p className="mb-4 text-gray-700 leading-relaxed">
						Zen UI stands out for its simplicity, performance, and developer experience. Here's why you should choose Zen UI:
					</p>
					<ul className="list-none space-y-2 mb-4">
						<li className="flex items-center text-gray-700">
							<span className="text-dark-blue mr-2">•</span> Performance First: Optimized components with minimal bundle size
						</li>
						<li className="flex items-center text-gray-700">
							<span className="text-dark-blue mr-2">•</span> Customizable: Extensive theming support through Tailwind CSS
						</li>
						<li className="flex items-center text-gray-700">
							<span className="text-dark-blue mr-2">•</span> Accessibility: WCAG 2.1 compliant components out of the box
						</li>
						<li className="flex items-center text-gray-700">
							<span className="text-dark-blue mr-2">•</span> Responsive: Mobile-first design approach
						</li>
						<li className="flex items-center text-gray-700">
							<span className="text-dark-blue mr-2">•</span> Type Safety: Full TypeScript support with comprehensive types
						</li>
						<li className="flex items-center text-gray-700">
							<span className="text-dark-blue mr-2">•</span> Well Documented: Detailed documentation with live examples
						</li>
					</ul>
				</>
			)
		},
		{
			id: 'installation',
			title: 'Installation',
			content: (
				<div className="space-y-6">
					<p className="text-gray-700 leading-relaxed">
						Getting started with Zen UI is straightforward. Follow these steps:
					</p>
					<div className="space-y-4">
						<div>
							<p className="font-semibold mb-2 text-gray-800">1. Install the package</p>
							<pre className="bg-[#1E293B] rounded-lg p-4">
								<code className="text-gray-100 font-mono text-sm">npm install @zen-ui/react</code>
							</pre>
						</div>
						<div>
							<p className="font-semibold mb-2 text-gray-800">2. Add Tailwind CSS configuration</p>
							<pre className="bg-[#1E293B] rounded-lg p-4">
								<code className="text-gray-100 font-mono text-sm">{`npm install -D tailwindcss\nnpx tailwindcss init`}</code>
							</pre>
						</div>
						<div>
							<p className="font-semibold mb-2 text-gray-800">3. Import the styles</p>
							<pre className="bg-[#1E293B] rounded-lg p-4">
								<code className="text-gray-100 font-mono text-sm">@import '@zen-ui/react/dist/styles.css';</code>
							</pre>
						</div>
						<div>
							<p className="font-semibold mb-2 text-gray-800">4. Start using components</p>
							<pre className="bg-[#1E293B] rounded-lg p-4">
								<code className="text-gray-100 font-mono text-sm">{`import { ComponentName } from '@zen-ui/react';`}</code>
							</pre>
						</div>
					</div>
				</div>
			)
		},
		{
			id: 'tech-stack',
			title: 'Tech Stack',
			content: (
				<div className="space-y-6">
					<div>
						<h3 className="text-lg font-semibold mb-2 text-gray-800">Core Technologies</h3>
						<ul className="list-none space-y-2 mb-4">
							<li className="flex items-center text-gray-700">
								<span className="text-dark-blue mr-2">•</span> React 18+ for UI components
							</li>
							<li className="flex items-center text-gray-700">
								<span className="text-dark-blue mr-2">•</span> TypeScript for type safety
							</li>
							<li className="flex items-center text-gray-700">
								<span className="text-dark-blue mr-2">•</span> Tailwind CSS for styling
							</li>
							<li className="flex items-center text-gray-700">
								<span className="text-dark-blue mr-2">•</span> Vite for blazing-fast development
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-2 text-gray-800">Development Tools</h3>
						<ul className="list-none space-y-2 mb-4">
							<li className="flex items-center text-gray-700">
								<span className="text-dark-blue mr-2">•</span> Storybook for component development
							</li>
							<li className="flex items-center text-gray-700">
								<span className="text-dark-blue mr-2">•</span> Jest & React Testing Library
							</li>
							<li className="flex items-center text-gray-700">
								<span className="text-dark-blue mr-2">•</span> ESLint & Prettier for code quality
							</li>
						</ul>
					</div>
				</div>
			)
		},
	];

	return (
		<div className="flex flex-col md:flex-row justify-between m-auto max-w-[1440px] mt-[60px] sm:mt-[100px] px-4 sm:px-7">
			<div className="sticky top-24 self-start overflow-y-auto w-full md:w-[300px] mb-6 md:mb-0 bg-white/80 backdrop-blur-sm rounded-lg p-4">
				<h1 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Get Started</h1>
				<div className="flex">
					<div className="h-auto border-l-2 border-dark-blue opacity-65 ml-1 mr-5 mt-1 mb-3"></div>
					<nav className="space-y-1 sm:space-y-2">
						{sections.map((section) => (
							<a
								key={section.id}
								href={`#${section.id}`}
								className="block text-sm sm:text-md mb-2 hover:text-dark-blue hover:cursor-pointer transition-colors duration-200"
							>
								{section.title}
							</a>
						))}
					</nav>
				</div>
			</div>

			<div className="w-full md:ml-6 lg:ml-8">
				{sections.map((section) => (
					<section
						key={section.id}
						id={section.id}
						className="mb-8 sm:mb-12 p-4 sm:p-8 bg-white rounded-lg duration-300"
					>
						<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 border-b pb-4">
							{section.title}
						</h2>
						<div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
							{section.content}
						</div>
					</section>
				))}
			</div>
		</div>
	);
};

export default Description;
