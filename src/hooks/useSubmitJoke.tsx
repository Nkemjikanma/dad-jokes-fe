import { useState } from "react";
import { sepolia } from "viem/chains";

export const useSubmitJoke = ({
	dadJokesContract,
	publicClient,
	walletClient,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmit = async (setup: string, punchline: string) => {
		const address = await walletClient.requestAddresses();
		await walletClient.switchChain({ id: sepolia.id });

		const { request } = await publicClient.simulateContract({
			address: dadJokesContract.address,
			abi: dadJokesContract.abi,
			functionName: "addJoke",
			args: [setup, punchline],
			account: address[0],
		});

		await walletClient.writeContract(request);

		setIsModalOpen(false);
	};

	return { isModalOpen, setIsModalOpen, handleSubmit };
};
