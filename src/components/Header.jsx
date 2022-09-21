import React from 'react'
import NightlightIcon from '@mui/icons-material/Nightlight';

function Header({ onClick, darkMode }) {
    return (
        <>
            <div className={`header ${darkMode ? 'dark-mode' : ''}`}>
                <div className='header-container'>
                    <h2 className='logo'>Where in the world?</h2>
                    <div className="switch-mode" onClick={onClick}>
                        <NightlightIcon />
                        <h3>Dark mode</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header