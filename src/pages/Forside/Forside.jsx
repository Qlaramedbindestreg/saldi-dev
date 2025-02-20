import Brancher from '../../components/Brancher/Brancher';
import Moduler from '../../components/Moduler/Moduler';
import Lovkrav from '../../components/Lovkrav/Lovkrav';
import LogoSlider from '../../components/Logoslider/logoSlider';
import Testemonials from '../../components/Testemonials/Testemonials';
import Booking from '../../components/Booking/Booking';
import Counter from '../../components/Counter/Counter';

import forsideBaggrund from '../../assets/forside-baggrund.jpg';
import forsideVideo from '../../assets/forside-baggrund_smaller.mov';
import cloudSoftware from '../../assets/cloud-software.jpg';
import openSource from '../../assets/computer.jpg';

import { useState, useEffect } from 'react';
import { BiSliderAlt } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

import './Forside.scss';

export default function Forside() {

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    firma: '',
    message: ''
  });

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
      const handleScroll = () => {
          const scrollY = window.scrollY;
          const newOpacity = Math.max(1 - scrollY / 500, 0);
          setOpacity(newOpacity);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, firma, message } = formData;
    const mailtoLink = `mailto:info@saldi.dk?subject=Mødebooking&body=Navn: ${name}%0AEmail: ${email}%0ATlf. nummer: ${number}%0AFirma: ${firma}%0A%0AMeddelelse: ${message}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
 <main className="main-background">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={forsideVideo} type="video/mp4" />
        Your browser does not support video.
      </video>
      
      <div className="overlay"></div>
      
      <div className="main-wrapper">
        <div className="main-text-box">
          <h1>Softwareløsning til optimering af driften i din virksomhed.</h1>
          <h2>Webbaseret ERP, regnskab & økonomisystem.</h2>
          <div className="button-container">
            <button>Få en uforpligtende vurdering</button>
            <Link to={'/Løsninger'}>
              <button>Se løsninger</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
      <Brancher />
      <Moduler />
      <Lovkrav />

      <div className='cloud-software-wrapper'>
        <img src={cloudSoftware} alt="cloud-software" />
        <div className='tekst-wrapper'>
          <h1>Dansk udviklet ERP-cloud software</h1>
          <h2>Saldi startede sin rejse i 1997 med udvikling af virksomhedssoftware.</h2>
          <IoPeopleSharp size={30} />
          <p>Gennem samarbejde med kunder i mange forskellige brancher i hele Norden er Saldi i dag en veletableret software, som hjælper mennesker med at forbinde driften i én bæredygtig forsyningskæde, der skaber sammenhæng i logiske processer.
          </p>
          <Link to="/Om">
            <button>Læs mere</button>
          </Link>
        </div>
      </div>

      <div className="open-source-wrapper">
        <div className="second-tekst-wrapper">
          <h1>Skræddersyet Open Source ERP til alle virksomheder</h1>
          <h2>
            Kombinér forretnings- og driftsdata til udvikling af
            specialtilpassede moduler og realisér forbedrede resultater
          </h2>
          <BiSliderAlt size={30} />
          <p>
            Opnå langsigtede besparelser ved at optimere interne driftsprocesser
            og ressourcer gennem udvikling af tilpassede moduler og funktioner.
            Få rådgivning til at træffe strategiske beslutninger, og oplev
            forbedret drift i din virksomhed.
          </p>
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? "Luk" : "Start dialogen i dag og kom godt i gang"}
          </button>
          {showForm && (
            <form className="booking-form" onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Fulde navn"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="number"
                  placeholder="Tlf. nummer"
                  value={formData.number}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                <input
                  type="text"
                  name="firma"
                  placeholder="Firma navn"
                  value={formData.firma}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <textarea
                  name="message"
                  placeholder="Noget vi skal vide? - her kan du skrive en kort introduktion, eller gøre os opmærksom på specifikke ønsker"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit">Send</button>
            </form>
          )}
        </div>
        <img src={openSource} alt="openSource" />
      </div>

      <LogoSlider />
      <Testemonials />
      <Booking />
      <Counter />
    </>
  );
}