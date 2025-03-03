import { useState, useEffect, useRef } from "react";
import { CiLogin } from "react-icons/ci";
import './LogIn.scss';

export default function LogIn() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown menu

  // Close the dropdown if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside of the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Add event listener when the dropdown is open
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
      setDropdownOpen(false); // Close dropdown after button click
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
          e.stopPropagation(); // Prevent the click event from propagating
          setDropdownOpen((prev) => !prev); // Toggle the dropdown visibility
        }}
        style={{ cursor: "pointer" }}
      >
        Log Ind
      </p>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="dropdown-menu" ref={dropdownRef}>
          <button onClick={() => fetchData("https://undefined-link.com/api/login?product=SaldiERP")}>
            Saldi ERP
          </button>
          <button onClick={() => fetchData("https://undefined-link.com/api/login?product=SaldiProfessionel")}>
            Saldi Professionel
          </button>
          <button onClick={() => fetchData("https://undefined-link.com/api/login?product=SaldiPOS")}>
            Saldi POS
          </button>
        </div>
      )}

      {/* Loading Message */}
      {loading && <p>Loading...</p>}
    </div>
  );
}
