import './Nav.scss';
import Logo from '../assets/images/logo-light.svg'

function Nav() {
	return (
		<>
		<header>
			<nav className='nav'>
				<a className='nav__logo'><img src={Logo}></img></a>
				<div className='nav__link'>
					<p>Apply for access</p>
				</div>
			</nav>
		</header>
		</>
	);
}

export default Nav;
