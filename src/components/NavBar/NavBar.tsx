import { useRef, useState } from "react";
import { Button } from "../Button";
import { Close, Hat, Menu } from "../Icons";
import "./style.css";

export const NavBar = () => {
	const menuRef = useRef<HTMLDivElement | null>(null);
	const [openMenu, setOpenMenu] = useState(false);
	const handleMenu = () => {
		setOpenMenu((preOpenMenu) => !preOpenMenu);
	};
	if (openMenu) {
		menuRef.current?.classList.remove("hidden");
	} else {
		menuRef.current?.classList.add("hidden");
	}

	return (
		<nav className='flex justify-between p-6 text-[#627b9b] h-20 md:h-52 bg-white'>
			<div>
				<Button className='pl-2 pr-2 hover:text-blue-500 pt-1 active:scale-110 transition duration-300'>
					{!openMenu ? <Hat /> : ""}
				</Button>
			</div>
			<div className='invisible md:visible'>
				<Button className='p-2 border-2 border-white active:text-blue-500 active:scale-75 active:border-blue-500 transition duration-300 rounded-lg'>
					Soulutions
				</Button>
				<Button className='p-2 border-2 border-white active:text-blue-500 active:scale-75 active:border-blue-500 transition duration-300 rounded-lg'>
					Pricing
				</Button>
				<Button className='p-2 border-2 border-white active:text-blue-500 active:scale-75 active:border-blue-500 transition duration-300 rounded-lg'>
					Partners
				</Button>
				<Button className='p-2 border-2 border-white active:text-blue-500 active:scale-75 active:border-blue-500 transition duration-300 rounded-lg'>
					Company
				</Button>
			</div>
			<div className='invisible md:visible'>
				<Button className='p-2 border-2 border-white active:text-blue-500 active:scale-75 active:border-blue-500 transition duration-300 rounded-lg'>
					SignIn
				</Button>
				<Button className='p-2 ml-2 text-white bg-blue-500 active:scale-75 transition duration-300 rounded-lg'>
					SignUp
				</Button>
			</div>
			<div className='visible md:hidden'>
				<Button onClick={handleMenu} className='active:scale-75 transition duration-300 pt-1'>
					{openMenu ? <Close /> : <Menu />}
				</Button>
			</div>
			<div className='hidden relative text-sm animate' ref={menuRef}>
				<Button className=' absolute right-10 p-2 border-2 border-white active:text-blue-500 active:scale-75 active:border-blue-500 transition duration-300 rounded-lg'>
					Soulutions
				</Button>
				<Button className=' absolute right-32 p-2 border-2 border-white active:text-blue-500 active:scale-75 active:border-blue-500 transition duration-300 rounded-lg'>
					Pricing
				</Button>
				<Button className=' absolute right-72 p-2 border-2 border-white active:text-blue-500 active:scale-75 active:border-blue-500 transition duration-300 rounded-lg'>
					Partners
				</Button>
				<Button className=' absolute right-48 p-2 border-2 border-white active:text-blue-500 active:scale-75 active:border-blue-500 transition duration-300 rounded-lg'>
					Company
				</Button>
			</div>
		</nav>
	);
};
