import { sepolia } from "viem/chains";
import { parseEther } from "viem/utils";

import type { PublicClient, WalletClient } from "viem";
import type { DadJokesContract } from "../types/contracts";

interface UseVoteParams {
	dadJokesContract: DadJokesContract;
	walletClient: WalletClient | null;
	publicClient: PublicClient | null;
}
export const useVote = ({
	dadJokesContract,
	walletClient,
	publicClient,
}: UseVoteParams) => {
	async function handleVote(index: number, type: number) {
		const reward = type + 1;

		if (!publicClient || !walletClient) return;

		const address = await walletClient.requestAddresses();
		await walletClient.switchChain({ id: sepolia.id });

		let rewardAmount: bigint;

		switch (type) {
			case 0:
				rewardAmount = parseEther("0.001");
				break;
			case 1:
				rewardAmount = parseEther("0.005");
				break;
			case 2:
				rewardAmount = parseEther("0.01");
				break;
			default:
				throw new Error("Invalid reward type");
		}

		// Simulate the contract call to rewardJoke with the specified index and reward, this will return a request object that can be used to write the contract

		const { request } = await publicClient.simulateContract({
			address: dadJokesContract.address,
			abi: dadJokesContract.abi,
			functionName: "rewardJoke",
			args: [index, reward],
			account: address[0],
			value: rewardAmount,
		});

		await walletClient.writeContract(request);
	}

	return { handleVote };
};
