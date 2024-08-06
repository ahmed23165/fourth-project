import React from 'react'
import stool1 from '../Assets/stool1.jpg';
import stool2 from '../Assets/stool2.jpg';
import stool3 from '../Assets/stool3.png';
import stool4 from '../Assets/stool4.jpg';
import '../Navbar3/Navbar3.css';
const Furniture1 = () => {
  return (
    <div className='navbar74'>
    
      <div>
      <img  className='navbar66' src={stool4} />
        <h5>White Metal<br/>Stool</h5>
        <p>It is perfect for exhibitions,outdoor
            <br/>
        and indoor events with its glossy
            <br/>
        finish and sleek metal frame<br/>
        Pauchard Bar Stool is available <br/>
        for rent in Saudia-Arabia.
        </p>
      </div>
      <div>
      <img   className='navbar67'  src={stool2}/>
        <h5>White Bar<br/>Stool With Backrest</h5>
        <p>It is perfect for exhibitions,outdoor <br/>
        and indoor events with its glossy <br/>
        finish and sleek metal frame.<br/>
        This is available for Saudia-Arabia.
        </p>
      </div>
      <div>
      <img className='navbar68'  src={stool3} />
        <h5>Black Metal Stool</h5>
          <br/>
          <p>It is perfect for exhibitions,outdoor <br/>
        and indoor events with its glossy <br/>
        finish and sleek metal frame.<br/>
        This is available for Saudia-Arabia.
        </p>
      </div>
      <div>
      <img  className='navbar70'   src={stool1} />
        <h5>Black Bar Stool<br/>With Backrest</h5>
        
        <p>It is perfect for exhibitions,outdoor <br/>
        and indoor events with its glossy <br/>
        finish and sleek metal frame.<br/>
        This is available for Saudia-Arabia.
        </p>
      </div>
    </div>
  )
}

export default Furniture1;