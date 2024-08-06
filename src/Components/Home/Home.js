import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import whatsapp1 from "../Assets/whatsapp1.png";
import '../Home/Home.css';
import sanas from '../Assets/sanas.png';
const Home = () => {
  return (
    <div>
        
    <div className='wid' >
    <Navbar expand="lg" className="p-3 mb-2 bg-danger text-white " >
      <Container className=" d-flex justify-content-center">
        <Navbar.Brand href="#">
        <div >
              <div className="kilo1">
                <a
                  className="kilo23"
                  href="https://wa.me/923443223750?text=Hello How can I help you ?"
                  target="blank"
                >
                  <div className="kilo1">
                    {" "}
                    <div>
                      {" "}
                      <img className="whatsap" src={whatsapp1} alt="aa" />
                    </div>
                    <div className="jk2">whatsapp</div>
                  </div>
                </a>
              </div>
             </div>
        </Navbar.Brand>
      </Container>
    </Navbar>   
    </div>

    </div>
  )
}

export default Home
