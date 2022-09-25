import { features } from '../../data/features';
import { Button } from '../Shared/Button';
import { CardFeature } from './CardFeature';
import './index.css';

export const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__section'>
        <div className='hero__section__container'>
          <div className='hero__section__left'>
            <p className='hero__section__title'>Next generation digital banking</p>
            <p className='hero__section__text'>Take your financial life online. Your asybank account will be a one-stop-shop for spending, saving, budgeting, nvesting, and much more.</p>
            <Button route='/'>
              <p>Request Invite</p>
            </Button>
          </div>
          <div className='hero__section__mockups'>
            <img src="./mockups-hero.png" alt="Hero mockups" />
          </div>
        </div>
      </div>
      <div className='hero__vectors'>
        <img src="./bg-hero.svg" alt="Hero vectors" />
      </div>
      <div className='hero__subsection'>
        <div className='hero__subsection__container'>
          <div className='hero__subsection__header'>
            <p className='hero__subsection__title'>Why choose Easybank?</p>
            <p className='hero__subsection__text'>We leverage Open Banking to turn your bank acount into your financial hub. Control your finances like never before.</p>
          </div>
          <div className='hero__subsection__cards'>
            {
              features.map(({ image, title, content }) => (
                <CardFeature image={image} title={title} content={content}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
