import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import LogIn from '../LogIn/LogIn';
import './Header.scss';
import logo from '../../assets/Saldi Main Logo (1).png'; 
import whiteLogo from '../../assets/Saldi White logo.png'; 

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showLøsningerDropdown, setShowLøsningerDropdown] = useState(false);
  const [showVejledningDropdown, setShowVejledningDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
        <header className={scrolled ? 'scrolled' : ''}>
            <div className='header-section-one'>
             <Link to="/"><img src={logo} alt="logo" /></Link>
            <div className='header-actions'>
             <Search />
             <LogIn></LogIn>
             <Link to="/Løsninger">
            <button>Kom i gang</button>
            </Link>
            </div>
            </div>

            <div className='header-section-two'>
      <Link to="/"><img src={whiteLogo} alt="white logo" className='white-logo' /></Link>
      <nav>
        <ul>
          <li 
            onMouseEnter={() => setShowLøsningerDropdown(true)} 
            onMouseLeave={() => setShowLøsningerDropdown(false)}
          >
            <Link to="/Løsninger">Løsninger</Link>
            {showLøsningerDropdown && (
              <ul className="dropdown">
                <li><Link to="/Løsninger/Økonomistyring">Økonomistyring</Link></li>
                <li><Link to="/Løsninger/Lagerstyring">Lagerstyring</Link></li>
                <li><Link to="/Løsninger/Sagsstyring">Sagsstyring</Link></li>
                <li><Link to="/Løsninger/ButikWebshop">Butik & Webshop</Link></li>
                <li><Link to="/Løsninger/Projektstyring">Projektstyring</Link></li>
                <li><Link to="/Løsninger/Materialeudlejning">Materialeudlejning</Link></li>
                <li><Link to="/Løsninger/Revisor">Revisor</Link></li>
              </ul>
            )}
          </li>
          
          <li><Link to="/Vejledninger">Vejledninger</Link></li>
          <li><Link to="/Brancher">Brancher</Link></li>
          <li><Link to="/PriserFunktioner">Priser & Funktioner</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Om">Om</Link></li>
                        <li><Link to="/Kontakt">Kontakt</Link></li>
        </ul>
      </nav>
    </div>
  
            
        </header>
        </>
    )
}