export const WithdrawSection = ({
	balance,
	handleWithdraw,
}: { balance: string; handleWithdraw: () => void }) => {
	return (
		<>
			{((balance !== null && Number.parseFloat(balance) > 0) || !balance) && (
				<div className="text-2xl">
					Balance: {balance} ETH
					<button
						className="bg-primaryDark text-primaryLight font-sans px-4 py-2 rounded"
						onClick={handleWithdraw}
						type="button"
					>
						Cashout
					</button>
				</div>
			)}
		</>
	);
};
