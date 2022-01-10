interface DescriptionProps {
	content: string;
	className: string;
}
export const Description = ({ content, className }: DescriptionProps) => {
	return <p className={className}>{content}</p>;
};
