import logo from '../../assets/Saldi Main Logo (1).png'; 
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaSquareInstagram } from 'react-icons/fa6';
import './Footer.scss';

export default function Footer() {
    return (
      <>
      <footer >
      <div className="footer-section-one">
        <div className="contact-section">
            <h1>
                Kontakt
            </h1>
            <h2>
            Telefon: <a href="tel:+45902208">+45 46 90 22 08</a><br />
            Mail: <a href="mailto:info@saldi.dk">info@saldi.dk</a><br />
                Adresse: Østergade 24B <br />
                3200 Helsinge <br />
                CVR-nr 20756438
            </h2>

        </div>

        <div className="footer-nav">
           <h3> Løsninger </h3>
           <nav>
           <ul>
                <li><Link to="/Løsninger/Økonomistyring">Økonomistyring</Link></li>
                <li><Link to="/Løsninger/Lagerstyring">Lagerstyring</Link></li>
                <li><Link to="/Løsninger/Sagsstyring">Sagsstyring</Link></li>
                <li><Link to="/Løsninger/ButikWebshop">Butik & Webshop</Link></li>
              </ul>
           </nav>
        </div>
        </div>

        <div className="footer-section-two">
            <div className='social-media-section'>
            <Link to="https://www.linkedin.com/company/saldi-dk/posts/?feedView=all">
            <FaLinkedin size={30} />
            </Link>   
            <Link to="https://www.facebook.com/saldi.dk">
            <FaFacebook size={30} />
            </Link>
            <Link to="https://www.facebook.com/saldi.dk">
            <FaSquareInstagram size={30} />
            </Link>
            </div>
            <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
      </footer>
      </>
    
    )
}