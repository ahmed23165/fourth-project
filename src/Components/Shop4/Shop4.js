import React from 'react'
import dine1 from '../Assets/dine1.png';
import dine2 from '../Assets/dine2.jpg';
import dine3 from '../Assets/dine3.png';
import dine4 from '../Assets/dine3.png';

import '../Shop4/Shop4.css';
const Shop4 = () => {
  return (
    <div className='navbars96'>
    
      <div>
      <img  className='navbar106' src={dine1} />
        <h5>Wooden Dining<br/> Table</h5>
        <p>Wooden Dining Table is available for
            <br/>
        rent in Saudia-Arabia and this is best
            <br/>
           outdoor
           parties and for events.
        </p>
      </div>
      <div>
      <img   className='navbar107'  src={dine2}/>
        <h5>Scandinavian Table</h5><br/>
        <p>Scandinavian Table is available for <br/>
        rent.This is specially designed for<br/>
        Weddings,Special Events,Gala Nights<br/>
        and for all kinds of
        Parties.
        </p>
      </div>
      <div>
      <img className='navbar108'  src={dine3} />
        <h5>Avalon Rectangular<br/>Gold dining Table</h5>
          
        <p>The Avalon Rectangular Dining Table<br/>
        is available for rent within Saudia-Arabia<br/>
        This elegant piece of furniture is <br/>
        perfect for gala dinners,weddings and<br/>
        eloborate event set ups
        </p>
      </div>
      <div>
      <img  className='navbar109'   src={dine4} />
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

export default Shop4;