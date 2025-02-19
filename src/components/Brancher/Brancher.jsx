import './Brancher.scss';
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaLink, FaShoppingCart, FaWarehouse } from "react-icons/fa";




export default function Brancher() {

    return (
    <>
          <div className='titel' >
            <div className='line'></div>
        <h1>Vi leverer blandt andet til</h1>
        </div>
  
    <div className='branche-wrappper'>
     <div className="branche-container"> 
     <FaWarehouse size={30}/>
     <br />
         Grossister
         </div>
     <div className="branche-container"> 
     <BiSolidShoppingBags size={30}/>
     <br />
        Fysiske butikker
        </div>
     <div className="branche-container"> 
        <FaLink size={30}/>
        <br />
        B2C & B2B
        </div>
     <div className="branche-container"> 
       <FaShoppingCart size={30}/>
       <br />
        Webshops 
        </div>
    </div>
    </>
    )
}