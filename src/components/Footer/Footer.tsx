import { Button } from "../Button";

export const Footer = () => {
	return (
		<footer className='grid grid-cols-2 md:grid-cols-6 p-4 gap-x-12 gap-y-4 bg-[#627b9b] text-white'>
			<div className='grid gap-y-2 ml-6'>
				<p className='text-gray-300 uppercase'>Solutions</p>
				<p>Marketing</p>
				<p>Analitics</p>
				<p>Commerce</p>
				<p>Insights</p>
			</div>
			<div className='grid gap-y-2'>
				<p className='text-gray-300 uppercase'>Support</p>
				<p>Pricing</p>
				<p>Documentation</p>
				<p>Guids</p>
				<p>API Status</p>
			</div>
			<div className='grid gap-y-2 ml-6 md:ml-0'>
				<p className='text-gray-300 uppercase'>company</p>
				<p>About</p>
				<p>Blog</p>
				<p>Jobs</p>
				<p>Press</p>
				<p>Partners</p>
			</div>
			<div className='grid gap-y-2'>
				<p className='text-gray-300 uppercase'>Legal</p>
				<p>Claim</p>
				<p>Privacy</p>
				<p>Terms</p>
			</div>

			<div className='col-span-2 grid gap-y-2 ml-6 md:ml-0'>
				<p className='text-gray-300 uppercase'>Subscribe to our newsletter</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod officiis commodi id!</p>
				<div className='flex'>
					<input
						className='w-2/3 rounded-md mr-2 px-1 border text-black border-gray-700 bg-gray-200'
						type='text'
						placeholder='Enter Your Email'
					/>
					<Button className='bg-[#e2dedb] text-[#627b9b] rounded-lg px-1 active:scale-75 transition duration-300'>
						Subscribe
					</Button>
				</div>
			</div>
		</footer>
	);
};
