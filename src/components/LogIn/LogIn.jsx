import { CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import './LogIn.scss';

export default function LogIn() {
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch("https://undefined-link.com/api/login"); 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();


      localStorage.setItem("fetchedData", JSON.stringify(result));

 
      navigate("/newTab", { target: "_blank" }); 
    } catch (err) {
      console.error("Error fetching data: ", err.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <CiLogin />
        <p onClick={fetchData} style={{ cursor: "pointer" }}>
          Log Ind
        </p>
      </div>
    </>
  );
}
