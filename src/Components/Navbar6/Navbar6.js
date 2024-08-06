import React from 'react'
import goldchair from '../Assets/goldchair.jpeg';
import chair14 from '../Assets/chair14.jpg';
import chair12 from '../Assets/chair12.jpg';
import chair16 from '../Assets/chair16.jpg';
import chair24 from '../Assets/chair24.jpg';
import '../Navbar6/Navbar6.css';
const Navbar6 = () => {
  return (
    <div className='navbar94'>
    
      <div>
      <img  className='navbar96' src={goldchair} />
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
      <img   className='navbar97'  src={chair12}/>
        <h5>Black Pauchard<br/> Chair</h5>
        <br/>
        <p>Pauchard Chair is great for any event but <br/>
        but is especially perfect for weddings, <br/>
        down dinners, and formal parties<br/>
        This is available for Saudia-Arabia.
        </p>
      </div>
      <div>
      <img className='navbar98'  src={chair16} />
        <h5>Business Chair<br/> White</h5>
          <br/>
        <p>Scandinavian Chair is a speacial chair<br/>
        that makes your party more stylish<br/>
        and attractive. <br/>
         is available for rent in Saudia-Arabia.
        </p>
      </div>
      <div>
      <img  className='navbar99'   src={chair14} />
        <h5>Ghost Chair<br/> With Arm</h5>
        <br/>
        <p>The Ghost Chair is greact for any <br/>
        event but is especially perfect for <br/>
        nights,Weddings,Cocktail parties.Thi s <br/>
        is available for rent in Saudia-Arabia.
        </p>
      </div>
    </div>
  )
}

export default Navbar6;