import university from "../../images/Georgetown-University.jpg";
import { Button } from "../Button";
import { Description } from "../Description";
import { Title } from "./Title";
import "./slider.css";

export const Slider = () => {
	return (
		<div className='slider'>
			<img src={university} alt='Georgetown-University' />
			<Title title='Georgetown University' />
			<Description
				className='description'
				content='Georgetown University is a private research university in the Georgetown neighborhood of Washington,
				D.C.'
			/>
			<div className='wrapper-btn'>
				<Button className='info-btn'>Get Info</Button>
				<Button className='about-btn'>About</Button>
			</div>
		</div>
	);
};
