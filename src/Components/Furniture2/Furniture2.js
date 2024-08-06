import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div style={{marginTop: '8rem'}}>
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'skyblue' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' >
          Sana Company for Event Managment
        </a>
      </div>
    </MDBFooter>
    </div>
  );
}