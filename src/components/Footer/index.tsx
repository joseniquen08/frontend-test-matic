import { LogoFacebook } from '../../icons/LogoFacebook';
import { LogoInstagram } from '../../icons/LogoInstagram';
import { LogoPinterest } from '../../icons/LogoPinterest';
import { LogoTwitter } from '../../icons/LogoTwitter';
import { LogoYoutube } from '../../icons/LogoYoutube';
import { Button } from '../Shared/Button';
import { Logo } from '../Shared/Logo';
import { FtrItem } from './FtrItem';
import { IconSN } from './IconSN';
import './index.css';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__left'>
          <div className='footer__brand'>
            <div>
              <Logo color='white'/>
            </div>
            <ul className='footer__items'>
              <IconSN><LogoFacebook/></IconSN>
              <IconSN><LogoYoutube/></IconSN>
              <IconSN><LogoTwitter/></IconSN>
              <IconSN><LogoPinterest/></IconSN>
              <IconSN><LogoInstagram/></IconSN>
            </ul>
          </div>
          <div className='footer__pages'>
            <FtrItem name='About Us'/>
            <FtrItem name='Contact'/>
            <FtrItem name='Blog'/>
            <FtrItem name='Careers'/>
            <FtrItem name='Support'/>
            <FtrItem name='Privacy Policy'/>
          </div>
        </div>
        <div className='footer__right'>
          <Button route='/'>
            <p>Request Invite</p>
          </Button>
          <p className='footer__copy'>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}
