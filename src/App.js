import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
import Header from './components/Header';
import SearchIcon from '@mui/icons-material/Search';
import Country from './components/Country';
import CountryDetail from './components/CountryDetail';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);

  const countriesInputRef = useRef();
  const regionRef = useRef();

  const noCountry = countries.message || countries.status;

  const navigate = useNavigate();

  const switchMode = () => {
    setDarkMode(prevState => !prevState)
  }

  const fetchDate = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();

    if (data.status === 404) {
      setCountries([]);
      return;
    }

    setCountries(data);
  }

  console.log(countries);

  useEffect(() => {
    try {
      fetchDate()
    } catch (error) {
      alert("Wrong API or Internet, please enter F5 to try again!")
    }
  }, []);

  const searchCountry = () => {
    const searchInput = countriesInputRef.current.value;

    if (searchInput.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(`https://restcountries.com/v2/name/${searchInput}`);
        const data = await response.json();
        setCountries(data);
      }
      try {
        fetchSearch()
      }catch (error) {
        alert("Can't to find this country, please try again!");
      }
    } else {
      fetchDate();
    }
  }

  const selectRegion = () => {
    const selectValue = regionRef.current.value;

    if (selectValue.trim()) {
      const fetchSelect = async () => {
        const response = await fetch(`https://restcountries.com/v2/regionalbloc/${selectValue}`);
        const data = await response.json();
        setCountries(data);
      }
      try {
        fetchSelect()
      }catch (error) {
        alert("Can't to find, please try again!");
      }
    } else {
      fetchDate();
    }
  }

  const showDetails = (code) => {
    navigate(`/${code}`);
  }

  return (
    <>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Header onClick={switchMode} darkMode={darkMode}/>
        <Routes>
          <Route
            path='/front-end-2'
            element={
            <div className={`app-body ${darkMode ? 'dark-mode' : ''}`}>
              <div className='input'>
                <div className={`search-input ${darkMode ? 'dark-mode' : ''}`}>
                  <SearchIcon />
                  <input type='text' placeholder='Search for a country...' ref={countriesInputRef} onChange={searchCountry}/>
                </div>
                <div className={`select-region ${darkMode ? 'dark-mode' : ''}`}>
                  <select ref={regionRef} onChange={selectRegion}>
                    <option>All</option>
                    <option value="AU">Africa</option>
                    <option value="USAN">America</option>
                    <option value="ASEAN">Asia</option>
                    <option value="EU">Europe</option>
                    <option value="SAARC">Oceania</option>
                  </select>
                </div>
              </div>

              <div className='countries'>
                {
                  (!noCountry ? (
                    countries.map((country) => (
                      <Country 
                        darkMode={darkMode}
                        key={country.numericCode}
                        code={country.numericCode}
                        flag={country.flag}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        showDetails={showDetails}
                      />
                    )) 
                  ): <p>No country! Please try again!</p>)
                }
              </div>
            </div>
          } />
          <Route path='/:codeName' element={ <CountryDetail darkMode={darkMode} countries={countries}/> }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
