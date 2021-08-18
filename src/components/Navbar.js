import React from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';



function Navbar() {
    return (
        <div className="navbar__container">
            <div className="navbar__logo">
               <h1>Quick Cash 💸💸💸</h1>            
            </div>
            <div className="navbar__sreach">
            <input className="searchInput" type="text" />
                <SearchIcon className="navbar__searchIcon"/>            
            </div>
            <div className="navbar__options">
            <span className="navbar__optionLineOne">Option 1</span>
            <span className="navbar__optionLineTwo">Option 2</span>
            <span className="navbar__optionLineThree">Option 3</span>
            <span className="navbar__optionLineFour">Option 4</span>
           
            </div>
        </div>
    )
}

export default Navbar


