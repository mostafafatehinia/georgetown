import { Achievement } from ".";
import { Calculator, Chimistry, Computer, Earth, Mathematics } from "../Icons";
import "./achievement.css";

export const Achievements = () => {
	return (
		<div>
			<p className='title'>Achiements</p>
			<div className='achivements'>
				<Achievement>
					<Computer />
					computer
				</Achievement>
				<Achievement>
					<Chimistry />
					chimistry
				</Achievement>
				<Achievement>
					<Mathematics />
					mathematics
				</Achievement>
				<Achievement>
					<Earth />
					physics
				</Achievement>
				<Achievement>
					<Calculator />
					accounting
				</Achievement>
			</div>
		</div>
	);
};
