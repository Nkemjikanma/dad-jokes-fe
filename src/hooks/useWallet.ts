"use client";

import { ConnectWalletClient } from "@/lib/client";
import { useEffect, useState } from "react";
import { formatEther } from "viem";

const useWallet = (dadJokesContract) => {
	const [address, setAddress] = useState(null);
	const [balance, setBalance] = useState<string>();

	async function handleClick() {
		try {
			const walletClient = await ConnectWalletClient();
			if (walletClient) {
				const [address] = await walletClient.requestAddress();
				setAddress(address);

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
