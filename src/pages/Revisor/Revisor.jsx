import "./Revisor.scss";
import revisor from "../../assets/revisorløsninger.jpg";
import regnskab from "../../assets/regnskab.png";
import bogholder from "../../assets/bogholderi.jpg";
import { FaBoxOpen, FaDatabase, FaCalculator, FaCheckCircle, FaGlobe, FaShieldAlt, FaChartBar, FaHeadset   } from "react-icons/fa";


export default function Revisor() {
    return (
        <div className="revisor-container">

           <div className="revisor-wrapper">
        <div className="revisor-overlay"></div> 
        <section className="revisor-header">
         <h1>Komplet løsning for revisorer og bogholdere</h1>
        <p>Alt hvad du har brug for, samlet på én platform. Uden ekstra omkostninger og gebyrer.</p>
      </section>
          </div>


          <section className="revisor-section">
  <h2>Hvorfor vælge Saldi's revisorløsning og regnskabsprogram?</h2>
  <p>Vi har gjort revision så overskueligt og tilgængeligt som muligt.</p>

  <div className="revisor-benefits">
    <div className="benefit">
      <FaBoxOpen className="benefit-icon" /> 
      <h3>Èn komplet & samlet pakke</h3>
      <p>Komplet regnskabspakke designet til revisorer og bogholdere, inkluderer alt hvad du har brug for i et regnskabsprogram.</p>
    </div>

    <div className="benefit">
      <FaDatabase className="benefit-icon" /> 
      <h3>Adgang til egen kundedatabase</h3>
      <p>Du kan logge ind bagom og få indblik i alle dine kunders regnskaber uden nogen begrænsninger.</p>
    </div>
  </div>
</section>

            <section className="revisor-details">
                <FaCalculator className="detail-icon" />
                <h2>Et rigtigt regnskabsprogram til revisorere</h2>
                <p>Saldi's regnskabsprogram og revisorløsning er ikke bare et simpelt og hurtigt system,</p>
                <p>men det er også skabt med et direkte formål; at give revisorer og bogholdere et veludviklet & solidt bogførings- og regnskabsprogram.</p>
            </section>

            <section className="revisor-features">
                <img src={regnskab} alt="regnskab" />
                <div className="revisor-features-text">
                <h2>Direkte tilgang til alle dine kunders regnskaber fra overskuelig oversigt</h2>
                <p>Vi har arbejdet med regnskab og bogholderi i mange år med det udgangspunkt at minimere arbejdet for dem, der benytter vores systemer.
                <br />
                Som bogholder og revisor er der nogle specifikke krav, som vi ved er essentielle for en effektiv arbejdsgang.
                <br />
                Derfor har vi skabt en revisorløsning, som giver dig nem adgang til alle dine kunders regnskaber, indsigt i alle tal, bilag og aktiver.
                <br />
                Alt dette samlet på én simpel platform, for optimal tidsbesparelse og effektivitet for dig som bogholder eller revisor.</p>
                </div>
            </section>

            <section className="revisor-advantages">
      <div className="advantage">
        <FaGlobe className="advantage-icon" />
        <h3>Ubegrænset tilgængelighed</h3>
        <p>Uanset om du er på farten, kontoret eller arbejder hjemmefra, har du altid adgang til hele systemet via en browser.</p>
      </div>

      <div className="advantage">
        <FaShieldAlt className="advantage-icon" />
        <h3>Fuldkommen sikkerhed</h3>
        <p>Højeste niveau af sikkerhed og backup af dine kunders regnskaber.</p>
      </div>
    </section>

            <div className="kompromis-section">
      <div className="kompromis">
        <h3>Bogholderi uden at gå på kompromis</h3>
        <ul>
          <li><FaCheckCircle className="check-icon" /> Nemt, hurtigt og sikkert</li>
          <li><FaCheckCircle className="check-icon" /> Alle regnskabsfunktioner</li>
          <li><FaCheckCircle className="check-icon" /> Komplet oversigt og indblik</li>
          <li><FaCheckCircle className="check-icon" /> Styr på alle regnskaber ét sted</li>
          <li><FaCheckCircle className="check-icon" /> Prisvenlighed i fokus</li>
        </ul>
      </div>
      <img src={bogholder} alt="Bogholderi" className="advantage-image" />
    </div>

    <section className="revisor-dashboard">
      <div className="feature">
        <FaChartBar className="feature-icon" />
        <h2>Dashboard oversigt</h2>
        <p>Med din egen oversigt får du direkte og hurtigt indblik i dine personlige nøgletal, kunder & fakturaer.</p>
      </div>

      <div className="feature">
        <FaHeadset className="feature-icon" />
        <h2>Support</h2>
        <p>Du er altid velkommen til at kontakte vores support på telefon, mail eller chat, hvis behovet opstår.</p>
      </div>
    </section>

  
    <section className="kontakt">
      <div className="kontakt-container">
        <div className="kontakt-text">
          <h1>Vi håber du vil bruge Saldi til dit bogholderi</h1>
          <p>Kom i gang med revisorløsningen i dag, eller prøv vores gratis regnskab, og se om det er noget for dig!</p>
        </div>
        <button className="kontakt-button">Bliv kontaktet</button>
      </div>
    </section>
 
    </div>
    );
};

