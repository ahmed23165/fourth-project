import React from 'react'
import goldchair from '../Assets/goldchair.jpeg';
import chair9 from '../Assets/chair9.jpg';
import chair22 from '../Assets/chair22.jpg';
import chair11 from '../Assets/chair11.jpg';
import chair6 from '../Assets/chair6.png';
import '../Navbar3/Navbar3.css';
const Navbar3 = () => {
  return (
    <div className='navbar74'>
    
      <div>
      <img  className='navbar66' src={chair6} />
        <h5>Round Back Chair<br/> Blush Pink</h5>
        <p>This is perfect for any kind of event,
            <br/>
            parties and cocktail parties.Book
            <br/>
           your order now with Sana Events<br/>Services.
        </p>
      </div>
      <div>
      <img   className='navbar67'  src={chair9}/>
        <h5>Banquet Chair  Stretched<br/>Cover-Black</h5>
        <p>This Chair is great for any event but <br/>
        is especially perfect for weddings,sit- <br/>
        down dinners, and formal parties<br/>
        This is available for Saudia-Arabia.
        </p>
      </div>
      <div>
      <img className='navbar68'  src={chair22} />
        <h5>Acrylic Chiviari Chair</h5>
          <br/>
        <p>Acrylic Chiviari Chair is great for <br/>
        any event but is especially perfect for <br/>
        weddings and formal parties.This<br/>
         is available for rent in Saudia-Arabia.
        </p>
      </div>
      <div>
      <img  className='navbar70'   src={chair11} />
        <h5>Banquet Chair</h5>
        <br/>
        <p>The banquet chair is available for rent <br/>
        in UAE.This chair is perfect for gala <br/>
        nights,Weddings,Cocktail parties.This <br/>
        is available for rent in Saudia-Arabia.
        </p>
      </div>
    </div>
  )
}

export default Navbar3;
