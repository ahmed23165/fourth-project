import React from 'react'
import noble from '../Assets/noble.jpeg';
import noble1 from '../Assets/noble1.jpg';
import noble2 from '../Assets/noble2.jpg';
import noble3 from '../Assets/noble3.jpg';

import '../Shop3/Shop3.css';
const Shop3 = () => {
  return (
    <div className='navbars96'>
    
      <div>
      <img  className='navbar106' src={noble1} />
        <h5>Rectangular Table <br/> Black Skirting</h5>
        <p>Rectangular Dinning Table With White
            <br/>
            Skirting Cover is available for rent in
            <br/>
           Saudia-Arabia.This is Best for outdoor<br/>
           parties and for events.
        </p>
      </div>
      <div>
      <img   className='navbar107'  src={noble2}/>
        <h5>Round Table<br/>Black</h5>
        <p>6FT Round Dining Table With Plain <br/>
        Cover is available for rent.This is <br/>
        specially designed for Weddings,Special<br/>
        Events,Gala Nights and for all kinds of<br/>
        Parties.
        </p>
      </div>
      <div>
      <img className='navbar108'  src={noble3} />
        <h5>Round Table<br/>White</h5>
          
        <p>6FT Round Dining Table With White<br/>
        Plain Cover is available for rent.This<br/>
        is specially designed for Weddings, <br/>
        Speacial Events,Ceremonies,and Gala <br/>
        Nights and for all Kinds of Parties.
        </p>
      </div>
      <div>
      <img  className='navbar109'   src={noble} />
        <h5>Rectangular Table<br/>White Skirting</h5>
        
        <p>Rectangular Dining Table With White <br/>
        Skirting Cover is available for rent in <br/>
        Saudia-Arabia.This is Best for outdoor  <br/>
        parties and for events.
        </p>
      </div>
    </div>
  )
}

export default Shop3;
