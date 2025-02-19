import peter from '../../assets/peter.png'; 
import './Om.scss';
export default function Om() {
    return (
        <>
                    <div className='hvem-er-saldi'>
                    <div className="left-column">
                    <img src={peter} alt="peter" />
                 <p>Peter Holten Rude, indehaver og stifter</p>
                    </div>
                  <div className="right-column">
                  <h1>Hvem er Saldi</h1>
                   <p>
                   Peter Holten Rude etablerede i 2002 Saldi som Danmarks første online regnskabssystem som et modsvar til offline-løsninger som C5 og Navision.
                  <br />
                  <br />
                  I dag byder Saldi ind med en fusion af ekspertise inden for IT, udvikling og økonomi. Vi tilpasser og skræddersyer software, så det passer i overensstemmelse med virksomhedernes digitaliseringsinitiativer. Som en forretningskritisk partner er Saldi med til at optimere vores kunders og partneres håndtering af økonomien gennem en holistisk og forretningsorienteret tilgang.
                  <br />
                  <br />
                   I dag er Saldi stadig 100 % dansk-ejet som et af de eneste regnskabsprogrammer og ERP-systemer tilbage på det danske marked.
                    <br />
                     <br />
                    Udover bæredygtig software yder vi en indsats for social bæredygtighed gennem finansiering af projekter til drikkevandstilførsel og strøm i nogle af de fattigste områder i Vestafrika. Samtidig har vi i over 15 år leveret økonomisystemer til Rotary Danmarks Hjælpefond.
                     </p>
                    </div>
                 </div>
        </>
    )
}