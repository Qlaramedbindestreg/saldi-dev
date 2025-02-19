import { useState } from "react";
import { FaFileInvoice, FaCogs, FaBoxOpen } from "react-icons/fa";
import './Vejledninger.scss';

export default function Vejledninger() {
  const [searchTerm, setSearchTerm] = useState("");

  const instructions = [
    {
      title: 'Regnskabssystemet',
      icon: <FaFileInvoice />,
      content: [
        'Sådan oprettes en faktura',
        'Sådan oprettes en debitor',
        'Sådan håndtere du dine bilag',
        'Sådan får du bogført',
        'Sådan ændres regnskabsår'
      ]
    },
    {
      title: 'Lager og salg',
      icon: <FaBoxOpen />,
      content: [
        'Sådan laves en salgsrapport',
        'Sådan indstiller du dine oversigtstal',
        'Sådan oprettes varer & priser',
        'Sådan styres lager',
        'Sådan opstiller du styklister'
      ]
    },
    {
      title: 'Point of Sale',
      icon: <FaCogs />,
      content: [
        'Sådan opstilles dine POS-menuer',
        'Sådan tilføjes/byttes vareknapper',
        'Sådan opstilles bordplan'
      ]
    }
  ];

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
  };

  return (
    <div className="vejledninger-container">
      <h1>Se hvordan du benytter systemet</h1>
      <p>(siden er under konstruktion)</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Find præcist det du leder efter"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="instructions">
        {instructions.map((section, index) => {
          // Filter content based on the search term
          const filteredContent = section.content.filter(item => 
            item.toLowerCase().includes(searchTerm)
          );
          
          return (
            <div key={index} className="instruction-box">
              <div className="section-title">
                <div className="icon">{section.icon}</div>
                <h2>{section.title}</h2>
              </div>

              <div className="instruction-list">
                {filteredContent.length > 0 ? (
                  filteredContent.map((item, idx) => (
                    <div key={idx} className="instruction-item">
                      <p>{item}</p>
                    </div>
                  ))
                ) : (
                  <p>No matching results</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
