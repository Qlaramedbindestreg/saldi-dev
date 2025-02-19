import './Moduler.scss';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Moduler() {
    return (
        <>
        <div className='titel' >
            <div className='line'></div>
        <h1>Løsninger udviklet til dig</h1>
        </div>
        <div className='modul-wrapper'>
          <div className='modul'>
            <h1>Økonomistyring</h1>
            <p>Datadrevet software til finansstyring og håndtering af forretningskritiske data. Tag hånd om dine debitorer og skab overblik over ordrer og indtægtskilder.
            </p>
            <Link to="/Løsninger/Økonomistyring">
              <button>Læs mere om økonomistyring
                <IoIosArrowRoundForward size={20}/>
              </button>
            </Link>
          </div>
          <div className='modul'>
          <h1>Lagerstyring</h1>
            <p>Træk detaljerede rapporter & automatiser bestillingsprocesser. Håndter samlevarer & synkroniser forskellige varehuse på tværs af organisationen.  
            </p>
            <Link to="/Løsninger/Lagerstyring">
              <button>Læs mere om lagerstyring
                <IoIosArrowRoundForward size={20}/>
              </button>
            </Link>
          </div>
          <div className='modul'>
          <h1>Sagsstyringsmodul</h1>
            <p>Skab fuldt overblik på aktive sager, se udgifter og tildel opgaver til medarbejdere. Håndter eksterne og interne medarbejdere med modul til lønudregning. 
            </p>
            <Link to="/Løsninger/Sagsstyring">
              <button>Læs mere om sagsstyringsmodul
                <IoIosArrowRoundForward size={20}/>
              </button>
            </Link>
         </div>
        <div className='modul'>
        <h1>Butikskæder & webshops</h1>
            <p>Vores unikke butiksløsninger sikrer din virksomhed enestående driftssikerhed og forbedret kommunikation mellem afdelinger.
            </p>
            <Link to="/Løsninger/ButikWebshop">
              <button>Butikskæder & webshops
                <IoIosArrowRoundForward size={20}/>
              </button>
            </Link>
       </div>
        </div>
        </>
    )
}