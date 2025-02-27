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
  <div className="lagerstyring-heading-container">
    <div className="line"></div>
    <h2>Det rette system til håndtering af varelageret</h2>
       </div>
       <p>
    Forbind processer og mennesker på tværs af flere lokationer i Saldi. Opnå en bæredygtig forsyningskæde med automatiserede digitale transaktioner og synkronisering mellem afdelinger.
       </p>
       </section>


       <div className="lagerstyring-modules-heading-container">
  <div className="line"></div>
  <h2 className="lagerstyring-modules-heading">Lagerstyringsmoduler</h2>
</div>

<section className="lagerstyring-modules-grid">
  <div className="lagerstyring-module-card">
    <h3>Lagerstatus</h3>
    <p>Få overblik på lagerbeholdning af samtlige varer direkte fra vareoversigten. Opret hurtige søgninger, tilføj nemt ændringer til varer og kontrollér hvilke medarbejdere som kan se/ændre i de individuelle produkter.</p>
  </div>
  <div className="lagerstyring-module-card">
    <h3>Automatiske bestillingsforslag</h3>
    <p>Let det administrative arbejde ved at sætte minimumsbeholdning på dine varer i Saldi, lad systemet minde dig om hvornår det er tid til at genbestille, så du altid er sikker på at kunne imødekomme dine kunders bestillinger.</p>
  </div>
  <div className="lagerstyring-module-card">
    <h3>Styklister</h3>
    <p>Let administrationen med et intuitivt system som automatisk synkronisere beholdningen af de individuelle komponenter med resten af systemet. Håndter samle elementer og andre komponenter på individuelle varenumre.</p>
  </div>
  <div className="lagerstyring-module-card">
    <h3>Batchkontrol</h3>
    <p>Kontrollér sammenhæng mellem alle købs- og salgsordrer, vær samtidig sikker på at regnskabets lagerbeholdning er i overensstemmelse med varelagerets købsværdi.</p>
  </div>
</section>


<section className="lagerstyring-systemvalg">
  <div className="lagerstyring-heading-container">
    <div className="line"></div>
    <h2>Valg af det rette lagerstyringssystem</h2>
  </div>
  <p>Det er vigtigt at vælge et system, der passer til din virksomheds størrelse og behov. Saldi er skalerbart, hvilket betyder, at det kan vokse med din virksomhed, og det kan integreres problemfrit med eksisterende regnskabssystemer, CRM-løsninger og e-handelsplatforme. På den måde opnår du et mere effektivt og økonomisk bæredygtigt system.</p>

  <div className="lagerstyring-heading-container">
    <div className="line"></div>
    <h2>Vælg Saldi til en effektiv lagerstyring</h2>
  </div>
  <p>Med Saldi får du et brugervenligt og effektivt system, der hjælper dig med at styre alle aspekter af lagerstyring og regnskab på én platform.</p>
</section>


      <section className="lagerstyring-report-section">
        <div className="lagerstyring-report-block lagerstyring-left-text">
          <img src={indsigt} alt="lageroversigt" />
          <div className="lagerstyring-text-content">
            <h1>Synkronisering af varelager & webshop</h1>
            <p>Let det administrative arbejde og lad strømlinede integrationer håndtere varebeholdningen og synkronisering af kostpriser og lagerbeholdning i real time.</p>
          </div>
        </div>
        <div className="lagerstyring-report-block lagerstyring-left-image">
          <img src={synkronisering} alt="rapport" />
          <div className="lagerstyring-text-content">
            <h1>Få strategisk indsigt og reducér risici med skræddersyede rapporter</h1>
            <p>Via dataudtræk i systemet kan få adgang til unikke rapporter på dit varelager, med data til imødekommelse af forpligtelser og strategi planlægning.</p>
          </div>
        </div >
      </section >
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