import { Button } from "../Button";
import "./footer.css";

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='solution'>
				<p className='col-title'>Solutions</p>
				<p>Marketing</p>
				<p>Analitics</p>
				<p>Commerce</p>
				<p>Insights</p>
			</div>
			<div className='support'>
				<p className='col-title'>Support</p>
				<p>Pricing</p>
				<p>Documentation</p>
				<p>Guids</p>
				<p>API Status</p>
			</div>
			<div className='company'>
				<p className='col-title'>company</p>
				<p>About</p>
				<p>Blog</p>
				<p>Jobs</p>
				<p>Press</p>
				<p>Partners</p>
			</div>
			<div className='legal'>
				<p className='col-title'>Legal</p>
				<p>Claim</p>
				<p>Privacy</p>
				<p>Terms</p>
			</div>

			<div className='subscribe'>
				<p className='col-title'>Subscribe to our newsletter</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod officiis commodi id!</p>
				<div className='flex'>
					<input className='email-input' type='text' placeholder='Enter Your Email' />
					<Button className='submit-btn'>Subscribe</Button>
				</div>
			</div>
		</footer>
	);
};
