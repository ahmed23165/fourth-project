import Breadcrumb from 'react-bootstrap/Breadcrumb';
import sanas from '../Assets/sanas.png';
import '../Navbar2/Navbar2.css';
const Navbar2 = () => {
  return (
    <div>
       
    <div  style={{paddingLeft: '40px'}}>
    <Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item >    Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    
   
    </div>
   <div  className='navbar5'>
    <h5>DINING CHAIRS</h5>
    </div> 
    </div>
  );
}

export default Navbar2;
