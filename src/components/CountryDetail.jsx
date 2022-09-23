import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function CountryDetail({ darkMode, countries }) {
    const params = useParams();
    const navigate = useNavigate();

    let name;
    let flag;
    let nativeName;
    let population;
    let region;
    let subregion;
    let capital;
    let topLevelDomain;
    let currencies = [];
    let languages = [];
    let borders = [];

    countries.forEach(country => {
        if (country.numericCode === params.codeName) {
            name = country.name;
            flag = country.flag;
            nativeName = country.nativeName;
            population = country.population;
            region = country.region;
            subregion = country.subregion;
            capital = country.capital;
            topLevelDomain = country.topLevelDomain;

            country.currencies?.forEach(currency => {
                currencies.push(currency.name)
            })

            country.languages?.forEach(language => {
                currencies.push(language.name)
            })

            country.borders?.forEach(border => {
                borders.push(border.name)
            })
        }
    })

    const goBack = () => {
        navigate("/");
    }

    return (
        <div className='country-details'>
            <button className={`back ${darkMode ? 'dark-mode' : ''}`} onClick={goBack}>
                <p>Back</p>
            </button>

            <div className="country-details-body">
                <div className="img-container">
                    <img src={flag} alt="" />
                </div>

                <div className="infor">
                    <h2>{name}</h2>
                    <div className="infor-container">
                        <div className="left-infor">
                            <p>Native name:{" "}
                                <span className={`value ${darkMode ? 'dark-mode' : ''}`}>{nativeName}</span>
                            </p>
                            <p>Population:{" "}
                                <span className={`value ${darkMode ? 'dark-mode' : ''}`}>{population}</span>
                            </p>
                            <p>Region:{" "}
                                <span className={`value ${darkMode ? 'dark-mode' : ''}`}>{region}</span>
                            </p>
                            <p>Sub region:{" "}
                                <span className={`value ${darkMode ? 'dark-mode' : ''}`}>{subregion}</span>
                            </p>
                        </div>
                        <div className="right-infor">
                            <p>Capital:{" "}
                                <span className={`value ${darkMode ? 'dark-mode' : ''}`}>{capital}</span>
                            </p>
                            <p>Top-level Domain:{" "}
                                <span className={`value ${darkMode ? 'dark-mode' : ''}`}>{topLevelDomain}</span>
                            </p>
                            <p>Currencies:{" "}
                                {currencies.map((currency) => {
                                    if (currencies.indexOf(currencies) !== (currencies.length - 1)) {
                                        return (
                                            <span className={`value ${darkMode ? 'dark-mode' : ''}`}>
                                                {" "}
                                                {currency}
                                            </span>
                                        )
                                    } else {
                                        return (
                                            <span className={`value ${darkMode ? 'dark-mode' : ''}`}>
                                                {" "}
                                                {currency}
                                            </span>
                                        )
                                    }
                                })}
                            </p>
                            <p>Languages:
                                {languages.map((language) => {
                                    if (languages.indexOf(language) !== (currencies.length - 1)) {
                                        return (
                                            <span className={`value ${darkMode ? 'dark-mode' : ''}`}>
                                                {" "}
                                                {language}
                                            </span>
                                        )
                                    } else {
                                        return (
                                            <span className={`value ${darkMode ? 'dark-mode' : ''}`}>
                                                {" "}
                                                {language}
                                            </span>
                                        )
                                    }
                                })}
                            </p>
                        </div>
                    </div>
                    {/* Border Countries:
                    <div className={`border-country ${darkMode ? 'dark-mode' : ''}`}>
                        <p>Test</p>
                    </div>
                    <div className={`border-country ${darkMode ? 'dark-mode' : ''}`}>
                        <p>Test</p>
                    </div>
                    <div className={`border-country ${darkMode ? 'dark-mode' : ''}`}>
                        <p>Test</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CountryDetail