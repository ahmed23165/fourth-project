import React from 'react'
import '../Navbar7/Navbar7.css';
import chair13 from '../Assets/chair13.png';
import chair10 from  '../Assets/chair10.jpg';
const Navbar7 = () => {
  return (
    <div className='navbar94'>
    
      <div>
      <img  className='navbar96' src={chair13} />
        <h5>Golden Chiviari<br/> Chair</h5><br/>
        <p>Golden Chiviari Chair is great for any
            <br/>
            event but is especially perfect for
            <br/>
             weddings,sit-down dinners, formal<br/>
             This is available for rent in Saudia-Arabia.
        </p>
      </div>
      <div>
      <img   className='navbar97'  src={chair10}/>
        <h5>Black Pauchard<br/> Chair</h5>
        <br/>
        <p>Pauchard Chair is great for any event but <br/>
        but is especially perfect for weddings, <br/>
        down dinners, and formal parties<br/>
        This is available for Saudia-Arabia.
        </p>
      </div>
     
      
    </div>
  )
}

export default Navbar7;
