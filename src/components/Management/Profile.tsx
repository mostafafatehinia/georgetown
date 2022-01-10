interface ProfileProps {
	url: string;
	alt: string;
	children: React.ReactNode;
}
export const Profile = ({ url, alt, children }: ProfileProps) => {
	return (
		<div className='flex flex-col md:flex-row my-4 items-center font-bold text-sm'>
			<img src={url} alt={alt} className='w-20 h-20 md:w-10 md:h-10 my-2 md:mr-4 rounded-full' />
			{children}
		</div>
	);
};
