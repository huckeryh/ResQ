import React from 'react';
import { Link } from 'react-router-dom';

{/*all information needs to be pulled from database for this */}



function Orders3() {
  return (
    <div>
      <button><Link to={'/'}>Return to Tables</Link></button>
      <h2 style={{ textAlign: 'center' }}>Server Name</h2>
      
      <h3 style={{textAlign: 'center' }}>Table 3</h3>
      

      
    </div>
  );
}

export default Orders3;