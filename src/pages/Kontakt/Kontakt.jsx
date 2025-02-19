import { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

import './Kontakt.scss';

export default function Kontakt() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Tak for din besked! Vi vender tilbage hurtigst muligt.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="kontakt-container">
            <div className="kontakt-info">
                <h1>Kontakt information</h1>
                <p>Du er altid velkommen til at ringe eller skrive til os, hvis du har spørgsmål til vores systemer, løsninger og muligheder for din virksomhed.</p>
                
                <h2>Telefon</h2>
                <a href="tel:+45902208">+45 90 22 08</a>
                <p>Vi svarer på telefon hele året, mandag til fredag, 09-16.</p>
                <br />
                <p>I tilfælde af akutte situationer er telefonen åben uden for den normale telefontid.</p>
                
                <h2>Mail</h2>
                <a href="mailto:info@saldi.dk">info@saldi.dk</a>
                <br />
                <p>Vi svarer altid inden for 24 timer.</p>

                <h2>Adresse</h2>
                <p>Østergade 24b, 3200 Helsinge</p>
            </div>

            <div className="kontakt-form">
                <h2>Send os en besked</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        
                        <input 
                            type="text" 
                            name="name" 
                            placeholder='Navn'
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>

                    <label>
                        
                        <input 
                            type="number" 
                            name="telefon" 
                            placeholder='Telefon'
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>

                    <label>
                        
                        <input 
                            type="email" 
                            name="email" 
                            placeholder='Email'
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>

                    <label>
                        <textarea 
                            name="message" 
                            placeholder='Besked'
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                        ></textarea>
                    </label>

                    <button type="submit">Send besked

                    <MdKeyboardArrowRight />

                    </button>
                </form>
            </div>
        </div>
    );
}
