"use client";

import { abi } from "@/lib/abi";
import { ConnectPublicClient } from "@/lib/client";
import { useEffect, useState } from "react";
import { type Abi, getContract } from "viem";

interface Joke {
	setup: string;
	punchline: string;
}

type JokesType = Joke[];

const publicClient = ConnectPublicClient();
const dadJokesContract = getContract({
	address: "0xb98535cCbe3E7cf3748F82c0d9594B95fB2DBb02",
	abi: abi,
	client: publicClient,
});

export const useJokes = () => {
	const [jokes, setJokes] = useState<JokesType>([]);

	useEffect(() => {
		const fetchJokes = async () => {
			try {
				const fetchedJokes = await dadJokesContract.read.getJokes();
				setJokes(fetchedJokes);
			} catch (error) {
				console.log("Error fetching jokes: ", error);
			}
		};
		fetchJokes();
	}, []);

	return jokes;
};
