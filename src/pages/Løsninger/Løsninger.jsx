import "./Løsninger.scss";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import vippsMP from  '../../assets/Vipps-MobilePay-logo.png'; 
import visa from  '../../assets/Visa-logo.png'; 
import mastercard from  '../../assets/Mastercard-logo.png'; 
import maestro from  '../../assets/Maestro-logo.svg'; 
import applePay from  '../../assets/Apple-Pay.png'; 
import googlePay from  '../../assets/Google-pay-logo.png'; 


export default function Løsninger() {
    const features = {
        Finans: [
          'Automatiseret udligning af åbne poster',
          'Import af bankposteringer',
          'Dynamisk overførsel mellem regnskabsår',
          'Enkel og overskuelig momsrapport',
          'Eksport til excel',
          'Enkel tilbageførsel af fejlposteringer',
          'EU-moms',
          'Eksport og import af kontoplan',
          'Fremmed valuta',
          'Integration med DocuBizz',
          'Kontrolspor med fritekstsøgning',
          'Månedsopdelt regnskabsoversigt med “drill down”',
          'Provisionsberegning',
          'Rapport for kontokort, resultat og balance',
          'Simulering af kontobevægelser inden bogføring',
          'Ubegrænset antal afdelinger',
          'Ubegrænset antal momsgrupper',
          'Bilag i skyen',
        ],
        Debitorstyring: [
          'Abonnementsfakturering',
          'Automatisk beregning af dækningsbidrag (DB) & dækningsgrad (DG) ved ordreoprettelse',
          'Automatisk rykkerfunktion i tre niveauer',
          'Batchhåndtering',
          'Elektronisk fakturering (OIOUBL/PEPPOL)',
          'Fakturering i flere sprog & valuta',
          'Formulareditor med tilknytning af eget logo',
          'Integration med PBS Betalingsservice',
          'Leverandørservice',
          'Oversigt over åbne poster inddelt i intervaller',
          'Kundehistorik (CRM)',
          'Kundeoprettelse fra ordre',
          'Massefakturering',
          'Provisionsberegning',
          'Serienumre',
          'Tilbud, ordrebekræftelse, følgeseddel, faktura og kreditnota',
          'Top 100-liste',
          'Vareoprettelse fra ordre',
          'Debitor ipad',
        ],
        Kreditorstyring: [
          'Batch-håndtering',
          'Betalingsfil til bank',
          'Indkøb i DKK & fremmed valuta',
          'Indkøbsforslag, ordre, varemodtagelse, leverandørfaktura og kreditnota',
          'Oversigt over åbne poster inddelt i intervaller',
          'Kontokort med udligning og valgfri tolerance for øredifferencer',
          'Leverandøroprettelse fra ordre',
          'Serienumre',
          'Ubegrænset antal leverandørgrupper',
          'Vareoprettelse fra ordre',
        ],
        Kassesystem: [
          'Kort, kontant & Mobilepay betaling',
          'Automatisk bogføring',
          'Salgsrapporter',
        ],
        Projektregnskab: [
          'Kontering på medarbejder, afdeling og projekt',
          'Medarbejderregnskab',
          'Projektregnskab',
          'Provisionsberegning',
          'Ubegrænset antal afdelinger',
          'Ubegrænset antal projekter',
        ],
        Lagerstyring: [
          'Automatisk genbestilling',
          'Batch-håndtering',
          'DB/DG-rapport',
          'Flere enheder pr. vare',
          'Flere lagre',
          'Flere leverandører pr. vare',
          'Styklister',
          'Fritekstsøgning på tekst og varenummer',
          'Ubegrænset antal varegrupper',
          'Varespor',
          'Varestatistik',
          'Lager beholdnings advarsler',
        ],
      };
      const maxLength = Math.max(
        ...Object.values(features).map((categoryFeatures) => categoryFeatures.length)
      );

      const [formData, setFormData] = useState({
        navn: '',
        telefon: '',
        email: '',
        besked: ''
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
        const { navn, telefon, email, besked } = formData;
        const mailtoLink = `mailto:support@saldi.dk?subject=Kontaktformular&body=Navn: ${navn}%0AEmail: ${email}%0ATlf. nummer: ${telefon}%0A%0ABesked: ${besked}`;
        window.location.href = mailtoLink;
    };

    return (
        <>
        <div className="loesninger-container">
        <h1>Online regnskabsprogram & ERP</h1>
        <div className="loesninger-grid">
            <div className="plan">
                <h2>Mini</h2>
                <div className="price">59,-</div>
                <div className="currency">dkk/md</div>
                <p>Til foreninger og selskabe med behov for at kunne bogføre og fakturere</p>
                <button className="opret-btn">Opret</button>
            </div>
            <div className="plan">
                <h2>Basis</h2>
                <div className="price">149,-</div>
                <div className="currency">dkk/md</div>
                <p>Til små virksomheder med op til 2000 posteringer/årligt</p>
                <button className="opret-btn">Opret</button>
            </div>
            <div className="plan popular">
                <h2>Professionel</h2>
                <div className="price">349,-</div>
                <div className="currency">dkk/md</div>
                <p>Komplet regnskabspakke, med alle funktioner & personlig-support</p>
                <button className="opret-btn">Opret</button>
                <div className="popular-tag">Mest populære</div>
            </div>
            <div className="plan erp">
                <h2>Skræddersyet/ERP</h2>
                <div className="price">Efter aftale</div>
                <p>Til virksomheder med behov for yderligere tilføjelser og funktioner</p>
                <button className="kontakt-btn">Kontakt</button>
            </div>
        </div>
    
        <div className="pricing-info">
            <p>Alle priser er u. moms</p>
            <p>Alle pakker er godkendt. jf. bogføringsloven: fob664947</p>
        </div>
        </div>

        <div className="table-container">
        <h2>Funktionsoversigt</h2>
            <table>
                <thead>
                    <tr>
                        <th>Funktioner</th>
                        <th>Gratis</th>
                        <th>Basis</th>
                        <th>Professionel</th>
                        <th>Skræddersyet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Posteringer</td>
                        <td>500</td>
                        <td>2000</td>
                        <td>5000</td>
                        <td>Ubegrænset</td>
                    </tr>
                    <tr className="tabel-pris">
                        <td></td>
                        <td>0,- kr</td>
                        <td>149,- kr</td>
                        <td>349,- kr</td>
                        <td>Efter aftale</td>
                    </tr>
                    <tr>
                        <td>Bogføring & fakturering</td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Moms</td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Kontokort</td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Import og eksport af data</td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Mail support</td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Telefon support</td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Bilagsscan</td>
                        <td className="empty"></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Business inteligence modul</td>
                        <td className="empty"></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Lagerstyring</td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>POS-software</td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Webshop integration</td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Projekt-regnskab</td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Ordrestyrings modul</td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                    <tr>
                        <td>Kommissionssalg</td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="checkmark"><IoMdCheckmark /></td>
                    </tr>
                </tbody>
            </table>
    </div>

    <div className="features">
      <h1>Alle funktioner</h1>
      <table>
        <thead>
       
          <tr>
            <th>Finans</th>
            <th>Debitorstyring</th>
            <th>Kreditorstyring</th>
          </tr>
        </thead>
        <tbody>

          {Array.from({ length: maxLength }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td>{features.Finans[rowIndex] || ''}</td>
              <td>{features.Debitorstyring[rowIndex] || ''}</td>
              <td>{features.Kreditorstyring[rowIndex] || ''}</td>
            </tr>
          ))}

          <tr>
            <th>Kassesystem (POS)</th>
            <th>Projektregnskab</th>
            <th>Lagerstyring</th>
          </tr>

          {Array.from({ length: maxLength }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td>{features.Kassesystem[rowIndex] || ''}</td>
              <td>{features.Projektregnskab[rowIndex] || ''}</td>
              <td>{features.Lagerstyring[rowIndex] || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <section className="payment-methods">
  <div className="payment-methods-header">
    <h1>Faktureringsmetoder</h1>
    <h2>Vi har integreret vores regnskab til at være brugbart med de fleste moderne muligheder for at modtage betaling</h2>
  </div>


    <div className="mobile-payment-method">
      <img src={vippsMP} alt="Vipps" />

    </div>
  <div className="payment-methods-container">
    <div className="payment-method">
      <img src={visa} alt="Visa" />
      <p>Visa</p>
    </div>
    <div className="payment-method">
      <img src={mastercard} alt="Mastercard" />
      <p>Mastercard</p>
    </div>
    <div className="payment-method">
      <img src={maestro} alt="Mastercard Maestro" />
      <p>Mastercard Maestro</p>
    </div>
    <div className="payment-method">
      <img src={applePay} alt="Apple Pay" />
      <p>Apple Pay</p>
    </div>
    <div className="payment-method">
      <img src={googlePay} alt="Google Pay" />
      <p>Google Pay</p>
    </div>
  </div>
</section>
<section className="contact-form-container">
  <h2>Vil du vide mere?</h2>
  <p>Send en besked, så kontakter vi dig for en personlig samtale</p>

  <form className='contact-form' onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label>
                        <input 
                            type='text' 
                            name='navn' 
                            placeholder="Navn" 
                            value={formData.navn}
                            onChange={handleInputChange} 
                            required 
                        />
                    </label>
                    <label>
                        <input 
                            type='tel' 
                            name='telefon' 
                            placeholder="Dit Telefonnumer" 
                            value={formData.telefon}
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
                </div>

                <label>
                    <textarea 
                        name='besked' 
                        placeholder="Besked" 
                        value={formData.besked}
                        onChange={handleInputChange} 
                        required
                    />
                </label>
                <button type='submit'>Send besked
                <MdKeyboardArrowRight />
                </button>
            </form>
        
</section>

  
    </>
    );
}
