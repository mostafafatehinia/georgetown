import { useRef, useState } from "react";
import { Button } from "../Button";
import { Close, Hat, Menu } from "../Icons";
import "./navBar.css";

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
		<nav className='nav'>
			<div>
				<Button className='hat'>{!openMenu ? <Hat /> : ""}</Button>
			</div>
			<div className='desktop-visiblity'>
				<Button className='btn'>Soulutions</Button>
				<Button className='btn'>Pricing</Button>
				<Button className='btn'>Partners</Button>
				<Button className='btn'>Company</Button>
			</div>
			<div className='desktop-visiblity'>
				<Button className='btn'>SignIn</Button>
				<Button className='signup-btn'>SignUp</Button>
			</div>
			<div className='visible md:hidden'>
				<Button onClick={handleMenu} className='menu'>
					{openMenu ? <Close /> : <Menu />}
				</Button>
			</div>
			<div className='hidden mobile-view' ref={menuRef}>
				<Button className=' right-10 mobile-btn'>Soulutions</Button>
				<Button className=' right-32 mobile-btn'>Pricing</Button>
				<Button className=' right-72 mobile-btn'>Partners</Button>
				<Button className=' right-48 mobile-btn'>Company</Button>
			</div>
		</nav>
	);
};
