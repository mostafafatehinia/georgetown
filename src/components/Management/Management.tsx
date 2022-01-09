import springUniversity from "../../images/SpringCampusStockUniversity.jpg";
import mo3tafa from "../../images/mo3tafa.jpg";
import { Button } from "../Button";
import { BriefCase } from "../Icons";

export const Management = () => {
	return (
		<>
			<p className='border-t border-[#627b9b] mx-12 md:mx-48'></p>
			<div className='flex justify-center items-center flex-wrap'>
				<div className='md:w-1/2 p-8 text-center order-2 md:order-1 md:text-left'>
					<BriefCase />
					<h1 className='my-4 font-bold text-xl md:text-3xl'>Stay in Manager Position</h1>
					<p className='md:w-4/5 md:text-lg text-[#627b9b] text-justify'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quas quam nam error minus
						cupiditate eos expedita aliquid? Facilis adipisci eveniet voluptates ipsa pariatur. Modi iste
						eius harum expedita reiciendis.
					</p>
					<Button className='my-2 text-sm md:text-base bg-[#627b9b] text-white p-2 rounded-lg active:scale-75 transition duration-300'>
						Get Start
					</Button>
					<p className='border-t border-[#627b9b] md:w-4/5 my-8'></p>
					<p className='text-[#627b9b] md:w-4/5 text-justify'>
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic omnis deserunt harum
						inventore vero? Excepturi ut fuga temporibus distinctio velit esse iste quaerat consectetur
						earum recusandae? Vitae, quam dolorum."
					</p>
					<div className='flex flex-col md:flex-row my-4 items-center font-bold text-sm'>
						<img
							src={mo3tafa}
							alt='Mostafa Fatehinia'
							className='w-20 h-20 md:w-10 md:h-10 my-2 md:mr-4 rounded-full'
						/>
						Mostafa Fatehinia, Web Developer
					</div>
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
