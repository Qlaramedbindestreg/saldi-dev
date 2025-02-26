import { useState } from 'react';
import { useParams } from 'react-router-dom';
import office from '../../assets/office.jpg';
import sst from '../../assets/sst.png';
import flow from '../../assets/flow.png';
import bera from '../../assets/bera.png';
import herlev from '../../assets/herlev-stilladser.png';
import Counter from '../../components/Counter/Counter';
import trustpilot from '../../assets/trustpilot.png';
import erp from '../../assets/erp.jpg';
import baggrund from '../../assets/sagsstyring-baggrund.jpg';

import './Sagsstyring.scss';
import { FaChartPie, FaBoxOpen, FaClipboardList, FaDollarSign, FaCheckCircle, FaChartLine, FaCloud } from "react-icons/fa";


export default function Sagsstyring() {
  const { category } = useParams();  

   const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    firma: '',
    message: ''
  });

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
    const mailtoLink = `mailto:info@saldi.dk?subject=Book a Demo&body=Navn: ${name}%0AEmail: ${email}%0ATlf. nummer: ${number}%0AFirma: ${firma}%0A%0AMeddelelse: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
    
    <div className="sagsstyring-container">
    <div className="sagsstyring-header">
      <div className="sagsstyring-overlay"></div>
      <div className="content-box">
        <h1>Sagsstyring i Saldi</h1>
        <p>
          Med vores sagsstyring kan du skabe fuldt overblik på dine interne og eksterne medarbejdere, sager og udgifter. 
          Håndter lønudgifter og akkordsager med de integrerede moduler, opnå tidsbesparelser og strategiske fordele i din branche.
        </p>
        <a href="#form-section">
          <button>Book en demo og kom godt i gang</button>
        </a>
      </div>
    </div>
      
    <section className="sagsstyring-module">
  <div className="sagsstyring-text">
    <div className="line"></div>
    <h2>Sagsstyring designet til stillads - og håndværksbranchen</h2>
  </div>
  <p>
    Let administrationen med en sømløs integration mellem regnskab, sagsstyring, akkord og lønsystemer. 
    Saldi sikre en optimeret drift med en moderne cloud-baseret software der forbedrer kommunikation 
    mellem afdelinger og medarbejdere.
  </p>
</section>



  
      <section className="sag-modules-grid">
  <div className="sag-module-card">
    <FaChartLine className="module-icon" />
    <h3>Regnskabsstatus</h3>
    <p>Opnå strategiske fordele ved at have alt aktivitet på tværs af driftsprocesser synkroniseret i ét system.</p>
  </div>
  <div className="sag-module-card">
    <FaCloud className="module-icon" />
    <h3>Cloud-baseret</h3>
    <p>Med vores cloud-baserede software kan alle medarbejdere altid tilgå systemet, følge op på sager og indskrive løntimer.</p>
  </div>
</section>

         <section className='stillads-logoer'>
                <h1 className='h1'>Danmarks største stillads og håndværksvirksomheder benytter allerede Saldi</h1>
              <div className="stillads-logo-slider-container">
                <div className="stillads-logo-slider">
                  <img src={herlev} alt="logo" />
                  <img src={sst} alt="logo" />
                  <img src={flow} alt="logo" />
                  <img src={bera} alt="logo" />
           
                </div>
                <div className="stillads-logo-slider" aria-hidden="true">
                <img src={herlev} alt="logo" />
                  <img src={sst} alt="logo" />
                  <img src={flow} alt="logo" />
                  <img src={bera} alt="logo" />
           
                </div>
              </div>
               
              <div className='grey-line'>
        
              </div>
        
               <div className='trustpilot-wrapper'>
                <img src={trustpilot} alt="trustpilot" />
                <p>4.7+ stjerner på Trustpilot</p>
               </div>
        </section>      
            
  <div className="sagsstyring-module-card">
  <div className="sagsstyring-module-content">
    <img src={erp} alt="ERP" className="sagsstyring-module-image" />
    <div className="module-text">
      <h3>Fleksible løsninger</h3>
      <ul>
        <li><FaCheckCircle className="check-icon" /> Tilgængeligt på alt hardware</li>
        <li><FaCheckCircle className="check-icon" /> Få tilpassede moduler</li>
        <li><FaCheckCircle className="check-icon" /> ERP & lagersynkronisering</li>
        <li><FaCheckCircle className="check-icon" /> Synkroniseret regnskab</li>
        <li><FaCheckCircle className="check-icon" /> Dashboard oversigt</li>
        <li><FaCheckCircle className="check-icon" /> Styring af udlejning</li>
      </ul>
    </div>
  </div>
</div>

     <section className="report-section">
        <h1>Lønafregning</h1>
        <h3>Systemet bogfører automatisk dine salg</h3>
  <div className="report-grid">
    <div className="report-block">
      <FaDollarSign className="report-icon" />
      <h2>Omkostningsstyring</h2>
      <p>Få overblik på hvad der sælger bedst, så du kan optimere dine processer og få bedre resultater.</p>
    </div>
    <div className="report-block">
      <FaBoxOpen className="report-icon" />
      <h2>Lagerstyring</h2>
      <p>Hold styr på hvornår du løber tør for varer, så du altid kan opretholde en effektiv drift.</p>
    </div>
    <div className="report-block">
      <FaChartPie className="report-icon" />
      <h2>Rapportering</h2>
      <p>Analyser din virksomheds data med detaljerede rapporter for at forbedre din strategi.</p>
    </div>
    <div className="report-block">
      <FaClipboardList className="report-icon" />
      <h2>Ordrehåndtering</h2>
      <p>Strømlin dine ordreprocesser for en mere effektiv arbejdsflow og højere kundetilfredshed.</p>
    </div>
  </div>
</section>

    <div className='form-div' id='form-section'></div>
      <section 
        className='form-section'
        style={{
          backgroundImage: `url(${office})`, 
        }}
      >
            <div className="form-overlay"></div>
        <div className="form-background">
            <h1 className="form-h1">Få mere info, book en demo</h1>
            <form className='booking-form' onSubmit={handleSubmit}>
                <label>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder="Fulde navn" 
                        value={formData.name}
                        onChange={handleInputChange} 
                        required 
                    />
                </label>
                <label>
                    <input 
                        type='email' 
                        name='email' 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleInputChange} 
                        required 
                    />
                </label>
                <label>
                    <input 
                        type='text' 
                        name='number' 
                        placeholder="Tlf. nummer" 
                        value={formData.number}
                        onChange={handleInputChange} 
                        required 
                    />
                </label>
                <label>
                    <input 
                        type='text' 
                        name='firma' 
                        placeholder="Firma navn" 
                        value={formData.firma}
                        onChange={handleInputChange} 
                    />
                </label>
                <label>
                    <textarea 
                        name='message' 
                        placeholder="Fortæl kort om din virksomhed"
                        value={formData.message}
                        onChange={handleInputChange} 
                    />
                </label>
                <button type='submit'>Send</button>
            </form>
        </div>
      </section>
    </div>

  <Counter />
  </>
  );
}
