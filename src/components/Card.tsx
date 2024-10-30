export function Card({ joke }: { joke: { setup: string; punchline: string } }) {
	if (!joke) return null;
	return (
		<div className="bg-white rounded-lg shawdow-lg p-6 max-w-md mx-auto">
			<h2>{joke.setup}</h2>
			<p className="font-sans text-2xl text-primaryDark">{joke.punchline}</p>
		</div>
	);
}
