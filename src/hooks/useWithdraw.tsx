import { sepolia } from "viem/chains";

export const useWithdraw = ({
	dadJokesContract,
	walletClient,
	publicClient,
}) => {
	const handleWithdraw = async () => {
		if (!publicClient || !walletClient) return;

		const address = await walletClient.requestAddresses();
		await walletClient.switchChain({ id: sepolia.id });

		const { request } = await publicClient.simulateContract({
			address: dadJokesContract.address,
			abi: dadJokesContract.abi,
			functionName: "withdrawBalance",
			account: address[0],
		});

		await walletClient.writeContract(request);
	};

	return { handleWithdraw };
};
