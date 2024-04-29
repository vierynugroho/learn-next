import Link from 'next/link';

const Navbar = () => {
	return (
		<>
			<div className='container flex justify-evenly my-3 text-center'>
				<Link
					href='/home'
					className='font-bold'
				>
					Home
				</Link>
				<Link
					href='/about-us'
					className='font-bold'
				>
					About Us
				</Link>
				<Link
					href='/login'
					className='font-bold'
				>
					Login
				</Link>
			</div>
		</>
	);
};

export default Navbar;
