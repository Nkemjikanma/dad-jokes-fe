export const RewardSection = ({
	index,
	handleVote,
}: { index: number; handleVote: (index: number, type: number) => void }) => {
	return (
		<>
			<div className="justify-center flex pt-5 text-primaryDark font-sans text-2xl font-bold">
				Reward the Joke
			</div>
			<div className="flex justify-center space-x-20 py-4">
				<button
					className="text-5xl focus:outline-none"
					onClick={() => handleVote(index, 0)}
					type="button"
				>
					ha
				</button>
				<button
					className="text-5xl focus:outline-none"
					onClick={() => handleVote(index, 1)}
					type="button"
				>
					haha
				</button>
				<button
					className="text-5xl focus:outline-none"
					onClick={() => handleVote(index, 2)}
					type="button"
				>
					hahaha
				</button>
			</div>
		</>
	);
};
