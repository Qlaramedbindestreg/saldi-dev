import medShop from '../../assets/medshopdk-logo.jpg'; 
import stillads from '../../assets/herlev-stilladser.png'; 
import have from '../../assets/havemøbelland-logo.jpg'; 
import dentec from '../../assets/dentec-logo.jpg'; 
import ibon from '../../assets/ibon-logo.jpg'; 
import mebel from '../../assets/mebel-home-logo.jpg'; 
import trustpilot from '../../assets/trustpilot.png'; 
import './logoSlider.scss';

export default function LogoSlider() {
    return (
        <>
        <h1 className='h1'>Mere end 300 virksomheder, benytter allerede systemet</h1>
      <div className="logo-slider-container">
        <div className="logo-slider">
          <img src={medShop} alt="logo" />
          <img src={stillads} alt="logo" />
          <img src={have} alt="logo" />
          <img src={dentec} alt="logo" />
          <img src={ibon} alt="logo" />
          <img src={mebel} alt="logo" />
        </div>
        <div className="logo-slider" aria-hidden="true">
          <img src={medShop} alt="logo" />
          <img src={stillads} alt="logo" />
          <img src={have} alt="logo" />
          <img src={dentec} alt="logo" />
          <img src={ibon} alt="logo" />
          <img src={mebel} alt="logo" />
        </div>
      </div>
       
      <div className='grey-line'>

      </div>

       <div className='trustpilot-wrapper'>
        <img src={trustpilot} alt="trustpilot" />
        <p>4.7+ stjerner på Trustpilot</p>
       </div>
      </>
    );
  };