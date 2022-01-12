interface TitleProps {
	title: string;
}
export const Title = ({ title }: TitleProps) => {
	return (
		<div className='university-title'>
			<p>{title}</p>
		</div>
	);
};
