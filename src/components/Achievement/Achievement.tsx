interface AchievementProps {
	children: React.ReactNode;
}
export const Achievement = ({ children }: AchievementProps) => {
	return (
		<div className='flex items-center p-4 text-[#627b9b] hover:scale-110 transition duration-300'>{children}</div>
	);
};
