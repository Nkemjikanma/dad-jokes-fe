"use client";
import { useJokes } from "@/hooks/useJokes";
import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export default function Home() {
	const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
	const jokes = useJokes();

	const handleNextJoke = () => {
		setCurrentJokeIndex((prevIndex) =>
			prevIndex === 0 ? jokes.length - 1 : prevIndex + 1,
		);
	};

	const handlePreviousJoke = () => {
		setCurrentJokeIndex((prevIndex) =>
			prevIndex === 0 ? jokes.length - 1 : prevIndex - 1,
		);
	};

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				Hello World!
				<Card joke={jokes[currentJokeIndex]} />
				<div className="flex flex-row gap-4">
					<Button onClick={handlePreviousJoke}>Previous Joke</Button>
					<Button onClick={handleNextJoke}>Next Joke</Button>
				</div>
			</main>
		</div>
	);
}
