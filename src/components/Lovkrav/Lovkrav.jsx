import './Lovkrav.scss';
import { FaCircleCheck } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";


export default function Lovkrav() {
    return (
        <>
        <h1 className='lovkrav-h1'>Vi sørger for at din virksomhed altid overholder nye lovkrav når du benytter vores finansielle software</h1>
        <div className='lovkrav-wrapper'>
         <div className='check-wrapper'>
         <div className='check'>
         <FaCircleCheck className='little-check'/>
         <p>Godkendt & Certificeret</p>
         </div>

         <div className='check'>
         <FaCircleCheck className='little-check'/>
         <p>5 års backup af lovpligtig data</p>
         </div>

         <div className='check'>
         <FaCircleCheck className='little-check'/>
         <p>Automatisk sikkerhedskopiering</p>
         </div>

         <div className='check'>
         <FaCircleCheck className='little-check'/>
         <p>Digital bilagshåndtering</p>
         </div>

         </div>

         <IoShieldCheckmarkOutline size={200} className='big-check'/>
        </div>
        </>
    )
}