import React from 'react'
import chair8 from '../Assets/chair8.png';
import chair22 from '../Assets/chair22.jpg';
import chair11 from '../Assets/chair11.jpg';
import chair7 from '../Assets/chair7.png';
import '../Navbar5/Navbar5.css';
const Navbar5 = () => {
  return (
    <div>
    <div className='navs33'>
      <div className='navs22'>
      <img  className='navs1' src={chair22} />
      <h6>Acrylic Chiviari Chair</h6>
      <br/>
    <p>Acrylic Chiviari Chair is great for any<br/>
     event but is especially perfect for<br/>
     weddings, sit-down dinners, formal parties, and banquets.<br/>
    Golden Chiviari is beautiful and classic furniture that<br/>
      adds elegance and sophistication to any setup.<br/>
      This is available for rent in Saudia Arabia.</p>
     
      </div>
      <div className='navs22' ><img className='navs31'  src={chair11} />
      <h6>Banquet Chair</h6>
      <br/>
      <p>The  banquet Chair is available for rent<br/>
      in Saudia Arabia.This chair is perfect for gala <br/>
      nights,Weddings,Cocktail parties.Join <br/>
      Sana Event Services for Online Booking</p>
      </div>
      <div  className='navs22'><img  className='navs1'  src={chair7}/>
      <h6>White  Dior Chair</h6>
      <br/>
      <p>White dior chair is a speacil chair that,<br/>
      makes you more stylish and attractive<br/>
      This is available for rent in Saudia Arabia.</p>
      </div>
      <div  className='navs28'><img className='navs34' src={chair8} />
      <h6>Dior Chair</h6>
      <br/>
      <p>The Silver chiviary Chair is great for<br/>
      any event but is especially perfect for<br/>
      weddings,sit-down dinners,formal parties and banquets<br/>
      This is available for rent in Saudia Arabia.</p>
      
      
      </div>
    </div>
  </div>
  )
}

export default Navbar5;
