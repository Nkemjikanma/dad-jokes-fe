import {
	http,
	type EIP1193Provider,
	createPublicClient,
	createWalletClient,
	custom,
} from "viem";
import { sepolia } from "viem/chains";
import "viem/window";

export async function ConnectWalletClient() {
	let transport: EIP1193Provider | undefined;

	if (typeof window !== "undefined" && window.ethereum) {
		transport = window.ethereum;
	} else {
		return null;
	}

	const walletClient = createWalletClient({
		chain: sepolia,
		transport: custom(transport),
	});

	return walletClient;
}

export async function ConnectPublicClient() {
	const publicClient = createPublicClient({
		chain: sepolia,
		// transport: http("https://rpc.sepolia.org"),
		transport: http(),
	});

	return publicClient;
}
