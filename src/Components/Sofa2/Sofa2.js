import React from 'react'
import goldchair from '../Assets/goldchair.jpeg';
import sofa1 from '../Assets/sofa1.png';
import sofa2 from '../Assets/sofa2.png';
import sofa3 from '../Assets/sofa3.png';
import sofa5 from '../Assets/sofa5.png';
import '../Sofa2/Sofa2.css';
const Sofa2 = () => {
  return (
    <div className='navbar74'>
    
      <div>
      <img  className='navbar66' src={sofa2} />
        <h5> Aristocrat<br/>2-seater sofa</h5>
        <p>
        
           Aristrocrat 3 Seater Sofa designed for
            <br/>
           Weddings,speacial Events<br/>Cermonies,and Gala Nights and.<br/>
           for all kind of Parties
        </p>
      </div>
      <div>
      <img   className='navbar67'  src={sofa1}/>
        <h5>Aristocrat<br/>3-seater sofa</h5>
        <p>Aristocrat three Seater Sofa Designed<br/>
         for Weddings,speacial Events <br/>
          Cermonies,and Gala Nights and for<br/>
        all kind of Parties.
        </p>
      </div>
      <div>
      <img className='navbars42'  src={sofa3} />
        <h5>Aristocrat<br/>1-seater sofa</h5>
          
        <p>Aristocrat 1 seater sofa designed for  <br/>
        Weddings,speacial Events, <br/>
         Cermonies,and Gala Nights and <br/>
         for all kind of Parties.
        </p>
      </div>
      <div>
      <img  className='navbar43'   src={sofa5} />
        <h5>Eleganza <br/>2 Seater sofa Green </h5>
        
        <p>Eleganza Sofa is part of the furniture <br/>
        collection and is ideal for any event, <br/>
        be it indoors or outdoors.It can also <br/>
        provide mood lighting for night parties.
        </p>
      </div>
    </div>
  )
}

export default Sofa2;