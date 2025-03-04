import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaChartLine, FaBox, FaFolderOpen, FaShoppingCart,
  FaProjectDiagram, FaTools, FaUserTie, FaChevronDown, FaChevronRight
} from 'react-icons/fa';
import Search from '../Search/Search';
import LogIn from '../LogIn/LogIn';
import './Header.scss';
import logo from '../../assets/Saldi Main Logo (1).png';
import whiteLogo from '../../assets/Saldi White logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showLøsningerDropdown, setShowLøsningerDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.løsninger-dropdown')) {
        setShowLøsningerDropdown(false);
      }
    };

    if (showLøsningerDropdown) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showLøsningerDropdown]);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className='header-section-one'>
        <Link to="/"><img src={logo} alt="logo" /></Link>

        <nav className='nav-section-one'>
          <ul>
            <li><Link to="/ERP">ERP</Link></li>
            <li><Link to="/Regnskab">Regnskab</Link></li>
            <li><Link to="/POS">POS</Link></li>
          </ul>
        </nav>

        <div className='header-actions'>
         
          <LogIn />
          <Link to="/Løsninger">
            <button>Kom i gang</button>
          </Link>
        </div>
      </div>

      <div className='header-section-two'>
        <Link to="/"><img src={whiteLogo} alt="white logo" className='white-logo' /></Link>
        <nav className='nav-section-two'>
          <ul>
            <li className="løsninger-dropdown">
          
              <Link
                to="javascript:void(0)"
                onClick={(e) => {
                  e.preventDefault(); 
                  setShowLøsningerDropdown((prev) => !prev);
                }}
                className="dropdown-trigger"
              >
                Produkter <FaChevronDown className='nav-icon' />
              </Link>

           
              {showLøsningerDropdown && (
                <ul className="dropdown show">
            
                  <div className="dropdown-column">
                    <h4>Saldi ERP</h4>
                    <li> <FaChevronRight className="arrow-icon" /> <Link to="/Løsninger/Lagerstyring">Lagerstyring</Link></li>
                    <li> <FaChevronRight className="arrow-icon" /> <Link to="/Løsninger/Ordrestyring">Ordrestyring</Link></li>
                    <li> <FaChevronRight className="arrow-icon" /> <Link to="/Løsninger/Projektstyring">Projektstyring</Link></li>
                    <li> <FaChevronRight className="arrow-icon" /> <Link to="/Løsninger/CRM">CRM</Link></li>
                  </div>

               
                  <div className="dropdown-column">
                    <h4>Regnskab</h4>
                    <li> <FaChevronRight className="arrow-icon" /> <Link to="/Løsninger/Økonomistyring">Økonomistyring</Link></li>
                    <li> <FaChevronRight className="arrow-icon" /> <Link to="/Løsninger/Revisor">Revisor</Link></li>
                  </div>

                
                  <div className="dropdown-column">
                    <h4>Løsninger</h4>
                    <li> <FaChevronRight className="arrow-icon" /> <Link to="/Løsninger/Mini">Mini</Link></li>
                    <li> <FaChevronRight className="arrow-icon" /> <Link to="/Løsninger/Basis">Basis</Link></li>
                    <li> <FaChevronRight className="arrow-icon" /> <Link to="/Løsninger/Professionelt">Professionelt</Link></li>
                    <li> <FaChevronRight className="arrow-icon" /> <Link to="/Løsninger/ERP">ERP</Link></li>
                  </div>
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
  );
}
