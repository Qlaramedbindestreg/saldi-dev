import './Brancher.scss';
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaLink, 
    FaShoppingCart, 
    FaWarehouse } 
from "react-icons/fa";
import React, { useState } from 'react';


export default function Brancher() {

        const [showMore, setShowMore] = useState(false);
      
        const initialBranches = [
          { icon: <FaWarehouse size={30} />, label: 'Grossister' },
          { icon: <BiSolidShoppingBags size={30} />, label: 'Fysiske butikker' },
          { icon: <FaLink size={30} />, label: 'B2C & B2B' },
          { icon: <FaShoppingCart size={30} />, label: 'Webshops' },
        ];
      
        const additionalBranches = [
          { icon: <FaWarehouse size={30} />, label: 'Branche' },
          { icon: <BiSolidShoppingBags size={30} />, label: 'Branche' },
          { icon: <FaLink size={30} />, label: 'Branche' },
          { icon: <FaShoppingCart size={30} />, label: 'Branche' },
        ];
      
        return (
          <>
            <div className='titel'>
              <div className='line'></div>
              <h1>Vi leverer blandt andet til</h1>
            </div>
      
            <div className='branche-wrapper'> 
              {initialBranches.map((branch, index) => (
                <div className='branche-container' key={index}>
                  {branch.icon}
                  <br />
                  {branch.label}
                </div>
              ))}
      
              {showMore &&
                additionalBranches.map((branch, index) => (
                  <div className='branche-container' key={index + initialBranches.length}>
                    {branch.icon}
                    <br />
                    {branch.label}
                  </div>
                ))}
            </div>
      
            <div>
              <button
                onClick={() => setShowMore(!showMore)}
                className='branche-button'
              >
                {showMore ? 'Vis færre...' : 'Vis flere...'}
              </button>
            </div>
          </>
        );
}
    