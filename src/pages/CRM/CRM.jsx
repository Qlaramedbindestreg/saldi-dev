import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CRM.scss";
import office from "../../assets/office.jpg"; 
import { FaUsersCog, FaClipboardList, FaClock } from "react-icons/fa";



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
        <h1>CRM-system i Saldi</h1>
        <p>
          Hold styr på aftaler & kunder med et nemt og overskueligt CRM-system.
          Kalender, kundehistorik og opdeling af support & salg – alt samlet ét sted.
        </p>
        <a href="#form-section">
          <button>Book en demo og kom godt i gang</button>
        </a>
      </div>

      <section className="module">
        <h2>Effektiv styring af kunderelationer</h2>
        <p>
          Med Saldi kan din virksomhed samle alle interne processer ét sted. 
          Vores CRM-system sikrer overblik over aftaler, kundedata og 
          medarbejderansvar.
        </p>
      </section>

      <h2 className="modules-heading">Funktioner i CRM-modulet</h2>
      <section className="modules-grid">
        <div className="module-card">
          <h3>📅 Kalender</h3>
          <p>Få overblik over alle dine aftaler og kundemøder.</p>
        </div>
        <div className="module-card">
          <h3>📌 Debitor/Kundeoversigt</h3>
          <p>Tryk på en kunde, vælg datoer og skriv noter direkte.</p>
        </div>
        <div className="module-card">
          <h3>🔀 Opdeling af Support & Salg</h3>
          <p>Undgå sammenblanding af opgaver ved tydelig opdeling.</p>
        </div>
      </section>

      <section className="additional-info">
      <h1 className="info-title">Vælg det rigtige CRM system</h1>
      
      <div className="info-grid">
        <div className="info-left">
          <p>
            Med Saldi kan din virksomhed få samlet alle de interne processer ét sted, hvilket ofte fører til strømlinede processer for virksomheden og medarbejdere.
          </p>
          <button>Kom i gang</button>
        </div>
        <div className="info-right">
          <p>
            Derfor har vi udviklet et nyt og optimeret CRM-system, som sikrer kommunikationen mellem udvalgte medarbejdere og kunder.
            Saldi's CRM-system skaber direkte kommunikation mellem Debitor(kunde)kortet og kalenderoversigten. 
            Tryk på kunden og se hele historikken og tilføj nemt nye møder og aftaler, som vil vise sig i kalenderoversigten.
          </p>
        </div>
      </div>
    </section>

     <section className="crm-grid">
      {gridItems.map((item, index) => (
        <div className="grid-item" key={index}>
          {item.icon}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
 
    

      <section 
        className="form-section"
        id="form-section"
        style={{ backgroundImage: `url(${office})` }}
      >
        <div className="form-background">
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
