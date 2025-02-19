import './ButikWebshop.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import office from '../../assets/office.jpg'; 
import till from '../../assets/till.jpg'; 
import Counter from '../../components/Counter/Counter';
import { FaChartLine, FaCloud, FaCheckCircle, FaWarehouse, FaChartBar, FaFileInvoiceDollar, FaCreditCard, FaUsers } from "react-icons/fa";

import butikWebshopBaggrund from '../../assets/butik-webshop.jpg';
import visa from  '../../assets/Visa-logo.png'; 
import mastercard from  '../../assets/Mastercard-Logo.png'; 
import maestro from  '../../assets/Maestro-logo.svg'; 
import applePay from  '../../assets/Apple-Pay.png'; 
import googlePay from  '../../assets/Google-pay-logo.png'; 
import vippsMP from  '../../assets/Vipps-MobilePay-logo.png'; 
import vibrant from  '../../assets/vibrant.png'; 
import nets from  '../../assets/nets.png'; 
import verifone from  '../../assets/verifone.png'; 
import flatpay from  '../../assets/flatpay.png'; 


import dandomain from  '../../assets/dandomain.png'; 
import woocommerce from  '../../assets/woocommerce.png'; 
import magento from  '../../assets/magento.png'; 





export default function ButikWebshop() {
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
  const features = [
    { icon: <FaWarehouse />, title: "Lagerstyring", description: "Hold styr på hvornår du løber tør for vare" },
    { icon: <FaChartBar />, title: "Salg's rapporter", description: "Få overblik på hvad der sælger bedst" },
    { icon: <FaFileInvoiceDollar />, title: "Automatisk bogføring", description: "Systemet bogfører automatisk dine salg" },
    { icon: <FaCreditCard />, title: "Betalings-opdeling", description: "Del betalinger op på forskellige betalingsmetoder" },
    { icon: <FaUsers />, title: "Personale styring", description: "Hold styr på hvem der sælger hvad i dine kasser" },
  ];

  const paymentMethods = [
    { src: visa, alt: "Visa" },
    { src: mastercard, alt: "Mastercard" },
    { src: maestro, alt: "Maestro" },
    { src: applePay, alt: "Apple Pay" },
    { src: googlePay, alt: "Google Pay" },
  ];

  const paymentProviders = [
    { src: vippsMP, alt: "Vipps MobilePay" },
    { src: vibrant, alt: "Vibrant" },
    { src: nets, alt: "Nets" },
    { src: verifone, alt: "Verifone" },
    { src: flatpay, alt: "Flatpay" },
  ];

  const ecommercePlatforms = [
    { src: dandomain, alt: "Dandomain" },
    { src: woocommerce, alt: "WooCommerce" },
    { src: magento, alt: "Magento" },
  ];


  return (
 <>
    <div className="butik-webshop-container">
       
    <div className='webshop-header'>
          <div className="webshop-overlay"></div>
          <div className="webshop-content-box">
            <h1>Butikskæder & Webshops</h1>
            <p>
              Strømlin driften med 100% synkroniserede arbejdsprocesser, oplev mere effektivitet og besparelser med vores holistiske POS løsninger til butikskæder. Vores software hjælper din virksomhed at holde overblik på alle indtægtskilder for at skabe gennemsigtige og robuste konkurrencemæssige fordele.
            </p>
            <a href="#form-section"><button>Book en demo og kom godt i gang</button></a>
          </div>
        </div>
            
      <section className="butik-module">
        <h2>Forbind fysisk butikssalg, E-salg, lager & regnskab i ét system</h2>
        <p>
          Reducér omkostninger med automatiseret synkronisering mellem hver afdeling i realtid. POS-løsninger designet til styring af butikskæder, lager, regnskab & webshop på én samlet platform.
        </p>
      </section>

      <h2 className="web-modules-heading">Moduler til Butik & Webshop</h2>
      <section className="web-modules-grid">
        <div className="web-module-card">
        <FaChartLine className='web-icon'/>
          <h3>Lager -og regnskabsstatus</h3>
          <p>Gør dine medarbejdere dygtigere med Saldi-POS og opnå strategiske fordele ved at have alt aktivitet på tværs af driftsprocesser synkroniseret i ét system.</p>
        </div>
        <div className="web-module-card">
           < FaCloud className='web-icon' />
          <h3>Cloud-baseret</h3>
          <p>Med vores cloud-baserede software kan du altid tilgå alle afdelinger uanset tid og sted, blot du har adgang til internettet, så kan du altid følge med i driften.</p>
        </div>
       </section>


       

<div className="butik-module-card">
  <img src={till} alt="till" className="web-module-image" />
  <div className="web-container">
  <h3>Fleksible løsninger</h3>
  <ul>
    <li><FaCheckCircle className="check-icon" /> Tilgængeligt på alt hardware</li>
    <li><FaCheckCircle className="check-icon" /> Mobile betalingsløsninger</li>
    <li><FaCheckCircle className="check-icon" /> In-store fakturabetaling</li>
    <li><FaCheckCircle className="check-icon" /> ERP & lagersynkronisering</li>
    <li><FaCheckCircle className="check-icon" /> Synkroniseret regnskab</li>
    <li><FaCheckCircle className="check-icon" /> Integrationer til diverse webshops</li>
  </ul>
  </div>
</div>

<section className="feature-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>

    <div className="payment-section">
      <h1>Betalings-partnere</h1>
      <div className="payment-logos">
        {paymentMethods.map((method, index) => (
          <img key={index} src={method.src} alt={method.alt} className="payment-logo" />
        ))}
      </div>


      <div className="payment-logos">
        {paymentProviders.map((provider, index) => (
          <img key={index} src={provider.src} alt={provider.alt} className="payment-logo" />
        ))}
      </div>

      <h1>Webshop integrationer</h1>
      <div className="payment-logos">
        {ecommercePlatforms.map((platform, index) => (
          <img key={index} src={platform.src} alt={platform.alt} className="payment-logo" />
          
        ))}
        <p>
        Kontakt os hvis du eftersøger
        <br /> en integration som ikke 
        <br />
        står på listen.</p>
      </div>
    </div>




      <section className="form-section" style={{ backgroundImage: `url(${office})` }}>
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
    </div>

 <Counter />
 </>
  );
}
