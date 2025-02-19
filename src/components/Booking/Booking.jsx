import { useState } from "react";
import "./Booking.scss";

export default function Booking() {
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
        const mailtoLink = `mailto:info@saldi.dk?subject=Mødebooking&body=Navn: ${name}%0AEmail: ${email}%0ATlf. nummer: ${number}%0AFirma: ${firma}%0A%0AMeddelelse: ${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className='booking-container'>
            <h1>Book et møde med en af vores konsulenter og find ud af hvordan Saldi kan hjælpe din virksomhed.</h1>
            <button onClick={() => setShowForm(!showForm)}>{showForm ? "Luk" : "Book et møde"}</button>
            {showForm && (
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
                            placeholder="Noget vi skal vide? - her kan du skrive en kort introduktion, eller gøre os opmærksom på specifikke ønsker"
                            value={formData.message}
                            onChange={handleInputChange} 
                        />
                    </label>
                    <button type='submit'>Send</button>
                </form>
            )}
        </div>
    );
}
