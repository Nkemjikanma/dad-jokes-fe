"use client";

import { ConnectButton } from "@/components/ConnectButton"; // TODO: create a component for this
import { RewardSection } from "@/components/RewardSection";
import { useVote } from "@/hooks/useVote";
import { useWallet } from "@/hooks/useWallet";
import { abi } from "@/lib/abi";
import { ConnectPublicClient, ConnectWalletClient } from "@/lib/client";
import React, { useState, useEffect } from "react";
import { getContract } from "viem";

export const ConnectWallet = ({
	shouldShowRewardSection,
	index,
	joke,
}: { shouldShowRewardSection: boolean; index: number; joke: any }) => {
	const [publicStateClient, setStatePublicClient] = useState(null);
	const [walletStateClient, setStateWalletClient] = useState(null);
	const [dadJokesContract, setDadJokesContract] = useState(null);

	const { address, balance, handleClick } = useWallet(dadJokesContract);
	const { handleVote } = useVote({
		dadJokesContract,
		walletClient: walletStateClient,
		publicClient: publicStateClient,
	});

	useEffect(() => {
		const initializeClients = async () => {
			try {
				const publicClient = await ConnectPublicClient();
				const walletClient = await ConnectWalletClient();

				setStatePublicClient(publicClient);
				setStateWalletClient(walletClient);
			} catch (error) {
				console.log("Error initializing clients: ", error);
			}
		};
		initializeClients();
	}, []);

	useEffect(() => {
		if (publicStateClient && walletStateClient) {
			const jokesContract = getContract({
				address: "0xb98535cCbe3E7cf3748F82c0d9594B95fB2DBb02",
				abi: abi,
				client: { public: publicStateClient, wallet: walletStateClient },
			});

			setDadJokesContract(jokesContract);
		}
	}, [publicStateClient, walletStateClient]);

	if (!address) {
		return <ConnectButton handleClick={handleClick} />;
	}

	return (
		<>
			{shouldShowRewardSection ? (
				<RewardSection index={index} handleVote={handleVote} />
			) : (
				<>Can't reward without jokes</>
			)}
		</>
	);
};
