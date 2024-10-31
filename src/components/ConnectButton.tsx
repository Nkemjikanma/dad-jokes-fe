"use client";

import Image from "next/image";

export const ConnectButton = ({ handleClick }: { handleClick: () => void }) => {
	return (
		<div className="flex justify-center">
			<button
				className="px-8 py-2 rounded-md flex flex-row items-center justify-center bg-primaryDark text-primaryLight font-sans"
				onClick={handleClick}
				type="button"
			>
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
					alt="Metamast"
					width={25}
					height={25}
				/>

				<h1>Connect Wallet</h1>
			</button>
		</div>
	);
};
