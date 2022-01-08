import { Achievement } from ".";
import { Calculator, Chimistry, Computer, Earth, Mathematics } from "../Icons";

export const Achievements = () => {
	return (
		<div>
			<p className='text-center text-2xl drop-shadow-lg font-bold mt-8 border-t border-[#627b9b] text-[#627b9b] mx-12 pt-4'>
				Achiements
			</p>
			<div className='flex flex-wrap capitalize justify-around my-4 px-16 text-sm font-bold md:text-xl'>
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
