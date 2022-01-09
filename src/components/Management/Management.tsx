import springUniversity from "../../images/SpringCampusStockUniversity.jpg";
import { Button } from "../Button";
import { BriefCase } from "../Icons";

export const Management = () => {
	return (
		<>
			<p className='border border-[#627b9b] mx-12 md:mx-48'></p>
			<div className='flex justify-center items-center flex-wrap'>
				<div className='md:w-1/2 p-8 text-center order-2 md:order-1 md:text-left'>
					<BriefCase />
					<h1 className='my-4 font-bold text-xl md:text-3xl'>Stay in Manager Position</h1>
					<p className='md:w-3/4 md:text-lg text-[#627b9b] text-justify'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quas quam nam error minus
						cupiditate eos expedita aliquid? Facilis adipisci eveniet voluptates ipsa pariatur. Modi iste
						eius harum expedita reiciendis.
					</p>
					<Button className='my-2 text-sm md:text-base bg-[#627b9b] text-white p-2 rounded-lg active:scale-75 transition duration-300'>
						Get Start
					</Button>
				</div>
				<div className='w-2/3 my-8 md:w-1/2 order-1 md:order-2'>
					<img
						className='shadow-2xl rounded-lg md:rounded-l-xl md:rounded-r-none'
						src={springUniversity}
						alt='Spring of University'
					/>
				</div>
			</div>
		</>
	);
};
