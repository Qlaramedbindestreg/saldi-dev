import { FaCashRegister, FaChartLine, FaCogs, FaExpandArrowsAlt, FaHeadset } from 'react-icons/fa';
import posImage from '../../assets/pos.jpg'; 
import { useState } from "react";
import './POSsystem.scss';
import pos from '../../assets/pos-baggrund.jpg';

export default function POSSystem() {
    const [showPopup, setShowPopup] = useState(false);
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
    
    <div className="pos-guide">
<div className="pos-header">
  <div className="pos-overlay"></div> 
  <div className="pos-content">
    <h1>Hvordan vælger du det rette POS-system til din forretning?</h1>
  </div>
</div>

  

      <section className="intro-section">
        <h2>Vigtigheden af et POS-system</h2>
        <p>
          Et POS-system (Point of Sale-system eller kassesystem) er essentielt for din forretning. Det håndterer alt fra salgstransaktioner til bordstyring og ordrer, og det betyder alverden for god kundeservice.
        </p>
        <p>
          Et effektivt POS-system er en nødvendighed, der sikrer, at alt kører glat fra kundeinteraktion til det økonomiske overblik.
        </p>
      </section>

      <section className="business-needs-section">
        <h2>Identificering af forretningsbehov</h2>
        <div className="two-column-grid">
          <div className="column">
            <p>
              At vælge det rigtige POS-system starter med en klar forståelse af, hvad din forretning egentlig har brug for. Forskellige typer af forretninger – fra detailbutikker og restauranter til online shops – har forskellige krav til et POS-system. En detailbutik kan have brug for effektive lagerstyringsfunktioner, mens en restaurant måske prioriterer hurtighed, bordstyring og evnen til at håndtere komplekse ordrer. Det er afgørende at identificere de funktioner, der vil lette din hverdag og understøtte dine salgsprocesser mest effektivt.
            </p>
          </div>
          <div className="column">
            <p>
              Et godt POS-system skal kunne håndtere dine transaktioner smidigt og effektivt, men det handler om mere end at tage imod betalinger. Systemet bør også give dig indsigt i dine salgsdata. Det kan hjælpe dig med at forstå kundeadfærd, forudsige trends og justere din forretningsstrategi derefter. Forskellige POS-systemer tilbyder forskellige niveauer af dataanalyse, så det er vigtigt at vælge et, der tilbyder de analytiske værktøjer, der passer til din forretnings behov og vækstambitioner.
            </p>
          </div>
        </div>
      </section>

      <section className="considerations-section">
        <h2>4 vigtige overvejelser ved valg af POS-system</h2>
        <div className="pos-grid-container">
          <div className="pos-grid-item">
            <FaCashRegister className="icon" />
            <h3>Brugervenlighed</h3>
            <p>Et intuitivt system reducerer oplæringstiden og mindsker risikoen for fejl under travle perioder.</p>
          </div>
          <div className="pos-grid-item">
            <FaChartLine className="icon" />
            <h3>Integrationsmuligheder</h3>
            <p>Dit POS-system bør kunne integreres med lagerstyring, regnskabsprogrammer og e-handelsplatforme.</p>
          </div>
          <div className="pos-grid-item">
            <FaCogs className="icon" />
            <h3>Skalerbarhed</h3>
            <p>Vælg et system, der kan skaleres op og håndtere flere transaktioner eller butikker.</p>
          </div>
          <div className="pos-grid-item">
            <FaHeadset className="icon" />
            <h3>Support og service</h3>
            <p>God teknisk support er afgørende for at undgå nedetid og tabt salg.</p>
          </div>
        </div>
      </section>

      <section className="pos-img-section">
            <div className="pos-img-content">
                <img src={posImage} alt="POS System Illustration" className="cta-image" />
                <div className="cta-text">
                    <h2>Få et komplet POS-system til din forretning</h2>
                    <p>
                    Hos Saldi tilbyder vi skræddersyede POS-systemer udviklet til forskelligartede virksomheder – fx detailhandlere, restauranter, genbrugsbutikker og kædeforretninger. Med Saldi får du nemlig ikke bare adgang til avanceret hardware som skærme, pc'er, pengeskuffer og bonprintere; du får også adgang til software, der kan skræddersyes nøjagtigt til dine behov.

<br />
<br />

              Med næsten 20 års erfaring i branchen har vi udviklet en række specialløsninger, der imødekommer specifikke industribehov. Uanset om du driver en restaurant, en tøjforretning, et bygge- eller håndværkerfirma, en cykelforretning med værksted eller en genbrugsforretning, har Saldi den erfaring og teknologi, der er nødvendig for at støtte din virksomheds drift og udvikling.
                    </p>
                    <button className="cta-button" onClick={() => setShowPopup(true)}>
                        Tryk her for at få et tilbud
                    </button>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Kontakt</h3>
                        <p>Udfyld formularen og tryk "send"</p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Fulde navn" value={formData.name} onChange={handleInputChange} required />
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                            <input type="text" name="phone" placeholder="Telefonnummer" value={formData.phone} onChange={handleInputChange} required />
                            <input type="text" name="company" placeholder="Firma (valgfrit)" value={formData.company} onChange={handleInputChange} />
                            <textarea name="message" placeholder="Skriv lidt om dit behov" value={formData.message} onChange={handleInputChange} required />
                            <button type="submit">Send</button>
                            <button type="button" className="close-button" onClick={() => setShowPopup(false)}>Luk</button>
                            <p>Vi kontakter dig hurtigst muligt</p>
                        </form>
                    </div>
                </div>
            )}
        </section>
    </div>
  );
};
