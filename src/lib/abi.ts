export const abi = [
	{ type: "constructor", inputs: [], stateMutability: "nonpayable" },
	{
		type: "function",
		name: "BLEH_JOKE",
		inputs: [],
		outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "DECENT_JOKE",
		inputs: [],
		outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "PREMIUM_JOKE",
		inputs: [],
		outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "addJoke",
		inputs: [
			{ name: "_setup", type: "string", internalType: "string" },
			{ name: "_punchline", type: "string", internalType: "string" },
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "creatorBalances",
		inputs: [{ name: "", type: "address", internalType: "address" }],
		outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "deleteJokes",
		inputs: [{ name: "jokeId", type: "uint256", internalType: "uint256" }],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "getJokes",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "tuple[]",
				internalType: "struct DadJokes.Joke[]",
				components: [
					{ name: "setup", type: "string", internalType: "string" },
					{ name: "punchline", type: "string", internalType: "string" },
					{ name: "creator", type: "address", internalType: "address" },
					{ name: "isDeleted", type: "bool", internalType: "bool" },
				],
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "jokes",
		inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
		outputs: [
			{ name: "setup", type: "string", internalType: "string" },
			{ name: "punchline", type: "string", internalType: "string" },
			{ name: "creator", type: "address", internalType: "address" },
			{ name: "isDeleted", type: "bool", internalType: "bool" },
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "rewardJoke",
		inputs: [
			{ name: "jokeId", type: "uint256", internalType: "uint256" },
			{ name: "_rewardType", type: "uint8", internalType: "uint8" },
		],
		outputs: [],
		stateMutability: "payable",
	},
	{
		type: "function",
		name: "withdrawBalance",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "event",
		name: "BalanceWithdrawn",
		inputs: [
			{
				name: "creator",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "amount",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "JokeAdded",
		inputs: [
			{
				name: "jokeId",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "creator",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "JokeDeleted",
		inputs: [
			{
				name: "jokeId",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "JokeRewarded",
		inputs: [
			{
				name: "jokeId",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "rewardType",
				type: "uint8",
				indexed: false,
				internalType: "uint8",
			},
			{
				name: "rewardAmount",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{ type: "error", name: "DadJokes__DeletedJoke", inputs: [] },
	{ type: "error", name: "DadJokes__FailedToWithdraw", inputs: [] },
	{ type: "error", name: "DadJokes__InvalidJokeIndex", inputs: [] },
	{ type: "error", name: "DadJokes__InvalidRewardAmount", inputs: [] },
	{ type: "error", name: "DadJokes__InvalidRewardType", inputs: [] },
	{ type: "error", name: "DadJokes__NoBalanceToWithdraw", inputs: [] },
	{
		type: "error",
		name: "DadJokes__OnlyCreatorCanPerformThisAction",
		inputs: [],
	},
];
