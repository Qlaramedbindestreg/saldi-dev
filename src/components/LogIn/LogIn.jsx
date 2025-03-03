import { CiLogin } from "react-icons/ci";
import './LogIn.scss';

export default function LogIn() {
  return (
    <>
      <div className="login-container">
        <CiLogin />
        {/* Open the newTab component in a new tab */}
        <a href="/newTab" target="_blank" style={{ cursor: "pointer" }}>
          Log Ind
        </a>
      </div>
    </>
  );
}
