import React from 'react'

import wooden from '../Assets/wooden.png';
import gold from '../Assets/gold.png';
import cocktail from '../Assets/cocktail.jpg';
import drum from '../Assets/drum.jpg';
import '../Navbar3/Navbar3.css';
const Shop2 = () => {
  return (
    <div className='navbar74'>
    
      <div>
      <img  className='navbar66' src={cocktail} />
        <h5>Cocktail Table<br/>Black</h5>
        <p>Cocktail Table is specially designed
            <br/>
            for outdoor parties,cocktail parties
            <br/>
           weddings for all kind of <br/>Parties.
        </p>
      </div>
      <div>
      <img   className='navbar67'  src={drum}/>
        <h5>Cocktail Drum<br/>Black</h5>
        <p>Collins Drum Cocktail Table is <br/>
        available for rent in Saudia-Arabia <br/>
        It is perfect for cocktail parties<br/>
        indoor and outdoor events.
        </p>
      </div>
      <div>
      <img className='navbar68'  src={gold} />
        <h5>Antique Gold<br/>Cocktail Table</h5>
        
        <p>This cocktail table is available for <br/>
        rent in Saudia-Arabia.This is Best for  <br/>
        outdoor and indoor events.
        </p>
      </div>
      <div>
      <img  className='navbar70'   src={wooden} />
        <h5>Wooden Barrel<br/>Cocktail Table</h5>
        
        <p>Wooden Barrel Cocktail Table is <br/>
        available for rent in Saudia-Arabia <br/>
        This is best for outdoor and indoor<br/>
        events.
        </p>
      </div>
    </div>
  )
}

export default Shop2;

