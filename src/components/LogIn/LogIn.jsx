import { CiLogin } from "react-icons/ci";
import './LogIn.scss';

export default function LogIn() {

  const fetchData = async () => {
    try {
      const response = await fetch("https://undefined-link.com/api/login"); 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      
    
      const newTab = window.open("/new-page", "_blank");
      

      localStorage.setItem("fetchedData", JSON.stringify(result));
      
    } catch (err) {
      console.error("Error fetching data: ", err.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <CiLogin />
        <p onClick={fetchData} style={{ cursor: 'pointer' }}>
          Log Ind
        </p>
      </div>
    </>
  );
}
