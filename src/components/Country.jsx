import React from 'react'

function Country({ darkMode, flag, name, population, region, capital, showDetails, code }) {
    const showDetailsHandler = () => {
        showDetails(code);
    }

    return (
        <div className={`country ${darkMode ? 'dark-mode' : ''}`} onClick={showDetailsHandler}>
            <div className="flag-container">
                <img src={flag} alt={name} />
            </div>
            <div className="details">
                <h3 className="name">{name}</h3>
                <p>Population:
                    <span className={`value ${darkMode ? 'dark-mode' : ''}`}>{population}</span>
                </p>
                <p>Region:
                    <span className={`value ${darkMode ? 'dark-mode' : ''}`}>{region}</span>
                </p>
                <p>Capital:
                    <span className={`value ${darkMode ? 'dark-mode' : ''}`}>{capital}</span>
                </p>
            </div>
        </div>
    )
}

export default Country