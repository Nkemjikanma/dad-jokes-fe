import { useRef, useState } from "react";

export const JokeModal = ({
	isModalOpen,
	setIsModalOpen,
	handleSubmit,
	setup,
	setSetup,
	punchline,
	setPunchline,
}) => {
	// const [setup, setSetup] = useState("");
	// const [punchline, setPunchline] = useState("");

	// 	const setupRef = useRef<HTMLInputElement>(null);
	// const punchlineRef = useRef<HTMLInputElement>(null);

	return (
		<>
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="bg-white p-8 rounded-lg">
						<div>
							<input
								className="border border-gray-300 rounded p-2 m-2"
								type="text"
								placeholder="setup"
								value={setup}
								onChange={(e) => setSetup(e.target.value)}
							/>

							<input
								className="border border-gray-300 rounded p-2 m-2"
								type="text"
								placeholder="punchline"
								value={punchline}
								onChange={(e) => setPunchline(e.target.value)}
							/>

							{/* Submit button */}
							<div className="flex justify-center">
								<button
									onClick={() => handleSubmit(setup, punchline)}
									type="button"
									className="bg-primaryDark text-primaryLight font-sans px-4 py-2 rounded"
								>
									Submit
								</button>

								<button
									onClick={() => setIsModalOpen(!isModalOpen)}
									type="button"
									className="bg-primaryDark text-primaryLight font-sans px-4 py-2 rounded"
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
