import { useState, useEffect, useRef } from "react";
import { CiLogin } from "react-icons/ci";
import './LogIn.scss';

export default function LogIn() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); 
      }
    };

    if (dropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside); 
    };
  }, [dropdownOpen]);

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
      setDropdownOpen(false); 
    } catch (err) {
      console.error("Error fetching data: ", err.message);
      alert("There was an error fetching the data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <CiLogin />
      <p
        onClick={(e) => {
          e.stopPropagation(); 
          setDropdownOpen((prev) => !prev); 
        }}
        style={{ cursor: "pointer" }}
      >
        Log Ind
      </p>

      {dropdownOpen && (
        <div className="log-in-dropdown-menu" ref={dropdownRef}>
          <h3>Klik på din type af regnskab for at logge ind</h3>

          <div className="scrollable-buttons">
            <button onClick={() => fetchData("https://undefined-link.com/api/login?product=SaldiERP")} className="scrollable-button">
              Saldi ERP
            </button>
            <button onClick={() => fetchData("https://undefined-link.com/api/login?product=SaldiProfessionel")} className="scrollable-button">
              Saldi Professionel
            </button>
            <button onClick={() => fetchData("https://undefined-link.com/api/login?product=SaldiPOS")} className="scrollable-button">
              Saldi POS
            </button>

            <button onClick={() => fetchData("https://undefined-link.com/api/login?product=Mini")} className="scrollable-button">
              Mini
            </button>
            <button onClick={() => fetchData("https://undefined-link.com/api/login?product=IDA")} className="scrollable-button">
              IDA
            </button>
            <button onClick={() => fetchData("https://undefined-link.com/api/login?product=Rotary")} className="scrollable-button">
              Rotary
            </button>
            <button onClick={() => fetchData("https://undefined-link.com/api/login?product=Demo")} className="scrollable-button">
              Demo
            </button>
            <button onClick={() => fetchData("https://undefined-link.com/api/login?product=Stillads")} className="scrollable-button">
              Stillads
            </button>
          </div>
        </div>
      )}


      {loading && <p>Loading...</p>}
    </div>
  );
}
