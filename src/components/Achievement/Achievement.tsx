interface AchievementProps {
	children: React.ReactNode;
}
export const Achievement = ({ children }: AchievementProps) => {
	return <div className='achievement'>{children}</div>;
};
