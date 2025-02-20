import { useEffect, useRef, useState } from 'react';
import medShop from '../../assets/medshopdk-logo.jpg'; 
import stillads from '../../assets/herlev-stilladser.png'; 
import have from '../../assets/havemøbelland-logo.jpg'; 
import dentec from '../../assets/dentec-logo.jpg'; 
import ibon from '../../assets/ibon-logo.jpg'; 
import mebel from '../../assets/mebel-home-logo.jpg'; 
import trustpilot from '../../assets/trustpilot.png'; 
import './logoSlider.scss';

export default function LogoSlider() {
  const sliderRef = useRef(null);
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    let count = 0;

    const animateSlider = () => {
      if (slider) {
        count++;
        setLoopCount(count);

        if (count < 7) {
          slider.style.transition = 'transform 20s linear'; 
          slider.style.transform = `translateX(-50%)`;
        } else {
      
          setTimeout(() => {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            count = 0;
            setLoopCount(0);
            setTimeout(animateSlider, 100); 
          }, 20000); 
        }
      }
    };

    setTimeout(animateSlider, 100); 

    return () => clearTimeout(animateSlider);
  }, []);

  return (
    <>
      <h1 className='h1'>Mere end 300 virksomheder, benytter allerede systemet</h1>
      <div className="logo-slider-container">
        <div className="logo-slider" ref={sliderRef}>
          {[medShop, stillads, have, dentec, ibon, mebel].map((logo, index) => (
            <img key={index} src={logo} alt="logo" />
          ))}
          {[medShop, stillads, have, dentec, ibon, mebel].map((logo, index) => (
            <img key={`dup-${index}`} src={logo} alt="logo" />
          ))}
        </div>
      </div>

      <div className='grey-line'></div>

      <div className='trustpilot-wrapper'>
        <img src={trustpilot} alt="trustpilot" />
        <p>4.7+ stjerner på Trustpilot</p>
      </div>
    </>
  );
}
