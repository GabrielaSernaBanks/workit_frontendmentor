import './Nav.scss';
import Logo from '../assets/images/logo-light.svg'

function Nav() {
  return (
    <div className="nav">
      
      <img src={Logo}></img>
    
      <h2 className='navLink'>
        Apply for access
      </h2>
    </div>
  );
}

export default Nav;
