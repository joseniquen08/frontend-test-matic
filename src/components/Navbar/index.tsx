import { useNavigate } from 'react-router-dom';
import { Button } from '../Shared/Button';
import { Logo } from '../Shared/Logo';
import './index.css';
import { NavItem } from './NavItem';

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__logo' onClick={() => navigate('/')}>
          <Logo color='black'/>
        </div>
        <ul className='navbar__items'>
          <NavItem text='Home'/>
          <NavItem text='About'/>
          <NavItem text='Contact'/>
          <NavItem text='Blog'/>
          <NavItem text='Careers'/>
        </ul>
        <Button route='/'>
          <p>Request Invite</p>
        </Button>
      </div>
    </div>
  )
}
