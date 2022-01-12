import springUniversity from "../../images/SpringCampusStockUniversity.jpg";
import mo3tafa from "../../images/mo3tafa.jpg";
import { Button } from "../Button";
import { BriefCase } from "../Icons";
import { Description } from "../Description";
import { Profile } from "./Profile";
import "./management.css";

export const Management = () => {
	return (
		<>
			<p className='divider'></p>
			<div className='wrapper'>
				<div className='left-section'>
					<BriefCase />
					<h1 className='title-mng'>Stay in Manager Position</h1>
					<Description
						className='start-description'
						content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quas quam nam error minus cupiditate eos
						expedita aliquid? Facilis adipisci eveniet voluptates ipsa pariatur. Modi iste eius harum expedita
						reiciendis.'
					/>
					<Button className='start-btn'>Get Start</Button>
					<p className='left-section-divider'></p>
					<Description
						className='developer-description'
						content='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic omnis deserunt harum
						inventore vero? Excepturi ut fuga temporibus distinctio velit esse iste quaerat consectetur
						earum recusandae? Vitae, quam dolorum."'
					/>
					<Profile url={mo3tafa} alt='Mostafa Fatehinia'>
						Mostafa Fatehinia, Web Developer
					</Profile>
				</div>
				<div className='right-section'>
					<img src={springUniversity} alt='Spring of University' />
				</div>
			</div>
		</>
	);
};
