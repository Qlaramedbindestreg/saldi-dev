import { FaBox, FaChartLine, FaCogs, FaSearch, FaWarehouse, FaTh, FaSitemap, FaChartBar } from 'react-icons/fa';
import { FiPackage } from "react-icons/fi";
import { useState } from "react";
import styklister from '../../assets/styklister-baggrund.jpg';
import './Styklister.scss';



export default function Styklister() {
    const [showForm, setShowForm] = useState(false);
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
        const mailtoLink = `mailto:info@saldi.dk?subject=Kontaktforespørgsel&body=Navn: ${name}%0AEmail: ${email}%0ATlf. nummer: ${number}%0AFirma: ${firma}%0A%0AMeddelelse: ${message}`;
        window.location.href = mailtoLink;
    };
  
    return (

    <>
    <div className="inventory-management">
   

    <div className="styklister-header">
      <div className="styklister-overlay"></div>
      <div className="styklister-content">
        <h1>Effektiv lagerstyring med styklister</h1>
      </div>
    </div>



      <section className="intro-section">
        <p>
          At kombinere lagerstyring og regnskab i et enkelt, integreret system kan gøre en stor forskel for din virksomheds effektivitet og omkostninger. Mange virksomheder bruger separate systemer til opgaverne, hvilket kan føre til unødvendige komplikationer og ekstra arbejde.
        </p>
        <p>
          Som et integreret økonomistyringssystem hjælper Saldi med at forenkle driften ved at samle lagerstyring og regnskabsopgaver i et enkelt system. Det fjerner behovet for at jonglere mellem forskellige softwareløsninger eller tredjepartsudvidelser og mindsker risikoen for fejl ved at holde alle data samlet på ét sted. Med Saldi får virksomheden et klart overblik over både lager og økonomi i realtid, hvilket gør det lettere at træffe informerede beslutninger og optimere driftsprocesser.
        </p>
      </section>

      <section className="lager-system">
      <div className="lager-header">
      <FiPackage className="lager-icon"/>
        <h1>Et komplet lagersystem</h1>
      </div>

      <div className="lager-content">
        <div className="lager-text left">
          <p>
            I Saldi fungerer lagerstyring og regnskab ikke som isolerede enheder,
            de er i stedet fuldt integrerede i et enkelt system. Integrationen
            betyder, at oplysninger indtastet i lagerdelen automatisk afspejles i
            regnskabet og omvendt.
          </p>
        </div>

        <div className="lager-text right">
          <p>
            For det første sparer det tid, da dobbeltarbejde med dataindtastning
            undgås. For det andet reduceres fejlmarginen betragteligt, fordi
            automatisering sikrer konsistens i dataene på tværs af lager og
            regnskab. Endelig giver det et bedre økonomisk overblik.
          </p>
        </div>
      </div>
    </section>
    

      <section className="features-section">
        <h2>Nøglefunktioner i lagerstyringssystemet</h2>
        <div className="grid-container">
          <div className="grid-item">
            <FaBox className="icon" />
            <h3>Automatisk genbestilling</h3>
            <p>Systemet forudser og håndterer genbestillinger baseret på salgshistorik og lagerbeholdninger.</p>
          </div>
          <div className="grid-item">
            <FaCogs className="icon" />
            <h3>Batch-håndtering</h3>
            <p>Administrerer partier af varer for at sikre sporbarhed og kvalitetskontrol.</p>
          </div>
          <div className="grid-item">
            <FaChartLine className="icon" />
            <h3>DB/DG-rapport</h3>
            <p>Genererer detaljerede rapporter om dækningsbidrag/dækningsgrad.</p>
          </div>
          <div className="grid-item">
            <FaWarehouse className="icon" />
            <h3>Flere lagre</h3>
            <p>Styrer flere lagerlokationer, hvilket muliggør en mere omfattende lagerlogistik.</p>
          </div>
          <div className="grid-item">
            <FaSearch className="icon" />
            <h3>Fritekstsøgning</h3>
            <p>Gør det nemt at finde varer ved hjælp af en effektiv søgefunktion.</p>
          </div>
          <div className="grid-item">
            <FaTh className="icon" />
            <h3>Ubegrænset antal varegrupper</h3>
            <p>Tillader oprettelse af et ubegrænset antal varegrupper for bedre varekategorisering.</p>
          </div>
          <div className="grid-item">
            <FaSitemap className="icon" />
            <h3>Varespor</h3>
            <p> Sikrer fuld sporbarhed af varer fra indkøb til salg.</p>
          </div>
          <div className="grid-item">
            <FaChartBar className="icon" />
            <h3>Varestatistik</h3>
            <p> Leverer analyser og statistik for hver vare, som hjælper med at forstå salgstendenser og lagerbehov.</p>
          </div>
        </div>
      </section>

      <section className="considerations-section">
        <h2>Vælg lagerstyring der matcher dine behov</h2>
        <p>
          Når du vælger et lagerstyringssystem, er det afgørende at overveje, hvordan systemets funktioner matcher din virksomheds specifikke behov. Et system, der passer perfekt til detailhandel, er ikke nødvendigvis det bedste valg for en producent.
        </p>
        <div className="two-column-grid">
          <div className="column">
            <h3>Skalerbarhed</h3>
            <p>Kan systemet vokse sammen med din virksomhed? Det er vigtigt, at softwaren kan håndtere en stigning i transaktioner, lagerbeholdning og endda udvidelse til nye lagersteder uden at gå på kompromis med ydeevnen.</p>
          </div>
          <div className="column">
            <h3>Integrationsevne</h3>
            <p>Overvej, hvor godt systemet kan integrere med anden software, du bruger, såsom dit regnskabsprogram, CRM-systemer og e-handelsplatforme. En nem integration mellem systemer kan reducere arbejdsbyrden og minimere fejl.</p>
          </div>
          <div className="column">
            <h3>Funktionalitet</h3>
            <p>Vurder, om lagerstyringssystemet tilbyder de funktioner, der er kritiske for din virksomhed. Har du for eksempel brug for sporingskapacitet, som lot- og serienummersporing, eller styklister for at håndtere produktionsprocesser?</p>
          </div>
          <div className="column">
            <h3>Brugervenlighed</h3>
            <p>Et system, der er nemt at forstå og bruge, kan reducere oplæringstiden og hjælpe dit personale med at blive mere effektive. Det er også vigtigt, at systemet tilbyder god teknisk support.</p>
          </div>
        </div>
      </section>
      <p className='valg'>Ved at vælge et lagerstyringssystem, der matcher dine behov, sikrer du, at din virksomhed kan operere mere effektivt, reducere omkostninger og forbedre kundetilfredsheden. Vælg med omtanke, og husk at en velovervejet investering i det rette lagersystem kan betale sig mange gange i det lange løb.</p>

      <section className="cta-section">
            <h2>Få et komplet lagerstyringssystem</h2>
            <p>
                Med Saldi får du et integreret system, der kombinerer lagerstyring og regnskab i 
                én løsning. Kontakt os i dag for at finde ud af, hvordan vi kan hjælpe din 
                virksomhed med at blive mere effektiv.
            </p>
            <button className="cta-button" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Luk" : "Kontakt os"}
            </button>
            {showForm && (
                <form className='contact-form' onSubmit={handleSubmit}>
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
                            placeholder="Noget vi skal vide? - her kan du skrive en kort introduktion, eller gøre os opmærksom på specifikke ønsker"
                            value={formData.message}
                            onChange={handleInputChange} 
                        />
                    </label>
                    <button type='submit'>Send</button>
                </form>
            )}
        </section>
    </div>
   
    </>
);
};

