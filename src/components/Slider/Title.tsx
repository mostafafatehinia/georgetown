interface TitleProps {
	title: string;
}
export const Title = ({ title }: TitleProps) => {
	return (
		<div className='absolute w-1/2 text-center md:w-auto text-base bottom-20 md:bottom-72 md:text-xl md:font-semibold bg-white opacity-80 p-2 md:p-4 rounded-tr-2xl rounded-bl-2xl font-medium'>
			<p>{title}</p>
		</div>
	);
};
