import { useParams } from 'react-router-dom';
import { useState } from "react";
import './Økonomistyring.scss';
import oversigt from '../../assets/oversigt.png'; 
import rapport from '../../assets/rapport.png'; 
import office from '../../assets/office.jpg'; 
import Counter from '../../components/Counter/Counter';
import økonomiBaggrund from '../../assets/økonomi-styring-baggrund.jpg';


export default function Økonomistyring() {
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
<div className="accounting-container">

      <div className='økonomi-header'>
      <div className="økonomi-overlay"></div>

      <div className="økonomi-content-box">
        <h1>Økonomistyring i Saldi</h1>
        <p>
          Effektiv håndtering af økonomien baner vejen for din virksomheds økonomiske fremgang. Udarbejd dine regnskaber i Saldi for garanteret overblik på dine indtægtskilder, kunder & udgifter. Minimér risikoen og effektiviser driften med vores bæredygtige software.
        </p>
        <a href="#form-section"><button>Book en demo og kom godt i gang</button></a> 
     </div>
      </div>


      <section className="økonomistyring-module">
         <div className='økonomistyrings-module-text'>
      <div className='line'></div>
        <h2>Det rette system til håndtering af regnskab og økonomi</h2>
        </div>
        <p>
          Administrering af din virksomheds økonomi i Saldi sikrer dig stabil arbejdsgang og reduceret risiko. Vores bæredygtige bogføringssoftware samler alt regnskabsdata i et enkelt og brugervenligt system.
        </p>
       
      </section>

      <div className='økonomi-modules-heading-container'>
      <div className='line'></div>
      <h2 className="økonomi-modules-heading">Moduler til regnskabsstyring</h2>
     </div>
        <div className='økonomi-modules-text'>
          <h3>Finans</h3>
          <p>Totalt overblik på forretningskritisk regnskabsdata, udarbejd budgettering, træk datarige rapporter og få strategisk indblik i din forretnings fremgang og administrér bogholderiet i et brugervenligt regnskabsmodul.</p>
        </div>

      <section className="økonomi-modules-grid">
 
        <div className="økonomi-module-card">
          <h3>Regnskab</h3>
          <ul>
            <li>Budgettering & planlægning</li>
            <li>Totalt overblik på alle kontonumre, indtægter & udgifter</li>
            <li>Grafisk budget sammenligning med reelle tal</li>
            <li>Rapporter: Træk standard- og skræddersyede rapporter</li>
          </ul>
        </div>
        <div className="økonomi-module-card">
          <h3>Rapporter</h3>
          <ul>
            <li>Træk standard rapporter med få klik</li>
            <li>Skræddersyede rapporter </li>
            <li>Afstem bank </li>
            <li>Se kontrolspor </li>
          </ul>
        </div>
        <div className="økonomi-module-card">
          <h3>
          Kassekladder</h3>
          <ul>
            <li>Kassekladder, bilagsscan</li>
            <li>Totalt overblik på indtægter & udgifter </li>
            <li>Grafisk budget sammenligning med reelle tal </li>
          </ul>
        </div>
        </section>
        
        <div className='deb-cred-card'>
  <div className="deb-cred-text">
    <div className='line'></div>
    <h3>Debitorstyring</h3>
  </div>
  <p>Hold overblik på hele processen fra tilbud til ordre og fakturering, med indblik i dækningsgrader & status på lagerbeholdning. Træk detaljerede rapporter på dine debitorer, salgsstatistikker, betalingslister og få tilpasset unikke rapporter..</p>
</div>

<section className="økonomi-modules-grid">
        <div className="deb-cred-content">
        <div className="økonomi-module-card">
          <h3>
          Ordrestyring</h3>
          <ul>
            <li>Logistikstyring</li>
            <li>Tilbudsmodul </li>
            <li>Synkronisering af lagerstatus & dækningsgrader</li>
            <li>Faktureringsmodul</li>
            <li>Faktura opsætning</li>
            <li>Genfakturering/abonnementstyring </li>
          </ul>
        </div>
        <div className="økonomi-module-card">
          <h3>
         Konti</h3>
          <ul>
            <li>Opret debitorer</li>
            <li>Faktureringshistorik </li>
            <li>CRM </li>
            <li>Brugerdefinerede søgevalg</li>
            <li>Prioriteringslister</li>
           
          </ul>
        </div>
        <div className="økonomi-module-card">
          <h3>
          Rapporter</h3>
          <ul>
            <li>Åbne poster</li>
            <li>Kontosalg </li>
            <li>Top 100 debitorer</li>
            <li>SAF-T rapporter</li>
            <li>Skræddersyede rapporter</li>
       
          </ul>
        </div>
        </div>
        </section>

        <div className='deb-cred-card'>
  <div className="deb-cred-text">
    <div className='line'></div>
    <h3>Kreditorstyring</h3>
  </div>
  <p>Strategisk styring af dine kreditorer med henblik på besparelse og optimering af din processer med automatiserede indkøbsforslag. Overskueligt og enkelt overblik på ordre og fakturaer. Hold overblik på alle udgifter og vedhæft bilag med Saldi bilagsapp.</p>
</div>

<section className="økonomi-modules-grid">
        <div className="deb-cred-content">
        <div className="økonomi-module-card">
          <h3>
          
            Ordrer</h3>
          <ul>
            <li>Indkøbsforslag</li>
            <li>Ordrer overblik </li>
            <li>Faktura overblik</li>
            <li>Samlede udgfifter</li>
            <li>Brugerdefineret sortering </li>
          
          </ul>
        </div>
        <div className="økonomi-module-card">
          <h3>
         Konti</h3>
          <ul>
            <li>Kontioversigtr</li>
            <li>Brugerdefineret kreditorvisning	</li>
            <li>Kreditoroprettelse med brugerdefinerede felter </li>
           
          </ul>
        </div>
        <div className="økonomi-module-card">
          <h3>
          Rapporter</h3>
          <ul>
            <li>Åbne poster</li>
            <li>Betalingslister </li>
            <li>Top 100</li>
            <li>Skræddersyede rapporter</li>
       
          </ul>
        </div>
        </div>
        </section>

      
        <section className="report-section">
  <div className="report-block left-text">
    <img src={oversigt} alt="oversigt" />
    <div className="text-content">
      <h1>Grafiske oversigter bidrager med strategiske planlægningsfordele</h1>
      <p>Skab sammenhæng mellem budgetplanlægning, indtægter og udgifter med automatiserede grafer og bevar kontrollen af dine forretnings udvikling.</p>
    </div>
  </div>
  <div className="report-block left-image">
    <img src={rapport} alt="rapport" />
    <div className="text-content">
      <h1>Skræddersyede rapporter bidrager med strategisk indsigt</h1>
      <p>Planlæg strategier og budgetter med rapporter på alt regnskabsdata og opnå konkurrencemæssige fordele.</p>
    </div>
  </div>
</section>

     
     <div className='form-div' id="form-section"></div>
      <section 
      className='form-section'
 
      style={{
        backgroundImage: `url(${office})`, 
    }}
      >
            <div className="form-overlay"></div>
            <div className="form-background">
            <h1 className="form-h1">
            Få mere info, book en demo</h1>
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
        <Counter />
    </div>
  );
}
