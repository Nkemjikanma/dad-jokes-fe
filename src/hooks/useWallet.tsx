"use client";

import { ConnectWalletClient } from "@/lib/client";
import { useEffect, useState } from "react";
import { formatEther } from "viem";

export const useWallet = (dadJokesContract) => {
	const [address, setAddress] = useState<`0x${string}`>();
	const [balance, setBalance] = useState<string>();

	async function handleClick() {
		try {
			const walletClient = await ConnectWalletClient();
			if (walletClient) {
				const address = await walletClient.requestAddresses();
				console.log(address);
				setAddress(address[0]);

				const creatorBalance = Number.parseInt(
					await dadJokesContract.read.creatorBalances([address]),
				);

				setBalance(formatEther(BigInt(creatorBalance)));
			}
		} catch (error) {
			alert(`"Transaction failed: " ${error}`);
		}
	}

	return { address, balance, handleClick };
};
