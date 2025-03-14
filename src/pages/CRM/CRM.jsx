import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CRM.scss";
import office from "../../assets/office.jpg"; 
import { FaUsersCog, FaClipboardList, FaClock, FaCalendarAlt, FaUsers, FaHeadset } from "react-icons/fa";
import crm from '../../assets/crm-baggrund.jpg';



export default function CRMSystem() {
  const { category } = useParams();

  const gridItems = [
    {
      icon: <FaUsersCog size={40} color="#004080" />,
      title: "Styr på medarbejdere",
      description:
        "Hold kontrol med hvilke medarbejdere som har adgang til CRM-modulet, og hvilke medarbejdere, dine medarbejdere skal kunne følge med i.",
    },
    {
      icon: <FaClipboardList size={40} color="#004080" />,
      title: "Lad dine medarbejdere selv skabe deres overblik",
      description:
        "Hver medarbejder med adgang til CRM-modulet kan selv styre hvilke sager der skal indgå i kalendersystemet.",
    },
    {
      icon: <FaClock size={40} color="#004080" />,
      title: "Altid up-to-date",
      description:
        "Glem aldrig en aftale - opret en sag på kun et øjeblik. Saldi's CRM-system ligger nemlig altid kun et klik væk.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    firma: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number, firma, message } = formData;
    const mailtoLink = `mailto:info@saldi.dk?subject=Mødebooking&body=Navn: ${name}%0AEmail: ${email}%0ATlf. nummer: ${number}%0AFirma: ${firma}%0A%0AMeddelelse: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="crm-container">
<div className="crm-header">
  <div className="crm-overlay">
    <div className="crm-content">
      <h1>CRM-system i Saldi</h1>
      <p>
        Hold styr på aftaler & kunder med et nemt og overskueligt CRM-system.
        Kalender, kundehistorik og opdeling af support & salg – alt samlet ét sted.
      </p>
    </div>

    <section className="crm-modules-grid">
      <div className="crm-module-card">
        <FaCalendarAlt className="crm-module-icon" />
        <h3>Kalender</h3>
        <p>Få overblik over alle dine aftaler og kundemøder.</p>
      </div>
      <div className="crm-module-card">
        <FaUsers className="crm-module-icon" />
        <h3>Debitor/Kundeoversigt</h3>
        <p>Tryk på en kunde, vælg datoer og skriv noter direkte.</p>
      </div>
      <div className="crm-module-card">
        <FaHeadset className="crm-module-icon" />
        <h3>Opdeling af Support & Salg</h3>
        <p>Undgå sammenblanding af opgaver ved tydelig opdeling.</p>
      </div>
    </section>
  </div>
</div>


<section className="crm-kunde-module">

  <div className="crm-left-content">
    <h1>
      Med Saldi kan din virksomhed samle alle interne processer ét sted. 
      Vores CRM-system sikrer overblik over aftaler, kundedata og 
      medarbejderansvar.
    </h1>
    <a href="#form-section">
      <button>Book en demo og kom godt i gang</button>
    </a>
  </div>


  <div className="crm-right-content">
    <h2>
      Derfor har vi udviklet et nyt og optimeret CRM-system, som sikrer kommunikationen 
      mellem udvalgte medarbejdere og kunder.
    </h2>
    <p>
      Saldi's CRM-system skaber direkte kommunikation mellem Debitor(kunde)kortet og 
      kalenderoversigten. Tryk på kunden og se hele historikken og tilføj nemt nye møder 
      og aftaler, som vil vise sig i kalenderoversigten. Styr hvilke medarbejdere som skal 
      have adgang til CRM-modulet.
    </p>
  </div>
</section>


    

      <section className="additional-info">
      <h1 className="info-title">Vælg det rigtige CRM system</h1>
      
          <p>
          Alle virksomheders behov er forskellige. Saldi har i udviklet et CRM-system som er lige til at gå til. Vi bruger det selv til alle vores kunder, både salg & support sager. Derfor har vi udviklet det på en måde som både er nem at lære & nem at benytte.
          </p>
      
     <section className="crm-grid">
      {gridItems.map((item, index) => (
        <div className="grid-item" key={index}>
          {item.icon}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
    </section>

 
    
    <div className='form-div' id="form-section"></div>
      <section 
        className="form-section"
      
        style={{ backgroundImage: `url(${office})` }}
      >
              <div className="form-overlay"></div>
        <div className="form-background">
        <h1 className="form-h1">Få en uforpligtende demo</h1>
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
                placeholder="Fortæl kort om din virksomhed"
                value={formData.message}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

    </div>
  );
}
