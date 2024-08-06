import React from 'react'
import goldchair from '../Assets/goldchair.jpeg';
import chair7 from '../Assets/chair7.png';
import chair8 from '../Assets/chair8.png';
import chair15 from '../Assets/chair15.png';
import chair24 from '../Assets/chair24.jpg';
import '../Navbar4/Navbar4.css';
const Navbar4 = () => {
  return (
    <div className='navbar84'>
    
      <div>
      <img  className='navbar86' src={chair7} />
        <h5>White Dior Chair </h5>
        <br/>
        <p>White dior chair is a speacial chair that
            <br/>
            makes your party more stylish and
            <br/>
           attractive.This is available for rent<br/>
           in the Saudia-Arabia.
        </p>
      </div>
      <div>
      <img   className='navbar87'  src={chair8}/>
        <h5>Dior Chair</h5>
        <br/>
        <p>This Chair is great for any event but <br/>
        is especially perfect for weddings,sit- <br/>
        down dinners, and formal parties<br/>
        This is available for Saudia-Arabia.
        </p>
      </div>
      <div>
      <img className='navbar88'  src={chair15} />
        <h5>Round Back Chair <br/>Emerald Green</h5>
          
        <p>Acrylic Chiviari Chair is great for <br/>
        any event but is especially perfect for <br/>
        weddings and formal parties.This<br/>
         is available for rent in Saudia-Arabia.
        </p>
      </div>
      <div>
      <img  className='navbar89'   src={chair24} />
        <h5>White Chiviari<br/> Chair</h5>
        
        <p>The banquet chair is available for rent <br/>
        in UAE.This chair is perfect for gala <br/>
        nights,Weddings,Cocktail parties.This <br/>
        is available for rent in Saudia-Arabia.
        </p>
      </div>
    </div>
  )
}

export default Navbar4;

