import { useParams } from 'react-router-dom';
import { useState } from "react";
import office from '../../assets/office.jpg'; 
import indsigt from '../../assets/indsigt.png'; 
import synkronisering from '../../assets/synkronisering.png'; 
import './Lagerstyring.scss';
import Counter from '../../components/Counter/Counter';
import lagerstyringBaggrund from '../../assets/nytbillede.jpg';

export default function Lagerstyring() {
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
    const mailtoLink = `mailto:info@saldi.dk?subject=Mødebooking&body=Navn: ${name}%0AEmail: ${email}%0ATlf. nummer: ${number}%0AFirma: ${firma}%0A%0AMeddelelse: ${message}`;
    window.location.href = mailtoLink;
};

  return (
    <>
     <div className="lagerstyring-container">
     <div className='lagerstyring-header'>
          <div className="lagerstyring-overlay"></div>
          <div className="lagerstyring-content-box">
            <h1>Lagerstyring</h1>
            <p>
              Saldi sikrer dig optimering af din virksomheds logistiske aktiviteter, undgå fejl og minimér risici med lagerstyring som skaber direkte forbindelse mellem hvert led af dine interne processer.
            </p>
            <a href="#form-section"><button>Book en demo og kom godt i gang</button></a> 
          </div>
        </div>

      <section className="lagerstyring-module">
          <h2>Effektiv Lagerstyring og Integration med Regnskab</h2>
          <p>
            Saldi tilbyder en omfattende løsning, der kombinerer lagerstyring og regnskab i et enkelt, integreret system. Denne integration gør det lettere at optimere din virksomheds logistiske processer, minimere fejl og reducere risici.
          </p>
      </section>

      <h2 className="lagerstyring-modules-heading">Lagerstyringsmoduler</h2>
      <section className="lagerstyring-modules-grid">
        <div className="lagerstyring-module-card">
          <h3>Automatiske Bestillingsforslag</h3>
          <p>Systemet foreslår automatisk genbestilling baseret på salgshistorik og lagerbeholdning.</p>
        </div>
        <div className="lagerstyring-module-card">
          <h3>Styklister</h3>
          <p>Håndter komponenter og samlevare med styklister, som automatisk synkroniserer beholdningen af de enkelte elementer.</p>
        </div>
        <div className="lagerstyring-module-card">
          <h3>Batchkontrol</h3>
          <p>Administrer batcher af varer for at sikre sporbarhed og kvalitetskontrol.</p>
        </div>
        <div className="lagerstyring-module-card">
          <h3>Synkronisering med Webshop</h3>
          <p>Lagerbeholdninger og kostpriser opdateres automatisk i realtid på tværs af platforme, hvilket sparer tid og minimerer fejl.</p>
        </div>
      </section>

      <section className="report-section">
        <div className="report-block left-text">
          <img src={indsigt} alt="lageroversigt" />
          <div className="text-content">
            <h1>Strategisk Indsigt og Optimering</h1>
            <p>Via dataudtræk i systemet kan du få adgang til unikke rapporter om dit varelager, hvilket understøtter bedre beslutningstagning.</p>
          </div>
        </div>
      </section>
    </div>

    <div className="form-div" id="form-section"></div>
    <section className='form-section' 
    style={{ backgroundImage: `url(${office})` }}>
      <div className="form-overlay"></div>
      <div className="form-background">
        <h1 className="form-h1">Få mere info, book en demo</h1>
        <form className='booking-form' onSubmit={handleSubmit}>
          <label>
            <input type='text' name='name' placeholder="Fulde navn" value={formData.name} onChange={handleInputChange} required />
          </label>
          <label>
            <input type='email' name='email' placeholder="Email" value={formData.email} onChange={handleInputChange} required />
          </label>
          <label>
            <input type='text' name='number' placeholder="Tlf. nummer" value={formData.number} onChange={handleInputChange} required />
          </label>
          <label>
            <input type='text' name='firma' placeholder="Firma navn" value={formData.firma} onChange={handleInputChange} />
          </label>
          <label>
            <textarea name='message' placeholder="Fortæl kort om din virksomhed" value={formData.message} onChange={handleInputChange} />
          </label>
          <button type='submit'>Send</button>
        </form>
      </div>
    </section>
    <Counter />
    </>
  );
}