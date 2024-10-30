export const Button = ({
	onClick,
	children,
}: { onClick: () => void; children: React.ReactNode }) => {
	return (
		<button
			className="bg-primaryDark text-primaryLight font-sans px-4 py-2 rounded"
			onClick={onClick}
			type="button"
		>
			{children}
		</button>
	);
};
