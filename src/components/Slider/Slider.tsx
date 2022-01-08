import university from "../../images/Georgetown-University.jpg";
import { Button } from "../Button";
export const Slider = () => {
	return (
		<div className='flex justify-center relative'>
			<img className='w-3/4 mt-8 md:w-2/3 rounded-2xl md:-mt-24' src={university} alt='Georgetown-University' />
			<div className='absolute w-1/2 text-center md:w-auto text-base bottom-20 md:bottom-72 md:text-xl md:font-semibold bg-white opacity-80 p-2 md:p-4 rounded-tr-2xl rounded-bl-2xl font-medium'>
				<p>Georgetown University</p>
			</div>
			<div className='absolute invisible text-center md:visible md:bottom-44 md:text-lg bg-white opacity-70 w-1/2 p-2 md:p-4 rounded-tl-2xl rounded-br-2xl font-medium'>
				<p>
					Georgetown University is a private research university in the Georgetown neighborhood of Washington,
					D.C.
				</p>
			</div>
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
