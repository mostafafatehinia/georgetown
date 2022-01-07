interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button = ({ children, className, onClick }: ButtonProps) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};
