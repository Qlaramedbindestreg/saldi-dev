import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LogIn.scss';

export default function NewTab() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    try {
      setLoading(true); 
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      localStorage.setItem("fetchedData", JSON.stringify(result));

    
      alert("Data fetched successfully!");
    } catch (err) {
      console.error("Error fetching data: ", err.message);
      alert("There was an error fetching the data.");
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div className="new-tab">

      <h2>Klik på din type af regnskab for at logge ind</h2>
      <div className="button-container">
      <button onClick={() => fetchData("https://undefined-link.com/api/login?product=SaldiERP")} className="login-btn">
        Saldi ERP
      </button>
      
      <button onClick={() => fetchData("https://undefined-link.com/api/login?product=SaldiProfessionel")} className="login-btn">
        Saldi Professionel
      </button>
      
      <button onClick={() => fetchData("https://undefined-link.com/api/login?product=SaldiPOS")} className="login-btn">
        Saldi POS
      </button>

    
      {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}
