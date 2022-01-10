interface DescriptionProps {
	content: string;
}
export const Description = ({ content }: DescriptionProps) => {
	return (
		<div className='absolute invisible text-center md:visible md:bottom-44 md:text-lg bg-white opacity-70 w-1/2 p-2 md:p-4 rounded-tl-2xl rounded-br-2xl font-medium'>
			<p>{content}</p>
		</div>
	);
};
