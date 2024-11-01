"use client";

import { ConnectButton } from "@/components/ConnectButton"; // TODO: create a component for this
import { RewardSection } from "@/components/RewardSection";
import { useSubmitJoke } from "@/hooks/useSubmitJoke";
import { useVote } from "@/hooks/useVote";
import { useWallet } from "@/hooks/useWallet";
import { useWithdraw } from "@/hooks/useWithdraw";
import { abi } from "@/lib/abi";
import { ConnectPublicClient, ConnectWalletClient } from "@/lib/client";
import React, { useState, useEffect } from "react";
import { getContract } from "viem";
import { JokeModal } from "./JokeModal";
import { WithdrawSection } from "./WithdrawSection";

export const ConnectWallet = ({
	shouldShowRewardSection,
	index,
	joke,
}: { shouldShowRewardSection: boolean; index: number; joke: any }) => {
	const [publicStateClient, setStatePublicClient] = useState(null);
	const [walletStateClient, setStateWalletClient] = useState(null);
	const [dadJokesContract, setDadJokesContract] = useState(null);
	const [setup, setSetup] = useState("");
	const [punchline, setPunchline] = useState("");

	const { address, balance, handleClick } = useWallet(dadJokesContract);
	const { handleVote } = useVote({
		dadJokesContract,
		walletClient: walletStateClient,
		publicClient: publicStateClient,
	});
	const { handleWithdraw } = useWithdraw({
		dadJokesContract,
		walletClient: walletStateClient,
		publicClient: publicStateClient,
	});

	const { isModalOpen, setIsModalOpen, handleSubmit } = useSubmitJoke({
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
			<div>
				<button
					className="bg-primaryDark text-primary:ight font-sans px-4 py-2 rounded"
					onClick={() => setIsModalOpen(true)}
					type="button"
				>
					Add joke
				</button>
				<JokeModal
					{...{
						isModalOpen,
						setIsModalOpen,
						handleSubmit,
						setup,
						setSetup,
						punchline,
						setPunchline,
					}}
				/>
			</div>
			{shouldShowRewardSection ? (
				<>
					<RewardSection index={index} handleVote={handleVote} />
					<div className="mt-6 flex items-center w-full bg-gray-600 bg-opacity-25 p-4 rounded">
						<div className="flex items-center justify-center w-full">
							<WithdrawSection
								handleWithdraw={handleWithdraw}
								balance={balance}
							/>
						</div>
					</div>
				</>
			) : (
				<>Can't reward without jokes</>
			)}
		</>
	);
};
