import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import crm from '../../assets/office.jpg'; 
import pos from '../../assets/pos.jpg'; 
import lagerstyring from '../../assets/lagerstyring.jpeg'; 
import loppe from '../../assets/flea.jpg'; 
import app from '../../assets/app.jpg'; 
import excel from '../../assets/excel.jpg'; 
import mobilepay from '../../assets/mobilepay.jpg'; 

import './blog.scss';

export default function Blog() {
  const { type } = useParams();  

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
<>
<div className="content-section">
      <h1>Her kan du læse om nyt fra Saldi</h1>
      <h2>Alt om nye opdateringer og projekter</h2>

      <div className="news-item">
  <h3>Seneste nyt</h3>
  <div className="news-container">
    <div className='news-content-box'>
  <img src={crm} alt="CRM System" />
              <h4>Gå aldrig glip af en aftale med et nemt CRM-system</h4>
              <p>Komplet CRM-modul, så du aldrig misser en aftale med dine kunder</p>
              <button onClick={() => handleNavigation('/CRM')}>Læs hele artiklen</button>
            </div>
            <div className="news-content-box">
              <img src={pos} alt="POS System" />
              <h4>Hvordan vælger du det rette POS-system til din forretning?</h4>
              <p>Et POS-system er essentielt for din forretning...</p>
              <button onClick={() => handleNavigation('/POSsystem')}>Læs hele artiklen</button>
            </div>
            <div className="news-content-box">
              <img src={lagerstyring} alt="Lagerstyring" />
              <h4>Effektiv lagerstyring med vores nye system</h4>
              <p>Optimer din lagerstyring med vores nyeste teknologi...</p>
              <button onClick={() => handleNavigation('/Styklister')}>Læs hele artiklen</button>
            </div>
            <div className="news-content-box">
              <img src={mobilepay} alt="mobilepay" />
              <h4>Integration til Vipps Mobilepay</h4>
              <p>I mål med integrationen til det nye Vipps Mobilepay...</p>
             <a href="#mobile-pay"> <button>Læs hele artiklen</button></a>
            </div>
          </div>
</div>


      <div className="update-item" id='mobile-pay'>
        <h3>Ny opdatering d. 12.04.2024 kl. 23:42</h3>
        <div className="update-content">
        <img src={mobilepay} alt="mobilepay" />
        <div className='update-text'>
          <h4>Vipps Mobilepay integration</h4>
          <p>Efter lidt spændt ventetid er Vipps & Mobilepay integrationen på plads, og det kører ganske problemfrit på trods af en længerevarende integrations-process.</p>
        </div>
        </div>
      </div>

      <div className="update-item">
  <h3>Ny opdatering</h3>
  <div className="update-content">
    <img src={loppe} alt="loppe" className="update-image" />
    <div className="update-text">
      <h4>Bookingsystem til lopperne</h4>
      <p>
        Vi har de sidste par måneder været igang med en ny opdatering, som vil byde på mulighed for at håndtere bookinger af kunder til stande og reoler i sammenhæng med Mitloppesalg. 
        Bookingsystemet er et komplet multifunktionelt bookingsystem. Det vil bla. give mulighed for at oprette og slette bookinger, dertil en overskuelig kalenderoversigt over alle fortagede 
        bookinger på forskellige datoer, samt mulighed for at spærre en stand til langtidskunder, eller fremtidsbookinger, og meget meget mere. Første udgivelse er den interne del, og er lige nu i 
        testfase, med forventet udgivelse i Maj 2024. Den eksterne del som kunder kan booke direkte vil blive udgivet i slutningen af 2024.
      </p>
    </div>
  </div>
</div>

<div className="update-item">
  <div className="update-content">
    <img src={app} alt="app" className="update-image" />
    <div className="update-text">
      <h3>Ny applikation</h3>
      <h4>App under udvikling til Android og iPhone</h4>
      <p>
        En simpel applikation til Android og iPhone er på vej, som vil gøre det muligt at 
        uploade bilag og fakturere, når du er på farten. App forventes klar til udgivelse i 3. kvt. 2024.
      </p>
    </div>
  </div>
</div>

<div className="law-update">
  <div className="law-content">
    <img src={excel} alt="Bogføringsloven" className="law-image" />
    <div className="law-text">
      <h3>Bogføringsloven 2024</h3>
      <h4>Godkendt regnskabsprogram</h4>
      <p>
        Folketinget har vedtaget en bunke nye love, som alle regnskabs- og kassesystemer skal leve op til.
        De fleste af lovene trådte i kraft i januar 2024, og nogle vil træde i kraft senere. Vi kan heldigvis 
        stolt sige, at vi er et af de godkendte systemer, hvilket betyder, at du som kunde trygt kan fortsætte 
        med at holde styr på dit regnskab, bogføre og håndtere de vigtigste dele af din virksomhed i vores system.
      </p>
      <p>Se listen over godkendte systemer her.</p>
      <a href="https://skat.dk/erhverv/nye-krav-til-digital-salgsregistrering-for-visse-brancher-i-2024" 
         target="_blank" rel="noopener noreferrer">
        Læs mere om Bogføringsloven her
      </a>
      <br />
      <a href="https://erhvervsstyrelsen.dk/krav-bogfoeringssystemer" 
         target="_blank" rel="noopener noreferrer">
        Læs om krav til Bogføringssystemer her
      </a>
    </div>
  </div>
</div>

</div>

</>
  );
}
