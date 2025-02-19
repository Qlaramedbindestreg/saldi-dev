import { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import './Search.scss';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContent, setFilteredContent] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  
  const pageContent = [
    { title: 'Økonomistyring', content: 'Effektiv styring af økonomi og regnskab. Automatiseret fakturering og betalingsopfølgning. Direkte integration med bank for nem afstemning.' },
    { title: 'Lagerstyring', content: 'Optimering af lagerbeholdning og logistik. Effektiv styring af lager og logistik.' },
    { title: 'Sagsstyring', content: 'Håndtering af projekter og sager. Effektiv styring af projekter og ressourcer.' },
    { title: 'Butik & Webshop', content: 'Integrerede løsninger til butik og online salg. Centraliseret opbevaring og deling af dokumenter.' },
    { title: 'CRM', content: 'Administrer kundeinformation og relationer. Integration med andre systemer via API.' },
    { title: 'Rapportering', content: 'Avanceret rapportering og dataanalyse. Adgang til systemet via mobilapp.' },
    { title: 'Support', content: 'Adgang til kundesupport og hjælp.' },
    { title: 'Kontakt', content: 'Telefon: +45 90 22 08. Mail: info@saldi.dk. Adresse: Østergade 24B, 3200 Helsinge. CVR-nr 20756438.' },
    { title: 'Løsninger', content: 'Økonomistyring, Lagerstyring, Sagsstyring, Butik & Webshop.' },
    { title: 'Forside', content: 'Velkommen til Saldi. Mere end 300 virksomheder benytter allerede systemet.' },
  ];

  const searchRef = useRef();

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    const filtered = pageContent.filter(section =>
      section.title.toLowerCase().includes(query) || section.content.toLowerCase().includes(query)
    );
    setFilteredContent(filtered);
  };

  // Toggle the search bar visibility
  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  // Close the search bar if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container" onClick={toggleSearchBar}>
      <CiSearch />
      {!showSearchBar && <p>Søg</p>}

      {showSearchBar && (
        <div ref={searchRef} className="search-bar">
          <input 
            type="text" 
            placeholder="Søg" 
            value={searchTerm} 
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      )}

      {showSearchBar && searchTerm && (
        <div className="search-results">
          {filteredContent.length > 0 ? (
            filteredContent.map((section, index) => (
              <div key={index} className="search-result-item">
                <h3>{section.title}</h3>
                <p>{section.content}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
}
