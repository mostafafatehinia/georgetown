import university from "../../images/Georgetown-University.jpg";
import { Button } from "../Button";
import { Description } from "./Description";
import { Title } from "./Title";
export const Slider = () => {
	return (
		<div className='flex justify-center relative'>
			<img className='w-3/4 mt-8 md:w-2/3 rounded-2xl md:-mt-24' src={university} alt='Georgetown-University' />
			<Title title='Georgetown University' />
			<Description
				content='Georgetown University is a private research university in the Georgetown neighborhood of Washington,
				D.C.'
			/>
			<div className='absolute bottom-6 md:bottom-24'>
				<Button className='text-sm bg-[#e2dedb] w-16 h-8 md:w-20 md:h-10 md:text-base rounded-lg mr-4 active:scale-75 transition duration-300'>
					Get Info
				</Button>
				<Button className='text-white text-sm w-16 h-8 md:w-20 md:h-10 md:text-base rounded-lg bg-[#627b9b] active:scale-75 transition duration-300'>
					About
				</Button>
			</div>
		</div>
	);
};
