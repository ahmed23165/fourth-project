import React from 'react'
import goldchair from '../Assets/goldchair.jpeg';
import sofa7 from '../Assets/sofa7.png';
import sofa9 from '../Assets/sofa9.png';
import sofa6 from '../Assets/sofa6.png';
import sofa12 from '../Assets/sofa12.png';
import '../Sofa3/Sofa3.css';

const Sofa3 = () => {
  return (
    <div className='navbar74'>
    
      <div>
      <img  className='navbar66' src={sofa7} />
        <h5>Eleganza 3Seater<br/>sofa Grey</h5>
        <p>
        Eleganza Sofa is part of the furniture
            <br/>
            collection and is ideal for any event,<br/>be it indoors or outdoors.It can also<br/>
            provide mood lighting for night parties.
        </p>
      </div>
      <div>
      <img   className='navbar67'  src={sofa9}/>
        <h5>Eleganza 1Seater<br/>sofa Grey</h5>
        <p>Eleganza sofa is part of the furniture<br/>
         collection and is ideal for any event, <br/>
        be it indoors or outdoors.It can also<br/>
        provide mood lighting for night parties.
        </p>
      </div>
      <div>
      <img className='navbars422'  src={sofa6} />
        <h5>Eleganza 1Seater <br/>sofa Green</h5>
          
        <p>Eleganza sofa is part of the furniture <br/>
         collection and is ideal for any event, <br/>
         be it indoors or outdoors.It can also <br/>
         provide lighting for night parties.
        </p>
      </div>
      <div>
      <img  className='navbars423'   src={sofa12} />
        <h5>White1<br/>Seater sofa</h5>
        
        <p>White Sofa is part of the furniture <br/>
        collection and is ideal for any event, <br/>
        be it indoors or outdoors.It can also <br/>
        provide mood lighting for night parties.
        </p>
      </div>
    </div>
  )
}

export default Sofa3;